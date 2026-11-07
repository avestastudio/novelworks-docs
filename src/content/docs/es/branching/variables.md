---
title: Variables
description: Crea y gestiona las Puntuaciones y los Hechos que recuerda tu juego, y mira dónde se usa cada uno.
---

Una **variable** es algo que el juego recuerda. Hay dos tipos, explicados en [La memoria del juego](/novelworks-docs/es/concepts/game-memory/): un **{ui.variables.number}** (un número que sube o baja, como el afecto de Mia o el dinero) y un **{ui.variables.yesNo}** (si algo ha pasado o no: sí o no, como «{tx.memory.factExample}» o «Tiene la llave»).

Las cosas que el jugador lleva (llaves, monedas…) no son variables. Son **objetos**, parte de la función [Inventario](/novelworks-docs/es/features/inventory/).

## La pestaña Variables

La pestaña **{ui.leftPanel.variables}** lista todas las variables con su tipo y su valor inicial («Puntuación · empieza en 0»). Haz clic en **{ui.variablesTab.newVariable}** para añadir una. En un proyecto vacío, la pestaña explica qué son las variables.

Una variable nueva se llama «Variable N», donde N es el número de variables que ya tienes más uno (o el número siguiente si ese nombre existe). Es una Puntuación que empieza en 0. Selecciónala para editarla en el inspector.

También puedes crear una variable en el momento en que la necesitas, con **{ui.memory.remember}** en una elección. Mira [Elecciones](/novelworks-docs/es/branching/choices/).

## El inspector de variables

- **{ui.variableInspector.name}**: por ejemplo «{tx.variablesTab.miaAffection}». Cambiar el nombre es seguro: todo lo que usa la variable sigue el nombre nuevo.
- **{ui.variableInspector.type}**: Puntuación o Hecho.
- **{ui.variableInspector.startsAt}**: el valor con el que empieza cada partida nueva.
- Para una Puntuación, una frase sobre a qué pueden sumar tus elecciones. Mira [A dónde pueden llevar tus elecciones](/novelworks-docs/es/branching/reach/).
- **{ui.memory.changedBy}** y **{ui.memory.checkedBy}**: las listas de abajo.

### Dónde se usa una variable

Las dos listas muestran dónde se usa la variable, con la escena y el número del momento. Haz clic en una línea para ir allí. Una variable es *cambiada* por una opción de elección o una zona de exploración, y *comprobada* por la condición de una opción, un Si… o una zona. Si nada la cambia todavía, el inspector lo dice, y lo mismo con las comprobaciones.

## Cambiar el tipo

Si la variable ya se usa, NovelWorks te pide confirmar y lista dónde. Los valores de esos sitios se reinician para encajar con el tipo nuevo:

- el valor inicial pasa a 0 para una Puntuación, o a No para un Hecho;
- cada cambio y cada prueba sobre esta variable se reinicia: a 0 para una Puntuación, a Sí para un Hecho;
- un Hecho solo se puede establecer, así que un «{tx.branchInspectors.add}» pasa a «{tx.branchInspectors.setTo}», y una comparación que no encaja con el tipo nuevo pasa a «es».

Si la variable no se usa, el tipo cambia al instante.

## Borrar una variable

NovelWorks te pide confirmar. Si la variable se usa, lista dónde, y avisa de que **esos sitios mostrarán una advertencia hasta que elijas otra variable**. Solo se quita la variable: los cambios y las pruebas que la usaban se conservan, muestran una advertencia y aparecen como «{tx.linkSelects.deletedVariablePickAnother}».

## Variables y partidas guardadas del jugador

El juego guarda el valor de cada variable en la partida guardada del jugador. Cuando se carga una partida:

- las variables que siguen existiendo, con el mismo tipo, reciben su valor guardado;
- los valores de variables que se borraron, o cuyo tipo cambió, se descartan;
- las variables añadidas después empiezan con su valor inicial.

Así puedes actualizar tu juego sin romper las partidas guardadas antiguas.

## Dónde se pueden usar las variables

En los cambios de una opción de elección, en las condiciones de una opción, en las pruebas de un [Si…](/novelworks-docs/es/branching/conditions/), y en las zonas de exploración (sus condiciones y la acción «cambiar una variable»).
