---
title: エディターの紹介
description: NovelWorks のウインドウの各領域と、それぞれの操作の役割を説明します。
---

エディターには**上部バー**があり、「{ui.topBar.story}」モードでは、さらに3つの領域があります。**左パネル**、中央、下部です。右側には**インスペクター**があります。

![NovelWorks のエディター。左にシーン一覧、中央にゲーム画面、下にタイムラインとステージに誰がいるかを示すチャート、右にインスペクター。](/novelworks-docs/screenshots/editor-overview.png)

## 上部バー

左から順に次のものがあります。

- **戻る矢印**：[プロジェクト画面](/novelworks-docs/ja/getting-started/projects-screen/)に戻ります。未保存の変更があるときは、先に保存するかどうかを聞かれます。
- プロジェクト名（または「名称未設定のプロジェクト」）。クリックすると、インスペクターにプロジェクトの設定が表示されます（[エディターとプロジェクトの設定](/novelworks-docs/ja/getting-started/editor-settings/)をご覧ください）。
- **保存の表示**：{ui.topBar.unsavedChanges}、{ui.topBar.savedAuto}、{ui.topBar.saved} のいずれかです。
- **3つのモード**：
  - {ui.topBar.story}：シーン、カット、キャラクター。物語を書く場所です。
  - {ui.topBar.storyMap}：ゲームのすべてのシーンと、選択肢、条件、ジャンプがそれらをどうつないでいるか。
  - {ui.topBar.gameUI}：ゲームの見た目（タイトル画面、ダイアログボックス、メニュー）。
- 「{ui.topBar.undo}」と「{ui.topBar.redo}」の矢印。
- 「{ui.topBar.save}」。
- 「{ui.topBar.playFromHere}」は、選んだカットからプレイします。マップのワークスペースでは「{ui.topBar.testMap}」になります。
- 「{ui.topBar.play}」は、タイトル画面からプレイします。

ウインドウが狭いと、モード名と「{tx.leftPanel.playFromHere}」の文字はアイコンに縮みます。

## 左パネル

タブは次のとおりです。

- {ui.leftPanel.scenes}：シーン。ドラッグで並べ替えられ、星印が開始シーンです。
- {ui.leftPanel.assets}：画像。「{ui.assetsTab.import}」ボタンと、種類別のフィルターがあります。
- {ui.leftPanel.characters}：キャラクターと、それぞれの表情の数。
- {ui.leftPanel.variables}：ゲームが覚えていること。
- {ui.leftPanel.items}：インベントリ機能がオンのときだけ表示されます。

一番下には、「{ui.leftPanel.map}」（マップ機能がオンのときだけ）、「{ui.leftPanel.features}」（ゲームのオプションの部品の一覧を開きます）、30秒ごとに変わるヒントがあります。検索中（**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**）は、タブの代わりに検索パネルが表示されます。

パネルの境目をドラッグするとサイズを変えられ、境目をダブルクリックすると初期の幅に戻ります。幅はこのコンピューターに記憶されます。

## 中央：ゲーム画面

プレイヤーに見えるとおりのゲーム画面で、ウインドウに合わせて拡大縮小されます。画面の上では、カットの背景を選んだり、キャラクターを追加したり、次の2つを切り替えたりできます。

- {ui.topBar.visual} と {ui.topBar.script}：シーンを、タイムライン付きのゲーム画面として表示するか、脚本のように入力できるテキストとして表示するかを切り替えます。
- {ui.stage.scopeLabel}：{ui.stage.scopeFollowing} または {ui.stage.scopeOnlyHere}。これは[ステージ](/novelworks-docs/ja/concepts/stage/)で説明しています。

画面の上には小さなボタンが並び、選んだカットがどこへつながるかを示します（[ストーリーの分岐のしくみ](/novelworks-docs/ja/concepts/how-stories-branch/)をご覧ください）。

ウインドウの高さが低いとき（約780ピクセル未満）は、ゲーム画面の上の各行が1行にまとまって横にスクロールし、ゲーム画面の下にあるキー操作の案内は非表示になります。ゲーム画面の場所を空けるためです。

## 下部：タイムライン

現在のシーンのカットが、並べ替えられるカードとして並びます。ボタンで、選んだカットのあとに各種類のカットを追加でき、2つのアイコンで選んだカットの複製や削除ができます。カードの下には、ステージに誰がいるかを示すチャートと、物語が分岐する場所を示す行があります。[シーン、カット、タイムライン](/novelworks-docs/ja/concepts/scenes-moments-timeline/)をご覧ください。

## 右：インスペクター

選んだもののプロパティが表示されます。カット、シーン、画像、キャラクター、変数、アイテム、ステージにいるキャラクターのどれかです。タイトルは選択に合わせて変わります。何も選んでいないときは「{ui.inspector.projectSettings}」が表示されます。

## メニュー

Mac では、アプリメニューに「NovelWorks について」、サービス、隠す、終了があります。Windows では、終了はファイルメニューにあります。

- {ui.native.menu.file}：新規プロジェクト、プロジェクトを開く、保存、バックアップから復元、スクリプトを読み込み、スクリプトを書き出す、{ui.native.menu.exportForWeb}、プロジェクトを閉じる。
- {ui.native.menu.edit}：取り消す、やり直す、検索と置換、切り取り、コピー、貼り付け、すべてを選択、スペルチェックの言語。
- {ui.menu.view}：テーマ、言語、フルスクリーンの切り替え。
- {ui.native.role.window}。
- {ui.native.role.help}：ドキュメント、チュートリアルをもう一度見る、キーボードショートカット、NovelWorks を認証（製品版のみ）、不具合を報告、Windows では「NovelWorks について」。

ショートカットの一覧は[キーボードショートカット](/novelworks-docs/ja/reference/keyboard-shortcuts/)にあります。
