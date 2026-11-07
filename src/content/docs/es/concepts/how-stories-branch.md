---
title: Cómo se ramifica una historia
description: Elecciones, condiciones, saltos y finales, y cómo ver adónde va tu historia.
---

Una historia se ramifica cuando puede ir a **otra escena**. Cuatro tipos de momento lo hacen.

| Momento | Qué hace |
|---|---|
| **{ui.moments.choice}** | El jugador elige una opción entre 2 y 6. Cada opción puede cambiar variables y llevar a una escena. |
| **{ui.moments.condition}** | El juego comprueba lo que recuerda y envía la historia a una escena. Los jugadores nunca lo ven. |
| **{ui.moments.jump}** | Va directamente a una escena. Los jugadores nunca lo ven. |
| **{ui.moments.ending}** | Muestra el nombre del final y luego vuelve a la pantalla de título. |

Un momento **{ui.moments.exploration}** también puede llevar a escenas, mediante las zonas en las que hace clic el jugador.

## Elecciones

En el inspector, escribe una pregunta opcional y luego el texto de cada opción. Para cada opción:

- **{ui.branchInspectors.changes}**: lo que recuerda el juego si el jugador la elige (consulta [La memoria del juego](/novelworks-docs/es/concepts/game-memory/)).
- **{ui.branchInspectors.then}**: la escena a la que lleva. También puedes dejar que la historia continúe con el siguiente momento.
- **{ui.optionCondition.add}**: la opción aparece solo cuando se cumple una condición. Después elige qué pasa en caso contrario: **{ui.optionCondition.hidden}** o **{ui.optionCondition.locked}**. Los jugadores siempre tienen una forma de seguir: si no se pudiera elegir ninguna opción, aparecen todas. **{ui.optionCondition.remove}** la vuelve a dejar disponible.

Los jugadores hacen clic en una opción o pulsan su número, del 1 al 6. Una elección necesita al menos dos opciones.

## Si…

Un momento **{ui.moments.condition}** tiene uno o más **casos**, que se comprueban **de arriba abajo**. Gana el primer caso que se cumple.

![Un Si… comprueba el caso 1, luego el caso 2 y después va a «en otro caso».](/novelworks-docs/diagrams/if-order.svg)

- Cada caso tiene una o más condiciones. Elige si se cumple **{ui.conditionCases.matchAll}** o **{ui.conditionCases.matchAny}**, y haz clic en **{ui.conditionCases.addTest}** para añadir más.
- Cada caso tiene una escena a la que ir. Usa **{ui.conditionCases.addCase}** para otro caso, y las flechas para cambiar el orden.
- *En otro caso* es adónde va la historia cuando no se cumple ningún caso. Si no eliges ninguna escena, la historia continúa con el siguiente momento.

## Saltos y finales

Un **{ui.moments.jump}** solo necesita una escena a la que ir. Un **{ui.moments.ending}** tiene un nombre (**{ui.branchInspectors.endingName}**) y un texto corto opcional. Una historia puede tener tantos finales como quieras.

## Ver adónde va la historia

### La barra «{tx.branches.whereTitle}»

Sobre la pantalla del juego, un botoncito por cada salida del momento seleccionado muestra adónde lleva, hasta cuatro y luego «+N». Una frase demasiado larga termina en «…» (el texto completo está en la información emergente). Haz clic en uno para saltar a esa escena. Un botón «Atrás» te lleva adonde estabas (se recuerdan los últimos 20 pasos). En el primer momento de una escena, una lista muestra qué lleva **a** esa escena.

### La fila Ramas

Bajo las miniaturas y el gráfico de escena, la fila **{ui.branches.rowTitle}** marca cada momento que sale de la escena, alineado con el momento:

![El gráfico bajo las miniaturas, con la fila Ramas: una bifurcación en el momento 3 y una bandera en el momento 6.](/novelworks-docs/diagrams/branches-row.svg)

- una bifurcación: una elección o un Si…;
- una flecha: un salto;
- un puntero: una zona de exploración;
- una bandera: un final, con su nombre;
- un icono de mapa: un momento Mostrar mapa.

Junto al icono está el nombre de la primera escena a la que lleva, y «+N» si hay más salidas. Una marca se pone roja si falta una escena. Apunta a una marca para ver todas las salidas y haz clic en ella para seleccionar el momento. Un botón pliega la fila.

La pestaña Escenas también muestra cuántas ramas tiene cada escena.

### El mapa de la historia

El **{ui.topBar.storyMap}** muestra todas las escenas de tu juego y lo que enlaza unas con otras. Haz clic en una escena para verla y doble clic para abrirla. Si no hay ninguna escena seleccionada, el panel de la derecha es la lista de los finales del juego (**{ui.endings.title}**) y lo que lleva a cada uno. Un final al que no lleva nada se marca, porque los jugadores no pueden llegar a él. Consulta [El mapa de la historia](/novelworks-docs/es/branching/story-map/).
