---
title: Quick menu
description: "The reading controls shown over the story: position, look and which buttons to show."
---

The **{ui.quickMenu.title}** is a small bar of "reading controls over the story". Players can click its buttons instead of using keys.

## Show it, place it

- **{ui.quickMenu.enabled}**: on by default. Turn it off to hide the whole bar.
- **{ui.quickMenu.position}**: top left, top center (default), top right, bottom left, bottom center or bottom right.
- **{ui.quickMenu.margin}**: the gap to the edges, 0 to 10 % (default 1.5).

## Appearance

- **{ui.gameUIInspector.buttonStyle}**: Pill by default.
- **{ui.quickMenu.textSize}**: 60 to 140 % of the base text size (default 80).
- **{ui.quickMenu.buttonColor}**: a translucent dark background by default. A link brings back the default.
- **{ui.gameUIInspector.textColor}**: "Same as the text color" by default.

## Visible buttons

Nine buttons, each with a switch. Their **order is fixed**: you can show or hide them, not reorder them.

| Button | Default | Key | What it does |
|---|---|---|---|
| {ui.quickMenu.button.history} | on | H | Opens the History. |
| {ui.quickMenu.button.auto} | on | A | Turns Auto mode on or off. |
| {ui.quickMenu.button.skip} | on | S | Turns Skip mode on or off. |
| {ui.quickMenu.button.save} | off | | Opens the Save screen. |
| {ui.quickMenu.button.load} | off | | Opens the Load screen. |
| {ui.quickMenu.button.quickSave} | off | F5 | Quick save. |
| {ui.quickMenu.button.quickLoad} | off | F9 | Quick load (greyed out until a quick save exists). |
| {ui.quickMenu.button.options} | off | | Opens the player options. |
| {ui.quickMenu.button.menu} | off | Esc | Opens the pause menu. |

**{ui.quickMenu.shortcutsHelp}**

## When the bar shows

The bar is hidden on the title screen and the end screen, while a menu, History, Options, Save or Load is open, and when every button is hidden. **{rt.game.quickLoad}** is greyed out until a quick save exists. Auto and Skip show whether they are on.
