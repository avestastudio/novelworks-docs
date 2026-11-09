---
title: Syntaxe du script en 7 langues
description: Les mots du format Script dans chaque langue de l’éditeur, et ce qu’ils signifient.
---

Le [mode Script](/novelworks-docs/fr/writing/script-mode/) lit un script avec les mots de **toutes les langues de l’éditeur à la fois**, plus quelques formes courtes en anglais. Un script écrit avec des mots français fonctionne donc dans un éditeur anglais, et l’inverse aussi. Quand NovelWorks **écrit** un script (en mode Script, ou avec **{ui.native.menu.file} → {ui.native.menu.exportScript}**), il utilise les mots de la langue actuelle de votre éditeur.

Les majuscules, les accents et les espaces en trop n’ont pas d’importance quand un mot-clé est lu : `Decor` se lit comme `décor`.

## Les mots

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

Toujours compris, dans n’importe quelle langue : `bg` pour le mot du décor, `centre` pour center, `take` pour remove, `ending` pour end, `yes` pour true et `no` pour false.

Certains de ces mots comptent plusieurs parties, comme « à gauche » : ils sont lus comme des mots entiers.

## Tenues

Le mot pour une tenue se place dans une ligne `show`, après l’expression : `show : Mia happy outfit Uniform left`. Avec le mot pour « de départ » à la place d’un nom, le personnage revient à sa première tenue : `show : Mia outfit default`. Une tenue qui n’existe pas est soulignée. Voir [Tenues et garde-robe](/novelworks-docs/fr/writing/outfits/).

| Mot pour | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| Une tenue | `outfit` | `tenue` | `atuendo` | `roupa` | `服装` | `наряд` | `衣装` |
| La première tenue | `default` | `de départ` | `inicial` | `inicial` | `默认` | `начальный` | `最初` |

## Texte enrichi

À l’intérieur d’une ligne de dialogue, des balises entre accolades changent les mots qu’elles entourent, par exemple `{b}word{/b}` ou `{color=1}word{/color}`. Voir [Texte enrichi](/novelworks-docs/fr/writing/rich-text/). Comme les mots-clés, les balises s’écrivent dans la langue de votre éditeur et sont lues dans les sept langues.

| Balise pour | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| Gras | `b` | `g` | `n` | `neg` | `粗` | `ж` | `太` |
| Italique | `i` | `i` | `c` | `ita` | `斜` | `к` | `斜` |
| Couleur | `color` | `couleur` | `color` | `cor` | `颜色` | `цвет` | `色` |
| Grand | `big` | `grand` | `grande` | `maior` | `大` | `крупно` | `大` |
| Petit | `small` | `petit` | `pequeno` | `menor` | `小` | `мелко` | `小` |
| Tremblement | `shake` | `tremble` | `tiembla` | `treme` | `抖动` | `дрожь` | `震え` |
| Vague | `wave` | `vague` | `ola` | `onda` | `波浪` | `волна` | `波` |
| Pause | `pause` | `pause` | `pausa` | `pausa` | `停顿` | `пауза` | `ポーズ` |

- Une couleur est un nombre de 1 à 5 (les [couleurs des mots](/novelworks-docs/fr/game-ui/dialogue-box/)) ou un code comme `#ff8800`.
- `{pause}` attend une demi-seconde. `{pause=2}` attend 2 secondes, de 0,1 à 5.
- Le nom d’une variable entre accolades, comme `{Affection}`, affiche sa valeur.
- Pour écrire une vraie accolade, tapez `{{`.

## Les symboles

Ils sont les mêmes dans toutes les langues : `?` (une question de choix), `-` (une option), `->` (un saut ou une destination), `+` et `=` (un changement sous une option), `//` (une note), `>` (une ligne gardée telle quelle), `#` (une scène), `:` (après une commande) et `x` ou `×` (une quantité).

Les comparaisons utilisent `=` (ou `==`), `!=` (ou `≠`), `>`, `>=` (ou `≥`), `<` et `<=` (ou `≤`).

## Un personnage qui porte le nom d’un mot-clé

Si un personnage s’appelle, par exemple, « End », une ligne `End : Hello` est une ligne de dialogue, et l’éditeur vous avertit que la commande ne peut pas être utilisée. Écrivez une commande entre crochets pour en faire une commande : `[end : Good ending]`. Les crochets sont facultatifs partout ailleurs.

## Où apprendre le format

Les lignes elles-mêmes sont expliquées dans [Mode Script : chaque ligne](/novelworks-docs/fr/writing/script-mode-lines/) et [Mode Script : conditions et choix](/novelworks-docs/fr/writing/script-mode-conditions/).
