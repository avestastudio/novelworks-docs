---
title: ゲームの記憶
description: "スコアとできごと: ゲームがプレイヤーの行動を覚える仕組みです。"
---

選択は、ゲームがそれを **覚えて** いてはじめて意味を持ちます。NovelWorks は、起きたことを変数に保存します。変数には 2 種類あります。

| 種類 | 持つ内容 | 例 |
|---|---|---|
| {ui.variables.number} | ゲームが増やしたり減らしたりできる数。 | ミアの好感度、所持金 |
| {ui.variables.yesNo} | 何かが起きたかどうか: {ui.variables.yes} か {ui.variables.no} です。 | 「{tx.memory.factExample}」、「鍵を持っている」 |

プレイヤーが持ち歩くもの(鍵、手紙、コインなど)は、別の、なくてもよい機能です。[インベントリ](/novelworks-docs/ja/features/inventory/)を見てください。

## 変数タブ

「{ui.leftPanel.variables}」タブには変数が一覧で表示されます。それぞれの種類と初期値も分かります(「スコア · 初期値 0」)。「{ui.variablesTab.newVariable}」をクリックすると、「変数N」という名前のスコアが追加されます(N は変数の数です)。そのあとインスペクターで、名前を変えたり、初期値(「{ui.variableInspector.startsAt}」)を設定したりします。「{ui.variableInspector.type}」も変更できます。変数がすでに使われている場合、NovelWorks は確認を求め、値をリセットします。

使われている変数を削除すると、NovelWorks が警告します。その変数を使っていた場所はそのまま残り、警告が表示されます。

## ゲームに何かを覚えさせる

最初に変数タブを使うことは、あまりありません。「{ui.moments.choice}」では、各選択肢に「{ui.branchInspectors.changes}」の欄があります。「{ui.memory.remember}」をクリックすると、パネルに「{ui.memory.rememberTitle}」と表示されます。

1. 「{ui.memory.scoreTitle}」(「ミアの好感度」のように、増えたり減ったりする数)か、「{ui.memory.factTitle}」(「{tx.memory.factExample}」のように、起きたかどうかを はい / いいえ で表すもの)を選び、「{ui.memory.nameLabel}」に名前を入力します。
2. すでにある変数を使う場合は、「{ui.memory.orPick}」から選びます。
3. 「{ui.memory.createAndUse}」をクリックします。

新しい変数であれば NovelWorks が作成し、その変更を選択肢に追加します。これが一度に行われます。スコアは「+1 を足す」から、できごとは「はい にする」から始まります。数量はあとから編集できます。

## ゲームが覚えていることを使う

「{ui.moments.condition}」カットは、変数に応じてストーリーを別のシーンに進めます。また、選択肢を、条件が満たされたときだけ表示することもできます。スコアでは、次の比較ができます: である、でない、以上、以下、より大きい、より小さい。できごとでは、である、でない。[ストーリーの分岐のしくみ](/novelworks-docs/ja/concepts/how-stories-branch/)と[条件](/novelworks-docs/ja/branching/conditions/)を見てください。

## 選択で合計いくつになるか

スコアの条件の下に、NovelWorks が起こりうることを表示します。自分で数える必要はありません。

- 「選択によって、Affection は合計で最大 +5 増やせます。」
- 「選択によって、Affection は合計で 0 から 5 の間で変わります。」
- 「まだ Affection を変えるものはありません。0 のままです。」

比べる数を入力すると、「これは起こりえます」と表示されます。成立しない場合は「これは決して成立しません。Affection は 0 から 5 の間にとどまります」と警告されます。スコアがどこまで高く、または低くなるか NovelWorks に分からないとき(たとえばシーンがループしているときや、エリアが毎回働くときなど)は、合計に上限がないため、何も表示されません。

「{ui.memory.tryTitle}」ボックスで「{ui.moments.condition}」を試せます。仮の値を選ぶと、どのケースが成立するか、ストーリーがどこへ進むかが、プレイせずに表示されます。
