---
title: すべてのメニュー
description: アプリケーションメニューのすべての項目とショートカット。
---

NovelWorks は、お使いのコンピュータ標準のメニューを使います。Windows では **Cmd** を **Ctrl** に読み替えてください。プロジェクトを開いていないと使えない項目があります。また、プレイ中は編集コマンドのほとんどが無視されます。

## アプリケーションメニュー（Mac のみ）

**Novelworks について**、サービス、**Novelworks を隠す**（**Cmd+H**）、{ui.native.role.hideOthers}、{ui.native.role.unhide}、**Novelworks を終了**（**Cmd+Q**）。Windows では、「終了」はファイルメニューの最後にあり、「バージョン情報」はヘルプメニューにあります。

## ファイル

| 項目 | ショートカット | 内容 |
|---|---|---|
| {ui.native.menu.newProject} | **Cmd+N** | 新規プロジェクトの画面を開きます。 |
| {ui.native.menu.openProject} | **Cmd+O** | プロジェクトのフォルダを開きます。 |
| {ui.native.menu.save} | **Cmd+S** | プロジェクトを保存します。 |
| {ui.native.menu.restoreFromBackup} | | 以前のバージョンに戻します。[保存、バックアップ、取り消し](/novelworks-docs/ja/getting-started/saving-and-undo/)を参照してください。 |
| {ui.native.menu.importScript} | | テキストファイルをシーンに追加します。[スクリプトの読み込みと書き出し](/novelworks-docs/ja/writing/import-a-script/)を参照してください。 |
| {ui.native.menu.exportScript} | | ゲーム全体をテキストファイルとして保存します。 |
| {ui.native.menu.exportForWeb} | **Cmd+E** | ゲームをウェブ向けに書き出します。[ウェブ書き出し](/novelworks-docs/ja/publish/web-export/)を参照してください。 |
| {ui.native.menu.closeProject} | **Cmd+Shift+W** | プロジェクト一覧の画面に戻ります。 |

## 編集

| 項目 | ショートカット |
|---|---|
| {ui.native.menu.undo} | **Cmd+Z** |
| {ui.native.menu.redo} | **Shift+Cmd+Z**（Windows では **Ctrl+Shift+Z**。エディタ内では **Ctrl+Y** も使えます） |
| {ui.native.menu.findAndReplace} | **Cmd+F** |
| 切り取り、コピー、ペースト、すべてを選択 | **Cmd+X**、**Cmd+C**、**Cmd+V**、**Cmd+A** |
| {ui.native.spelling.spellingLanguage} | Windows では、お使いのコンピュータの言語に英語を加えたもの、または別の言語を選べます。Mac では、macOS が文章の言語を判別します。設定はプロジェクトに保存されます。 |

「取り消す」と「やり直す」はプロジェクトに対して働きます。ただし、新規プロジェクト画面の名前の入力欄では、その欄の中だけで働きます。

## 表示

- {ui.native.menu.theme}：{ui.native.menu.dark}、{ui.native.menu.light}、または {ui.native.menu.system}。
- {ui.native.menu.language}：{ui.native.menu.languageAuto}、または 7 つの言語のどれか。
- {ui.native.role.togglefullscreen}（Mac では **Control+Cmd+F**）。

開発者向けの項目（再読み込み、開発者ツールの切り替え）は、開発用ビルドにだけ表示されます。公開されているアプリには表示されません。

## ウインドウ

Mac では、しまう、拡大/縮小、すべてを手前に移動。Windows では、最小化と閉じる。

## ヘルプ

| 項目 | 内容 |
|---|---|
| {ui.menu.documentation} | このドキュメントをブラウザで開きます。 |
| {ui.native.menu.replayTutorial} | [ガイドツアー](/novelworks-docs/ja/getting-started/guided-tour/)をもう一度見ます。 |
| {ui.native.menu.keyboardShortcuts}（**Cmd+/**） | ショートカットの一覧を表示します。 |
| {ui.native.menu.activateNovelWorks} | itch.io のフル版でのみ使えます。[インストールと認証](/novelworks-docs/ja/getting-started/install-and-activate/)を参照してください。 |
| {ui.native.menu.reportABug} | お問い合わせフォームを開きます。[不具合を報告する](/novelworks-docs/ja/reference/report-a-bug/)を参照してください。 |
| Novelworks について | Windows のみ：バージョン情報のウインドウ。 |

## プロジェクト一覧画面のメニュー

プロジェクト一覧画面で働くメニューコマンドは、新規プロジェクト、プロジェクトを開く、バージョン情報、ショートカット、そして取り消す/やり直す（名前の入力欄用）だけです。
