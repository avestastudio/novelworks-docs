---
title: "场景"
description: "创建、重命名、重新排序、复制和删除场景，并选择游戏从哪里开始。"
---

场景是你故事的一章：由一系列依次播放的[片段](/novelworks-docs/zh-cn/writing/moments-and-dialogue/)组成。场景都在{ui.leftPanel.scenes}标签页里。想了解整体概念，请看[场景、片段与时间线](/novelworks-docs/zh-cn/concepts/scenes-moments-timeline/)。

## 创建场景

点击{ui.scenesTab.newScene}。新场景会命名为“场景 N”，N 是你已有的场景数量加一（如果这个名字已存在，就用下一个数字）。它包含一行空的对话，并且会被选中。如果你的项目还没有起始场景，这个新场景就会成为起始场景。

## 重命名场景

双击列表里的场景，输入名称，然后按 **Enter**。按 **Esc** 取消，名称留空则保留旧名称。你也可以使用检查器里的{ui.sceneInspector.name}，或者右键点击场景并选择{ui.contextMenus.rename}。没有名称的场景显示为“未命名场景”。

## 重新排序场景

在列表中上下拖动场景。列表的顺序不会改变故事的播放方式：场景之间靠选择、条件、跳转和区域连接。

## 复制场景

使用这一行上的{ui.scenesTab.duplicateScene}，或右键菜单里的{ui.contextMenus.duplicate}，或者在选中场景时按 **Cmd+D** / **Ctrl+D**。副本会紧跟在原场景后面，名称类似“伸出援手（副本）”。它会保留摘要和写作状态，它的片段会获得新的标识，它在剧情地图上的位置会重新安排。

## 删除场景

点击{ui.scenesTab.deleteScene}（或右键菜单里的{ui.contextMenus.delete}）。NovelWorks 总会先询问你，并告诉你：

- 将删除多少个片段；
- 如果它是起始场景，哪个场景将成为起始场景（或者你的游戏将没有任何场景）；
- 如果其他场景通向它，是哪些片段通向它。

通向已删除场景的选择、条件、跳转和区域**不会**被修改。它们会继续指向空处，并显示警告，直到你选择另一个场景。你可以用{ui.native.menu.undo}撤销删除。

## 起始场景

游戏从起始场景开始。它有一颗星星和“起始场景”的标签。要更改它，点击另一个场景上的星形按钮（{ui.scenesTab.makeStartScene}），或使用右键菜单里的{ui.contextMenus.setAsStartScene}，或使用场景检查器里的按钮。

## 列表显示什么

每个场景行都显示它有多少个片段。一个带“分支：N”的小岔路图标显示有多少个片段会让剧情去别处（见[剧情如何分支](/novelworks-docs/zh-cn/concepts/how-stories-branch/)）。红色的{ui.scenesTab.unreachable}标签表示玩家暂时无法到达这里：从起始场景出发，没有任何选择、条件、跳转或区域通向它。

## 场景检查器

选中一个场景可以看到：

- {ui.sceneInspector.name}；
- {ui.sceneInspector.summary}：一两句话，只给你自己看。它显示在剧情地图和时间线上方，不会出现在游戏里；
- {ui.sceneInspector.startsChapter}：让这个场景成为一个章节的开头，名称可选。章节按场景列表的顺序排列。请看[章节](/novelworks-docs/zh-cn/game-ui/chapters/)；
- {ui.sceneInspector.writingStatus}：{ui.shared.outline.toWrite}、{ui.shared.outline.draft}或{ui.shared.outline.done}。如果你从未设置过，在场景有文字之前是“待编写”，之后是“{tx.shared.outline.draft}”；
- 起始场景按钮；
- {ui.branches.entriesTitle}：通向这个场景的地方，你可以点击它们；
- {ui.sceneInspector.deleteScene}和复制按钮。

## 从场景开始试玩

右键点击一个场景并选择{ui.contextMenus.playFromHere}，就会从它的第一个片段开始播放（如果场景没有片段，则不可用）。
