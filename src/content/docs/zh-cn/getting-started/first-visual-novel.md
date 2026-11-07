---
title: 你的第一部视觉小说
description: 一步一步的教程，从空项目到一个可以试玩的游戏。
---

你将做一个很小的故事：有一个背景，一个有两种表情的角色，几句对话，以及一个带两个结局的选择。你需要三张图片：一张背景，以及同一个角色的两张不同表情的图片（例如开心和惊讶）。

## 1. 创建项目

1. 打开 NovelWorks。在[项目界面](/novelworks-docs/zh-cn/getting-started/projects-screen/)上，点击**{ui.projectHub.newProject}**。
2. 输入名称，检查位置（或点击**{ui.newProjectScreen.browse}**），保持功能不勾选，然后点击**{ui.newProjectScreen.createProject}**。

项目打开后有一个场景“{tx.shared.project.firstScene}”，以及一句空的对话。

## 2. 添加你的图片

1. 在左侧面板里，打开**{ui.leftPanel.assets}**标签页。
2. 点击**{ui.assetsTab.import}**，或者把图片拖到窗口上。
3. 为每张图片选择类型。地点的图片选择**{ui.assetTypes.background}**，你的角色的两张图片选择**{ui.assetTypes.characterSprite}**。

## 3. 创建角色

1. 打开**{ui.leftPanel.characters}**标签页，点击**{ui.charactersTab.newCharacter}**。
2. 在检查器里输入**{ui.characterInspector.characterName}**，并选择一种**{ui.characterInspector.nameColor}**。
3. 在**{ui.characterInspector.expressions}**下，为每张图片点击一次**{ui.characterInspector.addExpression}**（只有类型为“{tx.assetTypes.characterSprite}”的图片可选），给它起个名字（“开心”、“惊讶”），再选择它的图片。带星标的表情就是默认显示的那个。

## 4. 写第一个场景

1. 打开**{ui.leftPanel.scenes}**标签页，选中你的场景。
2. 用游戏画面上方的背景按钮（“{ui.stage.chooseTheBackgroundOfThisMoment}”）选择这个片段的背景。
3. 用按钮**{ui.stageControls.putACharacterOnStage}**把你的角色放到台上，然后把角色拖到你想要的位置。
4. 点击画面上的对话框并输入文字。按 **Enter** 开始下一句：会开始一个新片段，它有**相同的舞台**，因为[角色会留在台上](/novelworks-docs/zh-cn/concepts/stage/)。按 **Shift+Enter** 可以在同一个框里换行。
5. 点击画面上的角色，可以在之后的片段里更换它的表情。

## 5. 添加选择

1. 在时间线里，添加一个**{ui.moments.choice}**片段。
2. 在检查器里，写下问题和两个选项的文字。
3. 为每个选项，在**{ui.branchInspectors.then}**里选择它通向的场景。请先在场景标签页里用**{ui.scenesTab.newScene}**创建这些场景。

你已经可以让选择产生影响了：请看[故事如何分支](/novelworks-docs/zh-cn/concepts/how-stories-branch/)。

## 6. 添加结局

在每个分支的末尾，添加一个**{ui.moments.ending}**片段。它一开始叫“{tx.shared.scenes.goodEnding}”：你想改的话可以改名。结局之后，玩家会回到标题画面。

## 7. 点击试玩

点击顶部栏里的**{ui.topBar.play}**，从标题画面开始试玩。想从中间开始测试，请选中一个片段，再点击**{ui.topBar.playFromHere}**。按 **Esc** 回到编辑器（如果游戏菜单是打开的，**Esc** 会先关闭它）。

## 8. 保存

按 **Cmd+S**（Mac）或 **Ctrl+S**（Windows）。NovelWorks 也会每两分钟自动保存一次。请看[保存、备份与撤销](/novelworks-docs/zh-cn/getting-started/saving-and-undo/)。

## 接下来做什么？

- 用[变量](/novelworks-docs/zh-cn/branching/variables/)和[条件](/novelworks-docs/zh-cn/branching/conditions/)让选择产生影响。
- 在[游戏界面编辑器](/novelworks-docs/zh-cn/game-ui/game-ui-editor/)里改变游戏的外观。
- [导出](/novelworks-docs/zh-cn/publish/web-export/)并分享它。
