---
title: Play, Play from here, Test the map
description: Try your game in the editor, from the beginning or from any moment, without saving or exporting.
---

You can play your game at any time, inside the editor. It plays **what is in the editor right now**, saved or not, with the same engine as an exported game. While you play, editing is blocked.

## Ways to start

| How | Where it starts |
|---|---|
| **{ui.topBar.play}** (top bar, **Cmd+P** / **Ctrl+P**) | The title screen. |
| **{ui.topBar.playFromHere}** (top bar, **Cmd+Shift+P** / **Ctrl+Shift+P**) | The selected moment, without the title screen. It is disabled until a moment is selected. |
| **{ui.contextMenus.playFromHere}** in the right-click menu of a moment or a scene | That moment, or the first moment of that scene. |
| **{ui.scriptMode.playFromCursor}** in [Script mode](/novelworks-docs/writing/script-mode/) (**Cmd+Enter** / **Ctrl+Enter**) | The line under the cursor. |
| **{ui.topBar.testMap}** in the Map workspace (and in the map settings) | The map. In the Map workspace, the **{ui.topBar.playFromHere}** button and **Cmd+Shift+P** / **Ctrl+Shift+P** become "Test map". See [Map](/novelworks-docs/features/map/). |

Each play starts with fresh starting values for your variables and items: nothing is carried over from a previous test.

If your game has no start scene, or the start scene has no moments, **Play** does not start and tells you what to do: set a start scene with the star in the Scenes tab.

## While you play

A bar at the top shows where you are ("The classroom · Moment 2 of 5", with "Choice", "Ending" or "Paused" added when that applies, or "Title screen" or "The End"). It also has the tools described in [Play mode tools](/novelworks-docs/testing/test-saves-and-read-lines/).

You play like a player: click or press **Space** / **Enter** to advance, **1** to **6** to pick an option, **A** for Auto, **S** for Skip, **H** for History, **F5** and **F9** for quick save and load. **Right-click** opens the game's pause menu. See [Keys and touch screens](/novelworks-docs/player/keys-and-touch/).

## Stop

- Click **{ui.playOverlay.stop}**, or press **Esc**. If the pause menu, Save, Load, History, Options, the intro or the content warning is open, **Esc** closes that first. **Esc** does not close the inventory in Play mode: press **I** for that.
- When you stop, the editor selects the scene and the moment where you were.

## What this does not test

Play mode is not the exported game: the "Made with NovelWorks" screen is hidden unless you switch it on, and your tests use their own saves, separate from those of an exported game. To try the real thing in a browser, use [Web export](/novelworks-docs/publish/web-export/) and **Test in browser**.
