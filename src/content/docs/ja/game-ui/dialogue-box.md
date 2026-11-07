---
title: ダイアログボックス
description: "名前とセリフが表示される場所です。位置、サイズ、背景、テキスト、アバターを設定します。"
---

「{ui.gameUI.dialogueBox}」は、話している人の名前とセリフを表示するボックスです。サイズと位置は画面に対するパーセント(主に高さに対する割合)で決まるので、どんな解像度でも見た目が保たれます。

## 位置とサイズ

- 「{ui.gameUIInspector.position}」:{ui.gameUIInspector.bottom}(初期設定)、{ui.gameUIInspector.top}、{ui.gameUIInspector.left}、{ui.gameUIInspector.right}、{ui.gameUIInspector.center}から選びます。選ぶと、幅と高さもちょうどよい初期サイズになります。上と下では横長の帯、左と右では縦長のパネル(画面の約3分の1)、中央では真ん中のボックスになります。
- 「{ui.gameUIInspector.margin}」:画面の端との間隔です(0〜20 %、初期設定は3.5)。
- 「{ui.gameUIInspector.width}」と「{ui.gameUIInspector.height}」:10〜100 %です。位置を選んだあとで調整できます。

## 背景

「{ui.gameUIInspector.color}」または「{ui.gameUIInspector.image}」を選びます。

- 「{ui.gameUIInspector.color}」:色と「{ui.gameUIInspector.opacity}」(0〜100 %、初期設定は80)を決めます。この色は、選択肢のボタン、ポーズメニュー、そのほかのパネル(「{tx.gameUIInspector.sameAsTheDialogueBox}」)、そして名前のタブの初期設定の色にもなります。ボックス自体に画像を使っている場合も同じです。そのときは色と不透明度はボックスには表示されませんが、ボタンやパネルの色には使われます。
- 「{ui.gameUIInspector.image}」:どんな画像でも使えます。透明な部分は透明のままなので、吹き出しや巻物など、好きな形にできます。ボックスへの合わせ方を選びます。
  - 「{ui.gameUIInspector.stretch}」:ボックス全体に広げます(画像がつぶれて見えることがあります)。
  - 「{ui.gameUIInspector.fit}」:形を保ったまま、画像全体を表示します。
  - 「{ui.gameUIInspector.slice}」:四隅はそのままのサイズで、辺と中央が伸びます。「{ui.gameUIInspector.cornerSize}」(画像に対する %)を設定します。初期設定では、角は画像の元のサイズで表示されます。チェックを外すと「{ui.gameUIInspector.cornerDisplaySize}」を設定でき、大きな高解像度のフレームに便利です。

## テキストと名前

- 「{ui.gameUIInspector.textColor}」:初期設定は「{tx.gameUIInspector.sameAsTheTextColor}」です。
- 「{ui.gameUIInspector.nameColor}」:「{ui.gameUIInspector.characterColors}」(各キャラクターの[名前の色](/novelworks-docs/ja/writing/characters/)、初期設定)または「{ui.gameUIInspector.oneColor}」(全員に同じ「{ui.gameUIInspector.colorOfEveryName}」)を選びます。
- 「{ui.gameUIInspector.textPadding}」:ボックスの端とテキストの間の余白です(0〜15 %、初期設定は4)。
- 「{ui.gameUIInspector.speakerName}」:「{ui.gameUIInspector.insideTheBox}」(初期設定)または「{ui.gameUIInspector.tabAbove}」(ボックスの上のタブ)から選びます。

## アバター

アバターを持つキャラクターが話すとき、名前の横にアバターが表示されます。アバターは[キャラクタータブ](/novelworks-docs/ja/writing/characters/)で設定します。

- 「{ui.gameUIInspector.side}」:左(初期設定)または右です。
- 「{ui.gameUIInspector.size}」:画面の高さの5〜60 %です(初期設定は20)。ボックスより高くなることはありません。

## 確認する

プレビューの上にある「{ui.gameUIMode.longTextAvatar}」を使うと、長いセリフとアバター付きのキャラクターを確認できます。
