// Generates the two reference tables that must never drift from the editor:
//  - the shortcuts table of reference/keyboard-shortcuts.md  (from data/shortcuts.json)
//  - the keyword table of reference/script-syntax.md          (from the script.kw.* keys of the 7 catalogs)
// Usage: node scripts/gen-reference.mjs          (rewrites the tables)
//        node scripts/gen-reference.mjs --check  (fails if a page is out of date)
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const read = (p) => readFileSync(root + p, 'utf8')
const shortcuts = JSON.parse(read('data/shortcuts.json'))
const languages = ['en', 'fr', 'es', 'pt-BR', 'zh-CN', 'ru', 'ja']
const catalogs = Object.fromEntries(languages.map((l) => [l, JSON.parse(read(`data/ui/editor-${l}.json`))]))

const KEY = { ArrowLeft: '←', ArrowRight: '→', Enter: 'Enter', Home: 'Home', End: 'End', Delete: 'Delete', Backspace: 'Backspace' }
const keyName = (k) => KEY[k] ?? (k.length === 1 ? k.toUpperCase() : k)
const combo = (c, mac) => {
  const name = keyName(c.key)
  if (mac) return `${c.shift ? '⇧' : ''}${c.mod ? '⌘' : ''}${name}`
  return [c.mod ? 'Ctrl' : null, c.shift ? 'Shift' : null, name].filter(Boolean).join('+')
}
const group = { Project: 'Project', Moments: 'Moments and scenes', Panels: 'Panels', Writing: 'Writing' }
function shortcutsTable() {
  const out = []
  let last = ''
  for (const row of shortcuts) {
    if (row.group !== last) { out.push('', `### ${group[row.group]}`, '', '| Action | Mac | Windows |', '|---|---|---|'); last = row.group }
    const label = `{ui.${row.label}}`
    let mac, win
    if (row.label === 'shortcuts.redo') { mac = '⇧⌘Z'; win = 'Ctrl+Y or Ctrl+Shift+Z' }
    else { mac = row.combos.map((c) => combo(c, true)).join(' / '); win = row.combos.map((c) => combo(c, false)).join(' / ') }
    out.push(`| ${label} | ${mac} | ${win} |`)
  }
  return out.join('\n').trimStart()
}
const IDS = ['background', 'none', 'show', 'hide', 'all', 'left', 'center', 'right', 'free', 'if', 'else', 'and', 'or', 'locked', 'item', 'without', 'give', 'remove', 'silent', 'map', 'end', 'exploration', 'true', 'false']
const MEANING = { background: 'Changes the background', none: 'No background / nobody', show: 'A character appears or changes', hide: 'A character leaves', all: 'Everyone', left: 'Place on the left', center: 'Place in the center', right: 'Place on the right', free: 'Keeps a free placement', if: 'A condition', else: 'Otherwise / else if', and: 'All conditions', or: 'One condition', locked: 'Option greyed out when not available', item: 'Test on an item', without: 'The player does not have the item', give: 'Gives an item', remove: 'Takes an item away', silent: 'No notice', map: 'Opens the map', end: 'An ending', exploration: 'An exploration moment', true: 'Yes (value of a Fact)', false: 'No (value of a Fact)' }
function keywordTable() {
  const head = ['Word for', ...languages.map((l) => ({ en: 'English', fr: 'Français', es: 'Español', 'pt-BR': 'Português (BR)', 'zh-CN': '简体中文', ru: 'Русский', ja: '日本語' })[l])]
  const rows = IDS.map((id) => `| ${MEANING[id]} | ${languages.map((l) => '`' + catalogs[l][`script.kw.${id}`] + '`').join(' | ')} |`)
  return [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows].join('\n')
}
const targets = [
  ['src/content/docs/reference/keyboard-shortcuts.md', 'shortcuts', shortcutsTable],
  ['src/content/docs/reference/script-syntax.md', 'script-kw', keywordTable]
]
export function stale() {
  const bad = []
  for (const [file, name, make] of targets) {
    const text = read(file)
    const re = new RegExp(`(<!-- ${name}:start -->\\n)[\\s\\S]*?(<!-- ${name}:end -->)`)
    if (!re.test(text)) { bad.push(`${file}: markers <!-- ${name}:start/end --> missing`); continue }
    if (text.replace(re, `$1${make()}\n$2`) !== text) bad.push(`${file}: the ${name} table is out of date (run npm run gen:reference)`)
  }
  return bad
}
if (process.argv[1].endsWith('gen-reference.mjs')) {
  if (process.argv.includes('--check')) { const bad = stale(); if (bad.length) { console.error(bad.join('\n')); process.exitCode = 1 } else console.log('reference tables up to date') }
  else for (const [file, name, make] of targets) {
    const text = read(file); const re = new RegExp(`(<!-- ${name}:start -->\\n)[\\s\\S]*?(<!-- ${name}:end -->)`)
    writeFileSync(root + file, text.replace(re, `$1${make().replace(/\$/g, '$$$$')}\n$2`))
  }
}
