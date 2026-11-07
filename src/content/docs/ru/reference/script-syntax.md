---
title: Синтаксис сценария на 7 языках
description: Слова формата сценария на каждом языке редактора и что они означают.
---

[Режим сценария](/novelworks-docs/ru/writing/script-mode/) читает сценарий со словами **всех языков редактора одновременно**, плюс несколько коротких английских форм. Поэтому сценарий, написанный французскими словами, работает в английском редакторе, и наоборот. Когда NovelWorks **записывает** сценарий (в режиме сценария или через **{ui.native.menu.file} → Экспортировать сценарий…**), он использует слова текущего языка вашего редактора.

Заглавные буквы, диакритические знаки и лишние пробелы при чтении ключевого слова не важны: `Decor` читается как `décor`.

## Слова

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

Всегда понимаются на любом языке: `bg` вместо слова «фон», `centre` вместо center, `take` вместо remove, `ending` вместо end, `yes` вместо true и `no` вместо false.

Некоторые из этих слов состоят из нескольких частей, например «à gauche»: они читаются как целые слова.

## Символы

Они одинаковы на всех языках: `?` (вопрос выбора), `-` (вариант), `->` (переход или назначение), `+` и `=` (изменение под вариантом), `//` (заметка), `>` (строка, которая остаётся как написана), `#` (сцена), `:` (после команды) и `x` или `×` (количество).

Для сравнения используются `=` (или `==`), `!=` (или `≠`), `>`, `>=` (или `≥`), `<` и `<=` (или `≤`).

## Персонаж с именем, совпадающим с ключевым словом

Если персонажа зовут, например, «End», строка `End : Hello` — это реплика, а редактор предупреждает, что команду использовать нельзя. Чтобы сделать из неё команду, напишите её в квадратных скобках: `[end : Good ending]`. В остальных случаях скобки необязательны.

## Где узнать о формате

Сами строки объяснены в статьях [Режим сценария: каждая строка](/novelworks-docs/ru/writing/script-mode-lines/) и [Режим сценария: условия и выборы](/novelworks-docs/ru/writing/script-mode-conditions/).
