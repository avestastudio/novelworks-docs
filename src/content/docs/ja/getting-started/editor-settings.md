---
title: エディターとプロジェクトの設定
description: エディターのテーマ、言語、スペルチェックと、プロジェクトごとの設定を説明します。
---

設定には2種類あります。**エディター**の設定（すべてのプロジェクトで共通）と、1つのプロジェクトの設定です。

## エディターの設定

どれも「{ui.menu.view}」メニューと「{ui.native.menu.edit}」メニューにあります。

### テーマ

**{ui.menu.view} → {ui.native.menu.theme}**：「{ui.native.menu.dark}」（初期設定）、「{ui.native.menu.light}」、「{ui.native.menu.system}」（お使いのコンピューターに合わせます）。

### エディターの言語

**{ui.menu.view} → {ui.native.menu.language}**：「{ui.native.menu.languageAuto}」か、7つの言語のどれか（それぞれ自分の言語の名前で表示されます）。メニューとエディターは、開いているすべてのウインドウですぐに切り替わります。この設定はエディターだけのものです。物語やゲームの言語は変わりません。

### スペルチェックの言語（プロジェクトに保存）

これだけは例外です。すべてのプロジェクトで共通ではなく、選んだ内容が**プロジェクトに**保存されます（取り消しもできます）。

**{ui.native.menu.edit} → {ui.native.spelling.spellingLanguage}**。Windows では、初期設定はお使いのコンピューターの言語と英語で、ほかの言語も選べます。Mac では、macOS が文章の言語を自動で判定するので、メニューにはその旨だけが表示されます。

### フルスクリーン

**{ui.menu.view} → {ui.native.role.togglefullscreen}**。

## プロジェクトの設定

上部バーのプロジェクト名をクリックするか、何も選ばない状態にすると、インスペクターに「{ui.inspector.projectSettings}」が表示されます。

| 設定 | 内容 |
|---|---|
| {ui.projectSettings.gameTitle} | ゲームのタイトル。 |
| {ui.projectSettings.author} | 作者としてのあなたの名前。 |
| {ui.project.gameLanguage} | ゲーム自身のボタンやメニューの言語。物語の文章は、あなたが書いたままです。ゲームで使えない言語を選ぶと、その部分には英語が使われます。 |
| {ui.projectSettings.length} | 物語を読むのにかかる長さ。すべてのセリフ、選択肢、エンディングを1回ずつ読んだ場合です（語数と分数）。表示のみで、設定はできません。分岐のある物語を1周する長さは、これより短くなります。 |
| {ui.projectSettings.features} | オンになっているオプションの部品。「{ui.projectSettings.openFeatures}」で、切り替えるための一覧が開きます。 |
| {ui.projectSettings.screenSize} | ゲーム画面のサイズ。1280 × 720 ピクセルです。表示のみです。 |
| {ui.projectSettings.savedIn} | プロジェクトのフォルダー。 |

ここでの変更はすべて、「{ui.native.menu.undo}」で取り消せます。
