---
title: Sintaxe do roteiro em 7 idiomas
description: As palavras do formato de Roteiro em cada idioma do editor, e o que significam.
---

O [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/) lê um roteiro com as palavras de **todos os idiomas do editor ao mesmo tempo**, mais algumas formas curtas em inglês. Assim, um roteiro escrito com palavras em francês funciona em um editor em inglês, e vice-versa. Quando o NovelWorks **escreve** um roteiro (no modo Roteiro, ou em **{ui.native.menu.file} → Exportar o roteiro…**), ele usa as palavras do idioma atual do seu editor.

Letras maiúsculas, acentos e espaços extras não importam quando uma palavra-chave é lida: `Decor` é lido como `décor`.

## As palavras

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

Sempre entendidos, em qualquer idioma: `bg` para a palavra de cenário, `centre` para centro, `take` para remover, `ending` para fim, `yes` para verdadeiro e `no` para falso.

Algumas dessas palavras têm várias partes, como "à gauche": elas são lidas como palavras inteiras.

## Os símbolos

São os mesmos em todos os idiomas: `?` (a pergunta de uma escolha), `-` (uma opção), `->` (um salto ou um destino), `+` e `=` (uma mudança sob uma opção), `//` (uma nota), `>` (uma linha mantida como escrita), `#` (uma cena), `:` (depois de um comando) e `x` ou `×` (uma quantidade).

As comparações usam `=` (ou `==`), `!=` (ou `≠`), `>`, `>=` (ou `≥`), `<` e `<=` (ou `≤`).

## Um personagem com o nome de uma palavra-chave

Se um personagem se chama, por exemplo, "Fim", uma linha `End : Hello` é uma linha de diálogo, e o editor avisa que o comando não pode ser usado. Escreva o comando entre colchetes para que ele seja um comando: `[end : Good ending]`. Os colchetes são opcionais em todos os outros casos.

## Onde aprender o formato

As linhas em si são explicadas em [Modo Roteiro: todas as linhas](/novelworks-docs/pt-br/writing/script-mode-lines/) e [Modo Roteiro: condições e escolhas](/novelworks-docs/pt-br/writing/script-mode-conditions/).
