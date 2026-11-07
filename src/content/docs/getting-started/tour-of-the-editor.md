---
title: Tour of the editor
description: The areas of the NovelWorks window and what each control does.
---

The editor has a **top bar** and, in {ui.topBar.story} mode, three more areas: the **left panel**, the center and the bottom, plus the **inspector** on the right.

## The top bar

From left to right:

- **The back arrow** returns to the [projects screen](/novelworks-docs/getting-started/projects-screen/). If you have unsaved changes it asks whether to save them first.
- **The project title** (or "Untitled project"). Click it to show the project settings in the inspector (see [Editor and project settings](/novelworks-docs/getting-started/editor-settings/)).
- **The save indicator**: {ui.topBar.unsavedChanges}, {ui.topBar.savedAuto} or {ui.topBar.saved}.
- **Three modes**:
  - **{ui.topBar.story}**: scenes, moments and characters. This is where you write.
  - **{ui.topBar.storyMap}**: every scene of your game and how choices, conditions and jumps link them.
  - **{ui.topBar.gameUI}**: how your game looks (title screen, dialogue box, menus).
- **{ui.topBar.undo}** and **{ui.topBar.redo}** arrows.
- **{ui.topBar.save}**.
- **{ui.topBar.playFromHere}** plays from the selected moment. In the Map workspace it becomes **{ui.topBar.testMap}**.
- **{ui.topBar.play}** plays from the title screen.

On a narrow window the mode names and the "Play from here" label shrink to icons.

## The left panel

Tabs:

- **{ui.leftPanel.scenes}**: your scenes. Drag to reorder; the star marks the start scene.
- **{ui.leftPanel.assets}**: your pictures, with an **{ui.assetsTab.import}** button and filters by type.
- **{ui.leftPanel.characters}**: your characters and how many expressions each one has.
- **{ui.leftPanel.variables}**: what your game remembers.
- **{ui.leftPanel.items}**: only when the Inventory feature is on.

At the bottom: **{ui.leftPanel.map}** (only when the Map feature is on), **{ui.leftPanel.features}** (opens the list of optional parts of your game) and a tip that changes every 30 seconds. While you search (**Edit → {ui.native.menu.findAndReplace}**), the search panel replaces the tabs.

You can drag the edge between panels to resize them; double-click the edge to go back to the default width. Your widths are remembered on this computer.

## The center: the game screen

The game as players will see it, scaled to fit. Above it you can choose the moment's background, add characters, and switch between two things:

- **{ui.topBar.visual}** and **{ui.topBar.script}**: show the scene as the game screen with a timeline, or as text you can type like a screenplay.
- **{ui.stage.scopeLabel}**: **{ui.stage.scopeFollowing}** or **{ui.stage.scopeOnlyHere}**. This is explained in [The stage](/novelworks-docs/concepts/stage/).

Above the screen, a row of small buttons shows where the selected moment leads (see [How a story branches](/novelworks-docs/concepts/how-stories-branch/)).

## The bottom: the timeline

The moments of the current scene, as cards you can reorder. Buttons add a moment of each kind after the selected one, and two icons duplicate or delete the selected moment. Under the cards a chart shows who is on stage and a row shows where the story branches. See [Scenes, moments and the timeline](/novelworks-docs/concepts/scenes-moments-timeline/).

## The right: the inspector

The properties of what you selected: a moment, a scene, an image, a character, a variable, an item, a character on stage. Its title changes with the selection. With nothing selected it shows the **{ui.inspector.projectSettings}**.

## The menus

On a Mac the app menu holds About, Services, Hide and Quit; on Windows, Quit is in the File menu.

- **{ui.native.menu.file}**: New Project, Open Project, Save, Restore from Backup, Import Script, Export the Script, Export for browser, Close Project.
- **{ui.native.menu.edit}**: Undo, Redo, Find and Replace, Cut, Copy, Paste, Select All, Spelling Language.
- **{ui.menu.view}**: Theme, Language, Toggle Full Screen.
- **{ui.native.role.window}**.
- **{ui.native.role.help}**: Documentation, Replay the Tutorial, Keyboard Shortcuts, Activate NovelWorks (full version only), Report a Bug, and About on Windows.

A complete list of shortcuts is in [Keyboard shortcuts](/novelworks-docs/reference/keyboard-shortcuts/).
