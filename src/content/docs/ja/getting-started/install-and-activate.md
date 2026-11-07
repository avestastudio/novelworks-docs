---
title: インストールと認証
description: NovelWorks をダウンロードして初めて開き、ダウンロードキーで書き出し機能を使えるようにします。
---

## どのファイルをダウンロードしますか？

| お使いのコンピューター | ファイル |
|---|---|
| Apple Silicon の Mac（M1、M2、M3、M4…） | `Novelworks-<version>-mac-arm64.dmg` |
| Intel の Mac | `Novelworks-<version>-mac-x64.dmg` |
| Windows 10 / 11 | `Novelworks-<version>-win-x64.exe` |

無料体験版にも同じ3つのファイルがあり、バージョン番号のあとに `-demo` が付きます（例：`Novelworks-<version>-demo-win-x64.exe`）。[無料体験版](/novelworks-docs/ja/getting-started/demo-edition/)をご覧ください。

お使いの Mac がどちらかわからないときは、Apple メニュー →「**このMacについて**」を開きます。「チップ：Apple M…」と表示されていれば Apple Silicon です。

## 初めて開くとき

### Mac の場合

Mac 版アプリには、まだ **Apple Developer ID の署名がありません**（アドホック署名のみ）。そのため、初回は macOS が開くのを拒否して警告を出すことがあります。正確な手順は macOS のバージョンによって違います。

1. `.dmg` を開き、**Novelworks** を **アプリケーション** にドラッグします。
2. アプリケーションから開きます。
3. macOS にブロックされたら、**システム設定 → プライバシーとセキュリティ** を見てください。Novelworks についてのメッセージと、このまま開くためのボタンが表示されています。古い macOS では、アプリを右クリックして「**開く**」を選ぶのが一般的な方法です。

### Windows の場合

`.exe` を実行します。インストーラーでは、インストール先のフォルダーを選べます。インストールは自分のユーザーだけが対象で、デスクトップにショートカットも作られます。実行時に Windows がセキュリティの警告を出した場合は、たいてい「実行する」方法が用意されています。表示される文言は Windows のバージョンによって違います。

## エディターの言語を選ぶ

初めて起動すると、NovelWorks が「{ui.languageDialog.title}」と聞いてきます。言語を選んで「{ui.languageDialog.continue}」をクリックしてください。選ばずにウインドウを閉じた場合は、お使いのコンピューターの言語になります。あとから **{ui.menu.view} → {ui.native.menu.language}** で変えられます。そのあと[プロジェクト画面](/novelworks-docs/ja/getting-started/projects-screen/)が表示されます。

## NovelWorks を認証する（製品版）

製品版では、購入時に届くダウンロードキーが必要です。キーがなくても、プロジェクトを開いたり、編集したり、プレイしたりはできます。ロックされるのは書き出しだけです。ファイルメニューの書き出しコマンドを選ぶと、代わりに認証ウインドウが開きます。

1. **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}** を開きます。同じウインドウは、プロジェクト画面と「NovelWorks について」ウインドウからも開けます。
2. 「{ui.activateDialog.downloadKey}」にダウンロードキーを貼り付けます。ダウンロードページのアドレス全体を貼り付けてもかまいません。
3. 「{ui.activateDialog.activate}」をクリックします。

キーの見つけ方：購入時のメールをブラウザーで開き、NovelWorks のダウンロードページを開いて、ダウンロードキーかページのアドレスをコピーします。

![ダウンロードキーの欄が空の「NovelWorks を認証」ダイアログ](/novelworks-docs/screenshots/activate-novelworks.png)

知っておくと便利なこと：

- 認証は認証サーバーに接続するので、インターネット接続が必要です。いったん認証すれば、NovelWorks は起動のたびにお使いのコンピューター上でライセンスを確認します。そのため、インターネットがなくても書き出せます。
- 認証ウィンドウには、**1つのキーは最大3台のコンピューターで使える**こと、そして1台の認証を解除すれば別のコンピューターでキーを使えることが書かれています。解除するには、同じウインドウを開いて「{ui.activateDialog.deactivateThisDevice}」をクリックします。これもサーバーに接続するので、インターネット接続が必要です。
- キーがすでに上限の台数で認証されていると表示されたら、別のコンピューターで NovelWorks の認証を解除するか、ウインドウの「{ui.activateDialog.contactUs}」を使ってください。

認証に失敗したときは、ウインドウに対処法を示すメッセージが表示されます。[FAQ](/novelworks-docs/ja/reference/faq/)もご覧ください。
