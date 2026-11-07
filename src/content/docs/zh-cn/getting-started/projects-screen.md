---
title: 项目界面与新建项目
description: 打开、查找和新建项目，以及项目文件夹里有什么。
---

**项目界面**是 NovelWorks 启动时最先看到的画面，你也可以点击顶部栏里的返回箭头回到这里。

## 项目列表

列表显示你的**最近项目**，最新的在最前面，最多 30 个。每一行显示：

- 一张图片：最后保存的游戏画面；如果没有，就是第一个背景；如果项目还没有图片，就是 NovelWorks 标志；
- 项目名称和它所在的文件夹；
- 你上次打开它的时间。

点击一行即可打开项目。

列表上方有：

- {ui.projectHub.open}：从你的电脑里打开一个项目文件夹。快捷键在 Mac 上是 **Cmd+O**，在 Windows 上是 **Ctrl+O**。
- {ui.projectHub.newProject}：开始一个新项目（**Cmd+N** / **Ctrl+N**）。
- 搜索框（{ui.projectHub.searchProjects}）按名称或文件夹筛选。**Esc** 会清空搜索，向下箭头会跳到第一个结果。

每一行上的 **…** 按钮（或在行上点右键）会打开一个菜单：

- {ui.projectHub.open_ed077f}；
- Mac 上是{ui.projectHub.showInFinder}，Windows 上是{ui.projectHub.showInExplorer}；
- {ui.projectHub.removeFromList}：只把项目从这个列表里移除。

如果你移动或删除了某个项目文件夹，它的那一行会变灰，并显示{ui.projectHub.folderNotFound}。点击{ui.projectHub.locate}，再选择文件夹的新位置。

屏幕左侧还有{ui.projectHub.reportABug}、版本号，以及在完整版尚未激活时出现的{ui.projectHub.activateNovelWorks}。

## 新建项目

点击{ui.projectHub.newProject}。

1. 输入{ui.newProjectScreen.projectName}。NovelWorks 会去掉文件夹名里不能包含的字符（`/ \ : * ? " < > |`），如果名称为空或已被占用，会告诉你。
2. 检查{ui.newProjectScreen.location}。它一开始是你上次用过的位置，或者是“文档 → NovelWorks”。点击{ui.newProjectScreen.browse}可以选择别的位置。{ui.newProjectScreen.willBeCreatedIn}这一行会显示最终的文件夹。
3. 可以勾选你的游戏需要的{ui.newProjectScreen.features}：{ui.shared.features.inventory}和{ui.shared.features.map}。它们默认都是关闭的，之后你可以随时打开或关闭，不会丢失任何内容。
4. 点击{ui.newProjectScreen.createProject}（或按 **Enter**）。按 **Esc** 取消。

NovelWorks 会创建文件夹，里面有一个 `project.json` 文件和一个空的 `assets` 文件夹，然后打开项目。项目里有一个场景“{tx.shared.project.firstScene}”，其中有一句空的对话。第一次生成备份时，会出现一个 `backups` 文件夹。

## 项目文件夹里有什么

- `project.json`：你的整个故事，都在这一个文件里。
- `assets`：你导入的图片。
- `backups`：`project.json` 的早期版本（请看[保存、备份与撤销](/novelworks-docs/zh-cn/getting-started/saving-and-undo/)）。

要把项目复制到另一台电脑，请复制整个文件夹。之后你可以用{ui.projectHub.open}打开它。

## 旧项目和新项目

- 用**旧**版本 NovelWorks 做的项目可以正常打开。升级之前，NovelWorks 会在 `backups` 里保存一份原件的完整副本，并显示一个带有{ui.store.showCopy}的提示条。在你保存之前，磁盘上不会有任何改动。
- 用**更新**版本的 NovelWorks 保存的项目无法打开。请先更新 NovelWorks。
