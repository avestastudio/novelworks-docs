---
title: Herramientas del modo Jugar
description: "La barra sobre el juego cuando juegas: variables y objetos, pantalla inicial, reinicio, partidas de prueba y líneas leídas."
---

Cuando juegas en el editor, una barra en la parte superior reúne las herramientas de prueba. Los botones de la barra nunca toman el foco del teclado, así que **Espacio** y **Enter** siguen yendo al juego.

![Modo Jugar: la barra de herramientas arriba, y el panel de variables y objetos a la derecha.](/novelworks-docs/screenshots/play-bar.png)

| Herramienta | Qué hace |
|---|---|
| **{ui.playOverlay.playing}** y dónde estás | La escena y el momento, siempre al día. |
| «{tx.playOverlay.rightClickGameMenu}» | Un recordatorio: un clic derecho abre el menú de pausa del juego. |
| **{ui.playOverlay.variablesItems}** | Muestra u oculta un panel con los valores en vivo de tus variables y tus objetos (mira abajo). |
| **{ui.playOverlay.openMap}** | Abre el mapa ahora, aunque los jugadores aún no pudieran abrirlo en este punto. **{rt.game.back}** vuelve a donde estabas. Solo si tu juego tiene mapa. |
| **{ui.playOverlay.showSplash}** | Muestra la pantalla «Hecho con NovelWorks» con la que empieza un juego exportado, en cada inicio y al reiniciar. Desactivada por defecto. Al activarla se reinicia la prueba. |
| **{ui.playOverlay.restart}** | Empieza esta prueba de nuevo, desde la pantalla de título o desde el momento en que empezaste. Se restablecen el estado, el historial y el tiempo de juego. |
| **{ui.playOverlay.clearTestSaves}** | Borra las partidas guardadas, el guardado rápido y el autoguardado hechos durante las pruebas. |
| **{ui.playOverlay.resetReadLines}** | Olvida qué líneas has leído, para que **{ui.quickMenu.button.skip}** vuelva a detenerse en cada línea. |
| **{ui.playOverlay.stop}** | Vuelve al editor (**Esc**). |

## Variables y objetos

Con **{ui.playOverlay.variablesItems}** (o **{ui.leftPanel.variables}**, cuando la función Inventario está desactivada) aparece un panel con:

- **{ui.leftPanel.variables}**: cada una con su valor actual. Un valor distinto del inicial aparece resaltado. En la pantalla de título y en la pantalla Fin, muestra «{tx.playOverlay.startingValues}». Aquí no puedes editar una variable: juega para cambiarla, así compruebas qué cambian tus elecciones.
- **{ui.gameUI.inventory}** (con la función Inventario): todos los objetos de tu juego, con un **−** y un **+** para quitar o dar uno durante la prueba, sin aviso. Un objeto acumulable muestra su cantidad, un objeto único muestra Sí o No. Antes de que empiece el juego, dice «{tx.playOverlay.startPlayingToGiveOrRemoveItems}» El panel se queda abierto o cerrado de una prueba a la siguiente.

## Partidas de prueba y líneas leídas

Las partidas guardadas, el guardado rápido y el autoguardado, las opciones del jugador (tamaño del texto, velocidad…) y el registro de líneas leídas que usa Saltar tienen cada uno su propio espacio para cada juego **solo en el modo Jugar**. Están separados de las partidas de un juego exportado y no forman parte de tu proyecto. Se conservan entre pruebas hasta que los borras:

- **{ui.playOverlay.clearTestSaves}** pregunta antes: «Los juegos exportados conservan sus propias partidas guardadas.»
- **{ui.playOverlay.resetReadLines}** actúa al instante, sin preguntar.

Las opciones del jugador del propio probador (tamaño del texto, velocidad…) se conservan del mismo modo, pero no tienen botón para borrarlas. El interruptor **{ui.playOverlay.showSplash}** dura hasta que cierras el editor.
