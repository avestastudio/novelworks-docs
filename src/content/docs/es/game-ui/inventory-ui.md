---
title: Pantalla de inventario
description: El botón de Inventario y el panel de objetos.
---

La pantalla **{ui.gameUI.inventory}** es el botón que usan los jugadores para abrir sus objetos, y el panel que los enumera. Necesita la [función Inventario](/novelworks-docs/es/features/inventory/). Cuando la función está desactivada, la página lo dice y ofrece abrir Funciones.

## El botón

- **{ui.gameUIInspector.label}**: el texto del botón, el título del panel y el nombre de la entrada del menú de pausa. Por defecto «Inventario».
- **{ui.gameUIInspector.cornerOfTheScreen}**: arriba a la izquierda, arriba a la derecha (por defecto), abajo a la izquierda o abajo a la derecha.
- **{ui.gameUIInspector.buttonStyle}**: «{tx.gameUIInspector.sameAsFontsColors}» por defecto.

El botón está oculto en la pantalla de título, en la pantalla final y mientras el juego está en pausa.

## Colores del panel y del botón

Estos dos colores pintan **tanto el panel como el botón**:

- **{ui.gameUIInspector.panelColor}**: «{tx.gameUIInspector.sameAsTheDialogueBox}» por defecto (con el estilo de botón «{tx.gameUIInspector.text}», el botón no tiene fondo).
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto.

## Qué obtienen los jugadores

Los jugadores lo abren con el botón, el menú de pausa o la tecla **I**. Es un panel en medio del juego con una cuadrícula de los objetos que poseen: una imagen, el nombre y, para los objetos apilables, una cantidad como «×3». Al seleccionar un objeto se muestra su descripción (o su nombre si no tiene). Dice «Aún no hay nada aquí.» cuando está vacío. Esc, **I**, el botón × o un clic fuera lo cierran. La historia queda en pausa mientras está abierto.
