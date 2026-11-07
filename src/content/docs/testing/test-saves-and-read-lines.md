---
title: Play mode tools
description: "The bar above the game when you play: variables and items, splash, restart, test saves and read lines."
---

When you play in the editor, a bar at the top holds the testing tools. Bar buttons never take the keyboard focus, so **Space** and **Enter** keep going to the game.

![Play mode: the tool bar at the top, and the panel of variables and items on the right.](/novelworks-docs/screenshots/play-bar.png)

| Tool | What it does |
|---|---|
| **{ui.playOverlay.playing}** and where you are | The scene and the moment, kept up to date. |
| "{tx.playOverlay.rightClickGameMenu}" | A reminder: a right-click opens the game's pause menu. |
| **{ui.playOverlay.variablesItems}** | Shows or hides a panel with the live values of your variables and your items (see below). |
| **{ui.playOverlay.openMap}** | Opens the map now, even if players could not open it yet at this point. **{rt.game.back}** returns to where you were. Only when your game has a map. |
| **{ui.playOverlay.showSplash}** | Shows the "Made with NovelWorks" screen that an exported game opens with, at every start and on restart. Off by default. Switching it on restarts the test. |
| **{ui.playOverlay.restart}** | Starts this test again, from the title screen or from the moment you started on. State, history and play time are reset. |
| **{ui.playOverlay.clearTestSaves}** | Deletes the saves, quick save and autosave made while testing. |
| **{ui.playOverlay.resetReadLines}** | Forgets which lines you have read, so **{ui.quickMenu.button.skip}** stops on every line again. |
| **{ui.playOverlay.stop}** | Back to the editor (**Esc**). |

## Variables and items

With **{ui.playOverlay.variablesItems}** (or **{ui.leftPanel.variables}**, when the Inventory feature is off) a panel shows:

- **{ui.leftPanel.variables}**: each with its value now. A value that differs from where it started is highlighted. On the title screen and The End screen, it shows "{tx.playOverlay.startingValues}". You cannot edit a variable here: play to change it, so you can check what your choices change.
- **{ui.gameUI.inventory}** (with the Inventory feature): all the items of your game, with a **−** and a **+** to remove or give one while testing, without a notice. A stackable item shows its count, a single item Yes or No. Before the game starts, it says "{tx.playOverlay.startPlayingToGiveOrRemoveItems}" The panel stays open or closed from one test to the next.

## Test saves and read lines

Saves, quick save and autosave, the player options (text size, speed…), and the record of read lines used by Skip all have their own space for each game **in Play mode only**. They are separate from the saves of an exported game, and are not part of your project. They stay between tests until you clear them:

- **{ui.playOverlay.clearTestSaves}** asks first: "Exported games keep their own saves."
- **{ui.playOverlay.resetReadLines}** acts at once, with no question.

The tester's own player options (text size, speed…) are kept the same way but have no button to clear them. The **{ui.playOverlay.showSplash}** switch lasts until you close the editor.
