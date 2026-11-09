---
title: クレジット
description: ゲームに流れるクレジットを追加します。タイトル画面、エンディングの後、またはその両方に表示できます。
---

「{ui.gameUI.credits}」は、ゲームに流れるクレジットを追加します。「{ui.topBar.gameUI}」に移動し、画面の一覧から「{ui.gameUI.credits}」を選びます。

![ゲームUIのクレジット画面。スイッチ、自分で書いた行、プレビューがあります。](/novelworks-docs/screenshots/game-ui-credits.png)

新しいゲームでは、クレジットはオフになっています。「{ui.credits.enabled}」をオンにして始めます。

## 表示される場所

「{ui.credits.where}」の下に、別々に働く2つのスイッチがあります。最初はどちらもオンです。

- 「{ui.credits.onTitleScreen}」は、タイトル画面に「{rt.game.credits}」ボタンを追加します。
- 「{ui.credits.afterEnding}」は、プレイヤーがエンディングを離れるときにクレジットを流します。[エンディングのカット](/novelworks-docs/ja/branching/endings/)と[「{ui.gameUI.theEnd}」画面](/novelworks-docs/ja/game-ui/ending-screen/)のどちらでも同じです。そのあとタイトル画面に戻ります。

## 書く内容

クレジットは、[プロジェクト設定](/novelworks-docs/ja/getting-started/editor-settings/)から取得したゲームのタイトルと作者から始まります。

続いて「{ui.credits.lines}」が表示されます。「{ui.credits.addLine}」をクリックして、次の項目を入力します。

- 「{ui.credits.role}」：たとえば「イラスト」。
- 「{ui.credits.names}」：1行に1人の名前。

行は30行まで追加できます。矢印で順番を変えられます。空のままの行は無視されます。

「{ui.credits.madeWith}」は最初はオンです。オフにできます。

## 見た目

「{ui.gameUIInspector.backgroundColor}」、「{ui.gameUIInspector.textColor}」、「{ui.gameUIInspector.buttonStyle}」を設定できます。「{ui.gameUIInspector.resetToDefault}」は、見た目だけでなくページ全体を初期状態に戻します。書いた行は削除され、クレジットはオフになります。NovelWorks は先に確認します。「{ui.topBar.undo}」で元に戻せます。

## ゲームでは

クレジットは自動で上へ流れ、最後の行が画面に残った状態で止まります。「{rt.credits.back}」で閉じます。`Esc`、`Enter`、`Space` でも閉じられます。

プレイヤーがシステムで動きの軽減を求めている場合は、何も動きません。一覧全体が表示され、スクロールできます。エディターのプレビューも同じです。
