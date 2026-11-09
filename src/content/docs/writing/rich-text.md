---
title: Styling your text
description: Make words bold, colored, big or shaky, and add pauses and variables to a line of dialogue.
---

You can style any part of a line of dialogue. You write on the game screen or in the **{ui.inspectorTabs.text}** tab, and the text looks as it will in the game.

## Style some words

Select words in a line. A small toolbar appears above them.

![The toolbar above selected words, with bold, italic, the colors, sizes and movements.](/novelworks-docs/screenshots/rich-text-toolbar.png)

| Control | What it does |
|---|---|
| **{ui.richText.bold}** and **{ui.richText.italic}** | Heavier or slanted letters. You can also press `Cmd+B` / `Ctrl+B` and `Cmd+I` / `Ctrl+I`. |
| Five round colors | The colors of your palette (see below). |
| **{ui.richText.customColor}** | Any other color, for this selection only. |
| **{ui.richText.small}** and **{ui.richText.big}** | Smaller or larger letters. Words have one size at a time. |
| **{ui.richText.shake}** and **{ui.richText.wave}** | The letters tremble or ripple in the game. Words have one movement at a time. |
| **{ui.richText.clear}** | Takes every style off the selection. |

Click a style again to take it off.

## Your five colors

The five colors of the toolbar are set once for the whole game: **{ui.topBar.gameUI}**, **{ui.gameUI.dialogueBox}**, **{ui.richText.palette}**.

If you change a color there, every word that uses it changes too. A color picked with **{ui.richText.customColor}** does not follow the palette.

## Insert a pause or a variable

Under the text field in the **{ui.inspectorTabs.text}** tab, the **{ui.richText.insert}** row adds something where your cursor last was.

**{ui.richText.pause}** adds a short wait in the middle of the line. It appears as a small label in the text. It lasts half a second. Click the label to change it, from 0.1 to 5 seconds.

**{ui.richText.variable}** opens the list of your [variables](/novelworks-docs/branching/variables/). In the text you see the variable's name as a small label. In the game the player sees its value. A true or false variable reads **{rt.game.yes}** or **{rt.game.no}**. If you delete the variable, the game shows nothing in its place.

## What the player sees

- The line is typed letter by letter and stops at each pause.
- The first click shows the whole line. The next click moves on.
- Shaking and waving letters keep moving while the line is on screen.
- If the player has asked their system for less motion, the letters do not move.
- The [history](/novelworks-docs/player/history/) and screen readers get the words alone, with no styles.

## In Script mode

In [Script mode](/novelworks-docs/writing/script-mode/), styles are written as tags around the words:

```
Mia : I {b}never{/b} said that.
Mia : It was {color=1}red{/color}, {shake}so red{/shake}.
Mia : Well...{pause} maybe.
Mia : Wait.{pause=2} You have {Affection} points.
```

| Tag | Meaning |
|---|---|
| `{b}` … `{/b}` | Bold |
| `{i}` … `{/i}` | Italic |
| `{color=1}` … `{/color}` | A color of the palette, from 1 to 5. A code such as `{color=#ff0000}` also works. |
| `{small}` … `{/small}`, `{big}` … `{/big}` | Size |
| `{shake}` … `{/shake}`, `{wave}` … `{/wave}` | Movement |
| `{pause}`, `{pause=2}` | A pause of half a second, or of the seconds you give |
| `{Affection}` | The value of the variable with this name |

To write a real `{`, type it twice: `{{`.

The words of the tags follow the language of the editor. A script copied from another language still works.

## Limits

Styles, pauses and variables work in lines of dialogue only. The options of a choice and the name of an ending are plain text.
