---
title: "Sintaxis del guion en 7 idiomas"
description: "Las palabras del formato Guion en cada idioma del editor, y qué significan."
---

El [modo Guion](/novelworks-docs/es/writing/script-mode/) lee un guion con las palabras de **todos los idiomas del editor a la vez**, más unas pocas formas cortas en inglés. Así, un guion escrito con palabras en francés funciona en un editor en español, y al revés. Cuando NovelWorks **escribe** un guion (en el modo Guion, o con **{ui.native.menu.file} → {ui.native.menu.exportScript}**), usa las palabras del idioma actual de tu editor.

Las mayúsculas, los acentos y los espacios de más no importan cuando se lee una palabra clave: `Decor` se lee como `décor`.

## Las palabras

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

Siempre se entienden, en cualquier idioma: `bg` para la palabra de fondo, `centre` para center, `take` para remove, `ending` para end, `yes` para true y `no` para false.

Algunas de estas palabras tienen varias partes, como «a la izquierda»: se leen como palabras completas.

## Atuendos

La palabra para un atuendo va en una línea `show`, después de la expresión: `show : Mia happy outfit Uniform left`. Con la palabra para «inicial» en lugar de un nombre, el personaje vuelve a su primer atuendo: `show : Mia outfit default`. Un atuendo que no existe aparece subrayado. Consulta [Atuendos y vestuario](/novelworks-docs/es/writing/outfits/).

| Palabra para | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| Un atuendo | `outfit` | `tenue` | `atuendo` | `roupa` | `服装` | `наряд` | `衣装` |
| El primer atuendo | `default` | `de départ` | `inicial` | `inicial` | `默认` | `начальный` | `最初` |

## Texto enriquecido

Dentro de una línea de diálogo, las etiquetas entre llaves cambian las palabras que quedan entre ellas, por ejemplo `{b}word{/b}` o `{color=1}word{/color}`. Consulta [Dar estilo a tu texto](/novelworks-docs/es/writing/rich-text/). Como las palabras clave, las etiquetas se escriben en el idioma de tu editor y se leen en los siete.

| Etiqueta para | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| Negrita | `b` | `g` | `n` | `neg` | `粗` | `ж` | `太` |
| Cursiva | `i` | `i` | `c` | `ita` | `斜` | `к` | `斜` |
| Color | `color` | `couleur` | `color` | `cor` | `颜色` | `цвет` | `色` |
| Grande | `big` | `grand` | `grande` | `maior` | `大` | `крупно` | `大` |
| Pequeño | `small` | `petit` | `pequeno` | `menor` | `小` | `мелко` | `小` |
| Tiembla | `shake` | `tremble` | `tiembla` | `treme` | `抖动` | `дрожь` | `震え` |
| Ola | `wave` | `vague` | `ola` | `onda` | `波浪` | `волна` | `波` |
| Pausa | `pause` | `pause` | `pausa` | `pausa` | `停顿` | `пауза` | `ポーズ` |

- Un color es un número del 1 al 5 (los [colores de las palabras](/novelworks-docs/es/game-ui/dialogue-box/)) o un código como `#ff8800`.
- `{pause}` espera medio segundo. `{pause=2}` espera 2 segundos, de 0.1 a 5.
- El nombre de una variable entre llaves, como `{Affection}`, muestra su valor.
- Para escribir una llave real, teclea `{{`.

## Los símbolos

Son iguales en todos los idiomas: `?` (la pregunta de una elección), `-` (una opción), `->` (un salto o un destino), `+` y `=` (un cambio bajo una opción), `//` (una nota), `>` (una línea que se deja tal como está), `#` (una escena), `:` (después de un comando) y `x` o `×` (una cantidad).

Las comparaciones usan `=` (o `==`), `!=` (o `≠`), `>`, `>=` (o `≥`), `<` y `<=` (o `≤`).

## Un personaje con el nombre de una palabra clave

Si un personaje se llama, por ejemplo, «End», una línea `End : Hello` es una línea de diálogo, y el editor te avisa de que el comando no se puede usar. Escribe un comando entre corchetes para que sea un comando: `[end : Good ending]`. En todos los demás casos los corchetes son opcionales.

## Dónde aprender el formato

Las líneas en sí se explican en [Modo Guion: todas las líneas](/novelworks-docs/es/writing/script-mode-lines/) y [Modo Guion: condiciones y elecciones](/novelworks-docs/es/writing/script-mode-conditions/).
