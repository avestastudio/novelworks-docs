// Copies the editor's text catalogs (7 languages) and extracts the shortcut table, so the docs
// can cite every button by key instead of by hand-typed name.
// Usage: node scripts/sync-ui.mjs [path to the NovelWorks repo]   (default: ../NovelWorks)
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, resolve } from 'node:path'

const editorRepo = resolve(process.argv[2] ?? fileURLToPath(new URL('../../NovelWorks', import.meta.url)))
const out = fileURLToPath(new URL('../data/ui/', import.meta.url))
const languages = ['en', 'fr', 'es', 'pt-BR', 'zh-CN', 'ru', 'ja']
await mkdir(out, { recursive: true })
for (const language of languages) {
  for (const kind of ['editor', 'runtime']) {
    await copyFile(join(editorRepo, 'packages/shared/locales', kind, `${language}.json`), join(out, `${kind}-${language}.json`))
  }
}

// shortcuts.ts: one line per shortcut, `group`, label key, combos, flags.
const source = await readFile(join(editorRepo, 'apps/editor/src/renderer/src/shortcuts.ts'), 'utf8')
const shortcuts = []
for (const line of source.split('\n')) {
  const match = line.match(/group: '(\w+)', get label\(\) \{ return editorText\("([^"]+)"\) \}, combos: (.+?)(?:, (?:whileTyping|menu|info|run)\b.*)? \},?\s*$/)
  if (!match) continue
  const combos = [...match[3].matchAll(/\{ key: '([^']+)'(, mod: true)?(, shift: true)? \}/g)]
    .map((combo) => ({ key: combo[1], mod: !!combo[2], shift: !!combo[3] }))
  shortcuts.push({ group: match[1], label: match[2], combos, raw: match[3] })
}
await writeFile(join(fileURLToPath(new URL('../data/', import.meta.url)), 'shortcuts.json'), JSON.stringify(shortcuts, null, 2) + '\n')
console.log(`Copied ${languages.length * 2} catalogs; extracted ${shortcuts.length} shortcut rows.`)
