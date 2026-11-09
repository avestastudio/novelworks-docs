---
title: The moment panel
description: The Text, Image, Effects and Sound tabs of a moment, the buttons under the timeline and the tools above the game screen.
---

Select a moment in the timeline and the panel on the right shows its settings, in four tabs. If you click a character on the game screen, the panel shows that character instead. **{ui.stageCharacterInspector.backToTheMoment}** brings the tabs back.

If the moment has a problem, a box above the tabs tells you what is wrong.

## The four tabs

| Tab | What you set there |
|---|---|
| **{ui.inspectorTabs.text}** | What is read: who speaks and what they say, or the settings of a choice, a condition or another kind of moment. Your private note. |
| **{ui.inspectorTabs.image}** | What is seen: the background, the ambience and the characters on stage. |
| **{ui.inspectorTabs.effects}** | How it moves: the camera and the effects. |
| **{ui.sound.tab}** | What is heard: music, ambient sound, sound effects and the voice of the line. |

A small dot on a tab tells you there is something in it:

- **{ui.inspectorTabs.effects}** has a dot when this moment has a camera, a foreground, particles or effects. Camera, foreground and particles carry on to the next moments, so the dot can also come from an earlier moment.
- **{ui.sound.tab}** has a dot when this moment has a sound setting of its own.
- **{ui.inspectorTabs.text}** and **{ui.inspectorTabs.image}** never have a dot.

## Text

![The Text tab of a dialogue moment, with the speaker, the line, the Insert buttons and the note.](/novelworks-docs/screenshots/moment-text-tab.png)

On a dialogue moment you find **{ui.momentInspector.speaker}**, **{ui.momentInspector.text}** and the **{ui.richText.insert}** buttons. See [Styling your text](/novelworks-docs/writing/rich-text/).

On the other kinds of moment, the top of the tab holds the settings of that kind.

In the Visual view, the tab then shows where the moment leads and, on the first moment of a scene, what leads to it. Below that come **{ui.momentInspector.note}** and **{ui.momentInspector.script}**, which shows how the moment is written in [Script mode](/novelworks-docs/writing/script-mode/).

## Image

![The Image tab, with the reach of changes, the background, the ambience tiles and the characters on stage.](/novelworks-docs/screenshots/moment-image-tab.png)

From top to bottom:

- **{ui.stage.scopeLabel}**: **{ui.stage.scopeFollowing}** or **{ui.stage.scopeOnlyHere}**. See [The stage](/novelworks-docs/concepts/stage/).
- **{ui.momentInspector.background}**: see [Staging a scene](/novelworks-docs/writing/staging/).
- **{ui.ambience.title}**: see [Ambience and animated backgrounds](/novelworks-docs/writing/ambience-and-animated-backgrounds/).
- **{ui.momentInspector.onStage}**: the characters on stage, with their expression and place.

## Effects

![The Effects tab, with a small preview of what the player sees and the buttons that open the camera and the effects.](/novelworks-docs/screenshots/moment-effects-tab.png)

The tab starts with the same **{ui.stage.scopeLabel}** setting. Then:

- **{ui.camera.title}**: a small preview of what the player sees, and **{ui.camera.open}**. See [The camera](/novelworks-docs/writing/camera/).
- **{ui.effects.title}**: the effects of this moment, and **{ui.effects.open}**. See [Effects](/novelworks-docs/writing/effects/).

## Sound

The tab is explained in [Sound and music](/novelworks-docs/writing/sound/).

## Under the timeline

- The button with a plus sign, **{ui.moments.dialogue}**, adds a line of dialogue after the selected moment in one click.
- **{ui.timeline.addOther}** opens the list of the other kinds of moment, each with a sentence that says what it is for. Two of them appear only when the matching [feature](/novelworks-docs/features/features-panel/) is on: **{ui.moments.item}** (Inventory) and **{ui.moments.showMap}** (Map).
- Two icon buttons next to them duplicate and delete the selected moment. You can also right-click a moment for **{ui.contextMenus.duplicate}** and **{ui.contextMenus.delete}**.

## Above the game screen

The bar above the game screen is short:

- The background button shows the name of the current background and opens the picker.
- **{ui.stageControls.character}** puts a character on stage.
- On an exploration moment, the tools for drawing zones.
- **{ui.topBar.visual}** and **{ui.topBar.script}**, on the right, switch between the game screen and the text of the scene.

Clicking the background button or **{ui.stageControls.character}** also switches the panel to **{ui.inspectorTabs.image}**.

## The bar over a character

When you select a character on the game screen, a small bar appears over them. It holds the **{ui.stageCharacterInspector.expression}** and, if the character has other outfits, the **{ui.stageControls.outfit}**.

Everything else is in the panel on the right: **{ui.stageCharacterInspector.position}**, size, flip, **{ui.stageCharacterInspector.order}** and **{ui.stageCharacterInspector.removeFromStage}**.
