---
title: 试玩模式工具
description: "试玩时游戏上方的工具栏：变量和物品、启动画面、重新开始、测试存档和已读台词。"
---

在编辑器中试玩时，顶部有一个放着测试工具的栏。栏上的按钮不会获得键盘焦点，所以 **Space** 和 **Enter** 仍然会传给游戏。

![试玩模式：顶部的工具栏，以及右侧的变量和物品面板。](/novelworks-docs/screenshots/play-bar.png)

| 工具 | 作用 |
|---|---|
| {ui.playOverlay.playing}和你所在的位置 | 当前的场景和片段，实时更新。 |
| “{tx.playOverlay.rightClickGameMenu}” | 一个提醒：右键点击会打开游戏的暂停菜单。 |
| {ui.playOverlay.variablesItems} | 显示或隐藏一个面板，里面是你的变量和物品的实时数值（见下文）。 |
| {ui.playOverlay.openMap} | 立即打开地图，即使玩家在这个时间点还不能打开。{rt.game.back}会回到你原来的位置。只有游戏有地图时才有。 |
| {ui.playOverlay.showSplash} | 显示导出的游戏开头的“Made with NovelWorks”画面，每次开始和重新开始时都会显示。默认关闭。打开它会重新开始测试。 |
| {ui.playOverlay.restart} | 重新开始这次测试，从标题画面开始，或从你开始试玩的那个片段开始。状态、历史记录和试玩时间都会重置。 |
| {ui.playOverlay.clearTestSaves} | 删除测试时产生的存档、快速存档和自动存档。 |
| {ui.playOverlay.resetReadLines} | 忘记你读过哪些台词，这样{ui.quickMenu.button.skip}会重新在每一句台词处停下。 |
| {ui.playOverlay.stop} | 回到编辑器（**Esc**）。 |

## 变量和物品

使用{ui.playOverlay.variablesItems}（物品栏功能关闭时，则是{ui.leftPanel.variables}）会显示一个面板：

- {ui.leftPanel.variables}：每个变量都显示它现在的值。与初始值不同的值会高亮显示。在标题画面和“剧终”画面上，会显示“{tx.playOverlay.startingValues}”。你不能在这里编辑变量：要通过试玩来改变它，这样你就能检查你的选项改变了什么。
- {ui.gameUI.inventory}（启用物品栏功能时）：你游戏中的所有物品，每个都有 **−** 和 **+**，可在测试时移除或给予一个，不会弹出提示。可叠加的物品显示数量，单件物品显示“是”或“否”。游戏开始之前，会显示“{tx.playOverlay.startPlayingToGiveOrRemoveItems}”面板的展开或收起状态会在两次测试之间保持不变。

## 测试存档和已读台词

存档、快速存档和自动存档、玩家选项（文字大小、速度等），以及快进所用的已读台词记录，每个游戏都有各自的存放空间，**仅限试玩模式**。它们与导出游戏的存档是分开的，也不属于你的项目。它们会在两次测试之间保留，直到你清除：

- {ui.playOverlay.clearTestSaves}会先询问：“导出的游戏有各自独立的存档。”
- {ui.playOverlay.resetReadLines}会立即执行，不会询问。

测试者自己的玩家选项（文字大小、速度等）也会以同样的方式保存，但没有清除它们的按钮。{ui.playOverlay.showSplash}开关会一直保持到你关闭编辑器为止。
