---
title: Saving, backups and undo
description: How NovelWorks saves your work, keeps earlier versions and lets you go back.
---

## Saving

- Click **{ui.topBar.save}**, choose **File → {ui.native.menu.save}**, or press **Cmd+S** (Mac) / **Ctrl+S** (Windows). A "Project saved." message confirms it.
- NovelWorks also **autosaves**: every 2 minutes, and whenever the window loses focus, but only if you have unsaved changes. The top bar then shows **{ui.topBar.savedAuto}**.
- The save indicator reads **{ui.topBar.unsavedChanges}** until the next save.
- If you close the window or the project with unsaved changes, NovelWorks asks whether to save, not to save, or to cancel.

## Backups

Backups are earlier copies of `project.json`, kept in the `backups` folder inside your project.

- A backup is made **before every manual save**.
- With autosave, a backup is made **at most every 15 minutes**.
- No backup is made if nothing changed since the newest one.
- NovelWorks keeps the **newest 20**, plus the **newest backup of each of the last 7 days**. Older ones are deleted.
- Copies made when an older project is upgraded (**{ui.restoreBackupDialog.beforeUpgrade}**) are never deleted.
- Pictures you delete from the project are moved to `backups/deleted-assets` instead of being erased, so a backup can still find them. They are cleaned up once no kept backup needs them.

### Go back to a backup

1. Choose **File → {ui.native.menu.restoreFromBackup}**.
2. Pick a version in the list. Each row shows its date, its kind (**{ui.restoreBackupDialog.saved}**, **{ui.restoreBackupDialog.autosave}**, **{ui.restoreBackupDialog.beforeRestoringABackup}** or **{ui.restoreBackupDialog.beforeUpgrade}**) and how many scenes and moments it has.
3. Click **{ui.restoreBackupDialog.restoreThisVersion}** (or double-click the row).

Your current version is kept as a backup too, and **{ui.native.menu.undo}** brings it back.

## Undo and redo

**Edit → {ui.native.menu.undo}** (**Cmd+Z** / **Ctrl+Z**) and **{ui.native.menu.redo}** (**Shift+Cmd+Z** on a Mac, **Ctrl+Y** or **Ctrl+Shift+Z** on Windows) go back and forward through your changes. The top bar has the same two arrows.

- NovelWorks remembers the last **200** steps.
- Typing in one text box is grouped: a burst of typing is one step, ended by a pause of about one second.
- An action that changes several things at once, like a change that reaches later moments, is one step.
- Undo still works after you save. It is reset when you open or close a project.
- Undo and redo are off while you are playing.
- Changing the editor's theme or language, resizing panels and moving between tabs are not part of the history.

## Older projects

NovelWorks opens projects made with older versions and upgrades them. Before that, it saves an exact copy of the original `project.json` in `backups`, and a bar at the top shows where, with **{ui.store.showCopy}**. If the copy cannot be made, the project is not opened and nothing is changed. A project from a newer version of NovelWorks is refused.
