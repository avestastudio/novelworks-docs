---
title: 章节
description: 标记开始一个章节的场景，让玩家重玩已经到达过的章节。
---

章节让玩家可以从标题画面回到你故事的某个部分。

## 标记章节

1. 在{ui.leftPanel.scenes}标签页里，选中一个场景。
2. 在右侧的面板中，开启{ui.sceneInspector.startsChapter}。
3. 想要名称的话，就输入一个。没有名称时，游戏会显示{rt.chapters.chapterNumber}，并带上章节编号。

一个章节持续到下一个章节的场景为止。章节的顺序就是场景列表的顺序。一个游戏最多可以有 50 个章节。

如果你删除了一个场景，它的章节也会一起消失。

## 玩家看到什么

只要你的游戏有一个章节，标题画面上就会出现{rt.game.chapters}按钮。

这个画面会列出各个章节。玩家已经到达过的章节会显示名称，可以选择。其他章节显示{rt.chapters.locked}，不能选择。

只要玩家进入了章节的场景，无论是通过选择、跳转还是读取存档，这个章节都算已到达。

## 重玩章节

章节从其场景的第一个片段开始，使用初始值：变量回到最初的值，物品栏为空。

这个画面是从标题画面打开的，所以不会影响正在进行的游戏。

已到达的章节像存档一样，按游戏分别保存在玩家的设备上。你在编辑器里测试时，它们和导出游戏的记录是分开保存的。

## 外观

前往{ui.topBar.gameUI}，在画面列表中选择{ui.gameUI.chapters}。

![游戏界面中的章节画面，上面有颜色设置和章节列表的预览。](/novelworks-docs/screenshots/game-ui-chapters.png)

你可以设置{ui.gameUIInspector.backgroundColor}、{ui.gameUIInspector.textColor}和{ui.gameUIInspector.buttonStyle}。{ui.gameUIInspector.resetToDefault}会把这个画面恢复原样。

预览会显示你的章节；如果你还没有章节，就显示三个示例，其中最后一个仍是锁定状态。
