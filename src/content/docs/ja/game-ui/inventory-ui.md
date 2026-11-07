---
title: インベントリ画面
description: インベントリのボタンとアイテムのパネルです。
---

「{ui.gameUI.inventory}」画面は、プレイヤーが持ち物を開くためのボタンと、それを一覧するパネルです。[インベントリ機能](/novelworks-docs/ja/features/inventory/)が必要です。機能がオフのときは、このページにその旨が表示され、機能を開くボタンが出ます。

## ボタン

- 「{ui.gameUIInspector.label}」:ボタンの文字、パネルのタイトル、ポーズメニューの項目名です。初期設定は「インベントリ」です。
- 「{ui.gameUIInspector.cornerOfTheScreen}」:左上、右上(初期設定)、左下、右下から選びます。
- 「{ui.gameUIInspector.buttonStyle}」:初期設定は「{tx.gameUIInspector.sameAsFontsColors}」です。

ボタンは、タイトル画面、終了画面、ポーズ中には表示されません。

## パネルとボタンの色

この2つの色は、**パネルとボタンの両方**に使われます。

- 「{ui.gameUIInspector.panelColor}」:初期設定は「{tx.gameUIInspector.sameAsTheDialogueBox}」です(ボタンスタイルが「{tx.gameUIInspector.text}」のときは、ボタンに背景はありません)。
- 「{ui.gameUIInspector.textColor}」:初期設定は「{tx.gameUIInspector.sameAsTheTextColor}」です。

## プレイヤーが使えるもの

プレイヤーは、ボタン、ポーズメニュー、または **I** キーで開きます。ゲームの中央に表示されるパネルで、持っているアイテムがグリッドで並びます。画像と名前があり、積み重ねられるアイテムには「×3」のような個数が付きます。アイテムを選ぶと、その説明(説明がなければ名前)が表示されます。空のときは「まだ何もありません。」と表示されます。Esc、**I**、×ボタン、またはパネルの外のクリックで閉じます。開いている間、ストーリーは止まります。
