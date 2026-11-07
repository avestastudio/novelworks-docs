---
title: 玩家选项
description: 玩家选择文字大小、速度、字体和对比度的画面，以及哪些由你控制。
---

**{ui.gameUI.options}** 画面是玩家让游戏适应自己的地方。你控制的是它的**外观**。选项本身在每个游戏里都一样，你不能隐藏其中任何一项。

## 你可以修改什么

在 **{ui.gameUIInspector.screen}** 下：

- **{ui.gameUIInspector.backgroundColor}**：默认是标题画面的颜色，略带透明；
- **{ui.gameUIInspector.textColor}**：默认是“{tx.gameUIInspector.sameAsTheTextColor}”；
- **{ui.gameUIInspector.buttonStyle}**：按钮的样式。

## 玩家可以选择什么

| 选项 | 可选项 |
|---|---|
| 文字大小 | 标准、大、特大 |
| 文字速度 | 慢、标准、快、很快、立即显示 |
| 自动模式速度 | 慢、标准、快 |
| 适合阅读障碍的字体 | 开、关 |
| 高对比度 | 开、关 |

一行示例文字会显示文字最终的样子，而**{rt.optionsScreen.defaults}**会把所有选项恢复原状。更改会立即生效。它们会**覆盖**你的游戏界面，只对这位玩家生效，并保存在他们的浏览器里，只对你的游戏有效。

如果玩家没有选择文字速度，而他们的系统要求减少动态效果，文字会立即显示。

关于每个选项的更多内容，以及玩家如何进入这个画面，请见[选项和无障碍](/novelworks-docs/zh-cn/player/options-and-accessibility/)。

## 玩家在哪里找到它

标题画面、暂停菜单上的 **{rt.game.options}** 按钮，以及快捷菜单（如果你显示了它的“选项”按钮）。Esc 关闭它。
