// Documentation checks beyond translations:
//  1. docs-structure.json and the files on disk agree (no orphan page, no missing page, stubs are drafts).
//  2. Every {ui.key} / {rt.key} exists in all 7 catalogs.
//  3. Pages that are written/validated never type a button name by hand (bold text equal to an English label).
//  4. Once the shortcuts page is rewritten, it mentions every shortcut of the editor's table (data/shortcuts.json).
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { MARKER, labelOf, overlayEntry } from '../src/plugins/ui-names.mjs'
import { stale as staleReference } from './gen-reference.mjs'

const root = fileURLToPath(new URL('../src/content/docs/', import.meta.url))
const data = (name) => JSON.parse(awaitedRead(fileURLToPath(new URL('../' + name, import.meta.url))))
const read = (path) => readFile(path, 'utf8')
const languages = ['en', 'fr', 'es', 'pt-BR', 'zh-CN', 'ru', 'ja']
const localeFolders = ['fr', 'es', 'pt-br', 'zh-cn', 'ru', 'ja']
// Bold words that are not editor buttons even if a catalog happens to contain the same word: keyboard keys and
// the buttons of the operating system (macOS / Windows warnings) or plain words.
const SYSTEM_WORDS = new Set(['Enter', 'Esc', 'Ctrl', 'Cmd', 'Shift', 'character', 'Done', 'Open Anyway', 'Run anyway', 'More info', 'Open', 'Left', 'Right', 'Center', 'Bottom', 'Top'])
const errors = []
const pending = new Set()

import { readFileSync } from 'node:fs'
function awaitedRead(path) { return readFileSync(path, 'utf8') }

async function files(folder) {
  const result = []
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name)
    if (entry.isDirectory()) result.push(...await files(path))
    else if (/\.mdx?$/.test(entry.name)) result.push(path)
  }
  return result
}

const structure = data('docs-structure.json')
const pages = structure.sections.flatMap((section) => section.pages)
const all = await files(root)
const english = all.filter((file) => !localeFolders.includes(relative(root, file).split('/')[0]))

// 1. structure
const slugs = new Set(pages.map((page) => page.slug))
if (slugs.size !== pages.length) errors.push('docs-structure.json: duplicate slug')
for (const page of pages) {
  const file = join(root, page.slug + '.md')
  if (!english.includes(file)) { errors.push(`Structure lists a missing page: ${page.slug}`); continue }
  const text = await read(file)
  const draft = /^draft: true$/m.test(text)
  if (page.status === 'stub' && !draft) errors.push(`Stub is not a draft: ${page.slug}`)
  if (page.status !== 'stub' && draft) errors.push(`Page is still a draft but status is ${page.status}: ${page.slug}`)
  if (page.status === 'stub') for (const folder of localeFolders) if (all.includes(join(root, folder, page.slug + '.md'))) errors.push(`Translation of a stub: ${folder}/${page.slug}`)
}
for (const file of english) {
  const name = relative(root, file)
  if (name === 'index.mdx') continue
  if (!slugs.has(name.replace(/\.mdx?$/, ''))) errors.push(`Page not in docs-structure.json: ${name}`)
}

// 2 + 3. button names
const catalogs = Object.fromEntries(languages.map((language) => [language, data(`data/ui/editor-${language}.json`)]))
for (const language of languages) for (const kind of ['editor', 'runtime']) {
  // Plural forms (_one, _few…) legitimately differ between languages; every other key must exist.
  const base = (key) => key.replace(/_(zero|one|two|few|many)$/, '')
  const keys = new Set(Object.keys(data(`data/ui/${kind}-${language}.json`)).map(base))
  const missing = [...new Set(Object.keys(data(`data/ui/${kind}-en.json`)).map(base))].filter((key) => !keys.has(key) && !keys.has(key + '_other'))
  if (missing.length) errors.push(`Catalog ${kind}-${language} lacks ${missing.length} key(s) of English, e.g. ${missing[0]}`)
}
const englishLabels = new Set(Object.values(catalogs.en).filter((value) => typeof value === 'string' && value.length > 2 && !value.includes('{')))
const statusOf = new Map(pages.map((page) => [join(root, page.slug + '.md'), page.status]))
for (const file of all) {
  const name = relative(root, file)
  const text = await read(file)
  const body = text.replace(/```[\s\S]*?```/g, '')
  for (const match of body.matchAll(MARKER)) {
    for (const language of languages) {
      try { labelOf(match[1], match[2], language) } catch { errors.push(`${name}: ${match[0]} does not exist in ${language}`) }
      const entry = match[1] === 'ui' ? overlayEntry(match[2]) : null
      if (entry && !entry[language]) pending.add(`${match[2]} (${language})`)
    }
  }
  const english = join(root, name.split('/').slice(localeFolders.includes(name.split('/')[0]) ? 1 : 0).join('/'))
  // Translations of a rewritten page are stale until D7 retranslates them: the hand-typed check applies to the
  // English page, and to a translation once the manifest lists its language in the page's `translated` array.
  const lang = localeFolders.includes(name.split('/')[0]) ? name.split('/')[0] : null
  const pageEntry = pages.find((page) => join(root, page.slug + '.md') === english)
  if (['written', 'validated'].includes(statusOf.get(english)) && (!lang || (pageEntry?.translated ?? []).includes(lang))) {
    for (const match of body.replace(/\*{0,2}\{(?:ui|rt)\.[^}]+\}\*{0,2}/g, '').matchAll(/\*\*([^*\n]+)\*\*/g)) {
      if (englishLabels.has(match[1].trim()) && !SYSTEM_WORDS.has(match[1].trim())) errors.push(`${name}: "${match[1]}" is a button name typed by hand; use its {ui.key}`)
    }
  }
}

// 3a. A translation marked current (`translated` in docs-structure.json) must have the same skeleton as its English page:
// same {ui.}/{rt.} markers, same links and images, same code blocks, same number of headings, tables and list items.
const skeleton = (text) => {
  const body = text.replace(/^---[\s\S]*?\n---\n/, '')
  const code = [...body.matchAll(/```[\s\S]*?```/g)].map((m) => m[0])
  const noCode = body.replace(/```[\s\S]*?```/g, '')
  return {
    markers: [...noCode.matchAll(MARKER)].map((m) => m[0]).sort().join(' '),
    links: [...noCode.matchAll(/\]\(\/novelworks-docs\/(?:(?:fr|es|pt-br|zh-cn|ru|ja)\/)?([^)#\s]*)/g)].map((m) => m[1]).sort().join(' '),
    code: code.join('\n'),
    headings: (noCode.match(/^#{2,4} /gm) ?? []).length,
    rows: (noCode.match(/^\|/gm) ?? []).length,
    inline: [...noCode.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]).sort().join(' | '),
    items: (noCode.match(/^\s*(?:[-*]|\d+\.) /gm) ?? []).length
  }
}
for (const page of pages) for (const lang of page.translated ?? []) {
  const folder = lang.toLowerCase()
  const en = join(root, page.slug + '.md'), tr = join(root, folder, page.slug + '.md')
  let trText
  try { trText = await read(tr) } catch { errors.push(`${lang}/${page.slug}: listed as translated but the file is missing`); continue }
  const a = skeleton(await read(en)), b = skeleton(trText)
  for (const key of Object.keys(a)) if (a[key] !== b[key]) errors.push(`${lang}/${page.slug}: ${key} differ from the English page (${key === 'code' || key === 'markers' || key === 'links' || key === 'inline' ? 'must be identical' : `${a[key]} vs ${b[key]}`})`)
}

// 3b. A published page never links to a stub (it would be a 404 on the live site).
const stubRoutes = new Set(pages.filter((page) => page.status === 'stub').map((page) => page.slug))
for (const file of all) {
  if (stubRoutes.has(relative(root, file).replace(/\.mdx?$/, '').replace(/^(fr|es|pt-br|zh-cn|ru|ja)\//, ''))) continue
  const text = await read(file)
  for (const match of text.matchAll(/\]\(\/novelworks-docs\/(?:(?:fr|es|pt-br|zh-cn|ru|ja)\/)?([^)#\s]*?)\/?(?:[#?][^)]*)?\)/g)) {
    if (stubRoutes.has(match[1])) errors.push(`${relative(root, file)} links to the unpublished page ${match[1]}`)
  }
}

// 3c. generated reference tables
if (pages.find((page) => page.slug === 'reference/script-syntax')?.status !== 'stub') errors.push(...staleReference())

// 4. shortcuts
const shortcutsPage = pages.find((page) => page.slug === 'reference/keyboard-shortcuts')
if (shortcutsPage && shortcutsPage.status !== 'old') {
  const text = await read(join(root, shortcutsPage.slug + '.md'))
  for (const row of data('data/shortcuts.json')) {
    const exportRow = row.label === 'shortcuts.exportForWebItchIo' // shown with the demo-build name «Export for Web…»
    if (!text.includes(exportRow ? '{ui.native.menu.exportForWeb}' : `{ui.${row.label}}`)) errors.push(`Shortcuts page misses ${row.label}`)
  }
}

if (pending.size) console.warn(`Pending merge (English text used as a fallback): ${[...pending].join(', ')}`)
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1 }
else console.log(`Docs checks OK: ${pages.length} pages in the structure (${pages.filter((p) => p.status === 'stub').length} stubs), button names and shortcuts verified.`)
