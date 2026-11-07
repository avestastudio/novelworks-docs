---
title: Exportación web
description: Convierte tu juego en una carpeta y un .zip que funcionan en cualquier navegador, en ordenadores y móviles.
---

Elige **{ui.native.menu.file} → {ui.native.menu.exportForWeb}** (**Cmd+E** / **Ctrl+E**). NovelWorks crea una versión de tu juego que funciona en cualquier navegador web, en ordenadores y móviles: **una carpeta y un .zip** listos para compartir o subir. El comando necesita un proyecto abierto y no está disponible mientras juegas.

En la **demo**, la exportación se limita a juegos de 5 escenas o menos: mira [La demo gratuita](/novelworks-docs/es/getting-started/demo-edition/). En la versión completa, NovelWorks te pide [activarla](/novelworks-docs/es/getting-started/install-and-activate/) cada vez que exportas, hasta que lo hagas.

## Los pasos

1. **Revisa los avisos.** Si NovelWorks encuentra algo que revisar, lo enumera: «N cosas que revisar antes. El juego funciona igualmente, pero los jugadores podrían notarlo.» Cada línea dice dónde («Parque, momento 3 — …»). El botón pasa entonces a decir **{ui.exportDialog.exportAnyway}**. Mira [Problemas](/novelworks-docs/es/testing/problems/).
2. **Elige dónde guardar.** **{ui.exportDialog.saveTo}** muestra una carpeta. NovelWorks recuerda la última carpeta que usaste para este proyecto y, si no, propone la carpeta que contiene tu proyecto. **{ui.exportDialog.change}** elige otra carpeta.
3. Haz clic en **{ui.exportDialog.export}**. El botón dice «{tx.exportDialog.exporting}» hasta que termina.
4. Cuando dice «{tx.exportDialog.yourWebGameIsReady}», muestra el nombre del .zip (para compartir o subir; la carpeta que hay junto a él contiene el mismo juego sin comprimir) y tres botones:
   - **{ui.exportDialog.showInFinder}**, que muestra el archivo en tu gestor de archivos (su nombre dice «Finder» en todos los ordenadores);
   - **{ui.exportDialog.testInBrowser}**, que abre el juego exportado desde una dirección local en tu navegador predeterminado;
   - **{ui.exportDialog.done}**.

![La ventana que aparece cuando la exportación ha terminado.](/novelworks-docs/screenshots/export-done.png)

Si no se encontraron algunas imágenes en la carpeta de recursos de tu proyecto, la ventana las enumera («No se encontraron N imágenes… y no se pudieron incluir»). La exportación se completa igualmente.

La ventana también te indica el **tamaño de juego recomendado** (la resolución de tu proyecto), y te recuerda comprobar el juego en navegadores de escritorio y de móvil.

## Qué obtienes

NovelWorks crea, dentro de la carpeta que elegiste:

- una carpeta con el nombre de tu juego, terminada en `-web` (por ejemplo `The-Rainy-Day-web`), y un `.zip` con el mismo nombre. Se quitan los acentos y cualquier otro carácter se sustituye por `-`. Un título sin letras latinas ni dígitos (en chino, ruso o japonés, por ejemplo) pasa a ser `Game-web`;
- dentro: `index.html`, `project.js` (los datos de tu juego), `game.js` (el reproductor), una carpeta `assets` con **solo las imágenes que usa tu juego**, y una carpeta `fonts` con las fuentes y sus archivos de licencia.

Las imágenes se copian tal cual, sin cambiar su tamaño ni convertirlas. Todas las expresiones y avatares de un personaje se incluyen cuando el personaje aparece o habla.

Si ya existe una carpeta de exportación con el mismo nombre y es una exportación anterior, se reemplaza. Si es otra cosa, NovelWorks se niega y te pide elegir otra carpeta, así que nunca sobrescribe tus archivos.

### Qué se quita

Tus datos privados de escritura se vacían antes de exportar: las **notas** de los momentos, los **resúmenes** de las escenas y el **estado de escritura**, las posiciones de las escenas en el mapa de la historia y los nombres de las zonas de exploración. Tu historia, tus personajes y tus variables se conservan, claro, **en forma clara y legible** en `project.js`: cualquiera que abra los archivos puede leer todo tu texto y tus ramas.

## Ábrelo

- **En tu ordenador**: haz doble clic en `index.html`. Funciona sin servidor web.
- **En la web**: sube **todos los archivos**, con `index.html` en la raíz. Si falta `project.js`, la página dice «{tx.player.missingProject}»

## Qué reciben tus jugadores

- Primero, una breve **pantalla de NovelWorks**: el logotipo y «{tx.splash.tagline}», unos 3 segundos, que se puede saltar. (El editor la llama la pantalla «Hecho con NovelWorks».)
- El título de la página es el título de tu juego, y la página está en el idioma de tu juego. El icono de la página es la primera letra del título sobre tu color principal.
- Un juego que se escala a la ventana, manteniendo su proporción, con barras negras alrededor, en ordenadores y móviles. Un botón de **{rt.player.fullscreen}** donde el navegador lo permite, y un botón **{ui.gameUIInspector.menu}** en las pantallas táctiles. Mira [Teclas y pantallas táctiles](/novelworks-docs/es/player/keys-and-touch/).
- Partidas guardadas en su navegador, que se conservan cuando actualizas el juego. Mira [Guardar y cargar](/novelworks-docs/es/player/save-and-load/).
- Necesita JavaScript. Sin él, la página dice «{tx.export.javascriptRequired}»

## Si la exportación falla

| Mensaje | Qué hacer |
|---|---|
| NovelWorks no tiene permiso para guardar en esta carpeta. | Elige otra carpeta, como Documentos o Escritorio. |
| El disco está lleno. | Libera espacio, o elige una carpeta en otro disco. |
| Esta carpeta ya no existe. | Elige otra carpeta. |
| Ya hay una carpeta llamada «…» y no es una exportación anterior. | Elige otra carpeta. |
| Activa NovelWorks para exportar juegos. | Abre **{ui.native.role.help} → Activar NovelWorks…** |
| La demo exporta juegos de hasta 5 escenas, y tu proyecto tiene N. | Solo en la demo. Borra escenas, o consigue la versión completa. |
| No se pudo exportar el juego: … | Sigue el motivo. Mira [Solución de problemas](/novelworks-docs/es/reference/troubleshooting/). |

## Publicar

Para poner tu juego en línea, mira [Publicar en itch.io](/novelworks-docs/es/publish/itch-io/), o usa cualquier alojamiento web que sirva juegos HTML.
