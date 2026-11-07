---
title: Keys and touch screens
description: Every key, mouse action and touch gesture players can use in the game.
---

Shortcuts are ignored while **Ctrl**, **Cmd** or **Alt** is held (except holding **Ctrl** alone to skip).

## Keyboard

| Key | What it does |
|---|---|
| **Space**, **Enter** | Finishes the text, then moves on. On a focused button, presses it. On a focused zone, uses it. |
| **1** to **6** | Picks the Nth option on screen. The first press while text is appearing finishes it. |
| **Esc** | Opens or closes the pause menu. Closes the inventory, History, Options and Save/Load. |
| **H** | Opens or closes the History. |
| **A** | Turns Auto on or off. |
| **S** | Turns Skip on or off. |
| **Ctrl** (held) | Skips while held. |
| **F5** | Quick save (while playing). |
| **F9** | Quick load (even from the title). |
| **I** | Opens or closes the inventory (with the Inventory feature). |
| **M** | Opens the map (when the Map button is shown). |
| **Tab** | Moves between buttons and exploration zones. It stays inside Save, History, Options and the content warning while they are open. |
| Arrows, **Home**, **End**, **Page Up**, **Page Down** | In the History: scroll. In Save and Load: arrows, **Home** and **End** move between slots. In Options: the arrows change the value. They do not move the story. |
| `Delete` / `Backspace` on a slot | Asks to delete the save. |

There is no fullscreen key in the game: the browser's own (**F11**) works, or the fullscreen button of the page.

## Mouse

- **Left click** on the story: finishes the text, moves on, picks a choice, or uses a zone.
- **Right click**: opens or closes the pause menu (the browser's menu never shows over the game). It does nothing while Save, Load, History, Options or a question is open.
- **Wheel up**: opens the History. Wheel down does nothing.
- **Hover** over an exploration zone: shows its highlight and label.

## Touch screens

- **Tap** moves on, like a click.
- On an exploration zone **with a label**, the first tap shows the label and the second tap acts. Without a label, one tap acts.
- There is no swipe, long press or double tap in the game. A right click has no touch equivalent: the page adds a **{ui.gameUIInspector.menu}** button for touch devices.
- Dragging scrolls the History.

## What the exported web page adds

A small group of buttons at the top right (faint until touched or hovered):

- **{ui.gameUIInspector.menu}**, on touch devices only: opens the pause menu, since there is no right click or Esc.
- **{rt.player.fullscreen}** / **{rt.player.exitFullscreen}**, when the browser supports it (not on iPhone).

There is no Quit button in the web game. The game is scaled to fit the window with black bars around it, keeping its shape. It needs JavaScript, and a browser that allows local storage to keep saves. See [Web export](/novelworks-docs/publish/web-export/).
