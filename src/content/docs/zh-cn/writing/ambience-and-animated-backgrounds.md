---
title: 氛围与动态背景
description: 一键为整个场景染上色调，并把 GIF 或循环视频用作背景。
---

## 氛围

氛围是覆盖整个画面的一层色调，用来营造情绪或表现一天中的时段。选中一个片段，打开[片段面板](/novelworks-docs/zh-cn/writing/moment-panel/)的{ui.inspectorTabs.image}标签页。

{ui.ambience.title}部分为每种效果提供一个方块，每个方块都用你自己的背景来展示：

- {ui.ambience.none}
- {ui.ambience.night}
- {ui.ambience.sunset}
- {ui.ambience.sepia}
- {ui.ambience.blackAndWhite}
- {ui.ambience.memory}

选好一种效果后，会出现两个设置：

- {ui.ambience.intensity}，从 0 到 100 %。一开始是 100 %。
- {ui.ambience.characters}，一开始是勾选的。取消勾选后，只为场景景物染色。

### 持续多久

氛围和背景一样，会从一个片段延续到下一个片段，直到某个片段更改它。{ui.stage.scopeLabel}照常起作用，所以你可以用{ui.stage.scopeOnlyHere}只影响一个片段。请看[舞台](/novelworks-docs/zh-cn/concepts/stage/)。

剧本模式无法写出氛围。你编辑文字时，它会保留片段的氛围，新片段则延续前一个片段的氛围。

## 动态背景

### GIF 和动态 WebP

它们的导入方式和其他图片一样。

### MP4 和 WebM 视频

视频可以作为片段的背景。它会循环播放，没有声音。你可以这样导入视频：

- 从片段的背景选择器导入；
- 使用{ui.leftPanel.assets}标签页里的{ui.assetsTab.import}；
- 把文件拖到编辑器窗口上。

视频的类型是{ui.assetTypes.background}或{ui.assetTypes.cG}。在列表里，它带有一个小小的播放标记，鼠标移到上面时会播放。

在编辑器里，视频停留在第一帧。在{ui.topBar.play}和你导出的游戏中，它会循环播放，暂停菜单打开时则会停止。

### 大小

视频绝不会因为大小而被拒绝。一次导入超过 40 MB 时，会有一条消息提醒你，带视频的网页游戏加载时间更长。视频在导出的 .zip 里不会再次压缩。

## 限制

- 视频只能作为片段的背景。角色、物品和游戏自身的界面需要使用图片。
- 超过 50 MB 的图片（包括 GIF）会被拒绝。
