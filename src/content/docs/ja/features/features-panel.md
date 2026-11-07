---
title: 機能ライブラリ
description: "ゲームの追加機能(インベントリとマップ)をオンにしたりオフにしたりします。"
---

ビジュアルノベルの機能には、すべてのゲームに必要とは限らないものがあります。NovelWorks では、{ui.featuresDialog.features} ライブラリからワンクリックでそれらを追加でき、何も失わずにまたオフにできます。

## 開く

- 左パネルの下にある {ui.leftPanel.features} をクリックします。
- または、[プロジェクト設定](/novelworks-docs/ja/getting-started/editor-settings/)の {ui.projectSettings.openFeatures}、もしくはマップワークスペースの下にある {ui.mapMode.features} を使います。
- プロジェクトを作るときは、新規プロジェクトのウインドウにある {ui.newProjectScreen.features} のカードで同じことができます(初期状態ではどれにもチェックは入っていません)。

{ui.featuresDialog.features} ウインドウには「{tx.featuresDialog.addReadyMadePartsToYourGame}」と表示されます。機能ごとに1枚のカードがあり、スイッチと説明がついています。{ui.featuresDialog.done} で閉じます。

![機能ウインドウ。インベントリとマップのカードが表示されています。](/novelworks-docs/screenshots/features-dialog.png)

## 2つの機能

| 機能 | 追加されるもの |
|---|---|
| {ui.shared.features.inventory} | プレイヤーはアイテム(鍵、手紙、コイン、手がかり)を集め、インベントリメニューで確認します。左に {ui.leftPanel.items} タブが現れ、カット、選択肢、条件、エリアでアイテムを渡したり、確認したり、使ったりできます。[インベントリ](/novelworks-docs/ja/features/inventory/)を参照してください。 |
| {ui.shared.features.map} | プレイヤーはマップを開き、行き先を選びます。左に {ui.leftPanel.map} ボタンが現れ、そこで場所を描いてシーンにつなげます。「{tx.moments.showMap}」カットは、ストーリーの途中でマップを開きます。[マップ](/novelworks-docs/ja/features/map/)を参照してください。 |

機能がオンのとき、カードには {ui.featuresDialog.openItems}(インベントリ)、または {ui.mapSettings.editMap} つきのマップ設定(マップ)が表示されます。オフのときは、カードに「オフ」と表示されます。

## 機能をオフにするとどうなるか

- 作ったものは何も削除されません。アイテム、マップの設定、それを使うすべてのカットは残ります。機能をまたオンにすると、すべてが戻ります。
- その機能のタブ、ボタン、カットの種類は、エディターから消えます。
- **マップをオフ**:ゲームにマップボタンがなくなり、「{tx.moments.showMap}」カットは何もしません。
- **インベントリをオフ**:ゲームにインベントリボタン、ポーズメニューの項目、**I** キーがなくなります。アイテムを渡したり確認したりするカット、選択肢、エリアは、ゲームの中で**そのまま動きます**(エディターは警告します)。アイテムを使っているなら、機能をまたオンにしてください。
- その機能を使うカットは残り、またオンにするまで**警告**が表示されます。
- ストーリーでアイテムを使っている場合、NovelWorks は先に確認し({ui.features.turnTheInventoryOff})、動かなくなるものを一覧にします。マップも同様で、「{tx.moments.showMap}」カットがあるときに確認します({ui.features.turnTheMapOff})。
- マップワークスペースにいた場合は、ストーリーモードに戻ります。アイテムのタブにいた場合は、変数のタブに移ります。

ゲームUIでは、インベントリ、マップボタン、通知の画面は一覧に残りますが、機能がオフの間はプレイヤーに表示されないという注記がつきます。

## ゲームのほかの部分

探索(ポイント&クリックのシーン)は、オンにする機能ではありません。探索のカットは常に使えます。[探索](/novelworks-docs/ja/features/exploration/)を参照してください。
