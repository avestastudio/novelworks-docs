---
title: Эффекты
description: Добавляйте в момент появления, уходы, реакции, эффекты экрана, частицы и переходы.
---

Эффекты происходят, когда наступает момент. Выберите момент, откройте вкладку «{ui.inspectorTabs.effects}» на [панели момента](/novelworks-docs/ru/writing/moment-panel/) и нажмите «{ui.effects.open}».

![Окно эффектов: шесть категорий сверху, экран игры, плитки эффектов и список эффектов этого момента.](/novelworks-docs/screenshots/effects-library.png)

## Шесть категорий

В каждой категории пять эффектов.

| Категория | Эффекты |
|---|---|
| {ui.effects.category.enter} | {ui.effects.name.fade}, {ui.effects.name.slideLeft}, {ui.effects.name.slideRight}, {ui.effects.name.rise}, {ui.effects.name.zoomIn} |
| {ui.effects.category.exit} | {ui.effects.name.fade}, {ui.effects.name.slideLeft}, {ui.effects.name.slideRight}, {ui.effects.name.fall}, {ui.effects.name.zoomOut} |
| {ui.effects.category.reaction} | {ui.effects.name.jump}, {ui.effects.name.shake}, {ui.effects.name.nod}, {ui.effects.name.recoil}, {ui.effects.name.surprise} |
| {ui.effects.category.screen} | {ui.effects.name.flash}, {ui.effects.name.lightning}, {ui.effects.name.quake}, {ui.effects.name.blackout}, {ui.effects.name.pulse} |
| {ui.effects.category.particles} | {ui.effects.particle.rain}, {ui.effects.particle.snow}, {ui.effects.particle.petals}, {ui.effects.particle.leaves}, {ui.effects.particle.fireflies} |
| {ui.effects.category.transition} | {ui.effects.name.fade}, {ui.effects.name.black}, {ui.effects.name.wipe}, {ui.effects.name.iris}, {ui.effects.name.curtain} |

## Добавить эффект

1. Выберите категорию.
2. Щёлкните эффект. Он воспроизводится на экране в окне, так что можно попробовать сколько угодно эффектов.
3. Для категорий «{ui.effects.category.enter}», «{ui.effects.category.exit}» и «{ui.effects.category.reaction}» выберите персонажа.
4. Настройте параметры.
5. Нажмите «{ui.effects.add}».

| Настройка | Где | Диапазон |
|---|---|---|
| {ui.camera.seconds} | Везде, кроме частиц | от 0,2 до 3 секунд |
| {ui.effects.intensity} | Реакции, эффекты экрана и частицы | от 10 до 100 % |
| {ui.effects.speed} | Частицы | от 20 до 200 % |

Добавленные эффекты перечислены в разделе «{ui.effects.ofThisMoment}». Крестик на каждом из них его удаляет. В моменте может быть до 12 эффектов, не считая частиц.

«{ui.effects.playAll}» воспроизводит весь список в окне.

## В каком порядке

Эффекты воспроизводятся один раз, когда наступает момент, друг за другом в порядке списка.

Переход всегда идёт первым, где бы он ни стоял в списке. Если добавить в момент несколько переходов, воспроизводится только первый.

## Уходы

Если выбрать уход для персонажа на сцене, этот персонаж также покидает сцену в этом моменте. Уход воспроизводится только для персонажа, который действительно уходит здесь.

## Частицы

Частицы отличаются от других эффектов. Они сохраняются от момента к моменту, как и атмосфера, пока вы их не остановите. «{ui.stage.scopeLabel}» работает как обычно: см. [Персонажи остаются на сцене](/novelworks-docs/ru/concepts/stage/).

В моменте показывается только один вид частиц. Чтобы остановить их, нажмите крестик на частицах в списке («{ui.effects.stopParticles}»).

## Появление и уход по умолчанию

Всем персонажам можно задать один способ появляться и уходить на всю игру. Откройте «{ui.topBar.gameUI}», «{ui.gameUI.fontsColors}», «{ui.effects.defaultsTitle}» и выберите «{ui.effects.defaultEnter}» и «{ui.effects.defaultExit}».

Они используются всякий раз, когда у момента нет собственного эффекта для этого персонажа. «{ui.effects.defaultNone}» — настройка для новой игры.

## В игре

- Первый щелчок сразу завершает эффекты. Следующий щелчок переходит дальше. Частицы продолжают падать.
- Когда игрок пропускает момент или загружает сохранение, эффекты не воспроизводятся.
- Если игрок попросил свою систему уменьшить анимацию, эффекты не воспроизводятся, а частицы остаются неподвижными.

В режиме сценария эффекты записать нельзя. При редактировании текста они сохраняются.

В демоверсии есть только часть эффектов. Остальные можно попробовать в окне, но нельзя добавить. См. [Бесплатная демоверсия](/novelworks-docs/ru/getting-started/demo-edition/).
