---
title: Troubleshooting and messages
description: What the messages of NovelWorks mean and what to do, for opening projects, activation, exporting and saving.
---

## Opening a project

| Message | What it means and what to do |
|---|---|
| "… is not a Novelworks project: it has no project.json file." | The folder you chose has no `project.json`. Choose the project's folder itself. |
| "project.json is damaged: it is not valid JSON." | The file was changed or cut short. Open a backup: copy a file from `backups` over `project.json` (keep the damaged one aside). |
| "This project was saved by a newer version of Novelworks (format N). Please update Novelworks to open it." | Install the latest NovelWorks. Nothing was changed. |
| "Novelworks could not save a safety copy of this project before upgrading it, so it was not opened. Your project has not been changed." | The folder cannot be written to. Check its permissions and the free space, then open it again. |
| "{tx.projectHub.folderNotFound}" (projects screen) | The project's folder was moved or deleted. Click **{ui.projectHub.locate}** and pick its new place. |

## Activation

| Message | What to do |
|---|---|
| Paste your download key first. | Paste the key in the field. |
| NovelWorks couldn't reach the activation server. | Check your internet connection and try again. Activating and deactivating need it. |
| This isn't a NovelWorks download key. | Copy it again from your download page or your purchase email. |
| This key is already activated on 3 computers. | Deactivate NovelWorks on another computer, or use **{ui.activateDialog.contactUs}** in the window. |
| Activation isn't working right now. Try again in a few minutes. | A temporary problem on the server's side. |
| Deactivation isn't working right now. Try again in a few minutes. | The same, when deactivating. |

## Exporting

See the table in [Web export](/novelworks-docs/publish/web-export/). The most common: pick another folder (Documents or Desktop), free some disk space, or activate NovelWorks.

## Saving in your games

The messages players see when the browser blocks storage are in [Saving and loading](/novelworks-docs/player/save-and-load/).

## When something looks wrong in the story

- A scene marked **{ui.scenesTab.unreachable}**, a triangle on a card, or a box "{tx.branchInspectors.thisMomentNeedsYourAttention}": see [Problems: every warning](/novelworks-docs/testing/problems/).
- A character is missing from the screen: characters stay on stage until something changes them, and leave when a moment says so. See [The stage](/novelworks-docs/concepts/stage/).
- A choice option does not show: it may have a condition. See [Choices](/novelworks-docs/branching/choices/).
- The story skips an If…: a condition checks something that was deleted. See [If… conditions](/novelworks-docs/branching/conditions/).

## Still stuck?

[Report a bug](/novelworks-docs/reference/report-a-bug/).
