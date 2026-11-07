---
title: 场景、片段与时间线
description: NovelWorks 如何组织一个故事，从场景到片段。
---

## 场景和片段

一个故事由一组**场景**组成，就像章节。一个场景是一连串按顺序播放的**片段**，就像幻灯片。大多数片段是一句对话，但一共有八种。

![以一排片段表示的场景：两句对话、一个选择、一个如果、一个跳转和一个结局。](/novelworks-docs/diagrams/moments-strip.svg)

| 种类 | 作用 | 玩家能看到吗 |
|---|---|---|
| {ui.moments.dialogue} | 一句对话或旁白。 | 能 |
| {ui.moments.choice} | 玩家选一个选项。它可以改变变量，并通向另一个场景。 | 能 |
| {ui.moments.condition} | 根据某个变量把故事带向别处。 | 看不到，游戏自己判断后继续 |
| {ui.moments.jump} | 直接去另一个场景。 | 看不到 |
| {ui.moments.ending} | 显示结局的名称，然后回到标题画面。 | 能 |
| {ui.moments.exploration} | 没有文本框：玩家点击图片上的区域来四处查看、改变变量或前往另一个场景。 | 能 |
| {ui.moments.item} | 给玩家物品或收走物品，并显示一条简短的提示。 | 只能看到提示 |
| {ui.moments.showMap} | 立刻打开地图。 | 只能看到地图 |

只有在打开物品栏和地图功能时，{ui.moments.item}和{ui.moments.showMap}才会出现在列表里。请看[探索](/novelworks-docs/zh-cn/features/exploration/)、[物品栏](/novelworks-docs/zh-cn/features/inventory/)和[地图](/novelworks-docs/zh-cn/features/map/)。

场景之间**只通过片段**相互连接：选择的选项、如果的各种情况、跳转，或者探索的区域。一个场景里的片段总是一个接一个地播放。

## 时间线

在窗口底部，时间线以卡片的形式显示所选场景的片段。

- 顶部有场景名称、片段数和字数，如果你写了场景摘要，也会显示在这里。点击摘要，可以在检查器里编辑它。
- 每张卡片显示它的种类、说话的人（或“旁白”），以及它所说或所做内容的简短摘要。卡片上可以带一条笔记或一个警告。
- 点击一张卡片就能选中它，并在游戏画面和检查器里编辑它。拖动卡片可以重新排序。
- 按钮会在**所选片段之后**添加一个片段，每种各一个。末尾的 **+** 卡片会添加一句对话。
- 两个图标分别用来复制和删除所选片段。删除时会要求确认，除非这个片段是一句空的对话。
- 在卡片下方，一张图表显示谁在台上（[舞台](/novelworks-docs/zh-cn/concepts/stage/)），一行显示故事在哪里分支（[故事如何分支](/novelworks-docs/zh-cn/concepts/how-stories-branch/)）。

### 快速写作的方法

在对话框里，**Enter** 会开始一个舞台相同的新片段。**Shift+Enter** 会在同一个框里换行。

## 起始场景

游戏从起始场景开始，它在场景标签页里用星标标出。想更换它，请在另一个场景上使用{ui.scenesTab.makeStartScene}。

## 玩家无法到达的场景

从起始场景出发，如果没有任何选择、条件、跳转或区域通向某个场景，它在场景标签页里会被标为{ui.scenesTab.unreachable}，并带有一个警告。请看[问题](/novelworks-docs/zh-cn/testing/problems/)。

## 摘要和写作状态

选中一个场景，可以给它写一段{ui.sceneInspector.summary}。它只给你自己看，并显示在剧情地图上。每个场景还有一个{ui.sceneInspector.writingStatus}：{ui.shared.outline.toWrite}、{ui.shared.outline.draft}或{ui.shared.outline.done}。如果你不设置，它在有对话行出现文字之前是{ui.shared.outline.toWrite}，之后是{ui.shared.outline.draft}。

## 关于场景的更多内容

请看[场景](/novelworks-docs/zh-cn/writing/scenes/)和[片段与对话](/novelworks-docs/zh-cn/writing/moments-and-dialogue/)。
