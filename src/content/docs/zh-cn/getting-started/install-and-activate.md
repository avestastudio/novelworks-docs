---
title: 安装与激活
description: 下载 NovelWorks，第一次打开它，并用下载密钥解锁导出功能。
---

## 我该下载哪个文件？

| 电脑 | 文件 |
|---|---|
| 搭载 Apple 芯片的 Mac（M1、M2、M3、M4……） | `Novelworks-<version>-mac-arm64.dmg` |
| Intel 芯片的 Mac | `Novelworks-<version>-mac-x64.dmg` |
| Windows 10 / 11 | `Novelworks-<version>-win-x64.exe` |

免费演示版也有同样的三个文件，版本号后面多了 `-demo`（例如 `Novelworks-<version>-demo-win-x64.exe`）。请看[免费演示版](/novelworks-docs/zh-cn/getting-started/demo-edition/)。

不确定你的 Mac 是哪种？打开苹果菜单 → **关于本机**。如果显示“芯片：Apple M…”，就是 Apple 芯片。

## 第一次打开

### 在 Mac 上

Mac 版应用目前**没有用 Apple Developer ID 签名**（只有临时签名），所以 macOS 第一次可能会拒绝打开它并显示警告。具体步骤取决于你的 macOS 版本。

1. 打开 `.dmg`，把 **Novelworks** 拖进**应用程序**。
2. 从“应用程序”里打开它。
3. 如果 macOS 阻止了它，请到**系统设置 → 隐私与安全性**里找一条关于 Novelworks 的消息，旁边有一个仍要打开的按钮。在较旧的 macOS 上，通常的做法是右键点击应用并选择**打开**。

### 在 Windows 上

运行 `.exe`。安装程序可以让你选择安装文件夹，只为当前用户安装，并添加桌面快捷方式。如果运行时 Windows 显示安全警告，通常会提供“仍要运行”的方式。具体文字取决于你的 Windows 版本。

## 选择编辑器语言

第一次打开时，NovelWorks 会问你{ui.languageDialog.title}。选一种语言，然后点击{ui.languageDialog.continue}。如果你直接关掉这个窗口，NovelWorks 会跟随你电脑的语言。之后你可以在**{ui.menu.view} → {ui.native.menu.language}**里更改。接下来你会看到[项目界面](/novelworks-docs/zh-cn/getting-started/projects-screen/)。

## 激活 NovelWorks（完整版）

完整版需要你购买时附带的下载密钥。没有密钥时，你仍然可以打开、编辑和试玩你的项目。只有**导出**被锁定：文件菜单里的导出命令会打开激活窗口。

1. 打开**{ui.native.role.help} → {ui.native.menu.activateNovelWorks}**。同一个窗口也可以从项目界面和“关于”窗口打开。
2. 把你的下载密钥粘贴到{ui.activateDialog.downloadKey}里。你也可以粘贴整个下载页面的地址。
3. 点击{ui.activateDialog.activate}。

在哪里找密钥：在浏览器里打开你的购买邮件，再打开 NovelWorks 下载页面，然后复制下载密钥或页面地址。

![激活 NovelWorks 窗口，下载密钥栏为空](/novelworks-docs/screenshots/activate-novelworks.png)

需要知道的几点：

- 激活需要联系激活服务器，所以要连接互联网。激活之后，NovelWorks 每次启动都会在你的电脑上检查许可证，所以导出时不需要联网。
- 激活窗口里写着：**一个密钥最多可在 3 台电脑上使用**，你可以停用一台电脑，把密钥用到另一台上。方法是打开同一个窗口，点击{ui.activateDialog.deactivateThisDevice}。这一步同样要联系服务器，所以需要联网。
- 如果窗口提示这个密钥已在最多数量的电脑上激活，请在另一台电脑上停用 NovelWorks，或者使用窗口里的{ui.activateDialog.contactUs}。

如果激活失败，窗口会显示一条消息，告诉你该怎么做。另请参阅[常见问题](/novelworks-docs/zh-cn/reference/faq/)。
