---
title: プロジェクト画面と新規プロジェクト
description: プロジェクトを開く、探す、作る方法と、プロジェクトフォルダーの中身を説明します。
---

**プロジェクト画面**は、NovelWorks を起動して最初に見える画面です。上部バーの戻る矢印で、いつでもここに戻れます。

## プロジェクトの一覧

一覧には**最近使ったプロジェクト**が新しい順に最大30件表示されます。各行には次の内容が表示されます。

- 画像：最後に保存したゲーム画面、または最初の背景。画像がまだないプロジェクトでは NovelWorks のロゴです。
- プロジェクト名と、保存されているフォルダー。
- 最後に開いた日時。

行をクリックすると、プロジェクトが開きます。

一覧の上には次のものがあります。

- 「{ui.projectHub.open}」は、コンピューターにあるプロジェクトフォルダーを開きます。ショートカットは Mac なら **Cmd+O**、Windows なら **Ctrl+O** です。
- 「{ui.projectHub.newProject}」は新しいプロジェクトを始めます（**Cmd+N** / **Ctrl+N**）。
- 検索ボックス（「{ui.projectHub.searchProjects}」）では、名前やフォルダーで絞り込めます。**Esc** で消去でき、下矢印で最初の結果に移動します。

行の **…** ボタン（または行を右クリック）でメニューが開きます。

- 「{ui.projectHub.open_ed077f}」
- Mac では「{ui.projectHub.showInFinder}」、Windows では「{ui.projectHub.showInExplorer}」
- 「{ui.projectHub.removeFromList}」：プロジェクトをこの一覧から外すだけです。

プロジェクトのフォルダーを移動または削除すると、その行はグレーになり「{ui.projectHub.folderNotFound}」と表示されます。「{ui.projectHub.locate}」をクリックして、フォルダーの新しい場所を選んでください。

画面の左側には「{ui.projectHub.reportABug}」とバージョン番号もあります。製品版で認証前なら、「{ui.projectHub.activateNovelWorks}」も表示されます。

## 新しいプロジェクトを作る

「{ui.projectHub.newProject}」をクリックします。

1. 「{ui.newProjectScreen.projectName}」を入力します。フォルダー名に使えない文字（`/ \ : * ? " < > |`）は NovelWorks が取り除きます。名前が空のときや、すでに使われているときは知らせてくれます。
2. 「{ui.newProjectScreen.location}」を確認します。最初は前回使った場所、または ドキュメント → NovelWorks になっています。別の場所を選ぶには「{ui.newProjectScreen.browse}」をクリックします。「{ui.newProjectScreen.willBeCreatedIn}」の行に、最終的なフォルダーが表示されます。
3. 必要なら、ゲームに必要な「{ui.newProjectScreen.features}」にチェックを入れます。「{ui.shared.features.inventory}」と「{ui.shared.features.map}」です。どれも初期状態ではオフで、あとから何も失わずにオンやオフを切り替えられます。
4. 「{ui.newProjectScreen.createProject}」をクリックします（または **Enter** を押します）。**Esc** でキャンセルします。

NovelWorks はフォルダーを作り、その中に `project.json` ファイルと空の `assets` フォルダーを置きます。そして、シーンを1つ（「{tx.shared.project.firstScene}」）だけ持つプロジェクトを開きます。このシーンには、空のセリフが1行入っています。`backups` フォルダーは、最初にバックアップが作られたときに現れます。

## プロジェクトフォルダーの中身

- `project.json`：物語のすべてが入った1つのファイル。
- `assets`：読み込んだ画像、動画、サウンド。
- `backups`：`project.json` の以前のバージョン（[保存、バックアップ、取り消し](/novelworks-docs/ja/getting-started/saving-and-undo/)をご覧ください）。

プロジェクトを別のコンピューターにコピーするには、フォルダーごとコピーします。そのあと「{ui.projectHub.open}」で開けます。

## 古いプロジェクトと新しいプロジェクト

- **古い**バージョンの NovelWorks で作ったプロジェクトは、そのまま開けます。更新する前に、NovelWorks は元のファイルとまったく同じコピーを `backups` に保存し、「{ui.store.showCopy}」の付いたバーを表示します。保存するまで、ディスク上は何も変わりません。
- **新しい**バージョンの NovelWorks で保存されたプロジェクトは開けません。先に NovelWorks を更新してください。
