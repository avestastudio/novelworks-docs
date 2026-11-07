---
title: 地图
description: 让玩家在由一张图片和可点击地点组成的地图上选择要去哪里。
---

开启{ui.shared.features.map}功能后，玩家可以打开地图并选择要去哪里。地图是你的世界的一张图片，上面有若干**地点**。每个地点通向一个场景。你可以在[功能库](/novelworks-docs/zh-cn/features/features-panel/)中开启它。

## 打开地图工作区

点击左侧面板中的{ui.leftPanel.map}（或功能库中的{ui.mapSettings.editMap}）。地图工作区左边是地点列表，中间是地图，右边是设置。{ui.mapMode.backToStory}会回到剧情模式。

地图是作为一个隐藏的场景保存的：它不会出现在场景标签页或剧情地图中。

### 创建地图

还没有地图时，{ui.mapMode.createYourMap}会显示：“{tx.mapMode.chooseAPictureOfYourWorldThen}”点击{ui.mapMode.addAMapBackground}，选择一张背景或 CG。之后可以用{ui.mapMode.changeBackground}来更换。

## 添加地点

点击{ui.mapMode.addLocation}，然后在地图上拖动来绘制一个地点。如果想要自定义形状，请选择**{ui.explorationCanvas.shape}**，点击它的各个角，然后按 **Enter**。拖动地点可以移动它，拖动它的手柄可以调整大小。选中一个地点就可以编辑它。

### 地点有什么

- {ui.mapMode.name}：给你自己看的。
- {ui.mapMode.sceneToPlay}：它通向的场景。你可以选一个，或者点{ui.mapMode.createAScene}（它会询问名称，创建一个场景并连接）。{ui.mapMode.editScene}会打开它。
- {ui.mapMode.returnToMapWhenFinished}：玩家在这个场景以及它通向的所有场景结束之后回到地图。结局片段仍然会结束游戏。
- {ui.mapMode.availability}：
  - {ui.mapMode.availableUnderACondition}：一个变量或物品条件。{ui.mapMode.otherwise}，你可以{ui.mapMode.hideLocation}或{ui.mapMode.showAsLocked}，对于锁定的地点，可以写一段{ui.mapMode.messageWhenLocked}（留空表示什么也不会发生）。
- {ui.mapMode.appearanceAndVisits}：{ui.mapMode.labelOnHover}、{ui.mapMode.highlight}（{ui.mapMode.glow}、{ui.mapMode.outline}或{ui.mapMode.none}）和{ui.mapMode.visitOnlyOnce}（只访问过一次的地点仍然可见，但不能再次使用）。
- {ui.mapMode.duplicate}和{ui.mapMode.delete}。

地点就是探索区域，所以保留了旧项目中自定义交互的地点，会像区域一样编辑（参见[探索](/novelworks-docs/zh-cn/features/exploration/)）。左侧列表中还有可折叠的“装饰”（放在地图上的道具）和{ui.leftPanel.characters}部分。设置底部的“检查你的地图”框会列出问题。

## 玩家什么时候可以打开地图？

在地图设置中（没有选中任何地点时），{ui.mapMode.mapButtonAvailable}：

| 设置 | 含义 |
|---|---|
| {ui.map.fromTheStart} | 玩家从游戏一开始就可以用地图按钮打开地图。 |
| {ui.map.afterFirstShown} | 剧情第一次进行到“{tx.moments.showMap}”片段之后，地图按钮才会出现。 |
| {ui.map.storyOnly} | 只有剧情中的“{tx.moments.showMap}”片段才能打开地图。不显示地图按钮。 |

### “{tx.moments.showMap}”片段

在场景中添加一个{ui.moments.showMap}片段，可以立刻打开地图。当设置是“{tx.map.afterFirstShown}”时，它也会让地图按钮出现。玩家看不到这个片段本身，同一场景中放在它后面的片段永远无法到达。以这种方式打开的地图没有返回按钮：玩家必须选择一个目的地。

用按钮打开的地图有一个{rt.game.back}按钮，可以让玩家回到他们原来所在的那个片段。

## 玩家选择地点后会发生什么

游戏会前往该地点的场景。如果开启了{ui.mapMode.returnToMapWhenFinished}，故事结束时玩家会回到地图。没有场景的地点什么也不会做。按钮的外观请参见[地图按钮](/novelworks-docs/zh-cn/game-ui/map-button/)，同样可以打开地图的还有 **M** 键和暂停菜单项。

## 测试

- 在地图工作区中，顶部栏的{ui.topBar.testMap}（以及地图设置中同名的按钮）会从地图开始试玩。
- 在试玩模式中，{ui.playOverlay.openMap}会打开地图，即使玩家在那个时间点还不能打开它；返回会回到你原来所在的位置。

## 警告

- 地图功能已关闭：“{tx.moments.showMap}”片段不会起任何作用。
- 请创建你的地图并添加背景；地图片段已被删除，或不再是探索。
- 玩家永远无法打开地图：游戏没有起始场景，或者按钮在等待一个无法到达的“{tx.moments.showMap}”片段。
- 请在“地图”中添加背景图片。
- 某个地点通向一个场景但没有选择场景，或通向已被删除的场景。
- 请至少画一个供玩家点击的区域。
