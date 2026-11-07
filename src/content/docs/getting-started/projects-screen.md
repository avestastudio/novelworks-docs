---
title: The projects screen and new projects
description: Open, find and create projects, and what a project folder contains.
---

The **projects screen** is the first thing you see when NovelWorks starts, and the place you return to with the back arrow in the top bar.

## The projects list

The list shows your **recent projects**, newest first, up to 30. Each row shows:

- a picture: the last saved game screen, or the first background, or the NovelWorks logo for a project with no pictures yet;
- the project name and the folder it lives in;
- when you last opened it.

Click a row to open the project.

Above the list:

- **{ui.projectHub.open}** opens a project folder from your computer. The shortcut is **Cmd+O** on a Mac and **Ctrl+O** on Windows.
- **{ui.projectHub.newProject}** starts a new project (**Cmd+N** / **Ctrl+N**).
- The search box (**{ui.projectHub.searchProjects}**) filters by name or folder. **Esc** clears it and the down arrow jumps to the first result.

The **…** button on a row (or a right-click on it) opens a menu:

- **{ui.projectHub.open_ed077f}**;
- **{ui.projectHub.showInFinder}** on a Mac, **{ui.projectHub.showInExplorer}** on Windows;
- **{ui.projectHub.removeFromList}**: removes the project from this list only.

If you moved or deleted a project folder, its row turns grey and says **{ui.projectHub.folderNotFound}**. Click **{ui.projectHub.locate}** and choose the folder's new place.

The left side of the screen also has **{ui.projectHub.reportABug}**, the version number, and, in the full version before activation, **{ui.projectHub.activateNovelWorks}**.

## Create a new project

Click **{ui.projectHub.newProject}**.

1. Type the **{ui.newProjectScreen.projectName}**. NovelWorks removes characters a folder name cannot contain (`/ \ : * ? " < > |`) and tells you if the name is empty or already taken.
2. Check the **{ui.newProjectScreen.location}**. It starts at the last place you used, or in Documents → NovelWorks. Click **{ui.newProjectScreen.browse}** to choose another place. The line **{ui.newProjectScreen.willBeCreatedIn}** shows the final folder.
3. Optionally tick the **{ui.newProjectScreen.features}** your game needs: **{ui.shared.features.inventory}** and **{ui.shared.features.map}**. They are all off by default and you can switch them on or off later without losing anything.
4. Click **{ui.newProjectScreen.createProject}** (or press **Enter**). **Esc** cancels.

NovelWorks creates the folder, with a `project.json` file and an empty `assets` folder, and opens the project with one scene, "Scene 1", that holds one empty line of dialogue. A `backups` folder appears the first time a backup is made.

## What is in a project folder

- `project.json`: your whole story, in one file.
- `assets`: the pictures you imported.
- `backups`: earlier versions of `project.json` (see [Saving, backups and undo](/novelworks-docs/getting-started/saving-and-undo/)).

To copy a project to another computer, copy the whole folder. You can then open it with **{ui.projectHub.open}**.

## Older and newer projects

- A project made with an **older** version of NovelWorks opens normally. Before upgrading it, NovelWorks saves an exact copy of the original in `backups`, and shows a bar with **{ui.store.showCopy}**. Nothing is changed on disk until you save.
- A project saved by a **newer** version of NovelWorks cannot be opened. Update NovelWorks first.
