---
title: シーンの演出
description: 背景を選び、キャラクターを画面に出して、配置、拡大縮小、反転、重なり順を調整します。
---

演出とは、文章の後ろでプレイヤーに何を見せるかを決めることです。背景とキャラクターがそれにあたります。すべてゲーム画面の上で、「{ui.topBar.story}」モードのビジュアル表示で行います。始める前に、[舞台](/novelworks-docs/ja/concepts/stage/)を読んでください。あるカットで設定したことは、次のカットにも引き継がれます。

## 変更の届く範囲を選ぶ

ゲーム画面の上にある「{ui.stage.scopeLabel}」には、2 つの設定があります。「{ui.stage.scopeFollowing}」(デフォルト)と「{ui.stage.scopeOnlyHere}」です。何かを変える前に設定してください。変更が及んだカットは、タイムラインで一瞬光ります。ゲーム画面では、キャラクターに「{ui.stage.markNew}」か「{ui.stage.markChanged}」の印が付きます。

## 背景

- ゲーム画面の上の背景ボタン(「{ui.stage.chooseTheBackgroundOfThisMoment}」)か、インスペクターの「{ui.momentInspector.change}」をクリックします。ピッカーには背景と CG が表示され、新しい画像をすぐ読み込むこともできます。「{ui.momentInspector.noneBlackScreen}」を選ぶと、黒い画面になります。
- 「{ui.stage.applyToTheFollowingMoments}」は、このカットの背景を、シーンの以降のすべてのカットに設定します。実行前に確認があります。最後のカットでは使えません。

空のシーンでは、ゲーム画面に「{ui.stage.chooseBackground}」と表示されます。

## キャラクターを舞台に出す

ゲーム画面の上の「{ui.stageControls.character}」(「{ui.stageControls.putACharacterOnStage}」)か、インスペクターの「{ui.momentInspector.onStage}」セクションの「{ui.momentInspector.add}」をクリックします。一覧にキャラクターが表示されます。すでに舞台にいるキャラクターは選べません。キャラクターがまだいなければ、「{ui.stageControls.newCharacter}」で作れます。

キャラクターは、中央、左、右のうち最初に空いている場所の、下端に置かれます。3 か所とも埋まっている場合は、新しいキャラクターは中央近くの、ほかのキャラクターから少しずれた場所に置かれ、キャラクター同士が重なることがあります。好きな場所へドラッグしてください。ゲーム画面の上の「{ui.stage.castTitle}」バーでも、ワンクリックでキャラクターを舞台に出したり下げたりできます。

## 選ぶ、動かす、大きさを変える

- ゲーム画面でキャラクターを **クリック** すると選ばれます。上に小さなツールバーが現れ、インスペクターにそのキャラクターの設定が表示されます。
- **ドラッグ** すると、好きな場所へ動かせます。近づくと、左、中央、右と下端に吸い付きます。ドラッグ全体が、取り消しの 1 ステップです。
- **角をドラッグ** すると大きさが変わります(「{ui.stage.dragToResize}」)。足元は動きません。大きさは 30 % から 200 % までです。

## 配置、反転、重なり順

キャラクターの上のツールバーか、インスペクター(「{ui.stageCharacterInspector.position}」、「{ui.stageCharacterInspector.size}」、「{ui.stageCharacterInspector.order}」)で操作します。

| 操作 | できること |
|---|---|
| **{ui.stageCharacterInspector.expression}** | 表情を変えます。デフォルトの表情には星が付いています。キャラクターに表情がないときは、ボタンでキャラクタータブに移動できます。 |
| 左 / 中央 / 右 | キャラクターを、画面の下にある 3 か所のどれかに置きます。大きさと向きは変わりません。 |
| **{ui.stage.flipHorizontally}** | キャラクターを反対向きにします。 |
| **{ui.stage.bringForward}** / **{ui.stage.sendBackward}** | キャラクターを、ほかのキャラクターの前や後ろに動かします。ダイアログボックスは常に一番上です。 |
| **{ui.stage.removeFromStage}** | このカットから先、キャラクターを舞台から外します。 |

インスペクターには、「{ui.stageCharacterInspector.size}」のスライダーと、キャラクターの名前と表情を編集するボタンもあります。

キャラクターを右クリックしても、同じ操作が使えます。さらに「{ui.contextMenus.stayUntil}」、「{ui.contextMenus.onlyThisMoment}」、「{ui.contextMenus.backToBefore}」、「{ui.contextMenus.leavesHere}」も使えます。これらは[舞台](/novelworks-docs/ja/concepts/stage/)で説明しています。

選んだキャラクターを外すには、`Delete` か `Backspace` を押すこともできます。矢印キーはキャラクターを動かしません。カット間を移動します。

## 前のシーンの終わりから始める

ほかのシーンからつながっているシーンの最初のカットでは、前のシーンの最後に画面にあったものから始めるよう、バナーが提案することがあります。[舞台](/novelworks-docs/ja/concepts/stage/)を見てください。

## 編集中は

- ゲーム画面は、常にウインドウに合わせて拡大縮小されます。バッジにパーセントが表示されます(「フィット · 65 %」)。
- 画像のないキャラクターは、破線の輪郭と「(画像なし)」で描かれるので、そのまま配置できます。ゲームでは、そのようなキャラクターは描かれません。
- 編集中は、ダイアログボックスが編集できる欄に置き換わり、ゾーンは隠れます。
- ウインドウが狭いときは、ツールバーのいくつかのツールが「{ui.stage.more}」メニューにまとまります。
