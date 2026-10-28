---
title: "保存与撤销"
description: "了解 NovelWorks 如何保护你的工作。"
---

## 保存

按 **Cmd+S** / **Ctrl+S**，或点击 **Save**。自动保存后，顶部显示“Saved · auto”。

## 备份

每次保存，旧版项目都会移入项目内的 `backups` 文件夹。保留最近 20 份备份，以及最近 7 天每天最新的一份。

恢复时打开 **File → Restore from Backup…**，选择版本并恢复。当前版本会先备份，因此恢复后仍可返回原状态。

删除的图片会移到 `backups/deleted-assets`，而非彻底删除，让旧备份仍能找到所需图片。

## 撤销与重做

**Edit → Undo**（**Cmd+Z** / **Ctrl+Z**）和 **Redo** 适用于项目的各类改动，包括文字输入。

## 旧项目

NovelWorks 会打开并升级旧版项目。保存时会备份之前的版本，方便恢复。
