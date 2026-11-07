---
title: ゲームUIの概要
description: 画面ごとにゲームの見た目を変えます。ライブプレビューで確認できます。
---

「{ui.topBar.gameUI}」モードでは、ゲームの見た目を変えられます。フォントと色、タイトル画面、ダイアログボックス、選択肢のボタン、メニュー、小さなメッセージが対象です。上部バーで切り替えるか、**Cmd+5** / **Ctrl+5** を押します。

![ゲームUIモード。画面の一覧、ライブプレビュー、ダイアログボックスの設定。](/novelworks-docs/screenshots/game-ui-dialogue.png)

## ウィンドウの3つの部分

- **左:画面の一覧。** クリックすると、その画面を編集できます。
- **中央:プレビュー。** 設定を反映した実際のゲームの画面です。小さなサンプル(最初の背景と最初のキャラクター、またはサンプルのキャラクター)で表示されます。操作はできません。この設定でゲームを試すには「{ui.topBar.play}」ボタンを押してください。その旨がプレビューの下にも書かれています。
- **右:画面の設定。** どの画面にも、最後に「{ui.gameUIInspector.resetToDefault}」ボタンがあります。

## 画面の一覧

| 画面 | 内容 | ページ |
|---|---|---|
| {ui.gameUI.fontsColors} | すべての画面で使うフォントと色です。 | [フォントとカラー](/novelworks-docs/ja/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | タイトル画面の前に出す、スタジオのロゴなどの画像です。 | [イントロ](/novelworks-docs/ja/game-ui/intro/) |
| {ui.gameUI.contentWarning} | タイトル画面の前に、センシティブな内容についてプレイヤーに知らせます。 | [コンテンツに関する警告](/novelworks-docs/ja/game-ui/content-warning/) |
| {ui.gameUI.titleScreen} | ゲームの最初の画面です。 | [タイトル画面](/novelworks-docs/ja/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | 名前とセリフが表示される場所です。 | [ダイアログボックス](/novelworks-docs/ja/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | 選択肢のボタンです。 | [選択肢](/novelworks-docs/ja/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | 右クリックまたは Esc で開きます。 | [ポーズメニュー](/novelworks-docs/ja/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | セーブ画面とロード画面です。 | [セーブ・ロード画面](/novelworks-docs/ja/game-ui/save-load-screen/) |
| {ui.gameUI.history} | すでに読んだセリフの一覧です。 | [履歴画面](/novelworks-docs/ja/game-ui/history-screen/) |
| {ui.gameUI.options} | プレイヤーが文字サイズ、速度、フォント、コントラストを選ぶ画面です。 | [プレイヤーオプション](/novelworks-docs/ja/game-ui/options/) |
| {ui.quickMenu.title} | ストーリー上に表示される読み進めの操作です。 | [クイックメニュー](/novelworks-docs/ja/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | 物語が終わったときに表示されます。 | [終了画面](/novelworks-docs/ja/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | そのボタンとアイテムのパネルです(インベントリ機能)。 | [インベントリ画面](/novelworks-docs/ja/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | マップを開くボタンです(マップ機能)。 | [マップボタン](/novelworks-docs/ja/game-ui/map-button/) |
| {ui.gameUI.notices} | 「入手しました: 鍵」のような短いメッセージです。 | [通知](/novelworks-docs/ja/game-ui/notifications/) |

## 長いテキストとアバター

「フォントとカラー」、ダイアログボックス、選択肢、ポーズメニューでは、プレビューの上にある「{ui.gameUIMode.longTextAvatar}」ボタンを押すと、長いセリフとアバター付きのキャラクターが表示されます。すべてが収まっているか確認できます。

## どこでも同じ設定

- **色。** 色見本をクリックするとカラーピッカーが開きます。ボックスにはコード(`#rgb` または `#rrggbb`)を入力できます。色が「〜と同じ」(たとえば「{tx.gameUIInspector.sameAsTheTextColor}」)のときは、何も保存されず、もう一方の色に従います。色を自分で選ぶと、横に小さな丸い矢印が出て、クリックすると「〜と同じ」に戻ります。
- **ボタンスタイル。** ドロップダウンには、「{ui.gameUIInspector.sameAsFontsColors}」、「{ui.gameUIInspector.pill}」、「{ui.gameUIInspector.rounded}」、「{ui.gameUIInspector.square}」、「{ui.gameUIInspector.text}」(ボックスなし、文字だけ)があります。「{tx.gameUIInspector.sameAsFontsColors}」は全体のスタイルに従います。
- **スライダー**は、値を単位つきで表示します。たいていは % です。パーセントは画面に対する割合なので、どんなサイズでもデザインが崩れません。
- **画像。** 画像の欄にはサムネイルと、「{ui.gameUIInspector.choose_c7f937}」または「{ui.gameUIInspector.change}」ボタン、削除するための X が表示されます。たいていは、手持ちの素材から選ぶか、その場で新しい画像を読み込めます。(タイトル画面の背景には、背景、CG、UI画像だけを選べます。)画像を削除した場合、ゲームは単色またはテキストの表示に戻ります。
- **「{ui.gameUIInspector.resetToDefault}」。** 画面の最後にあるボタンです。確認のあと、**その画面だけ**を新しいゲームの状態に戻します。ほかの画面は変わりません。

## 取り消し

ゲームUIの変更はすべて取り消せます。ひとつの欄での入力、スライダーのドラッグ、色の選択は、それぞれ1ステップです。

## 保存されるもの

見た目は、ほかの内容と一緒にプロジェクトに保存されます。プレイヤー自身の選択(文字サイズ、ディスレクシア対応フォント、ハイコントラスト)は、あなたのデザインより優先され、そのプレイヤーにだけ適用されます。[オプションとアクセシビリティ](/novelworks-docs/ja/player/options-and-accessibility/)を参照してください。
