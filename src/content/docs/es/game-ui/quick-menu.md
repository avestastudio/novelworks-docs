---
title: Menú rápido
description: "Los controles de lectura que se muestran sobre la historia: posición, aspecto y qué botones mostrar."
---

El **{ui.quickMenu.title}** es una pequeña barra de «controles de lectura sobre la historia». Los jugadores pueden hacer clic en sus botones en lugar de usar teclas.

![Los ajustes del menú rápido, con la vista previa de la barra en la parte superior del juego.](/novelworks-docs/screenshots/game-ui-quick-menu.png)

## Mostrarlo y colocarlo

- **{ui.quickMenu.enabled}**: activado por defecto. Desactívalo para ocultar toda la barra.
- **{ui.quickMenu.position}**: arriba a la izquierda, arriba en el centro (por defecto), arriba a la derecha, abajo a la izquierda, abajo en el centro o abajo a la derecha.
- **{ui.quickMenu.margin}**: el espacio hasta los bordes, de 0 a 10 % (por defecto 1,5).

## Aspecto

- **{ui.gameUIInspector.buttonStyle}**: Píldora por defecto.
- **{ui.quickMenu.textSize}**: de 60 a 140 % del tamaño de texto base (por defecto 80).
- **{ui.quickMenu.buttonColor}**: por defecto, un fondo oscuro translúcido. Un enlace recupera el valor por defecto.
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto.

## Botones visibles

Nueve botones, cada uno con un interruptor. Su **orden es fijo**: puedes mostrarlos u ocultarlos, pero no reordenarlos.

| Botón | Por defecto | Tecla | Qué hace |
|---|---|---|---|
| {ui.quickMenu.button.history} | activado | H | Abre el Historial. |
| {ui.quickMenu.button.auto} | activado | A | Activa o desactiva el modo Auto. |
| {ui.quickMenu.button.skip} | activado | S | Activa o desactiva el modo Saltar. |
| {ui.quickMenu.button.save} | desactivado | | Abre la pantalla de guardar. |
| {ui.quickMenu.button.load} | desactivado | | Abre la pantalla de cargar. |
| {ui.quickMenu.button.quickSave} | desactivado | F5 | Guardado rápido. |
| {ui.quickMenu.button.quickLoad} | desactivado | F9 | Carga rápida (en gris hasta que exista un guardado rápido). |
| {ui.quickMenu.button.options} | desactivado | | Abre las opciones del jugador. |
| {ui.quickMenu.button.menu} | desactivado | Esc | Abre el menú de pausa. |

**{ui.quickMenu.shortcutsHelp}**

## Cuándo se muestra la barra

La barra está oculta en la pantalla de título y en la pantalla final, mientras hay abierto un menú, el Historial, las Opciones, Guardar o Cargar, y cuando todos los botones están ocultos. **{rt.game.quickLoad}** está en gris hasta que exista un guardado rápido. Auto y Saltar muestran si están activados.
