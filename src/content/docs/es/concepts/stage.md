---
title: "El escenario: los personajes se quedan en su sitio"
description: Por qué un personaje que pones en pantalla sigue ahí en los momentos siguientes, y cómo controlarlo.
---

NovelWorks funciona como un **escenario de teatro**. Cuando un personaje entra, **se queda en su sitio** hasta que algo lo cambia. Con el fondo pasa lo mismo: es el *decorado* de la escena.

![Una escena de seis momentos: el fondo dura toda la escena, Leo está en escena en los momentos 2 y 3, Mia llega en el momento 4 y se queda hasta el final.](/novelworks-docs/diagrams/stage-persistence.svg)

Solo la **pantalla** pasa de un momento al siguiente: el fondo y los personajes. Las **líneas de diálogo** no. Cada momento tiene su propio texto.

## Qué guarda un momento

Un momento no guarda una imagen completa de la pantalla. Guarda solo **lo que cambia**: un fondo nuevo, un personaje que llega, cambia de expresión o de posición, o se va. La pantalla que ves en cada momento es el resultado de todos los cambios de la escena aplicados en orden, empezando desde una pantalla vacía.

No tienes que pensar en esto para empezar: añade un personaje en el momento 1 y estará en pantalla en todos los momentos siguientes. Importa cuando **cambias** algo a mitad de camino.

## «{tx.stage.scopeFollowing}» o «{tx.stage.scopeOnlyHere}»

Encima de la pantalla del juego, el interruptor **{ui.stage.scopeLabel}** decide hasta dónde llega tu próximo cambio:

- **{ui.stage.scopeFollowing}** (el predeterminado): el cambio se queda en este momento y en los siguientes, hasta que un momento lo vuelva a cambiar. Como en un escenario.
- **{ui.stage.scopeOnlyHere}**: el cambio se aplica solo a este momento. Los momentos siguientes mantienen lo que mostraban antes.

La primera vez que un cambio llega a otros momentos, un breve mensaje te lo dice. Los momentos a los que llegó parpadean un instante. El cambio completo es **un solo paso** para Deshacer, aunque llegue a muchos momentos.

## Mira quién está en escena

### La barra «En escena»

Encima de la pantalla del juego, la barra **{ui.stage.castTitle}** muestra una imagen redonda por cada personaje que está en escena en algún momento de la escena, en el orden en que llegan. Una imagen iluminada significa que el personaje está en escena **en este momento**. Haz clic en una imagen para sacar al personaje de escena o hacerlo entrar, según el interruptor de encima. La barra solo aparece cuando la escena tiene al menos un personaje.

### El gráfico bajo las miniaturas

Bajo la línea de tiempo, una fila muestra el **{ui.timeline.chartBackground}** y hay una fila por personaje. Una barra cubre los momentos en que la cosa está en pantalla. Una barra nueva empieza donde cambia el aspecto: otra expresión, otra posición o tamaño, una imagen volteada u otra imagen de fondo. Pasa el puntero por una barra para leer, por ejemplo, «Mia se queda en escena hasta el momento 7», «… hasta el final de la escena» o «… está en escena solo en este momento».

El gráfico muestra hasta 5 filas y se desplaza si hay más (menos en una ventana pequeña).

![Bajo las tarjetas de la línea de tiempo, el gráfico muestra una barra por cada personaje, tan larga como el tiempo que está en escena.](/novelworks-docs/screenshots/stage-chart.png)

### Pequeñas etiquetas en cada momento

Bajo cada tarjeta de momento, unas pequeñas etiquetas enumeran lo que ese momento cambia: el fondo, un personaje que llega, se va, cambia de expresión o se coloca de otra forma, o un cambio en el orden de dibujo. Se muestran como máximo cuatro, y luego «+N».

### En el inspector

Con un momento seleccionado, la sección **{ui.momentInspector.onStage}** muestra una tarjeta por personaje, con una insignia:

- **{ui.momentInspector.originNew}**: llegan en este momento.
- **{ui.momentInspector.originChanged}**: este momento los cambia.
- «Desde el momento N»: vienen de un momento anterior.

Cada tarjeta tiene un botón para volver a **como estaba** antes de que este momento lo cambiara. Un personaje que se va en este momento aparece con **{ui.momentInspector.bringBack}**. **{ui.momentInspector.add}** pone a alguien en escena.

## Clic derecho sobre un personaje

Haz clic derecho sobre un personaje en la pantalla del juego para ver estas entradas:

- **{ui.contextMenus.expression}** y **{ui.contextMenus.position}**.
- **{ui.contextMenus.flipHorizontally}**, **{ui.contextMenus.resetSize}**, **{ui.contextMenus.bringForward}**, **{ui.contextMenus.sendBackward}**.
- **{ui.contextMenus.stayUntil}**: elige «Hasta el momento N» (uno de los momentos siguientes) o **{ui.contextMenus.untilEnd}**. El personaje mantiene su aspecto actual hasta entonces, incluso a través de momentos que antes lo cambiaban.
- **{ui.contextMenus.onlyThisMoment}**: lo que cambió este momento no continúa. Aparece en gris si este momento no cambia nada para el personaje, o si es el último momento.
- **{ui.contextMenus.backToBefore}**: deshace el cambio de este momento para este personaje.
- **{ui.contextMenus.leavesHere}**: el personaje se va desde este momento en adelante, diga lo que diga el interruptor.

## Empezar una escena como terminó otra

Cuando otras escenas llevan a una escena, y la pantalla al final de la escena anterior es distinta de cómo empieza esta, aparece un aviso en el **primer momento** de esta escena: «Esta escena empieza vacía.» o «Esta escena empieza con: Mia, Leo.» Por cada escena que lleva aquí, un botón **Empezar como el final de «…»** pone en escena lo que había en pantalla en el momento que lleva aquí. Los momentos siguientes lo siguen, y es un solo paso para Deshacer.

## Qué pasa cuando borras, mueves, copias o insertas un momento

NovelWorks hace que todos los demás momentos sigan viéndose igual:

- **Borrar un momento**: lo que cambiaba pasa al momento siguiente, así que todos los momentos restantes muestran exactamente lo que mostraban antes.
- **Insertar un momento** (o pulsar **Intro**): el momento nuevo no tiene ningún cambio, así que muestra la pantalla del momento anterior.
- **Duplicar un momento**: la copia va justo después del original y muestra la misma pantalla.
- **Mover un momento**: se lleva sus propios cambios. Si Mia llega en ese momento y lo mueves al final, Mia llega ahora allí, y los momentos que se quedan atrás ya no la muestran.
- **Borrar un personaje o un fondo de la biblioteca**: desaparece de todas partes, y no cambia nada más.

## Conviene saber

- En el modo Guion se aplican las mismas reglas: el texto que no cambiaste no cambia nada.
- La pantalla de cada momento se reconstruye a partir de los cambios, así que las miniaturas, el historial y las partidas guardadas de los jugadores muestran la pantalla correcta.
