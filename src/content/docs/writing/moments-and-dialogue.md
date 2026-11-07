---
title: Moments and dialogue
description: Write lines of dialogue, add moments, reorder them and use the moment menu.
---

A **moment** is one step of a scene: a line of dialogue, a choice, a jump… This page is about the most common one, the **{ui.moments.dialogue}** moment. The other kinds are in [Scenes, moments and the timeline](/novelworks-docs/concepts/scenes-moments-timeline/).

## Write a line

Click the dialogue box on the game screen and type. The text is typed directly in the box, and you can also use **{ui.momentInspector.text}** in the inspector.

- **Enter** starts the **next line**: a new dialogue moment after this one, with the same stage and the same speaker, ready to type.
- **Shift+Enter** adds a new line **inside the same box**.
- A long text that does not fit the box shows a warning: press **Enter** to continue on a new moment.

## Who is speaking

Above the text, on the name plate, or with **{ui.momentInspector.speaker}** in the inspector, choose:

- **{ui.stageControls.narrator}**: no speaker, just text;
- a character. Characters on stage are listed first, then the others.

A new line keeps the previous line's speaker. If you delete a character, the lines they spoke become narration.

## Add moments

In the timeline, the buttons above the cards add a moment of each kind **after the selected one**: {ui.moments.dialogue}, {ui.moments.choice}, {ui.moments.condition}, {ui.moments.jump}, {ui.moments.ending}, {ui.moments.exploration}, and, when those features are on, {ui.moments.item} and {ui.moments.showMap}. The **+** at the end of the strip adds a line of dialogue. In an empty scene, **{ui.timeline.writeTheFirstLine}** does the same.

A new moment changes nothing on screen: it shows what the moment before it showed (see [The stage](/novelworks-docs/concepts/stage/)).

## Reorder moments

Drag a card left or right. The arrows **←** and **→** move the selection to the previous and next moment, **Home** and **End** to the first and last, and **Cmd+[** / **Cmd+]** (**Ctrl+[** / **Ctrl+]**) do the same while you are typing.

## What a card shows

A card shows the speaker's name in their color (or "Narrator", or the kind of moment with a color stripe), the beginning of the text, and its number in the corner. It can also show:

- a sticky-note icon if the moment has a [note](/novelworks-docs/writing/notes/);
- a warning triangle: point at it to read what needs attention, for example a choice with no options, a link to a deleted scene, or a moment players can never see because an ending or a jump comes before it;
- small chips for what the moment changes on stage, and below the cards the chart of who is on stage.

## The moment menu

Right-click a card:

| Entry | What it does |
|---|---|
| {ui.contextMenus.insertBefore} | Adds a dialogue moment before this one. |
| {ui.contextMenus.insertAfter} | Adds one after (**Cmd+Enter** / **Ctrl+Enter**). |
| {ui.contextMenus.duplicate} | Copies the moment right after itself, showing the same screen (**Cmd+D** / **Ctrl+D**). |
| {ui.contextMenus.changeType} | Turns the moment into another kind. The text of a dialogue, choice or ending is kept; if some settings cannot be kept, NovelWorks asks and you can undo. |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | Opens the moment's note. |
| {ui.contextMenus.playFromHere} | Plays from this moment (**Cmd+Shift+P** / **Ctrl+Shift+P**). |
| {ui.contextMenus.delete} | Deletes the moment. |

## Delete a moment

Use the bin icon above the timeline, **{ui.momentInspector.delete}** in the inspector, **{ui.contextMenus.delete}** in the menu, or the `Delete` key. NovelWorks asks for confirmation, except for an empty line of dialogue. What the deleted moment changed on stage passes to the next one, so the other moments keep showing the same thing.

## The inspector of a dialogue moment

From top to bottom: any warnings, the **{ui.momentInspector.speaker}** and **{ui.momentInspector.text}**, the **{ui.momentInspector.background}**, who is **{ui.momentInspector.onStage}**, the **{ui.momentInspector.note}**, and **{ui.momentInspector.script}**, which shows how this moment is written in [Script mode](/novelworks-docs/writing/script-mode/) so you can copy it. A dialogue moment has no sound, music or transition setting.
