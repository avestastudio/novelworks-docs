---
title: エディターの紹介
description: NovelWorks のウインドウの各領域と、それぞれの操作の役割を説明します。
---

エディターには**上部バー**があり、「{ui.topBar.story}」モードでは、さらに3つの領域があります。**左パネル**、中央、下部です。右側には**インスペクター**があります。

![NovelWorks のエディター。左にシーン一覧、中央にゲーム画面、下にタイムラインとステージに誰がいるかを示すチャート、右にインスペクター。](/novelworks-docs/screenshots/editor-overview.png)

## 上部バー

左から順に次のものがあります。

- Windows では、最初に「{ui.appMenuButton.menu}」があり、アプリケーションメニュー（ファイル、編集、表示、ヘルプ）を開きます。
- **戻る矢印**：[プロジェクト画面](/novelworks-docs/ja/getting-started/projects-screen/)に戻ります。未保存の変更があるときは、先に保存するかどうかを聞かれます。
- プロジェクト名（または「{tx.topBar.untitledProject}」）。クリックすると、インスペクターにプロジェクトの設定が表示されます（[エディターとプロジェクトの設定](/novelworks-docs/ja/getting-started/editor-settings/)をご覧ください）。
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
- {ui.leftPanel.assets}：画像、動画、サウンド。「{ui.assetsTab.import}」ボタンと、種類別のフィルターがあります。
- {ui.leftPanel.characters}：キャラクターと、それぞれの表情の数。
- {ui.leftPanel.variables}：ゲームが覚えていること。
- {ui.leftPanel.items}：インベントリ機能がオンのときだけ表示されます。

一番下には、「{ui.leftPanel.map}」（マップ機能がオンのときだけ）、「{ui.leftPanel.features}」（ゲームのオプションの部品の一覧を開きます）、30秒ごとに変わるヒントがあります。検索中（**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**）は、タブの代わりに検索パネルが表示されます。

パネルの境目をドラッグするとサイズを変えられ、境目をダブルクリックすると初期の幅に戻ります。幅はこのコンピューターに記憶されます。

## 中央：ゲーム画面

プレイヤーに見えるとおりのゲーム画面で、ウインドウに合わせて拡大縮小されます。画面の上にあるのは、次の操作だけです。

- 背景ボタン：カットの背景を選びます。
- 「{ui.stageControls.character}」：キャラクターをステージに立たせます。
- 「{ui.moments.exploration}」カットでは、エリアを描くツール（[探索](/novelworks-docs/ja/features/exploration/)をご覧ください）。
- {ui.topBar.visual} と {ui.topBar.script}：シーンを、タイムライン付きのゲーム画面として表示するか、脚本のように入力できるテキストとして表示するかを切り替えます。

ゲーム画面のキャラクターをクリックすると、その上に小さなバーが現れ、表情と衣装を変えられます。キャラクターのそのほかの設定は、すべてインスペクターにあります。[シーンの演出](/novelworks-docs/ja/writing/staging/)をご覧ください。

ウインドウの高さが低いとき（約780ピクセル未満）は、ゲーム画面の場所を空けるため、タイムラインの下のチャートに表示される行が少なくなります。

## 下部：タイムライン

現在のシーンのカットが、並べ替えられるカードとして並びます。タイムラインのヘッダーの「{ui.moments.dialogue}」は、選んだカットのあとにセリフを1行追加します。「{ui.timeline.addOther}」には、ほかの種類のカットが、それぞれを説明する文とともに並びます。2つのアイコンで選んだカットの複製や削除ができます。この2つの操作は、カードの右クリックメニューにもあります。カードの下には、ステージに誰がいるかを示すチャート、各サウンドがどこまで続くかを示す行（シーンにサウンドがあるとき）、物語が分岐する場所を示す行があります。[シーン、カット、タイムライン](/novelworks-docs/ja/concepts/scenes-moments-timeline/)をご覧ください。

## 右：インスペクター

選んだもののプロパティが表示されます。カット、シーン、画像、キャラクター、変数、アイテム、ステージにいるキャラクターのどれかです。タイトルは選択に合わせて変わります。何も選んでいないときは「{ui.inspector.projectSettings}」が表示されます。

カットには4つのタブがあります。

- 「{ui.inspectorTabs.text}」：誰が何を話すか（または選択肢や条件など）、カットの行き先、カットにつながるもの、メモ。
- 「{ui.inspectorTabs.image}」：変更の届く範囲、背景、雰囲気、ステージにいるキャラクター。
- 「{ui.inspectorTabs.effects}」：カメラとエフェクト。
- 「{ui.sound.tab}」：音楽、環境音、効果音、ボイス。

[カットパネル](/novelworks-docs/ja/writing/moment-panel/)をご覧ください。ゲーム画面のキャラクターをクリックすると、インスペクターに「{ui.inspector.characterOnStage}」が表示され、位置、大きさ、向き、重なり順、衣装を設定できます。

## メニュー

Mac では、アプリメニューに「NovelWorks について」、サービス、隠す、終了があります。Windows では、終了はファイルメニューにあります。

- {ui.native.menu.file}：{tx.native.menu.newProject}、{tx.native.menu.openProject}、{tx.native.menu.save}、{tx.native.menu.restoreFromBackup}、{tx.native.menu.importScript}、{tx.native.menu.exportScript}、{ui.native.menu.exportForWeb}、{tx.native.menu.closeProject}。
- {ui.native.menu.edit}：{tx.native.menu.undo}、{tx.native.menu.redo}、{tx.native.menu.findAndReplace}、切り取り、コピー、貼り付け、すべてを選択、スペルチェックの言語。
- {ui.menu.view}：{tx.native.menu.theme}、言語、フルスクリーンの切り替え。
- {ui.native.role.window}。
- {ui.native.role.help}：ドキュメント、{tx.native.menu.replayTutorial}、{tx.native.menu.keyboardShortcuts}、{tx.native.menu.activateNovelWorks}（製品版のみ）、{tx.native.menu.reportABug}、Windows では「NovelWorks について」。

ショートカットの一覧は[キーボードショートカット](/novelworks-docs/ja/reference/keyboard-shortcuts/)にあります。
