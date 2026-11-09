---
title: 七种语言的剧本语法
description: 剧本格式在每种编辑器语言中的用词，以及它们的含义。
---

[剧本模式](/novelworks-docs/zh-cn/writing/script-mode/)会**同时**读取**所有编辑器语言**的词，另外还有几种简短的英文写法。所以用法语词写的剧本可以在中文编辑器里使用，反过来也一样。当 NovelWorks **写出**剧本时（在剧本模式中，或使用 {ui.native.menu.file} → {ui.native.menu.exportScript}），它使用你当前编辑器语言的词。

读取关键词时，大小写、重音符号和多余的空格都不影响：`Decor` 会被读成 `décor`。

## 这些词

<!-- script-kw:start -->
| Word for | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| Changes the background | `background` | `décor` | `fondo` | `cenário` | `背景` | `фон` | `背景` |
| No background / nobody | `none` | `aucun` | `ninguno` | `nenhum` | `无` | `нет` | `なし` |
| A character appears or changes | `show` | `montrer` | `mostrar` | `mostrar` | `显示` | `показать` | `表示` |
| A character leaves | `hide` | `cacher` | `ocultar` | `esconder` | `隐藏` | `скрыть` | `非表示` |
| Everyone | `everyone` | `tous` | `todos` | `todos` | `全部` | `всех` | `全員` |
| Place on the left | `left` | `à gauche` | `a la izquierda` | `à esquerda` | `左侧` | `слева` | `左` |
| Place in the center | `center` | `au centre` | `al centro` | `ao centro` | `中间` | `в центре` | `中央` |
| Place on the right | `right` | `à droite` | `a la derecha` | `à direita` | `右侧` | `справа` | `右` |
| Keeps a free placement | `placed by hand` | `placé à la main` | `colocado a mano` | `posicionado à mão` | `手动放置` | `размещено вручную` | `手動` |
| A condition | `if` | `si` | `si` | `se` | `如果` | `если` | `もし` |
| Otherwise / else if | `else` | `sinon` | `si no` | `senão` | `否则` | `иначе` | `それ以外` |
| All conditions | `and` | `et` | `y` | `e` | `并且` | `и` | `かつ` |
| One condition | `or` | `ou` | `o` | `ou` | `或者` | `или` | `または` |
| Option greyed out when not available | `locked` | `verrouillé` | `bloqueada` | `bloqueada` | `锁定` | `заблокировано` | `ロック` |
| Test on an item | `item` | `objet` | `objeto` | `item` | `物品` | `предмет` | `アイテム` |
| The player does not have the item | `without` | `sans` | `sin` | `sem` | `没有` | `без` | `未所持` |
| Gives an item | `give` | `donner` | `dar` | `dar` | `给予` | `дать` | `渡す` |
| Takes an item away | `remove` | `retirer` | `quitar` | `tirar` | `移除` | `забрать` | `取り上げる` |
| No notice | `no notice` | `sans message` | `sin aviso` | `sem aviso` | `不提示` | `без уведомления` | `通知なし` |
| Opens the map | `map` | `carte` | `mapa` | `mapa` | `地图` | `карта` | `マップ` |
| An ending | `end` | `fin` | `fin` | `fim` | `结局` | `конец` | `終わり` |
| An exploration moment | `exploration` | `exploration` | `exploración` | `exploração` | `探索` | `исследование` | `探索` |
| Yes (value of a Fact) | `true` | `vrai` | `verdadero` | `verdadeiro` | `真` | `да` | `真` |
| No (value of a Fact) | `false` | `faux` | `falso` | `falso` | `假` | `ложь` | `偽` |
<!-- script-kw:end -->

任何语言下都能识别的写法：`bg` 表示背景一词，`centre` 表示 center，`take` 表示 remove，`ending` 表示 end，`yes` 表示 true，`no` 表示 false。

其中有些词由几个部分组成，例如 “à gauche”：它们会被当作一个整词来读取。

## 服装

表示服装的词写在 `show` 行里，放在表情后面：`show : Mia happy outfit Uniform left`。如果把名称换成表示“默认”的词，角色就会回到第一套服装：`show : Mia outfit default`。不存在的服装会被加上下划线。请看[服装](/novelworks-docs/zh-cn/writing/outfits/)。

| 含义 | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| 一套服装 | `outfit` | `tenue` | `atuendo` | `roupa` | `服装` | `наряд` | `衣装` |
| 第一套服装 | `default` | `de départ` | `inicial` | `inicial` | `默认` | `начальный` | `最初` |

## 富文本

在对话台词里，花括号中的标签会改变它们之间的文字，例如 `{b}word{/b}` 或 `{color=1}word{/color}`。请看[富文本](/novelworks-docs/zh-cn/writing/rich-text/)。和关键词一样，标签用你的编辑器语言写出，并且七种语言都能读取。

| 标签含义 | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| 粗体 | `b` | `g` | `n` | `neg` | `粗` | `ж` | `太` |
| 斜体 | `i` | `i` | `c` | `ita` | `斜` | `к` | `斜` |
| 颜色 | `color` | `couleur` | `color` | `cor` | `颜色` | `цвет` | `色` |
| 大 | `big` | `grand` | `grande` | `maior` | `大` | `крупно` | `大` |
| 小 | `small` | `petit` | `pequeno` | `menor` | `小` | `мелко` | `小` |
| 抖动 | `shake` | `tremble` | `tiembla` | `treme` | `抖动` | `дрожь` | `震え` |
| 波浪 | `wave` | `vague` | `ola` | `onda` | `波浪` | `волна` | `波` |
| 停顿 | `pause` | `pause` | `pausa` | `pausa` | `停顿` | `пауза` | `ポーズ` |

- 颜色是 1 到 5 的数字（[文字的颜色](/novelworks-docs/zh-cn/game-ui/dialogue-box/)），或者像 `#ff8800` 这样的代码。
- `{pause}` 等待半秒。`{pause=2}` 等待 2 秒，范围是 0.1 到 5。
- 花括号里的变量名称，比如 `{Affection}`，会显示它的值。
- 要写出真正的花括号，请输入 `{{`。

## 符号

这些符号在每种语言中都一样：`?`（选择的问题）、`-`（一个选项）、`->`（跳转或目的地）、`+` 和 `=`（选项下的一项更改）、`//`（笔记）、`>`（原样保留的一行）、`#`（一个场景）、`:`（命令之后）以及 `x` 或 `×`（数量）。

比较使用 `=`（或 `==`）、`!=`（或 `≠`）、`>`、`>=`（或 `≥`）、`<` 和 `<=`（或 `≤`）。

## 角色的名字和关键词相同

如果一个角色叫作 “End”，那么 `End : Hello` 这一行是一句对话，编辑器会提醒你这个命令无法使用。要把它写成命令，请把命令放在方括号里：`[end : Good ending]`。在其他地方，方括号是可选的。

## 在哪里学习这种格式

每一行的写法在[剧本模式：每一种行](/novelworks-docs/zh-cn/writing/script-mode-lines/)和[剧本模式：条件和选择](/novelworks-docs/zh-cn/writing/script-mode-conditions/)中有说明。
