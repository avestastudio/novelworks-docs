---
title: El mapa de la historia
description: Ve todas las escenas y cómo se conectan, enlaza escenas arrastrando y detecta lo que necesita atención.
---

El **{ui.topBar.storyMap}** muestra todas las escenas de tu juego como tarjetas, y cada elección, condición, salto y zona como una flecha entre ellas. Ábrelo desde la barra superior, o con **Cmd+6** / **Ctrl+6**.

![El mapa de la historia: cada escena como una tarjeta, con flechas para elecciones, condiciones y saltos. Sin ninguna escena seleccionada, el panel derecho lista los finales.](/novelworks-docs/screenshots/story-map.png)

## Las tarjetas de escena

Cada tarjeta muestra:

- el nombre de la escena, y **★ Inicio** en la escena inicial;
- su resumen, o «{tx.storyMap.noSummaryYet}» (el [resumen](/novelworks-docs/es/writing/scenes/) es solo para ti);
- su estado de escritura (**{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** o **{ui.shared.outline.done}**) y su número de palabras, o «Vacía». Apunta al contador de palabras para ver el número de momentos;
- una insignia de nota adhesiva con el número de momentos que tienen una [nota](/novelworks-docs/es/writing/notes/);
- una insignia de advertencia con el número de problemas. Apúntala para leer cada uno («Momento 4: …»);
- etiquetas: una bandera con el nombre de cada final, **{ui.storyMap.unreachable}** (nada lleva aquí desde la escena inicial; no se muestra cuando el proyecto tiene una sola escena), «{tx.storyMap.gameEndsHere}» (no hay nada después de esta escena y no tiene final) y «{tx.storyMap.backToTheMap}».

Una tarjeta inaccesible tiene el borde discontinuo y aparece atenuada.

## Flechas

Una flecha va de una escena a la escena a la que lleva uno de sus momentos. Todos los enlaces entre las mismas dos escenas se unen en una sola flecha con varias etiquetas. Una etiqueta dice «número de momento · texto», por ejemplo «11 · Help», y tiene el color de su tipo de momento.

| Etiqueta de la flecha | La crea |
|---|---|
| El texto de una opción | Una opción de una elección que va a una escena |
| «si …» y «{tx.storyMap.otherwise}» | Los casos y el «si no» de un Si… |
| «{tx.storyMap.jump}» | Un salto |
| El nombre de una zona | Una zona de una exploración que va a una escena |

Un bucle punteado bajo una escena significa «la historia continúa en esa escena»: una opción de elección o un «si no» sin escena, que continúa con el siguiente momento. Una flecha discontinua de color de advertencia con «{tx.storyMap.deletedScene}» significa que un enlace va a una escena que se eliminó. En una flecha se muestran hasta tres etiquetas, y luego «+N más»: apúntala para verlas todas.

La leyenda **{ui.storyMap.arrows}** del panel derecho las recuerda.

## Muévete por el mapa

- **Desplázate** o usa dos dedos para mover el mapa. **Arrastra un lugar vacío**, mantén pulsada la tecla **Espacio** y arrastra, o usa el botón central del ratón, para desplazarte.
- **Pellizca**, o mantén pulsada la tecla **Cmd** / **Ctrl** mientras te desplazas, para hacer zoom alrededor del puntero. Los botones alejan y acercan (x0,8 y x1,25), entre el 20 % y el 200 %.
- El botón **{ui.gameUIInspector.fit}** (con el porcentaje de zoom) muestra toda la historia (**Mayús+1**). **Mayús+0** vuelve al 100 %.
- **+** y **-** acercan y alejan.

El mapa recuerda dónde estabas mientras NovelWorks está abierto, y muestra toda la historia la primera vez.

## Coloca las escenas

- **Arrastra una tarjeta** para moverla. Su lugar se guarda en el proyecto. Puedes soltar una tarjeta encima de otra; si pasa, vuelve a moverla. Una escena **nueva** o **copiada** siempre cae en un lugar libre.
- Las escenas que no has colocado reciben un lugar automático: columnas según la distancia a la escena inicial, y las escenas inaccesibles juntas debajo.
- **{ui.storyMap.tidyUp}** olvida todos los lugares que elegiste y vuelve a colocar todas las escenas automáticamente, empezando por la escena inicial. Está desactivado cuando todo ya es automático.

## Añade una escena

Haz clic en **{ui.storyMap.newScene}**, o haz doble clic en un lugar vacío del mapa. Aparece una tarjeta pequeña: escribe el nombre, pulsa **Intro** para pasar al resumen y **Intro** otra vez para confirmar. **Esc** cancela. La escena se crea con una línea de diálogo vacía.

## Abre una escena

Haz doble clic en una tarjeta, o selecciónala y pulsa **Intro**, o haz clic derecho y elige **{ui.storyMap.openInEditor}**: la escena se abre en el modo {ui.topBar.story}.

## Enlaza dos escenas

Arrastra el **tirador redondo** de la derecha de una tarjeta hasta otra tarjeta, o hasta un lugar vacío (para crear allí una escena nueva). Una ventana pequeña pregunta cómo enlazarlas:

| Tipo | Qué añade al final de la primera escena |
|---|---|
| {ui.shared.linking.jump} | Un salto a la escena, o el destino de su último salto. |
| {ui.shared.linking.choiceOption} | Una opción (tú escribes su texto) en la última elección, o una elección nueva. |
| {ui.shared.linking.condition} | Un Si… nuevo cuyo primer caso va a la escena. Aún tienes que elegir la variable. |
| {ui.shared.linking.explorationZone} | Una zona que va a la escena, en el último momento de exploración. |

Un tipo que no se puede aplicar aparece atenuado, con el motivo: «Esta escena termina con un final», «Esta escena ya termina con un salto», «Su elección ya tiene 6 opciones»… Enlazar cuenta como un solo paso para Deshacer. Añade un momento a la escena: en el mapa en sí no se guarda nada.

## Clic derecho

### En una escena

**{ui.storyMap.openInEditor}**, **{ui.storyMap.rename}**, **{ui.storyMap.editSummary}**, **{ui.storyMap.status}** (Por escribir, Borrador, Hecho), **{ui.storyMap.duplicate}** (la copia aparece justo debajo), **{ui.storyMap.setAsStartScene}** y **{ui.storyMap.delete}** (con la confirmación habitual).

### En una flecha

- **{ui.storyMap.goToTheMomentThatCreatesThis}**: abre ese momento (una entrada por cada etiqueta cuando hay varias).
- **{ui.storyMap.removeLink}**: para un salto o una opción. En un salto, el salto se queda pero pierde su escena. En una opción, la opción se elimina, salvo que la elección tenga solo dos opciones: en ese caso solo se borra el enlace.
- **{ui.storyMap.unlinkZone}**: para una zona, que se queda donde estaba dibujada.

Los enlaces creados por un Si… no se pueden quitar desde el mapa. Edítalos en el inspector. Cada eliminación pide confirmación antes y se puede deshacer.

## Resalta lo importante

Arriba, **{ui.storyMap.highlight}** atenúa las escenas que no coinciden, y sus flechas:

- **{ui.storyMap.all}**: todo;
- **{ui.storyMap.toWrite}**: las escenas que aún faltan por escribir;
- **{ui.storyMap.endingsFilter}**: las escenas que contienen un final;
- **{ui.storyMap.problems}**: las escenas con una advertencia, o inaccesibles.

El progreso de escritura está al lado: el número de escenas, y luego cuántas están hechas, en borrador y por escribir.

## El panel derecho

- **Con una escena seleccionada**: su inspector (nombre, resumen, estado de escritura, escena inicial, **{ui.branches.entriesTitle}**, número de momentos, y botones para abrirla, duplicarla o eliminarla).
- **Sin nada seleccionado**: un panel de ayuda con los **{ui.endings.title}** ([ve todos los finales](/novelworks-docs/es/branching/endings/)), la leyenda **{ui.storyMap.arrows}**, y recordatorios sobre cómo añadir, enlazar y mover escenas.
