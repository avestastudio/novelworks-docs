---
title: 通知
description: "「入手しました: 鍵」のような短いメッセージと、その表示時間です。"
---

「{ui.gameUI.notices}」は、「入手しました: 鍵」のような短いメッセージです。アイテムについて表示するには[インベントリ機能](/novelworks-docs/ja/features/inventory/)が必要です。機能がオフのときは、このページにその旨が表示されます。

## 変更できること

- 「{ui.gameUIInspector.position}」:上(初期設定)、中央、下から選びます。
- 「{ui.gameUIInspector.backgroundColor}」:初期設定は「{tx.gameUIInspector.sameAsTheDialogueBox}」です。
- 「{ui.gameUIInspector.textColor}」:初期設定は「{tx.gameUIInspector.sameAsTheTextColor}」です。
- 「{ui.gameUIInspector.shownFor}」:「入手しました: …」と「失いました: …」が画面に表示される時間です。1〜10秒(初期設定は2.5)。

## 表示される内容

- 「入手しました: 鍵」と「失いました: 鍵」。
- 積み重ねられるアイテムが2個以上変わったとき:「コイン × 3」。

同時に変わったすべてのアイテムについて、通知はひとつだけ表示されます。同じボックスには、「{tx.game.quickSaved}」のような小さなシステムメッセージも表示されます。
