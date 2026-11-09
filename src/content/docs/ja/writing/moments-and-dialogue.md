---
title: カットとセリフ
description: セリフを書き、カットを追加し、並べ替え、カットのメニューを使います。
---

カットは、シーンの 1 ステップです。セリフ 1 行、選択肢、ジャンプなどがカットです。このページでは、いちばんよく使う「{ui.moments.dialogue}」カットを説明します。ほかの種類は[シーン、カット、タイムライン](/novelworks-docs/ja/concepts/scenes-moments-timeline/)にあります。

## セリフを書く

ゲーム画面のダイアログボックスをクリックして、入力します。文字はボックスに直接入力します。インスペクターの「{ui.inspectorTabs.text}」タブの「{ui.momentInspector.text}」も使えます。言葉を選択すると書式を設定できます。[リッチテキスト](/novelworks-docs/ja/writing/rich-text/)を見てください。

- **Enter** を押すと **次の行** に進みます。このカットのあとに新しいセリフのカットができ、ステージも話者も同じで、すぐ入力できます。
- **Shift+Enter** を押すと、**同じボックスの中** で改行します。
- 長すぎてボックスに収まらない文章には警告が出ます。**Enter** を押して、新しいカットで続けてください。

## 話している人

文章の上の名札か、「{ui.inspectorTabs.text}」タブの「{ui.momentInspector.speaker}」で、次から選びます。

- 「{ui.stageControls.narrator}」: 話者なしで、文章だけを表示します。
- キャラクター。ステージにいるキャラクターが先に並び、そのあとにほかのキャラクターが並びます。

新しい行は、前の行の話者を引き継ぎます。キャラクターを削除すると、そのキャラクターが話していたセリフはナレーションになります。

## カットを追加する

タイムラインのヘッダー、カードの上にある「{ui.moments.dialogue}」は、**選んだカットのあとに** セリフを 1 行追加します。「{ui.timeline.addOther}」には、ほかの種類が、それぞれを説明する文とともに並びます: {ui.moments.choice}、{ui.moments.condition}、{ui.moments.jump}、{ui.moments.ending}、{ui.moments.exploration}、そして、機能がオンのときは {ui.moments.item} と {ui.moments.showMap}。列の最後にある **+** は、セリフを 1 行追加します。空のシーンでは、「{ui.timeline.writeTheFirstLine}」が同じことをします。

新しいカットは、画面を何も変えません。直前のカットが表示していたものを、そのまま表示します([ステージ](/novelworks-docs/ja/concepts/stage/)を見てください)。

## カットを並べ替える

カードを左右にドラッグします。矢印 **←** と **→** は、選択を前のカットと次のカットに動かします。**Home** と **End** は、最初と最後のカットへ移ります。入力中は **Cmd+[** / **Cmd+]**(**Ctrl+[** / **Ctrl+]**)で同じことができます。

## カードに表示されるもの

カードには、話者の名前(その人の色で)、または「{tx.timeline.narrator}」、あるいはカットの種類(色の帯つき)と、文章の書き出し、隅にその番号が表示されます。次のものも表示されることがあります。

- カットに[メモ](/novelworks-docs/ja/writing/notes/)があると、付箋のアイコン。
- 警告の三角形。ポインターを合わせると、確認が必要な内容が読めます。たとえば、選択肢のない選択肢カット、削除されたシーンへのつながり、前にエンディングやジャンプがあるためプレイヤーには決して見えないカット、などです。
- カットがステージで変えることを示す小さなチップ。カードの下には、ステージにいる人のグラフ。

## カットのメニュー

カードを右クリックします。

| 項目 | できること |
|---|---|
| {ui.contextMenus.insertBefore} | このカットの前に、セリフのカットを追加します。置いた先のカットの話者を引き継ぎ、その前のカットの画面を表示します。 |
| {ui.contextMenus.insertAfter} | 後ろに 1 つ追加します(**Cmd+Enter** / **Ctrl+Enter**)。 |
| {ui.contextMenus.duplicate} | すぐ後ろにカットをコピーします。同じ画面が表示されます(**Cmd+D** / **Ctrl+D**)。 |
| {ui.contextMenus.changeType} | カットを別の種類に変えます。セリフ、選択肢、エンディングの文章は残ります。残せない設定があるときは、NovelWorks が確認します。元に戻すこともできます。 |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | カットのメモを開きます。 |
| {ui.contextMenus.playFromHere} | このカットからプレイします(**Cmd+Shift+P** / **Ctrl+Shift+P**)。 |
| {ui.contextMenus.delete} | カットを削除します。 |

## カットを削除する

タイムラインのヘッダーのごみ箱アイコン、右クリックメニューの「{ui.contextMenus.delete}」、または `Delete` キーを使います。空のセリフ以外は、NovelWorks が確認します。削除したカットがステージで変えていたことは次のカットに引き継がれるので、ほかのカットの表示は変わりません。

## セリフのカットのインスペクター

警告があれば一番上に表示されます。その下に4つのタブがあります。

- 「{ui.inspectorTabs.text}」：「{ui.momentInspector.speaker}」と「{ui.momentInspector.text}」、カットの行き先、「{ui.momentInspector.note}」、そして「{ui.momentInspector.script}」です。これは、このカットが[スクリプトモード](/novelworks-docs/ja/writing/script-mode/)でどう書かれるかを表示するので、コピーできます。
- 「{ui.inspectorTabs.image}」：変更の届く範囲、「{ui.momentInspector.background}」、「{ui.ambience.title}」、「{ui.momentInspector.onStage}」にいる人。
- 「{ui.inspectorTabs.effects}」：[カメラ](/novelworks-docs/ja/writing/camera/)と[エフェクト](/novelworks-docs/ja/writing/effects/)。
- 「{ui.sound.tab}」：[音楽、環境音、効果音、ボイス](/novelworks-docs/ja/writing/sound/)。

[カットパネル](/novelworks-docs/ja/writing/moment-panel/)を見てください。
