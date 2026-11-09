---
title: "布置场景"
description: "选择背景，把角色放到画面上，并摆放、缩放、翻转和排列它们。"
---

布置场景，就是决定玩家在文字后面看到什么：背景和角色。一切都在游戏画面上完成，在{ui.topBar.story}模式的可视化视图里。开始之前，请先读[舞台](/novelworks-docs/zh-cn/concepts/stage/)：你在某个片段设置的内容会延续到后面的片段。想大致了解右侧的标签页，请看[片段面板](/novelworks-docs/zh-cn/writing/moment-panel/)。

## 选择更改的影响范围

开关{ui.stage.scopeLabel}有两个设置：{ui.stage.scopeFollowing}（默认）和{ui.stage.scopeOnlyHere}。你可以在片段的{ui.inspectorTabs.image}和{ui.inspectorTabs.effects}标签页中，以及台上角色的面板中找到它。请在更改之前先设置好。受到更改影响的片段会在时间线里短暂闪烁，在游戏画面上，角色会被标上{ui.stage.markNew}或{ui.stage.markChanged}。

## 背景

- 点击游戏画面上方的背景按钮（“{ui.stage.chooseTheBackgroundOfThisMoment}”），或者{ui.inspectorTabs.image}标签页里的{ui.momentInspector.change}。选择器会提供你的背景和 CG，还可以直接导入一张新图片或[动态背景](/novelworks-docs/zh-cn/writing/ambience-and-animated-backgrounds/)。{ui.momentInspector.noneBlackScreen}会显示黑屏。
- {ui.inspectorTabs.image}标签页里的{ui.momentInspector.applyToTheFollowingMoments}会把这个片段的背景应用到场景里之后的每个片段，应用前会请你确认。在最后一个片段上，它不可用。

空场景会在游戏画面上显示{ui.stage.chooseBackground}。同一个标签页里还有片段的[氛围](/novelworks-docs/zh-cn/writing/ambience-and-animated-backgrounds/)。

## 让角色登场

点击游戏画面上方的{ui.stageControls.character}（“{ui.stageControls.putACharacterOnStage}”），或者{ui.inspectorTabs.image}标签页的{ui.momentInspector.onStage}部分里的{ui.momentInspector.add}。列表会显示你的角色；已经在台上的角色不可选。如果你还没有角色，{ui.stageControls.newCharacter}可以创建一个。

角色会被放在中间、左边和右边三个位置里第一个空着的位置，贴着底边。如果三个位置都被占了，新角色会放在靠近中间、比其他角色稍微偏一点的地方，角色之间可以重叠：把它们拖到你想要的位置就行。这一部分里的{ui.stage.castTitle}栏也可以一键让角色上台或下台。

## 选中、移动和缩放

- **点击**游戏画面上的角色来选中它。它上面会出现一个小栏，显示它的表情和服装，检查器会显示{ui.inspector.characterOnStage}：它的全部细节。{ui.stageCharacterInspector.backToTheMoment}可以回到片段的标签页。
- **拖动**它，可以把它移到任意位置。靠近时，它会吸附到左、中、右位置和底边。整个拖动算一步撤销。
- **拖动角点**来缩放（{ui.stage.dragToResize}）。脚的位置保持不动。大小范围是 30 % 到 200 %。

## 摆放、翻转和排列

角色上方的小栏只保留表情和服装（角色有服装时才会出现服装）。其余设置在选中角色后的检查器里（{ui.stageCharacterInspector.position}、{ui.stageCharacterInspector.size}、{ui.stageCharacterInspector.order}）：

| 控件 | 作用 |
|---|---|
| {ui.stageCharacterInspector.expression} | 更改表情。默认表情有一颗星星。如果角色没有表情，会有一个按钮带你到角色标签页。 |
| {ui.stageControls.outfit} | 更换服装。请看[服装](/novelworks-docs/zh-cn/writing/outfits/)。 |
| {ui.scenes.left} / {ui.scenes.center} / {ui.scenes.right} | 把角色放到屏幕底部三个位置之一。角色保持原来的大小和朝向。 |
| {ui.stageCharacterInspector.flippedHorizontallyFacingTheOtherWay} | 让角色转向另一边。 |
| {ui.stageCharacterInspector.forward} / {ui.stageCharacterInspector.backward} | 把角色移到另一个角色的前面或后面。对话框始终在最上层。 |
| {ui.stageCharacterInspector.removeFromStage} | 让角色下台，范围取决于{ui.stage.scopeLabel}开关。 |

检查器里还有一个{ui.stageCharacterInspector.size}滑块，以及一个用来编辑角色名字和表情的按钮。

你也可以右键点击角色，使用表情、服装、位置、翻转和层次，另外还有{ui.contextMenus.stayUntil}、{ui.contextMenus.onlyThisMoment}、{ui.contextMenus.backToBefore}和{ui.contextMenus.leavesHere}；它们在[舞台](/novelworks-docs/zh-cn/concepts/stage/)里有说明。

要移除选中的角色，你也可以按 `Delete` 或 `Backspace`。方向键不会移动角色：它们用来在片段之间移动。

## 让场景接着上一个场景的结尾开始

在有其他场景通向的场景的第一个片段上，{ui.inspectorTabs.image}标签页里会出现一个横幅，可以建议你从前一个场景结尾时屏幕上的内容开始。见[舞台](/novelworks-docs/zh-cn/concepts/stage/)。

## 编辑时

- 游戏画面始终会缩放以适应窗口。
- 没有图片的角色会画成虚线轮廓，并带有“{tx.render.noPicture}”，这样你仍然可以摆放它。在游戏里，这样的角色不会被画出来。
- 编辑时，对话框会被可编辑的输入框取代。
