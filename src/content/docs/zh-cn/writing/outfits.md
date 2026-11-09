---
title: 服装与衣橱
description: 用可以自由组合的单品打扮角色，保存服装，并在故事中更换。
---

衣橱让你把图片叠在角色身上，为角色打扮。你可以组合单品，把结果保存为一套服装，再在故事里选择这套服装。

## 打开衣橱

在{ui.leftPanel.characters}标签页里，选中一个角色，然后点击大大的{ui.wardrobe.open}按钮。台上角色的面板里也有同样的按钮。

![衣橱：放大显示的角色、按类别排列的单品，以及底部已保存的服装。](/novelworks-docs/screenshots/wardrobe.png)

窗口里显示：

- 放大的角色，下方是他们的表情，方便你逐一检查；
- 侧边的类别和各类别的单品；
- 底部已保存的服装。

窗口打开时，你可以用 `Cmd+Z` / `Ctrl+Z` 撤销每一处更改。

## 添加单品

单品是一张透明背景的图片，放在某个类别里。把文件拖到类别上，或者点击{ui.wardrobe.addPiece}（加号）。单品是一种单独的图片类型：{ui.assetTypes.clothing}，单品选择器只显示这种类型。

角色每个类别只能穿戴一件单品。想同时戴帽子和项链，请使用两个类别。

## 类别

新衣橱有四个类别：{ui.wardrobe.category.shoes}、{ui.wardrobe.category.bottoms}、{ui.wardrobe.category.tops}和{ui.wardrobe.category.accessories}。

- 点击类别的名称可以改名。类别不只用于衣服，头发也可以。
- {ui.wardrobe.addCategory}可以添加一个类别，最多 12 个。
- {ui.wardrobe.removeCategory}会删除这个类别和其中的单品，并把它们从服装中去掉。图片仍然保留在你的素材里。
- {ui.wardrobe.required}会去掉这个类别的{ui.wardrobe.none}选项。

## 摆放单品

点击一件单品。角色身上的单品周围会出现一个框。

- **拖动**框可以移动单品。
- **拉动角**可以调整大小，范围是 5 % 到 400 %。
- 用**方向键**可以小幅移动。按住 `Shift` 可以移动得更多。
- {ui.wardrobe.resetPlacement}会撤销以上所有调整。

单品只需摆放一次。所有使用它的服装和表情都会跟着变。

和角色形状相同的图片，添加时会正好叠在角色身上。形状不同的图片，比如单独抠出来的帽子，会以它自己的大小出现。

## 图层顺序

类别列表的最上面是最前面的图层。{ui.wardrobe.moveForward}和{ui.wardrobe.moveBack}可以移动类别。

{ui.wardrobe.expressionLayer}这一行也可以用同样的方式移动。移动它，可以把头发放到脸的上面，或者把身体放到脸的下面。

## 试穿和保存

点击单品只是试穿，还没有保存任何东西。

- {ui.wardrobe.saveAsNew}会用角色当前穿戴的内容创建一套服装。
- 当你更改了选中的服装时，会出现{ui.wardrobe.updateOutfit}，用来保存更改。
- {ui.outfits.default}是没有任何单品的角色。

在底部选中一套服装，可以给它改名，或者用{ui.outfits.remove}删除它。

## 完整图画

如果你的角色是画成一整张的，可以不用图层。选中一套服装，打开{ui.wardrobe.wholeDrawings}，为每个表情提供一张画好的完整图画。在这套服装中，完整图画会替代该表情的图层。

## 在故事中更换服装

点击游戏画面上的角色。接下来有三种方式：

- 右侧面板的{ui.stageControls.outfit}部分，会显示角色穿着每套服装的样子；
- 角色上方小栏里的{ui.stageControls.outfit}菜单；
- 右键菜单里的{ui.contextMenus.outfit}。

服装会一直保持，直到后面的某个片段更改它，和表情一样。{ui.stage.scopeLabel}照常起作用：请看[舞台](/novelworks-docs/zh-cn/concepts/stage/)。

## 在剧本模式中

在 `show` 行里加上 `outfit` 这个词和服装的名称：

```
show : Mia happy outfit Uniform left
show : Mia outfit default
```

`outfit default` 会回到默认服装。不存在的服装名称会被指出来，并提供创建它的方法。

## 删除、复制和粘贴

- 如果你删除了一套服装，穿着它的角色会回到{ui.outfits.default}。
- 如果你删除了一件单品，它会从使用它的服装中去掉。
- 把片段粘贴到另一个项目时，会按名称查找服装。如果没有同名的服装，角色会穿默认服装。

## 导出

只有已保存的服装穿戴的单品，才会进入你导出的游戏。

## 限制

- 除默认服装外，一个角色最多可以有 20 套服装和 200 件单品。
- 头像不会随服装变化。
- 演示版每个角色允许 2 套服装。请看[演示版与完整版](/novelworks-docs/zh-cn/getting-started/demo-edition/)。
