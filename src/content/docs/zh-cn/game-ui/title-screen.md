---
title: 标题画面
description: "游戏的第一个画面：背景、标志和菜单。"
---

{ui.gameUI.titleScreen} 是玩家看到的第一个画面（在可选的[片头](/novelworks-docs/zh-cn/game-ui/intro/)和[内容提示](/novelworks-docs/zh-cn/game-ui/content-warning/)之后）。

## 模板

在{ui.templates.heading}下，四张卡片提供现成的外观：{ui.templates.title.classic}（新项目的外观）、{ui.templates.title.darkNight}、{ui.templates.title.soft}和{ui.templates.title.minimal}。点击一下只会设置这个画面的背景颜色和按钮样式。你的图片、字体和文字颜色都会保留。点一次{ui.topBar.undo}就能恢复原来的样子。

当前模板的卡片会高亮显示。一旦你更改了这两项设置之一，就不再有卡片高亮。

## 背景

选择 {ui.gameUIInspector.color} 或 {ui.gameUIInspector.image}。

- {ui.gameUIInspector.color}：默认是很深的蓝色。它会“顶部泛着主色的光晕”：游戏会在上面绘制一层用你的[主色](/novelworks-docs/zh-cn/game-ui/fonts-and-colors/)做成的柔和光晕。
- {ui.gameUIInspector.image}：选一张背景、CG 或界面图片。在你选好之前，会显示颜色。

## 标志

{ui.gameUIInspector.logoImage}：任意一张图片。它画在画面的上部，保持原有比例。没有标志时，游戏会写出**你的游戏标题**（在[项目设置](/novelworks-docs/zh-cn/getting-started/editor-settings/)里设置），如果标题为空，则写“{tx.export.untitled}”。

## 音乐

在{ui.sound.music}下，{ui.sound.chooseMusic}可以挑选一首音乐类型的曲目，或者导入一首。设置好后，会出现{ui.sound.volume}滑块和一个用来移除音乐的 X。音乐在片头之后开始播放。故事开始后，由你的片段里的音乐接替。请看[声音和音乐](/novelworks-docs/zh-cn/writing/sound/)。

在玩家第一次点击或按键之前，浏览器不允许播放声音，所以在网页游戏中，音乐会在那一刻开始。

## 菜单

只能修改 {ui.gameUIInspector.buttonStyle}。按钮和上面的文字是固定的：

- {rt.game.continue}：只在玩家有存档时显示，并读取最新的一个存档；
- 开始一局{rt.game.newGame}的按钮；
- {rt.game.load}：可以存档时显示；
- {rt.game.chapters}：只有游戏至少有一个章节时才显示。请看[章节](/novelworks-docs/zh-cn/game-ui/chapters/)；
- {rt.game.options}；
- {rt.game.credits}：只有你开启了制作人员名单及其按钮时才显示。请看[制作人员名单](/novelworks-docs/zh-cn/game-ui/credits/)；
- {rt.game.quit}：只出现在有退出办法的运行环境中（浏览器里没有）。

这些按钮上的文字会跟随你项目的[游戏语言](/novelworks-docs/zh-cn/getting-started/editor-settings/)。
