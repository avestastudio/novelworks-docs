---
title: キャラクターと表情
description: キャラクターを作り、表情とアバターを設定します。キャラクターを削除したときに何が起きるかも説明します。
---

キャラクターは、ストーリーに登場する人物です。キャラクターには、名前、名前の色、そして **表情** があります。表情は、気分ごとに 1 枚の画像です。キャラクターは「{ui.leftPanel.characters}」タブにあります。

## キャラクターを作る

「{ui.charactersTab.newCharacter}」をクリックします。キャラクターには「キャラクターN」という名前が付きます。N は、すでにあるキャラクターの数に 1 を足した数です(同じ名前のキャラクターができることもあるので、名前を変えてください)。名前の色は、8 色の中から自動で付きます。選ぶと、インスペクターで編集できます。

画像を読み込むときにキャラクターを作ることもできます。[素材](/novelworks-docs/ja/writing/assets/)を見てください。

## 名前と色

- 「{ui.characterInspector.name}」: インスペクターで入力します(一覧そのものでは名前を変えられませんが、右クリックメニューの「{ui.contextMenus.rename}」でこの欄に移動できます)。
- 「{ui.characterInspector.nameColor}」: 8 色のプリセットから選ぶか、「{ui.characterInspector.pickAnyColor}」で好きな色を選びます。この色は、ダイアログボックスとスクリプトモードで名前に使われます。

## 表情

「{ui.characterInspector.expressions}」の下に、気分(うれしい、悲しい、怒っている…)ごとに 1 枚ずつ画像を追加します。

- 「{ui.characterInspector.addExpression}」をクリックして、「{tx.assetTypes.characterSprite}」タイプの画像を選ぶか、ピッカーから新しい画像を読み込みます。表情には、その画像の名前が付きます。
- 必要なら、「{ui.characterInspector.expressionName}」に別の名前を入力します。
- 星をクリックすると「{ui.characterInspector.makeThisTheDefaultExpression}」になります。最初に追加した表情が、デフォルトです。キャラクターが表情なしで登場したときに表示されるのは、この表情です。
- 画像をクリックすると「{ui.characterInspector.changeImage}」になります。古い画像は素材に残ります。
- X をクリックすると、表情が削除されます。その表情を使っているカットがあれば、代わりにデフォルトの表情を使うことを NovelWorks が知らせます。デフォルトの表情を削除した場合は、残っている最初の表情がデフォルトになります。

## アバター

アバターは、ダイアログボックスの名前の横に表示される小さな肖像です。「{ui.characterInspector.avatar}」で、次から選びます。

- 「{ui.characterInspector.none}」: ダイアログボックスに肖像を表示しません。
- 「{ui.characterInspector.fixed}」: このキャラクターが話すたびに、同じ肖像を表示します。
- 「{ui.characterInspector.perExpression}」: 表情ごとに肖像を表示します。肖像のない表情は、デフォルトのアバターを使います。

アバターには、「{tx.assetTypes.avatar}」、「{tx.assetTypes.characterSprite}」、「UI」タイプの画像が使えます。

## キャラクターをステージに出す

[シーンの演出](/novelworks-docs/ja/writing/staging/)を見てください。簡単に言うと、カットの中で、「{ui.momentInspector.onStage}」の下にある「{ui.momentInspector.add}」を使います(またはゲーム画面の上にある「{ui.stageControls.character}」ボタンを使います)。そのあと、キャラクターを好きな場所へドラッグします。

## キャラクターを削除する

インスペクターの「{ui.characterInspector.deleteCharacter}」か、右クリックメニューの「{ui.contextMenus.delete}」を使います。キャラクターが使われていなければ、NovelWorks はそのキャラクターと表情を削除します。画像は素材に残ります。ストーリーに登場している場合は、NovelWorks がその場所を一覧で示し、**それらのカットから外れ、セリフはナレーションになる** と警告します。先に「{ui.contextMenus.showUsages}」を使うと、キャラクターがどこで使われているか確認できます。

削除は元に戻せます。
