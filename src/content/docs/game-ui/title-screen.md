---
title: Title screen
description: "The first screen of your game: background, logo and menu."
---

The **{ui.gameUI.titleScreen}** is the first screen players see (after the optional [intro](/novelworks-docs/game-ui/intro/) and [content warning](/novelworks-docs/game-ui/content-warning/)).

## Background

Choose **{ui.gameUIInspector.color}** or **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: the default is a very dark blue. It "glows with the primary color at the top": the game draws a soft glow of your [primary color](/novelworks-docs/game-ui/fonts-and-colors/) over it.
- **{ui.gameUIInspector.image}**: pick a background, a CG or a UI picture. Until you choose one, the color is shown.

## Logo

**{ui.gameUIInspector.logoImage}**: any picture. It is drawn in the upper part of the screen, kept in proportion. With no logo, the game writes the **title of your game** (set in the [project settings](/novelworks-docs/getting-started/editor-settings/)), or "{tx.export.untitled}" if it is empty.

## Menu

Only the **{ui.gameUIInspector.buttonStyle}** can be changed. The buttons and their words are fixed:

- **{rt.game.continue}**: shown only when the player has a save, and loads the latest one;
- **New Game**;
- **{rt.game.load}**: shown when saving is possible;
- **{rt.game.options}**;
- **Quit**: only in a host that has a way to quit (not in the browser).

The words of these buttons follow the [game language](/novelworks-docs/getting-started/editor-settings/) of your project.
