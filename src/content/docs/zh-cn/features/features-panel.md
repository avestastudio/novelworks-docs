---
title: 功能库
description: "开启或关闭游戏的可选部分：物品栏和地图。"
---

视觉小说的有些部分并不是每个游戏都需要。NovelWorks 让你在{ui.featuresDialog.features}库中一键添加它们，也可以随时关闭，不会丢失任何内容。

## 打开方式

- 点击左侧面板底部的{ui.leftPanel.features}。
- 或者使用[项目设置](/novelworks-docs/zh-cn/getting-started/editor-settings/)中的{ui.projectSettings.openFeatures}，或地图工作区底部的{ui.mapMode.features}。
- 创建项目时，“新建项目”窗口中的{ui.newProjectScreen.features}卡片有同样的作用（默认什么都不勾选）。

{ui.featuresDialog.features}窗口会显示：“{tx.featuresDialog.addReadyMadePartsToYourGame}”每个功能一张卡片，带有开关和说明。点击{ui.featuresDialog.done}关闭窗口。

![功能库窗口，有物品栏和地图两张卡片。](/novelworks-docs/screenshots/features-dialog.png)

## 两个功能

| 功能 | 它添加什么 |
|---|---|
| {ui.shared.features.inventory} | 玩家可以收集物品（钥匙、信件、硬币、线索），并在物品栏菜单中查看。左侧会出现{ui.leftPanel.items}标签页，片段、选择、条件和区域可以给予、检查和使用物品。参见[物品栏](/novelworks-docs/zh-cn/features/inventory/)。 |
| {ui.shared.features.map} | 玩家可以打开地图并选择要去哪里。左侧会出现{ui.leftPanel.map}按钮，你可以在那里绘制地点并把它们连接到场景，故事进行中还可以用“{tx.moments.showMap}”片段打开地图。参见[地图](/novelworks-docs/zh-cn/features/map/)。 |

功能开启时，它的卡片会显示{ui.featuresDialog.openItems}（物品栏）或带有{ui.mapSettings.editMap}的地图设置（地图）。功能关闭时，卡片上写着“已关闭”。

## 关闭功能会怎样

- 你做的任何内容都不会被删除：物品、地图设置以及所有用到它们的片段都会保留。重新开启这个功能，一切都会回来。
- 该功能的标签页、按钮和片段类型会从编辑器中消失。
- **关闭地图**：游戏中没有地图按钮，“{tx.moments.showMap}”片段不会起任何作用。
- **关闭物品栏**：游戏中没有物品栏按钮、暂停菜单项，也没有 **I** 键。给予或检查物品的片段、选择和区域**仍会在**游戏中运行（编辑器会警告你），所以如果你用到了物品，请重新开启这个功能。
- 用到该功能的片段会保留，并显示**警告**，直到你重新开启它。
- 如果你的故事用到了物品，NovelWorks 会先询问（{ui.features.turnTheInventoryOff}），并列出将会失效的内容。如果你有“{tx.moments.showMap}”片段，地图也一样（{ui.features.turnTheMapOff}）。
- 如果你当时在地图工作区，会回到剧情模式。如果你当时在物品标签页，会转到变量标签页。

在游戏界面中，物品栏、地图按钮和提示画面仍会留在列表里，并附有说明：功能关闭时玩家看不到它们。

## 游戏的其他部分

探索（点选式场景）不是需要开启的功能：“探索”片段始终可用。参见[探索](/novelworks-docs/zh-cn/features/exploration/)。
