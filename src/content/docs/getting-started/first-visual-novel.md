---
title: Your first visual novel
description: A step-by-step tutorial, from an empty project to a game you can play.
---

You will make a tiny story with a background, one character with two expressions, a few lines of dialogue and a choice with two endings. You need three pictures: a background, and two pictures of the **same character** with different expressions (for example happy and surprised).

## 1. Create the project

1. Open NovelWorks. On the [projects screen](/novelworks-docs/getting-started/projects-screen/), click **{ui.projectHub.newProject}**.
2. Type a name, check the location (or click **{ui.newProjectScreen.browse}**), leave the features unticked and click **{ui.newProjectScreen.createProject}**.

The project opens with one scene, "{tx.shared.project.firstScene}", and one empty line of dialogue.

## 2. Add your pictures

1. In the left panel, open the **{ui.leftPanel.assets}** tab.
2. Click **{ui.assetsTab.import}**, or drop your pictures onto the window.
3. For each picture, choose its type. Choose **{ui.assetTypes.background}** for the picture of the place, and **{ui.assetTypes.characterSprite}** for the two pictures of your character.

## 3. Create a character

1. Open the **{ui.leftPanel.characters}** tab and click **{ui.charactersTab.newCharacter}**.
2. In the inspector, type the **{ui.characterInspector.characterName}** and choose a **{ui.characterInspector.nameColor}**.
3. Under **{ui.characterInspector.expressions}**, click **{ui.characterInspector.addExpression}** and choose a picture, once for each picture (only pictures of type "{tx.assetTypes.characterSprite}" are offered). Then rename each expression ("Happy", "Surprised") if you like. The expression with the star is the one shown by default.

## 4. Write the first scene

1. Open the **{ui.leftPanel.scenes}** tab and select your scene.
2. Choose the moment's background with the background button above the game screen ("{ui.stage.chooseTheBackgroundOfThisMoment}").
3. Put your character on stage with the button **{ui.stageControls.character}** above the game screen, then drag the character where you want it.
4. Click the dialogue box on the screen and type. Press **Enter** to start the next line: a new moment starts, with the **same stage**, because [characters stay on the stage](/novelworks-docs/concepts/stage/). Press **Shift+Enter** for a new line in the same box.
5. To change the expression later on, select a later moment in the timeline, click the character on the screen, and choose another expression in the small bar over them.

## 5. Add a choice

1. In the header of the timeline, open **{ui.timeline.addOther}** and pick **{ui.moments.choice}**.
2. In the **{ui.inspectorTabs.text}** tab of the inspector, write the question and the text of two options.
3. For each option, pick the scene it leads to in **{ui.branchInspectors.then}**. Create the scenes first with **{ui.scenesTab.newScene}** in the Scenes tab.

You can already make a choice matter: see [How a story branches](/novelworks-docs/concepts/how-stories-branch/).

## 6. Add an ending

At the end of each branch, open **{ui.timeline.addOther}** and add an **{ui.moments.ending}** moment. It is called "{tx.shared.scenes.goodEnding}" at first: change the name if you like. After an ending, the player goes back to the title screen.

## 7. Press Play

Click **{ui.topBar.play}** in the top bar to play from the title screen. To test from the middle, select a moment and click **{ui.topBar.playFromHere}**. Press **Esc** to go back to the editor (if a game menu is open, **Esc** closes it first).

## 8. Save

Press **Cmd+S** (Mac) or **Ctrl+S** (Windows). NovelWorks also saves by itself every two minutes. See [Saving, backups and undo](/novelworks-docs/getting-started/saving-and-undo/).

## What next?

- Make choices matter with [variables](/novelworks-docs/branching/variables/) and [conditions](/novelworks-docs/branching/conditions/).
- Change how your game looks in the [Game UI editor](/novelworks-docs/game-ui/game-ui-editor/).
- [Export it](/novelworks-docs/publish/web-export/) and share it.
