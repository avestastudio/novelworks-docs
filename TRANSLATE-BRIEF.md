# Brief for a translation agent

You translate end-user documentation of NovelWorks (a no-code visual-novel editor) from English into one language. Work only in /Users/mac/RiderProjects/test/novelworks-docs-git. Do NOT run git and do NOT touch any file except your target files.

1. Read in full: `TRANSLATION-GUIDE.md`, your language sheet `data/translators/<language code>.md`, and the glossary `data/glossary/<language code>.md`.
2. For each slug in your list: read `src/content/docs/<slug>.md` (English) and write the translation to `src/content/docs/<folder>/<slug>.md` (the folder is in your language sheet). Overwrite any existing file there: it is an old, outdated version, do not reuse it.
3. After each file run `node scripts/check-one.mjs <language code> <slug>` from the repo root and fix everything it reports until it says ok.
4. Final message, short: the files written, and bullets of anything you were unsure about (terms, tone, idioms) for a native reviewer. Do not repeat the page texts.

Special pages: `reference/keyboard-shortcuts` has a generated table between `<!-- shortcuts:start -->` and `<!-- shortcuts:end -->`: keep both comment lines, every {ui.…} marker, every key combination and every `code` word; translate only the headings and the column titles, and keys may use your language's key names. `reference/script-syntax` has a table between `<!-- script-kw:start -->` and `<!-- script-kw:end -->`: keep the two comment lines and the whole table exactly as in English (it lists the script words of every language); translate everything else.
