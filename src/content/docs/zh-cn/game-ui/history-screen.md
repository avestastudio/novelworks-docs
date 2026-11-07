---
title: 历史记录画面
description: 玩家已读台词的列表，以及如何修改它的外观。
---

{ui.gameUI.history} 画面会显示“他们读过的台词（说话者的名字用各自的颜色）和他们做过的选择”。

## 你可以修改什么

在 {ui.gameUIInspector.screen} 下：

- {ui.gameUIInspector.backgroundColor}：默认是标题画面的背景颜色，略带透明，所以剧情会隐约透出来。
- {ui.gameUIInspector.textColor}：默认是“{tx.gameUIInspector.sameAsTheTextColor}”。
- {ui.gameUIInspector.buttonStyle}：“返回”按钮的样式。

## 玩家如何使用

- 他们可以用**鼠标滚轮（向上滚动）**、**H** 键、[暂停菜单](/novelworks-docs/zh-cn/game-ui/pause-menu/)里的 {rt.game.history} 按钮，或者（如果你显示了它）[快捷菜单](/novelworks-docs/zh-cn/game-ui/quick-menu/)里的“历史记录”按钮打开它。
- 他们用 **Esc**、**H** 或 {rt.historyScreen.back} 按钮关闭它。在触摸屏上，拖动来滚动，点按“返回”。
- 只有在剧情显示在屏幕上时才能使用：在标题画面、暂停时，或者另一个画面打开时都不行。
- 它会列出对话台词、选择的问题、探索区域显示的台词，以及玩家选中的选项（“你选择了：……”）。它保存最近的 **200** 条记录，并随每个存档一起保存。当还没有内容时，它会显示“{tx.historyScreen.nothingHasBeenSaidYet}”

另请参阅[历史记录](/novelworks-docs/zh-cn/player/history/)。
