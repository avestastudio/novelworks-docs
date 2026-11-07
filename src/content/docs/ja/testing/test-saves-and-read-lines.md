---
title: プレイモードのツール
description: "プレイ中にゲームの上に表示されるバー: 変数とアイテム、スプラッシュ、やり直し、テスト用セーブ、既読。"
---

エディターでプレイすると、上部のバーにテスト用のツールが並びます。バーのボタンはキーボードのフォーカスを受け取らないので、**Space** と **Enter** は引き続きゲームに届きます。

![プレイモード: 上部のツールバーと、右側の変数とアイテムのパネル。](/novelworks-docs/screenshots/play-bar.png)

| ツール | 働き |
|---|---|
| {ui.playOverlay.playing}と現在位置 | シーンとカットが、常に最新の状態で表示されます。 |
| 「{tx.playOverlay.rightClickGameMenu}」 | 注意書きです。右クリックすると、ゲームのポーズメニューが開きます。 |
| {ui.playOverlay.variablesItems} | 変数とアイテムの現在の値を表示するパネルを、表示または非表示にします（下を見てください）。 |
| {ui.playOverlay.openMap} | プレイヤーがまだ開けない場面でも、今すぐマップを開きます。{rt.game.back}で元の場所に戻ります。ゲームにマップがある場合のみです。 |
| {ui.playOverlay.showSplash} | 書き出したゲームの冒頭に表示される「Made with NovelWorks」画面を、開始のたびと、やり直しのときに表示します。初期設定ではオフです。オンにするとテストがやり直されます。 |
| {ui.playOverlay.restart} | このテストを、タイトル画面から、または開始したカットから、もう一度始めます。状態、履歴、プレイ時間はリセットされます。 |
| {ui.playOverlay.clearTestSaves} | テスト中に作られたセーブ、クイックセーブ、オートセーブを削除します。 |
| {ui.playOverlay.resetReadLines} | どの行を読んだかを忘れさせるので、{ui.quickMenu.button.skip}が再びすべての行で止まります。 |
| {ui.playOverlay.stop} | エディターに戻ります（**Esc**）。 |

## 変数とアイテム

{ui.playOverlay.variablesItems}（インベントリ機能がオフのときは{ui.leftPanel.variables}）を押すと、パネルに次が表示されます。

- {ui.leftPanel.variables}: それぞれの現在の値です。開始時と違う値は強調表示されます。タイトル画面とエンド画面では、「{tx.playOverlay.startingValues}」と表示されます。ここで変数を編集することはできません。選択肢が何を変えるかを確かめるには、プレイして変えます。
- {ui.gameUI.inventory}（インベントリ機能がある場合）: ゲームのすべてのアイテムが並び、**−** と **+** で、テスト中にアイテムを取り上げたり渡したりできます。通知は出ません。重ねられるアイテムは個数が、1つだけのアイテムは「はい」または「いいえ」が表示されます。ゲームが始まる前は、「{tx.playOverlay.startPlayingToGiveOrRemoveItems}」と表示されます。パネルの開閉は、次のテストにも引き継がれます。

## テスト用セーブと既読

セーブ、クイックセーブ、オートセーブ、プレイヤーのオプション（文字サイズ、速度など）、スキップで使う既読の記録は、**プレイモードでのみ**、ゲームごとに専用の保存場所を持ちます。書き出したゲームのセーブとは別で、プロジェクトには含まれません。削除するまで、テストをまたいで残ります。

- {ui.playOverlay.clearTestSaves}は、先に確認が出ます。「書き出したゲームのセーブは別に保持されます。」
- {ui.playOverlay.resetReadLines}は、確認なしですぐに実行されます。

テスターのオプション（文字サイズ、速度など）も同じように保持されますが、削除するボタンはありません。{ui.playOverlay.showSplash}のスイッチは、エディターを閉じるまで有効です。
