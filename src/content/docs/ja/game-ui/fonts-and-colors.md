---
title: フォントとカラー
description: すべての画面で使うフォント、文字色、メインカラー、ボタンスタイルです。
---

「{ui.gameUI.fontsColors}」では、すべての画面で共通の設定を行います。ほかの画面では、その一部を個別に上書きできます。

## テキスト

- 「{ui.gameUIInspector.font}」:4種類のフォントがあり、それぞれ自分のスタイルで表示されます。

| 名前 | スタイル | フォント | ライセンス |
|---|---|---|---|
| {ui.gameUIInspector.fontClean}(初期設定) | モダンなサンセリフ | Inter | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontClassic} | 文学的な雰囲気のセリフ体 | Lora | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontRounded} | やわらかく親しみやすい | Nunito | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontTypewriter} | タイプライター | Courier Prime | SIL Open Font License 1.1 |

  フォントファイルとそのライセンス文は、書き出したすべてのゲームに含まれます。

- 「{ui.gameUIInspector.textColor}」:ゲーム全体の文字色です。初期設定は白です。「{tx.gameUIInspector.sameAsTheTextColor}」となっている画面は、この色に従います。

### 言語とフォント

「{ui.gameUIInspector.fontClean}」、「{ui.gameUIInspector.fontClassic}」、「{ui.gameUIInspector.fontRounded}」は、アクセント付きのラテン文字、キリル文字、ベトナム語に対応しています。ギリシャ文字にも対応しているのは「{ui.gameUIInspector.fontClean}」だけです。「{ui.gameUIInspector.fontTypewriter}」は(アクセント付きの)ラテン文字だけに対応しています。中国語や日本語など、フォントにない文字には、プレイヤーのシステムフォントが使われます(ゲームの言語が日本語のときは、日本語のシステムフォントが優先されます)。

自分のフォントを読み込むことは、まだできません。

プレイヤーオプションでディスレクシア対応フォントをオンにしたプレイヤーには、ここでの選択に関係なく、専用のフォントが使われます。

## キャラクターの登場と退場

「{ui.effects.defaultsTitle}」：ゲーム全体で使う「{ui.effects.defaultEnter}」と「{ui.effects.defaultExit}」を1つずつ選びます。カットにそのキャラクター専用の[エフェクト](/novelworks-docs/ja/writing/effects/)がないときに使われます。初期設定は「{tx.effects.defaultNone}」です。

## 色とボタン

- 「{ui.gameUIInspector.primaryColor}」:「ボタン、ハイライト、「続ける」矢印に使われます。」タイトル画面の光にも使われます。初期設定はピンクです。
- 「{ui.gameUIInspector.buttonStyle}」:「{ui.gameUIInspector.pill}」(完全に丸い形、初期設定)、「{ui.gameUIInspector.rounded}」(やわらかい角)、「{ui.gameUIInspector.square}」(とがった角)、「{ui.gameUIInspector.text}」(ボックスなし、文字だけ)から選びます。「すべてのメニューと選択肢で使われます(画面ごとに個別指定した場合を除く)。」

全体の背景色はありません。背景は画面ごとに設定します。

## プレビュー

このページのプレビューには、最初の背景の上にダイアログボックスが表示されます。長いセリフを確認するには「{ui.gameUIMode.longTextAvatar}」を使ってください。

## リセット

このページの「{ui.gameUIInspector.resetToDefault}」は、このページの設定だけをリセットします。ほかの画面の設定はそのままです。
