---
title: シーンの演出
description: 背景を選び、キャラクターを画面に出して、配置、拡大縮小、反転、重なり順を調整します。
---

演出とは、文章の後ろでプレイヤーに何を見せるかを決めることです。背景とキャラクターがそれにあたります。すべてゲーム画面の上で、「{ui.topBar.story}」モードのビジュアル表示で行います。始める前に、[ステージ](/novelworks-docs/ja/concepts/stage/)を読んでください。あるカットで設定したことは、次のカットにも引き継がれます。右側のタブの全体像は、[カットパネル](/novelworks-docs/ja/writing/moment-panel/)を見てください。

## 変更の届く範囲を選ぶ

スイッチ「{ui.stage.scopeLabel}」には、2 つの設定があります。「{ui.stage.scopeFollowing}」(デフォルト)と「{ui.stage.scopeOnlyHere}」です。カットの「{ui.inspectorTabs.image}」タブと「{ui.inspectorTabs.effects}」タブ、そしてステージ上のキャラクターのパネルにあります。何かを変える前に設定してください。変更が及んだカットは、タイムラインで一瞬光ります。ゲーム画面では、キャラクターに「{ui.stage.markNew}」か「{ui.stage.markChanged}」の印が付きます。

## 背景

- ゲーム画面の上の背景ボタン(「{ui.stage.chooseTheBackgroundOfThisMoment}」)か、「{ui.inspectorTabs.image}」タブの「{ui.momentInspector.change}」をクリックします。ピッカーには背景と CG が表示され、新しい画像や[アニメーション背景](/novelworks-docs/ja/writing/ambience-and-animated-backgrounds/)をすぐ読み込むこともできます。「{ui.momentInspector.noneBlackScreen}」を選ぶと、黒い画面になります。
- 「{ui.inspectorTabs.image}」タブの「{ui.momentInspector.applyToTheFollowingMoments}」は、このカットの背景を、シーンの以降のすべてのカットに設定します。実行前に確認があります。最後のカットでは使えません。

空のシーンでは、ゲーム画面に「{ui.stage.chooseBackground}」と表示されます。同じタブには、カットの[雰囲気](/novelworks-docs/ja/writing/ambience-and-animated-backgrounds/)もあります。

## キャラクターをステージに出す

ゲーム画面の上の「{ui.stageControls.character}」(「{ui.stageControls.putACharacterOnStage}」)か、「{ui.inspectorTabs.image}」タブの「{ui.momentInspector.onStage}」セクションの「{ui.momentInspector.add}」をクリックします。一覧にキャラクターが表示されます。すでにステージにいるキャラクターは選べません。キャラクターがまだいなければ、「{ui.stageControls.newCharacter}」で作れます。

キャラクターは、中央、左、右のうち最初に空いている場所の、下端に置かれます。3 か所とも埋まっている場合は、新しいキャラクターは中央近くの、ほかのキャラクターから少しずれた場所に置かれ、キャラクター同士が重なることがあります。好きな場所へドラッグしてください。このセクションの「{ui.stage.castTitle}」バーでも、ワンクリックでキャラクターをステージに出したり下げたりできます。

## 選ぶ、動かす、大きさを変える

- ゲーム画面でキャラクターを **クリック** すると選ばれます。上に表情と衣装の小さなバーが現れ、インスペクターに「{ui.inspector.characterOnStage}」としてすべての詳細が表示されます。「{ui.stageCharacterInspector.backToTheMoment}」でカットのタブに戻ります。
- **ドラッグ** すると、好きな場所へ動かせます。近づくと、左、中央、右と下端に吸い付きます。ドラッグ全体が、取り消しの 1 ステップです。
- **角をドラッグ** すると大きさが変わります(「{ui.stage.dragToResize}」)。足元は動きません。大きさは 30 % から 200 % までです。

## 配置、反転、重なり順

キャラクターの上のバーにあるのは、表情と衣装だけです（衣装はキャラクターに衣装があるときに表示されます）。そのほかは、キャラクターを選んだときのインスペクター(「{ui.stageCharacterInspector.position}」、「{ui.stageCharacterInspector.size}」、「{ui.stageCharacterInspector.order}」)にあります。

| 操作 | できること |
|---|---|
| {ui.stageCharacterInspector.expression} | 表情を変えます。デフォルトの表情には星が付いています。キャラクターに表情がないときは、ボタンでキャラクタータブに移動できます。 |
| {ui.stageControls.outfit} | 衣装を変えます。[衣装](/novelworks-docs/ja/writing/outfits/)を見てください。 |
| {ui.scenes.left} / {ui.scenes.center} / {ui.scenes.right} | キャラクターを、画面の下にある 3 か所のどれかに置きます。大きさと向きは変わりません。 |
| {ui.stageCharacterInspector.flippedHorizontallyFacingTheOtherWay} | キャラクターを反対向きにします。 |
| {ui.stageCharacterInspector.forward} / {ui.stageCharacterInspector.backward} | キャラクターを、ほかのキャラクターの前や後ろに動かします。ダイアログボックスは常に一番上です。 |
| {ui.stageCharacterInspector.removeFromStage} | 「{ui.stage.scopeLabel}」スイッチに従って、キャラクターをステージから外します。 |

インスペクターには、「{ui.stageCharacterInspector.size}」のスライダーと、キャラクターの名前と表情を編集するボタンもあります。

キャラクターを右クリックしても、表情、衣装、位置、反転、重なり順を操作できます。さらに「{ui.contextMenus.stayUntil}」、「{ui.contextMenus.onlyThisMoment}」、「{ui.contextMenus.backToBefore}」、「{ui.contextMenus.leavesHere}」も使えます。これらは[ステージ](/novelworks-docs/ja/concepts/stage/)で説明しています。

選んだキャラクターを外すには、`Delete` か `Backspace` を押すこともできます。矢印キーはキャラクターを動かしません。カット間を移動します。

## 前のシーンの終わりから始める

ほかのシーンからつながっているシーンの最初のカットでは、前のシーンの最後に画面にあったものから始めるよう、「{ui.inspectorTabs.image}」タブのバナーが提案することがあります。[ステージ](/novelworks-docs/ja/concepts/stage/)を見てください。

## 編集中は

- ゲーム画面は、常にウインドウに合わせて拡大縮小されます。
- 画像のないキャラクターは、破線の輪郭と「{tx.render.noPicture}」で描かれるので、そのまま配置できます。ゲームでは、そのようなキャラクターは描かれません。
- 編集中は、ダイアログボックスが編集できる欄に置き換わります。
