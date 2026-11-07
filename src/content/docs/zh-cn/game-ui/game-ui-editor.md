---
title: 游戏界面概览
description: 逐个画面地修改游戏的外观，并实时预览。
---

**{ui.topBar.gameUI}** 模式用来修改游戏的外观：字体和颜色、标题画面、对话框、选择按钮、菜单和小提示。在顶栏切换到它，或按 **Cmd+5** / **Ctrl+5**。

![游戏界面模式：画面列表、实时预览和对话框的设置。](/novelworks-docs/screenshots/game-ui-dialogue.png)

## 窗口的三个部分

- **左侧：画面列表。** 点击其中一项开始修改。
- **中间：预览。** 这就是真正的游戏，按你的设置绘制，用一小段示例来展示（你的第一个背景和第一个角色，或一个示例角色）。预览不能操作：按 **{ui.topBar.play}** 才能用这些设置试玩游戏。预览下方有一行字这样提示。
- **右侧：画面的设置。** 每个画面的末尾都有一个 **{ui.gameUIInspector.resetToDefault}** 按钮。

## 各个画面

| 画面 | 它是什么 | 页面 |
|---|---|---|
| {ui.gameUI.fontsColors} | 所有画面共用的字体和颜色。 | [字体和颜色](/novelworks-docs/zh-cn/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | 标题画面之前显示你的工作室标志或其他图片。 | [片头](/novelworks-docs/zh-cn/game-ui/intro/) |
| {ui.gameUI.contentWarning} | 在标题画面之前提醒玩家有敏感内容。 | [内容提示](/novelworks-docs/zh-cn/game-ui/content-warning/) |
| {ui.gameUI.titleScreen} | 游戏的第一个画面。 | [标题画面](/novelworks-docs/zh-cn/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | 显示名字和台词的地方。 | [对话框](/novelworks-docs/zh-cn/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | 选择的按钮。 | [选择](/novelworks-docs/zh-cn/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | 用鼠标右键或 Esc 打开。 | [暂停菜单](/novelworks-docs/zh-cn/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | 存档和读档画面。 | [存档和读档画面](/novelworks-docs/zh-cn/game-ui/save-load-screen/) |
| {ui.gameUI.history} | 已读台词的列表。 | [历史记录画面](/novelworks-docs/zh-cn/game-ui/history-screen/) |
| {ui.gameUI.options} | 玩家在这里选择文字大小、速度、字体和对比度。 | [玩家选项](/novelworks-docs/zh-cn/game-ui/options/) |
| {ui.quickMenu.title} | 叠在剧情之上的阅读控制。 | [快捷菜单](/novelworks-docs/zh-cn/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | 故事结束时显示。 | [结束画面](/novelworks-docs/zh-cn/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | 它的按钮和物品面板（物品栏功能）。 | [物品栏画面](/novelworks-docs/zh-cn/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | 打开地图的按钮（地图功能）。 | [地图按钮](/novelworks-docs/zh-cn/game-ui/map-button/) |
| {ui.gameUI.notices} | 类似“你获得了：钥匙”的短消息。 | [提示](/novelworks-docs/zh-cn/game-ui/notifications/) |

## 长文本和头像

对于字体和颜色、对话框、选择和暂停菜单，预览上方的 **{ui.gameUIMode.longTextAvatar}** 按钮会显示一行长台词和一个带头像的角色，方便你检查所有内容是否放得下。

## 各处通用的设置

- **颜色。** 点击色块会打开取色器，输入框可以填写颜色代码（`#rgb` 或 `#rrggbb`）。当颜色显示为“与……相同”（例如“{tx.gameUIInspector.sameAsTheTextColor}”）时，不会保存任何值：它会跟随另一种颜色。一旦你选了颜色，旁边会出现一个小的圆形箭头，点击它就能回到“与……相同”。
- **按钮样式。** 一个下拉菜单，包含 **{ui.gameUIInspector.sameAsFontsColors}**、**{ui.gameUIInspector.pill}**、**{ui.gameUIInspector.rounded}**、**{ui.gameUIInspector.square}** 和 **{ui.gameUIInspector.text}**（没有方框，只有文字）。“{tx.gameUIInspector.sameAsFontsColors}”会跟随全局样式。
- **滑块** 会连同单位一起显示数值，通常是 %。百分比是相对于屏幕的，所以你的设计在任何尺寸下都不会走样。
- **图片。** 图片栏会显示缩略图，旁边有 **{ui.gameUIInspector.choose_c7f937}** 或 **{ui.gameUIInspector.change}**，还有一个 X 用来移除图片。通常你可以选用任何一张素材，也可以当场导入新图片。（标题画面的背景只能选背景、CG 和界面图片。）如果图片被删除，游戏会退回到纯色或文字。
- **{ui.gameUIInspector.resetToDefault}。** 画面底部的这个按钮会先请你确认，然后只把**这个画面**恢复成新游戏的样子。其他画面不会改变。

## 撤销

游戏界面里的每个更改都可以撤销。在一个输入框里打字、拖动一次滑块或选择一次颜色，都算一步。

## 保存的内容

外观会和项目的其他内容一起保存在你的项目里。玩家自己的选择（文字大小、适合阅读障碍的字体、高对比度）会覆盖你的设计，而且只对他们自己生效。请参阅[选项和无障碍](/novelworks-docs/zh-cn/player/options-and-accessibility/)。
