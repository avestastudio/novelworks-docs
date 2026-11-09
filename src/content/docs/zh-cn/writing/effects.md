---
title: 效果
description: 为片段添加登场、退场、反应、画面效果、粒子和转场。
---

效果在片段到来时发生。选中一个片段，打开[片段面板](/novelworks-docs/zh-cn/writing/moment-panel/)的{ui.inspectorTabs.effects}标签页，然后点击{ui.effects.open}。

![效果窗口：顶部的六个类别、游戏画面、效果方块，以及这个片段的效果列表。](/novelworks-docs/screenshots/effects-library.png)

## 六个类别

每个类别有五种效果。

| 类别 | 效果 |
|---|---|
| {ui.effects.category.enter} | {ui.effects.name.fade}、{ui.effects.name.slideLeft}、{ui.effects.name.slideRight}、{ui.effects.name.rise}、{ui.effects.name.zoomIn} |
| {ui.effects.category.exit} | {ui.effects.name.fade}、{ui.effects.name.slideLeft}、{ui.effects.name.slideRight}、{ui.effects.name.fall}、{ui.effects.name.zoomOut} |
| {ui.effects.category.reaction} | {ui.effects.name.jump}、{ui.effects.name.shake}、{ui.effects.name.nod}、{ui.effects.name.recoil}、{ui.effects.name.surprise} |
| {ui.effects.category.screen} | {ui.effects.name.flash}、{ui.effects.name.lightning}、{ui.effects.name.quake}、{ui.effects.name.blackout}、{ui.effects.name.pulse} |
| {ui.effects.category.particles} | {ui.effects.particle.rain}、{ui.effects.particle.snow}、{ui.effects.particle.petals}、{ui.effects.particle.leaves}、{ui.effects.particle.fireflies} |
| {ui.effects.category.transition} | {ui.effects.name.fade}、{ui.effects.name.black}、{ui.effects.name.wipe}、{ui.effects.name.iris}、{ui.effects.name.curtain} |

## 添加效果

1. 选择一个类别。
2. 点击一种效果。它会在窗口的画面上播放，所以你想试多少种都可以。
3. 对于{ui.effects.category.enter}、{ui.effects.category.exit}和{ui.effects.category.reaction}，请选择角色。
4. 调整设置。
5. 点击{ui.effects.add}。

| 设置 | 适用范围 | 取值范围 |
|---|---|---|
| {ui.camera.seconds} | 除粒子外的所有效果 | 0.2 到 3 秒 |
| {ui.effects.intensity} | 反应、画面效果和粒子 | 10 到 100 % |
| {ui.effects.speed} | 粒子 | 20 到 200 % |

你添加的效果会列在{ui.effects.ofThisMoment}下。每一项上的叉号可以移除它。一个片段最多可以有 12 个效果，粒子不计算在内。

{ui.effects.playAll}会在窗口里播放整个列表。

## 播放顺序

效果在片段到来时播放一次，按列表的顺序一个接一个地播放。

无论转场在列表的什么位置，它总是最先播放。如果你给一个片段添加了多个转场，只有第一个会播放。

## 退场

如果你为台上的角色选择了退场效果，这个角色也会在这个片段离开舞台。退场效果只对真正在这里离场的角色播放。

## 粒子

粒子和其他效果不同。它们像氛围一样，从一个片段延续到下一个片段，直到你让它们停止。{ui.stage.scopeLabel}照常起作用：请看[舞台](/novelworks-docs/zh-cn/concepts/stage/)。

一个片段一次只显示一种粒子。要让它们停止，请点击列表中粒子上的叉号（{ui.effects.stopParticles}）。

## 默认的登场和退场

你可以为整个游戏的所有角色设置同样的登场和退场方式。前往{ui.topBar.gameUI}、{ui.gameUI.fontsColors}、{ui.effects.defaultsTitle}，然后选择一种{ui.effects.defaultEnter}和一种{ui.effects.defaultExit}。

只要某个片段没有为该角色单独设置效果，就会使用它们。新游戏的设置是{ui.effects.defaultNone}。

## 在游戏中

- 第一次点击会立即结束效果。下一次点击才会继续。粒子会继续飘落。
- 玩家快进或读取存档时，效果不会播放。
- 如果玩家在系统中要求减少动态效果，效果不会播放，粒子也会保持静止。

剧本模式无法写出效果。你编辑文字时，它会保留效果。

演示版包含部分效果。其他效果可以在窗口里试用，但不能添加。请看[演示版与完整版](/novelworks-docs/zh-cn/getting-started/demo-edition/)。
