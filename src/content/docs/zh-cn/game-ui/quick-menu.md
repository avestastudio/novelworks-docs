---
title: 快捷菜单
description: "叠在剧情上的阅读控制：位置、外观，以及显示哪些按钮。"
---

**{ui.quickMenu.title}** 是一个小小的栏，里面是“叠在剧情之上的阅读控制”。玩家可以点击它的按钮，而不必使用按键。

![快捷菜单的设置，以及游戏顶部那一栏的预览。](/novelworks-docs/screenshots/game-ui-quick-menu.png)

## 显示它，摆放它

- **{ui.quickMenu.enabled}**：默认开启。关闭它就会隐藏整个栏。
- **{ui.quickMenu.position}**：左上、上中（默认）、右上、左下、下中或右下。
- **{ui.quickMenu.margin}**：与边缘的间距，0 到 10 %（默认 1.5）。

## 外观

- **{ui.gameUIInspector.buttonStyle}**：默认是胶囊形。
- **{ui.quickMenu.textSize}**：占基础文字大小的 60 到 140 %（默认 80）。
- **{ui.quickMenu.buttonColor}**：默认是半透明的深色背景。有一个链接可以恢复默认值。
- **{ui.gameUIInspector.textColor}**：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。

## 可见的按钮

共有九个按钮，每个都有一个开关。它们的**顺序是固定的**：你可以显示或隐藏它们，但不能调整顺序。

| 按钮 | 默认 | 按键 | 作用 |
|---|---|---|---|
| {ui.quickMenu.button.history} | 开 | H | 打开历史记录。 |
| {ui.quickMenu.button.auto} | 开 | A | 打开或关闭自动模式。 |
| {ui.quickMenu.button.skip} | 开 | S | 打开或关闭快进模式。 |
| {ui.quickMenu.button.save} | 关 | | 打开存档画面。 |
| {ui.quickMenu.button.load} | 关 | | 打开读档画面。 |
| {ui.quickMenu.button.quickSave} | 关 | F5 | 快速存档。 |
| {ui.quickMenu.button.quickLoad} | 关 | F9 | 快速读档（在存在快速存档之前是灰色的）。 |
| {ui.quickMenu.button.options} | 关 | | 打开玩家选项。 |
| {ui.quickMenu.button.menu} | 关 | Esc | 打开暂停菜单。 |

**{ui.quickMenu.shortcutsHelp}**

## 这个栏何时显示

在标题画面和结束画面上、菜单、历史记录、选项、存档或读档打开时，以及所有按钮都被隐藏时，这个栏是隐藏的。在存在快速存档之前，**{rt.game.quickLoad}** 是灰色的。自动和快进会显示它们是否已开启。
