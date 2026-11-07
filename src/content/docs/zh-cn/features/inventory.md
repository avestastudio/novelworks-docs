---
title: 物品栏
description: "玩家携带的物品：创建它们、给予和拿走、在条件中检查，以及在游戏中查看。"
---

开启{ui.shared.features.inventory}功能后，玩家可以收集**物品**：钥匙、信件、硬币、线索。他们可以在物品栏菜单中查看这些物品。你可以在[功能库](/novelworks-docs/zh-cn/features/features-panel/)中开启它。物品不是[变量](/novelworks-docs/zh-cn/branching/variables/)：物品是玩家随身携带的东西。

## 物品标签页

{ui.leftPanel.items}标签页列出你的物品，每个物品显示它的图片（或一个背包）、名称，以及{ui.itemInspector.single}或{ui.itemInspector.stackable}。点击{ui.itemsTab.newItem}。新物品会命名为“物品 1”、“物品 2”……并被选中。

![物品标签页，以及某个物品的检查器。](/novelworks-docs/screenshots/items-tab.png)

在检查器中：

- {ui.itemInspector.name}；
- {ui.itemInspector.picture}：类型为“道具”的图片，显示在物品栏中（你可以当场导入一张）；
- {ui.itemInspector.description}：玩家在物品栏中查看它时读到的内容；
- {ui.itemInspector.kind}：{ui.itemInspector.single}（玩家有或没有，像钥匙）或{ui.itemInspector.stackable}（玩家可以有多个，像硬币；物品栏会显示数量）；
- {ui.itemInspector.usedIn}：这个物品在哪些地方被用到，或者“尚未使用。可通过“物品”片段、选项或“拾取”区域来给予。”

### 删除物品

{ui.itemInspector.deleteItem}会先询问，并列出这个物品用在哪些地方。只会移除物品本身：用到它的地方会保留，并显示警告，直到你选择另一个物品。

## 给予和拿走物品

- **物品片段**：它给予或拿走物品，玩家看不到这个片段本身。选择{ui.branchInspectors.give}或{ui.branchInspectors.remove}、物品，以及可叠加物品的数量。一个复选框决定是否显示提示（“你获得了：……”）。参见[场景、片段与时间线](/novelworks-docs/zh-cn/concepts/scenes-moments-timeline/)。
- 选择的选项：{ui.branchInspectors.giveRemoveAnItem}会给选项添加一项更改。提示总是会显示。参见[选择](/novelworks-docs/zh-cn/branching/choices/)。
- 探索区域：{ui.explorationInspectors.pickUpAnItem}（该区域及其道具会永久消失）或{ui.shared.exploration.useAnItem}。参见[探索](/novelworks-docs/zh-cn/features/exploration/)。

单个物品最多只能有一个，可叠加物品不会低于零。移除的数量超过玩家拥有的数量时，只会移除现有的部分。

## 检查物品

在[如果…](/novelworks-docs/zh-cn/branching/conditions/)、选项的条件或区域的条件中，在{ui.branchInspectors.whatToCheck}里选择{ui.moments.item}：玩家{ui.conditionTests.has}、{ui.conditionTests.doesnTHave}或{ui.conditionTests.hasAtLeast}若干个该物品。对已删除物品的测试永远不会通过。

如果你关闭物品栏功能，玩家会失去按钮、菜单项和 **I** 键，但给予或检查物品的片段仍会继续运行；编辑器会警告你。每一种用到物品的地方都会显示警告：物品片段（给予或移除）、选择的效果、被物品锁定的选项、对物品的“如果…”测试，以及拾取、使用物品或被物品锁定的区域。你可以在片段的问题框、时间线和导出窗口中看到它（剧本视图不会给它加下划线）。参见[功能库](/novelworks-docs/zh-cn/features/features-panel/)。

## 玩家看到什么

- 屏幕角落的一个按钮（默认在右上角，可在[物品栏画面](/novelworks-docs/zh-cn/game-ui/inventory-ui/)中设置）、暂停菜单中的一个菜单项，以及 **I** 键。
- 一个面板，用网格显示他们拥有的物品，可叠加物品会显示数量。点击某个物品会显示它的说明。没有“使用”按钮：使用物品是由区域来检查的。
- {ui.gameUI.notices}，例如“你获得了：钥匙”和“你失去了：钥匙”（参见[提示（通知）](/novelworks-docs/zh-cn/game-ui/notifications/)）。
- 物品会保存在玩家的存档中。加载旧存档时，已不存在的物品会被丢弃。

## 测试

在试玩模式中，{ui.playOverlay.variablesItems}会列出游戏中的所有物品，每个物品带有 **−** 和 **+**，用来在测试时给予或移除一个（不显示提示）。游戏开始之前，它会显示“{tx.playOverlay.startPlayingToGiveOrRemoveItems}”

## 警告

- 请选择要给予或移除的物品；这个片段给予或移除的是已被删除的物品。
- 物品栏功能已关闭：玩家没有物品栏。请在功能库中开启它。
- 某个效果或条件使用或检查的物品没有选择、已被删除，或物品栏功能已关闭。
- 某个区域需要一件玩家永远得不到的物品（剧情中没有任何地方给予它）。
