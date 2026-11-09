---
title: Ambiente y fondos animados
description: Tiñe toda una escena con un clic, y usa GIF o vídeos en bucle como fondos.
---

## Ambiente

Un ambiente es un tono de color sobre toda la imagen, para crear un clima o indicar la hora del día. Selecciona un momento y abre la pestaña **{ui.inspectorTabs.image}** del [panel del momento](/novelworks-docs/es/writing/moment-panel/).

La sección **{ui.ambience.title}** tiene una casilla por aspecto, y cada una muestra tu propio fondo:

- **{ui.ambience.none}**
- **{ui.ambience.night}**
- **{ui.ambience.sunset}**
- **{ui.ambience.sepia}**
- **{ui.ambience.blackAndWhite}**
- **{ui.ambience.memory}**

Cuando eliges un aspecto, aparecen dos ajustes:

- **{ui.ambience.intensity}**, de 0 a 100 %. Empieza en 100 %.
- **{ui.ambience.characters}**, marcado al principio. Desmárcalo para teñir solo el decorado.

### Cuánto dura

Un ambiente se mantiene de un momento al siguiente, como el fondo, hasta que un momento lo cambia. **{ui.stage.scopeLabel}** funciona como siempre, así que puedes usar **{ui.stage.scopeOnlyHere}** para un solo momento. Consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).

El modo Guion no puede escribir un ambiente. Conserva el ambiente de tus momentos cuando editas el texto, y un momento nuevo continúa el anterior.

## Fondos animados

### GIF y WebP animado

Se importan como cualquier otra imagen.

### Vídeos MP4 y WebM

Un vídeo puede ser el fondo de un momento. Se repite en bucle, sin sonido. Puedes importar uno:

- desde el selector de fondos de un momento;
- con **{ui.assetsTab.import}** en la pestaña **{ui.leftPanel.assets}**;
- soltando el archivo en la ventana del editor.

Un vídeo es de tipo **{ui.assetTypes.background}** o **{ui.assetTypes.cG}**. En las listas lo marca un pequeño signo de reproducción, y se reproduce mientras el ratón está encima.

En el editor, el vídeo se queda en su primera imagen. En **{ui.topBar.play}** y en tu juego exportado, se reproduce en bucle y se detiene mientras el menú de pausa está abierto.

### Tamaño

Un vídeo nunca se rechaza por su tamaño. Por encima de 40 MB en una importación, un mensaje te recuerda que un juego web con vídeo tarda más en cargar. Los vídeos no se vuelven a comprimir en el .zip exportado.

## Límites

- Un vídeo solo puede ser el fondo de un momento. Los personajes, los objetos y las pantallas del propio juego necesitan una imagen.
- Una imagen de más de 50 MB, incluidos los GIF, se rechaza.
