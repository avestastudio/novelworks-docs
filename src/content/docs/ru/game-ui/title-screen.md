---
title: Титульный экран
description: "Первый экран вашей игры: фон, логотип и меню."
---

**{ui.gameUI.titleScreen}** — это первый экран, который видят игроки (после необязательной [заставки](/novelworks-docs/ru/game-ui/intro/) и [предупреждения о содержании](/novelworks-docs/ru/game-ui/content-warning/)).

## Фон

Выберите **{ui.gameUIInspector.color}** или **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: по умолчанию это очень тёмно-синий. Он «светится основным цветом сверху»: игра рисует поверх него мягкое свечение вашего [основного цвета](/novelworks-docs/ru/game-ui/fonts-and-colors/).
- **{ui.gameUIInspector.image}**: выберите фон, CG или картинку интерфейса. Пока вы ничего не выбрали, показывается цвет.

## Логотип

**{ui.gameUIInspector.logoImage}**: любая картинка. Она рисуется в верхней части экрана с сохранением пропорций. Если логотипа нет, игра пишет **название вашей игры** (оно задаётся в [настройках проекта](/novelworks-docs/ru/getting-started/editor-settings/)) или «{tx.export.untitled}», если название пустое.

## Меню

Можно изменить только **{ui.gameUIInspector.buttonStyle}**. Кнопки и их надписи фиксированы:

- **{rt.game.continue}**: показывается, только если у игрока есть сохранение, и загружает последнее из них;
- **{rt.game.newGame}**;
- **{rt.game.load}**: показывается, когда сохранение возможно;
- **{rt.game.options}**;
- кнопка выхода: только там, где есть способ **{rt.game.quit}** (не в браузере).

Надписи на этих кнопках следуют [языку игры](/novelworks-docs/ru/getting-started/editor-settings/) вашего проекта.
