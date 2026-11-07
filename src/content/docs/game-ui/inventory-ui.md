---
title: Inventory screen
description: The Inventory button and the panel of items.
---

The **{ui.gameUI.inventory}** screen is the button players use to open their items, and the panel that lists them. It needs the [Inventory feature](/novelworks-docs/features/inventory/). When the feature is off, the page says so and offers to open Features.

## The button

- **{ui.gameUIInspector.label}**: the text of the button, the title of the panel and the name of the pause-menu entry. Default "Inventory".
- **{ui.gameUIInspector.cornerOfTheScreen}**: top left, top right (default), bottom left or bottom right.
- **{ui.gameUIInspector.buttonStyle}**: "Same as Fonts & colors" by default.

The button is hidden on the title screen, the end screen and while paused.

## The panel

- **{ui.gameUIInspector.panelColor}**: "Same as the dialogue box" by default.
- **{ui.gameUIInspector.textColor}**: "Same as the text color" by default.

## What players get

Players open it with the button, the pause menu or the **I** key. It is a panel in the middle of the game with a grid of the items they own: a picture, the name, and for stackable items a count such as "×3". Selecting an item shows its description (or its name if it has none). It says "Nothing here yet." when empty. Esc, **I**, the × button or a click outside closes it. The story is paused while it is open.
