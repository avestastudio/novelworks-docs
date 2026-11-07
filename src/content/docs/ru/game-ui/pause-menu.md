---
title: Меню паузы
description: Меню, которое игроки открывают во время игры правой кнопкой мыши или клавишей Esc.
---

**{ui.gameUI.pauseMenu}** «открывается правой кнопкой мыши или клавишей Esc». На сенсорном экране способ открыть его предоставляет приложение, в котором запущена игра.

## Что можно изменить

- **{ui.gameUIInspector.buttonStyle}**: по умолчанию «{tx.gameUIInspector.sameAsFontsColors}».
- **{ui.gameUIInspector.panelColor}**: по умолчанию «{tx.gameUIInspector.sameAsTheDialogueBox}».
- **{ui.gameUIInspector.textColor}**: по умолчанию «{tx.gameUIInspector.sameAsTheTextColor}».

## Кнопки

Здесь их изменить нельзя, и они следуют языку игры:

- **{rt.game.resume}**;
- **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (F5) и **{rt.game.quickLoad}** (F9): только когда сохранение доступно. **{rt.game.quickLoad}** к тому же ждёт, пока появится быстрое сохранение;
- кнопка инвентаря (с надписью «{rt.theme.inventory}», если вы не изменили её на [экране инвентаря](/novelworks-docs/ru/game-ui/inventory-ui/)), когда функция «Инвентарь» включена;
- **{rt.game.history}** (H);
- **{rt.game.options}**;
- кнопка карты (с надписью «{rt.theme.map}», если вы не изменили её на [экране кнопки карты](/novelworks-docs/ru/game-ui/map-button/)), когда карту можно открыть в данный момент (всегда или после того, как история впервые её показала);
- **{rt.game.backToTitle}**.

Заголовок панели — «{tx.game.paused}».
