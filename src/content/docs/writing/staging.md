---
title: Staging a scene
description: Choose the background, put characters on the screen and place, resize, flip and order them.
---

Staging means deciding what the player sees behind the text: the background and the characters. Everything happens on the game screen, in the **{ui.topBar.story}** mode, Visual view. Before you start, read [The stage](/novelworks-docs/concepts/stage/): what you set at one moment carries on to the next ones.

## Choose how far a change reaches

Above the game screen, **{ui.stage.scopeLabel}** has two settings: **{ui.stage.scopeFollowing}** (the default) and **{ui.stage.scopeOnlyHere}**. Set it before you change something. Moments that were reached by a change flash briefly in the timeline, and on the game screen characters are marked **{ui.stage.markNew}** or **{ui.stage.markChanged}**.

## The background

- Click the background button above the game screen ("{ui.stage.chooseTheBackgroundOfThisMoment}"), or **{ui.momentInspector.change}** in the inspector. The picker offers your backgrounds and CGs, and a way to import a new picture straight away. **{ui.momentInspector.noneBlackScreen}** gives a black screen.
- **{ui.stage.applyToTheFollowingMoments}** gives this moment's background to every later moment of the scene, after asking you to confirm. It is disabled on the last moment.

An empty scene shows **{ui.stage.chooseBackground}** on the game screen.

## Put a character on stage

Click **{ui.stageControls.character}** above the game screen ("{ui.stageControls.putACharacterOnStage}"), or **{ui.momentInspector.add}** in the **{ui.momentInspector.onStage}** section of the inspector. The list shows your characters; those already on stage are disabled. If you have none, **{ui.stageControls.newCharacter}** creates one.

The character goes on the first free place among center, left and right, at the bottom edge. The **{ui.stage.castTitle}** bar above the game screen also puts characters on and off stage with one click.

## Select, move and resize

- **Click** a character on the game screen to select it. A small toolbar appears over it, and the inspector shows its settings.
- **Drag** it to move it anywhere. It snaps to Left, Center and Right, and to the bottom edge, when you get close. The whole drag is one undo step.
- **Drag a corner** to resize it (**{ui.stage.dragToResize}**). The feet stay in place. The size goes from 30 % to 200 %.

## Place, flip and order

In the toolbar over the character, or in the inspector (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**):

| Control | What it does |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Changes the expression. The default one has a star. If the character has no expressions, a button takes you to the Characters tab. |
| Left / Center / Right | Puts the character on one of three places at the bottom of the screen. They keep their size and direction. |
| **{ui.stage.flipHorizontally}** | Turns the character to face the other way. |
| **{ui.stage.bringForward}** / **{ui.stage.sendBackward}** | Moves the character in front of or behind another one. The dialogue box is always on top. |
| **{ui.stage.removeFromStage}** | Takes the character off stage, from this moment on. |

The inspector also has a **{ui.stageCharacterInspector.size}** slider and a button to edit the character's name and expressions.

You can also right-click a character for the same controls plus **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** and **{ui.contextMenus.leavesHere}**; they are explained in [The stage](/novelworks-docs/concepts/stage/).

To remove a selected character you can also press `Delete` or `Backspace`. The arrow keys do not move characters: they move between moments.

## Start a scene like another one ended

On the first moment of a scene that other scenes lead to, a banner can offer to start with what was on screen at the end of the scene before. See [The stage](/novelworks-docs/concepts/stage/).

## While you edit

- The game screen is always scaled to fit the window. A badge shows the percentage ("Fit · 65 %").
- A character with no picture is drawn as a dashed outline with "(no picture)", so you can still place them. In the game, such a character is not drawn.
- The dialogue box is replaced by editable fields while you edit, and zones are hidden.
- On a narrow window, some tools of the toolbar are gathered in a **{ui.stage.more}** menu.
