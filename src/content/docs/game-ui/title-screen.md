---
title: Title screen
description: "The first screen of your game: background, logo and menu."
---

The **{ui.gameUI.titleScreen}** is the first screen players see (after the optional [intro](/novelworks-docs/game-ui/intro/) and [content warning](/novelworks-docs/game-ui/content-warning/)).

## Templates

Under **{ui.templates.heading}**, four cards give a ready-made look: **{ui.templates.title.classic}** (the look of a new project), **{ui.templates.title.darkNight}**, **{ui.templates.title.soft}** and **{ui.templates.title.minimal}**. A click sets only the background color and the button style of this screen. Your pictures, font and text colors stay. One **{ui.topBar.undo}** brings back what you had.

The card of the current template is highlighted. As soon as you change one of those two settings, no card is highlighted anymore.

## Background

Choose **{ui.gameUIInspector.color}** or **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: the default is a very dark blue. It "glows with the primary color at the top": the game draws a soft glow of your [primary color](/novelworks-docs/game-ui/fonts-and-colors/) over it.
- **{ui.gameUIInspector.image}**: pick a background, a CG or a UI picture. Until you choose one, the color is shown.

## Logo

**{ui.gameUIInspector.logoImage}**: any picture. It is drawn in the upper part of the screen, kept in proportion. With no logo, the game writes the **title of your game** (set in the [project settings](/novelworks-docs/getting-started/editor-settings/)), or "{tx.export.untitled}" if it is empty.

## Music

Under **{ui.sound.music}**, **{ui.sound.chooseMusic}** picks a track of the Music type, or imports one. Once it is set, you get a **{ui.sound.volume}** slider and an X to remove it. It starts after the intro. When the story starts, the music of your moments takes over. See [Sound](/novelworks-docs/writing/sound/).

Browsers do not allow sound before the player's first click or key press, so in a web game the music starts at that moment.

## Menu

Only the **{ui.gameUIInspector.buttonStyle}** can be changed. The buttons and their words are fixed:

- **{rt.game.continue}**: shown only when the player has a save, and loads the latest one;
- **{rt.game.newGame}**;
- **{rt.game.load}**: shown when saving is possible;
- **{rt.game.chapters}**: shown only if your game has at least one chapter. See [Chapters](/novelworks-docs/game-ui/chapters/);
- **{rt.game.options}**;
- **{rt.game.credits}**: shown only if you turned on the credits and their button. See [Credits](/novelworks-docs/game-ui/credits/);
- **{rt.game.quit}**: only in a host that has a way to quit (not in the browser).

The words of these buttons follow the [game language](/novelworks-docs/getting-started/editor-settings/) of your project.
