---
title: テキストの装飾
description: セリフの言葉を太字にしたり、色を付けたり、大きくしたり、震えさせたりします。ポーズや変数も入れられます。
---

セリフのどの部分にも装飾を付けられます。ゲーム画面か「{ui.inspectorTabs.text}」タブで書くと、ゲームで表示されるとおりの見た目になります。

## 言葉を装飾する

セリフの言葉を選択します。その上に小さなツールバーが現れます。

![選択した言葉の上のツールバー。太字、斜体、色、大きさ、動きがあります。](/novelworks-docs/screenshots/rich-text-toolbar.png)

| 操作 | 内容 |
|---|---|
| {ui.richText.bold}、{ui.richText.italic} | 文字を太く、または斜めにします。`Cmd+B` / `Ctrl+B` と `Cmd+I` / `Ctrl+I` でもできます。 |
| 5つの丸い色 | パレットの色です（下を見てください）。 |
| {ui.richText.customColor} | この選択範囲だけに使う、ほかの色です。 |
| {ui.richText.small}、{ui.richText.big} | 文字を小さく、または大きくします。大きさは一度に1つだけです。 |
| {ui.richText.shake}、{ui.richText.wave} | ゲームの中で文字が震えたり、波打ったりします。動きは一度に1つだけです。 |
| {ui.richText.clear} | 選択範囲の装飾をすべて消します。 |

もう一度クリックすると、その装飾が消えます。

## 5つの色

ツールバーの5つの色は、ゲーム全体で一度だけ設定します。「{ui.topBar.gameUI}」、「{ui.gameUI.dialogueBox}」、「{ui.richText.palette}」の順に開きます。

そこで色を変えると、その色を使っている言葉もすべて変わります。「{ui.richText.customColor}」で選んだ色は、パレットに連動しません。

## ポーズや変数を挿入する

「{ui.inspectorTabs.text}」タブのテキスト欄の下にある「{ui.richText.insert}」の行で、カーソルが最後にあった場所に挿入できます。

「{ui.richText.pause}」は、セリフの途中に短い待ち時間を入れます。テキストの中では小さなラベルとして表示されます。長さは0.5秒です。ラベルをクリックすると、0.1〜5秒の範囲で変更できます。

「{ui.richText.variable}」は、[変数](/novelworks-docs/ja/branching/variables/)の一覧を開きます。テキストの中では、変数の名前が小さなラベルとして表示されます。ゲームでは、プレイヤーにその値が表示されます。はい／いいえの変数は「{rt.game.yes}」または「{rt.game.no}」と表示されます。変数を削除すると、その場所には何も表示されません。

## プレイヤーに見えるもの

- セリフは1文字ずつ表示され、ポーズごとに止まります。
- 最初のクリックでセリフ全体が表示されます。次のクリックで先へ進みます。
- 震える文字や波打つ文字は、セリフが画面にある間ずっと動きます。
- プレイヤーがシステムで動きの軽減を求めている場合、文字は動きません。
- [履歴](/novelworks-docs/ja/player/history/)とスクリーンリーダーには、装飾のない言葉だけが渡されます。

## スクリプトモードでは

[スクリプトモード](/novelworks-docs/ja/writing/script-mode/)では、装飾は言葉を囲むタグとして書きます。

```
Mia : I {b}never{/b} said that.
Mia : It was {color=1}red{/color}, {shake}so red{/shake}.
Mia : Well...{pause} maybe.
Mia : Wait.{pause=2} You have {Affection} points.
```

| タグ | 意味 |
|---|---|
| `{b}` … `{/b}` | 太字 |
| `{i}` … `{/i}` | 斜体 |
| `{color=1}` … `{/color}` | パレットの色（1〜5）。`{color=#ff0000}` のようなコードも使えます。 |
| `{small}` … `{/small}`、`{big}` … `{/big}` | 大きさ |
| `{shake}` … `{/shake}`、`{wave}` … `{/wave}` | 動き |
| `{pause}`、`{pause=2}` | 0.5秒、または指定した秒数のポーズ |
| `{Affection}` | この名前の変数の値 |

`{` そのものを書くには、2回続けて `{{` と入力します。

タグの言葉は、エディターの言語に従います。ほかの言語からコピーしたスクリプトも、そのまま使えます。

## 制限

装飾、ポーズ、変数を使えるのは、セリフだけです。選択肢の項目とエンディングの名前は、装飾のないテキストです。
