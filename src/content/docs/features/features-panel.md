---
title: The features library
description: "Turn optional parts of your game on and off: Inventory and Map."
---

Some parts of a visual novel are not needed by every game. NovelWorks lets you add them in one click from the **{ui.featuresDialog.features}** library, and turn them off again without losing anything.

## Open it

- Click **{ui.leftPanel.features}** at the bottom of the left panel.
- Or use **{ui.projectSettings.openFeatures}** in the [project settings](/novelworks-docs/getting-started/editor-settings/), or **{ui.mapMode.features}** at the bottom of the Map workspace.
- When you create a project, the **{ui.newProjectScreen.features}** cards of the New project window do the same (nothing is ticked by default).

The **{ui.featuresDialog.features}** window says: "Add ready-made parts to your game in one click. You can turn them off at any time: nothing you made is lost." It has one card per feature, with a switch and a description. Close it with **{ui.featuresDialog.done}**.

## The two features

| Feature | What it adds |
|---|---|
| **{ui.shared.features.inventory}** | Players collect items (keys, letters, coins, clues) and see them in an Inventory menu. An **{ui.leftPanel.items}** tab appears on the left, and moments, choices, conditions and zones can give, check and use items. See [Inventory](/novelworks-docs/features/inventory/). |
| **{ui.shared.features.map}** | Players open a map and pick where to go. A **{ui.gameUIInspector.map}** button appears on the left, where you draw locations and link them to scenes, and a "Show map" moment opens it during the story. See [Map](/novelworks-docs/features/map/). |

When a feature is on, its card shows **{ui.featuresDialog.openItems}** (Inventory) or the map settings with **{ui.mapSettings.editMap}** (Map). When it is off, the card says "Off".

## What turning a feature off does

- Nothing you made is deleted: the items, the map settings and every moment that uses them are kept. Turning the feature back on brings everything back.
- The tab, the buttons and the moment types of the feature disappear from the editor, and the game shows no inventory or map button.
- Moments that use the feature stay, do nothing in the game, and show a **warning** until you turn it back on.
- If your story uses items, NovelWorks asks first (**{ui.features.turnTheInventoryOff}**) and lists what will stop working. The same for the map when you have "Show map" moments (**{ui.features.turnTheMapOff}**).
- If you were in the Map workspace, you go back to the Story mode. If you were on the Items tab, you go to the Variables tab.

In the Game UI, the Inventory, Map button and Notifications screens stay in the list, with a note that players do not see them while the feature is off.

## Other parts of your game

Exploration (point-and-click scenes) is not a feature to turn on: the Exploration moment is always available. See [Exploration](/novelworks-docs/features/exploration/).
