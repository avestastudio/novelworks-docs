---
title: "15 分钟制作第一部视觉小说"
description: "从空白项目开始，逐步制作可玩的游戏。"
---

你将制作一段包含背景、一个角色、几句对话和一个选项的短故事。准备三张图片：一张背景，以及同一角色的两种表情，例如开心和惊讶。


## 1. 创建项目

1. 打开 NovelWorks，在项目页面点击 **New project**。
2. 输入名称，用 **Browse…** 选择文件夹，再点击 **Create project**。暂时不要勾选可选功能。

项目是一个文件夹，内含 `project.json` 文件和 `assets` 子文件夹。

## 2. 导入图片

1. 在左侧打开 **Assets**。
2. 将图片拖入窗口，或使用导入按钮。
3. 为每张图片选择类别：背景选 **Background**，角色立绘选 **Sprite**，其他图片按用途分类。

## 3. 创建角色

1. 在 **Characters** 中添加角色，填写姓名并设置 **Name color**。
2. 为每张立绘添加一个表情，例如“开心”和“惊讶”，然后指定对应图片。星标表示默认表情。

## 4. 编写第一场戏

1. 在 **Scenes** 中选择第一个场景，双击修改名称。
2. 屏幕下方的时间轴显示场景中的各个时刻。点击 **+ Dialogue** 添加一句对话。
3. 选择背景，点击 **+ Character** 放入角色，再拖动到合适位置。
4. 点击对话框输入文字。**Enter** 新建下一句并保留舞台布置；**Shift+Enter** 在同一对话框内换行。

## 5. 添加选项

1. 在时间轴点击 **Choice**。
2. 写下问题，添加两个选项。
3. 为每个选项指定目标场景。如需新场景，先在 **Scenes** 中点击 **New scene**。

## 6. 添加结局

选择每条分支的最后一个时刻，点击 **Ending**，填写结局名称，例如“美好结局”。

## 7. 运行游戏

点击顶部的 **Play**。单击或按 **Space** 推进，按 **Esc** 返回编辑器。

如果要从故事中途开始测试，选中一个时刻，再点击 **Play from here**。

## 8. 保存

Mac 按 **Cmd+S**，Windows 按 **Ctrl+S**。NovelWorks 也会自动保存。

## 接下来做什么？

- 使用[变量](/novelworks-docs/zh-cn/branching/variables/)和[条件](/novelworks-docs/zh-cn/branching/conditions/)让选择产生后果。
- 在 [Game UI](/novelworks-docs/zh-cn/game-ui/game-ui-editor/) 中调整游戏外观。
- [导出游戏](/novelworks-docs/zh-cn/publish/web-export/)并分享。
