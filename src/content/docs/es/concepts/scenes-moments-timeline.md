---
title: Escenas, momentos y la línea de tiempo
description: Cómo se organiza una historia en NovelWorks, de las escenas a los momentos.
---

## Escenas y momentos

Una historia es un conjunto de **escenas**, como capítulos. Una escena es una serie de **momentos**, como diapositivas, que se reproducen en orden. La mayoría de los momentos son una línea de diálogo, pero hay ocho tipos.

![Una escena como una fila de momentos: dos diálogos, una elección, un Si, un salto y un final.](/novelworks-docs/diagrams/moments-strip.svg)

| Tipo | Qué hace | ¿Lo ven los jugadores? |
|---|---|---|
| **{ui.moments.dialogue}** | Una línea de diálogo o de narración. | Sí |
| **{ui.moments.choice}** | El jugador elige una opción. Puede cambiar variables y llevar a otra escena. | Sí |
| **{ui.moments.condition}** | Envía la historia a otro sitio según una variable. | No, el juego comprueba y sigue |
| **{ui.moments.jump}** | Va directamente a otra escena. | No |
| **{ui.moments.ending}** | Muestra el nombre del final y luego vuelve a la pantalla de título. | Sí |
| **{ui.moments.exploration}** | Sin cuadro de texto: el jugador hace clic en zonas de la imagen para mirar alrededor, cambiar variables o ir a otra escena. | Sí |
| **{ui.moments.item}** | Da objetos al jugador o se los quita, con un breve aviso. | Solo el aviso |
| **{ui.moments.showMap}** | Abre el mapa de inmediato. | Solo el mapa |

**{ui.moments.item}** y **{ui.moments.showMap}** están en la lista solo cuando las funciones Inventario y Mapa están activadas. Consulta [Exploración](/novelworks-docs/es/features/exploration/), [Inventario](/novelworks-docs/es/features/inventory/) y [Mapa](/novelworks-docs/es/features/map/).

Las escenas se enlazan entre sí **solo mediante momentos**: las opciones de una elección, los casos de un Si, un salto o las zonas de una exploración. Los momentos dentro de una escena siempre se reproducen uno tras otro.

## La línea de tiempo

En la parte de abajo de la ventana, la línea de tiempo muestra los momentos de la escena seleccionada como tarjetas.

- La cabecera tiene el nombre de la escena, el número de momentos y de palabras, y el resumen de la escena si escribiste uno. Haz clic en el resumen para editarlo en el inspector.
- Cada tarjeta muestra su tipo, quién habla (o «Narrador») y un breve resumen de lo que dice o hace. Una tarjeta puede llevar una nota o una advertencia.
- Haz clic en una tarjeta para seleccionarla y editarla en la pantalla del juego y en el inspector. Arrastra las tarjetas para reordenarlas.
- En la cabecera, **{ui.moments.dialogue}** añade una línea de diálogo **después del momento seleccionado**, y **{ui.timeline.addOther}** enumera los demás tipos, cada uno con una frase que lo explica. Una tarjeta **+** al final añade una línea de diálogo.
- Dos iconos duplican y borran el momento seleccionado. Las dos acciones también están en el menú del clic derecho de una tarjeta. Borrar pide confirmación, salvo que el momento sea una línea de diálogo vacía.
- Bajo las tarjetas, un gráfico muestra quién está en escena ([El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/)), unas filas muestran hasta dónde llega cada [sonido](/novelworks-docs/es/writing/sound/) cuando la escena tiene sonidos, y una fila muestra dónde se ramifica la historia ([Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/)).

### La forma rápida de escribir

En el cuadro de diálogo, **Intro** empieza un momento nuevo con el mismo escenario. **Mayús+Intro** añade una línea dentro del mismo cuadro.

## La escena inicial

El juego empieza en la **escena inicial**, marcada con una estrella en la pestaña Escenas. Para cambiarla, usa **{ui.scenesTab.makeStartScene}** en otra escena.

## Escenas a las que el jugador no puede llegar

Una escena a la que no lleva ninguna elección, condición, salto ni zona, partiendo de la escena inicial, aparece marcada como **{ui.scenesTab.unreachable}** en la pestaña Escenas, y tiene una advertencia. Consulta [Problemas](/novelworks-docs/es/testing/problems/).

## Resumen y estado de escritura

Selecciona una escena para darle un **{ui.sceneInspector.summary}**. Es solo para ti, y se muestra en el mapa de la historia. Cada escena también tiene un **{ui.sceneInspector.writingStatus}**: **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** o **{ui.shared.outline.done}**. Si no lo estableces, es **{ui.shared.outline.toWrite}** hasta que una línea de diálogo tiene texto, y entonces **{ui.shared.outline.draft}**.

## Más sobre las escenas

Consulta [Escenas](/novelworks-docs/es/writing/scenes/) y [Momentos y diálogo](/novelworks-docs/es/writing/moments-and-dialogue/).
