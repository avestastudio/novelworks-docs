---
title: 导入和导出剧本
description: 把文本文件导入项目变成场景，也可以把完整的游戏保存为文本。
---

你可以用任何文本编辑器写故事，再把它导入 NovelWorks，也可以把完整的游戏保存为文本文件。文本使用[剧本模式](/novelworks-docs/zh-cn/writing/script-mode/)的格式。

## 导入剧本

选择 **{ui.native.menu.file} → {ui.native.menu.importScript}**。（没有键盘快捷键。需要先打开一个项目才能使用这个菜单。）{ui.scriptImport.title} 窗口会打开。

1. 把你的文字粘贴到框里，或者点击 {ui.scriptImport.openFile}，选择一个 `.txt` 或 `.md` 文件。只读取纯文本，不能读取 Word 文件。
2. 点击底部的按钮：
   - 如果你的文字里有 `# Heading` 行，点 {ui.scriptImport.importAsScenes}：每个标题都会变成你游戏的一个场景；
   - 否则，点 {ui.scriptImport.importInto} 所选的场景：这些行会被添加到该场景的末尾。

NovelWorks 会先整理文字：弯引号（“ ”）会变成直引号，行首 `•` 或 `·` 加一个空格会变成 `-`。然后它切换到剧本视图，并**像你亲手输入的一样**添加文字。它会在通常的半秒延迟之后应用。

### 你会得到什么

- 如果有角色叫这个名字，`Name : text` 这样的一行就是对话。如果没有，它就是旁白，名字会带下划线，并且可以用快速修复创建这个角色。
- 未知的背景、场景、变量和物品同样会带下划线。按钮 {ui.scriptMode.createMissing_other} 可以一键创建它们全部。
- 没有预览步骤，也不会询问说话人：说话人按 `Name : text` 这条规则和你已有的角色来识别。
- 导入是**添加**文字。它不会替换已有的内容。

:::note
使用 `# headings` 时，**每个标题都会新建一个场景**。如果你的游戏里已经有同名的场景，新场景会按复制场景的方式命名：“Name（副本）”，然后是“Name（副本）2”，依此类推（比较名称时会忽略重音和大小写）。已有的场景不会被改动。导入文字中出现两次的标题也会用同样的方式改名。导入文字中的 `-> Name` 链接仍然指向原来的场景，所以请检查一下。
:::

导入是**一个撤销步骤**：按一次 {ui.native.menu.undo} 就会移除它添加的全部内容，即使你之后离开了剧本模式。

## 导出剧本

选择 **{ui.native.menu.file} → {ui.native.menu.exportScript}**。NovelWorks 会询问保存位置，标题是 {ui.native.exportIpc.saveTheScript}，并写出一个 `.txt` 文件。

- 文件包含**完整的游戏**：每个场景都放在 `# Name` 标题下，场景之间空一行。地图的隐藏场景不包含在内。你不能只导出一个场景。
- 它以 UTF-8 编码写出，使用你当前编辑器语言的关键词。
- 默认文件名是你的项目标题，文件名不能包含的字符会被替换为 `-`。
- 导出不会改变你的项目。

你可以用 {ui.native.menu.importScript} 再次导入导出的文件。
