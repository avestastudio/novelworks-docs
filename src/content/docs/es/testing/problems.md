---
title: "Problemas: todos los avisos"
description: Dónde te avisa el editor de que algo está mal, y la lista completa de avisos con lo que debes hacer.
---

El editor te avisa cuando algo de tu historia está incompleto o no puede funcionar nunca, para que lo arregles antes de que lo vean los jugadores. **Un aviso nunca te detiene:** aun así puedes jugar y exportar. El juego en sí nunca se bloquea por estos problemas: un enlace que falta simplemente significa «continuar con el siguiente momento».

## Dónde aparecen los avisos

- **En la tarjeta de un momento** de la línea de tiempo, un triángulo de aviso. Pasa el puntero sobre él para leer todos los problemas de ese momento.
- **En el inspector** del momento, un recuadro «{tx.branchInspectors.thisMomentNeedsYourAttention}» los enumera.
- **En la pestaña Escenas**, una etiqueta roja **{ui.scenesTab.unreachable}** en una escena a la que no lleva nada.
- **En el [mapa de la historia](/novelworks-docs/es/branching/story-map/)**, una insignia de aviso con un número en la tarjeta de una escena, y la etiqueta «**{ui.storyMap.unreachable}**». El filtro **{ui.storyMap.problems}** resalta las escenas que tienen avisos o son inaccesibles. La etiqueta «{tx.storyMap.gameEndsHere}» es información, no un aviso.
- **En el espacio de trabajo Mapa**, un recuadro «Revisa tu mapa».
- **Al exportar**, una lista de «cosas que revisar antes» para todo el juego. Mira [Exportación web](/novelworks-docs/es/publish/web-export/).
- **En el [modo Guion](/novelworks-docs/es/writing/script-mode/)**, un conjunto aparte de subrayados amarillos en las líneas.

No hay contador de problemas en la barra superior ni un panel que lo enumere todo: la ventana de exportación es el único lugar que enumera de una vez los problemas de todo el juego.

## Cualquier momento

| Aviso | Qué significa y qué hacer |
|---|---|
| Los jugadores nunca ven este momento: antes de él, en esta escena, hay un final, un salto, un momento «{tx.moments.showMap}» o una exploración sin zona Continuar. | Un momento colocado después de uno que sale de la escena. Muévelo o bórralo. |

## Elección

| Aviso | Qué hacer |
|---|---|
| Esta elección no tiene opciones. | Añade opciones. |
| Opción N no tiene texto. | Escribe el texto de la opción. |
| Opción N va a una escena que se eliminó. Elige otra escena o Continuar. | Elige otra escena, o «Continuar». |
| Opción N cambia una variable, pero no hay ninguna elegida. / … que se eliminó. | Elige una variable. |
| Opción N usa un objeto, pero no hay ninguno elegido. / … que se eliminó. / … pero la función Inventario está desactivada. | Elige un objeto, o activa Inventario en Funciones. |
| Opción N comprueba una variable o un objeto, pero no hay ninguno elegido. / … que se eliminó. / … pero la función Inventario está desactivada. | Corrige la condición de la opción. |

## Si…

| Aviso | Qué hacer |
|---|---|
| Elige la variable que comprueba esta condición. | Elige una variable. |
| Elige el objeto que comprueba esta condición. | Elige un objeto. |
| Esta condición comprueba una variable que se eliminó. / un objeto que se eliminó. | Elige otro. |
| Esta condición comprueba un objeto, pero la función Inventario está desactivada. | Activa Inventario. |
| Elige la escena a la que ir cuando se cumpla la condición. | Elige una escena. |
| Cuando se cumple, esto va a una escena que se eliminó. / Si no, esto va a una escena que se eliminó. | Elige otra escena. |

Recuerda que el juego se salta un Si… con una condición rota. Mira [Condiciones Si…](/novelworks-docs/es/branching/conditions/).

## Salto

| Aviso | Qué hacer |
|---|---|
| Elige la escena a la que ir. | Elige una escena. |
| Esto va a una escena que se eliminó. | Elige otra escena. |

## Momento Objeto

| Aviso | Qué hacer |
|---|---|
| Elige el objeto que dar. / Elige el objeto que quitar. | Elige un objeto. |
| Este momento da un objeto que se eliminó. / … quita un objeto que se eliminó. | Elige otro objeto. |
| La función Inventario está desactivada: los jugadores no tienen inventario. Actívala en Funciones. | Activa Inventario. |

## Momento Exploración

| Aviso | Qué hacer |
|---|---|
| Dibuja al menos una zona para que el jugador haga clic. | Dibuja una zona. |
| «Zona» va a una escena, pero no hay ninguna elegida. / va a una escena que se eliminó. (También «… va a una escena al usar el objeto, pero no hay ninguna elegida».) | Elige una escena. |
| «Zona» no tiene nada que decir al examinarla. / … al usar el objeto. | Escribe la línea que muestra. |
| «Zona» comprueba una variable o un objeto, pero no hay ninguno elegido. / … que se eliminó. / … pero la función Inventario está desactivada. (su condición) | Corrige la condición. |
| «Zona» usa un objeto, pero no hay ninguno elegido. / … que se eliminó. / … pero la función Inventario está desactivada. | Corrige el objeto. |
| «Zona» la examina un personaje que se eliminó. | Elige a otro que hable. |
| «Zona» cambia una variable, pero no hay ninguna elegida. / … que se eliminó. | Elige una variable. |
| «Zona» necesita un objeto que los jugadores nunca pueden conseguir. | Da el objeto en algún sitio (un momento Objeto, una elección o una zona para recogerlo). |
| «Zona» no se puede usar nunca: su condición nunca se cumple. | Revisa qué cambia la variable o da el objeto. |
| Un objeto decorativo no tiene imagen. / Un objeto decorativo está vinculado a una zona que se eliminó. | Elige una imagen, o vincula el objeto decorativo a otra zona. |
| Los jugadores pueden quedarse atascados aquí: ninguna zona en la que puedan hacer clic lleva a otra escena ni continúa la historia. | Añade una zona que lleve a una escena o que continúe. |

## Mapa

| Aviso | Qué hacer |
|---|---|
| La función Mapa está desactivada: este momento no hace nada. Actívala en Funciones. | Activa Mapa en Funciones (este es el aviso de un momento «{tx.moments.showMap}»). |
| Crea tu mapa en Mapa y añade un fondo. / Se eliminó el momento del mapa. Elige otro momento de exploración. / El momento del mapa ya no es una exploración. Elige otro. | Crea o corrige el mapa. En un momento «{tx.moments.showMap}», estos terminan con «Hasta entonces, este momento no hace nada.» |
| Añade una imagen de fondo en Mapa. | Elige un fondo. |
| Los jugadores nunca podrán abrir el mapa: el juego no tiene escena inicial. | Define una escena inicial. |
| Los jugadores nunca podrán abrir el mapa: el botón Mapa está desactivado / esperando un momento «{tx.moments.showMap}», y no se puede llegar a ningún momento «{tx.moments.showMap}». Añade uno, o haz que el mapa esté siempre disponible. | Añade un momento «{tx.moments.showMap}», o cambia la disponibilidad del mapa. |

## Juego entero (ventana de exportación)

| Aviso | Qué hacer |
|---|---|
| El juego aún no tiene escenas: los jugadores solo verán la pantalla de título. | Añade una escena. |
| No hay escena inicial: Nueva partida irá directo al final. | Define una escena inicial con la estrella. |
| Los jugadores nunca pueden llegar a esta escena: ninguna elección, condición, salto o zona lleva a ella. (Solo cuando el juego tiene más de una escena.) | Enlázala, o bórrala. |
| Esta escena no tiene momentos. | Añade un momento. |
| Los jugadores nunca ven estos momentos: antes de ellos, en esta escena, hay un final, un salto o una exploración sin zona Continuar. | Muévelos o bórralos. |

La ventana de exportación también enumera los avisos propios de cada momento, con el formato «Escena, momento 4 — mensaje».

## Enlaces que no puedes hacer en el mapa

Cuando arrastras un enlace en el mapa de la historia, un tipo de enlace que no se puede aplicar aparece en gris con su motivo: la escena termina con un final, ya termina con un salto, termina con una exploración (añade una zona en su lugar), o su elección ya tiene 6 opciones.

## Qué no se comprueba

Un momento de diálogo no tiene aviso propio: una línea de diálogo vacía no se señala. Los atuendos, los ambientes, la cámara, los efectos y los sonidos tampoco tienen avisos.
