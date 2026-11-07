---
title: 网页导出
description: 把你的游戏变成一个文件夹和一个 .zip，可在任何浏览器中玩，电脑和手机都行。
---

选择**{ui.native.menu.file} → {ui.native.menu.exportForWeb}**（**Cmd+E** / **Ctrl+E**）。NovelWorks 会生成一个可在任何网页浏览器中玩的游戏版本，电脑和手机都能玩：**一个文件夹，和一个 .zip**，可以直接分享或上传。这个命令需要先打开一个项目，试玩期间不可用。

在**演示版**中，导出仅限于 5 个场景或更少的游戏：见[免费演示版](/novelworks-docs/zh-cn/getting-started/demo-edition/)。在完整版中，每次导出时 NovelWorks 都会要求你[激活](/novelworks-docs/zh-cn/getting-started/install-and-activate/)，直到你激活为止。

## 步骤

1. **查看警告**。如果 NovelWorks 发现有需要检查的地方，会把它们列出来：“导出前有 N 件事需要检查。游戏仍可正常游玩，但玩家可能会注意到。”每一行都会说明位置（“公园，第 3 个片段 — …”）。这时按钮会变成{ui.exportDialog.exportAnyway}。见[问题](/novelworks-docs/zh-cn/testing/problems/)。
2. **选择保存位置**。{ui.exportDialog.saveTo}会显示一个文件夹。NovelWorks 会记住你为这个项目最后一次使用的文件夹，否则会建议放在包含你项目的文件夹里。{ui.exportDialog.change}可以选择另一个文件夹。
3. 点击{ui.exportDialog.export}。在完成之前，按钮上显示“{tx.exportDialog.exporting}”。
4. 当它显示“{tx.exportDialog.yourWebGameIsReady}”时，会给出 .zip 的名称（用于分享或上传；旁边的文件夹里是同一个游戏，只是没有压缩）和三个按钮：
   - {ui.exportDialog.showInFinder}，在你的文件管理器中显示该文件（它的名称在所有电脑上都写着“Finder”）；
   - {ui.exportDialog.testInBrowser}，在你的默认浏览器中，通过本地地址玩导出的游戏；
   - {ui.exportDialog.done}。

![导出完成时显示的窗口。](/novelworks-docs/screenshots/export-done.png)

如果项目的素材文件夹里找不到某些图片，窗口会把它们列出来（“有 N 张图片在项目的素材文件夹中找不到，因此未能包含…”）。导出仍然会成功。

窗口还会告诉你**推荐的游戏尺寸**（你项目的分辨率），并提醒你在电脑和手机浏览器中检查游戏。

## 你会得到什么

NovelWorks 会在你选择的文件夹中创建：

- 一个以你的游戏命名、以 `-web` 结尾的文件夹（例如 `The-Rainy-Day-web`），以及一个同名的 `.zip`。重音符号会被去掉，其他任何字符都会被替换为 `-`。如果标题中没有拉丁字母或数字（例如中文、俄文或日文的标题），就会变成 `Game-web`；
- 里面有：`index.html`、`project.js`（你游戏的数据）、`game.js`（播放器）、一个 `assets` 文件夹（**只放你的游戏用到的图片**），以及一个 `fonts` 文件夹（放字体和它们的许可文件）。

图片会原样复制，不会缩放或转换。角色出现或说话时，他的所有表情和头像都会被包含进去。

如果已经有一个同名的导出文件夹，并且它是之前的导出结果，就会被替换。如果它是别的东西，NovelWorks 会拒绝，并请你另选一个文件夹，所以绝不会覆盖你的文件。

### 会被移除的内容

你的私人写作数据在导出前会被清空：片段的**笔记**、场景的**摘要**和写作进度、场景在剧情地图上的位置，以及探索区域的名称。你的剧情、角色和变量当然会保留，并且在 `project.js` 中是**明文、可读的**：任何打开这些文件的人都能读到你所有的文字和分支。

## 打开它

- **在你的电脑上**：双击 `index.html`。不需要网页服务器就能运行。
- **在网上**：上传**所有文件**，并把 `index.html` 放在根目录。如果缺少 `project.js`，页面会显示“{tx.player.missingProject}”

## 你的玩家会得到什么

- 首先是一段简短的 **NovelWorks 启动画面**：标志和“{tx.splash.tagline}”，约 3 秒，可以跳过。（编辑器把它叫作“Made with NovelWorks”画面。）
- 页面标题就是你游戏的标题，页面语言就是你的游戏语言。页面图标是标题的第一个字母，底色是你的主色。
- 游戏会按窗口大小缩放，保持原有比例，四周留有黑边，电脑和手机上都是如此。浏览器允许时有一个{rt.player.fullscreen}按钮，触屏上有一个{ui.gameUIInspector.menu}按钮。见[按键与触屏](/novelworks-docs/zh-cn/player/keys-and-touch/)。
- 存档保存在玩家的浏览器里，更新游戏后仍会保留。见[存档与读档](/novelworks-docs/zh-cn/player/save-and-load/)。
- 它需要 JavaScript。没有 JavaScript 时，页面会显示“{tx.export.javascriptRequired}”

## 如果导出失败

| 消息 | 应对办法 |
|---|---|
| Novelworks 没有权限保存到此文件夹。请选择另一个，例如“文稿”或“桌面”。 | 选择另一个文件夹，例如“文稿”或“桌面”。 |
| 磁盘已满。请释放一些空间，或选择另一个磁盘上的文件夹。 | 释放一些空间，或选择另一个磁盘上的文件夹。 |
| 此文件夹已不存在，请选择另一个。 | 选择另一个文件夹。 |
| 那里已有名为“…”的文件夹，而且它不是之前的导出结果。 | 选择另一个文件夹。 |
| 激活 NovelWorks 后才能导出游戏。 | 打开**{ui.native.role.help} → 激活 NovelWorks…** |
| 演示版最多导出 5 个场景的游戏，而你的项目有 N 个。 | 仅限演示版。删除一些场景，或购买完整版。 |
| 无法导出游戏：… | 后面会给出原因。见[故障排除](/novelworks-docs/zh-cn/reference/troubleshooting/)。 |

## 发布

想把你的游戏放到网上，请见[在 itch.io 上发布](/novelworks-docs/zh-cn/publish/itch-io/)，或者使用任何能提供 HTML 游戏的网站空间。
