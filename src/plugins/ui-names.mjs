// Remark plugin: turns {ui.key} / {rt.key} in page text into the exact button name of the page's language.
// {ui.…} reads the editor catalog, {rt.…} the game (runtime) catalog. An unknown key stops the build.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const dataDir = fileURLToPath(new URL('../../data/ui/', import.meta.url))
const folderToLanguage = { fr: 'fr', es: 'es', 'pt-br': 'pt-BR', 'zh-cn': 'zh-CN', ru: 'ru', ja: 'ja' }
const cache = {}
const catalog = (kind, language) => (cache[kind + language] ??= JSON.parse(readFileSync(`${dataDir}${kind}-${language}.json`, 'utf8')))
const overlay = JSON.parse(readFileSync(`${dataDir}overlay.json`, 'utf8'))
export const overlayEntry = (key) => (key in overlay && key !== '_note' ? overlay[key] : null)
export const MARKER = /\{(ui|rt)\.([A-Za-z0-9_.]+)\}/g
export const languageOfPath = (path) => {
  const match = /\/content\/docs\/([^/]+)\//.exec(path.replace(/\\/g, '/'))
  return (match && folderToLanguage[match[1]]) || 'en'
}
export const labelOf = (marker, key, language) => {
  const kind = marker === 'ui' ? 'editor' : 'runtime'
  const entry = marker === 'ui' ? overlayEntry(key) : null
  const value = catalog(kind, language)[key] ?? entry?.[language] ?? entry?.en
  if (typeof value !== 'string') throw new Error(`Unknown {${marker}.${key}} for ${language}`)
  // A label with a placeholder ({count}, {scene}…) is shown with … where the value goes; {part1}/{value} are inline
  // fragments of the interface (a number, an icon) and are dropped.
  return value.replace(/\{(?:part1|value)\}/g, '').replace(/\{[A-Za-z0-9_]+\}/g, '…').trim()
}

export default function uiNames() {
  return (tree, file) => { 
    const language = languageOfPath(file.path ?? '')
    const walk = (node) => {
      if (!node.children || node.type === 'code' || node.type === 'inlineCode') return
      node.children = node.children.flatMap((child) => {
        if (child.type !== 'text' || !child.value.includes('{')) { walk(child); return [child] }
        const parts = []
        let last = 0
        for (const match of child.value.matchAll(MARKER)) {
          if (match.index > last) parts.push({ type: 'text', value: child.value.slice(last, match.index) })
          const label = labelOf(match[1], match[2], language)
          // Inside **…** the label is plain text (no double bold); on its own it is bold.
          parts.push(node.type === 'strong' ? { type: 'text', value: label } : { type: 'strong', children: [{ type: 'text', value: label }] })
          last = match.index + match[0].length
        }
        if (!parts.length) return [child]
        if (last < child.value.length) parts.push({ type: 'text', value: child.value.slice(last) })
        return parts
      })
    }
    walk(tree)
  }
}
