---
title: Script syntax in 7 languages
description: The words of the Script format in each editor language, and what they mean.
---

[Script mode](/novelworks-docs/writing/script-mode/) reads a script with the words of **every editor language at the same time**, plus a few short English forms. So a script written with French words works in an English editor, and the other way round. When NovelWorks **writes** a script (in Script mode, or **{ui.native.menu.file} → {ui.native.menu.exportScript}**), it uses the words of your current editor language.

Capital letters, accents and extra spaces do not matter when a keyword is read: `Decor` reads as `décor`.

## The words

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

Always understood, in any language: `bg` for the background word, `centre` for center, `take` for remove, `ending` for end, `yes` for true and `no` for false.

Some of these words have several parts, such as "à gauche": they are read as whole words.

## Outfits

The word for an outfit goes in a `show` line, after the expression: `show : Mia happy outfit Uniform left`. With the word for "default" in place of a name, the character goes back to their first outfit: `show : Mia outfit default`. An outfit that does not exist is underlined. See [Outfits](/novelworks-docs/writing/outfits/).

| Word for | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| An outfit | `outfit` | `tenue` | `atuendo` | `roupa` | `服装` | `наряд` | `衣装` |
| The first outfit | `default` | `de départ` | `inicial` | `inicial` | `默认` | `начальный` | `最初` |

## Rich text

Inside a line of dialogue, tags in curly braces change the words between them, for example `{b}word{/b}` or `{color=1}word{/color}`. See [Rich text](/novelworks-docs/writing/rich-text/). Like the keywords, the tags are written in your editor's language and read in all seven.

| Tag for | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| Bold | `b` | `g` | `n` | `neg` | `粗` | `ж` | `太` |
| Italic | `i` | `i` | `c` | `ita` | `斜` | `к` | `斜` |
| Color | `color` | `couleur` | `color` | `cor` | `颜色` | `цвет` | `色` |
| Big | `big` | `grand` | `grande` | `maior` | `大` | `крупно` | `大` |
| Small | `small` | `petit` | `pequeno` | `menor` | `小` | `мелко` | `小` |
| Shake | `shake` | `tremble` | `tiembla` | `treme` | `抖动` | `дрожь` | `震え` |
| Wave | `wave` | `vague` | `ola` | `onda` | `波浪` | `волна` | `波` |
| Pause | `pause` | `pause` | `pausa` | `pausa` | `停顿` | `пауза` | `ポーズ` |

- A color is a number from 1 to 5 (the [colors of the words](/novelworks-docs/game-ui/dialogue-box/)) or a code like `#ff8800`.
- `{pause}` waits half a second. `{pause=2}` waits 2 seconds, from 0.1 to 5.
- The name of a variable in braces, like `{Affection}`, shows its value.
- To write a real brace, type `{{`.

## The symbols

These are the same in every language: `?` (a choice question), `-` (an option), `->` (a jump or a destination), `+` and `=` (a change under an option), `//` (a note), `>` (a line kept as written), `#` (a scene), `:` (after a command) and `x` or `×` (a quantity).

Comparisons use `=` (or `==`), `!=` (or `≠`), `>`, `>=` (or `≥`), `<` and `<=` (or `≤`).

## A character with the name of a keyword

If a character is called, for example, "End", a line `End : Hello` is a line of dialogue, and the editor warns you that the command cannot be used. Write a command in square brackets to make it a command: `[end : Good ending]`. Brackets are optional everywhere else.

## Where to learn the format

The lines themselves are explained in [Script mode: every line](/novelworks-docs/writing/script-mode-lines/) and [Script mode: conditions and choices](/novelworks-docs/writing/script-mode-conditions/).
