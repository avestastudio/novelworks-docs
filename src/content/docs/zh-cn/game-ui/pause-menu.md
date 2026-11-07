---
title: 暂停菜单
description: 玩家在游戏中用鼠标右键或 Esc 打开的菜单。
---

**{ui.gameUI.pauseMenu}** 是“用鼠标右键或 Esc 打开”的。在触摸屏上，由游戏的运行环境提供打开它的办法。

## 你可以修改什么

- **{ui.gameUIInspector.buttonStyle}**：默认是“{tx.gameUIInspector.sameAsFontsColors}”。
- **{ui.gameUIInspector.panelColor}**：默认是“{tx.gameUIInspector.sameAsTheDialogueBox}”。
- **{ui.gameUIInspector.textColor}**：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。

## 按钮

这些按钮不能在这里编辑，它们会跟随游戏语言：

- **{rt.game.resume}**；
- **{rt.game.save}**、**{rt.game.load}**、**{rt.game.quickSave}**（F5）和 **{rt.game.quickLoad}**（F9）：只在可以存档时出现。**{rt.game.quickLoad}** 还要等到存在快速存档后才可用；
- 物品栏按钮（标签为“{rt.theme.inventory}”，除非你在[物品栏画面](/novelworks-docs/zh-cn/game-ui/inventory-ui/)里改过），在物品栏功能开启时出现；
- **{rt.game.history}**（H）；
- **{rt.game.options}**；
- 地图按钮（标签为“{rt.theme.map}”，除非你在[地图按钮画面](/novelworks-docs/zh-cn/game-ui/map-button/)里改过），在此刻可以打开地图时出现（始终可以，或在剧情第一次展示地图之后）；
- **{rt.game.backToTitle}**。

面板的标题是“{tx.game.paused}”。
