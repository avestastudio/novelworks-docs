---
title: Poner en escena una escena
description: Elige el fondo, coloca personajes en la pantalla y sitúalos, cambia su tamaño, voltéalos y ordénalos.
---

Poner en escena es decidir qué ve el jugador detrás del texto: el fondo y los personajes. Todo se hace en la pantalla del juego, en el modo **{ui.topBar.story}**, vista Visual. Antes de empezar, lee [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/): lo que defines en un momento continúa en los siguientes. Para ver un resumen de las pestañas de la derecha, consulta [El panel del momento](/novelworks-docs/es/writing/moment-panel/).

## Elegir hasta dónde llega un cambio

El interruptor **{ui.stage.scopeLabel}** tiene dos ajustes: **{ui.stage.scopeFollowing}** (el predeterminado) y **{ui.stage.scopeOnlyHere}**. Lo encuentras en las pestañas **{ui.inspectorTabs.image}** y **{ui.inspectorTabs.effects}** de un momento, y en el panel de un personaje en escena. Defínelo antes de cambiar algo. Los momentos a los que llegó un cambio parpadean un instante en la línea de tiempo, y en la pantalla del juego los personajes se marcan como **{ui.stage.markNew}** o **{ui.stage.markChanged}**.

## El fondo

- Haz clic en el botón del fondo sobre la pantalla del juego («{ui.stage.chooseTheBackgroundOfThisMoment}»), o en **{ui.momentInspector.change}** en la pestaña **{ui.inspectorTabs.image}**. El selector ofrece tus fondos y CG, y una forma de importar una imagen nueva o un [fondo animado](/novelworks-docs/es/writing/ambience-and-animated-backgrounds/) al instante. **{ui.momentInspector.noneBlackScreen}** deja la pantalla en negro.
- **{ui.momentInspector.applyToTheFollowingMoments}**, en la pestaña **{ui.inspectorTabs.image}**, da el fondo de este momento a todos los momentos posteriores de la escena, después de pedirte confirmación. Está desactivado en el último momento.

Una escena vacía muestra **{ui.stage.chooseBackground}** en la pantalla del juego. La misma pestaña también tiene el [ambiente](/novelworks-docs/es/writing/ambience-and-animated-backgrounds/) del momento.

## Poner un personaje en escena

Haz clic en **{ui.stageControls.character}** sobre la pantalla del juego («{ui.stageControls.putACharacterOnStage}»), o en **{ui.momentInspector.add}** en la sección **{ui.momentInspector.onStage}** de la pestaña **{ui.inspectorTabs.image}**. La lista muestra tus personajes; los que ya están en escena aparecen desactivados. Si no tienes ninguno, **{ui.stageControls.newCharacter}** crea uno.

El personaje va al primer lugar libre entre centro, izquierda y derecha, en el borde inferior. Si los tres lugares están ocupados, el personaje nuevo se coloca cerca del centro, un poco a un lado de los demás, y los personajes pueden superponerse: arrástralos adonde quieras. La barra **{ui.stage.castTitle}** de esa sección también pone y quita personajes de la escena con un clic.

## Seleccionar, mover y cambiar de tamaño

- **Haz clic** en un personaje de la pantalla del juego para seleccionarlo. Aparece sobre él una pequeña barra con su expresión y su atuendo, y el inspector muestra **{ui.inspector.characterOnStage}**: todos sus detalles. **{ui.stageCharacterInspector.backToTheMoment}** vuelve a las pestañas del momento.
- **Arrástralo** para moverlo a cualquier sitio. Se ajusta a Izquierda, Centro y Derecha, y al borde inferior, cuando te acercas. Todo el arrastre cuenta como un solo paso de deshacer.
- **Arrastra una esquina** para cambiar su tamaño (**{ui.stage.dragToResize}**). Los pies se quedan en su sitio. El tamaño va del 30 % al 200 %.

## Colocar, voltear y ordenar

La barra sobre el personaje solo conserva la expresión y el atuendo (el atuendo aparece cuando el personaje tiene atuendos). El resto está en el inspector, una vez seleccionado el personaje (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**):

| Control | Qué hace |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Cambia la expresión. La predeterminada tiene una estrella. Si el personaje no tiene expresiones, un botón te lleva a la pestaña Personajes. |
| **{ui.stageControls.outfit}** | Cambia el atuendo. Consulta [Atuendos y vestuario](/novelworks-docs/es/writing/outfits/). |
| {ui.scenes.left} / {ui.scenes.center} / {ui.scenes.right} | Pone al personaje en uno de los tres lugares del borde inferior de la pantalla. Conserva su tamaño y su dirección. |
| **{ui.stageCharacterInspector.flippedHorizontallyFacingTheOtherWay}** | Gira al personaje para que mire hacia el otro lado. |
| **{ui.stageCharacterInspector.forward}** / **{ui.stageCharacterInspector.backward}** | Mueve al personaje delante o detrás de otro. El cuadro de diálogo siempre está encima. |
| **{ui.stageCharacterInspector.removeFromStage}** | Quita al personaje de la escena, según el interruptor **{ui.stage.scopeLabel}**. |

El inspector también tiene un control deslizante de **{ui.stageCharacterInspector.size}** y un botón para editar el nombre y las expresiones del personaje.

También puedes hacer clic derecho en un personaje para ver la expresión, el atuendo, la posición, el volteo y el orden, más **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** y **{ui.contextMenus.leavesHere}**; se explican en [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).

Para quitar un personaje seleccionado también puedes pulsar `Delete` o `Backspace`. Las teclas de flecha no mueven a los personajes: te mueven entre momentos.

## Empezar una escena como terminó otra

En el primer momento de una escena a la que llevan otras escenas, un aviso en la pestaña **{ui.inspectorTabs.image}** puede ofrecerte empezar con lo que había en pantalla al final de la escena anterior. Consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).

## Mientras editas

- La pantalla del juego siempre se escala para caber en la ventana.
- Un personaje sin imagen se dibuja como un contorno discontinuo con «{tx.render.noPicture}», para que aun así puedas colocarlo. En el juego, ese personaje no se dibuja.
- El cuadro de diálogo se sustituye por campos editables mientras editas.
