---
title: 对话框
description: "名字和台词出现的地方：位置、大小、背景、文字和头像。"
---

**{ui.gameUI.dialogueBox}** 是显示说话者名字和文字的方框。它的大小和位置都用屏幕的百分比表示（大多是相对于屏幕高度），所以在任何分辨率下外观都不变。

## 位置和大小

- **{ui.gameUIInspector.position}**：{ui.gameUIInspector.bottom}（默认）、{ui.gameUIInspector.top}、{ui.gameUIInspector.left}、{ui.gameUIInspector.right} 或 {ui.gameUIInspector.center}。选择其中一项时，宽度和高度也会设成合适的起始大小：上、下是一条宽条，左、右是一个高面板（约占屏幕的三分之一），居中则是中间的一个方框。
- **{ui.gameUIInspector.margin}**：与屏幕边缘的间距（0 到 20 %，默认 3.5）。
- **{ui.gameUIInspector.width}** 和 **{ui.gameUIInspector.height}**：10 到 100 %。选好位置后，你可以再调整它们。

## 背景

选择 **{ui.gameUIInspector.color}** 或 **{ui.gameUIInspector.image}**。

- **{ui.gameUIInspector.color}**：一种颜色和一个 **{ui.gameUIInspector.opacity}**（0 到 100 %，默认 80）。这个颜色也是选择按钮、暂停菜单和其他面板（“{tx.gameUIInspector.sameAsTheDialogueBox}”）以及名字标签的默认颜色。即使方框本身用了图片，这一点也不变：这时颜色和不透明度不再显示在方框上，但仍然会给那些按钮和面板上色。
- **{ui.gameUIInspector.image}**：任意一张图片。透明的部分仍然保持透明，所以你可以用气泡、卷轴或任何形状。选择它的适配方式：
  - **{ui.gameUIInspector.stretch}**：铺满整个方框（图片可能看起来被压扁）；
  - **{ui.gameUIInspector.fit}**：显示完整的图片，保持它的形状；
  - **{ui.gameUIInspector.slice}**：四个角保持原有大小，边缘和中间会拉伸。设置 **{ui.gameUIInspector.cornerSize}**（占图片的 %）。默认情况下，四个角按图片的原始大小显示；取消勾选就可以设置 **{ui.gameUIInspector.cornerDisplaySize}**，这对大尺寸、高分辨率的边框很有用。

## 文字和名字

- **{ui.gameUIInspector.textColor}**：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。
- **{ui.gameUIInspector.nameColor}**：**{ui.gameUIInspector.characterColors}**（每个角色自己的[姓名颜色](/novelworks-docs/zh-cn/writing/characters/)，默认）或 **{ui.gameUIInspector.oneColor}**（所有名字共用一个 **{ui.gameUIInspector.colorOfEveryName}**）。
- **{ui.gameUIInspector.textPadding}**：方框边缘与文字之间的空白（0 到 15 %，默认 4）。
- **{ui.gameUIInspector.speakerName}**：**{ui.gameUIInspector.insideTheBox}**（默认）或 **{ui.gameUIInspector.tabAbove}**（方框上方的一个标签）。

## 头像

当有头像的角色说话时，头像会显示在名字旁边。在[角色标签页](/novelworks-docs/zh-cn/writing/characters/)里设置头像。

- **{ui.gameUIInspector.side}**：左（默认）或右。
- **{ui.gameUIInspector.size}**：占屏幕高度的 5 到 60 %（默认 20）。绝不会比方框更高。

## 检查效果

用预览上方的 **{ui.gameUIMode.longTextAvatar}** 来查看一行长台词和一个带头像的角色。
