---
title: Jugar, Jugar desde aquí, Probar el mapa
description: Prueba tu juego en el editor, desde el principio o desde cualquier momento, sin guardar ni exportar.
---

Puedes jugar tu juego en cualquier momento, dentro del editor. Se juega **lo que hay ahora mismo en el editor**, guardado o no, con el mismo motor que un juego exportado. Mientras juegas, la edición está bloqueada.

## Formas de empezar

| Cómo | Dónde empieza |
|---|---|
| **{ui.topBar.play}** (barra superior, **Cmd+P** / **Ctrl+P**) | La pantalla de título. |
| **{ui.topBar.playFromHere}** (barra superior, **Cmd+Shift+P** / **Ctrl+Shift+P**) | El momento seleccionado, sin pantalla de título. Está desactivado hasta que hay un momento seleccionado. |
| **{ui.contextMenus.playFromHere}** en el menú del clic derecho de un momento o de una escena | Ese momento, o el primer momento de esa escena. |
| **{ui.scriptMode.playFromCursor}** en el [modo Guion](/novelworks-docs/es/writing/script-mode/) (**Cmd+Enter** / **Ctrl+Enter**) | La línea bajo el cursor. |
| **{ui.topBar.testMap}** en el espacio de trabajo Mapa (y en los ajustes del mapa) | El mapa. En el espacio de trabajo Mapa, el botón **{ui.topBar.playFromHere}** y **Cmd+Shift+P** / **Ctrl+Shift+P** pasan a ser «Probar mapa». Mira [Mapa](/novelworks-docs/es/features/map/). |

Cada partida empieza con los valores iniciales de tus variables y objetos: no se arrastra nada de una prueba anterior.

Si tu juego no tiene escena inicial, o la escena inicial no tiene momentos, «Jugar» no se inicia y te dice qué hacer: define una escena inicial con la estrella en la pestaña Escenas.

## Mientras juegas

Una barra en la parte de arriba muestra dónde estás («La clase · Momento 2 de 5», con «Elección», «{tx.moments.ending}» o «{tx.game.paused}» añadido cuando corresponde, o «{tx.playOverlay.titleScreen}» o «Fin»). También tiene las herramientas descritas en [Herramientas del modo Jugar](/novelworks-docs/es/testing/test-saves-and-read-lines/).

Juegas como un jugador: haz clic o pulsa **Espacio** / **Enter** para avanzar, **1** a **6** para elegir una opción, **A** para Auto, **S** para Saltar, **H** para el Historial, **F5** y **F9** para guardado y carga rápidos. El **clic derecho** abre el menú de pausa del juego. Mira [Teclas y pantallas táctiles](/novelworks-docs/es/player/keys-and-touch/).

## Detener

- Haz clic en **{ui.playOverlay.stop}**, o pulsa **Esc**. Si el menú de pausa, Guardar, Cargar, el Historial, las Opciones, la introducción o la advertencia de contenido están abiertos, **Esc** cierra primero eso. **Esc** no cierra el inventario en el modo Jugar: pulsa **I** para eso.
- Al detener, el editor selecciona la escena y el momento donde estabas.

## Qué no se prueba aquí

El modo Jugar no es el juego exportado: la pantalla «Hecho con NovelWorks» está oculta a menos que la actives, y tus pruebas usan sus propias partidas guardadas, separadas de las de un juego exportado. Para probar el resultado real en un navegador, usa la [Exportación web](/novelworks-docs/es/publish/web-export/) y **{ui.exportDialog.testInBrowser}**.
