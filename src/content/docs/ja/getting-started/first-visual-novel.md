---
title: はじめてのビジュアルノベル
description: 空のプロジェクトから、プレイできるゲームまで、手順を追って作るチュートリアルです。
---

背景、表情が2つあるキャラクター1人、数行のセリフ、そして2つのエンディングにつながる選択肢で、小さな物語を作ります。画像は3枚必要です。背景が1枚と、**同じキャラクター**で表情の違う画像が2枚です（たとえば、うれしい顔と驚いた顔）。

## 1. プロジェクトを作る

1. NovelWorks を開きます。[プロジェクト画面](/novelworks-docs/ja/getting-started/projects-screen/)で「{ui.projectHub.newProject}」をクリックします。
2. 名前を入力し、保存場所を確認して（または「{ui.newProjectScreen.browse}」をクリックして）、機能にはチェックを入れないまま「{ui.newProjectScreen.createProject}」をクリックします。

プロジェクトが開き、シーンが1つ（「{tx.shared.project.firstScene}」）と、空のセリフが1行できています。

## 2. 画像を追加する

1. 左パネルで「{ui.leftPanel.assets}」タブを開きます。
2. 「{ui.assetsTab.import}」をクリックするか、画像をウインドウにドロップします。
3. 画像ごとに種類を選びます。場所の画像には「{ui.assetTypes.background}」を、キャラクターの2枚の画像には「{ui.assetTypes.characterSprite}」を選びます。

## 3. キャラクターを作る

1. 「{ui.leftPanel.characters}」タブを開き、「{ui.charactersTab.newCharacter}」をクリックします。
2. インスペクターで「{ui.characterInspector.characterName}」を入力し、「{ui.characterInspector.nameColor}」を選びます。
3. 「{ui.characterInspector.expressions}」の下で、「{ui.characterInspector.addExpression}」をクリックして画像を選びます。画像ごとに1回ずつ行います（候補に出るのは「{tx.assetTypes.characterSprite}」の種類の画像だけです）。そのあと、必要なら各表情の名前（「うれしい」「驚き」など）を変えます。星印の付いた表情が、初期状態で表示されるものです。

## 4. 最初のシーンを書く

1. 「{ui.leftPanel.scenes}」タブを開き、シーンを選びます。
2. ゲーム画面の上にある背景ボタン（「{ui.stage.chooseTheBackgroundOfThisMoment}」）で、カットの背景を選びます。
3. ゲーム画面の上の「{ui.stageControls.character}」ボタンでキャラクターをステージに立たせ、好きな位置までドラッグします。
4. 画面のダイアログボックスをクリックして入力します。**Enter** を押すと次の行に進みます。新しいカットが始まり、**同じステージ**のままです。[ステージ：キャラクターはその場に残る](/novelworks-docs/ja/concepts/stage/)からです。同じボックスの中で改行するには **Shift+Enter** を押します。
5. あとで表情を変えたいときは、タイムラインであとのカットを選び、画面上のキャラクターをクリックして、その上に出る小さなバーで別の表情を選びます。

## 5. 選択肢を追加する

1. タイムラインのヘッダーで「{ui.timeline.addOther}」を開き、「{ui.moments.choice}」を選びます。
2. インスペクターの「{ui.inspectorTabs.text}」タブで、質問と2つの選択肢の文を書きます。
3. 選択肢ごとに、「{ui.branchInspectors.then}」で行き先のシーンを選びます。先に、シーンタブの「{ui.scenesTab.newScene}」でシーンを作っておきましょう。

選択に意味を持たせることもすぐにできます。[ストーリーの分岐のしくみ](/novelworks-docs/ja/concepts/how-stories-branch/)をご覧ください。

## 6. エンディングを追加する

それぞれの分岐の最後で、「{ui.timeline.addOther}」を開いて「{ui.moments.ending}」のカットを追加します。最初は「{tx.shared.scenes.goodEnding}」という名前です。お好みで名前を変えてください。エンディングのあと、プレイヤーはタイトル画面に戻ります。

## 7. プレイを押す

上部バーの「{ui.topBar.play}」をクリックすると、タイトル画面からプレイできます。途中から試すには、カットを選んで「{ui.topBar.playFromHere}」をクリックします。**Esc** を押すとエディターに戻ります（ゲームのメニューが開いているときは、先に **Esc** でメニューが閉じます）。

## 8. 保存する

**Cmd+S**（Mac）または **Ctrl+S**（Windows）を押します。NovelWorks は2分ごとに自動でも保存します。[保存、バックアップ、取り消し](/novelworks-docs/ja/getting-started/saving-and-undo/)をご覧ください。

## 次は何をする？

- [変数](/novelworks-docs/ja/branching/variables/)と[条件](/novelworks-docs/ja/branching/conditions/)で、選択に意味を持たせましょう。
- [ゲームUIの概要](/novelworks-docs/ja/game-ui/game-ui-editor/)で、ゲームの見た目を変えましょう。
- [書き出して](/novelworks-docs/ja/publish/web-export/)、みんなに公開しましょう。
