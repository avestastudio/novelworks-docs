---
title: 变量
description: 创建和管理游戏记住的分数和事实，并查看每一个在哪里被使用。
---

**变量**是游戏记住的东西。有两种，在[游戏的记忆](/novelworks-docs/zh-cn/concepts/game-memory/)中有说明：{ui.variables.number}（会增加或减少的数字，比如 Mia 的好感度或金钱）和 {ui.variables.yesNo}（某件事有没有发生：是或否，比如“{tx.memory.factExample}”或“有钥匙”）。

玩家携带的东西（钥匙、硬币……）不是变量。它们是物品，属于[物品栏](/novelworks-docs/zh-cn/features/inventory/)功能。

## 变量标签页

{ui.leftPanel.variables} 标签页列出每个变量，以及它的类型和初始值（“分数 · 初始值 0”）。点击 {ui.variablesTab.newVariable} 添加一个。在空项目中，标签页会解释什么是变量。

新变量叫“变量 N”，N 是你已有变量的数量加一（如果这个名字已存在，就取下一个数字）。它是一个初始值为 0 的分数。选中它，就可以在检查器中编辑。

你也可以在需要的时候创建变量，方法是在选择中使用 {ui.memory.remember}。请看[选择](/novelworks-docs/zh-cn/branching/choices/)。

## 变量检查器

- {ui.variableInspector.name}：例如“{tx.variablesTab.miaAffection}”。重命名是安全的：所有使用这个变量的地方都会跟着改成新名字。
- {ui.variableInspector.type}：分数或事实。
- {ui.variableInspector.startsAt}：每个新游戏开始时的值。
- 对于分数，会有一句话说明你的选择最多能累加到多少。请看[你的选择能通向哪里](/novelworks-docs/zh-cn/branching/reach/)。
- {ui.memory.changedBy} 和 {ui.memory.checkedBy}：下面的列表。

### 变量在哪里被使用

这两个列表显示变量在哪里被使用，带有场景和片段编号。点击一行就能跳到那里。变量会被选择的选项或探索区域*修改*，会被选项的条件、一个如果…或一个区域*检查*。如果还没有任何东西修改它，检查器会这样说明，检查也是一样。

## 更改类型

如果变量已经被使用，NovelWorks 会请你确认，并列出使用的位置。这些位置里的值会被重置，以适应新的类型：

- 初始值对分数变成 0，对事实变成“否”；
- 这个变量上的每个改变和每个测试都会被重置：分数重置为 0，事实重置为“是”；
- 事实只能被设置，所以“{tx.branchInspectors.add}”会变成“{tx.branchInspectors.setTo}”，不适合新类型的比较会变成“是”。

如果变量没有被使用，类型会立即更改。

## 删除变量

NovelWorks 会请你确认。如果变量被使用，它会列出使用的位置，并警告**这些位置会一直显示警告，直到你另选一个变量**。只有变量被移除：使用过它的改变和测试会保留，显示警告，并显示为“{tx.linkSelects.deletedVariablePickAnother}”。

## 变量和玩家的存档

游戏把每个变量的值保存在玩家的存档里。读取存档时：

- 仍然存在且类型相同的变量，会得到保存的值；
- 已被删除，或类型已改变的变量，其值会被丢弃；
- 之后新增的变量，从它们的初始值开始。

所以你可以更新游戏，而不会弄坏旧存档。

## 变量可以在哪里使用

在选择选项的改变中、在选项的条件中、在[如果…](/novelworks-docs/zh-cn/branching/conditions/)的测试中、在探索区域中（它们的条件和“修改变量”动作），以及在对话台词里用来显示变量的值（请看[富文本](/novelworks-docs/zh-cn/writing/rich-text/)）。
