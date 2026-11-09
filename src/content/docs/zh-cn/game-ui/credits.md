---
title: 制作人员名单
description: 为你的游戏添加滚动的制作人员名单，可以放在标题画面上、结局之后，或两处都放。
---

{ui.gameUI.credits}可以为你的游戏添加滚动的制作人员名单。前往{ui.topBar.gameUI}，在画面列表中选择{ui.gameUI.credits}。

![游戏界面中的制作人员画面，上面有开关、你的内容和预览。](/novelworks-docs/screenshots/game-ui-credits.png)

新游戏默认没有制作人员名单。开启{ui.credits.enabled}即可开始。

## 显示位置

在{ui.credits.where}下，有两个互相独立的开关。一开始两个都是开启的。

- {ui.credits.onTitleScreen}会在标题画面上添加{rt.game.credits}按钮。
- {ui.credits.afterEnding}会在玩家离开结局时滚动播放名单：包括[结局片段](/novelworks-docs/zh-cn/branching/endings/)和[{ui.gameUI.theEnd}画面](/novelworks-docs/zh-cn/game-ui/ending-screen/)。名单之后是标题画面。

## 内容

名单开头是游戏的标题和作者，取自[项目设置](/novelworks-docs/zh-cn/getting-started/editor-settings/)。

接下来是{ui.credits.lines}。点击{ui.credits.addLine}并填写：

- {ui.credits.role}，例如“美术”；
- {ui.credits.names}，每行一个名字。

最多可以有 30 行。箭头可以调整顺序，留空的行会被忽略。

{ui.credits.madeWith}一开始是开启的。你可以关闭它。

## 外观

你可以设置{ui.gameUIInspector.backgroundColor}、{ui.gameUIInspector.textColor}和{ui.gameUIInspector.buttonStyle}。{ui.gameUIInspector.resetToDefault}会重置整个页面，而不仅仅是外观：你的内容会被移除，名单也会关闭。NovelWorks 会先询问你，{ui.topBar.undo}可以把它们恢复回来。

## 在游戏中

名单会自动向上滚动，到末尾时停下，最后几行仍留在屏幕上。{rt.credits.back}可以关闭名单，`Esc`、`Enter` 和 `Space` 也可以。

如果玩家在系统中要求减少动态效果，就不会有任何移动：整个列表直接显示出来，可以滚动查看。编辑器里的预览也是这样。
