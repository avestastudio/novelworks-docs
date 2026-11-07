---
title: 提示（通知）
description: "类似“你获得了：钥匙”的短消息，以及它们停留多久。"
---

{ui.gameUI.notices} 是类似“你获得了：钥匙”的短消息。物品的提示需要[物品栏功能](/novelworks-docs/zh-cn/features/inventory/)才会出现。功能关闭时，这个页面会说明这一点。

## 你可以修改什么

- {ui.gameUIInspector.position}：上（默认）、中或下。
- {ui.gameUIInspector.backgroundColor}：默认是“{tx.gameUIInspector.sameAsTheDialogueBox}”。
- {ui.gameUIInspector.textColor}：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。
- {ui.gameUIInspector.shownFor}：“你获得了：……”和“你失去了：……”在屏幕上停留多久，1 到 10 秒（默认 2.5）。

## 它们说什么

- “你获得了：钥匙”和“你失去了：钥匙”；
- 对于数量变化超过一个的可叠加物品：“3 × 金币”。

同时变化的所有物品只显示一条提示。同一个方框还会显示小的系统消息，例如“{tx.game.quickSaved}”。
