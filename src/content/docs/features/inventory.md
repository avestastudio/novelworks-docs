---
title: Inventory
description: "Items players carry: create them, give and take them, check them in conditions, and see them in the game."
---

With the **{ui.shared.features.inventory}** feature on, players can collect **items**: keys, letters, coins, clues. They see them in an Inventory menu. Turn it on in the [Features library](/novelworks-docs/features/features-panel/). Items are not [variables](/novelworks-docs/branching/variables/): an item is something the player carries.

## The Items tab

The **{ui.leftPanel.items}** tab lists your items, each with its picture (or a backpack), its name and **{ui.itemInspector.single}** or **{ui.itemInspector.stackable}**. Click **{ui.itemsTab.newItem}**. A new item is named "Item 1", "Item 2"… and selected.

![The Items tab, with the inspector of an item.](/novelworks-docs/screenshots/items-tab.png)

In the inspector:

- **{ui.itemInspector.name}**;
- **{ui.itemInspector.picture}**: a picture of type "Prop", shown in the inventory (you can import one on the spot);
- **{ui.itemInspector.description}**: what players read when they look at it in the inventory;
- **{ui.itemInspector.kind}**: **{ui.itemInspector.single}** (players have it or not, like a key) or **{ui.itemInspector.stackable}** (players can have several, like coins; the inventory shows how many);
- **{ui.itemInspector.usedIn}**: where the item is used, or "Not used yet. Give it with an Item moment, a choice or a Pick up zone".

### Delete an item

**{ui.itemInspector.deleteItem}** asks first, and lists where the item is used. Only the item is removed: the places that used it are kept and show a warning until you pick another item.

## Give and take items

- **An Item moment**: it gives items or takes them away, and players do not see the moment itself. Choose **{ui.branchInspectors.give}** or **{ui.branchInspectors.remove}**, the item, and how many for a stackable item. A checkbox decides whether to show a notice ("You got: …"). See [Scenes, moments and the timeline](/novelworks-docs/concepts/scenes-moments-timeline/).
- **A choice option**: **{ui.branchInspectors.giveRemoveAnItem}** adds a change to an option. A notice is always shown. See [Choices](/novelworks-docs/branching/choices/).
- **An exploration zone**: **{ui.explorationInspectors.pickUpAnItem}** (the zone and its props disappear for good) or **{ui.shared.exploration.useAnItem}**. See [Exploration](/novelworks-docs/features/exploration/).

A single item can never be more than one, and a stackable item never goes below zero. Removing more than the player has removes what exists.

## Check items

In an [If…](/novelworks-docs/branching/conditions/), in the condition of an option or of a zone, choose **{ui.moments.item}** in **{ui.branchInspectors.whatToCheck}**: the player **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}** or **{ui.conditionTests.hasAtLeast}** a number of that item. A test on a deleted item never passes.

If you turn the Inventory feature off, players lose the button, the menu entry and the **I** key, but moments that give or check items keep running; the editor warns you. See [The features library](/novelworks-docs/features/features-panel/).

## What players see

- A button in a corner of the screen (top right by default, and set in the [Inventory screen](/novelworks-docs/game-ui/inventory-ui/)), an entry in the pause menu, and the **I** key.
- A panel with a grid of the items they own, with counts for stackable items. Clicking one shows its description. There is no "use" button: using an item is something a zone checks.
- **{ui.gameUI.notices}** such as "You got: Key" and "You lost: Key" (see [Notifications](/novelworks-docs/game-ui/notifications/)).
- Items are kept in the player's saves. When an old save is loaded, items that no longer exist are dropped.

## Testing

In Play mode, **{ui.playOverlay.variablesItems}** shows every item of your game with a **−** and a **+** to give or remove one while you test (without a notice). Before the game starts it says "{tx.playOverlay.startPlayingToGiveOrRemoveItems}"

## Warnings

- Pick the item to give or to remove; this moment gives or removes an item that was deleted.
- The Inventory feature is off: players have no inventory. Turn it on in Features.
- An effect or a condition uses or checks an item that is not picked, was deleted, or while the Inventory feature is off.
- A zone needs an item that players can never get (nothing in the story gives it).
