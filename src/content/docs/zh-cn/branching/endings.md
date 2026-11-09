---
title: 结局
description: 为你的故事收尾，结局想设几个就设几个，并检查每个结局都能到达。
---

{ui.moments.ending}片段会显示结局的名称，然后让玩家回到标题画面。一个故事可以有任意多个结局，例如为[如果…](/novelworks-docs/zh-cn/branching/conditions/)的每种结果各设一个。

## 添加结局

在时间线顶部打开{ui.timeline.addOther}，在场景的末尾添加一个{ui.moments.ending}片段。在检查器的{ui.inspectorTabs.text}标签页中：

- {ui.branchInspectors.endingName}：新结局的名称是“{tx.shared.scenes.goodEnding}”。如果名称留空，游戏会显示“完”。
- 一段**简短文字**（可选），显示在名称下方。

结局结束后，玩家会回到标题画面。如果你用{ui.credits.afterEnding}开启了[制作人员名单](/novelworks-docs/zh-cn/game-ui/credits/)，名单会先滚动播放。

## 玩家看到什么

游戏会让画面变暗，显示结局的名称；如果有简短文字，会显示在名称下方。画面上有一行提示“{tx.game.returnToTitle}”，点击一下就会回到标题画面。结局画面上会隐藏地图按钮，自动播放和快进这两种阅读模式也会在此停止。

结局就是所在场景的终点：放在它后面的片段永远无法到达，编辑器会对此发出警告。以结局结尾的场景，不能再连出新的箭头。

### 当故事自然结束时

如果一个场景没有结局，最后一个片段之后也没有任何内容，游戏会显示一个结束画面，在[游戏界面](/novelworks-docs/zh-cn/game-ui/game-ui-editor/)编辑器中叫作{ui.gameUI.theEnd}（“剧情结束时显示。”）。你可以在那里修改它的文字、背景颜色和文字颜色。它和结局片段不是同一个画面，剧情地图会给这样的场景标上“{tx.storyMap.gameEndsHere}”。请添加一个真正的结局片段，让玩家得到一个像样的收尾。

## 查看所有结局

进入{ui.topBar.storyMap}，点击空白处，让**没有选中任何场景**。右侧面板会显示{ui.endings.title}：你的故事里每个结局片段各有一张卡片，按场景的顺序排列。每张卡片显示：

- 结局的名称（如果为空，显示“{tx.endings.unnamed}”），旁边有一面旗子；
- 它的位置：所在场景和第几个片段；
- {ui.endings.leadsHere}：通向它的路径，每个通向其场景的出口占一行，例如 `From "Park": Option "Run"`、`From "Station": if Affection ≥ 3` 或 `From "Station": otherwise`。如果该场景是起始场景，则显示“{tx.endings.startsHere}”

点击结局的名称可以打开它，点击某一行可以打开通向这里的片段。

![剧情地图的“游戏结局”面板，列出了通向每个结局的路径。](/novelworks-docs/screenshots/endings-panel.png)

如果没有任何路径通向某个结局（并且它不在起始场景中），卡片会显示警告：**“目前没有任何路径通向这里：玩家无法到达这个结局。”**

如果你的故事还没有结局，面板会告诉你，并建议在某个场景的末尾添加一个，例如为“如果…”的每种结果各设一个。

需要了解：

- 只有出口才算数：直接继续进入下一个场景的场景不算，回到自身的场景也不会被列为通向自己的结局。通向该场景的地图地点算作出口（显示为“地图 · …”）。
- 这个警告只检查是否有路径通向结局。如果结局所在的场景本身无法到达，而另一个无法到达的场景通向它，那么它可能不会显示警告。也请留意[剧情地图](/novelworks-docs/zh-cn/branching/story-map/)上的“{tx.storyMap.unreachable}”标签。
- 地图顶部的{ui.storyMap.endingsFilter}筛选会让不含结局的场景变淡。
- 每个结局也会以带名称的小旗子出现在所在场景的卡片上。
