---
title: "素材"
description: "导入图片，选择它们的类型，并在素材标签页里管理它们。"
---

你游戏里的每一张图片都是项目里的一个**素材**：背景、角色图片、插画、物体，以及游戏自身界面用的图片。它们都在{ui.leftPanel.assets}标签页里，并被复制到你项目的 `assets` 文件夹中。

## 格式和限制

- 只支持 **PNG、JPG 和 WebP**（也支持 `.jpeg`）。
- 每个文件最大 **50 MB**。其他文件会被跳过，NovelWorks 会列出它们。
- 不会缩放或转换任何东西。比游戏画面小的背景会被拉伸，可能会变模糊，导入窗口会提醒你。

## 导入图片

有三种方式：

- 在素材标签页里点击{ui.assetsTab.import}（可以一次选择多个文件）。
- **把图片拖到编辑器窗口上**。会出现一层提示：“{tx.dropOverlay.dropYourImagesHere}”。拖放之后，素材标签页会打开。
- 使用选择器里的导入快捷方式，例如在选择背景或表情的时候。

然后会弹出一个窗口，请你检查每张图片的{ui.importDialog.name}和{ui.importDialog.type}。NovelWorks 会猜测类型来帮你省时间：带透明部分的图片会被猜为立绘，横向或正方形的图片会被猜为背景，竖向的图片会被猜为立绘。每一个猜测你都可以更改。{ui.dialogs.cancel}不会复制任何东西。

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

背景选择器会提供背景和 CG。

## 素材标签页

标签按类型筛选列表，并显示每种类型的图片数量。选中一张图片，就能在检查器里看到：

- {ui.assetInspector.name}：在 NovelWorks 里显示的名称。更改它不会重命名文件；
- {ui.assetInspector.type}：你可以随时更改；
- {ui.assetInspector.usedIn}：图片在哪里被使用，或者“{tx.assetInspector.notUsedYet}”；
- {ui.assetInspector.file}：它在 `assets` 文件夹里的文件。

右键点击图片，可以使用{ui.contextMenus.rename}、{ui.contextMenus.showUsages}和{ui.contextMenus.delete}。

文件名会被清理（文件名不能包含的字符会被去掉），如果名称已被占用，新文件会变成 `name-2.png`、`name-3.png`……已有的文件绝不会被覆盖。

## 替换图片

图片本身不能原地替换。对于角色，点击某个表情的图片并选择{ui.characterInspector.changeImage}：它会导入或选择另一张图片，并让表情指向它。旧图片仍然留在素材标签页里。

## 删除图片

点击{ui.assetInspector.deleteImage}。NovelWorks 会先询问你。如果图片正在被使用，它会列出在哪里，并警告这些地方将没有图片。文件不会立刻被删除：保存时，它会被移到 `backups/deleted-assets`，如果你撤销或恢复备份，它就会回来。见[保存、备份和撤销](/novelworks-docs/zh-cn/getting-started/saving-and-undo/)。
