---
title: El panel del momento
description: Las pestañas Texto, Imagen, Efectos y Sonido de un momento, los botones de la línea de tiempo y las herramientas sobre la pantalla del juego.
---

Selecciona un momento en la línea de tiempo y el panel de la derecha muestra sus ajustes, en cuatro pestañas. Si haces clic en un personaje de la pantalla del juego, el panel muestra ese personaje. **{ui.stageCharacterInspector.backToTheMoment}** vuelve a mostrar las pestañas.

Si el momento tiene un problema, un recuadro encima de las pestañas te dice qué pasa.

## Las cuatro pestañas

| Pestaña | Qué defines ahí |
|---|---|
| **{ui.inspectorTabs.text}** | Lo que se lee: quién habla y qué dice, o los ajustes de una elección, una condición u otro tipo de momento. Tu nota privada. |
| **{ui.inspectorTabs.image}** | Lo que se ve: el fondo, el ambiente y los personajes en escena. |
| **{ui.inspectorTabs.effects}** | Cómo se mueve: la cámara y los efectos. |
| **{ui.sound.tab}** | Lo que se oye: música, sonido ambiente, efectos de sonido y la voz de la línea. |

Un puntito en una pestaña te indica que tiene algo:

- **{ui.inspectorTabs.effects}** tiene un punto cuando este momento tiene cámara, primer plano, partículas o efectos. La cámara, el primer plano y las partículas continúan en los momentos siguientes, así que el punto también puede venir de un momento anterior.
- **{ui.sound.tab}** tiene un punto cuando este momento tiene un ajuste de sonido propio.
- **{ui.inspectorTabs.text}** e **{ui.inspectorTabs.image}** nunca tienen punto.

## Texto

![La pestaña Texto de un momento de diálogo, con el hablante, la línea, los botones Insertar y la nota.](/novelworks-docs/screenshots/moment-text-tab.png)

En un momento de diálogo encuentras **{ui.momentInspector.speaker}**, **{ui.momentInspector.text}** y los botones **{ui.richText.insert}**. Consulta [Dar estilo a tu texto](/novelworks-docs/es/writing/rich-text/).

En los demás tipos de momento, la parte superior de la pestaña contiene los ajustes de ese tipo.

En la vista Visual, la pestaña muestra después adónde lleva el momento y, en el primer momento de una escena, qué lleva a él. Debajo vienen **{ui.momentInspector.note}** y **{ui.momentInspector.script}**, que muestra cómo se escribe el momento en el [modo Guion](/novelworks-docs/es/writing/script-mode/).

## Imagen

![La pestaña Imagen, con el alcance de los cambios, el fondo, las casillas de ambiente y los personajes en escena.](/novelworks-docs/screenshots/moment-image-tab.png)

De arriba abajo:

- **{ui.stage.scopeLabel}**: **{ui.stage.scopeFollowing}** o **{ui.stage.scopeOnlyHere}**. Consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).
- **{ui.momentInspector.background}**: consulta [Poner en escena una escena](/novelworks-docs/es/writing/staging/).
- **{ui.ambience.title}**: consulta [Ambiente y fondos animados](/novelworks-docs/es/writing/ambience-and-animated-backgrounds/).
- **{ui.momentInspector.onStage}**: los personajes en escena, con su expresión y su lugar.

## Efectos

![La pestaña Efectos, con una pequeña vista previa de lo que ve el jugador y los botones que abren la cámara y los efectos.](/novelworks-docs/screenshots/moment-effects-tab.png)

La pestaña empieza con el mismo ajuste **{ui.stage.scopeLabel}**. Después:

- **{ui.camera.title}**: una pequeña vista previa de lo que ve el jugador, y **{ui.camera.open}**. Consulta [La cámara](/novelworks-docs/es/writing/camera/).
- **{ui.effects.title}**: los efectos de este momento, y **{ui.effects.open}**. Consulta [Efectos](/novelworks-docs/es/writing/effects/).

## Sonido

La pestaña se explica en [Sonido y música](/novelworks-docs/es/writing/sound/).

## Bajo la línea de tiempo

- El botón con el signo más, **{ui.moments.dialogue}**, añade con un clic una línea de diálogo después del momento seleccionado.
- **{ui.timeline.addOther}** abre la lista de los demás tipos de momento, cada uno con una frase que dice para qué sirve. Dos de ellos solo aparecen cuando la [función](/novelworks-docs/es/features/features-panel/) correspondiente está activada: **{ui.moments.item}** (Inventario) y **{ui.moments.showMap}** (Mapa).
- Dos botones con icono, junto a ellos, duplican y borran el momento seleccionado. También puedes hacer clic derecho en un momento para **{ui.contextMenus.duplicate}** y **{ui.contextMenus.delete}**.

## Sobre la pantalla del juego

La barra sobre la pantalla del juego es corta:

- El botón del fondo muestra el nombre del fondo actual y abre el selector.
- **{ui.stageControls.character}** pone un personaje en escena.
- En un momento de exploración, las herramientas para dibujar zonas.
- **{ui.topBar.visual}** y **{ui.topBar.script}**, a la derecha, cambian entre la pantalla del juego y el texto de la escena.

Al hacer clic en el botón del fondo o en **{ui.stageControls.character}**, el panel también cambia a **{ui.inspectorTabs.image}**.

## La barra sobre un personaje

Cuando seleccionas un personaje en la pantalla del juego, aparece sobre él una pequeña barra. Contiene la **{ui.stageCharacterInspector.expression}** y, si el personaje tiene otros atuendos, el **{ui.stageControls.outfit}**.

Todo lo demás está en el panel de la derecha: **{ui.stageCharacterInspector.position}**, tamaño, volteo, **{ui.stageCharacterInspector.order}** y **{ui.stageCharacterInspector.removeFromStage}**.
