---
title: セーブ・ロード画面
description: "セーブ画面とロード画面です。スロット、すばやいセーブ、自動セーブ、見た目を設定します。"
---

「{ui.gameUI.saveLoad}」画面は、タイトル画面とポーズメニューから開きます。

## 変更できること

「{ui.gameUIInspector.screen}」の下:

- 「{ui.gameUIInspector.backgroundColor}」:初期設定はタイトル画面の色です。
- 「{ui.gameUIInspector.textColor}」:初期設定は「{tx.gameUIInspector.sameAsTheTextColor}」です。
- 「{ui.gameUIInspector.buttonStyle}」:「戻る」ボタンのスタイルです。(「{tx.savesScreen.overwrite}」や「{tx.savesScreen.delete}」などの確認の質問には、[ポーズメニュー](/novelworks-docs/ja/game-ui/pause-menu/)のボタンスタイルが使われます。)

「{ui.gameUIInspector.slots}」の下:

- 「{ui.gameUIInspector.slotColor}」:各スロットのタイルの色です(初期設定は「{tx.gameUIInspector.sameAsTheDialogueBox}」)。

## プレイヤーが使えるもの

- **12個のセーブスロット**(3列のグリッドで表示)、**すばやいセーブ**、そして新しいシーンの始まりごとの**自動セーブ**です。
- 各スロットには、そのカットの小さな画像(背景、小道具、キャラクター。セリフは含まない)、シーン名、日付、プレイ時間が表示されます。空のスロットには「空き」と表示されます。
- 「{rt.game.load}」画面には、自動セーブとすばやいセーブが先に、続いてスロット1〜12が並びます。「{rt.game.save}」画面には、スロット1〜12が並びます。
- スロットに上書きセーブするときは確認があります(「{tx.savesScreen.overwrite}」)。スロットを削除するとき(使用中のスロットの ×)も確認があります。ゲーム中にセーブを読み込むときは「{tx.game.loadThisSaveUnsavedProgressWillBe}」と確認されます。
- キーボード:矢印キーでスロット間を移動し、**Enter** または **Space** で選び、`Delete` または `Backspace` で削除し、**Home** と **End** で一覧の最初と最後のスロットに移動し、**Esc** で戻ります。

## プレイヤーが見つける場所

- 「{ui.gameUI.titleScreen}」:「{rt.game.continue}」(最新のセーブ。あるときだけ)と「{rt.game.load}」。
- 「{ui.gameUI.pauseMenu}」:「{rt.game.save}」、「{rt.game.load}」、「{rt.game.quickSave}」(**F5**)、「{rt.game.quickLoad}」(**F9**)。クイックロードは、すばやいセーブが作られてから表示されます。
- 「{ui.quickMenu.title}」:同じ4つのボタンです(表示している場合)。

ブラウザがセーブを許可していない場合(プライベートブラウズ、またはサイトデータが無効)は、画面にその旨が表示され、何もセーブできません。[セーブとロード](/novelworks-docs/ja/player/save-and-load/)を参照してください。
