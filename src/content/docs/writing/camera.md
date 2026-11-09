---
title: The camera
description: Choose what the player sees, chain several shots in a moment, and add depth, blur and film effects.
---

The camera decides which part of the scene the player sees: the whole screen or a close-up. Select a moment, open the **{ui.inspectorTabs.effects}** tab of the [moment panel](/novelworks-docs/writing/moment-panel/) and click **{ui.camera.open}**.

![The camera window: the scene with its frame, the ready-made moves on top, the settings on the side and the shots at the bottom.](/novelworks-docs/screenshots/camera-window.png)

On the editor's game screen you always see the whole scene. The small preview in the **{ui.inspectorTabs.effects}** tab shows what the player sees.

## Shots

A moment has one shot or more, shown in a row at the bottom of the window. Each shot is a frame on the scene, and the camera goes from one to the next.

- **Drag** the frame on the scene to choose what the player sees.
- **{ui.camera.addShot}** (the plus sign) adds a shot, up to 6.
- **{ui.camera.removeShot}** deletes the selected one.
- **{ui.camera.play}** plays the shots in the window. **{ui.camera.stop}** ends it.

## Ready-made moves

The buttons at the top write the shots for you. They replace the shots you had, and keep the settings of the whole moment. The moves that close in aim at the first character on stage, or at the middle of the screen if nobody is there.

| Move | What it does |
|---|---|
| **{ui.camera.preset.fixed}** | The whole screen, no movement. |
| **{ui.camera.preset.slowZoom}** | From the whole screen, slowly closer. |
| **{ui.camera.preset.travelling}** | Slides across the scene at a steady speed. |
| **{ui.camera.preset.reveal}** | Starts close, then pulls back to the whole screen. |
| **{ui.camera.preset.focus}** | Moves a little closer while the background blurs. |
| **{ui.camera.preset.tension}** | From the whole screen to a tilted close-up, with some blur. |

## Frame on a character

**{ui.camera.frameOn}** shows the characters on stage. Click one to put the frame on their face. The frame stays where it is: it does not follow the character if they move later.

## Settings of a shot

| Setting | What it does |
|---|---|
| **{ui.camera.zoom}** | From 100 % (the whole screen) to 400 %. |
| **{ui.camera.arrive}** | How the camera reaches this shot: **{ui.camera.smooth}**, **{ui.camera.steady}**, **{ui.camera.quick}** or **{ui.camera.cut}**. For the first shot this setting is **{ui.camera.arriveFirst}**. |
| **{ui.camera.seconds}** | How long the camera takes to get there, from 0.2 to 8 seconds. |
| **{ui.camera.hold}** | Shown instead for a shot reached at once: how long it stays before the next one. |
| **{ui.camera.blur}** | Blurs the background, not the characters. |
| **{ui.camera.tilt}** | Tilts the shot, up to 12 degrees each way. |

On the first moment of a scene, the first shot has nothing to come from. It shows **{ui.camera.start}**.

## Settings of the whole moment

Under **{ui.camera.wholeMoment}**:

- **{ui.camera.bars}**
- **{ui.camera.vignette}**
- **{ui.camera.grain}**
- **{ui.camera.fadeIn}**
- **{ui.camera.handheld}**
- **{ui.camera.depth}**. It is at 100 % when you start, and you can lower it to 0.

**{ui.camera.foreground}** puts a picture in front of the characters, like branches or a window pane. It covers the whole screen, so use a picture with transparent areas. With depth, it moves more than the characters. Clicks go through it.

**{ui.camera.reset}** removes the framing.

## How long it lasts

The camera and the foreground stay from one moment to the next, like the background, until a moment changes them. **{ui.stage.scopeLabel}** is at the bottom of the window: see [The stage](/novelworks-docs/concepts/stage/).

## In the game

- The shots follow one another while the text is typed.
- The first click ends the movement and shows the whole line. The next click moves on.
- The next moments keep the last shot and do not play the shots again.
- Between two moments of a scene, the camera glides to its new place. A new scene starts directly on its first shot.
- A loaded save starts on the last shot.
- The dialogue box and the menus never move.

If the player has asked their system for less motion, the game goes straight to the last shot, with no shaking and no fade.

## Limits

- On an exploration moment, **{ui.camera.tilt}** and **{ui.camera.depth}** are ignored, so that zones stay exactly on what they cover.
- Zooming enlarges the picture: a small background becomes blurry.
- Script mode cannot write the camera. It keeps it when you edit the text.
- The demo allows 2 shots per moment. See [Demo and full edition](/novelworks-docs/getting-started/demo-edition/).
