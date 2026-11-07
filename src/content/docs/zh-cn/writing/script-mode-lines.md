---
title: "剧本模式：每一种行"
description: 在剧本模式中可以写的每一种行，附示例。
---

在剧本模式中，**一行就是一件发生的事**。示例使用英文关键词。NovelWorks 同时也能读懂其他编辑器语言的关键词（`si`、`décor`、`fin`……）。NovelWorks 读取关键词或名字时，大小写、重音符号和多余的空格都没有影响。

关于选择、条件和跳转，请看[剧本模式：条件和选择](/novelworks-docs/zh-cn/writing/script-mode-conditions/)。

## 对话

```
Mia : Hello!
```

`Name : text` 这样的一行，就是由该角色说出的一句对话。冒号两边的空格可有可无。如果没有叫这个名字的角色，整行会被当作旁白并被标出，同时会有一个快速修复，提供创建这个角色。

### 带表情

```
Mia (happy) : Hello!
```

Mia 带着“happy”表情说话。如果她已经在台上，她会换表情并留在原位。如果她不在台上，她会出现在中间。

### 多行文字

```
Mia : I looked for you everywhere.
  I had given up hope.
```

缩进两个空格的一行会接着上一行，作为**同一个框内**的新一行。

## 旁白

```
It had been raining since morning.
```

任何不属于其他类型的行，都是旁白。

### 原样保留的一行

```
> background : this is just text
```

以 `>` 开头的行是**原样写出**的旁白，即使它看起来像一条命令。当旁白可能被误读时，NovelWorks 会自动写上 `>`。

## 笔记

```
// to re-read
Mia : Hello!
```

以 `//` 开头的行是附在下一个片段上的私人笔记。它永远不会在游戏中显示。请看[笔记](/novelworks-docs/zh-cn/writing/notes/)。

## 舞台行

这些行本身不构成片段：它们从下一行起改变舞台。

```
background : Station
show : Mia happy left
hide : Mia
hide : everyone
```

- **`background : Name`** 把背景换成名为 Name 的图片。`background : none`，或冒号后什么都不写，会移除背景。
- **`show : Mia happy left`** 让角色出现，或改变其表情或位置。名字后面可以加上表情和位置：`left`、`center` 或 `right`，或者用 `placed by hand` 保留自由摆放的位置。不写位置时，已在台上的角色保持原位，新角色会站到中间。角色名可以包含空格。
- **`hide : Mia`** 让角色离开。`hide : everyone`，或冒号后什么都不写，会清空舞台。

舞台行后面需要再有一行。否则它会被标出。

## 物品

```
give : Key
give : Key x3
remove : Key
give : Key, no notice
```

这是给玩家一个物品或拿走一个物品的片段。`x3` 是数量（也可以用 × 符号）。`take :` 和 `remove :` 意思相同。`, no notice` 会隐藏玩家平常能看到的简短提示。物品是游戏的一项功能，请看[物品栏](/novelworks-docs/zh-cn/features/inventory/)。

## 打开地图

```
map
```

只有 `map` 一个词的行会打开地图（一个显示地图片段）。请看[地图](/novelworks-docs/zh-cn/features/map/)。

## 结局

```
end : Good ending
  You understood everything.
```

一个结局，冒号后面是它的名字。下面缩进的行是可选的简短文字。`ending :` 也可以。如果恰好有角色叫“End”，角色优先于关键词，除非你把命令写在方括号里。

## 探索片段

```
exploration : 3 zones
```

剧本模式把探索片段显示为一行，带有区域数量。你不能在这里创建或编辑区域：探索要在检查器中编辑，而且你编辑其余文字时，片段会保留它的区域和道具。新写的 `exploration` 行一开始是空的。请看[探索](/novelworks-docs/zh-cn/features/exploration/)。

## 标题（整个游戏的文字）

```
# Park
```

在整个游戏的文字中，以 `#` 开头的行会开始一个以该名字命名的场景。

## 方括号

命令行可以用方括号括起来：`[background : Station]` 和 `background : Station` 一样。方括号永远表示“这是一条命令”。只有当角色和某条命令同名时才需要用它：如果你有一个叫 Background 的角色，命令要写成 `[background : Station]`，角色要写成 `Background : Hi!`。

## 速查表

| 你写 | 效果 |
|---|---|
| `Mia : Hello!` | Mia 说话。 |
| `Mia (happy) : Hello!` | Mia 带表情说话。 |
| `It rained.` | 旁白。 |
| `  more text` | 文字在同一个框内继续。 |
| `> text` | 原样保留的一行。 |
| `// note` | 下一个片段上的私人笔记。 |
| `background : Station` | 从这里起背景改变。 |
| `show : Mia happy left` | 角色出现或改变。 |
| `hide : Mia` | 角色离开。 |
| `give : Key x3` / `remove : Key` | 给出或拿走物品。 |
| `map` | 打开地图。 |
| `end : Good ending` | 一个结局。 |
| `-> Park` | 跳转到一个场景。 |
| `? …`、`- …`、`if …` | 选择和条件：请看下一页。 |
| `# Park` | 一个场景（仅限整个游戏的文字）。 |
