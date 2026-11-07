// Unit test of the button-name plugin helpers (run: npm run test:ui).
import assert from 'node:assert/strict'
import { labelOf, languageOfPath } from '../src/plugins/ui-names.mjs'
assert.equal(labelOf('ui', 'menu.view', 'en'), 'View')
assert.notEqual(labelOf('ui', 'menu.view', 'fr'), 'View')
assert.throws(() => labelOf('ui', 'no.such.key', 'fr'), /Unknown/)
assert.equal(languageOfPath('/x/src/content/docs/pt-br/a/b.md'), 'pt-BR')
assert.equal(languageOfPath('/x/src/content/docs/a/b.md'), 'en')
console.log('ui-names OK')
