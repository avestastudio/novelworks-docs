// One-off helper: turns quoted application messages in the English pages into {tx.key} markers (plain text from the
// catalogs, translated per language) and menu names ("File →") into markers. Run with --apply to write.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
const apply = process.argv.includes('--apply')
const langs = ['en', 'fr', 'es', 'pt-BR', 'zh-CN', 'ru', 'ja']
const cat = Object.fromEntries(langs.map((l) => [l, { ...JSON.parse(readFileSync(`data/ui/runtime-${l}.json`, 'utf8')), ...JSON.parse(readFileSync(`data/ui/editor-${l}.json`, 'utf8')) }]))
const byValue = new Map()
for (const [k, v] of Object.entries(cat.en)) if (typeof v === 'string') { const t = v.trim(); if (!byValue.has(t)) byValue.set(t, []); byValue.get(t).push(k) }
const sameEverywhere = (keys) => keys.every((k) => langs.every((l) => (cat[l][k] ?? '').trim() === (cat[langs.find(() => true)][keys[0]] ? (cat[l][keys[0]] ?? '').trim() : '')))
const pickKey = (keys) => {
  const real = keys.filter((k) => !/_[0-9a-f]{6}$/.test(k) || true)
  if (real.length === 1) return real[0]
  // ambiguous: safe only if every candidate reads the same in every language
  const ref = real[0]
  return real.every((k) => langs.every((l) => (cat[l][k] ?? '').trim() === (cat[l][ref] ?? '').trim())) ? ref : null
}
const files = []
const walk = (d) => { for (const e of readdirSync(d, { withFileTypes: true })) { const p = `${d}/${e.name}`; if (e.isDirectory()) { if (!/^(fr|es|pt-br|zh-cn|ru|ja)$/.test(e.name)) walk(p) } else if (e.name.endsWith('.md')) files.push(p) } }
walk('src/content/docs')
const report = {}
const MENU = { File: '{ui.native.menu.file}', Edit: '{ui.native.menu.edit}', View: '{ui.menu.view}', Help: '{ui.native.role.help}', Window: '{ui.native.role.window}' }
let total = 0, skipped = []
for (const file of files) {
  let text = readFileSync(file, 'utf8')
  const head = text.match(/^---[\s\S]*?\n---\n/)?.[0] ?? ''
  let body = text.slice(head.length)
  const parts = body.split(/(```[\s\S]*?```)/)
  for (let i = 0; i < parts.length; i += 2) {
    parts[i] = parts[i].replace(/(\*\*)?\b(File|Edit|View|Help|Window)( → )/g, (m, b, w, arrow) => { (report[file] ??= []).push({ menu: w }); total++; return `${b ?? ''}${MENU[w]}${arrow}` })
    parts[i] = parts[i].replace(/(“|")([^”"\n]{3,200})(”|")/g, (m, o, q, c) => {
      const t = q.trim()
      for (const cand of [t, t.replace(/\.$/, '')]) {
        if (byValue.has(cand) && !/\{/.test(cand)) {
          const key = pickKey(byValue.get(cand))
          if (key) { (report[file] ??= []).push({ quote: t, key }); total++; return `${o}{tx.${key}}${c}` }
          skipped.push(`${file}: "${t}" ambiguous ${byValue.get(cand).slice(0, 3)}`)
        }
      }
      return m
    })
  }
  const out = head + parts.join('')
  if (apply && out !== text) writeFileSync(file, out)
}
writeFileSync(process.env.REPORT ?? '/dev/stdout', '')
console.log(`${total} replacements in ${Object.keys(report).length} files; ${skipped.length} ambiguous quotes left as they are`)
writeFileSync('/tmp/convert-report.json', JSON.stringify({ report, skipped }, null, 1))
