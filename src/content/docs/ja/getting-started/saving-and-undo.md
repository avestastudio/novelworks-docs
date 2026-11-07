---
title: 保存、バックアップ、取り消し
description: NovelWorks が作業をどう保存し、以前のバージョンをどう残し、どう元に戻せるかを説明します。
---

## 保存

- 「{ui.topBar.save}」をクリックするか、**{ui.native.menu.file} → {ui.native.menu.save}** を選ぶか、**Cmd+S**（Mac）/ **Ctrl+S**（Windows）を押します。「{tx.store.projectSaved}」というメッセージで保存されたことがわかります。
- NovelWorks は**自動保存**もします。2分ごと、およびウインドウがフォーカスを失ったときです。ただし、未保存の変更があるときだけです。そのとき上部バーに「{ui.topBar.savedAuto}」と表示されます。
- 保存の表示は、次に保存するまで「{ui.topBar.unsavedChanges}」のままです。
- 未保存の変更があるままウインドウやプロジェクトを閉じようとすると、保存する、保存しない、キャンセルのどれにするかを聞かれます。

## バックアップ

バックアップは `project.json` の以前のコピーで、プロジェクト内の `backups` フォルダーに保存されます。

- バックアップは**手動で保存するたびに、その前に**作られます。
- 自動保存でのバックアップは、**最短でも15分おき**です。
- 最新のバックアップから何も変わっていなければ、バックアップは作られません。
- NovelWorks は**最新の20件**と、**直近7日間の各日の最新のバックアップ**を残します。それより古いものは削除されます。
- 古いプロジェクトを更新するときに作られるコピー（「{ui.restoreBackupDialog.beforeUpgrade}」）は、削除されません。
- プロジェクトから削除した画像は、消去されずに `backups/deleted-assets` に移されるので、バックアップからも見つけられます。残してあるバックアップのどれにも必要なくなると、片付けられます。

### バックアップに戻る

1. **{ui.native.menu.file} → {ui.native.menu.restoreFromBackup}** を選びます。
2. 一覧からバージョンを選びます。各行には、日付、種類（「{ui.restoreBackupDialog.saved}」「{ui.restoreBackupDialog.autosave}」「{ui.restoreBackupDialog.beforeRestoringABackup}」「{ui.restoreBackupDialog.beforeUpgrade}」）、シーンとカットの数が表示されます。
3. 「{ui.restoreBackupDialog.restoreThisVersion}」をクリックします（または行をダブルクリックします）。

現在のバージョンもバックアップとして残るので、「{ui.native.menu.undo}」で元に戻せます。

## 取り消しとやり直し

**{ui.native.menu.edit} → {ui.native.menu.undo}**（**Cmd+Z** / **Ctrl+Z**）と「{ui.native.menu.redo}」（Mac では **Shift+Cmd+Z**、Windows では **Ctrl+Y** または **Ctrl+Shift+Z**）で、変更を前後にたどれます。上部バーにも同じ2つの矢印があります。

- NovelWorks は直近の**200**ステップを覚えています。
- 1つのテキストボックスでの入力はまとめられます。続けて入力した分が1ステップで、約1秒の間が空くと区切られます。
- 複数のことを一度に変える操作は、1ステップです。たとえば、あとのカットにまで及ぶ変更がそうです。
- 保存したあとでも、取り消しは使えます。プロジェクトを開いたり閉じたりすると、リセットされます。
- プレイ中は、取り消しとやり直しは使えません。
- エディターのテーマや言語の変更、パネルのサイズ変更、タブの移動は、履歴に含まれません。

## 古いプロジェクト

NovelWorks は、古いバージョンで作ったプロジェクトを開いて、更新します。その前に、元の `project.json` とまったく同じコピーを `backups` に保存し、上部のバーに保存先と「{ui.store.showCopy}」を表示します。コピーが作れないときは、プロジェクトは開かれず、何も変更されません。新しいバージョンの NovelWorks で作られたプロジェクトは開けません。
