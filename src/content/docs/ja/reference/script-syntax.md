---
title: 7 つの言語のスクリプト構文
description: エディターの各言語でのスクリプト形式の言葉と、その意味。
---

[スクリプトモード](/novelworks-docs/ja/writing/script-mode/)は、**エディターのすべての言語の言葉を同時に**使ってスクリプトを読み取ります。さらに、短い英語の書き方もいくつか読み取ります。そのため、フランス語の言葉で書いたスクリプトを英語のエディターで使うことも、その逆もできます。NovelWorks がスクリプトを**書き出す**ときは（スクリプトモード、または **{ui.native.menu.file} → {ui.native.menu.exportScript}**）、現在のエディターの言語の言葉を使います。

大文字・小文字、アクセント記号、余分なスペースは、キーワードを読み取るときには関係ありません。`Decor` は `décor` として読まれます。

## 言葉の一覧

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

どの言語でも常に読み取られるもの：背景の言葉の代わりに `bg`、center の代わりに `centre`、remove の代わりに `take`、end の代わりに `ending`、true の代わりに `yes`、false の代わりに `no`。

「à gauche」のように、いくつかの部分からなる言葉もあります。それらは 1 つの言葉として読み取られます。

## 衣装

衣装を表す言葉は、`show` の行の表情のあとに書きます。`show : Mia happy outfit Uniform left` のように書きます。名前の代わりに「初期」を表す言葉を書くと、キャラクターは最初の衣装に戻ります。`show : Mia outfit default` のように書きます。存在しない衣装には下線が引かれます。[衣装](/novelworks-docs/ja/writing/outfits/)を見てください。

| 意味 | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| 衣装 | `outfit` | `tenue` | `atuendo` | `roupa` | `服装` | `наряд` | `衣装` |
| 最初の衣装 | `default` | `de départ` | `inicial` | `inicial` | `默认` | `начальный` | `最初` |

## リッチテキスト

セリフの中では、波かっこのタグでその間の言葉を変えられます。たとえば `{b}word{/b}` や `{color=1}word{/color}` です。[リッチテキスト](/novelworks-docs/ja/writing/rich-text/)を見てください。キーワードと同じように、タグはエディターの言語で書かれ、7つの言語すべてで読み取られます。

| タグの意味 | English | Français | Español | Português (BR) | 简体中文 | Русский | 日本語 |
|---|---|---|---|---|---|---|---|
| 太字 | `b` | `g` | `n` | `neg` | `粗` | `ж` | `太` |
| 斜体 | `i` | `i` | `c` | `ita` | `斜` | `к` | `斜` |
| 色 | `color` | `couleur` | `color` | `cor` | `颜色` | `цвет` | `色` |
| 大きく | `big` | `grand` | `grande` | `maior` | `大` | `крупно` | `大` |
| 小さく | `small` | `petit` | `pequeno` | `menor` | `小` | `мелко` | `小` |
| 震え | `shake` | `tremble` | `tiembla` | `treme` | `抖动` | `дрожь` | `震え` |
| 波 | `wave` | `vague` | `ola` | `onda` | `波浪` | `волна` | `波` |
| ポーズ | `pause` | `pause` | `pausa` | `pausa` | `停顿` | `пауза` | `ポーズ` |

- 色は、1〜5の番号（[文字の色](/novelworks-docs/ja/game-ui/dialogue-box/)）か、`#ff8800` のようなコードで指定します。
- `{pause}` は0.5秒待ちます。`{pause=2}` は2秒待ちます。0.1〜5秒の範囲で指定できます。
- `{Affection}` のように変数の名前を波かっこで囲むと、その値を表示します。
- 波かっこそのものを書くには、`{{` と入力します。

## 記号

これらは、どの言語でも同じです。`?`（選択肢の質問）、`-`（選択肢）、`->`（ジャンプ、または行き先）、`+` と `=`（選択肢の下の変更）、`//`（メモ）、`>`（書いたとおりに残す行）、`#`（シーン）、`:`（コマンドの後ろ）、`x` または `×`（数量）。

比較には、`=`（または `==`）、`!=`（または `≠`）、`>`、`>=`（または `≥`）、`<`、`<=`（または `≤`）を使います。

## キーワードと同じ名前のキャラクター

たとえばキャラクターの名前が「End」の場合、`End : Hello` という行はセリフとして扱われ、コマンドとしては使えないことをエディターが警告します。コマンドとして書きたいときは、角かっこで囲みます。`[end : Good ending]`。そのほかの場所では、角かっこは付けても付けなくてもかまいません。

## 形式を学ぶには

各行の書き方は、[スクリプトモード：すべての行](/novelworks-docs/ja/writing/script-mode-lines/)と[スクリプトモード：条件と選択肢](/novelworks-docs/ja/writing/script-mode-conditions/)で説明しています。
