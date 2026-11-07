---
title: 保存、备份与撤销
description: NovelWorks 如何保存你的作品、保留早期版本，并让你退回去。
---

## 保存

- 点击{ui.topBar.save}，选择**{ui.native.menu.file} → {ui.native.menu.save}**，或按 **Cmd+S**（Mac）/ **Ctrl+S**（Windows）。会出现一条“{tx.store.projectSaved}”的消息来确认。
- NovelWorks 还会**自动保存**：每 2 分钟一次，以及窗口失去焦点时，但只在有未保存的更改时才保存。这时顶部栏会显示{ui.topBar.savedAuto}。
- 在下一次保存之前，保存指示一直显示{ui.topBar.unsavedChanges}。
- 如果你在有未保存更改时关闭窗口或项目，NovelWorks 会问你是保存、不保存还是取消。

## 备份

备份是 `project.json` 的早期副本，存放在你项目里的 `backups` 文件夹中。

- **每次手动保存之前**都会生成一个备份。
- 自动保存时，**最多每 15 分钟**生成一次备份。
- 如果自最新一个备份以来没有任何改动，就不会生成备份。
- NovelWorks 会保留**最新的 20 个**，外加**最近 7 天里每一天的最新备份**。更早的会被删除。
- 旧项目升级时生成的副本（{ui.restoreBackupDialog.beforeUpgrade}）永远不会被删除。
- 你从项目里删除的图片会被移到 `backups/deleted-assets`，而不是被彻底删除，这样备份仍然能找到它们。当没有任何保留的备份再需要它们时，它们才会被清理。

### 退回到某个备份

1. 选择**{ui.native.menu.file} → {ui.native.menu.restoreFromBackup}**。
2. 在列表里选一个版本。每一行显示它的日期、种类（{ui.restoreBackupDialog.saved}、{ui.restoreBackupDialog.autosave}、{ui.restoreBackupDialog.beforeRestoringABackup}或{ui.restoreBackupDialog.beforeUpgrade}），以及它有多少个场景和片段。
3. 点击{ui.restoreBackupDialog.restoreThisVersion}（或双击该行）。

你当前的版本也会作为一个备份保留下来，而{ui.native.menu.undo}可以把它找回来。

## 撤销和重做

**{ui.native.menu.edit} → {ui.native.menu.undo}**（**Cmd+Z** / **Ctrl+Z**）和{ui.native.menu.redo}（Mac 上是 **Shift+Cmd+Z**，Windows 上是 **Ctrl+Y** 或 **Ctrl+Shift+Z**）可以在你的更改中后退和前进。顶部栏也有同样的两个箭头。

- NovelWorks 会记住最近 **200** 步。
- 在同一个文本框里输入的内容会合并：一阵连续输入算一步，停顿约一秒钟就结束这一步。
- 一次同时改动多处的操作，比如影响后面片段的更改，算作一步。
- 保存之后撤销仍然有效。打开或关闭项目时，撤销记录会清空。
- 试玩时，撤销和重做是关闭的。
- 更改编辑器的主题或语言、调整面板大小、在标签页之间切换，都不属于历史记录。

## 旧项目

NovelWorks 可以打开用旧版本做的项目，并把它们升级。在此之前，它会把原始 `project.json` 的完整副本保存在 `backups` 里，顶部会出现一个提示条，用{ui.store.showCopy}告诉你副本在哪里。如果无法生成副本，项目就不会被打开，也不会有任何改动。来自更新版本 NovelWorks 的项目会被拒绝打开。
