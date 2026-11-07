---
title: 编辑器与项目设置
description: 编辑器的主题、语言和拼写检查，以及每个项目自己的设置。
---

设置分两种：**编辑器**的设置（对你所有的项目都一样）和某一个**项目**的设置。

## 编辑器设置

它们都在**{ui.menu.view}**和**{ui.native.menu.edit}**菜单里。

### 主题

**{ui.menu.view} → {ui.native.menu.theme}**：**{ui.native.menu.dark}**（默认）、**{ui.native.menu.light}**或**{ui.native.menu.system}**（跟随你的电脑）。

### 编辑器语言

**{ui.menu.view} → {ui.native.menu.language}**：**{ui.native.menu.languageAuto}**，或七种语言之一，每种语言都用它自己的名字书写。菜单和编辑器会在每个打开的窗口里立刻改变。这个设置只针对编辑器，不会改变你的故事或游戏的语言。

### 拼写检查语言（保存在项目里）

这一项是个例外：它不是你所有项目共用的，因为这个选择保存在**项目里**（而且可以撤销）。

**{ui.native.menu.edit} → {ui.native.spelling.spellingLanguage}**。在 Windows 上，默认是你电脑的语言加上英语，你也可以选择别的语言。在 Mac 上，macOS 会自动检测你文字的语言，所以这个菜单只是这样提示。

### 全屏

**{ui.menu.view} → {ui.native.role.togglefullscreen}**。

## 项目设置

点击顶部栏里的项目标题，或者什么都不选，检查器就会显示**{ui.inspector.projectSettings}**：

| 设置 | 作用 |
|---|---|
| {ui.projectSettings.gameTitle} | 你的游戏的标题。 |
| {ui.projectSettings.author} | 你作为作者的名字。 |
| {ui.project.gameLanguage} | 游戏自带按钮和菜单的语言。你的故事文字保持你写的样子。如果某种语言不支持用于游戏，游戏就会对它使用英语。 |
| {ui.projectSettings.length} | 阅读这个故事需要多久：每一句话、每个选择和每个结局各读一遍（字数和分钟数）。它只用于显示，不能设置。玩一遍有分支的故事会更短。 |
| {ui.projectSettings.features} | 已打开的可选部分。**{ui.projectSettings.openFeatures}**会打开列表，供你开关它们。 |
| {ui.projectSettings.screenSize} | 游戏画面的尺寸，1280 × 720 像素。它只用于显示。 |
| {ui.projectSettings.savedIn} | 项目所在的文件夹。 |

这里的每个更改都可以用**{ui.native.menu.undo}**撤销。
