---
title: Credits
description: Add rolling credits to your game, on the title screen, after an ending, or both.
---

**{ui.gameUI.credits}** adds rolling credits to your game. Go to **{ui.topBar.gameUI}** and choose **{ui.gameUI.credits}** in the list of screens.

![The Credits screen in Game UI, with the switches, your lines and the preview.](/novelworks-docs/screenshots/game-ui-credits.png)

Credits are off in a new game. Turn on **{ui.credits.enabled}** to start.

## Where they appear

Under **{ui.credits.where}**, two switches work separately. Both are on at first.

- **{ui.credits.onTitleScreen}** adds a **{rt.game.credits}** button to the title screen.
- **{ui.credits.afterEnding}** rolls the credits when the player leaves an ending: an [Ending moment](/novelworks-docs/branching/endings/) or the [**{ui.gameUI.theEnd}** screen](/novelworks-docs/game-ui/ending-screen/). The title screen comes after them.

## What they say

The credits start with the title of the game and its author, taken from the [project settings](/novelworks-docs/getting-started/editor-settings/).

Then come **{ui.credits.lines}**. Click **{ui.credits.addLine}** and fill in:

- **{ui.credits.role}**, for example "Art";
- **{ui.credits.names}**, one name per line.

You can have up to 30 lines. The arrows change their order, and a line left empty is ignored.

**{ui.credits.madeWith}** is on at first. You can turn it off.

## The look

You can set **{ui.gameUIInspector.backgroundColor}**, **{ui.gameUIInspector.textColor}** and **{ui.gameUIInspector.buttonStyle}**. **{ui.gameUIInspector.resetToDefault}** puts this screen back as it was.

## In the game

The credits roll upwards by themselves and stop at the end, with the last lines still on screen. **{rt.credits.back}** closes them, and so do `Esc`, `Enter` and `Space`.

If the player has asked their system for less motion, nothing moves: the whole list is shown and can be scrolled. The preview in the editor works the same way.
