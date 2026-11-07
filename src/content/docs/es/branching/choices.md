---
title: Elecciones
description: Deja que el jugador elija una opción, cambia lo que el juego recuerda y lleva a otra escena.
---

Un momento **{ui.moments.choice}** muestra al jugador de dos a seis botones. Cada opción puede cambiar lo que el juego recuerda y enviar la historia a otra escena. Para ver cómo encaja con el resto, mira [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/).

## Añadir una elección

En la línea de tiempo, añade un momento **{ui.moments.choice}**. Empieza con dos opciones vacías. Puedes escribir en el inspector, o directamente en la pantalla del juego.

![Una elección con dos opciones: lo que cambia cada una y la escena a la que lleva.](/novelworks-docs/screenshots/choice-options.png)

## La pregunta

**{ui.branchInspectors.questionOptional}** se muestra en el cuadro de texto sobre las opciones, como narración sin hablante. Déjala vacía si no la necesitas.

## Las opciones

Cada opción es una tarjeta con su número y su texto.

- **{ui.branchInspectors.addOption}** añade una. Una elección puede tener **hasta 6 opciones**, y el botón se desactiva al llegar a 6.
- La X quita una opción. Una elección necesita **al menos 2**, así que la X se desactiva cuando quedan dos.
- Las opciones no se pueden reordenar arrastrando. Para cambiar el orden, edita los textos.

Los jugadores hacen clic en una opción, o pulsan su tecla numérica, de 1 a 6.

## A dónde lleva una opción

**{ui.branchInspectors.then}** elige qué pasa después de la opción:

- **{ui.linkSelects.continueNextMoment}**: la historia sigue con el momento siguiente de la misma escena.
- una escena, bajo **{ui.linkSelects.orGoToScene}**: el juego entra en esa escena por su primer momento.
- **{ui.linkSelects.newScene}** crea una escena vacía y la enlaza.

Si la escena se borró, la lista muestra **{ui.linkSelects.deletedScenePickAnother}** y una advertencia lo explica. En el juego, una escena que falta se comporta como «continuar».

Cuando el jugador elige una opción, el juego primero aplica sus cambios y después sigue el enlace.

## Lo que cambia una opción

Bajo **{ui.branchInspectors.changes}**, cada opción lista lo que el juego recuerda si se elige. El primer botón es **{ui.memory.remember}**: crea una [Puntuación o un Hecho](/novelworks-docs/es/concepts/game-memory/) si lo necesitas y añade el cambio en un solo paso. Una Puntuación empieza con «sumar 1», un Hecho con «establecer en Sí».

Cada cambio es una fila:

- **Una variable.** Elige la variable. Para una Puntuación, elige **{ui.branchInspectors.add}** o **{ui.branchInspectors.setTo}** y escribe un número. Para un Hecho, siempre es **{ui.branchInspectors.setTo}** Sí o No. La X quita el cambio.
- **Un objeto**, cuando la función Inventario está activada: **{ui.branchInspectors.giveRemoveAnItem}**. Elige el objeto, **{ui.branchInspectors.give_0895a5}** o **{ui.branchInspectors.remove_7e5608}**, y cuántos si es un objeto acumulable.

Cuando el juego aplica los cambios, sigue el orden. Un cambio que apunta a una variable o un objeto borrado o sin elegir se omite (el editor te avisa). Sumar a un Hecho no hace nada. Un objeto único nunca pasa de uno, y un objeto acumulable nunca baja de cero.

## Una opción que aparece solo a veces

Haz clic en **{ui.optionCondition.add}**. Aparece un bloque **{ui.optionCondition.title}** con el mismo editor que los casos de un [Si…](/novelworks-docs/es/branching/conditions/): una o más condiciones, y **{ui.conditionCases.matchAll}** o **{ui.conditionCases.matchAny}** cuando hay varias.

Después elige **{ui.optionCondition.whenFalse}**:

- **{ui.optionCondition.hidden}**: la opción no se muestra, y los demás botones cierran el hueco.
- **{ui.optionCondition.locked}**: la opción se muestra en gris y no se puede elegir.

**{ui.optionCondition.remove}** hace que la opción vuelva a estar siempre disponible. Quitar la última condición hace lo mismo.

**Los jugadores siempre conservan una forma de continuar.** Si todas las opciones quedaran ocultas o bloqueadas, el juego las muestra todas con normalidad.

Una condición que comprueba una variable o un objeto borrado o sin elegir cuenta como falsa, así que la opción se oculta o se bloquea, y el editor te avisa.

## En el juego

- Las opciones son botones apilados en el centro de la pantalla. Su aspecto viene de la [Interfaz del juego](/novelworks-docs/es/game-ui/game-ui-editor/).
- Los botones aparecen cuando el texto ha terminado de aparecer.
- Una opción oculta no deja hueco, y las teclas numéricas cuentan los botones que están **en pantalla**. Un botón bloqueado ocupa un número pero no se puede elegir.

## Advertencias

Un momento con un problema muestra un triángulo en su tarjeta, y un cuadro «{tx.branchInspectors.thisMomentNeedsYourAttention}» en el inspector. Para una elección:

- Esta elección no tiene opciones.
- Una opción no tiene texto.
- Una opción va a una escena que se borró. Elige otra escena o Continuar.
- Una opción cambia una variable, pero no hay ninguna elegida, o la variable se borró.
- Una opción usa o comprueba un objeto que no está elegido, que se borró, o cuya función Inventario está desactivada.
- Una opción comprueba una variable que no está elegida o que se borró.

No hay advertencia cuando todas las opciones están bloqueadas: el juego las muestra todas, como se describe arriba.
