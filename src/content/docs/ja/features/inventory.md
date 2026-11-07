---
title: インベントリ
description: "プレイヤーが持ち歩くアイテム:作成し、渡し、取り上げ、条件で確認し、ゲームで表示します。"
---

{ui.shared.features.inventory} 機能をオンにすると、プレイヤーは鍵、手紙、コイン、手がかりなどの「アイテム」を集められます。アイテムはインベントリメニューで確認できます。[機能ライブラリ](/novelworks-docs/ja/features/features-panel/)でオンにします。アイテムは[変数](/novelworks-docs/ja/branching/variables/)とは違います。アイテムは、プレイヤーが持ち歩くものです。

## アイテムのタブ

{ui.leftPanel.items} タブには、アイテムが一覧表示されます。それぞれ、画像(またはリュックサック)、名前、{ui.itemInspector.single} または {ui.itemInspector.stackable} がついています。{ui.itemsTab.newItem} をクリックします。新しいアイテムは「アイテム1」「アイテム2」…という名前で、選ばれた状態になります。

![アイテムのタブと、アイテムのインスペクター。](/novelworks-docs/screenshots/items-tab.png)

インスペクターでは次の項目を設定します。

- {ui.itemInspector.name}
- {ui.itemInspector.picture}:インベントリに表示される、種類が「小道具」の画像です(その場で読み込めます)
- {ui.itemInspector.description}:プレイヤーがインベントリで見たときに読む文章です
- {ui.itemInspector.kind}:{ui.itemInspector.single}(鍵のように、持っているか持っていないか)または {ui.itemInspector.stackable}(コインのように、複数持てます。インベントリに数が表示されます)
- {ui.itemInspector.usedIn}:アイテムが使われている場所。または「まだ使われていません。「アイテム」カット、選択肢、または「入手」エリアで渡せます」

### アイテムを削除する

{ui.itemInspector.deleteItem} は先に確認が出て、アイテムが使われている場所を一覧にします。削除されるのはアイテムだけです。それを使っていた場所は残り、別のアイテムを選ぶまで警告が表示されます。

## アイテムを渡す・取り上げる

- **アイテムのカット**:アイテムを渡したり取り上げたりします。プレイヤーにはカット自体は見えません。{ui.branchInspectors.give} または {ui.branchInspectors.remove}、アイテム、そして重ねられるアイテムの場合は個数を選びます。チェックボックスで、通知(「入手しました:…」)を表示するかどうかを決めます。[シーン、カット、タイムライン](/novelworks-docs/ja/concepts/scenes-moments-timeline/)を参照してください。
- **選択肢の項目**:{ui.branchInspectors.giveRemoveAnItem} で、項目に変更を追加します。通知は必ず表示されます。[選択肢](/novelworks-docs/ja/branching/choices/)を参照してください。
- **探索のエリア**:{ui.explorationInspectors.pickUpAnItem}(エリアとその小物は、そのまま消えます)または {ui.shared.exploration.useAnItem}。[探索](/novelworks-docs/ja/features/exploration/)を参照してください。

「1つだけ」のアイテムは1を超えることがなく、重ねられるアイテムは0を下回りません。持っている数より多く取り上げようとしても、あるぶんだけが取り上げられます。

## アイテムを確認する

[もし…](/novelworks-docs/ja/branching/conditions/)、選択肢の条件、エリアの条件で、{ui.branchInspectors.whatToCheck} から {ui.moments.item} を選びます。プレイヤーがそのアイテムを {ui.conditionTests.has}、{ui.conditionTests.doesnTHave}、または何個以上 {ui.conditionTests.hasAtLeast} をテストできます。削除されたアイテムへのテストは、決して成り立ちません。

インベントリ機能をオフにすると、プレイヤーはボタン、メニューの項目、**I** キーを失いますが、アイテムを渡したり確認したりするカットはそのまま動き、エディターが警告します。警告は、アイテムのあらゆる使われ方に対して表示されます。アイテムのカット（渡す・取り上げる）、選択肢の効果、アイテムでロックされた項目、アイテムについての「もし…」のテスト、アイテムを入手する・使う・アイテムでロックされたエリアです。警告は、カットの問題ボックス、タイムライン、書き出しウインドウで確認できます（スクリプト表示では下線は引かれません）。[機能ライブラリ](/novelworks-docs/ja/features/features-panel/)を参照してください。

## プレイヤーに見えるもの

- 画面の隅のボタン(初期設定では右上で、[インベントリ画面](/novelworks-docs/ja/game-ui/inventory-ui/)で設定します)、ポーズメニューの項目、そして **I** キー。
- 持っているアイテムを並べたグリッドのパネル。重ねられるアイテムには個数がつきます。1つをクリックすると説明が表示されます。「使う」ボタンはありません。アイテムを使うのは、エリアが確認することです。
- 「入手しました:鍵」や「失いました:鍵」のような {ui.gameUI.notices}([通知](/novelworks-docs/ja/game-ui/notifications/)を参照)。
- アイテムはプレイヤーのセーブデータに保存されます。古いセーブデータを読み込んだときは、もう存在しないアイテムは取り除かれます。

## テスト

プレイモードでは、{ui.playOverlay.variablesItems} に、ゲームのすべてのアイテムが **−** と **+** つきで表示され、テスト中にアイテムを渡したり取り上げたりできます(通知は出ません)。ゲームを始める前は「{tx.playOverlay.startPlayingToGiveOrRemoveItems}」と表示されます。

## 警告

- 渡す、または取り上げるアイテムを選んでください。このカットは、削除されたアイテムを渡す、または取り上げています。
- インベントリ機能がオフです。プレイヤーはインベントリを持ちません。機能でオンにしてください。
- 効果や条件が、選ばれていない、削除された、またはインベントリ機能がオフのアイテムを使う、または確認している。
- エリアが、プレイヤーが決して手に入れられないアイテム(ストーリーのどこにも渡すものがない)を必要としている。
