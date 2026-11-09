---
title: "游戏的记忆"
description: "分数和事实：游戏如何记住玩家做过的事。"
---

只有当游戏**记住**了选择，选择才有意义。NovelWorks 用变量来保存发生过的事。变量有两种。

| 种类 | 保存什么 | 例子 |
|---|---|---|
| {ui.variables.number} | 游戏可以加减的数字。 | Mia 的好感度、金钱 |
| {ui.variables.yesNo} | 某件事发生了没有：{ui.variables.yes} 或 {ui.variables.no}。 | “{tx.memory.factExample}”“有钥匙” |

玩家携带的物品（钥匙、信件、硬币……）是游戏中另一个可选的部分：见[物品栏](/novelworks-docs/zh-cn/features/inventory/)。

## 变量标签页

{ui.leftPanel.variables}标签页列出你的所有变量，每个变量都显示它的种类和初始值（“分数 · 初始值 0”）。点击{ui.variablesTab.newVariable}，会添加一个名为“变量 N”的分数（N 是你已有的变量数量），然后你可以在检查器里重命名它，并设置它的初始值（{ui.variableInspector.startsAt}）。你也可以修改{ui.variableInspector.type}：如果这个变量已经被用到，NovelWorks 会先请你确认，并重置相关的值。

如果你删除了一个正在被使用的变量，NovelWorks 会提醒你。用到它的地方会保留下来，并显示警告。

## 让游戏记住某件事

你很少需要先打开变量标签页。在{ui.moments.choice}里，每个选项都有一个{ui.branchInspectors.changes}区域。点击{ui.memory.remember}，面板会问你{ui.memory.rememberTitle}：

1. 选择{ui.memory.scoreTitle}（会增加或减少的数字，例如“Mia 的好感度”）或{ui.memory.factTitle}（发生过的事：是或否，例如“{tx.memory.factExample}”），然后在{ui.memory.nameLabel}里输入名称。
2. 或者用{ui.memory.orPick}选择一个已有的变量。
3. 点击{ui.memory.createAndUse}。

如果变量是新的，NovelWorks 会创建它，并一步把这项更改加到选项上。分数一开始是“加 +1”，事实一开始是“设为 是”。之后你可以修改数值。

## 使用游戏记住的内容

{ui.moments.condition}片段会根据某个变量，把剧情送往不同的场景；选择中的某个选项也可以只在满足条件时才出现。对分数，你可以判断：等于、不等于、至少、至多、大于、小于。对事实：是、不是。见[剧情如何分支](/novelworks-docs/zh-cn/concepts/how-stories-branch/)和[条件](/novelworks-docs/zh-cn/branching/conditions/)。

## 你的选择最多能累加到多少

在分数的判断下面，NovelWorks 会告诉你有哪些可能，这样你就不用自己去数：

- “你的选择最多可以让 好感度 总共增加 +5。”
- “你的选择可以让 好感度 总共在 0 到 5 之间变化。”
- “目前没有任何东西会改变 好感度：它保持为 0。”

当你输入一个数字来比较时，它会告诉你“✓ 这是可能发生的。”，或者警告“⚠ 这永远不会成立：好感度 只会在 0 到 5 之间。”如果 NovelWorks 无法判断分数最高或最低能到多少（例如场景会循环，或者某个区域每次都生效），它就什么也不说，因为总数没有上限。

用{ui.memory.tryTitle}框来试一试{ui.moments.condition}：选一个值来假装，它会显示哪个情况成立、剧情会去哪里，而不需要真的试玩。
