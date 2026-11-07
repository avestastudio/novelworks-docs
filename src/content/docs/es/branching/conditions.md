---
title: "Condiciones Si…"
description: Envía la historia a escenas distintas según lo que el juego recuerda, con tantos casos como necesites.
---

Un momento **{ui.moments.condition}** comprueba lo que el juego recuerda y envía la historia a una escena. **Los jugadores nunca lo ven:** el juego lo comprueba y sigue enseguida. Para ver la idea en imágenes, mira [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/).

## Casos

Un Si… es una lista de **casos**, que se comprueban **de arriba abajo**. Gana el primer caso que se cumple. Cada caso tiene:

- una o más **condiciones**;
- la escena a la que ir («ir a»).

Después del último caso viene *si no*: a dónde va la historia cuando no se cumple ningún caso.

Un Si… nuevo tiene un caso con una condición vacía. Con un solo caso se muestra sin adornos. Con dos o más, cada caso es una tarjeta titulada «Caso 1», «Caso 2»…

![El inspector de un momento Si…, con una condición, «ir a» y «si no».](/novelworks-docs/screenshots/if-conditions.png)

- **{ui.conditionCases.addCase}** añade un caso al final.
- Las flechas de una tarjeta suben o bajan el caso. El orden importa, porque gana el primer caso que se cumple.
- Un botón de la tarjeta quita el caso. Un Si… siempre conserva al menos uno.

![Un Si… comprueba el Caso 1, luego el Caso 2, y después va a «si no».](/novelworks-docs/diagrams/if-order.svg)

## Condiciones

Una condición empieza con la palabra «Si» y comprueba una variable o un objeto. La opción **{ui.branchInspectors.whatToCheck}** (Variable u Objeto) aparece cuando la función Inventario está activada.

### Una variable

Elige la variable, la comparación y el valor.

| Tipo | Comparaciones |
|---|---|
| **{ui.variables.number}** | {ui.conditionTests.is}, {ui.moments.isNot}, {ui.moments.atLeast}, {ui.moments.atMost}, {ui.moments.moreThan}, {ui.moments.lessThan} |
| **{ui.variables.yesNo}** | {ui.conditionTests.is}, {ui.moments.isNot} |

Bajo una prueba de Puntuación, una línea te dice a qué pueden sumar tus elecciones, y si la prueba puede llegar a cumplirse. Mira [A dónde pueden llevar tus elecciones](/novelworks-docs/es/branching/reach/). Si todavía no tienes ninguna variable, el editor lo dice y te indica que crees una en la pestaña Variables.

### Un objeto

«Si el jugador» **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}**, o (para un objeto acumulable) **{ui.conditionTests.hasAtLeast}** una cantidad de ese objeto.

### Varias condiciones en un caso

Haz clic en **{ui.conditionCases.addTest}**. Después elige cómo se combinan:

- **{ui.conditionCases.matchAll}**: deben cumplirse todas las condiciones («{tx.conditionCases.and}»);
- **{ui.conditionCases.matchAny}**: basta una («o»).

El selector aparece cuando un caso tiene dos o más condiciones. Para quitar una, usa **{ui.conditionCases.removeTest}**, que solo aparece cuando hay más de una. Cuando queda una sola condición, la opción de combinar desaparece.

## A dónde ir

Bajo cada caso: la escena a la que ir. Un caso necesita una escena (el editor avisa cuando no tiene ninguna). Después viene *si no*, que también puede ser «{tx.linkSelects.continueNextMoment}». Si no eliges ninguna escena para *si no*, la historia simplemente continúa con el momento siguiente.

## Qué hace el juego

- Los casos se prueban de arriba abajo. Gana el primero que se cumple.
- Si no se cumple ninguno, el juego va a *si no*, o continúa si no lo hay.
- Un caso ganador sin escena, o con una escena borrada, continúa con el momento siguiente.
- **Si el juego llega a un caso que comprueba una variable o un objeto que se borró o que nunca se eligió, no adivina:** se salta todo el Si… y continúa con el momento siguiente, sin mirar los casos de más abajo ni *si no*. (Un caso de más arriba que se cumpla sigue ganando primero.) En un caso donde solo hace falta una de varias condiciones (**{ui.conditionCases.matchAny}**), una sola cosa que falte rompe todo el caso. El editor te avisa de ello, así que corrige la advertencia.
- Las Puntuaciones se comparan con su valor actual, o con su valor inicial si el jugador todavía no las ha cambiado.

## Bucles

Si los Si… y los saltos solo llevan de uno a otro (la escena A va a B, y B vuelve directamente a A), el juego no puede avanzar. Tras 1000 pasos automáticos seguidos se detiene y muestra la pantalla final, y el editor no te avisa. Asegúrate de que cada bucle contenga algo que haga el jugador, como una línea de diálogo o una elección.

## Probar

Bajo los casos, **{ui.memory.tryTitle}** te permite comprobar tu Si… sin jugar. Finge que una Puntuación tiene un valor, o que el jugador tiene una cantidad de un objeto, y NovelWorks te dice a dónde iría la historia:

- «Se cumple el caso 2: va a …»;
- «Si no: va a …», o «{tx.memory.tryContinue}»;
- «{tx.memory.tryPickFirst}» cuando una condición no está terminada.

Usa las mismas reglas que el juego. Con un caso y una condición hay un solo cuadro; si no, hay un cuadro por cada variable u objeto usado.

## En la línea de tiempo

Una tarjeta muestra el primer caso («Si Affection ≥ 2 → Park») y la pantalla del juego lista una línea por caso, y después *si no*.

## Advertencias

- Elige la variable o el objeto que comprueba esta condición.
- Esta condición comprueba una variable o un objeto que se borró, o un objeto mientras la función Inventario está desactivada.
- Elige la escena a la que ir cuando la condición es verdadera.
- Cuando es verdadera, o si no, esto va a una escena que se borró.

## Las mismas condiciones en otros sitios

Las condiciones de una opción de una [elección](/novelworks-docs/es/branching/choices/) usan el mismo editor, con una diferencia: una condición que comprueba algo que falta cuenta como falsa (la opción se oculta o se bloquea) en lugar de saltarse todo.
