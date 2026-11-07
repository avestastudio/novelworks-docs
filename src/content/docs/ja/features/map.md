---
title: マップ
description: 絵とクリックできる場所でできたマップで、プレイヤーに行き先を選ばせます。
---

{ui.shared.features.map} 機能をオンにすると、プレイヤーはマップを開いて行き先を選べます。マップは、世界の絵に**場所**を置いたものです。それぞれの場所はシーンにつながります。[機能ライブラリ](/novelworks-docs/ja/features/features-panel/)でオンにします。

## マップワークスペースを開く

左パネルの {ui.leftPanel.map}(または機能ライブラリの {ui.mapSettings.editMap})をクリックします。マップワークスペースでは、左に場所の一覧、中央にマップ、右に設定が表示されます。{ui.mapMode.backToStory} でストーリーモードに戻ります。

マップは隠れたシーンとして保存されます。シーンのタブにも、ストーリーマップにも表示されません。

### マップを作る

まだマップがないとき、{ui.mapMode.createYourMap} に「{tx.mapMode.chooseAPictureOfYourWorldThen}」と表示されます。{ui.mapMode.addAMapBackground} をクリックして、背景またはCGを選びます。後から {ui.mapMode.changeBackground} で変更できます。

## 場所を追加する

{ui.mapMode.addLocation} をクリックして、マップ上をドラッグし、場所を描きます。自由な形にしたいときは{ui.explorationCanvas.shape}を選び、角をクリックしてから **Enter** を押します。場所はドラッグして動かし、ハンドルで大きさを変えます。場所を選ぶと、編集できます。

### 場所の設定

- {ui.mapMode.name}:自分用です。
- {ui.mapMode.sceneToPlay}:つながるシーン。シーンを選ぶか、{ui.mapMode.createAScene}(名前を聞かれ、シーンを作ってつなぎます)を選べます。{ui.mapMode.editScene} でそのシーンを開きます。
- {ui.mapMode.returnToMapWhenFinished}:このシーンと、そこからつながるシーンの後で、プレイヤーはマップに戻ります。エンディングのカットは、そのままゲームを終わらせます。
- {ui.mapMode.availability}:
  - {ui.mapMode.availableUnderACondition}:変数またはアイテムの条件です。{ui.mapMode.otherwise} は、{ui.mapMode.hideLocation} か {ui.mapMode.showAsLocked} を選べます。ロックした場所には {ui.mapMode.messageWhenLocked} を書けます(空なら何も起こりません)。
- {ui.mapMode.appearanceAndVisits}:{ui.mapMode.labelOnHover}、{ui.mapMode.highlight}({ui.mapMode.glow}、{ui.mapMode.outline}、{ui.mapMode.none})、そして {ui.mapMode.visitOnlyOnce}(一度訪れた場所は見えたままですが、もう使えません)。
- {ui.mapMode.duplicate} と {ui.mapMode.delete}。

場所は探索のエリアです。ですから、古いプロジェクトから独自の操作を引き継いだ場所は、エリアと同じように編集します([探索](/novelworks-docs/ja/features/exploration/)を参照)。左の一覧には、折りたたみできる「装飾」(マップに置く小物)と {ui.leftPanel.characters} のセクションもあります。設定の下にある「マップを確認」のボックスには、問題が一覧表示されます。

## プレイヤーはいつマップを開けるか

マップの設定(場所を何も選んでいないとき)の {ui.mapMode.mapButtonAvailable}:

| 設定 | 意味 |
|---|---|
| {ui.map.fromTheStart} | プレイヤーは、ゲームの最初から、ボタンでマップを開けます。 |
| {ui.map.afterFirstShown} | ストーリーが最初に「{tx.moments.showMap}」カットに届いた後で、マップボタンが現れます。 |
| {ui.map.storyOnly} | ストーリーの中の「{tx.moments.showMap}」カットだけがマップを開きます。マップボタンは表示されません。 |

### 「{tx.moments.showMap}」カット

シーンに {ui.moments.showMap} カットを追加すると、すぐにマップが開きます。設定が「{tx.map.afterFirstShown}」のときは、マップボタンも現れます。プレイヤーにはカット自体は見えず、同じシーンでその後ろに置いたカットには決して到達できません。この方法で開いたマップには戻るボタンがなく、プレイヤーは行き先を選ばなければなりません。

ボタンで開いたマップには {rt.game.back} ボタンがあり、プレイヤーを元いたカットにそのまま戻します。

## プレイヤーが場所を選ぶとどうなるか

ゲームは、その場所のシーンへ移ります。{ui.mapMode.returnToMapWhenFinished} がオンなら、物語が終わったときにプレイヤーはマップに戻ります。シーンのない場所は、何もしません。ボタンの見た目は[マップボタン](/novelworks-docs/ja/game-ui/map-button/)を、マップを開く **M** キーとポーズメニューの項目についても、あわせて参照してください。

## テスト

- マップワークスペースでは、トップバーの {ui.topBar.testMap}(とマップ設定にある同名のボタン)で、マップから始めてプレイします。
- プレイモードでは、その時点でプレイヤーがまだ開けなくても、{ui.playOverlay.openMap} でマップが開きます。戻るで元の場所に戻ります。

## 警告

- マップ機能がオフです。「{tx.moments.showMap}」カットは何もしません。
- マップを作って背景を追加してください。マップのカットが削除された、または探索ではなくなりました。
- プレイヤーはマップを開けません。ゲームに開始シーンがない、またはボタンが、到達できない「{tx.moments.showMap}」カットを待っています。
- マップに背景画像を追加してください。
- 場所がシーンへ移動するのにシーンが選ばれていない、または削除されたシーンへ移動する。
- プレイヤーがクリックするエリアを、少なくとも1つ描いてください。
