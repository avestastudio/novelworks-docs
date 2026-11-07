---
title: "剧本模式：条件和选择"
description: 用文字写选择、选项的效果、有多个情况的条件，以及跳转。
---

本页接续[剧本模式：每一种行](/novelworks-docs/zh-cn/writing/script-mode-lines/)。示例使用英文关键词；NovelWorks 同时也能读懂其他编辑器语言的关键词。

## 跳转

```
-> Park
```

跳转到名为 Park 的场景。玩家看不到这个片段。如果你只写 `->` 而不写名字，它就是一个还没有场景的跳转。

## 选择

```
? What now?
- Talk to her -> Park
- Leave
```

- 以 `?` 开头的行是问题。它是可选的：如果前面没有问题，以 `-` 开头的行会开始一个没有问题的选择。
- 每一行以 `-` 开头的就是一个选项。文字后面的 `-> Park` 是该选项通往的场景（取**最后一个** `->` 之后的部分）。没有 `->` 的选项会让故事继续。
- 只有问题、没有选项的选择，也会按原样读取。选择至少需要两个选项，才能在游戏中正常工作。

### 选项会改变什么

选项下面缩进的行，就是它会改变的内容：

```
- Give her the flower -> Park
  + Affection 1
  = MetMia true
  give : Key
  remove : Coin
```

| 行 | 含义 |
|---|---|
| `+ Affection 1` | 给名为 Affection 的分数加 1。 |
| `= MetMia true` | 设置 MetMia。值是一个数字，或 `true` / `false`（`yes` / `no` 也可以）。 |
| `give : Key`（`give : Key x3`） | 给玩家一个物品。 |
| `remove : Key` | 拿走一个物品。 |

任何其他缩进的行都会被标出并被忽略。

### 只在有时出现的选项

```
- Open the door -> Hall
  if item Key, locked
```

选项下面缩进的 `if` 行说明它何时可用。加上 `, locked`，当选项不可用时会显示为灰色。不加的话，选项会被隐藏。请看[故事如何分支](/novelworks-docs/zh-cn/concepts/how-stories-branch/)：玩家始终有路可走。

## 测试

条件测试一个变量或一个物品：

| 测试 | 含义 |
|---|---|
| `Affection >= 3` | 分数 Affection 至少是 3。 |
| `MetMia = true` | 事实 MetMia 是“是”。 |
| `item Key` | 玩家有一把 Key。 |
| `item Coin x3` | 玩家至少有 3 个 Coin。 |
| `without Key` | 玩家没有 Key。 |

对于分数，可以用 `=`（或 `==`）、`!=`（或 `≠`）、`>`、`>=`（或 `≥`）、`<` 和 `<=`（或 `≤`）。对于事实，只能用 `=` 和 `!=`。带小数逗号的数字也可以接受。

## 条件：一个如果…片段

```
if Affection >= 3 -> Park, else -> Nothing
```

条件成立时去哪里，以及在 `, else ->` 之后，不成立时去哪里。两部分都是可选的。玩家看不到这个片段。

### 多个情况

把每个情况写在单独一行。第一个成立的情况获胜：

```
if Affection >= 5 -> Park
else if Affection >= 2 -> Station
else -> Nothing
```

- `else if …` 添加一个情况。`else -> …` 是没有任何情况成立时要去的地方。
- 这些行必须紧挨着，中间不能有空行，最后的 `else` 后面不能再有内容。不是接在条件后面的 `else` 行只是普通文字。
- 如果最后的 `else` 后面没有写场景，故事会继续下一个片段。

![一个如果…先检查情况 1，再检查情况 2，然后走向否则。](/novelworks-docs/diagrams/if-order.svg)

### 一个情况里有多个测试

```
if Affection >= 3 and item Key -> Park
if MetMia = true or item Letter -> Library
```

所有测试都必须成立时用 `and`，只要一个成立就够时用 `or`。**不要在同一行里混用 `and` 和 `or`**：NovelWorks 会标出，并且只使用第一种。

## 如果某个名字还不存在

未知的场景、变量或物品会带下划线。快速修复，或者 {ui.scriptMode.createMissing_other}，可以创建它。请看[剧本模式：基础](/novelworks-docs/zh-cn/writing/script-mode/)。
