---
title: Pantalla de guardar y cargar
description: "Las pantallas de guardar y cargar: ranuras, guardado rápido, autoguardado y su aspecto."
---

A las pantallas **{ui.gameUI.saveLoad}** se llega desde la pantalla de título y el menú de pausa.

## Qué puedes cambiar

En **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: por defecto el color de la pantalla de título;
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto;
- **{ui.gameUIInspector.buttonStyle}**: el estilo del botón Atrás. (Las preguntas de confirmación, como «{tx.savesScreen.overwrite}» y «{tx.savesScreen.delete}», usan el estilo de botón del [menú de pausa](/novelworks-docs/es/game-ui/pause-menu/).)

En **{ui.gameUIInspector.slots}**:

- **{ui.gameUIInspector.slotColor}**: el color de cada casilla de ranura («{tx.gameUIInspector.sameAsTheDialogueBox}» por defecto).

## Qué obtienen los jugadores

- **12 ranuras de guardado**, mostradas en una cuadrícula de tres columnas, un **guardado rápido** y un **autoguardado** al comienzo de cada escena nueva.
- Cada ranura muestra una pequeña imagen del momento (fondo, objetos decorativos y personajes, sin el diálogo), el nombre de la escena, la fecha y el tiempo de juego. Una ranura vacía dice «Vacía».
- La pantalla **{rt.game.load}** enumera primero el Autoguardado y el Guardado rápido, y luego las ranuras 1 a 12. La pantalla **{rt.game.save}** enumera las ranuras 1 a 12.
- Guardar sobre una ranura pide confirmación («{tx.savesScreen.overwrite}»); eliminar una ranura (la × de una ranura ocupada) también la pide; cargar una partida mientras hay un juego en curso pregunta «{tx.game.loadThisSaveUnsavedProgressWillBe}»
- Teclado: las flechas se mueven entre ranuras, **Intro** o **Espacio** elige, `Delete` o `Backspace` elimina, **Inicio** y **Fin** saltan a la primera y a la última ranura de la lista, **Esc** vuelve atrás.

## Dónde la encuentran los jugadores

- **{ui.gameUI.titleScreen}**: **{rt.game.continue}** (la última partida guardada, solo si existe una) y **{rt.game.load}**.
- **{ui.gameUI.pauseMenu}**: **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (**F5**) y **{rt.game.quickLoad}** (**F9**). La carga rápida solo aparece cuando existe un guardado rápido.
- **{ui.quickMenu.title}**: los mismos cuatro botones, si los muestras.

Si el navegador no permite guardar (navegación privada, o datos de sitios desactivados), las pantallas lo dicen y no se puede guardar nada. Consulta [Guardar y cargar](/novelworks-docs/es/player/save-and-load/).
