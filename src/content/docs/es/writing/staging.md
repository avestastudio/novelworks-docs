---
title: Poner en escena una escena
description: Elige el fondo, coloca personajes en la pantalla y sitúalos, cambia su tamaño, voltéalos y ordénalos.
---

Poner en escena es decidir qué ve el jugador detrás del texto: el fondo y los personajes. Todo se hace en la pantalla del juego, en el modo **{ui.topBar.story}**, vista Visual. Antes de empezar, lee [El escenario](/novelworks-docs/es/concepts/stage/): lo que defines en un momento continúa en los siguientes.

## Elegir hasta dónde llega un cambio

Sobre la pantalla del juego, **{ui.stage.scopeLabel}** tiene dos ajustes: **{ui.stage.scopeFollowing}** (el predeterminado) y **{ui.stage.scopeOnlyHere}**. Defínelo antes de cambiar algo. Los momentos a los que llegó un cambio parpadean un instante en la línea de tiempo, y en la pantalla del juego los personajes se marcan como **{ui.stage.markNew}** o **{ui.stage.markChanged}**.

## El fondo

- Haz clic en el botón del fondo sobre la pantalla del juego («{ui.stage.chooseTheBackgroundOfThisMoment}»), o en **{ui.momentInspector.change}** en el inspector. El selector ofrece tus fondos y CG, y una forma de importar una imagen nueva al instante. **{ui.momentInspector.noneBlackScreen}** deja la pantalla en negro.
- **{ui.stage.applyToTheFollowingMoments}** da el fondo de este momento a todos los momentos posteriores de la escena, después de pedirte confirmación. Está desactivado en el último momento.

Una escena vacía muestra **{ui.stage.chooseBackground}** en la pantalla del juego.

## Poner un personaje en escena

Haz clic en **{ui.stageControls.character}** sobre la pantalla del juego («{ui.stageControls.putACharacterOnStage}»), o en **{ui.momentInspector.add}** en la sección **{ui.momentInspector.onStage}** del inspector. La lista muestra tus personajes; los que ya están en escena aparecen desactivados. Si no tienes ninguno, **{ui.stageControls.newCharacter}** crea uno.

El personaje va al primer lugar libre entre centro, izquierda y derecha, en el borde inferior. Si los tres lugares están ocupados, el personaje nuevo se coloca cerca del centro, un poco a un lado de los demás, y los personajes pueden superponerse: arrástralos adonde quieras. La barra **{ui.stage.castTitle}** sobre la pantalla del juego también pone y quita personajes de la escena con un clic.

## Seleccionar, mover y cambiar de tamaño

- **Haz clic** en un personaje de la pantalla del juego para seleccionarlo. Aparece una pequeña barra de herramientas sobre él, y el inspector muestra sus ajustes.
- **Arrástralo** para moverlo a cualquier sitio. Se ajusta a Izquierda, Centro y Derecha, y al borde inferior, cuando te acercas. Todo el arrastre cuenta como un solo paso de deshacer.
- **Arrastra una esquina** para cambiar su tamaño (**{ui.stage.dragToResize}**). Los pies se quedan en su sitio. El tamaño va del 30 % al 200 %.

## Colocar, voltear y ordenar

En la barra de herramientas sobre el personaje, o en el inspector (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**):

| Control | Qué hace |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Cambia la expresión. La predeterminada tiene una estrella. Si el personaje no tiene expresiones, un botón te lleva a la pestaña Personajes. |
| Izquierda / Centro / Derecha | Pone al personaje en uno de los tres lugares del borde inferior de la pantalla. Conserva su tamaño y su dirección. |
| **{ui.stage.flipHorizontally}** | Gira al personaje para que mire hacia el otro lado. |
| **{ui.stage.bringForward}** / **{ui.stage.sendBackward}** | Mueve al personaje delante o detrás de otro. El cuadro de diálogo siempre está encima. |
| **{ui.stage.removeFromStage}** | Quita al personaje de la escena, a partir de este momento. |

El inspector también tiene un control deslizante de **{ui.stageCharacterInspector.size}** y un botón para editar el nombre y las expresiones del personaje.

También puedes hacer clic derecho en un personaje para ver los mismos controles más **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** y **{ui.contextMenus.leavesHere}**; se explican en [El escenario](/novelworks-docs/es/concepts/stage/).

Para quitar un personaje seleccionado también puedes pulsar `Delete` o `Backspace`. Las teclas de flecha no mueven a los personajes: te mueven entre momentos.

## Empezar una escena como terminó otra

En el primer momento de una escena a la que llevan otras escenas, un aviso puede ofrecerte empezar con lo que había en pantalla al final de la escena anterior. Consulta [El escenario](/novelworks-docs/es/concepts/stage/).

## Mientras editas

- La pantalla del juego siempre se escala para caber en la ventana. Una insignia muestra el porcentaje («Ajustar · 65 %»).
- Un personaje sin imagen se dibuja como un contorno discontinuo con «(sin imagen)», para que aun así puedas colocarlo. En el juego, ese personaje no se dibuja.
- El cuadro de diálogo se sustituye por campos editables mientras editas, y las zonas se ocultan.
- En una ventana estrecha, algunas herramientas de la barra se reúnen en un menú **{ui.stage.more}**.
