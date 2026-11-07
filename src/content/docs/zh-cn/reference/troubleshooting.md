---
title: 故障排除和提示信息
description: NovelWorks 的各种提示信息是什么意思，以及遇到时该怎么做，涉及打开项目、激活、导出和保存。
---

## 打开项目

| 信息 | 含义和处理办法 |
|---|---|
| “{basename}”不是 Novelworks 项目：其中没有 project.json 文件。 | 你选择的文件夹里没有 `project.json`。请选择项目本身的文件夹。 |
| project.json 已损坏：不是有效的 JSON。 | 文件被改动过或被截断了。请打开备份：把 `backups` 里的一个文件复制到 `project.json` 上（把损坏的那个另存起来）。 |
| 此项目由较新版本的 Novelworks 保存（格式 N）。请更新 Novelworks 后再打开。 | 请安装最新的 NovelWorks。没有任何改动。 |
| NovelWorks 在升级此项目之前无法保存安全副本，因此没有打开它。你的项目没有被修改。 | 无法写入该文件夹。请检查它的权限和剩余空间，然后再打开一次。 |
| “{tx.projectHub.folderNotFound}”（项目画面） | 项目的文件夹被移动或删除了。点击 {ui.projectHub.locate}，选择它的新位置。 |

## 激活

| 信息 | 处理办法 |
|---|---|
| 请先粘贴你的下载密钥。 | 把密钥粘贴到输入框里。 |
| NovelWorks 无法连接到激活服务器。请检查网络连接后重试。 | 检查你的网络连接，然后再试一次。激活和停用都需要联网。 |
| 这不是 NovelWorks 下载密钥。请从下载页面或购买邮件中重新复制。 | 从你的下载页面或购买邮件中重新复制一次。 |
| 此密钥已在 3 台电脑上激活。请在另一台电脑上停用 NovelWorks，或联系我们。 | 在另一台电脑上停用 NovelWorks，或使用窗口中的 {ui.activateDialog.contactUs}。 |
| 目前无法激活，请几分钟后再试。 | 服务器一侧的临时问题。 |
| 目前无法停用，请几分钟后再试。 | 同上，出现在停用时。 |

## 导出

见[网页导出](/novelworks-docs/zh-cn/publish/web-export/)中的表格。最常见的办法：换一个文件夹（文档或桌面），腾出一些磁盘空间，或者激活 NovelWorks。

## 在你的游戏中保存

浏览器阻止存储时玩家看到的信息，见[存档和读档](/novelworks-docs/zh-cn/player/save-and-load/)。

## 剧情看起来不对劲时

- 标有 {ui.scenesTab.unreachable} 的场景、卡片上的三角形，或者一个写着“{tx.branchInspectors.thisMomentNeedsYourAttention}”的框：见[问题：所有警告](/novelworks-docs/zh-cn/testing/problems/)。
- 画面上缺了一个角色：角色会一直留在舞台上，直到有什么更改了他们，并在某个片段指示时离开。见[舞台](/novelworks-docs/zh-cn/concepts/stage/)。
- 某个选择选项没有显示：它可能带有条件。见[选择](/novelworks-docs/zh-cn/branching/choices/)。
- 剧情跳过了一个“如果…”：某个条件检查的东西已被删除。见[如果… 条件](/novelworks-docs/zh-cn/branching/conditions/)。

## 还是解决不了？

[报告问题](/novelworks-docs/zh-cn/reference/report-a-bug/)。
