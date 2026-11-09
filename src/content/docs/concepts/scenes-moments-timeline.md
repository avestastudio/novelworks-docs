---
title: Scenes, moments and the timeline
description: How a story is organized in NovelWorks, from scenes to moments.
---

## Scenes and moments

A story is a set of **scenes**, like chapters. A scene is a series of **moments**, like slides, played in order. Most moments are a line of dialogue, but there are eight kinds.

![A scene as a row of moments: two dialogues, a choice, an If, a jump and an ending.](/novelworks-docs/diagrams/moments-strip.svg)

| Kind | What it does | Players see it |
|---|---|---|
| **{ui.moments.dialogue}** | A line of dialogue or narration. | Yes |
| **{ui.moments.choice}** | The player picks an option. It can change variables and lead to another scene. | Yes |
| **{ui.moments.condition}** | Sends the story elsewhere depending on a variable. | No, the game checks and moves on |
| **{ui.moments.jump}** | Goes straight to another scene. | No |
| **{ui.moments.ending}** | Shows the ending's name, then goes back to the title screen. | Yes |
| **{ui.moments.exploration}** | No text box: the player clicks zones on the picture to look around, change variables or go to another scene. | Yes |
| **{ui.moments.item}** | Gives items to the player or takes them away, with a short notice. | Only the notice |
| **{ui.moments.showMap}** | Opens the map right away. | Only the map |

**{ui.moments.item}** and **{ui.moments.showMap}** are in the list only when the Inventory and Map features are on. See [Exploration](/novelworks-docs/features/exploration/), [Inventory](/novelworks-docs/features/inventory/) and [Map](/novelworks-docs/features/map/).

Scenes are linked to each other **only through moments**: the options of a choice, the cases of an If, a jump, or the zones of an exploration. Moments inside a scene always play one after the other.

## The timeline

At the bottom of the window, the timeline shows the moments of the selected scene as cards.

- The header has the scene name, the number of moments and words, and the scene's summary if you wrote one. Click the summary to edit it in the inspector.
- Each card shows its kind, the speaker (or "Narrator") and a short summary of what it says or does. A card can carry a note or a warning.
- Click a card to select it and edit it on the game screen and in the inspector. Drag cards to reorder them.
- In the header, **{ui.moments.dialogue}** adds a line of dialogue **after the selected moment**, and **{ui.timeline.addOther}** lists the other kinds, each with a sentence that explains it. A **+** card at the end adds a line of dialogue.
- Two icons duplicate and delete the selected moment. Both are also in the right-click menu of a card. Deleting asks for confirmation unless the moment is an empty line of dialogue.
- Under the cards, a chart shows who is on stage ([The stage](/novelworks-docs/concepts/stage/)), rows show how far each [sound](/novelworks-docs/writing/sound/) goes when the scene has sounds, and a row shows where the story branches ([How a story branches](/novelworks-docs/concepts/how-stories-branch/)).

### The fast way to write

In the dialogue box, **Enter** starts a new moment with the same stage. **Shift+Enter** adds a line inside the same box.

## The start scene

The game begins at the **start scene**, marked with a star in the Scenes tab. To change it, use **{ui.scenesTab.makeStartScene}** on another scene.

## Scenes the player cannot reach

A scene that no choice, condition, jump or zone leads to, starting from the start scene, is marked **{ui.scenesTab.unreachable}** in the Scenes tab, and has a warning. See [Problems](/novelworks-docs/testing/problems/).

## Summary and writing status

Select a scene to give it a **{ui.sceneInspector.summary}**. It is for you only, and shows on the story map. Each scene also has a **{ui.sceneInspector.writingStatus}**: **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** or **{ui.shared.outline.done}**. If you do not set it, it is **{ui.shared.outline.toWrite}** until a dialogue line has text, then **{ui.shared.outline.draft}**.

## More about scenes

See [Scenes](/novelworks-docs/writing/scenes/) and [Moments and dialogue](/novelworks-docs/writing/moments-and-dialogue/).
