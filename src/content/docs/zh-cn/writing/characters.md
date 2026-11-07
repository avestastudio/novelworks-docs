---
title: "角色与表情"
description: "创建角色，给他们设置表情和头像，并了解删除角色会发生什么。"
---

**角色**是你故事里的人物。每个角色都有名字、姓名颜色和**表情**：每种心情一张图片。角色都在{ui.leftPanel.characters}标签页里。

## 创建角色

点击{ui.charactersTab.newCharacter}。角色会命名为“角色 N”，N 是你已有的角色数量加一（两个角色可能会重名，所以请给它们改名），并从八种颜色中获得一个姓名颜色。选中它，就可以在检查器里编辑。

你也可以在导入图片时创建角色：见[素材](/novelworks-docs/zh-cn/writing/assets/)。

## 名字和颜色

- {ui.characterInspector.name}：在检查器里输入（列表里不能直接重命名，但右键菜单里的{ui.contextMenus.rename}会带你到这个输入框）。
- {ui.characterInspector.nameColor}：从八种预设颜色里选一种，或者用{ui.characterInspector.pickAnyColor}选任意颜色。它会给对话框和剧本模式里的名字上色。

## 表情

在{ui.characterInspector.expressions}下，为每种心情（开心、难过、生气……）添加一张图片。

- 点击{ui.characterInspector.addExpression}，选择一张类型为“{tx.assetTypes.characterSprite}”的图片，或者从选择器里导入一张新图片。表情会使用图片的名称。
- 如果愿意，可以在{ui.characterInspector.expressionName}里输入不同的名称。
- 点击星星来{ui.characterInspector.makeThisTheDefaultExpression}。你添加的第一个表情就是默认表情。当角色登场时没有指定表情，就会显示它。
- 点击图片来{ui.characterInspector.changeImage}。旧图片仍然保留在你的素材里。
- 点击 X 来移除这个表情。如果有片段用到了它，NovelWorks 会告诉你它们将改用默认表情。如果你移除的是默认表情，剩下的第一个表情会成为默认表情。

## 头像

头像是显示在对话框里、名字旁边的小肖像。在{ui.characterInspector.avatar}里选择：

- {ui.characterInspector.none}：对话框里没有肖像；
- {ui.characterInspector.fixed}：这个角色每次说话都用同一张肖像；
- {ui.characterInspector.perExpression}：每个表情一张肖像。没有设置肖像的表情会使用默认头像。

头像可以是类型为“{tx.assetTypes.avatar}”“{tx.assetTypes.characterSprite}”或“UI”的图片。

## 让角色登场

见[布置场景](/novelworks-docs/zh-cn/writing/staging/)。简单说：在片段里，用{ui.momentInspector.onStage}下的{ui.momentInspector.add}（或游戏画面上方的{ui.stageControls.character}按钮），然后把角色拖到你想要的位置。

## 删除角色

使用检查器里的{ui.characterInspector.deleteCharacter}，或右键菜单里的{ui.contextMenus.delete}。如果角色没有被使用，NovelWorks 会把它和它的表情一起移除；图片仍然保留在你的素材里。如果它出现在你的故事里，NovelWorks 会列出在哪里，并警告它将**离开这些片段，它的台词会变成旁白**。可以先用{ui.contextMenus.showUsages}查看角色在哪里被使用。

你可以撤销删除。
