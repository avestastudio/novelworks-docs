---
title: Chapters
description: Mark the scenes that start a chapter and let players replay the chapters they have reached.
---

Chapters let players go back to a part of your story from the title screen.

## Mark a chapter

1. In the **{ui.leftPanel.scenes}** tab, select a scene.
2. In the panel on the right, turn on **{ui.sceneInspector.startsChapter}**.
3. Type a name if you want one. Without a name, the game shows **{rt.chapters.chapterNumber}** with its number.

A chapter lasts until the scene of the next chapter. The order of the chapters is the order of your scene list. A game can have up to 50 chapters.

If you delete a scene, its chapter goes with it.

## What players see

The title screen gets a **{rt.game.chapters}** button as soon as your game has one chapter.

The screen lists the chapters. Those the player has already reached show their name and can be chosen. The others show **{rt.chapters.locked}** and cannot be chosen.

A chapter counts as reached when the player is in its scene, however they got there: a choice, a jump, or a loaded save.

## Replaying a chapter

A chapter starts from the first moment of its scene, with the starting values: variables back to their first value and an empty inventory.

The screen opens from the title screen, so a game in progress is not affected.

Reached chapters are kept for each game on the player's device, like saves. When you test in the editor, they are kept apart from those of the exported game.

## The look

Go to **{ui.topBar.gameUI}** and choose **{ui.gameUI.chapters}** in the list of screens.

![The Chapters screen in Game UI, with its colors and a preview of the chapter list.](/novelworks-docs/screenshots/game-ui-chapters.png)

You can set **{ui.gameUIInspector.backgroundColor}**, **{ui.gameUIInspector.textColor}** and **{ui.gameUIInspector.buttonStyle}**. **{ui.gameUIInspector.resetToDefault}** puts this screen back as it was.

The preview shows your chapters, or three examples if you have none yet, with the last one still locked.
