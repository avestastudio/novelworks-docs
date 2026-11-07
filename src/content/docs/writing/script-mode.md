---
title: "Script mode: the basics"
description: Write a whole scene as text, like a screenplay, and see it update as you type.
---

**Script mode** shows a scene as text instead of a game screen and a timeline. You write one line per thing that happens, like a screenplay, and the scene updates as you type. Both views edit the same story: you can switch between them at any time.

```
Mia : Hello!
Mia (surprised) : You came back.
background : Station
? What now?
- Talk to her -> Park
- Leave
```

## Switch to Script mode

Above the game screen, the switch **{ui.topBar.storyView}** has two buttons: **{ui.topBar.visual}** (the game screen and the timeline) and **{ui.topBar.script}** (the scene as text). The same switch is in the Script view, so you can go back.

![Script mode: the scene as text on the left, the moment under the cursor on the right.](/novelworks-docs/screenshots/script-mode.png)

## What the text shows

The Script toolbar has a switch **{ui.scriptMode.scope}**:

- **The scene's name**: only the selected scene.
- **{ui.scriptMode.wholeGame}**: every scene of the game in one text, each under a `# Name` heading. You can rename a scene from its heading, add a scene with a new heading, and move lines between scenes. A scene whose heading you delete is kept and moved after the others. The Map's own hidden scene is not included.

A `# heading` in the single-scene view is ignored and flagged.

## The preview

The right side shows the **moment under the cursor**, as it looks in the game ("Moment 3 of 12"). Moving the cursor selects that moment, and selecting a moment elsewhere moves the cursor to its line. A line that continues the one above belongs to the same moment. The preview column can be resized by dragging its edge; double-click the edge to reset it.

Above the preview, the **{ui.branches.whereTitle}** row shows where the selected moment leads, as in the Visual view (see [How a story branches](/novelworks-docs/concepts/how-stories-branch/)). A button hides it.

## Editing

- The text is applied to your project **half a second after you stop typing**, and when you switch scope, play, or leave Script mode.
- A burst of typing is **one undo step**. A pause of about a second starts a new step.
- A moment whose text you did not change is **kept as it was**, with its note, its position on the story map, its read lines and the players' saves. Things the text cannot express (free placement, size, flip, order of characters, exploration zones and props) are kept too, and a moment whose screen did not change keeps it exactly.
- If you change the project somewhere else (the inspector, the timeline, undo), the text updates without moving your cursor. If you are typing at that moment, your text wins.
- Names that do not exist yet never block anything. The moment is created anyway and the line is underlined.

## Help while you type

- Type `/` at the start of a line to pick a command from a list. Names of characters, pictures, scenes, variables and items are suggested as you type, and after `background :`, `show :`, `hide :`, `give`, `remove`, `->`, `+`, `=` and `if` the list holds the matching kind of name.
- **Tab** indents and **Shift+Tab** removes indentation.
- Character names are colored with the character's name color.
- The **?** button (**{ui.scriptMode.help}**) opens a "{tx.script.help.title}" panel with the format.

## Names that do not exist yet

An unknown name is underlined, and a quick fix offers to create it in one click:

- the button **{ui.scriptMode.createMissing_other}** in the toolbar creates every missing character, expression, scene, variable and item named in the text (**Cmd+.** / **Ctrl+.**);
- on a line, the fix offers to create just that one.

A created expression has no picture yet. A variable is created as a Fact when the line compares it or sets it to true or false, otherwise as a Score. An item is stackable when the line has a quantity like `x3`.

## Play from the cursor

**{ui.scriptMode.playFromCursor}** plays the game from the line under the cursor (**Cmd+Enter** / **Ctrl+Enter**).

## Warnings in Script mode

A line NovelWorks wants you to check gets a yellow underline. Point at it to read why. The count of lines to check is shown under the preview.

| Message | When |
|---|---|
| No character is called "…" | A `Name : text` line whose name is not a character. The line is read as narration for now. Fixes: create the character, or "This is the narrator". |
| No expression is called "…" | An expression the character does not have. Fix: create it. |
| No picture is called "…" | A `background :` that matches no picture. Import it, or check the name. |
| No scene is called "…" | A `->` target, option or condition naming no scene. Fix: create it. |
| No variable / item is called "…" | Fix: create it. |
| This line under an option is not an effect | An indented line under an option that is not `+`, `=`, `give` or `remove`. It is ignored. |
| This condition could not be read | An `if` line with a test that is not understood. |
| Use either "{tx.conditionCases.and}" or "or" in one condition | Both in the same condition: only the first kind is used. |
| This line changes the stage, but no line follows it | A `background`, `show` or `hide` with no line after it. |
| This note has no line to belong to | A `//` note at the end with nothing after it. |
| "…" is not on stage here | A `hide :` for a character who is not on stage. |
| "…" is a reserved word | A character named like a command. Rename the character, or write the command in brackets. |
| A # heading only works in the whole-game document | A heading in the single-scene view. It is ignored. |

## Next

- [Script mode: every line](/novelworks-docs/writing/script-mode-lines/)
- [Script mode: conditions and choices](/novelworks-docs/writing/script-mode-conditions/)
- [Import and export a script](/novelworks-docs/writing/import-a-script/)
