---
title: 编辑器导览
description: NovelWorks 窗口的各个区域，以及每个控件的作用。
---

编辑器有一个**顶部栏**，在{ui.topBar.story}模式下还有另外三个区域：**左侧面板**、中间和底部，右侧是**检查器**。

![NovelWorks 编辑器：左侧是场景列表，中间是游戏画面，底部是时间线和谁在台上的图表，右侧是检查器。](/novelworks-docs/screenshots/editor-overview.png)

## 顶部栏

从左到右依次是：

- 在 Windows 上，{ui.appMenuButton.menu}排在最前面，用来打开应用菜单（文件、编辑、视图、帮助）。
- **返回箭头**：回到[项目界面](/novelworks-docs/zh-cn/getting-started/projects-screen/)。如果有未保存的更改，它会先问你要不要保存。
- **项目标题**（或“{tx.topBar.untitledProject}”）。点击它，检查器里会显示项目设置（请看[编辑器与项目设置](/novelworks-docs/zh-cn/getting-started/editor-settings/)）。
- **保存指示**：{ui.topBar.unsavedChanges}、{ui.topBar.savedAuto}或{ui.topBar.saved}。
- **三种模式**：
  - {ui.topBar.story}：场景、片段和角色。你在这里写故事。
  - {ui.topBar.storyMap}：你游戏里的所有场景，以及选择、条件和跳转如何把它们连起来。
  - {ui.topBar.gameUI}：你的游戏看起来是什么样（标题画面、对话框、菜单）。
- {ui.topBar.undo}和{ui.topBar.redo}箭头。
- {ui.topBar.save}。
- {ui.topBar.playFromHere}：从所选片段开始试玩。在地图工作区里它会变成{ui.topBar.testMap}。
- {ui.topBar.play}：从标题画面开始试玩。

窗口较窄时，模式名称和“{tx.leftPanel.playFromHere}”标签会缩成图标。

## 左侧面板

标签页：

- {ui.leftPanel.scenes}：你的场景。拖动可以调整顺序；星标表示起始场景。
- {ui.leftPanel.assets}：你的图片、视频和声音，带有{ui.assetsTab.import}按钮，还可以按类型筛选。
- {ui.leftPanel.characters}：你的角色，以及每个角色有多少个表情。
- {ui.leftPanel.variables}：你的游戏记住的内容。
- {ui.leftPanel.items}：只有在打开物品栏功能时才有。

底部有：{ui.leftPanel.map}（只有在打开地图功能时才有）、{ui.leftPanel.features}（打开游戏可选部分的列表），还有一条每 30 秒更换一次的小提示。你搜索时（**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**），搜索面板会取代这些标签页。

你可以拖动面板之间的边缘来调整大小；双击边缘可以恢复默认宽度。你设置的宽度会记在这台电脑上。

## 中间：游戏画面

这是玩家将看到的游戏，会按比例缩放以适应窗口。画面上方只有这些控件：

- 背景按钮，用来选择片段的背景；
- {ui.stageControls.character}，用来让角色上台；
- 在{ui.moments.exploration}片段上，绘制区域的工具（请看[探索](/novelworks-docs/zh-cn/features/exploration/)）；
- {ui.topBar.visual}和{ui.topBar.script}：把场景显示为带时间线的游戏画面，或者显示为可以像剧本那样输入的文字。

点击游戏画面上的角色：角色上方的小栏可以更换表情和服装。角色的其他设置都在检查器里。请看[布置场景](/novelworks-docs/zh-cn/writing/staging/)。

在较矮的窗口里（高度不到约 780 像素），时间线下方的图表会显示较少的行，给游戏画面腾出空间。

## 底部：时间线

当前场景的片段，以卡片的形式显示，可以重新排序。在时间线顶部，{ui.moments.dialogue}会在所选片段之后添加一句对话，{ui.timeline.addOther}会列出其他种类的片段，每种都附有一句说明。两个图标分别用来复制或删除所选片段。卡片的右键菜单里也有这两个操作。卡片下方有一张图表，显示谁在台上；场景有声音时，还有几行显示每个声音持续到哪里；另有一行显示故事在哪里分支。请看[场景、片段与时间线](/novelworks-docs/zh-cn/concepts/scenes-moments-timeline/)。

## 右侧：检查器

你所选内容的属性：片段、场景、图片、角色、变量、物品、台上的角色。它的标题会随选择而变化。没有选中任何内容时，它显示{ui.inspector.projectSettings}。

片段有四个标签页：

- {ui.inspectorTabs.text}：谁在说话、说了什么（或选择、条件等），片段通向哪里，哪些地方通向它，以及你的笔记。
- {ui.inspectorTabs.image}：更改的应用范围、背景、氛围和台上的角色。
- {ui.inspectorTabs.effects}：镜头和效果。
- {ui.sound.tab}：音乐、环境音、音效和配音。

请看[片段面板](/novelworks-docs/zh-cn/writing/moment-panel/)。当你点击游戏画面上的角色时，检查器会显示{ui.inspector.characterOnStage}：它的位置、大小、朝向、层次和服装。

## 菜单

在 Mac 上，应用菜单里有“关于”、“服务”、“隐藏”和“退出”；在 Windows 上，“退出”在文件菜单里。

- {ui.native.menu.file}：{tx.native.menu.newProject}、{tx.native.menu.openProject}、{tx.native.menu.save}、{tx.native.menu.restoreFromBackup}、{tx.native.menu.importScript}、{tx.native.menu.exportScript}、{ui.native.menu.exportForWeb}、{tx.native.menu.closeProject}。
- {ui.native.menu.edit}：{tx.native.menu.undo}、{tx.native.menu.redo}、{tx.native.menu.findAndReplace}、剪切、拷贝、粘贴、全选、拼写检查语言。
- {ui.menu.view}：{tx.native.menu.theme}、语言、切换全屏。
- {ui.native.role.window}。
- {ui.native.role.help}：文档、{tx.native.menu.replayTutorial}、{tx.native.menu.keyboardShortcuts}、{tx.native.menu.activateNovelWorks}（仅完整版）、{tx.native.menu.reportABug}，以及 Windows 上的“关于”。

完整的快捷键列表请看[键盘快捷键](/novelworks-docs/zh-cn/reference/keyboard-shortcuts/)。
