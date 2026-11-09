---
title: サウンドと音楽
description: サウンドを読み込み、カットに音楽、環境音、効果音、ボイスを設定して、タイムラインで確認します。
---

## サウンドを読み込む

NovelWorks は MP3、OGG、WAV のファイルを読み込めます。次の方法で読み込みます。

- 「{ui.leftPanel.assets}」タブの「{ui.assetsTab.import}」で。
- ファイルをエディターのウインドウにドロップして。
- 「{ui.sound.tab}」タブでサウンドを選ぶ場所の「{ui.sound.import}」で。

サウンドには「{ui.assetTypes.music}」、「{ui.assetTypes.sound}」、「{ui.assetTypes.voice}」のタイプがあります。「{ui.leftPanel.assets}」タブの「{ui.assetsTab.sounds}」フィルターで、すべて表示できます。

## サウンドタブ

カットを選び、[カットパネル](/novelworks-docs/ja/writing/moment-panel/)の「{ui.sound.tab}」タブを開きます。

![カットのサウンドタブ。音楽、環境音、効果音、セリフのボイスがあります。](/novelworks-docs/screenshots/moment-sound-tab.png)

### 音楽と環境音

「{ui.sound.music}」と「{ui.sound.ambience}」は、重なってループ再生されます。それぞれ3つの選択肢があります。

| 選択肢 | 内容 |
|---|---|
| {ui.sound.continue} | 何も変わりません。タブに再生中のものが表示されます。 |
| {ui.sound.chooseMusic} / {ui.sound.chooseAmbience} | ここでサウンドを始めます。「{ui.sound.volume}」と「{ui.sound.fade}」を設定できます。 |
| {ui.sound.stop} | ここでサウンドを止めます。「{ui.sound.fade}」を設定できます。 |

「{ui.sound.fade}」は0〜10秒です。前の音が新しい音に切り替わるまでの時間です。

「{ui.sound.chooseMusic}」には音楽が一覧表示されます。「{ui.sound.chooseAmbience}」には効果音と音楽が一覧表示されます。

### 効果音

「{ui.sound.effects}」は、カットが始まるときに1回、最後まで再生されます。1つのカットに6つまで設定できます。セリフ、選択肢、探索、エンディングなど、プレイヤーに見えるカットで使えます。

### ボイス

「{ui.sound.voice}」は、セリフのカットで使えます。ボイスは、プレイヤーが次のセリフに進むと止まります。

選んだサウンドの横の「{ui.sound.listen}」で、タブから音を確認できます。

## どこまで続くか

音楽と環境音は、カットで変えるまで、カットからカットへ、シーンからシーンへ流れ続けます。

サウンドの設定は「{ui.stage.scopeLabel}」の影響を受けません。

## タイムラインでは

タイムラインの下の色付きの帯で、音楽と環境音がどこまで続くかがわかります。切れ目のある帯は、そのサウンドが前のシーンから続いていることを示します。

![カットの下にサウンドの帯があるタイムライン。](/novelworks-docs/screenshots/sound-timeline.png)

もう1つの行は、効果音やボイスのあるカットを示します。帯や印をクリックすると、そのカットの「{ui.sound.tab}」タブが開きます。

前のシーンから何が続いているかは、エディターがシーン一覧の順番をもとに判断します。プレイヤーが実際にたどる道筋は違うことがあります。ゲームでは、プレイヤーが実際に聞いてきたものに従って再生されます。

## タイトル画面の音楽

「{ui.topBar.gameUI}」、「{ui.gameUI.titleScreen}」、「{ui.sound.music}」の順に開き、「{ui.sound.chooseMusic}」をクリックします。タイトル画面でループ再生されます。環境音はタイトル画面では止まります。

## ゲームでは

- プレイヤーがスキップしたり、セーブをロードしたりしたときは、効果音とボイスは再生されません。音楽と環境音は続きます。
- オートでは、ゲームはボイスが終わるのを待ちます。
- [オプション](/novelworks-docs/ja/game-ui/options/)では、プレイヤーは3つの音量を調整できます。「{rt.optionsScreen.musicVolume}」、「{rt.optionsScreen.soundVolume}」、「{rt.optionsScreen.voiceVolume}」です。ゲームにサウンドがあるときだけ表示されます。環境音は「{rt.optionsScreen.soundVolume}」に従います。

## Web ゲームでは

ブラウザは、プレイヤーが最初にクリックするかキーを押すまで、サウンドの再生を許可しません。許可されなかったサウンドは、そのときに始まります。

## 制限

体験版では、サウンドファイルは5つまでです。[無料体験版](/novelworks-docs/ja/getting-started/demo-edition/)を見てください。
