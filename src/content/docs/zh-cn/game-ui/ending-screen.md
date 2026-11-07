---
title: 结束画面
description: 故事讲完时显示的画面，以及它和“结局”片段有什么不同。
---

**{ui.gameUI.theEnd}** 是“故事结束时显示”的：当游戏走到某个场景的末尾，后面没有任何内容时就会出现。它**不是**[结局片段](/novelworks-docs/zh-cn/branching/endings/)的画面，后者会显示结局的名称。

## 你可以修改什么

- **{ui.gameUIInspector.text}**：用大号字显示的标题。默认是“完”。如果你把它清空，就不会显示标题。
- **{ui.gameUIInspector.backgroundColor}**：一种纯色，默认是黑色。没有图片选项。
- **{ui.gameUIInspector.textColor}**：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。

在标题下方，游戏会显示“{tx.game.returnToTitle}”。这行文字不能修改，点击一下就会把玩家带回标题画面。
