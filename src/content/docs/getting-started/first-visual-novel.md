---
title: Your first visual novel
description: A step-by-step tutorial, from an empty project to a game you can play.
---

You will make a tiny story with a background, one character with two expressions, a few lines of dialogue and a choice with two endings. You need three pictures: a background, and two pictures of the **same character** with different expressions (for example happy and surprised).

## 1. Create the project

1. Open NovelWorks. On the [projects screen](/novelworks-docs/getting-started/projects-screen/), click **{ui.projectHub.newProject}**.
2. Type a name, check the location (or click **{ui.newProjectScreen.browse}**), leave the features unticked and click **{ui.newProjectScreen.createProject}**.

The project opens with one scene, "Scene 1", and one empty line of dialogue.

## 2. Add your pictures

1. In the left panel, open the **{ui.leftPanel.assets}** tab.
2. Click **{ui.assetsTab.import}**, or drop your pictures onto the window.
3. For each picture, choose its type: a background, a character expression… Pick the right one.

## 3. Create a character

1. Open the **{ui.leftPanel.characters}** tab and click **{ui.charactersTab.newCharacter}**.
2. In the inspector, type the **{ui.characterInspector.characterName}** and choose a **{ui.characterInspector.nameColor}**.
3. Under **{ui.characterInspector.expressions}**, click **{ui.characterInspector.addExpression}** for each picture, give it a name ("Happy", "Surprised") and choose its image. The expression with the star is the one shown by default.

## 4. Write the first scene

1. Open the **{ui.leftPanel.scenes}** tab and select your scene.
2. Choose the moment's background with the background button above the game screen ("{ui.stage.chooseTheBackgroundOfThisMoment}").
3. Put your character on stage with the button **{ui.stageControls.putACharacterOnStage}**, then drag the character where you want it.
4. Click the dialogue box on the screen and type. Press **Enter** to start the next line: a new moment starts, with the **same stage**, because [characters stay on the stage](/novelworks-docs/concepts/stage/). Press **Shift+Enter** for a new line in the same box.
5. Click the character on the screen to change its expression in a later moment.

## 5. Add a choice

1. In the timeline, add a **{ui.moments.choice}** moment.
2. In the inspector, write the question and the text of two options.
3. For each option, pick the scene it leads to in **{ui.branchInspectors.then}**. Create the scenes first with **{ui.scenesTab.newScene}** in the Scenes tab.

You can already make a choice matter: see [How a story branches](/novelworks-docs/concepts/how-stories-branch/).

## 6. Add an ending

At the end of each branch, add an **{ui.moments.ending}** moment and give it a name such as "Good ending". After an ending, the player goes back to the title screen.

## 7. Press Play

Click **{ui.topBar.play}** in the top bar to play from the title screen. To test from the middle, select a moment and click **{ui.topBar.playFromHere}**. Press **Esc** to go back to the editor.

## 8. Save

Press **Cmd+S** (Mac) or **Ctrl+S** (Windows). NovelWorks also saves by itself every two minutes. See [Saving, backups and undo](/novelworks-docs/getting-started/saving-and-undo/).

## What next?

- Make choices matter with [variables](/novelworks-docs/branching/variables/) and [conditions](/novelworks-docs/branching/conditions/).
- Change how your game looks in the [Game UI editor](/novelworks-docs/game-ui/game-ui-editor/).
- [Export it](/novelworks-docs/publish/web-export/) and share it.
