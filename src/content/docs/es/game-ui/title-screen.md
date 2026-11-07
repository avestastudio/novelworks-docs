---
title: Pantalla de título
description: "La primera pantalla de tu juego: fondo, logotipo y menú."
---

La **{ui.gameUI.titleScreen}** es la primera pantalla que ven los jugadores (después de la [introducción](/novelworks-docs/es/game-ui/intro/) y la [advertencia de contenido](/novelworks-docs/es/game-ui/content-warning/), que son opcionales).

## Fondo

Elige **{ui.gameUIInspector.color}** o **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: por defecto es un azul muy oscuro. «Brilla con el color principal en la parte superior»: el juego dibuja encima un suave resplandor de tu [color principal](/novelworks-docs/es/game-ui/fonts-and-colors/).
- **{ui.gameUIInspector.image}**: elige un fondo, un CG o una imagen de interfaz. Hasta que elijas una, se muestra el color.

## Logotipo

**{ui.gameUIInspector.logoImage}**: cualquier imagen. Se dibuja en la parte superior de la pantalla, manteniendo su proporción. Sin logotipo, el juego escribe el **título de tu juego** (definido en los [ajustes del proyecto](/novelworks-docs/es/getting-started/editor-settings/)), o «{tx.export.untitled}» si está vacío.

## Menú

Solo se puede cambiar el **{ui.gameUIInspector.buttonStyle}**. Los botones y sus palabras son fijos:

- **{rt.game.continue}**: solo aparece cuando el jugador tiene una partida guardada, y carga la más reciente;
- **{rt.game.newGame}**;
- **{rt.game.load}**: aparece cuando se puede guardar;
- **{rt.game.options}**;
- **{rt.game.quit}**: solo en un anfitrión que tenga forma de salir (no en el navegador).

Las palabras de estos botones siguen el [idioma del juego](/novelworks-docs/es/getting-started/editor-settings/) de tu proyecto.
