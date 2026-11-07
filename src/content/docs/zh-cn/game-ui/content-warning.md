---
title: 内容提示
description: 在玩家开始之前提醒他们有敏感内容。
---

{ui.gameUI.contentWarning} 显示在标题画面之前、你的片头图片之后。玩家阅读后点击 {rt.game.continue}。

## 开启它

打开 {ui.contentWarning.enabled}。它默认是关闭的。

## 它写什么

- {ui.contentWarning.topics}：勾选十一个主题中的任意几个：暴力、血腥、死亡、自杀、自残、虐待、恐怖、性内容、毒品、粗俗语言、闪烁的光线。玩家的屏幕会把勾选的主题列在“{tx.contentWarning.contains}”之下，顺序始终如此。
- {ui.contentWarning.message}：显示在列表下方的自由文字，例如一句关心的话，或者指向求助渠道的提示。可以不填。

## 何时出现

在 {ui.contentWarning.when} 下：

- {ui.contentWarning.firstLaunch}（默认）：每位玩家在第一次启动游戏时看到它。它会记在他们的浏览器里。
- {ui.contentWarning.everyLaunch}：每次游戏启动时都会显示。

在编辑器的试玩模式里，每次你按下试玩都会显示。

## 它的外观

在 {ui.gameUIInspector.screen} 下：{ui.gameUIInspector.backgroundColor}（默认是标题画面的）、{ui.gameUIInspector.textColor} 和 {ui.gameUIInspector.buttonStyle}。

## 玩家要做什么

越过它的唯一办法是 {rt.game.continue} 按钮，画面打开时焦点就在这个按钮上。点击别处不会跳过它。用键盘时，**Tab** 会停在这个按钮上，**Enter** 或 **空格** 可以按下它。
