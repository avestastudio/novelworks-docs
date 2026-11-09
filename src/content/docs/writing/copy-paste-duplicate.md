---
title: Copy, paste and duplicate
description: Copy moments, scenes and characters, paste them elsewhere, and duplicate with one key.
---

## Duplicate

**Cmd+D** / **Ctrl+D** duplicates what is selected, even while you type:

- a **moment**: the copy goes right after the original, with a new identity. It changes nothing on screen, so it shows the same picture as the original, and its note is copied;
- a **scene**: the copy goes right after the original and is named like "A helping hand (copy)" (see [Scenes](/novelworks-docs/writing/scenes/));
- an exploration **zone**.

The right-click menu has **{ui.contextMenus.duplicate}** for a moment and a scene, and **{ui.contextMenus.duplicateZone}** for a zone. The header of the timeline has a duplicate icon for the selected moment.

## Copy, cut and paste

**Cmd+C**, **Cmd+X** and **Cmd+V** (**Ctrl** on Windows) copy, cut and paste:

| Selected | Copy and cut | Paste |
|---|---|---|
| A **moment** (or nothing) | The moment. Cut removes it, with no question, and the next moments keep showing the same thing. | Inserts the copy **after the selected moment** of the current scene, or at the end. |
| A **scene** (in the scenes list) | The whole scene. Cut asks to confirm the deletion. | Adds the copy at the end of the list, selected. |
| A **character** on the game screen | The character, as placed at that moment: expression, place, size, direction. Cut takes them off stage. | Puts the character on the selected moment's stage with the copied look. If the character is already there, they take the pasted look. |

A pasted moment carries its own stage changes: if it was the moment where Mia arrived, she arrives again. One paste is one undo step.

### When it works

Copy, cut and paste work only in the {ui.topBar.story} mode, **{ui.topBar.visual}** view. They do nothing in Script view, and when a text box has the focus (the box keeps its own copy and paste), when a window or menu is open, or when text is selected on the page. A picture, a variable, a zone or a prop cannot be copied.

The right-click menus have no Copy or Paste entries: use the keys, or the Cut, Copy and Paste items of the Edit menu.

### Between projects and windows

The copy goes to your computer's clipboard as text, so you can paste into **another project or another window**. The copy carries the moment, scene or character itself and the **names** of the characters, expressions, outfits, pictures, variables, items and scenes it refers to, but not those things.

When you paste, NovelWorks looks each reference up in the project you paste into:

- if it exists there (same identity), it is kept;
- otherwise it is looked for **by name**: a picture of the same kind, a variable of the same type, an expression of the matching character;
- otherwise it is **left out**: a character leaves the stage, a speaker becomes the **{ui.stageControls.narrator}**, a background shows "{tx.stage.noBackground}", and a link, an item or a variable becomes "not picked".

A message lists what was left out ("Pasted, but some things from the other project do not exist in this one and were left out: …"), up to 8 entries and then "and N more". It stays for about 15 seconds. Pasting in the same project shows no message. A copy made with an older version of NovelWorks has no names, so its references are cleared and listed as "unnamed".

Paste into a project that has the same characters, pictures, scenes and variables for the best result.

## Delete

`Delete` or `Backspace` removes the selected character, zone or prop from the stage, or deletes the selected moment, when no text box has the focus.

## All the shortcuts

See [Keyboard shortcuts](/novelworks-docs/reference/keyboard-shortcuts/).
