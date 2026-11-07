---
title: "剧情如何分支"
description: "选择、条件、跳转和结局，以及如何看清你的剧情通向哪里。"
---

当剧情可以去**另一个场景**时，它就分支了。有四种片段可以做到这一点。

| 片段 | 作用 |
|---|---|
| **{ui.moments.choice}** | 玩家在 2 到 6 个选项中选一个。每个选项都可以更改变量，并通向一个场景。 |
| **{ui.moments.condition}** | 游戏检查它记住的内容，并把剧情送往某个场景。玩家看不到它。 |
| **{ui.moments.jump}** | 直接前往某个场景。玩家看不到它。 |
| **{ui.moments.ending}** | 显示结局的名称，然后回到标题画面。 |

**{ui.moments.exploration}**片段也可以通向场景，方式是玩家点击的区域。

## 选择

在检查器里，先写一个可选的问题，再写每个选项的文字。每个选项都有：

- **{ui.branchInspectors.changes}**：玩家选了它之后，游戏会记住什么（见[游戏的记忆](/novelworks-docs/zh-cn/concepts/game-memory/)）。
- **{ui.branchInspectors.then}**：它通向的场景。你也可以让剧情继续进入下一个片段。
- **{ui.optionCondition.add}**：这个选项只在满足条件时才出现。然后选择不满足时怎么办：**{ui.optionCondition.hidden}**或**{ui.optionCondition.locked}**。玩家始终有路可走：如果没有任何选项可选，所有选项都会显示出来。**{ui.optionCondition.remove}**会让它重新变为始终可选。

玩家可以点击选项，或按它的数字键，1 到 6。一个选择至少需要两个选项。

## 如果…

**{ui.moments.condition}**片段有一个或多个**情况**，它们**从上到下**依次检查。第一个成立的情况胜出。

![“如果…”先检查情况 1，再检查情况 2，然后转到“否则”。](/novelworks-docs/diagrams/if-order.svg)

- 每个情况有一个或多个条件。选择是**{ui.conditionCases.matchAll}**还是**{ui.conditionCases.matchAny}**，需要更多条件时点击**{ui.conditionCases.addTest}**。
- 每个情况都有一个要前往的场景。用**{ui.conditionCases.addCase}**添加另一个情况，用箭头改变顺序。
- *否则*是没有任何情况成立时剧情去的地方。如果你不选场景，剧情就继续进入下一个片段。

## 跳转和结局

**{ui.moments.jump}**只需要一个要前往的场景。**{ui.moments.ending}**有一个名称（**{ui.branchInspectors.endingName}**）和一段可选的简短文字。一个故事可以有任意多个结局。

## 看清剧情通向哪里

### “{tx.branches.whereTitle}”栏

在游戏画面上方，所选片段的每个出口都有一个小按钮，显示它通向哪里，最多显示四个，之后显示“+N”。太长的句子会以“…”结尾（完整文字在提示里）。点击其中一个，就会跳到那个场景。“返回”按钮会带你回到原来的位置（会记住最近 20 步）。在场景的第一个片段上，有一个列表显示有哪些地方通向**这个场景**。

### 分支行

在缩略图和舞台图表下方，**{ui.branches.rowTitle}**行会在与片段对齐的位置，标出每一个离开场景的片段：

![缩略图下方的图表，带有分支行：第 3 个片段上有一个岔路，第 6 个片段上有一面旗。](/novelworks-docs/diagrams/branches-row.svg)

- 岔路：选择或“如果…”；
- 箭头：跳转；
- 指针：探索区域；
- 旗子：结局，并带有它的名称；
- 地图图标：“显示地图”片段。

图标旁边是它通向的第一个场景的名称；如果还有更多出口，则显示“+N”。如果缺少某个场景，标记会变红。把鼠标指向标记可以列出所有出口，点击它可以选中该片段。有一个按钮可以把这一行收起来。

场景标签页也会显示每个场景有多少个分支。

### 剧情地图

**{ui.topBar.storyMap}**显示你游戏的所有场景，以及它们之间的连接。点击一个场景可以查看它，双击可以打开它。没有选中任何场景时，右侧面板是游戏的结局列表（**{ui.endings.title}**），以及通向每个结局的地方。没有任何地方通向的结局会被标出来，因为玩家无法到达它。见[剧情地图](/novelworks-docs/zh-cn/branching/story-map/)。
