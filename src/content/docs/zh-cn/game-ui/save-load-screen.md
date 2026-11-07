---
title: 存档和读档画面
description: "存档和读档画面：存档位、快速存档、自动存档和它们的外观。"
---

{ui.gameUI.saveLoad} 画面可以从标题画面和暂停菜单进入。

## 你可以修改什么

在 {ui.gameUIInspector.screen} 下：

- {ui.gameUIInspector.backgroundColor}：默认是标题画面的颜色；
- {ui.gameUIInspector.textColor}：默认是“{tx.gameUIInspector.sameAsTheTextColor}”；
- {ui.gameUIInspector.buttonStyle}：“返回”按钮的样式。（确认提问，例如“{tx.savesScreen.overwrite}”和“{tx.savesScreen.delete}”，使用[暂停菜单](/novelworks-docs/zh-cn/game-ui/pause-menu/)的按钮样式。）

在 {ui.gameUIInspector.slots} 下：

- {ui.gameUIInspector.slotColor}：每个存档位方块的颜色（默认是“{tx.gameUIInspector.sameAsTheDialogueBox}”）。

## 玩家能得到什么

- **12 个存档位**，排成三列的网格，外加一个**一键存档**，以及每进入一个新场景时的**自动保存**。
- 每个存档位都会显示这个时刻的小图（背景、道具和角色，不含对话）、场景名称、日期和游玩时间。空的存档位显示“空”。
- {rt.game.load} 画面先列出自动保存的存档和一键存档，然后是 1 到 12 号存档位。{rt.game.save} 画面列出 1 到 12 号存档位。
- 覆盖存档位时会请求确认（“{tx.savesScreen.overwrite}”）；删除存档位（有存档的位上的 ×）时也会询问；在游戏进行中读取存档时会询问“{tx.game.loadThisSaveUnsavedProgressWillBe}”
- 键盘：方向键在存档位之间移动，**Enter** 或 **空格** 选择，`Delete` 或 `Backspace` 删除，**Home** 和 **End** 跳到列表的第一个和最后一个存档位，**Esc** 返回。

## 玩家在哪里找到它

- {ui.gameUI.titleScreen}：{rt.game.continue}（最新的存档，只有存在存档时才有）和 {rt.game.load}。
- {ui.gameUI.pauseMenu}：{rt.game.save}、{rt.game.load}、{rt.game.quickSave}（**F5**）和 {rt.game.quickLoad}（**F9**）。快速读档只有在存在快速存档后才会显示。
- {ui.quickMenu.title}：同样的四个按钮，如果你显示了它们。

如果浏览器不允许存档（无痕浏览，或关闭了网站数据），这些画面会告知这一点，并且什么都无法保存。请参阅[存档和读档](/novelworks-docs/zh-cn/player/save-and-load/)。
