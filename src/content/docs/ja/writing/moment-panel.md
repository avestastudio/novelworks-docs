---
title: カットパネル
description: カットのテキスト、画像、エフェクト、サウンドの各タブ、タイムラインの下のボタン、ゲーム画面の上のツールを説明します。
---

タイムラインでカットを選ぶと、右側のパネルに設定が4つのタブで表示されます。ゲーム画面のキャラクターをクリックすると、パネルにはそのキャラクターの設定が表示されます。「{ui.stageCharacterInspector.backToTheMoment}」でタブに戻ります。

カットに問題があるときは、タブの上のボックスに内容が表示されます。

## 4つのタブ

| タブ | 設定する内容 |
|---|---|
| {ui.inspectorTabs.text} | 読まれるもの：誰が何を話すか、または選択肢や条件など、ほかの種類のカットの設定。自分用のメモ。 |
| {ui.inspectorTabs.image} | 見えるもの：背景、雰囲気、舞台上のキャラクター。 |
| {ui.inspectorTabs.effects} | 動き：カメラとエフェクト。 |
| {ui.sound.tab} | 聞こえるもの：音楽、環境音、効果音、セリフのボイス。 |

タブの小さな点は、そのタブに何か設定されていることを示します。

- 「{ui.inspectorTabs.effects}」には、このカットにカメラ、前景、パーティクル、エフェクトのどれかがあるときに点が付きます。カメラ、前景、パーティクルは次のカットへ引き継がれるので、前のカットの設定で点が付くこともあります。
- 「{ui.sound.tab}」には、このカット自身にサウンドの設定があるときに点が付きます。
- 「{ui.inspectorTabs.text}」と「{ui.inspectorTabs.image}」には、点は付きません。

## テキスト

![セリフのカットのテキストタブ。話し手、セリフ、挿入ボタン、メモがあります。](/novelworks-docs/screenshots/moment-text-tab.png)

セリフのカットには、「{ui.momentInspector.speaker}」、「{ui.momentInspector.text}」、「{ui.richText.insert}」のボタンがあります。[テキストの装飾](/novelworks-docs/ja/writing/rich-text/)を見てください。

ほかの種類のカットでは、タブの上部にその種類の設定があります。

ビジュアル表示では、続いてカットの行き先が表示され、シーンの最初のカットでは、そこへつながるものも表示されます。その下に「{ui.momentInspector.note}」と「{ui.momentInspector.script}」があります。後者には、カットが[スクリプトモード](/novelworks-docs/ja/writing/script-mode/)でどう書かれるかが表示されます。

## 画像

![画像タブ。変更の適用範囲、背景、雰囲気のタイル、舞台上のキャラクターがあります。](/novelworks-docs/screenshots/moment-image-tab.png)

上から順に、次の項目があります。

- 「{ui.stage.scopeLabel}」：「{ui.stage.scopeFollowing}」または「{ui.stage.scopeOnlyHere}」。[ステージ](/novelworks-docs/ja/concepts/stage/)を見てください。
- 「{ui.momentInspector.background}」：[シーンの演出](/novelworks-docs/ja/writing/staging/)を見てください。
- 「{ui.ambience.title}」：[雰囲気とアニメーション背景](/novelworks-docs/ja/writing/ambience-and-animated-backgrounds/)を見てください。
- 「{ui.momentInspector.onStage}」：舞台上のキャラクターと、その表情や位置。

## エフェクト

![エフェクトタブ。プレイヤーに見える画面の小さなプレビューと、カメラとエフェクトを開くボタンがあります。](/novelworks-docs/screenshots/moment-effects-tab.png)

タブの最初には、同じ「{ui.stage.scopeLabel}」の設定があります。続いて次の項目があります。

- 「{ui.camera.title}」：プレイヤーに見える画面の小さなプレビューと、「{ui.camera.open}」。[カメラ](/novelworks-docs/ja/writing/camera/)を見てください。
- 「{ui.effects.title}」：このカットのエフェクトと、「{ui.effects.open}」。[エフェクト](/novelworks-docs/ja/writing/effects/)を見てください。

## サウンド

このタブは[サウンドと音楽](/novelworks-docs/ja/writing/sound/)で説明しています。

## タイムラインの下

- プラス記号の付いた「{ui.moments.dialogue}」ボタンは、ワンクリックで、選んだカットのあとにセリフを1行追加します。
- 「{ui.timeline.addOther}」は、ほかの種類のカットの一覧を開きます。それぞれに、何のためのカットかを説明する文が付いています。そのうち2つは、対応する[機能](/novelworks-docs/ja/features/features-panel/)がオンのときだけ表示されます。「{ui.moments.item}」（インベントリ）と「{ui.moments.showMap}」（マップ）です。
- その隣の2つのアイコンボタンは、選んだカットを複製、削除します。カットを右クリックして「{ui.contextMenus.duplicate}」や「{ui.contextMenus.delete}」を選ぶこともできます。

## ゲーム画面の上

ゲーム画面の上のバーにあるものは少しだけです。

- 背景ボタンには現在の背景の名前が表示され、クリックするとピッカーが開きます。
- 「{ui.stageControls.character}」は、キャラクターを舞台に立たせます。
- 探索のカットでは、エリアを描くツールがあります。
- 右側の「{ui.topBar.visual}」と「{ui.topBar.script}」で、ゲーム画面とシーンのテキストを切り替えます。

背景ボタンや「{ui.stageControls.character}」をクリックすると、パネルも「{ui.inspectorTabs.image}」に切り替わります。

## キャラクターの上のバー

ゲーム画面でキャラクターを選ぶと、その上に小さなバーが現れます。バーには「{ui.stageCharacterInspector.expression}」があり、キャラクターにほかの衣装があるときは「{ui.stageControls.outfit}」もあります。

そのほかはすべて右側のパネルにあります。「{ui.stageCharacterInspector.position}」、大きさ、反転、「{ui.stageCharacterInspector.order}」、「{ui.stageCharacterInspector.removeFromStage}」です。
