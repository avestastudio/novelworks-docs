---
title: Capítulos
description: Marca las escenas que empiezan un capítulo y deja que los jugadores vuelvan a jugar los capítulos a los que han llegado.
---

Los capítulos permiten a los jugadores volver a una parte de tu historia desde la pantalla de título.

## Marcar un capítulo

1. En la pestaña **{ui.leftPanel.scenes}**, selecciona una escena.
2. En el panel de la derecha, activa **{ui.sceneInspector.startsChapter}**.
3. Escribe un nombre si quieres. Sin nombre, el juego muestra **{rt.chapters.chapterNumber}** con su número.

Un capítulo dura hasta la escena del capítulo siguiente. El orden de los capítulos es el orden de tu lista de escenas. Un juego puede tener hasta 50 capítulos.

Si borras una escena, su capítulo se va con ella.

## Lo que ven los jugadores

La pantalla de título recibe un botón **{rt.game.chapters}** en cuanto tu juego tiene un capítulo.

La pantalla enumera los capítulos. Los que el jugador ya ha alcanzado muestran su nombre y se pueden elegir. Los demás muestran **{rt.chapters.locked}** y no se pueden elegir.

Un capítulo cuenta como alcanzado cuando el jugador está en su escena, sea cual sea la forma en que llegó: una elección, un salto o una partida cargada.

## Volver a jugar un capítulo

Un capítulo empieza desde el primer momento de su escena, con los valores iniciales: las variables vuelven a su primer valor y el inventario está vacío.

La pantalla se abre desde la pantalla de título, así que una partida en curso no se ve afectada.

Los capítulos alcanzados se conservan para cada juego en el dispositivo del jugador, como las partidas guardadas. Cuando pruebas en el editor, se guardan aparte de los del juego exportado.

## El aspecto

Ve a **{ui.topBar.gameUI}** y elige **{ui.gameUI.chapters}** en la lista de pantallas.

![La pantalla Capítulos en la Interfaz del juego, con sus colores y una vista previa de la lista de capítulos.](/novelworks-docs/screenshots/game-ui-chapters.png)

Puedes definir **{ui.gameUIInspector.backgroundColor}**, **{ui.gameUIInspector.textColor}** y **{ui.gameUIInspector.buttonStyle}**. **{ui.gameUIInspector.resetToDefault}** deja esta pantalla como estaba.

La vista previa muestra tus capítulos, o tres ejemplos si todavía no tienes ninguno, con el último aún bloqueado.
