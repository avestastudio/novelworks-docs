---
title: Inventario
description: "Los objetos que llevan los jugadores: créalos, dalos y quítalos, compruébalos en condiciones y velos en el juego."
---

Con la función **{ui.shared.features.inventory}** activada, los jugadores pueden recoger **objetos**: llaves, cartas, monedas, pistas. Los ven en un menú Inventario. Actívala en la [biblioteca de funciones](/novelworks-docs/es/features/features-panel/). Los objetos no son [variables](/novelworks-docs/es/branching/variables/): un objeto es algo que el jugador lleva consigo.

## La pestaña Objetos

La pestaña **{ui.leftPanel.items}** lista tus objetos, cada uno con su imagen (o una mochila), su nombre y **{ui.itemInspector.single}** o **{ui.itemInspector.stackable}**. Haz clic en **{ui.itemsTab.newItem}**. Un objeto nuevo se llama «Objeto 1», «Objeto 2»… y queda seleccionado.

![La pestaña Objetos, con el inspector de un objeto.](/novelworks-docs/screenshots/items-tab.png)

En el inspector:

- **{ui.itemInspector.name}**;
- **{ui.itemInspector.picture}**: una imagen de tipo «Objeto decorativo», que se muestra en el inventario (puedes importar una en el momento);
- **{ui.itemInspector.description}**: lo que leen los jugadores cuando lo miran en el inventario;
- **{ui.itemInspector.kind}**: **{ui.itemInspector.single}** (los jugadores lo tienen o no, como una llave) o **{ui.itemInspector.stackable}** (los jugadores pueden tener varios, como monedas; el inventario muestra cuántos);
- **{ui.itemInspector.usedIn}**: dónde se usa el objeto, o «Aún no se usa. Dalo con un momento de objeto, una elección o una zona de recoger».

### Elimina un objeto

**{ui.itemInspector.deleteItem}** pregunta antes, y lista dónde se usa el objeto. Solo se quita el objeto: los lugares que lo usaban se conservan y muestran una advertencia hasta que elijas otro objeto.

## Da y quita objetos

- **Un momento Objeto**: da objetos o los quita, y los jugadores no ven el momento en sí. Elige **{ui.branchInspectors.give}** o **{ui.branchInspectors.remove}**, el objeto y cuántos, si es un objeto acumulable. Una casilla decide si se muestra un aviso («Has conseguido: …»). Consulta [Escenas, momentos y la línea de tiempo](/novelworks-docs/es/concepts/scenes-moments-timeline/).
- **Una opción de elección**: **{ui.branchInspectors.giveRemoveAnItem}** añade un cambio a una opción. Siempre se muestra un aviso. Consulta [Elecciones](/novelworks-docs/es/branching/choices/).
- **Una zona de exploración**: **{ui.explorationInspectors.pickUpAnItem}** (la zona y sus objetos decorativos desaparecen para siempre) o **{ui.shared.exploration.useAnItem}**. Consulta [Exploración](/novelworks-docs/es/features/exploration/).

Un objeto único nunca puede ser más de uno, y un objeto acumulable nunca baja de cero. Si quitas más de lo que tiene el jugador, se quita lo que existe.

## Comprueba objetos

En un [Si…](/novelworks-docs/es/branching/conditions/), en la condición de una opción o de una zona, elige **{ui.moments.item}** en **{ui.branchInspectors.whatToCheck}**: el jugador **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}** o **{ui.conditionTests.hasAtLeast}** una cantidad de ese objeto. Una prueba sobre un objeto eliminado nunca se cumple.

Si desactivas la función Inventario, los jugadores pierden el botón, la entrada del menú y la tecla **I**, pero los momentos que dan o comprueban objetos se siguen ejecutando; el editor te avisa. El aviso se muestra para cada uso de un objeto: un momento de objeto (dar o quitar), un efecto de elección, una opción bloqueada por un objeto, una prueba de condición sobre un objeto, y una zona que recoge, usa o está bloqueada por un objeto. Lo ves en el cuadro de Problemas del momento, en la línea de tiempo y en la ventana de exportación (la vista Guion no lo subraya). Consulta [La biblioteca de funciones](/novelworks-docs/es/features/features-panel/).

## Qué ven los jugadores

- Un botón en una esquina de la pantalla (arriba a la derecha por defecto, y se configura en la [pantalla Inventario](/novelworks-docs/es/game-ui/inventory-ui/)), una entrada en el menú de pausa, y la tecla **I**.
- Un panel con una cuadrícula de los objetos que tienen, con cantidades para los objetos acumulables. Al hacer clic en uno se muestra su descripción. No hay botón «usar»: usar un objeto es algo que comprueba una zona.
- **{ui.gameUI.notices}** como «Has conseguido: Llave» y «Has perdido: Llave» (consulta [Avisos (notificaciones)](/novelworks-docs/es/game-ui/notifications/)).
- Los objetos se guardan en las partidas del jugador. Al cargar una partida antigua, se descartan los objetos que ya no existen.

## Pruebas

En el modo Jugar, **{ui.playOverlay.variablesItems}** muestra todos los objetos de tu juego con un **−** y un **+** para dar o quitar uno mientras pruebas (sin aviso). Antes de que empiece el juego dice «{tx.playOverlay.startPlayingToGiveOrRemoveItems}»

## Advertencias

- Elige el objeto que dar o quitar; este momento da o quita un objeto que se eliminó.
- La función Inventario está desactivada: los jugadores no tienen inventario. Actívala en Funciones.
- Un efecto o una condición usa o comprueba un objeto que no está elegido, que se eliminó, o mientras la función Inventario está desactivada.
- Una zona necesita un objeto que los jugadores nunca pueden conseguir (nada en la historia lo da).
