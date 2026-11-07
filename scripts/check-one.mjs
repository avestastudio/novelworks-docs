// Checks translated pages against the English ones.  Usage: node scripts/check-one.mjs <lang> <slug> [<slug>...]
// lang: fr | es | pt-BR | zh-CN | ru | ja.  Prints problems, exits 1 if any.
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
const [lang, ...slugs] = process.argv.slice(2)
if (!lang || !slugs.length) { console.error('usage: node scripts/check-one.mjs <lang> <slug>...'); process.exit(2) }
const root = fileURLToPath(new URL('../src/content/docs/', import.meta.url)), data = fileURLToPath(new URL('../data/ui/', import.meta.url))
const folder = lang.toLowerCase()
const MARKER = /\{(?:ui|rt|tx)\.[A-Za-z0-9_.]+\}/g
const labels = new Set()
for (const kind of ['editor', 'runtime']) for (const v of Object.values(JSON.parse(readFileSync(`${data}${kind}-${lang}.json`, 'utf8')))) if (typeof v === 'string' && v.trim().length > 2 && !v.includes('{')) labels.add(v.trim())
const skeleton = (text) => {
  const body = text.replace(/^---[\s\S]*?\n---\n/, '')
  const code = [...body.matchAll(/```[\s\S]*?```/g)].map((m) => m[0])
  const noCode = body.replace(/```[\s\S]*?```/g, '')
  return { body: noCode, markers: [...noCode.matchAll(MARKER)].map((m) => m[0]).sort().join(' '), links: [...noCode.matchAll(/\]\(\/novelworks-docs\/(?:(?:fr|es|pt-br|zh-cn|ru|ja)\/)?([^)#\s]*)/g)].map((m) => m[1]).sort().join(' '), code: code.join('\n'), headings: (noCode.match(/^#{2,4} /gm) ?? []).length, rows: (noCode.match(/^\|/gm) ?? []).length, inline: [...noCode.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]).sort().join(' | '),
    inline: [...noCode.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]).sort().join(' | '), items: (noCode.match(/^\s*(?:[-*]|\d+\.) /gm) ?? []).length, images: (noCode.match(/!\[/g) ?? []).length }
}
// Names of keyboard keys, as keyboards of each language label them: never counted as "typed by hand" button names.
const KEYS = new Set('Enter Esc Escape Ctrl Cmd Shift Alt Space Tab Home End Delete Backspace Page Up Down F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Entrée Échap Maj Espace Suppr Retour arrière Début Fin Intro Mayús Espacio Supr Retroceso Inicio Fin Espaço Pausa Пробел Ввод Выход Возврат 回车 空格 删除 退格 スペース 削除 バックスペース エスケープ ホーム エンド ページ 上 下 ou o ou и или または 或 / + et y e'.split(' '))
const isKeys = (t) => t.split(/[+\s/,]+/).filter(Boolean).every((w) => KEYS.has(w) || /^F\d+$/.test(w) || /^\d$/.test(w) || /^[←→↑↓\[\]]$/.test(w))
let bad = 0
for (const slug of slugs) {
  const en = `${root}${slug}.md`, tr = `${root}${folder}/${slug}.md`
  if (!existsSync(tr)) { console.log(`${slug}: MISSING FILE ${tr}`); bad++; continue }
  const enText = readFileSync(en, 'utf8'), trText = readFileSync(tr, 'utf8')
  const a = skeleton(enText), b = skeleton(trText), errs = []
  for (const k of ['markers', 'links', 'code', 'inline', 'headings', 'rows', 'items', 'images']) if (a[k] !== b[k]) {
    if (typeof a[k] === 'number') errs.push(`${k} differ (English ${a[k]} vs ${b[k]})`)
    else if (k === 'markers' || k === 'links') { const A = a[k].split(' ').filter(Boolean), B = b[k].split(' ').filter(Boolean), cnt = (arr, x) => arr.filter((y) => y === x).length; const diff = [...new Set([...A, ...B])].filter((x) => cnt(A, x) !== cnt(B, x)).map((x) => `${x} (English ${cnt(A, x)}, yours ${cnt(B, x)})`); errs.push(`${k} differ: ${diff.join('; ')}`) }
    else errs.push(`${k} differ from the English page`)
  }
  if (!/^title: .+/m.test(trText) || !/^description: .+/m.test(trText)) errs.push('front matter needs title and description')
  const noMarkers = b.body.replace(/\*{0,2}\{(?:ui|rt)\.[^}]+\}\*{0,2}/g, '')
  for (const m of noMarkers.matchAll(/\*\*([^*\n]+)\*\*/g)) if (labels.has(m[1].trim()) && !isKeys(m[1].trim())) errs.push(`"${m[1]}" is a button name typed by hand: use its {ui.…}/{rt.…} marker`)
  for (const m of trText.matchAll(/\]\((\/novelworks-docs\/[^)\s]*)\)/g)) if (!/\/(diagrams|screenshots)\//.test(m[1]) && !m[1].startsWith(`/novelworks-docs/${folder}/`)) errs.push(`link leaves the language: ${m[1]}`)
  if (/\bTODO\b/.test(trText)) errs.push('contains TODO')
  if (errs.length) { bad++; console.log(`${slug}:\n  - ${errs.join('\n  - ')}`) } else console.log(`${slug}: ok`)
}
process.exit(bad ? 1 : 0)
