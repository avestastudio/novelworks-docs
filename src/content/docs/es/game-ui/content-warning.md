---
title: Advertencia de contenido
description: Avisa a los jugadores de temas delicados antes de empezar.
---

La **{ui.gameUI.contentWarning}** se muestra antes de la pantalla de título, después de tus imágenes de introducción. Los jugadores la leen y hacen clic en **{rt.game.continue}**.

## Actívala

Activa **{ui.contentWarning.enabled}**. Está desactivada por defecto.

## Qué dice

- **{ui.contentWarning.topics}**: marca cualquiera de once temas: Violencia, Sangre, Muerte, Suicidio, Autolesiones, Maltrato, Terror, Contenido sexual, Drogas, Lenguaje soez, Luces intermitentes. La pantalla del jugador enumera los marcados bajo «{tx.contentWarning.contains}», siempre en este orden.
- **{ui.contentWarning.message}**: texto libre mostrado bajo la lista, por ejemplo unas palabras amables o una indicación de dónde buscar ayuda. Es opcional.

## Cuándo aparece

En **{ui.contentWarning.when}**:

- **{ui.contentWarning.firstLaunch}** (por defecto): cada jugador la ve la primera vez que inicia el juego. Queda recordado en su navegador.
- **{ui.contentWarning.everyLaunch}**: se muestra cada vez que se inicia el juego.

En el modo Jugar del editor, se muestra cada vez que pulsas Jugar.

## Su aspecto

En **{ui.gameUIInspector.screen}**: **{ui.gameUIInspector.backgroundColor}** (el de la pantalla de título por defecto), **{ui.gameUIInspector.textColor}** y **{ui.gameUIInspector.buttonStyle}**.

## Qué hacen los jugadores

La única forma de pasarla es el botón **{rt.game.continue}**, que tiene el foco cuando se abre la pantalla. Hacer clic en otro sitio no la omite. Con el teclado, **Tab** se queda en el botón, y **Intro** o **Espacio** lo pulsan.
