---
title: クイックメニュー
description: "ストーリー上に表示される読み進めの操作です。位置、見た目、表示するボタンを設定します。"
---

「{ui.quickMenu.title}」は、「ストーリー上に表示される読み進めの操作」の小さなバーです。プレイヤーはキーの代わりに、このボタンをクリックできます。

![クイックメニューの設定と、ゲーム上部のバーのプレビュー。](/novelworks-docs/screenshots/game-ui-quick-menu.png)

## 表示と配置

- 「{ui.quickMenu.enabled}」:初期設定はオンです。オフにするとバー全体が非表示になります。
- 「{ui.quickMenu.position}」:左上、上中央(初期設定)、右上、左下、下中央、右下から選びます。
- 「{ui.quickMenu.margin}」:端との間隔です。0〜10 %(初期設定は1.5)。

## 外観

- 「{ui.gameUIInspector.buttonStyle}」:初期設定はカプセル型です。
- 「{ui.quickMenu.textSize}」:基本の文字サイズの60〜140 %です(初期設定は80)。
- 「{ui.quickMenu.buttonColor}」:初期設定は半透明の暗い背景です。リンクをクリックすると初期設定に戻ります。
- 「{ui.gameUIInspector.textColor}」:初期設定は「{tx.gameUIInspector.sameAsTheTextColor}」です。

## 表示するボタン

9つのボタンがあり、それぞれにスイッチがあります。**順番は固定**です。表示と非表示は切り替えられますが、並べ替えはできません。

| ボタン | 初期設定 | キー | 動作 |
|---|---|---|---|
| {ui.quickMenu.button.history} | オン | H | 履歴を開きます。 |
| {ui.quickMenu.button.auto} | オン | A | オートモードのオン・オフを切り替えます。 |
| {ui.quickMenu.button.skip} | オン | S | スキップモードのオン・オフを切り替えます。 |
| {ui.quickMenu.button.save} | オフ | | セーブ画面を開きます。 |
| {ui.quickMenu.button.load} | オフ | | ロード画面を開きます。 |
| {ui.quickMenu.button.quickSave} | オフ | F5 | クイックセーブをします。 |
| {ui.quickMenu.button.quickLoad} | オフ | F9 | クイックロードをします(クイックセーブができるまでグレー表示)。 |
| {ui.quickMenu.button.options} | オフ | | プレイヤーオプションを開きます。 |
| {ui.quickMenu.button.menu} | オフ | Esc | ポーズメニューを開きます。 |

{ui.quickMenu.shortcutsHelp}

## バーが表示されるとき

バーは、タイトル画面と終了画面、メニュー、履歴、オプション、セーブ、ロードのどれかが開いているとき、そしてすべてのボタンが非表示のときは、隠れます。「{rt.game.quickLoad}」は、クイックセーブができるまでグレー表示です。オートとスキップは、オンかどうかが表示されます。
