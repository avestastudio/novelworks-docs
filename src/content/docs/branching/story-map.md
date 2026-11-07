---
title: The story map
description: See every scene and how they connect, link scenes by dragging, and spot what needs attention.
---

The **{ui.topBar.storyMap}** shows every scene of your game as a card, and every choice, condition, jump and zone as an arrow between them. Open it from the top bar, or with **Cmd+6** / **Ctrl+6**.

## The scene cards

Each card shows:

- the scene's name, and **★ Start** on the start scene;
- its summary, or "No summary yet" (the [summary](/novelworks-docs/writing/scenes/) is for you only);
- its writing status (**{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** or **{ui.shared.outline.done}**) and its number of words, or "Empty". Point at the word count to see the number of moments;
- a sticky-note badge with the number of moments that have a [note](/novelworks-docs/writing/notes/);
- a warning badge with the number of problems. Point at it to read each one ("Moment 4: …");
- tags: a flag with the name of each ending, **Unreachable** (nothing leads here from the start scene), "Game ends here" (nothing comes after this scene and it has no ending) and "Back to the map".

An unreachable card has a dashed border and is dimmed.

## Arrows

An arrow goes from a scene to the scene one of its moments leads to. All the links between the same two scenes are merged into one arrow with several labels. A label reads "moment number · text", for example "11 · Help", and has the color of its kind of moment.

| Arrow label | Made by |
|---|---|
| The text of an option | An option of a choice that goes to a scene |
| "if …" and "otherwise" | The cases and the otherwise of an If… |
| "jump" | A jump |
| The name of a zone | A zone of an exploration that goes to a scene |

A dotted loop under a scene means "the story continues in that scene": a choice option or an otherwise with no scene, which continues with the next moment. A dashed warning-colored arrow with "deleted scene" means a link goes to a scene that was deleted. Up to three labels are shown on an arrow, then "+N more": point at it to see all.

The **{ui.storyMap.arrows}** legend in the right panel recalls these.

## Move around

- **Scroll** or use two fingers to move the map. **Drag an empty spot**, hold **Space** and drag, or use the middle mouse button, to pan.
- **Pinch**, or hold **Cmd** / **Ctrl** while scrolling, to zoom around the pointer. The buttons zoom out and in (x0.8 and x1.25), between 20 % and 200 %.
- **{ui.storyMap.fit}** shows the whole story (**Shift+1**). **Shift+0** goes back to 100 %.
- **+** and **-** zoom in and out.

The map remembers where you were while NovelWorks is open, and shows the whole story the first time.

## Place the scenes

- **Drag a card** to move it. Its place is saved in the project. A card never lands on another one.
- Scenes you have not placed get an automatic place: columns by distance from the start scene, and unreachable scenes together below.
- **{ui.storyMap.tidyUp}** forgets every place you chose and places all scenes automatically again, starting from the start scene. It is disabled when everything is already automatic.

## Add a scene

Click **{ui.storyMap.newScene}**, or double-click an empty spot of the map. A small card appears: type the name, press **Enter** to go to the summary, and **Enter** again to confirm. **Esc** cancels. The scene is created with one empty line of dialogue.

## Open a scene

Double-click a card, or select it and press **Enter**, or right-click and choose **{ui.storyMap.openInEditor}**: the scene opens in the {ui.topBar.story} mode.

## Link two scenes

Drag the **round handle** on the right of a card to another card, or to an empty spot (to create a new scene there). A small window asks how to link them:

| Kind | What it adds to the end of the first scene |
|---|---|
| {ui.shared.linking.jump} | A jump to the scene, or the target of its last jump. |
| {ui.shared.linking.choiceOption} | An option (you type its text) in the last choice, or a new choice. |
| {ui.shared.linking.condition} | A new If… whose first case goes to the scene. You still have to pick the variable. |
| {ui.shared.linking.explorationZone} | A zone going to the scene, in the last exploration moment. |

A kind that does not apply is greyed out, with the reason: "This scene ends with an ending", "This scene already ends with a jump", "Its choice already has 6 options"… Linking is one step for Undo. It adds a moment to the scene: nothing is stored on the map itself.

## Right-click

### A scene

**{ui.storyMap.openInEditor}**, **{ui.storyMap.rename}**, **{ui.storyMap.editSummary}**, **{ui.storyMap.status}** (To write, Draft, Done), **{ui.storyMap.duplicate}** (the copy appears just below), **{ui.storyMap.setAsStartScene}** and **{ui.storyMap.delete}** (with the usual confirmation).

### An arrow

- **{ui.storyMap.goToTheMomentThatCreatesThis}**: opens that moment (one entry per label when there are several).
- **{ui.storyMap.removeLink}**: for a jump or an option. For a jump, the jump stays but loses its scene. For an option, the option is deleted, unless the choice has only two options, in which case only the link is cleared.
- **{ui.storyMap.unlinkZone}**: for a zone, which stays where it was drawn.

The links made by an If… cannot be removed from the map. Edit them in the inspector. Every removal asks first, and can be undone.

## Highlight what matters

At the top, **{ui.storyMap.highlight}** fades the scenes that do not match, and their arrows:

- **{ui.storyMap.all}**: everything;
- **{ui.storyMap.toWrite}**: the scenes still to write;
- **{ui.storyMap.endingsFilter}**: the scenes that contain an ending;
- **{ui.storyMap.problems}**: the scenes with a warning, or unreachable.

The writing progress is next to it: the number of scenes, then how many are done, draft and to write.

## The right panel

- **With a scene selected**: its inspector (name, summary, writing status, start scene, **{ui.branches.entriesTitle}**, number of moments, and buttons to open, duplicate or delete it).
- **With nothing selected**: a help panel with the **{ui.endings.title}** ([see every ending](/novelworks-docs/branching/endings/)), the **{ui.storyMap.arrows}** legend, and reminders on how to add, link and move scenes.
