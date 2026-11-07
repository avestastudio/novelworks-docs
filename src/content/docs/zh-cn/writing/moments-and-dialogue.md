---
title: "片段与对话"
description: "写对话台词、添加片段、重新排序，并使用片段菜单。"
---

**片段**是场景的一个步骤：一句对话、一个选择、一次跳转……本页讲的是最常见的一种，{ui.moments.dialogue}片段。其他种类见[场景、片段与时间线](/novelworks-docs/zh-cn/concepts/scenes-moments-timeline/)。

## 写一句台词

点击游戏画面上的对话框，然后输入。文字直接在框里输入，你也可以使用检查器里的{ui.momentInspector.text}。

- **Enter** 开始**下一句**：在这个片段之后新建一个对话片段，舞台和说话者都与它相同，可以直接输入。
- **Shift+Enter** 在**同一个框里**换一行。
- 如果文字太长，对话框放不下，会显示警告：按 **Enter** 在新的片段里继续。

## 谁在说话

在文字上方、姓名牌上，或者用检查器里的{ui.momentInspector.speaker}，选择：

- {ui.stageControls.narrator}：没有说话者，只有文字；
- 一个角色。在台上的角色排在最前面，然后是其他角色。

新的一句台词会沿用上一句的说话者。如果你删除了一个角色，他说过的台词会变成旁白。

## 添加片段

在时间线里，卡片上方的按钮会在**所选片段之后**添加各种片段：{ui.moments.dialogue}、{ui.moments.choice}、{ui.moments.condition}、{ui.moments.jump}、{ui.moments.ending}、{ui.moments.exploration}，以及在相应功能开启时的{ui.moments.item}和{ui.moments.showMap}。条带末尾的 **+** 会添加一句对话。在空场景里，{ui.timeline.writeTheFirstLine}也有同样的作用。

新片段不会改变屏幕上的任何东西：它显示的是它前一个片段所显示的内容（见[舞台](/novelworks-docs/zh-cn/concepts/stage/)）。

## 重新排序片段

向左或向右拖动卡片。箭头 **←** 和 **→** 把选择移到上一个和下一个片段，**Home** 和 **End** 移到第一个和最后一个，而在输入文字时，**Cmd+[** / **Cmd+]**（**Ctrl+[** / **Ctrl+]**）有同样的作用。

## 卡片显示什么

卡片会显示说话者的名字（用他的颜色），或者“旁白”，或者带彩色条纹的片段种类，还有文字的开头，以及角落里的编号。它还可能显示：

- 如果这个片段有[笔记](/novelworks-docs/zh-cn/writing/notes/)，会显示一个便利贴图标；
- 一个警告三角形：把鼠标指向它，就能看到需要注意什么，例如没有选项的选择、指向已删除场景的链接，或者因为前面有结局或跳转而让玩家永远看不到的片段；
- 一些小标签，表示这个片段在台上改变了什么；卡片下方是显示谁在台上的图表。

## 片段菜单

右键点击一张卡片：

| 菜单项 | 作用 |
|---|---|
| {ui.contextMenus.insertBefore} | 在这个片段之前添加一个对话片段。它会沿用被它挤到后面的那个片段的说话者，并显示它前一个片段的画面。 |
| {ui.contextMenus.insertAfter} | 在之后添加一个（**Cmd+Enter** / **Ctrl+Enter**）。 |
| {ui.contextMenus.duplicate} | 把这个片段复制到它的紧后面，显示相同的画面（**Cmd+D** / **Ctrl+D**）。 |
| {ui.contextMenus.changeType} | 把这个片段变成另一种。对话、选择或结局的文字会保留；如果有些设置无法保留，NovelWorks 会询问，你也可以撤销。 |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | 打开这个片段的笔记。 |
| {ui.contextMenus.playFromHere} | 从这个片段开始播放（**Cmd+Shift+P** / **Ctrl+Shift+P**）。 |
| {ui.contextMenus.delete} | 删除这个片段。 |

## 删除片段

使用时间线上方的垃圾桶图标、检查器里的{ui.momentInspector.delete}、菜单里的{ui.contextMenus.delete}，或者 `Delete` 键。NovelWorks 会请你确认，空的对话行除外。被删除的片段在台上做的更改会传给下一个片段，所以其他片段显示的内容保持不变。

## 对话片段的检查器

从上到下依次是：警告（如果有）、{ui.momentInspector.speaker}和{ui.momentInspector.text}、{ui.momentInspector.background}、谁{ui.momentInspector.onStage}、{ui.momentInspector.note}，以及{ui.momentInspector.script}，它显示这个片段在[剧本模式](/novelworks-docs/zh-cn/writing/script-mode/)里是怎么写的，你可以复制它。对话片段没有声音、音乐或转场设置。
