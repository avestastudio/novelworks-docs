---
title: Copy, paste and duplicate
description: Copy moments, scenes and characters, paste them elsewhere, and duplicate with one key.
---

## Duplicate

**Cmd+D** / **Ctrl+D** duplicates what is selected, even while you type:

- a **moment**: the copy goes right after the original, with a new identity. It changes nothing on screen, so it shows the same picture as the original, and its note is copied;
- a **scene**: the copy goes right after the original and is named like "A helping hand (copy)" (see [Scenes](/novelworks-docs/writing/scenes/));
- an exploration **zone**.

The right-click menu has **{ui.contextMenus.duplicate}** for a moment and a scene, and **{ui.contextMenus.duplicateZone}** for a zone. The inspector of a moment has a **{ui.momentInspector.duplicate}** button.

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

The copy goes to your computer's clipboard as text, so you can paste into **another project or another window**. The clipboard holds the moment, scene or character itself, **not** the pictures, characters, scenes or variables it refers to.

What you see when the other project does not have them (checked by pasting a moment from one project into another):

- a speaker that does not exist there becomes the **{ui.stageControls.narrator}**;
- a background that does not exist there is dropped (the moment shows "No background");
- a character who does not exist there is not drawn, and may show as an "Unnamed" row in the stage chart, or as `?` in [Script mode](/novelworks-docs/writing/script-mode-lines/);
- **no warning is shown**, so check the pasted moment yourself.

Paste into a project that has the same characters, pictures, scenes and variables for the best result.

## Delete

`Delete` or `Backspace` removes the selected character, zone or prop from the stage, or deletes the selected moment, when no text box has the focus.

## All the shortcuts

See [Keyboard shortcuts](/novelworks-docs/reference/keyboard-shortcuts/).
