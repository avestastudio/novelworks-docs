---
title: "素材"
description: "导入图片、视频和声音，选择它们的类型，并在素材标签页里管理它们。"
---

你游戏里的每一张图片都是项目里的一个**素材**：背景、角色图片、插画、物体，以及游戏自身界面用的图片。它们都在{ui.leftPanel.assets}标签页里，并被复制到你项目的 `assets` 文件夹中。[动态背景](/novelworks-docs/zh-cn/writing/ambience-and-animated-backgrounds/)用的视频和[声音](/novelworks-docs/zh-cn/writing/sound/)也放在那里。

## 格式和限制

- 图片：**PNG、JPG、WebP 和 GIF**（也支持 `.jpeg`）。GIF 和动态 WebP 文件在游戏里会动。
- 视频：**MP4 和 WebM**，可以在素材标签页里导入、拖到窗口上，或者在选择片段背景的地方导入。
- 声音：**MP3、OGG 和 WAV**。
- 每张图片最大 **50 MB**。其他文件会被跳过，NovelWorks 会列出它们。视频和声音绝不会因为大小而被拒绝，但视频超过 40 MB 时，会有一条消息提醒你，带视频的网页游戏加载时间更长。
- 不会缩放或转换任何东西。比游戏画面小的背景会被拉伸，可能会变模糊，导入窗口会提醒你。

## 导入图片

有三种方式：

- 在素材标签页里点击{ui.assetsTab.import}（可以一次选择多个文件，图片、视频或声音都可以）。
- **把文件拖到编辑器窗口上**。会出现一层提示：“{tx.dropOverlay.dropYourImagesHere}”。拖放之后，素材标签页会打开。
- 使用选择器里的导入快捷方式，例如在选择背景或表情的时候，或者使用[声音标签页](/novelworks-docs/zh-cn/writing/sound/)里的导入按钮。

然后会弹出一个窗口，请你检查每张图片的{ui.importDialog.name}和{ui.importDialog.type}。NovelWorks 会猜测类型来帮你省时间：带透明部分的图片会被猜为立绘，横向或正方形的图片会被猜为背景，竖向的图片会被猜为立绘。视频一开始是背景类型，只能是背景或 CG。小于 1 MB 的声音会被猜为音效，更大的会被猜为音乐。每一个猜测你都可以更改。{ui.dialogs.cancel}不会复制任何东西。

对于角色立绘，你还可以选择{ui.importDialog.addToCharacter}：一个已有的角色，或者{ui.importDialog.newCharacter}，以及{ui.importDialog.expressionName}。如果文件名类似 `mia_happy`，而且有一个角色叫 Mia，NovelWorks 会自动建议 Mia 和“happy”。如果一次导入多张图片，你可以一次性为它们全部设置类型或角色。

## 图片类型

| 类型 | 用途 |
|---|---|
| {ui.assetTypes.background} | 铺满画面，位于角色后面。 |
| {ui.assetTypes.characterSprite} | 角色的图片，用于表情。 |
| {ui.assetTypes.cG} | 用于特殊事件的全屏插画。 |
| {ui.assetTypes.prop} | 物体（钥匙、信件……）的图片，放在探索片段的舞台上。 |
| {ui.assetTypes.uI} | 用于游戏自身界面的图片：对话框、标志、按钮。 |
| {ui.assetTypes.avatar} | 显示在说话者名字旁边的小肖像。 |
| {ui.assetTypes.clothing} | {tx.assetTypes.clothingHelp} 请看[服装](/novelworks-docs/zh-cn/writing/outfits/)。 |
| {ui.assetTypes.music} | {tx.assetTypes.musicHelp} |
| {ui.assetTypes.sound} | {tx.assetTypes.soundHelp} |
| {ui.assetTypes.voice} | {tx.assetTypes.voiceHelp} |

背景选择器会提供背景和 CG。表情选择器只提供角色立绘，绝不提供服饰。

## 素材标签页

标签按类型筛选列表，并显示每种类型的文件数量。所有声音都在{ui.assetsTab.sounds}下。选中一个文件，就能在检查器里看到（声音带有一个小播放器）：

- {ui.assetInspector.name}：在 NovelWorks 里显示的名称。更改它不会重命名文件；
- {ui.assetInspector.type}：你可以随时更改；
- {ui.assetInspector.usedIn}：图片在哪里被使用，或者“{tx.assetInspector.notUsedYet}”；
- {ui.assetInspector.file}：它在 `assets` 文件夹里的文件。

右键点击图片，可以使用{ui.contextMenus.rename}、{ui.contextMenus.showUsages}和{ui.contextMenus.delete}。

文件名会被清理（文件名不能包含的字符会被去掉），如果名称已被占用，新文件会变成 `name-2.png`、`name-3.png`……已有的文件绝不会被覆盖。

## 替换图片

图片本身不能原地替换。对于角色，点击某个表情的图片并选择{ui.characterInspector.changeImage}：它会导入或选择另一张图片，并让表情指向它。旧图片仍然留在素材标签页里。

## 删除图片

点击{ui.assetInspector.deleteImage}（声音则是{ui.assetInspector.deleteSound}）。NovelWorks 会先询问你。如果图片正在被使用，它会列出在哪里，并警告这些地方将没有图片。文件不会立刻被删除：保存时，它会被移到 `backups/deleted-assets`，如果你撤销或恢复备份，它就会回来。见[保存、备份与撤销](/novelworks-docs/zh-cn/getting-started/saving-and-undo/)。
