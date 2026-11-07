---
title: Characters and expressions
description: Create characters, give them expressions and avatars, and know what happens when you delete one.
---

A **character** is a person in your story. Each character has a name, a name color and **expressions**: one picture per mood. Characters live in the **{ui.leftPanel.characters}** tab.

## Create a character

Click **{ui.charactersTab.newCharacter}**. The character is named "Character N", where N is the number of characters you already have plus one (two characters can end up with the same name, so rename them) and gets a name color from a set of eight. Select it to edit it in the inspector.

You can also create a character while importing pictures: see [Images](/novelworks-docs/writing/assets/).

## Name and color

- **{ui.characterInspector.name}**: type it in the inspector (there is no rename on the list itself, but **{ui.contextMenus.rename}** in the right-click menu takes you to the field).
- **{ui.characterInspector.nameColor}**: pick one of eight preset colors, or any color with **{ui.characterInspector.pickAnyColor}**. It colors the name in the dialogue box and in Script mode.

## Expressions

Under **{ui.characterInspector.expressions}**, add one picture for each mood (happy, sad, angry…).

- Click **{ui.characterInspector.addExpression}** and choose a picture of type "{tx.assetTypes.characterSprite}", or import a new one from the picker. The expression takes the picture's name.
- Type a different name in **{ui.characterInspector.expressionName}** if you wish.
- Click the star to **{ui.characterInspector.makeThisTheDefaultExpression}**. The first expression you add is the default. It is what shows when a character arrives without an expression.
- Click the picture to **{ui.characterInspector.changeImage}**. The old picture stays in your images.
- Click the X to remove the expression. If moments use it, NovelWorks tells you they will use the default expression instead. If you remove the default one, the first remaining expression becomes the default.

## Avatar

An avatar is a small portrait shown in the dialogue box next to the name. In **{ui.characterInspector.avatar}**, choose:

- **{ui.characterInspector.none}**: no portrait in the dialogue box;
- **{ui.characterInspector.fixed}**: the same portrait every time this character speaks;
- **{ui.characterInspector.perExpression}**: a portrait for each expression. Expressions without one use the default avatar.

Avatars can be pictures of type "{tx.assetTypes.avatar}", "{tx.assetTypes.characterSprite}" or "UI".

## Put a character on stage

See [Staging a scene](/novelworks-docs/writing/staging/). In short: in a moment, use **{ui.momentInspector.add}** under **{ui.momentInspector.onStage}** (or the **{ui.stageControls.character}** button above the game screen), then drag the character where you want.

## Delete a character

Use **{ui.characterInspector.deleteCharacter}** in the inspector or **{ui.contextMenus.delete}** in the right-click menu. If the character is not used, NovelWorks removes it and its expressions; the pictures stay in your images. If it appears in your story, NovelWorks lists where, and warns that it will **leave those moments and its lines will become narration**. Use **{ui.contextMenus.showUsages}** first to see where a character is used.

You can undo a deletion.
