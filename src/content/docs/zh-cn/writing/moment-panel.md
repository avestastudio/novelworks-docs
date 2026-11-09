---
title: 片段面板
description: 片段的文本、画面、效果和声音标签页，时间线下方的按钮，以及游戏画面上方的工具。
---

在时间线中选中一个片段，右侧的面板就会用四个标签页显示它的设置。如果你点击游戏画面上的角色，面板会改为显示这个角色。{ui.stageCharacterInspector.backToTheMoment}可以回到这些标签页。

如果片段有问题，标签页上方会有一个方框告诉你哪里不对。

## 四个标签页

| 标签页 | 在这里设置什么 |
|---|---|
| {ui.inspectorTabs.text} | 读到的内容：谁在说话、说了什么，或者选择、条件等其他种类片段的设置。还有你的私人笔记。 |
| {ui.inspectorTabs.image} | 看到的内容：背景、氛围和台上的角色。 |
| {ui.inspectorTabs.effects} | 动起来的方式：镜头和效果。 |
| {ui.sound.tab} | 听到的内容：音乐、环境音、音效和这句台词的配音。 |

标签页上的小圆点表示里面有内容：

- 当这个片段有镜头、前景、粒子或效果时，{ui.inspectorTabs.effects}上会有圆点。镜头、前景和粒子会延续到后面的片段，所以圆点也可能来自更早的片段。
- 当这个片段有自己的声音设置时，{ui.sound.tab}上会有圆点。
- {ui.inspectorTabs.text}和{ui.inspectorTabs.image}上永远不会有圆点。

## 文本

![对话片段的文本标签页，上面有说话者、台词、插入按钮和笔记。](/novelworks-docs/screenshots/moment-text-tab.png)

在对话片段上，你会看到{ui.momentInspector.speaker}、{ui.momentInspector.text}和{ui.richText.insert}按钮。请看[设置文字样式](/novelworks-docs/zh-cn/writing/rich-text/)。

在其他种类的片段上，标签页顶部是该种类的设置。

在可视化视图中，标签页接着会显示这个片段通向哪里；在场景的第一个片段上，还会显示有哪些地方通向它。再往下是{ui.momentInspector.note}和{ui.momentInspector.script}，后者显示这个片段在[剧本模式](/novelworks-docs/zh-cn/writing/script-mode/)里是怎么写的。

## 画面

![画面标签页，上面有更改的应用范围、背景、氛围方块和台上的角色。](/novelworks-docs/screenshots/moment-image-tab.png)

从上到下依次是：

- {ui.stage.scopeLabel}：{ui.stage.scopeFollowing}或{ui.stage.scopeOnlyHere}。请看[舞台](/novelworks-docs/zh-cn/concepts/stage/)。
- {ui.momentInspector.background}：请看[布置场景](/novelworks-docs/zh-cn/writing/staging/)。
- {ui.ambience.title}：请看[氛围与动态背景](/novelworks-docs/zh-cn/writing/ambience-and-animated-backgrounds/)。
- {ui.momentInspector.onStage}：台上的角色，以及他们的表情和位置。

## 效果

![效果标签页，上面有玩家所见内容的小预览，以及打开镜头和效果的按钮。](/novelworks-docs/screenshots/moment-effects-tab.png)

这个标签页的开头也是同样的{ui.stage.scopeLabel}设置。接下来是：

- {ui.camera.title}：玩家所见内容的小预览，以及{ui.camera.open}。请看[镜头](/novelworks-docs/zh-cn/writing/camera/)。
- {ui.effects.title}：这个片段的效果，以及{ui.effects.open}。请看[效果](/novelworks-docs/zh-cn/writing/effects/)。

## 声音

这个标签页的说明在[声音和音乐](/novelworks-docs/zh-cn/writing/sound/)里。

## 时间线下方

- 带加号的按钮{ui.moments.dialogue}，点一下就会在所选片段之后添加一句对话。
- {ui.timeline.addOther}会打开其他种类片段的列表，每种都有一句话说明它的用途。其中两种只有在对应的[功能](/novelworks-docs/zh-cn/features/features-panel/)开启时才会出现：{ui.moments.item}（物品栏）和{ui.moments.showMap}（地图）。
- 它们旁边的两个图标按钮用来复制和删除所选片段。你也可以右键点击片段，使用{ui.contextMenus.duplicate}和{ui.contextMenus.delete}。

## 游戏画面上方

游戏画面上方的栏很简洁：

- 背景按钮显示当前背景的名称，点击后会打开选择器。
- {ui.stageControls.character}可以让一个角色上台。
- 在探索片段上，还有绘制区域的工具。
- 右侧的{ui.topBar.visual}和{ui.topBar.script}，用来在游戏画面和场景文字之间切换。

点击背景按钮或{ui.stageControls.character}时，面板也会切换到{ui.inspectorTabs.image}。

## 角色上方的小栏

在游戏画面上选中一个角色时，角色上方会出现一个小栏。里面有{ui.stageCharacterInspector.expression}，如果角色还有其他服装，也会有{ui.stageControls.outfit}。

其余设置都在右侧的面板里：{ui.stageCharacterInspector.position}、大小、翻转、{ui.stageCharacterInspector.order}和{ui.stageCharacterInspector.removeFromStage}。
