---
title: Images
description: Import pictures, choose their type, and manage them in the Assets tab.
---

Every picture of your game is an **image** in your project: backgrounds, character pictures, illustrations, objects and pictures for the game's own screens. They live in the **{ui.leftPanel.assets}** tab and are copied into the `assets` folder of your project.

## Formats and limits

- **PNG, JPG and WebP** only (also `.jpeg`).
- Up to **50 MB** per file. Other files are skipped, and NovelWorks lists them.
- Nothing is resized or converted. A background smaller than the game screen is stretched and may look blurry, and the import window warns you.

## Import pictures

Three ways:

- Click **{ui.assetsTab.import}** in the Assets tab (you can choose several files).
- **Drag pictures onto the editor window.** An overlay says "{tx.dropOverlay.dropYourImagesHere}". After a drop, the Assets tab opens.
- Use the import shortcut of a picker, for example when you choose a background or an expression.

A window then asks you to check **{ui.importDialog.name}** and **{ui.importDialog.type}** for each picture. NovelWorks guesses the type to save you time: a picture with transparency is guessed as a sprite, a landscape or square picture as a background, a portrait picture as a sprite. You can change every guess. **{ui.dialogs.cancel}** copies nothing.

For a **character sprite** you can also choose **{ui.importDialog.addToCharacter}**: an existing character, or **{ui.importDialog.newCharacter}**, and the **{ui.importDialog.expressionName}**. If a file is named like `mia_happy` and a character is called Mia, NovelWorks proposes Mia and "happy" by itself. With several pictures, you can set the type or the character of all of them at once.

## Image types

| Type | What it is for |
|---|---|
| {ui.assetTypes.background} | Fills the screen behind the characters. |
| {ui.assetTypes.characterSprite} | A picture of a character, used for expressions. |
| {ui.assetTypes.cG} | A full-screen illustration for a special event. |
| {ui.assetTypes.prop} | A picture of an object (a key, a letter…), placed on the stage of exploration moments. |
| {ui.assetTypes.uI} | A picture for the game's own screens: dialogue box, logo, buttons. |
| {ui.assetTypes.avatar} | A small portrait shown next to the speaker's name. |

The background picker offers backgrounds and CGs.

## The Assets tab

Chips filter the list by type, with the number of pictures in each. Select a picture to see it in the inspector:

- **{ui.assetInspector.name}**: the name shown in NovelWorks. Changing it does not rename the file;
- **{ui.assetInspector.type}**: you can change it at any time;
- **{ui.assetInspector.usedIn}**: where the picture is used, or "{tx.assetInspector.notUsedYet}";
- **{ui.assetInspector.file}**: its file in the `assets` folder.

Right-click a picture for **{ui.contextMenus.rename}**, **{ui.contextMenus.showUsages}** and **{ui.contextMenus.delete}**.

File names are cleaned up (characters that a file name cannot contain are removed), and if a name is already taken the new file becomes `name-2.png`, `name-3.png`… An existing file is never overwritten.

## Replace a picture

An image itself cannot be replaced in place. For a character, click the picture of an expression and choose **{ui.characterInspector.changeImage}**: it imports or picks another image and points the expression at it. The old image stays in the Assets tab.

## Delete a picture

Click **{ui.assetInspector.deleteImage}**. NovelWorks asks first. If the picture is used, it lists where, and warns that those places will have no image. The file is not erased at once: when you save, it is moved to `backups/deleted-assets`, and it comes back if you undo or restore a backup. See [Saving, backups and undo](/novelworks-docs/getting-started/saving-and-undo/).
