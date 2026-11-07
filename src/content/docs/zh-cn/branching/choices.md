---
title: 选择
description: 让玩家挑选一个选项，改变游戏记住的内容，并通往另一个场景。
---

一个 **{ui.moments.choice}** 片段会向玩家显示两到六个按钮。每个选项都可以改变游戏记住的内容，并把故事送往另一个场景。关于它和其他部分如何配合，请看[故事如何分支](/novelworks-docs/zh-cn/concepts/how-stories-branch/)。

## 添加选择

在时间线中，添加一个 **{ui.moments.choice}** 片段。它一开始有两个空选项。你可以在检查器中写，也可以直接在游戏画面上写。

![一个有两个选项的选择：每个选项会改变什么，以及它通往哪个场景。](/novelworks-docs/screenshots/choice-options.png)

## 问题

**{ui.branchInspectors.questionOptional}** 会显示在选项上方的文本框里，作为没有说话人的旁白。如果不需要，就留空。

## 选项

每个选项是一张卡片，带有它的编号和文字。

- **{ui.branchInspectors.addOption}** 添加一个选项。一个选择最多可以有 **6 个选项**，到 6 个时按钮会被禁用。
- 点 X 删除一个选项。一个选择**至少需要 2 个**，所以只剩两个时 X 会被禁用。
- 选项不能用拖动来重新排序。要改变顺序，请修改文字。

玩家点击一个选项，或者按它的数字键，1 到 6。

## 选项通往哪里

**{ui.branchInspectors.then}** 选择选项之后会发生什么：

- **{ui.linkSelects.continueNextMoment}**：故事继续同一场景的下一个片段。
- 一个场景，在 **{ui.linkSelects.orGoToScene}** 下选择：游戏会进入该场景的第一个片段。
- **{ui.linkSelects.newScene}** 创建一个空场景并链接到它。

如果场景被删除了，列表会显示 **{ui.linkSelects.deletedScenePickAnother}**，并有警告来说明。在游戏中，缺失的场景相当于“继续”。

当玩家选择一个选项时，游戏会先应用它的改变，然后再跟随链接。

## 选项会改变什么

在 **{ui.branchInspectors.changes}** 下，每个选项列出被选中时游戏会记住的内容。第一个按钮是 **{ui.memory.remember}**：它会在需要时创建一个[分数或事实](/novelworks-docs/zh-cn/concepts/game-memory/)，并一步添加改变。分数一开始是“加 1”，事实一开始是“设为是”。

每个改变是一行：

- **一个变量。**选择变量。对于分数，选 **{ui.branchInspectors.add}** 或 **{ui.branchInspectors.setTo}** 并输入一个数字。对于事实，始终是 **{ui.branchInspectors.setTo}** 是或否。点 X 删除这个改变。
- **给予或移除物品**，在物品栏功能开启时：**{ui.branchInspectors.giveRemoveAnItem}**。选择物品，**{ui.branchInspectors.give_0895a5}** 或 **{ui.branchInspectors.remove_7e5608}**，可叠加的物品还要选数量。

游戏应用这些改变时，会按顺序进行。指向已删除或未选择的变量或物品的改变会被跳过（编辑器会警告你）。对事实做加法不会有任何作用。单个物品永远不会超过一个，可叠加的物品永远不会低于零。

## 只在有时出现的选项

点击 **{ui.optionCondition.add}**。会出现一个 **{ui.optionCondition.title}** 块，它的编辑器和[如果…](/novelworks-docs/zh-cn/branching/conditions/)的各个情况相同：一个或多个条件，条件有多个时还有 **{ui.conditionCases.matchAll}** 或 **{ui.conditionCases.matchAny}**。

然后选择 **{ui.optionCondition.whenFalse}**：

- **{ui.optionCondition.hidden}**：选项不显示，其他按钮会补上空位。
- **{ui.optionCondition.locked}**：选项显示为灰色，不能被选择。

**{ui.optionCondition.remove}** 会让选项重新始终可用。移除最后一个条件也一样。

**玩家始终有路可走。**如果每个选项都会被隐藏或锁定，游戏会把它们全部正常显示出来。

检查已删除或未选择的变量或物品的条件，会被当作不成立，所以选项会被隐藏或锁定，编辑器也会警告你。

## 在游戏中

- 选项是叠放在屏幕中间的按钮。它们的外观来自[游戏界面](/novelworks-docs/zh-cn/game-ui/game-ui-editor/)。
- 按钮会在文字显示完毕后出现。
- 被隐藏的选项不会留下空位，数字键只数**屏幕上**的按钮。被锁定的按钮占一个数字，但不能被选择。

## 警告

有问题的片段，卡片上会显示一个三角形，检查器中会有一个“{tx.branchInspectors.thisMomentNeedsYourAttention}”的框。对于选择：

- 这个选择没有选项。
- 有一个选项没有文字。
- 有一个选项要前往已被删除的场景。请另选一个场景，或选择“继续”。
- 有一个选项要修改变量，但还没有选择变量，或者变量已被删除。
- 有一个选项使用或检查的物品没有选择、已被删除，或者它的物品栏功能已关闭。
- 有一个选项检查的变量没有选择或已被删除。

当每个选项都被锁定时没有警告：游戏会把它们全部显示出来，如上所述。
