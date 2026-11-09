---
title: Ambience and animated backgrounds
description: Tint a whole scene in one click, and use GIFs or looping videos as backgrounds.
---

## Ambience

An ambience is a tint over the whole picture, to set the mood or the time of day. Select a moment and open the **{ui.inspectorTabs.image}** tab of the [moment panel](/novelworks-docs/writing/moment-panel/).

The **{ui.ambience.title}** section has one tile per look, each showing your own background:

- **{ui.ambience.none}**
- **{ui.ambience.night}**
- **{ui.ambience.sunset}**
- **{ui.ambience.sepia}**
- **{ui.ambience.blackAndWhite}**
- **{ui.ambience.memory}**

Once you pick a look, two settings appear:

- **{ui.ambience.intensity}**, from 0 to 100 %. It starts at 100 %.
- **{ui.ambience.characters}**, checked at first. Uncheck it to tint only the scenery.

### How long it lasts

An ambience stays from one moment to the next, like the background, until a moment changes it. **{ui.stage.scopeLabel}** works as usual, so you can use **{ui.stage.scopeOnlyHere}** for a single moment. See [The stage](/novelworks-docs/concepts/stage/).

Script mode cannot write an ambience. It keeps the ambience of your moments when you edit the text, and a new moment continues the one before.

## Animated backgrounds

### GIF and animated WebP

These are imported like any other picture.

### MP4 and WebM videos

A video can be the background of a moment. It loops, without sound. You can import one:

- from the background picker of a moment;
- with **{ui.assetsTab.import}** in the **{ui.leftPanel.assets}** tab;
- by dropping the file on the editor window.

A video is of type **{ui.assetTypes.background}** or **{ui.assetTypes.cG}**. In the lists, a small play sign marks it, and it plays while your mouse is over it.

In the editor, the video stays on its first picture. In **{ui.topBar.play}** and in your exported game, it plays in a loop and stops while the pause menu is open.

### Size

A video is never refused for its size. Above 40 MB in one import, a message reminds you that a web game with video takes longer to load. Videos are not compressed again in the exported .zip.

## Limits

- A video can only be the background of a moment. Characters, items and the game's own screens need a picture.
- A picture over 50 MB, GIF included, is refused.
