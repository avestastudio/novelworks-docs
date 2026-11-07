---
title: タイトル画面
description: "ゲームの最初の画面です。背景、ロゴ、メニューを設定します。"
---

「{ui.gameUI.titleScreen}」は、プレイヤーが最初に見る画面です(任意の[イントロ](/novelworks-docs/ja/game-ui/intro/)と[コンテンツに関する警告](/novelworks-docs/ja/game-ui/content-warning/)のあとに表示されます)。

## 背景

「{ui.gameUIInspector.color}」または「{ui.gameUIInspector.image}」を選びます。

- 「{ui.gameUIInspector.color}」:初期設定はとても暗い青です。「上部がメインカラーで淡く光ります。」ゲームが、[メインカラー](/novelworks-docs/ja/game-ui/fonts-and-colors/)のやわらかい光をその上に描きます。
- 「{ui.gameUIInspector.image}」:背景、CG、UI画像のどれかを選びます。選ぶまでは、色が表示されます。

## ロゴ

「{ui.gameUIInspector.logoImage}」:どんな画像でも使えます。画面の上のほうに、縦横比を保って表示されます。ロゴがない場合、ゲームは**ゲームのタイトル**([プロジェクト設定](/novelworks-docs/ja/getting-started/editor-settings/)で決めたもの)を表示します。タイトルが空のときは「{tx.export.untitled}」と表示します。

## メニュー

変えられるのは「{ui.gameUIInspector.buttonStyle}」だけです。ボタンとその文言は固定です。

- 「{rt.game.continue}」:セーブがあるときだけ表示され、最新のセーブを読み込みます。
- {rt.game.newGame}。
- 「{rt.game.load}」:セーブできるときに表示されます。
- 「{rt.game.options}」。
- {rt.game.quit}:終了する手段のある環境(ブラウザ以外)でだけ表示されます。

これらのボタンの文言は、プロジェクトの[ゲームの言語](/novelworks-docs/ja/getting-started/editor-settings/)に従います。
