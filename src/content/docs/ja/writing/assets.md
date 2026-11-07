---
title: 素材
description: 画像を読み込み、タイプを選び、素材タブで管理します。
---

ゲームのすべての画像は、プロジェクトの中の **画像** です。背景、キャラクターの画像、イラスト、物の画像、ゲーム自体の画面に使う画像などがあります。画像は「{ui.leftPanel.assets}」タブにあり、プロジェクトの `assets` フォルダーにコピーされます。

## 形式と上限

- **PNG、JPG、WebP** のみです(`.jpeg` も使えます)。
- 1 ファイルにつき最大 **50 MB** です。ほかのファイルは読み込まれず、NovelWorks が一覧で知らせます。
- 画像のサイズ変更や変換は行いません。ゲーム画面より小さい背景は引き伸ばされ、ぼやけて見えることがあります。読み込みウインドウが警告します。

## 画像を読み込む

方法は 3 つあります。

- 素材タブの「{ui.assetsTab.import}」をクリックします(複数のファイルを選べます)。
- **画像をエディターのウインドウにドラッグします。** 「{tx.dropOverlay.dropYourImagesHere}」と表示されます。ドロップすると、素材タブが開きます。
- ピッカーの読み込みショートカットを使います。たとえば、背景や表情を選ぶときです。

そのあとウインドウが開き、画像ごとに「{ui.importDialog.name}」と「{ui.importDialog.type}」を確認するよう求められます。手間を省くため、NovelWorks がタイプを推測します。透明部分のある画像は立ち絵、横長または正方形の画像は背景、縦長の画像は立ち絵と推測されます。推測はどれも変更できます。「{ui.dialogs.cancel}」を押すと、何もコピーされません。

キャラクターの立ち絵では、「{ui.importDialog.addToCharacter}」も選べます。既存のキャラクターか「{ui.importDialog.newCharacter}」を選び、「{ui.importDialog.expressionName}」を設定します。ファイル名が `mia_happy` で、ミア(Mia)というキャラクターがいれば、NovelWorks が自動で Mia と「happy」を提案します。複数の画像を読み込むときは、すべてのタイプやキャラクターを一度に設定できます。

## 画像のタイプ

| タイプ | 用途 |
|---|---|
| {ui.assetTypes.background} | キャラクターの後ろで、画面いっぱいに表示されます。 |
| {ui.assetTypes.characterSprite} | キャラクターの画像で、表情に使われます。 |
| {ui.assetTypes.cG} | 特別なできごとのための、全画面のイラストです。 |
| {ui.assetTypes.prop} | 物(鍵、手紙など)の画像で、探索カットの舞台に置かれます。 |
| {ui.assetTypes.uI} | ゲーム自体の画面のための画像です: ダイアログボックス、ロゴ、ボタンなど。 |
| {ui.assetTypes.avatar} | 話者の名前の横に表示される、小さな肖像です。 |

背景のピッカーには、背景と CG が表示されます。

## 素材タブ

チップで、タイプごとに一覧を絞り込めます。各タイプの画像の数も表示されます。画像を選ぶと、インスペクターに内容が表示されます。

- 「{ui.assetInspector.name}」: NovelWorks に表示される名前です。変更してもファイル名は変わりません。
- 「{ui.assetInspector.type}」: いつでも変更できます。
- 「{ui.assetInspector.usedIn}」: 画像が使われている場所です。使われていなければ「{tx.assetInspector.notUsedYet}」と表示されます。
- 「{ui.assetInspector.file}」: `assets` フォルダーの中のファイルです。

画像を右クリックすると、「{ui.contextMenus.rename}」、「{ui.contextMenus.showUsages}」、「{ui.contextMenus.delete}」が使えます。

ファイル名は整えられます(ファイル名に使えない文字は取り除かれます)。すでに同じ名前がある場合、新しいファイルは `name-2.png`、`name-3.png`… になります。既存のファイルが上書きされることはありません。

## 画像を差し替える

画像そのものは、その場で差し替えられません。キャラクターの場合は、表情の画像をクリックして「{ui.characterInspector.changeImage}」を選びます。別の画像を読み込むか選ぶと、表情がその画像を指すようになります。古い画像は素材タブに残ります。

## 画像を削除する

「{ui.assetInspector.deleteImage}」をクリックします。NovelWorks は先に確認します。画像が使われている場合は、その場所を一覧で示し、それらの場所に画像がなくなると警告します。ファイルはすぐには消えません。保存すると `backups/deleted-assets` に移され、元に戻したりバックアップを復元したりすると戻ります。[保存、バックアップ、取り消し](/novelworks-docs/ja/getting-started/saving-and-undo/)を見てください。
