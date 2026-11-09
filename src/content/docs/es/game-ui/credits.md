---
title: Créditos
description: Añade créditos en movimiento a tu juego, en la pantalla de título, después de un final o en ambos sitios.
---

**{ui.gameUI.credits}** añade créditos en movimiento a tu juego. Ve a **{ui.topBar.gameUI}** y elige **{ui.gameUI.credits}** en la lista de pantallas.

![La pantalla Créditos en la Interfaz del juego, con los interruptores, tus líneas y la vista previa.](/novelworks-docs/screenshots/game-ui-credits.png)

Los créditos están desactivados en un juego nuevo. Activa **{ui.credits.enabled}** para empezar.

## Dónde aparecen

En **{ui.credits.where}**, dos interruptores funcionan por separado. Al principio los dos están activados.

- **{ui.credits.onTitleScreen}** añade un botón **{rt.game.credits}** a la pantalla de título.
- **{ui.credits.afterEnding}** hace pasar los créditos cuando el jugador sale de un final: un [momento Final](/novelworks-docs/es/branching/endings/) o la [pantalla **{ui.gameUI.theEnd}**](/novelworks-docs/es/game-ui/ending-screen/). Después viene la pantalla de título.

## Qué dicen

Los créditos empiezan con el título del juego y su autor, tomados de los [ajustes del proyecto](/novelworks-docs/es/getting-started/editor-settings/).

Luego vienen **{ui.credits.lines}**. Haz clic en **{ui.credits.addLine}** y rellena:

- **{ui.credits.role}**, por ejemplo «Arte»;
- **{ui.credits.names}**, un nombre por línea.

Puedes tener hasta 30 líneas. Las flechas cambian su orden, y una línea vacía se ignora.

**{ui.credits.madeWith}** está activado al principio. Puedes desactivarlo.

## El aspecto

Puedes definir **{ui.gameUIInspector.backgroundColor}**, **{ui.gameUIInspector.textColor}** y **{ui.gameUIInspector.buttonStyle}**. **{ui.gameUIInspector.resetToDefault}** restablece toda la página, no solo el aspecto: tus líneas se borran y los créditos se desactivan. NovelWorks pregunta antes, y {ui.topBar.undo} los recupera.

## En el juego

Los créditos suben solos y se detienen al final, con las últimas líneas todavía en pantalla. **{rt.credits.back}** los cierra, y también `Esc`, `Enter` y `Space`.

Si el jugador ha pedido a su sistema menos movimiento, nada se mueve: se muestra la lista entera y se puede desplazar. La vista previa del editor funciona igual.
