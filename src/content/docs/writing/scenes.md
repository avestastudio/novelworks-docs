---
title: Scenes
description: Create, rename, reorder, duplicate and delete scenes, and choose where the game starts.
---

A scene is a chapter of your story: a series of [moments](/novelworks-docs/writing/moments-and-dialogue/) played one after another. Scenes live in the **{ui.leftPanel.scenes}** tab. For the big picture, see [Scenes, moments and the timeline](/novelworks-docs/concepts/scenes-moments-timeline/).

## Create a scene

Click **{ui.scenesTab.newScene}**. The scene is named "Scene N", where N is the number of scenes you already have plus one (or the next number if that name exists), contains one empty line of dialogue, and is selected. If your project had no start scene, the new scene becomes the start scene.

## Rename a scene

Double-click the scene in the list, type the name and press **Enter**. **Esc** cancels, and an empty name keeps the old one. You can also use **{ui.sceneInspector.name}** in the inspector, or right-click the scene and choose **{ui.contextMenus.rename}**. A scene with no name shows as "Untitled scene".

## Reorder scenes

Drag a scene up or down in the list. The order of the list does not change how the story plays: scenes are linked by choices, conditions, jumps and zones.

## Duplicate a scene

Use **{ui.scenesTab.duplicateScene}** on the row, or **{ui.contextMenus.duplicate}** in the right-click menu, or **Cmd+D** / **Ctrl+D** with the scene selected. The copy goes right after the original and is named like "A helping hand (copy)". It keeps the summary and the writing status, its moments get new identities, and its place on the story map is chosen again.

## Delete a scene

Click **{ui.scenesTab.deleteScene}** (or **{ui.contextMenus.delete}** in the right-click menu). NovelWorks always asks first, and tells you:

- how many moments will be deleted;
- if it is the start scene, which scene will become the start scene (or that your game will have no scenes left);
- if other scenes lead to it, which moments do so.

Choices, conditions, jumps and zones that led to a deleted scene are **not** changed. They keep pointing at nothing and show a warning until you pick another scene. You can undo a deletion with **{ui.native.menu.undo}**.

## The start scene

The game begins at the **start scene**. It has a star and the label "Start scene". To change it, click the star button on another scene (**{ui.scenesTab.makeStartScene}**), use **{ui.contextMenus.setAsStartScene}** in the right-click menu, or use the button in the scene's inspector.

## What the list shows

Each scene row shows how many moments it has. A small fork with "Branches: N" shows how many moments let the story go elsewhere (see [How a story branches](/novelworks-docs/concepts/how-stories-branch/)). A red **{ui.scenesTab.unreachable}** tag means players cannot get there yet: no choice, condition, jump or zone leads to it from the start scene.

## The scene inspector

Select a scene to see:

- **{ui.sceneInspector.name}**;
- **{ui.sceneInspector.summary}**: a sentence or two, for you only. It is shown on the story map and above the timeline, and never in the game;
- **{ui.sceneInspector.startsChapter}**: makes this scene the start of a chapter, with an optional name. Chapters follow the order of the Scenes list. See [Chapters](/novelworks-docs/game-ui/chapters/);
- **{ui.sceneInspector.writingStatus}**: **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** or **{ui.shared.outline.done}**. If you never set it, it is "To write" until the scene has some text, then "{tx.shared.outline.draft}";
- the start-scene button;
- **{ui.branches.entriesTitle}**: the places that lead to this scene, which you can click;
- **{ui.sceneInspector.deleteScene}** and duplicate buttons.

## Play from a scene

Right-click a scene and choose **{ui.contextMenus.playFromHere}** to play from its first moment (disabled if the scene has no moments).
