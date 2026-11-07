// Checks translated pages against the English ones.  Usage: node scripts/check-one.mjs <lang> <slug> [<slug>...]
// lang: fr | es | pt-BR | zh-CN | ru | ja.  Prints problems, exits 1 if any.
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
const [lang, ...slugs] = process.argv.slice(2)
if (!lang || !slugs.length) { console.error('usage: node scripts/check-one.mjs <lang> <slug>...'); process.exit(2) }
const root = fileURLToPath(new URL('../src/content/docs/', import.meta.url)), data = fileURLToPath(new URL('../data/ui/', import.meta.url))
const folder = lang.toLowerCase()
const MARKER = /\{(?:ui|rt)\.[A-Za-z0-9_.]+\}/g
const labels = new Set()
for (const kind of ['editor', 'runtime']) for (const v of Object.values(JSON.parse(readFileSync(`${data}${kind}-${lang}.json`, 'utf8')))) if (typeof v === 'string' && v.trim().length > 2 && !v.includes('{')) labels.add(v.trim())
const skeleton = (text) => {
  const body = text.replace(/^---[\s\S]*?\n---\n/, '')
  const code = [...body.matchAll(/```[\s\S]*?```/g)].map((m) => m[0])
  const noCode = body.replace(/```[\s\S]*?```/g, '')
  return { body: noCode, markers: [...noCode.matchAll(MARKER)].map((m) => m[0]).sort().join(' '), links: [...noCode.matchAll(/\]\(\/novelworks-docs\/(?:(?:fr|es|pt-br|zh-cn|ru|ja)\/)?([^)#\s]*)/g)].map((m) => m[1]).sort().join(' '), code: code.join('\n'), headings: (noCode.match(/^#{2,4} /gm) ?? []).length, rows: (noCode.match(/^\|/gm) ?? []).length, items: (noCode.match(/^\s*(?:[-*]|\d+\.) /gm) ?? []).length, images: (noCode.match(/!\[/g) ?? []).length }
}
let bad = 0
for (const slug of slugs) {
  const en = `${root}${slug}.md`, tr = `${root}${folder}/${slug}.md`
  if (!existsSync(tr)) { console.log(`${slug}: MISSING FILE ${tr}`); bad++; continue }
  const enText = readFileSync(en, 'utf8'), trText = readFileSync(tr, 'utf8')
  const a = skeleton(enText), b = skeleton(trText), errs = []
  for (const k of ['markers', 'links', 'code', 'headings', 'rows', 'items', 'images']) if (a[k] !== b[k]) errs.push(`${k} differ (English ${typeof a[k] === 'number' ? a[k] : 'x'} vs ${typeof b[k] === 'number' ? b[k] : 'y'})`)
  if (!/^title: .+/m.test(trText) || !/^description: .+/m.test(trText)) errs.push('front matter needs title and description')
  const noMarkers = b.body.replace(/\*{0,2}\{(?:ui|rt)\.[^}]+\}\*{0,2}/g, '')
  for (const m of noMarkers.matchAll(/\*\*([^*\n]+)\*\*/g)) if (labels.has(m[1].trim()) && !['Enter', 'Esc', 'Ctrl', 'Cmd', 'Shift', 'Space'].includes(m[1].trim())) errs.push(`"${m[1]}" is a button name typed by hand: use its {ui.…}/{rt.…} marker`)
  for (const m of trText.matchAll(/\]\((\/novelworks-docs\/[^)\s]*)\)/g)) if (!/\/(diagrams|screenshots)\//.test(m[1]) && !m[1].startsWith(`/novelworks-docs/${folder}/`)) errs.push(`link leaves the language: ${m[1]}`)
  if (/\bTODO\b/.test(trText)) errs.push('contains TODO')
  if (errs.length) { bad++; console.log(`${slug}:\n  - ${errs.join('\n  - ')}`) } else console.log(`${slug}: ok`)
}
process.exit(bad ? 1 : 0)
