---
title: Pantalla de título
description: "La primera pantalla de tu juego: fondo, logotipo y menú."
---

La **{ui.gameUI.titleScreen}** es la primera pantalla que ven los jugadores (después de la [introducción](/novelworks-docs/es/game-ui/intro/) y la [advertencia de contenido](/novelworks-docs/es/game-ui/content-warning/), que son opcionales).

## Plantillas

En **{ui.templates.heading}**, cuatro tarjetas dan un aspecto ya preparado: **{ui.templates.title.classic}** (el aspecto de un proyecto nuevo), **{ui.templates.title.darkNight}**, **{ui.templates.title.soft}** y **{ui.templates.title.minimal}**. Un clic define solo el color de fondo y el estilo de los botones de esta pantalla. Tus imágenes, tu fuente y los colores del texto se quedan. Un solo **{ui.topBar.undo}** te devuelve lo que tenías.

La tarjeta de la plantilla actual aparece resaltada. En cuanto cambias uno de esos dos ajustes, ninguna tarjeta queda resaltada.

## Fondo

Elige **{ui.gameUIInspector.color}** o **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: por defecto es un azul muy oscuro. «Brilla con el color principal en la parte superior»: el juego dibuja encima un suave resplandor de tu [color principal](/novelworks-docs/es/game-ui/fonts-and-colors/).
- **{ui.gameUIInspector.image}**: elige un fondo, un CG o una imagen de interfaz. Hasta que elijas una, se muestra el color.

## Logotipo

**{ui.gameUIInspector.logoImage}**: cualquier imagen. Se dibuja en la parte superior de la pantalla, manteniendo su proporción. Sin logotipo, el juego escribe el **título de tu juego** (definido en los [ajustes del proyecto](/novelworks-docs/es/getting-started/editor-settings/)), o «{tx.export.untitled}» si está vacío.

## Música

En **{ui.sound.music}**, **{ui.sound.chooseMusic}** elige una pista de tipo Música, o importa una. Una vez definida, tienes un control deslizante **{ui.sound.volume}** y una X para quitarla. Empieza después de la introducción. Cuando empieza la historia, la música de tus momentos toma el relevo. Consulta [Sonido y música](/novelworks-docs/es/writing/sound/).

Los navegadores no permiten el sonido antes del primer clic o de la primera pulsación de tecla del jugador, así que en un juego web la música empieza en ese instante.

## Menú

Solo se puede cambiar el **{ui.gameUIInspector.buttonStyle}**. Los botones y sus palabras son fijos:

- **{rt.game.continue}**: solo aparece cuando el jugador tiene una partida guardada, y carga la más reciente;
- **{rt.game.newGame}**;
- **{rt.game.load}**: aparece cuando se puede guardar;
- **{rt.game.chapters}**: aparece solo si tu juego tiene al menos un capítulo. Consulta [Capítulos](/novelworks-docs/es/game-ui/chapters/);
- **{rt.game.options}**;
- **{rt.game.credits}**: aparece solo si activaste los créditos y su botón. Consulta [Créditos](/novelworks-docs/es/game-ui/credits/);
- **{rt.game.quit}**: solo en un anfitrión que tenga forma de salir (no en el navegador).

Las palabras de estos botones siguen el [idioma del juego](/novelworks-docs/es/getting-started/editor-settings/) de tu proyecto.
