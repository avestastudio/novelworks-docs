---
title: Save and load screen
description: "The Save and Load screens: slots, quick save, autosave and their look."
---

The **{ui.gameUI.saveLoad}** screens are reached from the title screen and the pause menu.

## What you can change

Under **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: the title screen's color by default;
- **{ui.gameUIInspector.textColor}**: "Same as the text color" by default;
- **{ui.gameUIInspector.buttonStyle}**: the style of the Back button. (The confirmation questions, such as "Overwrite" and "Delete", take the button style of the [pause menu](/novelworks-docs/game-ui/pause-menu/).)

Under **{ui.gameUIInspector.slots}**:

- **{ui.gameUIInspector.slotColor}**: the color of each slot tile ("Same as the dialogue box" by default).

## What players get

- **12 save slots**, shown in a grid of three columns, a **quick save** and an **autosave** at the start of each new scene.
- Each slot shows a small picture of the moment (background, props and characters, without the dialogue), the scene name, the date and the play time. An empty slot says "Empty".
- The **{rt.game.load}** screen lists the Autosave and the Quick save first, then slots 1 to 12. The **{rt.game.save}** screen lists slots 1 to 12.
- Saving over a slot asks to confirm ("Overwrite"); deleting a slot (the × on a filled slot) asks too; loading a save while a game is running asks "Load this save? Unsaved progress will be lost."
- Keyboard: arrows move between slots, **Enter** or **Space** picks, `Delete` or `Backspace` deletes, **Home** and **End** jump to the first and last slot of the list, **Esc** goes back.

## Where players find it

- **{ui.gameUI.titleScreen}**: **{rt.game.continue}** (the latest save, only if one exists) and **{rt.game.load}**.
- **{ui.gameUI.pauseMenu}**: **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (**F5**) and **{rt.game.quickLoad}** (**F9**). Quick load only shows once a quick save exists.
- **{ui.quickMenu.title}**: the same four buttons, if you show them.

If the browser does not allow saving (private browsing, or site data turned off), the screens say so, and nothing can be saved. See [Saving and loading](/novelworks-docs/player/save-and-load/).
