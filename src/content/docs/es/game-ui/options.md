---
title: Opciones del jugador
description: La pantalla donde los jugadores eligen el tamaño del texto, la velocidad, la fuente y el contraste, y qué controlas tú.
---

La pantalla **{ui.gameUI.options}** es donde los jugadores adaptan el juego a sí mismos. Tú controlas su **aspecto**. Las opciones en sí son las mismas en todos los juegos, y no puedes ocultar ninguna. Los tres volúmenes solo aparecen si tu juego tiene sonidos.

## Qué puedes cambiar

En **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: por defecto el color de la pantalla de título, algo transparente;
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto;
- **{ui.gameUIInspector.buttonStyle}**: el estilo de los botones.

## Qué pueden elegir los jugadores

| Opción | Valores |
|---|---|
| Tamaño del texto | Normal, Grande, Muy grande |
| Velocidad del texto | Lenta, Normal, Rápida, Muy rápida, Instantánea |
| Velocidad del modo Auto | Lenta, Normal, Rápida |
| Fuente adaptada a la dislexia | Activado, Desactivado |
| Alto contraste | Activado, Desactivado |
| {rt.optionsScreen.musicVolume}, {rt.optionsScreen.soundVolume}, {rt.optionsScreen.voiceVolume} (solo si el juego tiene sonidos) | De 0 a 100, de 5 en 5 |

Una línea de ejemplo muestra cómo se verá el texto, y **{rt.optionsScreen.defaults}** lo devuelve todo a su sitio. Los cambios se aplican al instante. Se aplican **sobre** tu Interfaz del juego, solo para ese jugador, y se guardan para tu juego en su navegador.

Si un jugador no ha elegido una velocidad del texto y su sistema pide movimiento reducido, el texto aparece al instante.

Más sobre cada opción, y cómo llegan los jugadores a esta pantalla, en [Opciones y accesibilidad](/novelworks-docs/es/player/options-and-accessibility/).

## Dónde la encuentran los jugadores

El botón **{rt.game.options}** de la pantalla de título, el menú de pausa y el menú rápido si muestras su botón de Opciones. Esc la cierra.
