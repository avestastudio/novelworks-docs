---
title: 标题画面
description: "游戏的第一个画面：背景、标志和菜单。"
---

**{ui.gameUI.titleScreen}** 是玩家看到的第一个画面（在可选的[片头](/novelworks-docs/zh-cn/game-ui/intro/)和[内容提示](/novelworks-docs/zh-cn/game-ui/content-warning/)之后）。

## 背景

选择 **{ui.gameUIInspector.color}** 或 **{ui.gameUIInspector.image}**。

- **{ui.gameUIInspector.color}**：默认是很深的蓝色。它会“顶部泛着主色的光晕”：游戏会在上面绘制一层用你的[主色](/novelworks-docs/zh-cn/game-ui/fonts-and-colors/)做成的柔和光晕。
- **{ui.gameUIInspector.image}**：选一张背景、CG 或界面图片。在你选好之前，会显示颜色。

## 标志

**{ui.gameUIInspector.logoImage}**：任意一张图片。它画在画面的上部，保持原有比例。没有标志时，游戏会写出**你的游戏标题**（在[项目设置](/novelworks-docs/zh-cn/getting-started/editor-settings/)里设置），如果标题为空，则写“{tx.export.untitled}”。

## 菜单

只能修改 **{ui.gameUIInspector.buttonStyle}**。按钮和上面的文字是固定的：

- **{rt.game.continue}**：只在玩家有存档时显示，并读取最新的一个存档；
- 开始一局**{rt.game.newGame}**的按钮；
- **{rt.game.load}**：可以存档时显示；
- **{rt.game.options}**；
- **{rt.game.quit}**：只出现在有退出办法的运行环境中（浏览器里没有）。

这些按钮上的文字会跟随你项目的[游戏语言](/novelworks-docs/zh-cn/getting-started/editor-settings/)。
