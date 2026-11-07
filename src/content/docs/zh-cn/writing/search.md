---
title: 查找和替换
description: 搜索整个游戏，跳到每个结果，并在所有地方替换文字。
---

用 **{ui.native.menu.edit} → {ui.native.menu.findAndReplace}** 或 **Cmd+F** / **Ctrl+F** 打开搜索。搜索面板会替换左侧面板的标签页，光标位于第一个框中。点 X 关闭，或在它的某个框里按 **Esc**。它在整个项目中搜索，不会只在单个场景中搜索。

![搜索面板，结果按场景分组。](/novelworks-docs/screenshots/search-panel.png)

## 搜索范围

- 对话、选择的问题和选项、结局的名称和文字；
- 探索区域的标签、查看文字和锁定文字；
- 片段的笔记；
- 场景名称和场景摘要；
- 角色名称；
- 物品名称和描述。

不搜索：谁说了某一句话、变量名称、图片名称和表情名称。

## 搜索

在 {ui.searchPanel.find} 中输入。下面一行会显示“第 3 个，共 12 个”或“没有结果。”。再往下，结果按场景分组（然后是角色，再是物品）。每一行都显示匹配所在的位置（“片段 4 · 对白”、“{tx.characterInspector.characterName}”……），以及一小段摘录，匹配处会高亮。最多列出 500 个结果：输入更多文字可以缩小搜索范围。

两个选项可以缩小搜索范围：

- {ui.searchPanel.matchCase}：“Aa”不等于“aa”。默认关闭。
- {ui.searchPanel.wholeWordsOnly}：匹配“{tx.gameUIPreview.mia}”，但不匹配“Miami”。默认关闭。

你输入的文字会按原样搜索。没有任何模式匹配。

点击一个结果就会跳到它那里：对应的片段、场景、角色、物品或区域会被选中。**Enter** 跳到下一个结果，**Shift+Enter** 跳到上一个，搜索会循环。

## 替换

在 {ui.searchPanel.replaceWith} 中输入新文字。

- {ui.searchPanel.replace} 替换所选的结果，然后跳到下一个。
- 结果行上的图标（{ui.searchPanel.replaceThisOne}）只替换那一个，并且不会往下跳。
- {ui.searchPanel.replaceAll} 替换游戏中的每一处匹配。NovelWorks 会先请你确认，告诉你有多少处匹配，以及可以撤销。替换内容为空会删除该文字。

如果文字在找到匹配之后发生了变化，这处替换会被跳过。在整个游戏中替换是作为一个操作完成的，一次 {ui.native.menu.undo} 就能全部还原。会有消息告诉你替换了多少处匹配（“已替换 31 处匹配。”）。
