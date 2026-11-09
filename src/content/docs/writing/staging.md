---
title: Staging a scene
description: Choose the background, put characters on the screen and place, resize, flip and order them.
---

Staging means deciding what the player sees behind the text: the background and the characters. Everything happens on the game screen, in the **{ui.topBar.story}** mode, Visual view. Before you start, read [The stage](/novelworks-docs/concepts/stage/): what you set at one moment carries on to the next ones. For an overview of the tabs on the right, see [The moment panel](/novelworks-docs/writing/moment-panel/).

## Choose how far a change reaches

The switch **{ui.stage.scopeLabel}** has two settings: **{ui.stage.scopeFollowing}** (the default) and **{ui.stage.scopeOnlyHere}**. You find it in the **{ui.inspectorTabs.image}** and **{ui.inspectorTabs.effects}** tabs of a moment, and in the panel of a character on stage. Set it before you change something. Moments that were reached by a change flash briefly in the timeline, and on the game screen characters are marked **{ui.stage.markNew}** or **{ui.stage.markChanged}**.

## The background

- Click the background button above the game screen ("{ui.stage.chooseTheBackgroundOfThisMoment}"), or **{ui.momentInspector.change}** in the **{ui.inspectorTabs.image}** tab. The picker offers your backgrounds and CGs, and a way to import a new picture or an [animated background](/novelworks-docs/writing/ambience-and-animated-backgrounds/) straight away. **{ui.momentInspector.noneBlackScreen}** gives a black screen.
- **{ui.momentInspector.applyToTheFollowingMoments}**, in the **{ui.inspectorTabs.image}** tab, gives this moment's background to every later moment of the scene, after asking you to confirm. It is disabled on the last moment.

An empty scene shows **{ui.stage.chooseBackground}** on the game screen. The same tab also has the [ambience](/novelworks-docs/writing/ambience-and-animated-backgrounds/) of the moment.

## Put a character on stage

Click **{ui.stageControls.character}** above the game screen ("{ui.stageControls.putACharacterOnStage}"), or **{ui.momentInspector.add}** in the **{ui.momentInspector.onStage}** section of the **{ui.inspectorTabs.image}** tab. The list shows your characters; those already on stage are disabled. If you have none, **{ui.stageControls.newCharacter}** creates one.

The character goes on the first free place among center, left and right, at the bottom edge. If all three places are taken, the new character is placed near the middle, a little to the side of the others, and characters can overlap: drag them where you want. The **{ui.stage.castTitle}** bar in that section also puts characters on and off stage with one click.

## Select, move and resize

- **Click** a character on the game screen to select it. A small bar appears over it with its expression and its outfit, and the inspector shows **{ui.inspector.characterOnStage}**: all its details. **{ui.stageCharacterInspector.backToTheMoment}** returns to the moment's tabs.
- **Drag** it to move it anywhere. It snaps to Left, Center and Right, and to the bottom edge, when you get close. The whole drag is one undo step.
- **Drag a corner** to resize it (**{ui.stage.dragToResize}**). The feet stay in place. The size goes from 30 % to 200 %.

## Place, flip and order

The bar over the character keeps only the expression and the outfit (the outfit appears when the character has outfits). The rest is in the inspector, once the character is selected (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**):

| Control | What it does |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Changes the expression. The default one has a star. If the character has no expressions, a button takes you to the Characters tab. |
| **{ui.stageControls.outfit}** | Changes the outfit. See [Outfits](/novelworks-docs/writing/outfits/). |
| {ui.scenes.left} / {ui.scenes.center} / {ui.scenes.right} | Puts the character on one of three places at the bottom of the screen. They keep their size and direction. |
| **{ui.stageCharacterInspector.flippedHorizontallyFacingTheOtherWay}** | Turns the character to face the other way. |
| **{ui.stageCharacterInspector.forward}** / **{ui.stageCharacterInspector.backward}** | Moves the character in front of or behind another one. The dialogue box is always on top. |
| **{ui.stageCharacterInspector.removeFromStage}** | Takes the character off stage, following the **{ui.stage.scopeLabel}** switch. |

The inspector also has a **{ui.stageCharacterInspector.size}** slider and a button to edit the character's name and expressions.

You can also right-click a character for the expression, outfit, position, flip and order, plus **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** and **{ui.contextMenus.leavesHere}**; they are explained in [The stage](/novelworks-docs/concepts/stage/).

To remove a selected character you can also press `Delete` or `Backspace`. The arrow keys do not move characters: they move between moments.

## Start a scene like another one ended

On the first moment of a scene that other scenes lead to, a banner in the **{ui.inspectorTabs.image}** tab can offer to start with what was on screen at the end of the scene before. See [The stage](/novelworks-docs/concepts/stage/).

## While you edit

- The game screen is always scaled to fit the window.
- A character with no picture is drawn as a dashed outline with "{tx.render.noPicture}", so you can still place them. In the game, such a character is not drawn.
- The dialogue box is replaced by editable fields while you edit.
