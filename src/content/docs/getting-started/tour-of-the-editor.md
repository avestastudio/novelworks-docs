---
title: Tour of the editor
description: The areas of the NovelWorks window and what each control does.
---

The editor has a **top bar** and, in {ui.topBar.story} mode, three more areas: the **left panel**, the center and the bottom, plus the **inspector** on the right.

![The NovelWorks editor: scene list on the left, the game screen in the middle, the timeline and the chart of who is on stage at the bottom, and the inspector on the right.](/novelworks-docs/screenshots/editor-overview.png)

## The top bar

From left to right:

- On Windows, **{ui.appMenuButton.menu}** comes first and opens the application menu (File, Edit, View, Help).
- **The back arrow** returns to the [projects screen](/novelworks-docs/getting-started/projects-screen/). If you have unsaved changes it asks whether to save them first.
- **The project title** (or "{tx.topBar.untitledProject}"). Click it to show the project settings in the inspector (see [Editor and project settings](/novelworks-docs/getting-started/editor-settings/)).
- **The save indicator**: {ui.topBar.unsavedChanges}, {ui.topBar.savedAuto} or {ui.topBar.saved}.
- **Three modes**:
  - **{ui.topBar.story}**: scenes, moments and characters. This is where you write.
  - **{ui.topBar.storyMap}**: every scene of your game and how choices, conditions and jumps link them.
  - **{ui.topBar.gameUI}**: how your game looks (title screen, dialogue box, menus).
- **{ui.topBar.undo}** and **{ui.topBar.redo}** arrows.
- **{ui.topBar.save}**.
- **{ui.topBar.playFromHere}** plays from the selected moment. In the Map workspace it becomes **{ui.topBar.testMap}**.
- **{ui.topBar.play}** plays from the title screen.

On a narrow window the mode names and the "{tx.leftPanel.playFromHere}" label shrink to icons.

## The left panel

Tabs:

- **{ui.leftPanel.scenes}**: your scenes. Drag to reorder; the star marks the start scene.
- **{ui.leftPanel.assets}**: your pictures, videos and sounds, with an **{ui.assetsTab.import}** button and filters by type.
- **{ui.leftPanel.characters}**: your characters and how many expressions each one has.
- **{ui.leftPanel.variables}**: what your game remembers.
- **{ui.leftPanel.items}**: only when the Inventory feature is on.

At the bottom: **{ui.leftPanel.map}** (only when the Map feature is on), **{ui.leftPanel.features}** (opens the list of optional parts of your game) and a tip that changes every 30 seconds. While you search (**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**), the search panel replaces the tabs.

You can drag the edge between panels to resize them; double-click the edge to go back to the default width. Your widths are remembered on this computer.

## The center: the game screen

The game as players will see it, scaled to fit. Above it you find only these controls:

- the background button, which chooses the moment's background;
- **{ui.stageControls.character}**, which puts a character on stage;
- on an {ui.moments.exploration} moment, the tool to draw zones (see [Exploration](/novelworks-docs/features/exploration/));
- **{ui.topBar.visual}** and **{ui.topBar.script}**: show the scene as the game screen with a timeline, or as text you can type like a screenplay.

Click a character on the game screen: a small bar over it changes its expression and its outfit. Everything else about the character is in the inspector. See [Staging a scene](/novelworks-docs/writing/staging/).

On a short window (under about 780 pixels high), the chart under the timeline shows fewer rows, to leave room for the game screen.

## The bottom: the timeline

The moments of the current scene, as cards you can reorder. In the header of the timeline, **{ui.moments.dialogue}** adds a line of dialogue after the selected moment, and **{ui.timeline.addOther}** lists the other kinds of moment, each with a sentence that explains it. Two icons duplicate or delete the selected moment. These two actions are also in the right-click menu of a card. Under the cards, a chart shows who is on stage, rows show how far each sound goes (when the scene has sounds) and a row shows where the story branches. See [Scenes, moments and the timeline](/novelworks-docs/concepts/scenes-moments-timeline/).

## The right: the inspector

The properties of what you selected: a moment, a scene, an image, a character, a variable, an item, a character on stage. Its title changes with the selection. With nothing selected it shows the **{ui.inspector.projectSettings}**.

A moment has four tabs:

- **{ui.inspectorTabs.text}**: who speaks and what is said (or the choice, the condition…), where the moment leads, what leads to it, and your note.
- **{ui.inspectorTabs.image}**: how far a change reaches, the background, the ambience and who is on stage.
- **{ui.inspectorTabs.effects}**: the camera and the effects.
- **{ui.sound.tab}**: music, ambient sound, sound effects and voice.

See [The moment panel](/novelworks-docs/writing/moment-panel/). When you click a character on the game screen, the inspector shows **{ui.inspector.characterOnStage}**: its position, size, direction, order and outfit.

## The menus

On a Mac the app menu holds About, Services, Hide and Quit; on Windows, Quit is in the File menu.

- **{ui.native.menu.file}**: {tx.native.menu.newProject}, {tx.native.menu.openProject}, {tx.native.menu.save}, {tx.native.menu.restoreFromBackup}, {tx.native.menu.importScript}, {tx.native.menu.exportScript}, {ui.native.menu.exportForWeb}, {tx.native.menu.closeProject}.
- **{ui.native.menu.edit}**: {tx.native.menu.undo}, {tx.native.menu.redo}, {tx.native.menu.findAndReplace}, Cut, Copy, Paste, Select All, Spelling Language.
- **{ui.menu.view}**: {tx.native.menu.theme}, Language, Toggle Full Screen.
- **{ui.native.role.window}**.
- **{ui.native.role.help}**: Documentation, {tx.native.menu.replayTutorial}, {tx.native.menu.keyboardShortcuts}, {tx.native.menu.activateNovelWorks} (full version only), {tx.native.menu.reportABug}, and About on Windows.

A complete list of shortcuts is in [Keyboard shortcuts](/novelworks-docs/reference/keyboard-shortcuts/).
