// Remark plugin: turns {ui.key} / {rt.key} in page text into the exact button name of the page's language.
// {ui.…} reads the editor catalog, {rt.…} the game (runtime) catalog. An unknown key stops the build.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const dataDir = fileURLToPath(new URL('../../data/ui/', import.meta.url))
const folderToLanguage = { fr: 'fr', es: 'es', 'pt-br': 'pt-BR', 'zh-cn': 'zh-CN', ru: 'ru', ja: 'ja' }
const cache = {}
const catalog = (kind, language) => (cache[kind + language] ??= JSON.parse(readFileSync(`${dataDir}${kind}-${language}.json`, 'utf8')))
export const MARKER = /\{(ui|rt)\.([A-Za-z0-9_.]+)\}/g
export const languageOfPath = (path) => {
  const match = /\/content\/docs\/([^/]+)\//.exec(path.replace(/\\/g, '/'))
  return (match && folderToLanguage[match[1]]) || 'en'
}
export const labelOf = (marker, key, language) => {
  const kind = marker === 'ui' ? 'editor' : 'runtime'
  const value = catalog(kind, language)[key]
  if (typeof value !== 'string') throw new Error(`Unknown {${marker}.${key}} for ${language}`)
  return value
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
          parts.push({ type: 'strong', children: [{ type: 'text', value: labelOf(match[1], match[2], language) }] })
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
