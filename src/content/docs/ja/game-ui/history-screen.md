---
title: 履歴画面
description: プレイヤーがすでに読んだセリフの一覧と、その見た目の変え方です。
---

「{ui.gameUI.history}」画面には「読んだセリフ(話者名は専用の色で表示)と、選んだ選択肢」が表示されます。

## 変更できること

「{ui.gameUIInspector.screen}」の下:

- 「{ui.gameUIInspector.backgroundColor}」:初期設定はタイトル画面の背景色で、少し透けているので、ストーリーがうっすら見えます。
- 「{ui.gameUIInspector.textColor}」:初期設定は「{tx.gameUIInspector.sameAsTheTextColor}」です。
- 「{ui.gameUIInspector.buttonStyle}」:「戻る」ボタンのスタイルです。

## プレイヤーの使い方

- **マウスホイール(上にスクロール)**、**H** キー、[ポーズメニュー](/novelworks-docs/ja/game-ui/pause-menu/)の「{rt.game.history}」ボタン、または(表示している場合は)[クイックメニュー](/novelworks-docs/ja/game-ui/quick-menu/)の履歴ボタンで開きます。
- **Esc**、**H**、または「{rt.historyScreen.back}」ボタンで閉じます。タッチスクリーンでは、ドラッグでスクロールし、「戻る」をタップします。
- ストーリーが表示されているときだけ使えます。タイトル画面、ポーズ中、ほかの画面が開いているときは使えません。
- セリフ、選択肢の質問、探索エリアで表示された文、そしてプレイヤーが選んだ選択肢(「選択: …」)が並びます。最新の**200**件を保持し、セーブのたびに一緒に保存されます。まだ何もないときは「{tx.historyScreen.nothingHasBeenSaidYet}」と表示されます。

[履歴](/novelworks-docs/ja/player/history/)も参照してください。
