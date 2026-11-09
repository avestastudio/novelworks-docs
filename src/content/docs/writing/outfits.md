---
title: Outfits and the wardrobe
description: Dress a character with pieces you can combine, save outfits and change them during the story.
---

The wardrobe lets you dress a character with pictures laid over them. You combine pieces, save the result as an outfit, and choose the outfit in your story.

## Open the wardrobe

In the **{ui.leftPanel.characters}** tab, select a character and click the large **{ui.wardrobe.open}** button. The same button is in the panel of a character on stage.

![The wardrobe: the character in large, the pieces by category and the saved outfits at the bottom.](/novelworks-docs/screenshots/wardrobe.png)

The window shows:

- the character in large, with their expressions below, so you can check each one;
- the categories and their pieces, on the side;
- the saved outfits, at the bottom.

You can undo every change with `Cmd+Z` / `Ctrl+Z` while the window is open.

## Add pieces

A piece is a picture with a transparent background, kept in a category. Drop files on a category, or click **{ui.wardrobe.addPiece}** (the plus sign). Pieces are a type of image of their own, **{ui.assetTypes.clothing}**, and the piece picker shows only that type.

A character wears one piece per category. For a hat and a necklace together, use two categories.

## Categories

A new wardrobe has four categories: **{ui.wardrobe.category.shoes}**, **{ui.wardrobe.category.bottoms}**, **{ui.wardrobe.category.tops}** and **{ui.wardrobe.category.accessories}**.

- Click a category's name to rename it. Categories are not only for clothes: hair works too.
- **{ui.wardrobe.addCategory}** adds one, up to 12.
- **{ui.wardrobe.removeCategory}** deletes the category and its pieces, and takes them out of the outfits. The pictures stay in your assets.
- **{ui.wardrobe.required}** removes the **{ui.wardrobe.none}** choice from that category.

## Place a piece

Click a piece. A frame appears around it on the character.

- **Drag** the frame to move the piece.
- **Pull the corner** to resize it, from 5 % to 400 %.
- Use the **arrow keys** for small steps. Hold `Shift` for larger ones.
- **{ui.wardrobe.resetPlacement}** undoes all of that.

You place a piece once. Every outfit and expression that uses it follows.

A picture with the same shape as the character lies exactly over them when you add it. A picture with another shape, like a hat cut out on its own, arrives at its own size.

## Layer order

The list of categories shows the front at the top. **{ui.wardrobe.moveForward}** and **{ui.wardrobe.moveBack}** move a category.

The row **{ui.wardrobe.expressionLayer}** moves the same way. Move it to put hair over the face, or a body under it.

## Try on and save

Clicking a piece only tries it on. Nothing is saved yet.

- **{ui.wardrobe.saveAsNew}** creates an outfit with what the character is wearing.
- **{ui.wardrobe.updateOutfit}** appears when you changed the outfit that is selected, and saves the change.
- **{ui.outfits.default}** is the character with no pieces.

Select an outfit at the bottom to rename it, or to delete it with **{ui.outfits.remove}**.

## Whole drawings

If your character is drawn in one piece, you can skip the layers. Select an outfit and open **{ui.wardrobe.wholeDrawings}**. Give it one finished drawing per expression. A whole drawing replaces the layers for that expression, in that outfit.

## Change the outfit in the story

Click the character on the game screen. You then have three ways:

- the **{ui.stageControls.outfit}** section of the panel on the right, with the character shown in each outfit;
- the **{ui.stageControls.outfit}** menu in the small bar over the character;
- **{ui.contextMenus.outfit}** in the right-click menu.

The outfit stays until a later moment changes it, like an expression. **{ui.stage.scopeLabel}** works as usual: see [The stage](/novelworks-docs/concepts/stage/).

## In Script mode

Add the word `outfit` and the outfit's name to a `show` line:

```
show : Mia happy outfit Uniform left
show : Mia outfit default
```

`outfit default` goes back to the default outfit. An outfit name that does not exist is pointed out, with a way to create it.

## Delete, copy and paste

- If you delete an outfit, the characters who wore it go back to **{ui.outfits.default}**.
- If you delete a piece, it is taken out of the outfits that use it.
- When you paste moments into another project, the outfit is found by its name. If there is none with that name, the character wears the default outfit.

## Export

Only the pieces worn by a saved outfit go into your exported game.

## Limits

- A character can have up to 20 outfits besides the default one, and 200 pieces.
- Avatars do not change with the outfit.
- The demo allows 2 outfits per character. See [Demo and full edition](/novelworks-docs/getting-started/demo-edition/).
