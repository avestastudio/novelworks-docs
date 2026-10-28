import { readdir, readFile, stat } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../src/content/docs/', import.meta.url))
const publicRoot = fileURLToPath(new URL('../public/', import.meta.url))
const locales = ['fr', 'es', 'pt-br', 'zh-cn', 'ru']
async function files(folder) {
  const result = []
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name)
    if (entry.isDirectory()) result.push(...await files(path))
    else if (/\.mdx?$/.test(entry.name)) result.push(path)
  }
  return result
}
const all = await files(root)
const english = all.filter((file) => !locales.includes(relative(root, file).split('/')[0]))
const route = (file) => '/novelworks-docs/' + relative(root, file).replace(/(?:^|\/)index\.mdx?$/, '').replace(/\.mdx?$/, '/').replace(/\/+/g, '/')
const routes = new Set(all.map((file) => route(file).replace(/\/$/, '')))
const errors = []
for (const locale of locales) {
  for (const source of english) {
    const target = join(root, locale, relative(root, source))
    if (!all.includes(target)) errors.push(`Missing translation: ${relative(root, target)}`)
    else if ((await readFile(source, 'utf8')) === (await readFile(target, 'utf8'))) errors.push(`Untranslated copy: ${relative(root, target)}`)
  }
  for (const file of all.filter((file) => relative(root, file).startsWith(locale + '/'))) {
    if (!english.includes(join(root, relative(join(root, locale), file)))) errors.push(`No English source: ${relative(root, file)}`)
  }
}
for (const file of all) {
  const text = await readFile(file, 'utf8')
  const name = relative(root, file)
  const locale = locales.find((locale) => name.startsWith(locale + '/'))
  if (!/^---\r?\n/.test(text) || !/^title: .+/m.test(text) || !/^description: .+/m.test(text)) errors.push(`Missing metadata: ${name}`)
  // Images are shared across languages; check their files separately from page routes.
  for (const match of text.matchAll(/!\[[^\]]*\]\((\/novelworks-docs\/[^)\s]*)\)/g)) {
    const link = match[1]
    const asset = join(publicRoot, decodeURIComponent(link.split(/[?#]/)[0].slice('/novelworks-docs/'.length)))
    if (!await stat(asset).then((entry) => entry.isFile()).catch(() => false)) errors.push(`Missing image: ${name} -> ${link}`)
  }
  const withoutImages = text.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  // Markdown links and homepage YAML actions.
  const links = [...withoutImages.matchAll(/\]\((\/novelworks-docs\/[^)\s]*)\)|^\s+link:\s*(\/novelworks-docs\/[^\s]*)/gm)].map((match) => match[1] || match[2])
  for (const link of links) {
    const path = link.split(/[?#]/)[0].replace(/\/$/, '')
    if (!routes.has(path)) errors.push(`Broken link: ${name} -> ${link}`)
    if (locale && !link.startsWith(`/novelworks-docs/${locale}/`)) errors.push(`Link leaves language: ${name} -> ${link}`)
  }
  if (/AI tools were used|No AI-generated content|ai-note/.test(text)) errors.push(`Removed editorial disclosure reappeared: ${name}`)
}
if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`${english.length} English pages; ${locales.length} complete translations (${all.length - english.length} pages). Metadata, internal links and images OK.`)
}
