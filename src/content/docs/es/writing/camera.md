---
title: La cámara
description: Elige lo que ve el jugador, encadena varios planos en un momento y añade profundidad, desenfoque y efectos de película.
---

La cámara decide qué parte de la escena ve el jugador: toda la pantalla o un primer plano. Selecciona un momento, abre la pestaña **{ui.inspectorTabs.effects}** del [panel del momento](/novelworks-docs/es/writing/moment-panel/) y haz clic en **{ui.camera.open}**.

![La ventana de la cámara: la escena con su marco, los movimientos preparados arriba, los ajustes a un lado y los planos abajo.](/novelworks-docs/screenshots/camera-window.png)

En la pantalla del juego del editor siempre ves la escena entera. La pequeña vista previa de la pestaña **{ui.inspectorTabs.effects}** muestra lo que ve el jugador.

## Planos

Un momento tiene uno o varios planos, que se muestran en una fila en la parte inferior de la ventana. Cada plano es un marco sobre la escena, y la cámara pasa de uno al siguiente.

- **Arrastra** el marco sobre la escena para elegir lo que ve el jugador.
- **{ui.camera.addShot}** (el signo más) añade un plano, hasta 6.
- **{ui.camera.removeShot}** borra el seleccionado.
- **{ui.camera.play}** reproduce los planos en la ventana. **{ui.camera.stop}** los detiene.

## Movimientos preparados

Los botones de arriba escriben los planos por ti. Sustituyen a los planos que tenías y conservan los ajustes de todo el momento. Los movimientos que se acercan apuntan al primer personaje en escena, o al centro de la pantalla si no hay nadie.

| Movimiento | Qué hace |
|---|---|
| **{ui.camera.preset.fixed}** | Toda la pantalla, sin movimiento. |
| **{ui.camera.preset.slowZoom}** | Desde toda la pantalla, se acerca despacio. |
| **{ui.camera.preset.travelling}** | Se desliza por la escena a velocidad constante. |
| **{ui.camera.preset.reveal}** | Empieza cerca y luego se aleja hasta toda la pantalla. |
| **{ui.camera.preset.focus}** | Se acerca un poco mientras el fondo se desenfoca. |
| **{ui.camera.preset.tension}** | De toda la pantalla a un primer plano inclinado, con algo de desenfoque. |

## Encuadrar a un personaje

**{ui.camera.frameOn}** muestra los personajes en escena. Haz clic en uno para poner el marco sobre su cara. El marco se queda donde está: no sigue al personaje si se mueve después.

## Ajustes de un plano

| Ajuste | Qué hace |
|---|---|
| **{ui.camera.zoom}** | Del 100 % (toda la pantalla) al 400 %. |
| **{ui.camera.arrive}** | Cómo llega la cámara a este plano: **{ui.camera.smooth}**, **{ui.camera.steady}**, **{ui.camera.quick}** o **{ui.camera.cut}**. Para el primer plano, este ajuste es **{ui.camera.arriveFirst}**. |
| **{ui.camera.seconds}** | Cuánto tarda la cámara en llegar, de 0,2 a 8 segundos. |
| **{ui.camera.hold}** | Aparece en su lugar para un plano al que se llega de golpe: cuánto se mantiene antes del siguiente. |
| **{ui.camera.blur}** | Desenfoca el fondo, no los personajes. |
| **{ui.camera.tilt}** | Inclina el plano, hasta 12 grados a cada lado. |

En el primer momento de una escena, el primer plano no viene de ninguna parte. Muestra **{ui.camera.start}**.

## Ajustes de todo el momento

En **{ui.camera.wholeMoment}**:

- **{ui.camera.bars}**
- **{ui.camera.vignette}**
- **{ui.camera.grain}**
- **{ui.camera.fadeIn}**
- **{ui.camera.handheld}**
- **{ui.camera.depth}**. Está al 100 % al empezar, y puedes bajarla hasta 0.

**{ui.camera.foreground}** pone una imagen delante de los personajes, como unas ramas o el cristal de una ventana. Cubre toda la pantalla, así que usa una imagen con zonas transparentes. Con profundidad, se mueve más que los personajes. Los clics la atraviesan.

**{ui.camera.reset}** quita la cámara de este momento: todos sus planos y los ajustes de todo el momento. El primer plano se queda.

## Cuánto dura

La cámara y el primer plano se mantienen de un momento al siguiente, como el fondo, hasta que un momento los cambia. **{ui.stage.scopeLabel}** está en la parte inferior de la ventana: consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).

## En el juego

- Los planos se suceden mientras se escribe el texto.
- El primer clic termina el movimiento y muestra la línea entera. El siguiente clic avanza.
- Los momentos siguientes conservan el último plano y no vuelven a reproducir los planos.
- Entre dos momentos de una escena, la cámara se desliza hasta su nuevo lugar. Una escena nueva empieza directamente en su primer plano.
- Una partida cargada empieza en el último plano.
- El cuadro de diálogo y los menús nunca se mueven.

Si el jugador ha pedido a su sistema menos movimiento, el juego va directamente al último plano, sin temblor y sin fundido.

## Límites

- En un momento de exploración, **{ui.camera.tilt}** y **{ui.camera.depth}** se ignoran, para que las zonas sigan exactamente sobre lo que cubren.
- Hacer zoom amplía la imagen: un fondo pequeño se ve borroso.
- El modo Guion no puede escribir la cámara. La conserva cuando editas el texto.
- La demo permite 2 planos por momento. Consulta [Demo y edición completa](/novelworks-docs/es/getting-started/demo-edition/).
