# Guide for translating the documentation

Source: the English pages in `src/content/docs/<section>/<page>.md`. Target: the same file under `src/content/docs/<language folder>/` (`fr`, `es`, `pt-br`, `zh-cn`, `ru`, `ja`). Translate the whole page: nothing added, nothing dropped.

## Never change
1. **Markers** `{ui.some.key}` and `{rt.some.key}` stay exactly as in English and in the same order. The site replaces each one with the exact button name **in the page's language**, in bold. Do not translate them, do not put `**` around them (the site already does), do not add a case ending or a suffix to them. Write the sentence so that a name can stand in the nominative form: "the button {ui.x}", "le bouton {ui.x}", "кнопка «{ui.x}»", 「{ui.x}」ボタン.
2. **Code blocks** (``` fences) and `inline code` for keys, files and Script lines: copy them exactly (the Script examples use English words on purpose: the editor reads words of every language).
3. **Keys and shortcuts** such as **Cmd+S**, **Esc**, **Enter**, **F5**, `Delete`: keep the key names; translate the sentence around them.
4. **Front matter**: keep `title:` and `description:`, translate both. If a value contains a colon, put it in double quotes.
5. **Links** `[text](/novelworks-docs/<slug>/)`: translate the text, keep the slug, and add the language folder: `/novelworks-docs/fr/<slug>/` (zh-cn → `/novelworks-docs/zh-cn/<slug>/`, pt-br → `/novelworks-docs/pt-br/<slug>/`). Image links `/novelworks-docs/diagrams/…` and `/novelworks-docs/screenshots/…` stay as they are (alt text is translated).
6. Same structure: same headings in the same order, same tables (same rows and columns), same lists, same number of items. A script checks this.

## Words
Use the glossary of your language in `data/glossary/<language>.md`: those are the words the editor's own buttons use ("scene", "moment", "On stage"…). Names of things players see in a game (Save, Load, History…) are `{rt.…}` markers: do not translate them.

## Tone
Short sentences, plain words, "you" addressed to a beginner who does not code. No jargon without a word of explanation. Keep numbers, limits and percentages exactly. Do not add information, and do not soften warnings.

## What is judged by humans
Keep a list of anything you were unsure about (a term, a tone, an idiom) in your final message: it goes into TRADUCTIONS-A-RELIRE.md.

## Menus and messages quoted from the application (important)
The application is translated too, so **never invent a translation of a menu name or of a message the app shows**:
- **Menu names** such as File, Edit, View, Window, Help and their items (« File → Open Project… »): use exactly the words of `data/glossary/<language>.md` (section "Menu …"), which come from the app's own menus. Write paths with the arrow `→` as in English.
- **Messages and labels quoted in quotation marks** (for example "NovelWorks couldn't reach the activation server." or "Nothing has been said yet."): look up the English text in `data/ui/editor-en.json` or `data/ui/runtime-en.json` to find its key, then copy the text of the **same key** from `data/ui/editor-<language>.json` / `data/ui/runtime-<language>.json` (editor-fr.json, editor-es.json, editor-pt-BR.json, editor-zh-CN.json, editor-ru.json, editor-ja.json). If a quoted text has no key (for example it comes from a page of this site), translate it. Texts with `{name}` placeholders: keep the quote with "…" where the English has a value.
- **The word for the stage** (the screen with the background and characters): use the editor's own words from the glossary (section "On stage"), not an invented one.
