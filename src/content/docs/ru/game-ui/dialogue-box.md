---
title: Текстовое окно
description: "Где появляются имена и реплики: положение, размер, фон, текст и аватар."
---

**{ui.gameUI.dialogueBox}** — это окно, которое показывает имя говорящего и текст. Его размер и место заданы в процентах от экрана (в основном от его высоты), поэтому оно выглядит одинаково при любом разрешении.

## Шаблоны

В разделе «{ui.templates.heading}» четыре карточки сами размещают окно: «{ui.templates.dialogue.classic}» (внизу), «{ui.templates.dialogue.sidePanel}» (справа), «{ui.templates.dialogue.centerCard}» и «{ui.templates.dialogue.topBanner}». Щелчок меняет только положение, отступ, ширину и высоту. Цвета, табличка с именем, аватар, картинки и текст остаются такими, как вы их задали. Одно нажатие «{ui.topBar.undo}» возвращает всё как было.

Карточка текущего шаблона подсвечена, пока вы не измените одну из этих настроек.

## Положение и размер

- **{ui.gameUIInspector.position}**: {ui.gameUIInspector.bottom} (по умолчанию), {ui.gameUIInspector.top}, {ui.gameUIInspector.left}, {ui.gameUIInspector.right} или {ui.gameUIInspector.center}. Выбор положения также задаёт ширину и высоту с хорошими начальными значениями: широкая полоса для верха и низа, высокая панель (около трети экрана) для левого и правого края и окно посередине для центра.
- **{ui.gameUIInspector.margin}**: расстояние до краёв экрана (от 0 до 20 %, по умолчанию 3,5).
- **{ui.gameUIInspector.width}** и **{ui.gameUIInspector.height}**: от 10 до 100 %. После выбора положения их можно подправить.

## Цвета слов

В разделе «{ui.richText.palette}» пять цветов с номерами от 1 до 5. Именно они предлагаются, когда вы выделяете слова в реплике. См. [Оформление текста](/novelworks-docs/ru/writing/rich-text/). Если изменить цвет здесь, изменятся и все слова, которые его используют.

## Фон

Выберите **{ui.gameUIInspector.color}** или **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: цвет и **{ui.gameUIInspector.opacity}** (от 0 до 100 %, по умолчанию 80). Этот цвет также является цветом по умолчанию для кнопок выбора, меню паузы и других панелей («{tx.gameUIInspector.sameAsTheDialogueBox}») и для вкладки с именем. Это остаётся верным, даже когда само окно использует картинку: цвет и непрозрачность тогда не видны на окне, но по-прежнему окрашивают эти кнопки и панели.
- **{ui.gameUIInspector.image}**: любая картинка. Прозрачные части остаются прозрачными, поэтому можно использовать облачка, свитки или любую форму. Выберите, как она подгоняется:
  - **{ui.gameUIInspector.stretch}**: заполняет всё окно (картинка может выглядеть сплющенной);
  - **{ui.gameUIInspector.fit}**: вся картинка с сохранением формы;
  - **{ui.gameUIInspector.slice}**: углы сохраняют свой размер, а края и середина растягиваются. Задайте **{ui.gameUIInspector.cornerSize}** (в % от картинки). По умолчанию углы показываются в исходном размере картинки; снимите эту галочку, чтобы задать **{ui.gameUIInspector.cornerDisplaySize}**, что полезно для больших рамок с высоким разрешением.

## Текст и имя

- **{ui.gameUIInspector.textColor}**: по умолчанию «{tx.gameUIInspector.sameAsTheTextColor}».
- **{ui.gameUIInspector.nameColor}**: **{ui.gameUIInspector.characterColors}** (у каждого персонажа свой [цвет имени](/novelworks-docs/ru/writing/characters/), по умолчанию) или **{ui.gameUIInspector.oneColor}** (один **{ui.gameUIInspector.colorOfEveryName}** для всех).
- **{ui.gameUIInspector.textPadding}**: расстояние между краем окна и текстом (от 0 до 15 %, по умолчанию 4).
- **{ui.gameUIInspector.speakerName}**: **{ui.gameUIInspector.insideTheBox}** (по умолчанию) или **{ui.gameUIInspector.tabAbove}** (вкладка над окном).

## Аватар

Когда говорит персонаж с аватаром, аватар показывается рядом с именем. Аватары задаются на [вкладке «Персонажи»](/novelworks-docs/ru/writing/characters/).

- **{ui.gameUIInspector.side}**: слева (по умолчанию) или справа.
- **{ui.gameUIInspector.size}**: от 5 до 60 % высоты экрана (по умолчанию 20). Никогда не выше окна.

## Проверка

Кнопка **{ui.gameUIMode.longTextAvatar}** над предпросмотром покажет длинную реплику и персонажа с аватаром.
