---
title: Finales
description: Termina tu historia con tantos finales como quieras y comprueba que se puede llegar a todos.
---

Un momento **{ui.moments.ending}** muestra el nombre del final y luego lleva al jugador de vuelta a la pantalla de título. Una historia puede tener tantos finales como quieras, por ejemplo uno por cada resultado de un [Si…](/novelworks-docs/es/branching/conditions/).

## Añade un final

En la cabecera de la línea de tiempo, abre **{ui.timeline.addOther}** y añade un momento **{ui.moments.ending}** al final de una escena. En la pestaña **{ui.inspectorTabs.text}** del inspector:

- **{ui.branchInspectors.endingName}**: los finales nuevos se llaman «{tx.shared.scenes.goodEnding}». Si dejas el nombre vacío, el juego muestra «Fin».
- Un **texto breve** (opcional) que se muestra bajo el nombre.

Después del final, el jugador vuelve a la pantalla de título. Si activaste los [créditos](/novelworks-docs/es/game-ui/credits/) con **{ui.credits.afterEnding}**, estos pasan primero.

## Qué ven los jugadores

El juego oscurece la pantalla y muestra el nombre del final, con el texto breve debajo si lo hay. Una indicación dice «{tx.game.returnToTitle}», y un clic lleva al jugador allí. El botón Mapa se oculta en un final, y los modos de lectura (Auto y Saltar) se detienen ahí.

Un final es el fin de su escena: los momentos colocados después nunca se pueden alcanzar, y el editor te avisa de ello. No puedes enlazar una flecha nueva desde una escena que termina con un final.

### Si la historia simplemente se acaba

Si una escena no tiene final y no hay nada después de su último momento, el juego muestra una pantalla final, llamada **{ui.gameUI.theEnd}** en el editor de la [Interfaz del juego](/novelworks-docs/es/game-ui/game-ui-editor/) («Se muestra cuando termina la historia»). Allí se pueden cambiar su texto, su color de fondo y el color del texto. No es la misma pantalla que un momento Final, y el mapa de la historia etiqueta esa escena como «{tx.storyMap.gameEndsHere}». Añade un momento Final de verdad para que el jugador tenga una conclusión como es debido.

## Ve todos los finales

Ve a **{ui.topBar.storyMap}** y haz clic en un lugar vacío para que **no haya ninguna escena seleccionada**. El panel de la derecha muestra **{ui.endings.title}**: una tarjeta por cada momento Final de tu historia, en el orden de tus escenas. Cada tarjeta muestra:

- el nombre del final («{tx.endings.unnamed}» si está vacío), con una bandera;
- su lugar: la escena y el número de momento;
- **{ui.endings.leadsHere}**: lo que lleva a él, una línea por cada salida que va a su escena, como `From "Park": Option "Run"`, `From "Station": if Affection ≥ 3` o `From "Station": otherwise`. Si la escena es la escena inicial, dice «{tx.endings.startsHere}»

Haz clic en el nombre del final para abrirlo, o en una línea para abrir el momento que lleva allí.

![El panel «Finales del juego» del mapa de la historia, con lo que lleva a cada final.](/novelworks-docs/screenshots/endings-panel.png)

Si nada lleva a un final (y no está en la escena inicial), la tarjeta muestra una advertencia: **«Nada lleva aquí todavía: los jugadores no pueden llegar a este final.»**

Si tu historia aún no tiene ningún final, el panel lo indica y sugiere añadir uno al final de una escena, por ejemplo uno por cada resultado de un Si….

Conviene saber:

- Solo cuentan las salidas: una escena que simplemente continúa en la siguiente no cuenta, y una escena que vuelve a sí misma no aparece como si llevara a su propio final. Los lugares del mapa que llevan a la escena cuentan como salidas (se muestran como «Mapa · …»).
- La advertencia solo comprueba que algo lleve al final. Un final en una escena que a su vez es inaccesible puede no mostrar ninguna advertencia si otra escena inaccesible lleva a él. Busca también las etiquetas «{tx.storyMap.unreachable}» en el [mapa de la historia](/novelworks-docs/es/branching/story-map/).
- El filtro **{ui.storyMap.endingsFilter}** de la parte superior del mapa atenúa las escenas que no contienen ningún final.
- Cada final aparece también como una pequeña bandera con su nombre en la tarjeta de su escena.
