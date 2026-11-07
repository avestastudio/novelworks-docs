---
title: 探索
description: "点选式场景：玩家点击区域来四处查看、收集物品或继续前进。"
---

{ui.moments.exploration}片段**没有文本框**：玩家看着一幅图片，点击你在图上画出的**区域**。区域可以显示一行文字、修改变量、给予物品，或者通向另一个场景。它始终可用，不需要开启任何功能。

## 添加探索

在时间线中，添加一个{ui.moments.exploration}片段。它一开始是空的，使用前一个片段的背景。选中它：检查器会显示{ui.explorationInspectors.zones}和{ui.explorationInspectors.props}，以及 **+ 区域** 和 **+ 道具**。

![一个探索片段：画在图片上的区域，以及检查器中的区域和道具列表。](/novelworks-docs/screenshots/exploration-editor.png)

## 绘制区域

在游戏画面上方，选择{ui.explorationCanvas.drawZonesAs}：**{ui.explorationCanvas.rectangle}**或**{ui.explorationCanvas.shape}**。（窗口较窄时，它们在{ui.stage.more}菜单里。）

- **{ui.explorationCanvas.rectangle}**：在图片上拖动。只点一下不会创建任何东西，小于画面 2 % 的区域也不会被创建。
- **{ui.explorationCanvas.shape}**：围绕一个物体逐点点击。再次点击第一个点，或按 **Enter**，即可封闭形状。按 **Esc** 取消。至少需要三个点。

区域在绘制完成后会立刻被选中。拖动它可以移动。矩形有八个手柄用来调整大小，形状的每个点上都有一个手柄。你也可以用 **+ 区域** 在画面中央添加一个矩形。

右键点击区域，可以选择{ui.contextMenus.duplicateZone}和{ui.contextMenus.deleteZone}，也可以用 **Cmd+D** / **Ctrl+D** 复制，用 `Delete` 删除。副本会放在稍微靠下靠右的位置，名称为“……（副本）”。每次编辑算一个撤销步骤。

## 区域检查器

- {ui.explorationInspectors.name}：只给你自己用，方便找到这个区域。玩家永远看不到。新区域叫“区域 1”、“区域 2”……
- {ui.explorationInspectors.label}：指针移到区域上时显示（在手机上：第一次点按时显示）。
- {ui.explorationInspectors.highlight}：无、发光（默认）或轮廓。
- {ui.explorationInspectors.whenClicked}，即动作：

| 动作 | 它做什么 |
|---|---|
| 查看（默认） | 显示一行文字，由旁白或你选择的角色说出。再点一下就回到探索。 |
| 前往场景 | 离开探索，进入那个场景。 |
| 继续 | 离开探索，继续执行这个场景的下一个片段。 |
| 修改变量 | 给分数增加数值，或设置变量。依赖它的其他区域会立刻出现、消失或解锁。 |
| 拾取物品 | 把一件物品放进物品栏，并显示提示。该区域及其道具随后会永久消失。（物品栏功能。） |
| 使用物品 | 检查物品栏。选择{ui.explorationInspectors.itemToUse}、是否**用完即消耗**，以及{ui.explorationInspectors.whenThePlayerHasIt}的结果（查看、前往场景、继续或修改变量）。{ui.explorationInspectors.withoutItOptional}是玩家没有该物品时显示的那一行；如果留空，什么也不会发生。（物品栏功能。） |

- {ui.explorationInspectors.works}：{ui.explorationInspectors.everyTime}或{ui.explorationInspectors.onceOnly}（在这一次游玩中，区域第一次使用之后就不再起作用）。
- 一个条件：“{tx.explorationInspectors.onlyAvailableWhenAVariableOrAn}”。条件不成立时，{ui.explorationInspectors.otherwise}：**隐藏**（区域及其道具看不到也点不了）或**锁定**（显示标签但无法使用，点击时可以显示一行可选的文字）。

## 道具

{ui.explorationInspectors.props}是放在舞台上的物体图片（钥匙、信件、花瓶）。它们不能点击：把道具关联到某个区域，就可以让它们一起隐藏。

- **+ 道具** 会打开“{tx.explorationInspectors.chooseAProp}”（类型为道具的图片，可以导入）。新道具会放在中央。
- 拖动道具可以移动它，拖动角可以调整大小。在检查器中，{ui.explorationInspectors.size}是画面宽度的 2 % 到 100 %。
- {ui.explorationInspectors.hiddenWithZone}：当那个区域因条件被隐藏时，道具也会被隐藏。{ui.explorationInspectors.addAZoneAroundIt}会在道具周围添加一个区域。
- {ui.explorationInspectors.forward}和{ui.explorationInspectors.backward}用来改变哪个道具在前面。{ui.explorationInspectors.removeProp}会删除它。
- 道具画在角色后面、背景上面。

## 玩家看到什么

- 区域在指针移到它们上面之前是**不可见的**（获得焦点，或在触屏上点按一次时也会显示）。这时会显示高亮，标签会出现在一个小标签里。
- 指针移到区域上时会变成手形，移到锁定的区域上时会变成“禁止”光标。
- 显示文字期间，区域不起作用：任何点击都会关闭这行文字。
- 在触屏上，有标签时，第一次点按显示标签，第二次点按执行动作。没有标签时，点一次就执行。
- 使用键盘时，**Tab** 在区域之间移动，**Enter** 使用区域。屏幕阅读器会读出标签，或者“值得一看的东西 1”，锁定的区域还会加上“（已锁定）”。

**没有“全部完成”的出口。**玩家会一直留在探索中，直到点击通向某个场景的区域，或者“继续”区域。请确保至少有一个区域能做到这一点。

## 警告

- 请至少画一个供玩家点击的区域。
- **玩家可能会卡在这里**：没有任何可点击的区域能通向其他场景或继续剧情。
- 区域通向某个场景但没有选择场景，或通向已删除的场景；没有可说的内容（查看时，或使用物品时）；由已删除的角色查看；修改的变量没有选择或已被删除。
- 区域的条件检查的变量或物品没有选择、已被删除，或其物品栏功能已关闭。
- 拾取或使用物品的区域用到的物品没有选择、已被删除，或其物品栏功能已关闭。
- 区域需要一件玩家永远得不到的物品，或者因为条件永远不成立而永远无法使用。
- 道具没有图片，或关联到了已删除的区域。
- 放在没有“继续”区域的探索之后的片段永远无法到达。
- 在地图上：“{tx.shared.map.addABackgroundImageInMap}”和“玩家永远无法打开地图……”（参见[地图](/novelworks-docs/zh-cn/features/map/)）。

## 其他位置

- 在[剧情地图](/novelworks-docs/zh-cn/branching/story-map/)上，通向某个场景的区域（包括“{tx.shared.exploration.useAnItem}”的结果）是标有区域名称的箭头。只是继续的区域留在场景内部：没有箭头。
- 在[剧本模式](/novelworks-docs/zh-cn/writing/script-mode-lines/)中，探索是单独一行 `exploration : 3 zones`。区域和道具只能在可视化视图中编辑，编辑文本时它们会被保留。
- [地图](/novelworks-docs/zh-cn/features/map/)使用同样的区域，把它们作为地点。
