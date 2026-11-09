---
title: 声音和音乐
description: 导入声音，为片段设置音乐、环境音、音效和配音，并在时间线上查看它们。
---

## 导入你的声音

NovelWorks 可以读取 MP3、OGG 和 WAV 文件。你可以这样导入：

- 使用{ui.leftPanel.assets}标签页里的{ui.assetsTab.import}；
- 把文件拖到编辑器窗口上；
- 在{ui.sound.tab}标签页选择声音的地方，使用{ui.sound.import}。

每个声音都有一个类型：{ui.assetTypes.music}、{ui.assetTypes.sound}或{ui.assetTypes.voice}。{ui.leftPanel.assets}标签页的{ui.assetsTab.sounds}筛选项会显示所有声音。

## 声音标签页

选中一个片段，打开[片段面板](/novelworks-docs/zh-cn/writing/moment-panel/)的{ui.sound.tab}标签页。

![片段的声音标签页，上面有音乐、环境音、音效和这句台词的配音。](/novelworks-docs/screenshots/moment-sound-tab.png)

### 音乐和环境音

{ui.sound.music}和{ui.sound.ambience}会循环播放，两者叠在一起。它们各有三个选项：

| 选项 | 作用 |
|---|---|
| {ui.sound.continue} | 什么都不变。标签页会告诉你正在播放什么。 |
| {ui.sound.chooseMusic} / {ui.sound.chooseAmbience} | 从这里开始播放一个声音，可以设置{ui.sound.volume}和{ui.sound.fade}。 |
| {ui.sound.stop} | 在这里停止声音，可以设置{ui.sound.fade}。 |

{ui.sound.fade}的范围是 0 到 10 秒，也就是旧声音过渡到新声音所需的时间。

{ui.sound.chooseMusic}会列出你的音乐。{ui.sound.chooseAmbience}会列出你的音效和音乐。

### 音效

{ui.sound.effects}在片段到来时播放一次，一直播放到结束。一个片段最多可以有 6 个。它们可用于玩家能看到的片段：对话、选择、探索和结局。

### 配音

{ui.sound.voice}可用于对话片段。玩家进入下一句台词时，配音会停止。

在你选好的声音旁边，{ui.sound.listen}可以让你直接在标签页里听一听。

## 持续多久

音乐和环境音会从一个片段到下一个片段、从一个场景到下一个场景持续播放，直到某个片段更改它们。

声音设置不受{ui.stage.scopeLabel}影响。

## 在时间线上

时间线下方的彩色条带显示每段音乐和环境音持续到哪里。带间隙的条带表示声音来自前面的场景。

![时间线，片段下方有声音条带。](/novelworks-docs/screenshots/sound-timeline.png)

另有一行标出带音效或配音的片段。点击条带或标记，可以打开那个片段的{ui.sound.tab}标签页。

为了算出哪些声音来自前面的场景，编辑器会按照场景列表的顺序。玩家实际走过的路径可能不同。在游戏中，播放的是玩家真正听到的内容。

## 标题画面的音乐

前往{ui.topBar.gameUI}、{ui.gameUI.titleScreen}、{ui.sound.music}，然后点击{ui.sound.chooseMusic}。音乐会在标题画面上循环播放。环境音在那里会停止。

## 在游戏中

- 玩家快进或读取存档时，音效和配音不会播放。音乐和环境音会继续。
- 在自动模式下，游戏会等配音结束。
- 在[选项](/novelworks-docs/zh-cn/game-ui/options/)中，玩家有三个音量：{rt.optionsScreen.musicVolume}、{rt.optionsScreen.soundVolume}和{rt.optionsScreen.voiceVolume}。只有游戏包含声音时才会出现。环境音跟随{rt.optionsScreen.soundVolume}。

## 在网页游戏中

在玩家第一次点击或按键之前，浏览器不允许开始播放声音。被拒绝的声音会在那一刻开始播放。

## 限制

演示版允许 5 个声音文件。请看[演示版与完整版](/novelworks-docs/zh-cn/getting-started/demo-edition/)。
