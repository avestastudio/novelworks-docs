// After a build: no raw marker, no literal **bold**, no double <strong> may be left in the generated pages.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? (e.name === 'pagefind' ? [] : walk(join(d, e.name))) : e.name === 'index.html' ? [join(d, e.name)] : []))
const errors = []
for (const file of walk('dist')) {
  const text = readFileSync(file, 'utf8')
  if (/\{(?:ui|rt|tx)\.[A-Za-z0-9_.]+\}/.test(text.replace(/<script[\s\S]*?<\/script>/g, ''))) errors.push(`${file}: a {ui./rt./tx.} marker was not replaced`)
  if (/\*\*[^<*\n]{1,120}\*\*/.test(text.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>/g, ''))) errors.push(`${file}: literal **bold** left (bold next to CJK text?)`)
  if (text.includes('<strong><strong>')) errors.push(`${file}: double bold`)
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1 } else console.log('dist OK: no raw marker, no literal bold, no double bold')
