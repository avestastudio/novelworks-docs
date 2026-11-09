---
title: よくある質問
description: よく聞かれる質問への、短い答え。
---

## はじめに

**プログラミングの知識は必要ですか？** いいえ。NovelWorks は、プログラミングをしない人のために作られています。見たままの形でゲームを作って、プレイを押すだけです。

**ゲームの権利は誰のものですか？** あなたのものです。バージョン情報のウインドウにも「ゲームはあなたのもので、ロイヤリティはかかりません」と書かれています。ゲームに含まれる無料のフォントには、それぞれのオープンライセンスが適用されます。

**エディターは何語に対応していますか？** 英語、フランス語、スペイン語、ブラジルのポルトガル語、簡体字中国語、ロシア語、日本語です。**{ui.menu.view} → 言語** で変更できます。ストーリーは、あなたが書いた言語のままです。

**体験版でゲームを最後まで作れますか？** すべてを試して、エディターの中でプレイできます。ただし、キャラクターやサウンドの数など、体験版には一部の制限があり、書き出せるのは 5 シーン以下のゲームです。[無料体験版](/novelworks-docs/ja/getting-started/demo-edition/)と[ライセンスとエディション](/novelworks-docs/ja/reference/licenses-and-editions/)を参照してください。

## 作品について

**プロジェクトはどこにありますか？** 作成するときに選んだフォルダの中です。プロジェクト設定の「{tx.projectSettings.savedIn}」に表示されます。プロジェクトをコピーするには、フォルダ全体をコピーしてください。

**変更が消えてしまいました。** まず {ui.topBar.undo}（最大 200 ステップ）を試し、次に **{ui.native.menu.file} → {ui.native.menu.restoreFromBackup}** を試してください。[保存、バックアップ、取り消し](/novelworks-docs/ja/getting-started/saving-and-undo/)を参照してください。

**画像、シーン、変数をうっかり削除してしまいました。** {ui.topBar.undo} を押してください。削除した画像は `backups/deleted-assets` に残っていて、取り消すと戻ります。削除したシーンや変数も取り消せます。それまでの間、それを使っていた場所には警告が表示されます。

**プロジェクトを別のコンピュータに移せますか？** はい。フォルダをコピーして、**{ui.native.menu.file} → {ui.native.menu.openProject}** で開いてください。

## 書くこと

**次のカットでも、キャラクターが画面に残っているのはなぜですか？** キャラクターは、変更するまでステージに残ります。[ステージ](/novelworks-docs/ja/concepts/stage/)を参照してください。

**選択を意味のあるものにするには？** 選択肢の中でゲームに何かを覚えさせ、そのあとで「もし…」や選択肢の条件を使います。[ストーリーの分岐のしくみ](/novelworks-docs/ja/concepts/how-stories-branch/)を参照してください。

**ストーリー全体をテキストで書けますか？** はい。[スクリプトモード](/novelworks-docs/ja/writing/script-mode/)と、[スクリプトの読み込みと書き出し](/novelworks-docs/ja/writing/import-a-script/)を参照してください。

**音楽、効果音、ボイスを追加できますか？** はい。MP3、OGG、WAV のファイルを読み込みます。[サウンドと音楽](/novelworks-docs/ja/writing/sound/)を参照してください。

**背景を動かせますか？** はい。アニメーション GIF と WebP の画像、MP4 と WebM の動画（ループ再生、音声なし）を使えます。[雰囲気とアニメーション背景](/novelworks-docs/ja/writing/ambience-and-animated-backgrounds/)を参照してください。

**キャラクターの服を着替えさせられますか？** はい。[衣装](/novelworks-docs/ja/writing/outfits/)を参照してください。

**一部の言葉に色を付けたり、震えさせたりできますか？** はい。[リッチテキスト](/novelworks-docs/ja/writing/rich-text/)を参照してください。

**クレジットやチャプターを追加できますか？** はい。[クレジット](/novelworks-docs/ja/game-ui/credits/)と[チャプター](/novelworks-docs/ja/game-ui/chapters/)を参照してください。

**自分のフォントを使えますか？** まだ使えません。4 つのフォントから選べます。[フォントとカラー](/novelworks-docs/ja/game-ui/fonts-and-colors/)を参照してください。

## テストと公開

**途中からテストするには？** カットを選んで {ui.leftPanel.playFromHere} を使います。[プレイ、ここからプレイ、マップをテスト](/novelworks-docs/ja/testing/play/)を参照してください。

**警告はどういう意味ですか？** [問題: すべての警告](/novelworks-docs/ja/testing/problems/)を参照してください。警告が出ても、プレイや書き出しはできます。

**プレイヤーは何かをインストールする必要がありますか？** いいえ。ウェブ書き出しのゲームは、パソコンでもスマートフォンでも、どのブラウザでも遊べます。[Web書き出し](/novelworks-docs/ja/publish/web-export/)を参照してください。

**プレイヤーのセーブデータはどこに保存されますか？** あなたのゲーム用に、プレイヤーのブラウザの中に保存されます。ゲームをアップデートしても残ります。[セーブとロード](/novelworks-docs/ja/player/save-and-load/)を参照してください。

## 困ったとき

**書き出しがロックされています。** フル版では、NovelWorks を認証してください。**{ui.native.role.help} → {ui.native.menu.activateNovelWorks}** です。[トラブルシューティング](/novelworks-docs/ja/reference/troubleshooting/)を参照してください。

**ほかにおかしいことがあります。** [トラブルシューティングとメッセージ](/novelworks-docs/ja/reference/troubleshooting/)を見るか、[不具合を報告する](/novelworks-docs/ja/reference/report-a-bug/)してください。
