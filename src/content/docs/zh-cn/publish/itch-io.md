---
title: 在 itch.io 上发布
description: 把导出的游戏上传到 itch.io，让大家可以在浏览器里玩。
---

[网页导出](/novelworks-docs/zh-cn/publish/web-export/)会生成一个 `.zip`，`index.html` 就在它的根目录，这正是 itch.io 对浏览器游戏要求的结构。NovelWorks 本身不会上传任何东西：你需要在 itch.io 网站上自己操作。

:::note
这些步骤描述的是 itch.io 自己的网站，不是 NovelWorks，而且 itch.io 可能会改动它的页面。如果有出入，请以 itch.io 自己的帮助为准。
:::

## 上传

1. 在 itch.io 上，创建一个新项目（或打开一个已有的项目）。
2. 项目类型选择{ui.exportDialog.hTML}（可在浏览器中玩的游戏）。
3. 上传 NovelWorks 生成的 `.zip`，并把它标记为**将在浏览器中玩**的文件。
4. 把视口设置为导出完成时 NovelWorks 显示的**推荐游戏尺寸**（它就是你项目的分辨率）。全屏按钮之类的选项由你决定：游戏本身已经有自己的全屏按钮。
5. 保存并打开页面，在电脑和手机上检查游戏。

## 须知

- 玩家的存档保存在他们的浏览器里，对应你游戏的网址。如果你更新游戏时网址不变，存档就会保留（这取决于 itch.io，本文档无法保证）。
- 不要只上传 `index.html`：导出的每一个文件都是必需的。
- 你的游戏在一个框架里运行。如果你给页面设置的尺寸比推荐的游戏尺寸大，游戏会缩放以适应，四周留有黑边。
- NovelWorks 的游戏总是以简短的“Made with NovelWorks”画面开头。

## 发布前先测试

使用导出结束时的{ui.exportDialog.testInBrowser}，或者打开 `index.html` 来玩解压后的文件夹。
