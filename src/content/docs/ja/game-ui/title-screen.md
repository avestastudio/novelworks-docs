---
title: タイトル画面
description: "ゲームの最初の画面です。背景、ロゴ、メニューを設定します。"
---

「{ui.gameUI.titleScreen}」は、プレイヤーが最初に見る画面です(任意の[イントロ](/novelworks-docs/ja/game-ui/intro/)と[コンテンツに関する警告](/novelworks-docs/ja/game-ui/content-warning/)のあとに表示されます)。

## テンプレート

「{ui.templates.heading}」の下にある4枚のカードで、用意された見た目を選べます。「{ui.templates.title.classic}」（新しいプロジェクトの見た目）、「{ui.templates.title.darkNight}」、「{ui.templates.title.soft}」、「{ui.templates.title.minimal}」です。クリックで変わるのは、この画面の背景色とボタンのスタイルだけです。画像、フォント、文字の色はそのままです。「{ui.topBar.undo}」を1回行うと、元の状態に戻ります。

現在のテンプレートのカードは強調表示されます。この2つの設定のどちらかを変えると、どのカードも強調表示されなくなります。

## 背景

「{ui.gameUIInspector.color}」または「{ui.gameUIInspector.image}」を選びます。

- 「{ui.gameUIInspector.color}」:初期設定はとても暗い青です。「上部がメインカラーで淡く光ります。」ゲームが、[メインカラー](/novelworks-docs/ja/game-ui/fonts-and-colors/)のやわらかい光をその上に描きます。
- 「{ui.gameUIInspector.image}」:背景、CG、UI画像のどれかを選びます。選ぶまでは、色が表示されます。

## ロゴ

「{ui.gameUIInspector.logoImage}」:どんな画像でも使えます。画面の上のほうに、縦横比を保って表示されます。ロゴがない場合、ゲームは**ゲームのタイトル**([プロジェクト設定](/novelworks-docs/ja/getting-started/editor-settings/)で決めたもの)を表示します。タイトルが空のときは「{tx.export.untitled}」と表示します。

## 音楽

「{ui.sound.music}」の下の「{ui.sound.chooseMusic}」で、種類が音楽の曲を選ぶか、読み込みます。設定すると、「{ui.sound.volume}」のスライダーと、音楽を外す X が表示されます。音楽はイントロのあとに始まります。ストーリーが始まると、カットの音楽に切り替わります。[サウンドと音楽](/novelworks-docs/ja/writing/sound/)を見てください。

ブラウザは、プレイヤーが最初にクリックするかキーを押すまで音を出すことを許可しません。そのため、Web ゲームでは、そのときに音楽が始まります。

## メニュー

変えられるのは「{ui.gameUIInspector.buttonStyle}」だけです。ボタンとその文言は固定です。

- 「{rt.game.continue}」:セーブがあるときだけ表示され、最新のセーブを読み込みます。
- {rt.game.newGame}。
- 「{rt.game.load}」:セーブできるときに表示されます。
- 「{rt.game.chapters}」:ゲームにチャプターが1つ以上あるときだけ表示されます。[チャプター](/novelworks-docs/ja/game-ui/chapters/)を見てください。
- 「{rt.game.options}」。
- 「{rt.game.credits}」:クレジットとそのボタンをオンにしているときだけ表示されます。[クレジット](/novelworks-docs/ja/game-ui/credits/)を見てください。
- {rt.game.quit}:終了する手段のある環境(ブラウザ以外)でだけ表示されます。

これらのボタンの文言は、プロジェクトの[ゲームの言語](/novelworks-docs/ja/getting-started/editor-settings/)に従います。
