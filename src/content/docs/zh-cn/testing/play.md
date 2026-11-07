---
title: 试玩、从此处试玩、测试地图
description: 在编辑器中试玩你的游戏，可以从头开始，也可以从任意片段开始，无需保存或导出。
---

你可以随时在编辑器里试玩你的游戏。它玩的是**编辑器中此刻的内容**，不管有没有保存，使用的引擎和导出的游戏相同。试玩期间，编辑功能会被锁定。

## 开始的方式

| 方式 | 从哪里开始 |
|---|---|
| {ui.topBar.play}（顶栏，**Cmd+P** / **Ctrl+P**） | 标题画面。 |
| {ui.topBar.playFromHere}（顶栏，**Cmd+Shift+P** / **Ctrl+Shift+P**） | 所选的片段，不经过标题画面。在选中片段之前，它是灰色不可用的。 |
| 片段或场景右键菜单中的{ui.contextMenus.playFromHere} | 那个片段，或那个场景的第一个片段。 |
| [剧本模式](/novelworks-docs/zh-cn/writing/script-mode/)中的{ui.scriptMode.playFromCursor}（**Cmd+Enter** / **Ctrl+Enter**） | 光标所在的那一行。 |
| 地图工作区中（以及地图设置中）的{ui.topBar.testMap} | 地图。在地图工作区中，{ui.topBar.playFromHere}按钮和 **Cmd+Shift+P** / **Ctrl+Shift+P** 会变成“测试地图”。见[地图](/novelworks-docs/zh-cn/features/map/)。 |

每次试玩都使用你的变量和物品的全新初始值：不会保留上一次测试的任何内容。

如果你的游戏没有起始场景，或者起始场景里没有片段，**试玩**不会开始，并会告诉你该怎么做：在“场景”标签页中用星标设置一个起始场景。

## 试玩过程中

顶部的一个栏会显示你所在的位置（“教室 · 第 2 个片段，共 5 个”，在适用时会加上“选项”、“{tx.moments.ending}”或“{tx.game.paused}”，或者显示“{tx.playOverlay.titleScreen}”或“剧终”）。栏上还有[试玩模式工具](/novelworks-docs/zh-cn/testing/test-saves-and-read-lines/)中介绍的工具。

你像玩家一样玩：点击或按 **Space** / **Enter** 继续，按 **1** 到 **6** 选择选项，**A** 是自动，**S** 是快进，**H** 是历史记录，**F5** 和 **F9** 是快速存档和快速读档。**右键点击**会打开游戏的暂停菜单。见[按键与触屏](/novelworks-docs/zh-cn/player/keys-and-touch/)。

## 停止

- 点击{ui.playOverlay.stop}，或按 **Esc**。如果暂停菜单、存档、读档、历史记录、选项、片头或内容提示正开着，**Esc** 会先关闭它们。在试玩模式中，**Esc** 不会关闭物品栏：请按 **I** 来关闭。
- 停止时，编辑器会选中你刚才所在的场景和片段。

## 这里没有测试的内容

试玩模式不等于导出的游戏：“Made with NovelWorks”画面默认是隐藏的，除非你把它打开；而且你的测试使用自己的存档，与导出游戏的存档互不相干。想在浏览器里试玩真正的成品，请使用[网页导出](/novelworks-docs/zh-cn/publish/web-export/)和导出结束时的{ui.exportDialog.testInBrowser}。
