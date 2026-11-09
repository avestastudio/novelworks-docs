---
title: エフェクト
description: カットに登場、退場、リアクション、画面エフェクト、パーティクル、トランジションを加えます。
---

エフェクトは、カットが始まるときに起こります。カットを選び、[カットパネル](/novelworks-docs/ja/writing/moment-panel/)の「{ui.inspectorTabs.effects}」タブを開いて、「{ui.effects.open}」をクリックします。

![エフェクトのウインドウ。上部の6つのカテゴリ、ゲーム画面、エフェクトのタイル、このカットのエフェクトの一覧があります。](/novelworks-docs/screenshots/effects-library.png)

## 6つのカテゴリ

各カテゴリには5つのエフェクトがあります。

| カテゴリ | エフェクト |
|---|---|
| {ui.effects.category.enter} | {ui.effects.name.fade}、{ui.effects.name.slideLeft}、{ui.effects.name.slideRight}、{ui.effects.name.rise}、{ui.effects.name.zoomIn} |
| {ui.effects.category.exit} | {ui.effects.name.fade}、{ui.effects.name.slideLeft}、{ui.effects.name.slideRight}、{ui.effects.name.fall}、{ui.effects.name.zoomOut} |
| {ui.effects.category.reaction} | {ui.effects.name.jump}、{ui.effects.name.shake}、{ui.effects.name.nod}、{ui.effects.name.recoil}、{ui.effects.name.surprise} |
| {ui.effects.category.screen} | {ui.effects.name.flash}、{ui.effects.name.lightning}、{ui.effects.name.quake}、{ui.effects.name.blackout}、{ui.effects.name.pulse} |
| {ui.effects.category.particles} | {ui.effects.particle.rain}、{ui.effects.particle.snow}、{ui.effects.particle.petals}、{ui.effects.particle.leaves}、{ui.effects.particle.fireflies} |
| {ui.effects.category.transition} | {ui.effects.name.fade}、{ui.effects.name.black}、{ui.effects.name.wipe}、{ui.effects.name.iris}、{ui.effects.name.curtain} |

## エフェクトを追加する

1. カテゴリを選びます。
2. エフェクトをクリックします。ウインドウの画面で再生されるので、好きなだけ試せます。
3. 「{ui.effects.category.enter}」、「{ui.effects.category.exit}」、「{ui.effects.category.reaction}」では、キャラクターを選びます。
4. 設定を調整します。
5. 「{ui.effects.add}」をクリックします。

| 設定 | 対象 | 範囲 |
|---|---|---|
| {ui.camera.seconds} | パーティクル以外のすべて | 0.2〜3秒 |
| {ui.effects.intensity} | リアクション、画面エフェクト、パーティクル | 10〜100% |
| {ui.effects.speed} | パーティクル | 20〜200% |

追加したエフェクトは「{ui.effects.ofThisMoment}」の下に並びます。それぞれの X で削除できます。1つのカットには、パーティクルを除いて最大12個のエフェクトを置けます。

「{ui.effects.playAll}」は、一覧全体をウインドウの中で再生します。

## 順番

エフェクトは、カットが始まるときに、一覧の順番で1つずつ、1回だけ再生されます。

トランジションは、一覧のどこにあっても常に最初です。1つのカットに複数のトランジションを追加すると、最初のものだけが再生されます。

## 退場

舞台上のキャラクターに退場を選ぶと、そのキャラクターはこのカットで舞台からも去ります。退場が再生されるのは、本当にここで去るキャラクターだけです。

## パーティクル

パーティクルは、ほかのエフェクトとは違います。雰囲気と同じように、止めるまでカットからカットへ続きます。「{ui.stage.scopeLabel}」はいつもどおりに働きます。[ステージ](/novelworks-docs/ja/concepts/stage/)を見てください。

1つのカットで表示できるパーティクルは一度に1種類だけです。止めるには、一覧のパーティクルの X をクリックします（「{ui.effects.stopParticles}」）。

## 既定の登場と退場

すべてのキャラクターに、ゲーム全体で同じ登場と退場のしかたを設定できます。「{ui.topBar.gameUI}」、「{ui.gameUI.fontsColors}」、「{ui.effects.defaultsTitle}」の順に開き、「{ui.effects.defaultEnter}」と「{ui.effects.defaultExit}」を選びます。

これらは、カットにそのキャラクター専用のエフェクトがないときに使われます。新しいゲームの設定は「{ui.effects.defaultNone}」です。

## ゲームでは

- 最初のクリックでエフェクトはすぐに終わります。次のクリックで先へ進みます。パーティクルは降り続けます。
- プレイヤーがスキップしたり、セーブをロードしたりしたときは、エフェクトは再生されません。
- プレイヤーがシステムで動きの軽減を求めている場合、エフェクトは再生されず、パーティクルは静止します。

スクリプトモードではエフェクトを書けません。テキストを編集しても、エフェクトは保たれます。

体験版には一部のエフェクトが含まれています。ほかのエフェクトはウインドウで試せますが、追加はできません。[無料体験版](/novelworks-docs/ja/getting-started/demo-edition/)を見てください。
