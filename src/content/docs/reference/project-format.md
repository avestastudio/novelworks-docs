---
title: Project format, compatibility and backups
description: What is in a project folder, how old and new projects are handled, and how your work is protected.
---

## What a project is

A project is a **folder** that you can copy, move or back up like any other:

- `project.json`: your whole game, in one file (text in the JSON format, with 2-space indentation).
- `assets`: the pictures you imported.
- `backups`: earlier versions of `project.json`, and `backups/deleted-assets` for pictures you deleted.

Each time you save, NovelWorks writes the file safely (to a temporary file, then renames it), so a crash while saving does not damage it.

## The format version

`project.json` has a **format version**. This version of NovelWorks writes format **17**. Each time the format changed, NovelWorks gained an automatic upgrade, so every older project still opens. Among the changes:

| Format | What it added |
|---|---|
| 2 | Dialogue box options (9-slice corners, text color, one color for all names) and the spelling language. |
| 3, 4 | Writer's notes, positions on the story map, scene summaries and writing status. |
| 5 | Exploration moments (zones and props). |
| 6 | Items and optional features. |
| 7 | Free placement of characters. |
| 8 | The Map feature. |
| 9 | A game identifier, for players' saves, and the look of the Save and Load screens. |
| 10, 12, 13 | The look of the History, quick menu and Options screens. |
| 11 | The map in its own space. |
| 14 | The intro pictures and the content warning. |
| 15 | Characters stay on the stage: a moment stores only what it changes. |
| 16 | An If… with several cases. |
| 17 | A choice option that appears only when a condition holds. |

## Opening an older project

- NovelWorks upgrades the project **in memory** only. Before it hands the project to the editor, it saves an **exact copy** of the original `project.json` in `backups`, named like `project-2026-11-07_17-15-04-migration.json`, and checks that the copy is identical.
- If the copy cannot be made, the project is **not opened** and nothing is changed.
- A bar tells you where the copy is (with **{ui.store.showCopy}**) and that you must save to keep the upgrade. The project counts as unsaved.
- Reopening it without saving reuses the same copy. These "{tx.restoreBackupDialog.beforeUpgrade}" copies are never deleted.
- You can return to the original with **{ui.native.menu.file} → Restore from Backup…**.

Players' saves of your games stay readable: saves point to scenes and moments by their identity.

## Opening a newer project

A project saved by a **newer** version of NovelWorks cannot be opened: NovelWorks says so, and asks you to update. Nothing is changed.

If a folder has no `project.json`, or the file is damaged (not valid JSON), NovelWorks tells you so and does not open it.

## Backups

See [Saving, backups and undo](/novelworks-docs/getting-started/saving-and-undo/): a backup before every manual save, at most one per 15 minutes for autosave, the newest 20 plus the newest of each of the last 7 days.

## Editing the file by hand

You can open `project.json` in a text editor, but do not edit it while NovelWorks has the project open, and keep a copy first. NovelWorks refuses a file it cannot read rather than guessing.

## Demo and full version

Both editions use exactly the same format. See [The free demo](/novelworks-docs/getting-started/demo-edition/).
