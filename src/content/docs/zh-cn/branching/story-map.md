---
title: 剧情地图
description: 查看每个场景以及它们如何连接，通过拖动来连接场景，并发现需要处理的地方。
---

{ui.topBar.storyMap}把游戏的每个场景显示为一张卡片，把每个选择、条件、跳转和区域显示为卡片之间的箭头。你可以从顶部栏打开它，也可以按 **Cmd+6** / **Ctrl+6**。

![剧情地图：每个场景是一张卡片，选择、条件和跳转用箭头表示。没有选中场景时，右侧面板会列出结局。](/novelworks-docs/screenshots/story-map.png)

## 场景卡片

每张卡片显示：

- 场景的名称，起始场景上还有 **★ 开始**；
- 它的摘要，或者“{tx.storyMap.noSummaryYet}”（[摘要](/novelworks-docs/zh-cn/writing/scenes/)只给你自己看）；
- 它的写作状态（{ui.shared.outline.toWrite}、{ui.shared.outline.draft}或{ui.shared.outline.done}）和字数，或者“空”。把指针放在字数上，可以看到片段的数量；
- 一个便签徽章，显示带有[笔记](/novelworks-docs/zh-cn/writing/notes/)的片段数量；
- 一个警告徽章，显示问题的数量。把指针放在上面可以读到每一条（“片段 4：……”）；
- 标签：每个结局名称对应的旗子、{ui.storyMap.unreachable}（从起始场景出发没有任何路径通向这里；项目只有一个场景时不显示）、“{tx.storyMap.gameEndsHere}”（这个场景之后没有任何内容，也没有结局）以及“{tx.storyMap.backToTheMap}”。

无法到达的卡片边框是虚线，并且颜色变淡。

## 箭头

箭头从一个场景指向它的某个片段所通向的场景。同样两个场景之间的所有连接会合并成一条箭头，带有多个标签。标签的格式是“片段编号 · 文字”，例如“11 · 帮忙”，颜色与该类片段的颜色一致。

| 箭头标签 | 由什么产生 |
|---|---|
| 选项的文字 | 选择中通向某个场景的选项 |
| “如果 …”和“{tx.storyMap.otherwise}” | 如果…的各个情况和“否则” |
| “{tx.storyMap.jump}” | 跳转 |
| 区域的名称 | 探索中通向某个场景的区域 |

场景下方的一个虚线小环表示“剧情在这个场景中继续”：即没有指定场景的选项或“否则”，它们会继续执行下一个片段。带有“{tx.storyMap.deletedScene}”的警告色虚线箭头表示某个连接指向了已被删除的场景。一条箭头上最多显示三个标签，之后显示“还有 N 个”：把指针放上去可以看到全部。

右侧面板中的{ui.storyMap.arrows}图例会提醒你这些含义。

## 浏览地图

- **滚动**或用双指来移动地图。**拖动空白处**、按住 **Space** 并拖动，或使用鼠标中键，都可以平移。
- **捏合**，或在滚动时按住 **Cmd** / **Ctrl**，可以以指针为中心缩放。按钮可以缩小和放大（×0.8 和 ×1.25），范围在 20 % 到 200 % 之间。
- {ui.gameUIInspector.fit}按钮（带缩放百分比）会显示整个故事（**Shift+1**）。**Shift+0** 回到 100 %。
- **+** 和 **-** 用来放大和缩小。

NovelWorks 打开期间，地图会记住你上次所在的位置；第一次打开时会显示整个故事。

## 摆放场景

- **拖动卡片**来移动它。它的位置会保存在项目中。你可以把一张卡片放在另一张上面，如果发生这种情况，请再移动一次。**新建**或**复制**的场景总是落在空位上。
- 你还没有摆放的场景会自动获得位置：按与起始场景的距离分成多列，无法到达的场景集中放在下方。
- {ui.storyMap.tidyUp}会忘记你选择的所有位置，从起始场景开始重新自动摆放所有场景。当一切已经是自动摆放时，它是灰色不可用的。

## 添加场景

点击{ui.storyMap.newScene}，或在地图的空白处双击。会出现一张小卡片：输入名称，按 **Enter** 转到摘要，再按一次 **Enter** 确认。按 **Esc** 取消。新场景创建时带有一行空的对话。

## 打开场景

双击卡片，或选中后按 **Enter**，或右键点击并选择{ui.storyMap.openInEditor}：场景会在{ui.topBar.story}模式中打开。

## 连接两个场景

把卡片右侧的**圆形手柄**拖到另一张卡片上，或拖到空白处（在那里创建一个新场景）。会弹出一个小窗口，询问用什么方式连接：

| 类型 | 它在第一个场景末尾添加什么 |
|---|---|
| {ui.shared.linking.jump} | 一个通向该场景的跳转，或者设置它最后一个跳转的目标。 |
| {ui.shared.linking.choiceOption} | 在最后一个选择中添加一个选项（你输入它的文字），或者新建一个选择。 |
| {ui.shared.linking.condition} | 一个新的如果…，它的第一个情况通向该场景。你仍然需要选择变量。 |
| {ui.shared.linking.explorationZone} | 在最后一个探索片段中添加一个通向该场景的区域。 |

不适用的类型会变灰，并说明原因：“这个场景以结局结尾。”、“这个场景已经以跳转结尾了。”、“它的选择已经有 6 个选项了。”……连接在撤销时算一步。它会给场景添加一个片段：地图本身不保存任何内容。

## 右键菜单

### 场景

{ui.storyMap.openInEditor}、{ui.storyMap.rename}、{ui.storyMap.editSummary}、{ui.storyMap.status}（待编写、草稿、已完成）、{ui.storyMap.duplicate}（副本出现在正下方）、{ui.storyMap.setAsStartScene}和{ui.storyMap.delete}（会有常规的确认）。

### 箭头

- {ui.storyMap.goToTheMomentThatCreatesThis}：打开那个片段（有多个标签时，每个标签各有一项）。
- {ui.storyMap.removeLink}：用于跳转或选项。对于跳转，跳转会保留，但失去它的场景。对于选项，选项会被删除；但如果该选择只有两个选项，则只会清除连接。
- {ui.storyMap.unlinkZone}：用于区域，区域会留在它原来绘制的位置。

如果…产生的连接无法在地图上移除。请在检查器中编辑。每次移除都会先询问，并且可以撤销。

## 突出显示重点

顶部的{ui.storyMap.highlight}会让不符合条件的场景及其箭头变淡：

- {ui.storyMap.all}：全部；
- {ui.storyMap.toWrite}：还没写完的场景；
- {ui.storyMap.endingsFilter}：含有结局的场景；
- {ui.storyMap.problems}：有警告或无法到达的场景。

写作进度就在旁边：场景的数量，然后是已完成、草稿和待编写的数量。

## 右侧面板

- **选中场景时**：显示它的检查器（名称、摘要、写作状态、起始场景、{ui.branches.entriesTitle}、片段数量，以及用来打开、复制或删除它的按钮）。
- **没有选中任何内容时**：显示一个帮助面板，包含{ui.endings.title}（[查看所有结局](/novelworks-docs/zh-cn/branching/endings/)）、{ui.storyMap.arrows}图例，以及关于如何添加、连接和移动场景的提示。
