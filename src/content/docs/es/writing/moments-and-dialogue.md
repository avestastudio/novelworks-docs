---
title: Momentos y diálogo
description: Escribe líneas de diálogo, añade momentos, reordénalos y usa el menú del momento.
---

Un **momento** es un paso de una escena: una línea de diálogo, una elección, un salto… Esta página trata del más habitual, el momento **{ui.moments.dialogue}**. Los demás tipos están en [Escenas, momentos y la línea de tiempo](/novelworks-docs/es/concepts/scenes-moments-timeline/).

## Escribir una línea

Haz clic en el cuadro de diálogo de la pantalla del juego y escribe. El texto se escribe directamente en el cuadro, y también puedes usar **{ui.momentInspector.text}** en la pestaña **{ui.inspectorTabs.text}** del inspector. Selecciona palabras para darles formato: consulta [Texto enriquecido](/novelworks-docs/es/writing/rich-text/).

- **Intro** empieza la **línea siguiente**: un nuevo momento de diálogo después de este, con lo mismo en escena y el mismo personaje que habla, listo para escribir.
- **Mayús+Intro** añade una línea nueva **dentro del mismo cuadro**.
- Un texto largo que no cabe en el cuadro muestra una advertencia: pulsa **Intro** para continuar en un momento nuevo.

## Quién habla

Sobre el texto, en la placa del nombre, o con **{ui.momentInspector.speaker}** en la pestaña **{ui.inspectorTabs.text}**, elige:

- **{ui.stageControls.narrator}**: nadie habla, solo hay texto;
- un personaje. Primero aparecen los personajes en escena y después los demás.

Una línea nueva conserva el personaje de la línea anterior. Si borras un personaje, las líneas que decía se convierten en narración.

## Añadir momentos

En la cabecera de la línea de tiempo, sobre las tarjetas, **{ui.moments.dialogue}** añade una línea de diálogo **después del momento seleccionado**. **{ui.timeline.addOther}** enumera los demás tipos, cada uno con una frase que lo explica: {ui.moments.choice}, {ui.moments.condition}, {ui.moments.jump}, {ui.moments.ending}, {ui.moments.exploration} y, cuando esas funciones están activadas, {ui.moments.item} y {ui.moments.showMap}. El **+** al final de la tira añade una línea de diálogo. En una escena vacía, **{ui.timeline.writeTheFirstLine}** hace lo mismo.

Un momento nuevo no cambia nada en pantalla: muestra lo que mostraba el momento anterior (consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/)).

## Reordenar momentos

Arrastra una tarjeta a la izquierda o a la derecha. Las flechas **←** y **→** mueven la selección al momento anterior y al siguiente, **Inicio** y **Fin** al primero y al último, y **Cmd+[** / **Cmd+]** (**Ctrl+[** / **Ctrl+]**) hacen lo mismo mientras escribes.

## Qué muestra una tarjeta

Una tarjeta muestra el nombre del personaje que habla con su color (o «{tx.timeline.narrator}», o el tipo de momento con una franja de color), el comienzo del texto y su número en la esquina. También puede mostrar:

- un icono de nota adhesiva si el momento tiene una [nota](/novelworks-docs/es/writing/notes/);
- un triángulo de advertencia: apunta a él para leer qué necesita atención, por ejemplo una elección sin opciones, un enlace a una escena borrada o un momento que los jugadores nunca pueden ver porque un final o un salto va antes;
- pequeñas fichas con lo que el momento cambia en escena y, bajo las tarjetas, el gráfico de quién está en escena.

## El menú del momento

Haz clic derecho en una tarjeta:

| Entrada | Qué hace |
|---|---|
| {ui.contextMenus.insertBefore} | Añade un momento de diálogo antes de este. Toma el personaje que habla del momento delante del cual se coloca, y muestra la pantalla del momento anterior. |
| {ui.contextMenus.insertAfter} | Añade uno después (**Cmd+Intro** / **Ctrl+Intro**). |
| {ui.contextMenus.duplicate} | Copia el momento justo después de sí mismo, mostrando la misma pantalla (**Cmd+D** / **Ctrl+D**). |
| {ui.contextMenus.changeType} | Convierte el momento en otro tipo. Se conserva el texto de un diálogo, una elección o un final; si algunos ajustes no se pueden conservar, NovelWorks pregunta y puedes deshacer. |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | Abre la nota del momento. |
| {ui.contextMenus.playFromHere} | Juega desde este momento (**Cmd+Mayús+P** / **Ctrl+Mayús+P**). |
| {ui.contextMenus.delete} | Borra el momento. |

## Borrar un momento

Usa el icono de papelera en la cabecera de la línea de tiempo, **{ui.contextMenus.delete}** en el menú del clic derecho, o la tecla `Delete`. NovelWorks pide confirmación, salvo para una línea de diálogo vacía. Lo que el momento borrado cambiaba en escena pasa al siguiente, así los demás momentos siguen mostrando lo mismo.

## El inspector de un momento de diálogo

Las advertencias, si las hay, están arriba. Debajo hay cuatro pestañas:

- **{ui.inspectorTabs.text}**: **{ui.momentInspector.speaker}** y **{ui.momentInspector.text}**, adónde lleva el momento, la **{ui.momentInspector.note}**, y **{ui.momentInspector.script}**, que muestra cómo se escribe este momento en el [modo Guion](/novelworks-docs/es/writing/script-mode/) para que puedas copiarlo.
- **{ui.inspectorTabs.image}**: hasta dónde llega un cambio, el **{ui.momentInspector.background}**, el **{ui.ambience.title}** y quién está **{ui.momentInspector.onStage}**.
- **{ui.inspectorTabs.effects}**: la [cámara](/novelworks-docs/es/writing/camera/) y los [efectos](/novelworks-docs/es/writing/effects/).
- **{ui.sound.tab}**: [música, sonido ambiente, efectos de sonido y voz](/novelworks-docs/es/writing/sound/).

Consulta [El panel del momento](/novelworks-docs/es/writing/moment-panel/).
