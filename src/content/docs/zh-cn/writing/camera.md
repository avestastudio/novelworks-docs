---
title: 镜头
description: 选择玩家看到的内容，在一个片段里串联多个镜头，并添加景深、模糊和电影效果。
---

镜头决定玩家看到场景的哪一部分：整个画面或特写。选中一个片段，打开[片段面板](/novelworks-docs/zh-cn/writing/moment-panel/)的{ui.inspectorTabs.effects}标签页，然后点击{ui.camera.open}。

![镜头窗口：带取景框的场景，顶部的预设运镜，侧边的设置，以及底部的镜头。](/novelworks-docs/screenshots/camera-window.png)

在编辑器的游戏画面上，你看到的始终是整个场景。{ui.inspectorTabs.effects}标签页里的小预览，显示的才是玩家看到的内容。

## 镜头列表

一个片段有一个或多个镜头，显示在窗口底部的一行里。每个镜头都是场景上的一个取景框，播放时会从一个镜头移动到下一个。

- 在场景上**拖动**取景框，选择玩家看到的内容。
- {ui.camera.addShot}（加号）可以添加一个镜头，最多 6 个。
- {ui.camera.removeShot}会删除选中的镜头。
- {ui.camera.play}会在窗口里播放这些镜头。{ui.camera.stop}可以结束播放。

## 预设运镜

顶部的按钮会替你写好镜头。它们会替换你原有的镜头，并保留整个片段的设置。向前推近的运镜会对准台上的第一个角色；如果台上没有人，就对准画面中央。

| 运镜 | 作用 |
|---|---|
| {ui.camera.preset.fixed} | 整个画面，没有移动。 |
| {ui.camera.preset.slowZoom} | 从整个画面开始，慢慢推近。 |
| {ui.camera.preset.travelling} | 以匀速滑过场景。 |
| {ui.camera.preset.reveal} | 从近处开始，然后拉回到整个画面。 |
| {ui.camera.preset.focus} | 稍微推近，同时背景变模糊。 |
| {ui.camera.preset.tension} | 从整个画面到倾斜的特写，并带一些模糊。 |

## 对准角色

{ui.camera.frameOn}会显示台上的角色。点击其中一个，取景框就会对准他的脸。取景框会停在原处：如果角色之后移动，它不会跟随。

## 单个镜头的设置

| 设置 | 作用 |
|---|---|
| {ui.camera.zoom} | 从 100 %（整个画面）到 400 %。 |
| {ui.camera.arrive} | 镜头如何到达这里：{ui.camera.smooth}、{ui.camera.steady}、{ui.camera.quick}或{ui.camera.cut}。第一个镜头的这项设置是{ui.camera.arriveFirst}。 |
| {ui.camera.seconds} | 镜头移动到这里需要多久，从 0.2 到 8 秒。 |
| {ui.camera.hold} | 立即到达的镜头会改为显示这一项：它在下一个镜头之前停留多久。 |
| {ui.camera.blur} | 让背景变模糊，角色不受影响。 |
| {ui.camera.tilt} | 让镜头倾斜，每个方向最多 12 度。 |

在场景的第一个片段上，第一个镜头没有可以衔接的来源。它会显示{ui.camera.start}。

## 整个片段的设置

在{ui.camera.wholeMoment}下：

- {ui.camera.bars}
- {ui.camera.vignette}
- {ui.camera.grain}
- {ui.camera.fadeIn}
- {ui.camera.handheld}
- {ui.camera.depth}。一开始是 100 %，你可以把它降到 0。

{ui.camera.foreground}会把一张图片放在角色前面，比如树枝或窗玻璃。它会覆盖整个画面，所以请使用带透明区域的图片。有景深时，它比角色移动得更多。点击会穿过它。

{ui.camera.reset}会移除这个片段的镜头：所有镜头和整个片段的设置。前景会保留。

## 持续多久

镜头和前景都像背景一样，从一个片段延续到下一个片段，直到某个片段更改它们。{ui.stage.scopeLabel}在窗口底部：请看[舞台](/novelworks-docs/zh-cn/concepts/stage/)。

## 在游戏中

- 文字打出的同时，镜头会一个接一个地播放。
- 第一次点击会结束移动并显示整句台词。下一次点击才会继续。
- 后面的片段会保持最后一个镜头，不会再次播放这些镜头。
- 同一场景的两个片段之间，镜头会滑到新的位置。新场景会直接从第一个镜头开始。
- 读取存档时，会从最后一个镜头开始。
- 对话框和菜单永远不会移动。

如果玩家在系统中要求减少动态效果，游戏会直接跳到最后一个镜头，没有晃动，也没有淡入。

## 限制

- 在探索片段上，{ui.camera.tilt}和{ui.camera.depth}会被忽略，这样区域才能准确对应它们覆盖的内容。
- 缩放会放大图片：小尺寸的背景会变模糊。
- 剧本模式无法写出镜头。你编辑文字时，它会保留镜头。
- 演示版每个片段允许 2 个镜头。请看[演示版与完整版](/novelworks-docs/zh-cn/getting-started/demo-edition/)。
