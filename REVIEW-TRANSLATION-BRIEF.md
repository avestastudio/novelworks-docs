# Brief for an independent translation reviewer

You review the translation (not the English) of the NovelWorks end-user documentation in ONE language. You did not write it. Repo: /Users/mac/RiderProjects/test/novelworks-docs-git. Do not run git.

Read first: `TRANSLATION-GUIDE.md`, your language sheet `data/translators/<code>.md`, the glossary `data/glossary/<code>.md`. The editor's own words are in `data/ui/editor-<code>.json` and `data/ui/runtime-<code>.json` (the editor and the game in your language).

For every page `src/content/docs/<folder>/<slug>.md` (73 pages; slugs are the paths listed under src/content/docs/ in English) compare with the English `src/content/docs/<slug>.md`, and FIX in place anything that is clearly wrong:
1. Meaning errors, dropped or added information, wrong numbers/limits/keys.
2. English left untranslated in prose (except what must stay: `inline code`, key names like Cmd/Ctrl, product names).
3. Terms inconsistent with the glossary or between pages. **Decide ONE word for each key concept and apply it everywhere in your language**, using the application's own catalog as the authority: scene, moment, character, expression, stage (find the noun the catalog uses, e.g. keys `momentInspector.onStage`, `stage.castTitle`, `stageCharacterInspector.*`, and the sentence "characters stay on stage"), background, images/assets, variable, Score/Fact, item (single/stackable), zone/location, prop, ending, If…/case/otherwise, Script mode, Play mode, Game UI, story map, timeline.
4. Link texts: the text of a link to another page should match the title (front matter `title:`) of the translated target page. Make them consistent (change the link text, or the title if the title is clearly worse; keep titles identical between a page's `title:` and what other pages call it).
5. Unnatural, machine-like or ambiguous sentences a native beginner would trip on. Fix only when clearly bad; do not rewrite for taste.
6. Quoted application messages: they should be the catalog text of your language where one exists (`{tx.…}` markers already do this; for plain quotes look the English up in editor-en.json / runtime-en.json, take the key, use the same key in your language's file).
Rules you must keep: do not change markers `{ui.…}` `{rt.…}` `{tx.…}`, code blocks, `inline code`, links (apart from link text), headings count, table rows, list items, images. After editing a page run `node scripts/check-one.mjs <code> <slug>` until ok. For CJK languages never put `**…**` directly against CJK letters when the bold contains punctuation next to the stars (it will not render): move the punctuation outside the stars; markers need no stars at all.
Final message (short, max 25 lines): the ONE word you chose for each key concept, what kinds of errors you fixed (counts), and a list of remaining doubts that need a human native speaker (term choices, tone).
