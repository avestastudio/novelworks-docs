---
title: シーン、カット、タイムライン
description: NovelWorks で物語がシーンからカットまでどう構成されているかを説明します。
---

## シーンとカット

物語はシーンの集まりで、章のようなものです。シーンはカットの連なりで、スライドのようなものが順番に再生されます。ほとんどのカットは1行のセリフですが、種類は8つあります。

![カットが並んだ1つのシーン。セリフ2つ、選択肢、もし…、ジャンプ、エンディング。](/novelworks-docs/diagrams/moments-strip.svg)

| 種類 | 役割 | プレイヤーに見えるか |
|---|---|---|
| {ui.moments.dialogue} | セリフまたはナレーションの1行。 | はい |
| {ui.moments.choice} | プレイヤーが選択肢を選びます。変数を変えたり、別のシーンにつなげたりできます。 | はい |
| {ui.moments.condition} | 変数に応じて、物語を別の場所へ送ります。 | いいえ。ゲームが確かめて先へ進みます |
| {ui.moments.jump} | 別のシーンへすぐに移ります。 | いいえ |
| {ui.moments.ending} | エンディングの名前を表示して、タイトル画面に戻ります。 | はい |
| {ui.moments.exploration} | テキストボックスはありません。プレイヤーは画像上の範囲をクリックして、見回したり、変数を変えたり、別のシーンへ移ったりします。 | はい |
| {ui.moments.item} | プレイヤーにアイテムを渡したり、取り上げたりして、短い通知を出します。 | 通知だけ |
| {ui.moments.showMap} | すぐにマップを開きます。 | マップだけ |

「{ui.moments.item}」と「{ui.moments.showMap}」は、インベントリ機能とマップ機能がオンのときだけ一覧に出ます。[探索](/novelworks-docs/ja/features/exploration/)、[インベントリ](/novelworks-docs/ja/features/inventory/)、[マップ](/novelworks-docs/ja/features/map/)をご覧ください。

シーン同士がつながるのは**カットを通してだけ**です。選択肢の各項目、もし…のケース、ジャンプ、探索の範囲です。シーンの中のカットは、必ず1つずつ順番に再生されます。

## タイムライン

ウインドウの下部のタイムラインには、選んだシーンのカットがカードとして並びます。

- ヘッダーには、シーン名、カットと語の数、書いてあればシーンの概要が表示されます。概要をクリックすると、インスペクターで編集できます。
- 各カードには、種類、話し手（または「ナレーション」）、言うことや行うことの短い要約が表示されます。カードにはメモや警告が付くことがあります。
- カードをクリックして選ぶと、ゲーム画面とインスペクターで編集できます。カードはドラッグで並べ替えられます。
- ヘッダーの「{ui.moments.dialogue}」は、**選んだカットのあとに**セリフを1行追加します。「{ui.timeline.addOther}」には、ほかの種類が、それぞれを説明する文とともに並びます。最後にある **+** のカードは、セリフを1行追加します。
- 2つのアイコンで、選んだカットを複製したり削除したりします。どちらもカードの右クリックメニューにもあります。削除は、空のセリフ1行のカットでない限り、確認が入ります。
- カードの下には、ステージに誰がいるかを示すチャート（[ステージ](/novelworks-docs/ja/concepts/stage/)）、シーンにサウンドがあるときは各[サウンド](/novelworks-docs/ja/writing/sound/)がどこまで続くかを示す行、物語が分岐する場所を示す行（[ストーリーの分岐のしくみ](/novelworks-docs/ja/concepts/how-stories-branch/)）があります。

### 速く書くには

ダイアログボックスで **Enter** を押すと、同じステージのまま新しいカットが始まります。**Shift+Enter** を押すと、同じボックスの中で改行します。

## 開始シーン

ゲームは開始シーンから始まります。シーンタブで星印が付いているものです。変えるには、別のシーンで「{ui.scenesTab.makeStartScene}」を使います。

## プレイヤーが到達できないシーン

開始シーンから進んで、どの選択肢、条件、ジャンプ、範囲からもつながらないシーンには、シーンタブで「{ui.scenesTab.unreachable}」と表示され、警告も出ます。[問題](/novelworks-docs/ja/testing/problems/)をご覧ください。

## 概要と執筆状況

シーンを選ぶと、「{ui.sceneInspector.summary}」を付けられます。これは自分用で、ストーリーマップに表示されます。シーンごとに「{ui.sceneInspector.writingStatus}」もあり、「{ui.shared.outline.toWrite}」「{ui.shared.outline.draft}」「{ui.shared.outline.done}」のどれかです。設定しない場合は、セリフに文章が入るまでは「{ui.shared.outline.toWrite}」、入ると「{ui.shared.outline.draft}」になります。

## シーンについて、さらに

[シーン](/novelworks-docs/ja/writing/scenes/)と[カットとセリフ](/novelworks-docs/ja/writing/moments-and-dialogue/)をご覧ください。
