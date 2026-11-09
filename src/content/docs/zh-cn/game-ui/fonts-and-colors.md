---
title: 字体和颜色
description: 所有画面共用的字体、文字颜色、主色和按钮样式。
---

{ui.gameUI.fontsColors} 保存所有画面共用的内容。其他每个画面都可以改掉其中一部分。

## 文字

- {ui.gameUIInspector.font}：四种字体，每种都用它自己的样式显示。

| 名称 | 风格 | 字体 | 许可证 |
|---|---|---|---|
| {ui.gameUIInspector.fontClean}（默认） | 现代无衬线体 | Inter | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontClassic} | 衬线体，有文学气息 | Lora | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontRounded} | 柔和、亲切 | Nunito | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontTypewriter} | 打字机 | Courier Prime | SIL Open Font License 1.1 |

  字体文件及其许可证文本会包含在每个导出的游戏里。

- {ui.gameUIInspector.textColor}：整个游戏的文字颜色。默认是白色。写着“{tx.gameUIInspector.sameAsTheTextColor}”的画面会跟随它。

### 语言和字体

{ui.gameUIInspector.fontClean}、{ui.gameUIInspector.fontClassic} 和 {ui.gameUIInspector.fontRounded} 涵盖带重音符号的拉丁字母、西里尔字母和越南语。只有 {ui.gameUIInspector.fontClean} 还涵盖希腊字母。{ui.gameUIInspector.fontTypewriter} 只涵盖拉丁字母（含重音符号）。对于字体里没有的字符，例如中文和日文，游戏会使用玩家系统里的字体（游戏语言为日语时，则优先使用日文系统字体）。

你暂时还不能导入自己的字体。

在玩家选项里打开适合阅读障碍的字体的玩家，会得到一款专用字体，不管你在这里选了什么。

## 角色的登场与退场

{ui.effects.defaultsTitle}：为整个游戏选择一种{ui.effects.defaultEnter}和一种{ui.effects.defaultExit}。只要某个片段没有为该角色单独设置[效果](/novelworks-docs/zh-cn/writing/effects/)，就会使用它们。默认值是“{tx.effects.defaultNone}”。

## 颜色和按钮

- {ui.gameUIInspector.primaryColor}：“按钮、高亮和‘继续’箭头。”它还为标题画面带来光晕。默认是一种粉色。
- {ui.gameUIInspector.buttonStyle}：{ui.gameUIInspector.pill}（完全圆角，默认）、{ui.gameUIInspector.rounded}（柔和的转角）、{ui.gameUIInspector.square}（尖角）或 {ui.gameUIInspector.text}（没有方框，只有文字）。除非某个画面自己选了样式，否则每个菜单和选择都会使用它。

没有全局的背景颜色：背景是按画面分别设置的。

## 预览

这一页的预览会在你的第一个背景上显示对话框。用 {ui.gameUIMode.longTextAvatar} 来检查长台词。

## 重置

这一页上的 {ui.gameUIInspector.resetToDefault} 只会重置这一页的设置。其他画面保留各自的设置。
