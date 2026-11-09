---
title: "Script mode: every line"
description: Every kind of line you can write in Script mode, with examples.
---

In Script mode, **one line is one thing that happens**. The examples use the English words. NovelWorks also understands the words of the other editor languages at the same time (`si`, `décor`, `fin`…). Capital letters, accents and extra spaces do not matter when NovelWorks reads a keyword or a name.

For choices, conditions and jumps, see [Script mode: conditions and choices](/novelworks-docs/writing/script-mode-conditions/).

## Dialogue

```
Mia : Hello!
```

A line `Name : text` is a line of dialogue spoken by that character. The spaces around the colon are optional. If no character has that name, the whole line is read as narration and flagged, and a fix offers to create the character.

### With an expression

```
Mia (happy) : Hello!
```

Mia speaks with the expression "happy". If she is already on stage, she changes expression and stays where she is. If she is not on stage, she appears in the center.

### Text on several lines

```
Mia : I looked for you everywhere.
  I had given up hope.
```

A line indented by two spaces continues the line above, as a new line **inside the same box**.

To format words or add a pause inside a line, see [Rich text](/novelworks-docs/writing/rich-text/).

## Narration

```
It had been raining since morning.
```

Any line that is not another kind of line is narration.

### A line kept exactly as written

```
> background : this is just text
```

A line that starts with `>` is narration **exactly as written**, even if it looks like a command. NovelWorks writes the `>` by itself when narration would otherwise be misread.

## Notes

```
// to re-read
Mia : Hello!
```

A line starting with `//` is a private note attached to the next moment. It is never shown in the game. See [Notes](/novelworks-docs/writing/notes/).

## Stage lines

These lines do not make a moment of their own: they change the stage from the next line on.

```
background : Station
show : Mia happy left
hide : Mia
hide : everyone
```

- **`background : Name`** changes the background to the picture called Name. `background : none`, or nothing after the colon, removes it.
- **`show : Mia happy left`** makes a character appear, or changes their expression or place. After the name you can add an expression, `outfit` followed by an outfit's name (`outfit default` goes back to the first outfit; see [Outfits](/novelworks-docs/writing/outfits/)), and a place: `left`, `center` or `right`, or `placed by hand` to keep a free placement. With no place, a character who is already on stage keeps their place, and a new one goes to the center. A character name may contain spaces.
- **`hide : Mia`** makes a character leave. `hide : everyone`, or nothing after the colon, clears the stage.

A stage line needs a line after it. Otherwise it is flagged.

## Items

```
give : Key
give : Key x3
remove : Key
give : Key, no notice
```

A moment that gives the player an item, or takes it away. `x3` is the quantity (a × sign works too). `take :` means the same as `remove :`. `, no notice` hides the short notice the player normally sees. Items are a feature of your game, see [Inventory](/novelworks-docs/features/inventory/).

## Open the map

```
map
```

A line with only the word `map` opens the map (a Show map moment). See [Map](/novelworks-docs/features/map/).

## Endings

```
end : Good ending
  You understood everything.
```

An ending, with its name after the colon. Indented lines below it are an optional short text. `ending :` works too. A character who happens to be named "End" wins over the keyword, unless you write the command in brackets.

## Exploration moments

```
exploration : 3 zones
```

Script mode shows an exploration moment as one line with the number of zones. You cannot create or edit zones here: an exploration is edited in the inspector, and a moment keeps its zones and props when you edit the rest of the text. A new `exploration` line starts empty. See [Exploration](/novelworks-docs/features/exploration/).

## Headings (whole-game text)

```
# Park
```

In the whole-game text, a line starting with `#` starts a scene with that name.

## Brackets

A command line may be wrapped in square brackets: `[background : Station]` is the same as `background : Station`. Brackets always mean "this is a command". You need them only when a character has the same name as a command: if you have a character called Background, write `[background : Station]` for the command and `Background : Hi!` for the character.

## Quick reference

| You write | What it does |
|---|---|
| `Mia : Hello!` | Mia speaks. |
| `Mia (happy) : Hello!` | Mia speaks with an expression. |
| `It rained.` | Narration. |
| `  more text` | The line goes on in the same box. |
| `> text` | A line kept exactly as written. |
| `// note` | A private note on the next moment. |
| `background : Station` | The background changes from here on. |
| `show : Mia happy left` | A character appears or changes. |
| `hide : Mia` | A character leaves. |
| `give : Key x3` / `remove : Key` | Gives or takes an item. |
| `map` | Opens the map. |
| `end : Good ending` | An ending. |
| `-> Park` | A jump to a scene. |
| `? …`, `- …`, `if …` | Choices and conditions: see the next page. |
| `# Park` | A scene (whole-game text only). |
