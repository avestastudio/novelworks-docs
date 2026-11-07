---
title: Escenas
description: Crea, renombra, reordena, duplica y borra escenas, y elige dónde empieza el juego.
---

Una escena es un capítulo de tu historia: una serie de [momentos](/novelworks-docs/es/writing/moments-and-dialogue/) que se reproducen uno tras otro. Las escenas viven en la pestaña **{ui.leftPanel.scenes}**. Para ver el panorama general, consulta [Escenas, momentos y la línea de tiempo](/novelworks-docs/es/concepts/scenes-moments-timeline/).

## Crear una escena

Haz clic en **{ui.scenesTab.newScene}**. La escena se llama «Escena N», donde N es el número de escenas que ya tienes más uno (o el siguiente número si ese nombre ya existe), contiene una línea de diálogo vacía y queda seleccionada. Si tu proyecto no tenía escena inicial, la nueva escena pasa a ser la escena inicial.

## Renombrar una escena

Haz doble clic en la escena de la lista, escribe el nombre y pulsa **Enter**. **Esc** cancela, y si el nombre queda vacío se conserva el anterior. También puedes usar **{ui.sceneInspector.name}** en el inspector, o hacer clic derecho en la escena y elegir **{ui.contextMenus.rename}**. Una escena sin nombre aparece como «Escena sin título».

## Reordenar escenas

Arrastra una escena hacia arriba o hacia abajo en la lista. El orden de la lista no cambia cómo se desarrolla la historia: las escenas se enlazan mediante elecciones, condiciones, saltos y zonas.

## Duplicar una escena

Usa **{ui.scenesTab.duplicateScene}** en la fila, o **{ui.contextMenus.duplicate}** en el menú del clic derecho, o **Cmd+D** / **Ctrl+D** con la escena seleccionada. La copia va justo después del original y se llama, por ejemplo, «A helping hand (copia)». Conserva el resumen y el estado de escritura, sus momentos reciben identidades nuevas y su lugar en el mapa de la historia se elige de nuevo.

## Borrar una escena

Haz clic en **{ui.scenesTab.deleteScene}** (o en **{ui.contextMenus.delete}** en el menú del clic derecho). NovelWorks siempre pregunta antes, y te dice:

- cuántos momentos se borrarán;
- si es la escena inicial, qué escena pasará a ser la escena inicial (o que tu juego se quedará sin escenas);
- si otras escenas llevan a ella, qué momentos lo hacen.

Las elecciones, condiciones, saltos y zonas que llevaban a una escena borrada **no** cambian. Siguen apuntando a la nada y muestran una advertencia hasta que elijas otra escena. Puedes deshacer un borrado con **{ui.native.menu.undo}**.

## La escena inicial

El juego empieza en la **escena inicial**. Tiene una estrella y la etiqueta «Escena inicial». Para cambiarla, haz clic en el botón de la estrella de otra escena (**{ui.scenesTab.makeStartScene}**), usa **{ui.contextMenus.setAsStartScene}** en el menú del clic derecho, o usa el botón del inspector de la escena.

## Qué muestra la lista

Cada fila de escena muestra cuántos momentos tiene. Una pequeña bifurcación con «Ramas: N» indica cuántos momentos permiten que la historia vaya a otro sitio (consulta [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/)). Una etiqueta roja **{ui.scenesTab.unreachable}** significa que los jugadores aún no pueden llegar a ella: ninguna elección, condición, salto o zona lleva a ella desde la escena inicial.

## El inspector de escena

Selecciona una escena para ver:

- **{ui.sceneInspector.name}**;
- **{ui.sceneInspector.summary}**: una o dos frases, solo para ti. Se muestra en el mapa de la historia y sobre la línea de tiempo, y nunca en el juego;
- **{ui.sceneInspector.writingStatus}**: **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** o **{ui.shared.outline.done}**. Si nunca lo defines, es «Por escribir» hasta que la escena tiene algún texto, y luego «{tx.shared.outline.draft}»;
- el botón de escena inicial;
- **{ui.branches.entriesTitle}**: los lugares que llevan a esta escena, en los que puedes hacer clic;
- los botones **{ui.sceneInspector.deleteScene}** y duplicar.

## Jugar desde una escena

Haz clic derecho en una escena y elige **{ui.contextMenus.playFromHere}** para jugar desde su primer momento (está desactivado si la escena no tiene momentos).
