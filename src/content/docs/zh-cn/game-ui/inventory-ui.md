---
title: 物品栏画面
description: 物品栏按钮和物品面板。
---

**{ui.gameUI.inventory}** 画面包括玩家用来打开自己物品的按钮，以及列出这些物品的面板。它需要[物品栏功能](/novelworks-docs/zh-cn/features/inventory/)。功能关闭时，这个页面会说明这一点，并提供打开功能库的入口。

## 按钮

- **{ui.gameUIInspector.label}**：按钮上的文字、面板的标题和暂停菜单里这一项的名称。默认是“物品栏”。
- **{ui.gameUIInspector.cornerOfTheScreen}**：左上、右上（默认）、左下或右下。
- **{ui.gameUIInspector.buttonStyle}**：默认是“{tx.gameUIInspector.sameAsFontsColors}”。

这个按钮在标题画面、结束画面和暂停时是隐藏的。

## 面板和按钮的颜色

这两种颜色会同时给**面板和按钮**上色：

- **{ui.gameUIInspector.panelColor}**：默认是“{tx.gameUIInspector.sameAsTheDialogueBox}”（按钮样式为“{tx.gameUIInspector.text}”时，按钮没有背景）。
- **{ui.gameUIInspector.textColor}**：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。

## 玩家能得到什么

玩家可以用按钮、暂停菜单或 **I** 键打开它。它是游戏中央的一个面板，里面是一个网格，放着他们拥有的物品：一张图片、名称，以及可叠加物品的数量，例如“×3”。选中一个物品会显示它的说明（如果没有说明，就显示它的名称）。为空时，它会显示“这里还什么都没有。”Esc、**I**、× 按钮或点击面板外面都可以关闭它。打开期间，剧情会暂停。
