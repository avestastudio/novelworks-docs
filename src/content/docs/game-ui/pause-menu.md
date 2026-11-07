---
title: Pause menu
description: The menu players open during the game, with a right-click or Esc.
---

The **{ui.gameUI.pauseMenu}** is "opened with a right-click or Esc". On a touch screen, the host of the game provides a way to open it.

## What you can change

- **{ui.gameUIInspector.buttonStyle}**: "{tx.gameUIInspector.sameAsFontsColors}" by default.
- **{ui.gameUIInspector.panelColor}**: "{tx.gameUIInspector.sameAsTheDialogueBox}" by default.
- **{ui.gameUIInspector.textColor}**: "{tx.gameUIInspector.sameAsTheTextColor}" by default.

## The buttons

They cannot be edited here, and they follow the game language:

- **{rt.game.resume}**;
- **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (F5) and **{rt.game.quickLoad}** (F9): only when saving is available. **{rt.game.quickLoad}** also waits until a quick save exists;
- the Inventory button (labeled "{rt.theme.inventory}" unless you changed it on the [Inventory screen](/novelworks-docs/game-ui/inventory-ui/)), when the Inventory feature is on;
- **{rt.game.history}** (H);
- **{rt.game.options}**;
- the Map button (labeled "{rt.theme.map}" unless you changed it on the [Map button screen](/novelworks-docs/game-ui/map-button/)), when the map can be opened at that moment (always, or after the story has first shown it);
- **{rt.game.backToTitle}**.

The title of the panel is "{tx.game.paused}".
