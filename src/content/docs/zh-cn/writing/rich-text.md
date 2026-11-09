---
title: 设置文字样式
description: 让文字变粗、变色、变大或抖动，并在对话台词里加入停顿和变量。
---

你可以为一句对话台词的任何部分设置样式。你可以在游戏画面上或{ui.inspectorTabs.text}标签页里书写，文字的样子和游戏里一样。

## 给一些文字设置样式

在台词中选中一些文字。它们上方会出现一个小工具栏。

![选中文字上方的工具栏，上面有粗体、斜体、颜色、大小和动态。](/novelworks-docs/screenshots/rich-text-toolbar.png)

| 控件 | 作用 |
|---|---|
| {ui.richText.bold}和{ui.richText.italic} | 让文字更粗或倾斜。你也可以按 `Cmd+B` / `Ctrl+B` 和 `Cmd+I` / `Ctrl+I`。 |
| 五个圆形色块 | 你的调色板里的颜色（见下文）。 |
| {ui.richText.customColor} | 任意其他颜色，只用于这次选中的文字。 |
| {ui.richText.small}和{ui.richText.big} | 让文字更小或更大。文字一次只能有一种大小。 |
| {ui.richText.shake}和{ui.richText.wave} | 文字在游戏里颤抖或起伏。文字一次只能有一种动态。 |
| {ui.richText.clear} | 去掉所选文字的所有样式。 |

再次点击某个样式，就可以去掉它。

## 你的五种颜色

工具栏上的五种颜色只需为整个游戏设置一次：{ui.topBar.gameUI}、{ui.gameUI.dialogueBox}、{ui.richText.palette}。

如果你在那里更改某个颜色，所有使用它的文字也会跟着变。用{ui.richText.customColor}选的颜色不会跟随调色板。

## 插入停顿或变量

在{ui.inspectorTabs.text}标签页的文字输入框下方，{ui.richText.insert}这一行会在光标最后所在的位置添加内容。

{ui.richText.pause}会在台词中间加入短暂的等待。它在文字里显示为一个小标签，时长为半秒。点击标签可以修改时长，范围是 0.1 到 5 秒。

{ui.richText.variable}会打开你的[变量](/novelworks-docs/zh-cn/branching/variables/)列表。在文字里，你看到的是显示变量名称的小标签。在游戏里，玩家看到的是变量的值。真假变量会显示为{rt.game.yes}或{rt.game.no}。如果你删除了这个变量，游戏在那个位置不会显示任何内容。

## 玩家看到什么

- 台词会一个字一个字地打出来，遇到停顿就停下。
- 第一次点击会显示整句台词。下一次点击才会继续。
- 只要台词还在屏幕上，抖动和波浪文字就会一直动。
- 如果玩家在系统中要求减少动态效果，文字就不会动。
- [历史记录](/novelworks-docs/zh-cn/player/history/)和屏幕阅读器只会得到文字本身，不带样式。

## 在剧本模式中

在[剧本模式](/novelworks-docs/zh-cn/writing/script-mode/)中，样式写成包在文字两边的标签：

```
Mia : I {b}never{/b} said that.
Mia : It was {color=1}red{/color}, {shake}so red{/shake}.
Mia : Well...{pause} maybe.
Mia : Wait.{pause=2} You have {Affection} points.
```

| 标签 | 含义 |
|---|---|
| `{b}` … `{/b}` | 粗体 |
| `{i}` … `{/i}` | 斜体 |
| `{color=1}` … `{/color}` | 调色板里的一种颜色，从 1 到 5。也可以用 `{color=#ff0000}` 这样的代码。 |
| `{small}` … `{/small}`, `{big}` … `{/big}` | 大小 |
| `{shake}` … `{/shake}`, `{wave}` … `{/wave}` | 动态 |
| `{pause}`, `{pause=2}` | 半秒的停顿，或你指定秒数的停顿 |
| `{Affection}` | 这个名称的变量的值 |

要写出真正的 `{`，请连打两个：`{{`。

标签的词语跟随编辑器的语言。从其他语言复制来的剧本仍然可以使用。

## 限制

样式、停顿和变量只能用在对话台词里。选择的选项和结局的名称都是纯文本。
