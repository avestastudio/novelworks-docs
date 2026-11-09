---
title: Ending screen
description: The screen shown when the story runs out, and how it differs from an Ending moment.
---

**{ui.gameUI.theEnd}** is "shown when the story is over": when the game reaches the end of a scene and nothing comes after it. It is **not** the screen of an [Ending moment](/novelworks-docs/branching/endings/), which shows the name of the ending.

## What you can change

- **{ui.gameUIInspector.text}**: the title shown in large letters. The default is "The End". If you empty it, no title is shown.
- **{ui.gameUIInspector.backgroundColor}**: a plain color, black by default. There is no picture option.
- **{ui.gameUIInspector.textColor}**: "{tx.gameUIInspector.sameAsTheTextColor}" by default.

Under the title, the game shows "{tx.game.returnToTitle}". This text cannot be changed, and a click takes the player back to the title screen.

## Credits after the ending

If you turned on the [credits](/novelworks-docs/game-ui/credits/) and **{ui.credits.afterEnding}**, the credits roll when the player clicks to leave an ending. This works for this screen and for an [Ending moment](/novelworks-docs/branching/endings/). When the credits close, the game goes back to the title screen.
