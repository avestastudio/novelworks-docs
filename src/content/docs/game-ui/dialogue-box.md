---
title: Dialogue box
description: "Where names and lines appear: position, size, background, text and avatar."
---

The **{ui.gameUI.dialogueBox}** is the box that shows the speaker's name and the text. Its size and place are in percentages of the screen (mostly of its height), so it keeps its look at any resolution.

## Position and size

- **{ui.gameUIInspector.position}**: {ui.gameUIInspector.bottom} (default), {ui.gameUIInspector.top}, {ui.gameUIInspector.left}, {ui.gameUIInspector.right} or {ui.gameUIInspector.center}. Choosing one also sets width and height to a good starting size: a wide strip for top and bottom, a tall panel (about a third of the screen) for left and right, and a box in the middle for center.
- **{ui.gameUIInspector.margin}**: space to the screen edges (0 to 20 %, default 3.5).
- **{ui.gameUIInspector.width}** and **{ui.gameUIInspector.height}**: 10 to 100 %. After choosing a position you can adjust them.

## Background

Choose **{ui.gameUIInspector.color}** or **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: a color and an **{ui.gameUIInspector.opacity}** (0 to 100 %, default 80). This color is also the default color of the choice buttons, the pause menu and other panels ("Same as the dialogue box"), and of the name tab. That stays true when the box itself uses a picture: the color and opacity then no longer show on the box, but they still color those buttons and panels.
- **{ui.gameUIInspector.image}**: any picture. Transparent parts stay transparent, so you can use bubbles, scrolls or any shape. Choose how it fits:
  - **{ui.gameUIInspector.stretch}**: fills the whole box (the picture may look squashed);
  - **{ui.gameUIInspector.fit}**: the whole picture, keeping its shape;
  - **{ui.gameUIInspector.slice}**: the corners keep their size, the edges and the middle stretch. Set the **{ui.gameUIInspector.cornerSize}** (in % of the picture). By default the corners are shown at the picture's original size; untick that to set the **{ui.gameUIInspector.cornerDisplaySize}**, useful for large, high-resolution frames.

## Text and name

- **{ui.gameUIInspector.textColor}**: "Same as the text color" by default.
- **{ui.gameUIInspector.nameColor}**: **{ui.gameUIInspector.characterColors}** (each character's own [name color](/novelworks-docs/writing/characters/), the default) or **{ui.gameUIInspector.oneColor}** (one **{ui.gameUIInspector.colorOfEveryName}** for all).
- **{ui.gameUIInspector.textPadding}**: space between the edge of the box and the text (0 to 15 %, default 4).
- **{ui.gameUIInspector.speakerName}**: **{ui.gameUIInspector.insideTheBox}** (default) or **{ui.gameUIInspector.tabAbove}** (a tab above the box).

## Avatar

When a character with an avatar speaks, the avatar is shown next to the name. Set avatars in the [Characters tab](/novelworks-docs/writing/characters/).

- **{ui.gameUIInspector.side}**: left (default) or right.
- **{ui.gameUIInspector.size}**: 5 to 60 % of the screen height (default 20). Never taller than the box.

## Checking it

Use **{ui.gameUIMode.longTextAvatar}** above the preview to see a long line and a character with an avatar.
