---
title: Find and replace
description: Search your whole game, jump to each result and replace text everywhere.
---

Open the search with **{ui.native.menu.edit} → {ui.native.menu.findAndReplace}** or **Cmd+F** / **Ctrl+F**. The search panel replaces the tabs of the left panel, and the cursor is in the first box. Close it with the X, or press **Esc** in one of its boxes. It works in the whole project, never in a single scene.

![The search panel, with the results grouped by scene.](/novelworks-docs/screenshots/search-panel.png)

## What is searched

- dialogue, choice questions and options, ending names and texts;
- exploration zone labels, examine texts and locked texts;
- moment notes;
- scene names and scene summaries;
- character names;
- item names and descriptions.

Not searched: who speaks a line, variable names, picture names and expression names.

## Search

Type in **{ui.searchPanel.find}**. A line below says "3 of 12" or "No results". Under it, results are grouped by scene (then characters, then items). Each row shows where the match is ("Moment 4 · Dialogue", "{tx.characterInspector.characterName}"…) and a short extract with the match highlighted. At most 500 results are listed: type more words to narrow the search.

Two options narrow the search:

- **{ui.searchPanel.matchCase}**: "Aa" is not "aa". Off by default.
- **{ui.searchPanel.wholeWordsOnly}**: "{tx.gameUIPreview.mia}" but not "Miami". Off by default.

The text you type is searched exactly as written. There are no patterns.

Click a result to go to it: the moment, scene, character, item or zone is selected. **Enter** goes to the next result and **Shift+Enter** to the previous one, and the search wraps around.

## Replace

Type the new text in **{ui.searchPanel.replaceWith}**.

- **{ui.searchPanel.replace}** replaces the selected result, then goes to the next one.
- The icon on a result row (**{ui.searchPanel.replaceThisOne}**) replaces only that one, and does not move on.
- **{ui.searchPanel.replaceAll}** replaces every match in your game. NovelWorks first asks you to confirm, telling you how many matches there are, and that you can undo. An empty replacement removes the text.

A replacement is skipped if the text changed since the match was found. Replacing in the whole game is done in a single action, and one **{ui.native.menu.undo}** reverses all of it. A message tells you how many matches were replaced ("31 matches replaced.").
