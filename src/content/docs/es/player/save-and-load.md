---
title: Guardar y cargar
description: Cómo guardan y cargan los jugadores, dónde se conservan las partidas y qué pasa cuando actualizas tu juego.
---

Esta página describe lo que viven los **jugadores**. Para el aspecto de las pantallas, consulta [Pantalla de guardar y cargar](/novelworks-docs/es/game-ui/save-load-screen/).

## Dónde se conservan las partidas

Las partidas se conservan **en el navegador del jugador** (su almacenamiento local), solo para tu juego. Cada proyecto tiene un identificador de juego que se crea con él y que nunca cambia. Forma parte del nombre de cada partida, así que:

- dos juegos distintos nunca comparten partidas, ni siquiera en el mismo sitio web;
- si exportas el mismo juego otra vez, o lo actualizas, **los jugadores conservan sus partidas**, siempre que el juego siga en la **misma dirección web**;
- las partidas pertenecen a un navegador, en una dirección web, en un ordenador: no siguen al jugador a otro navegador o dispositivo, ni a una dirección nueva (un nuevo servidor o dominio).

Las partidas hechas mientras pruebas en el editor son aparte (consulta [Herramientas del modo Jugar](/novelworks-docs/es/testing/test-saves-and-read-lines/)).

## Ranuras

- **12 ranuras manuales**, un **guardado rápido** y un **autoguardado**.
- La pantalla **{rt.game.save}** muestra las ranuras 1 a 12. La pantalla **{rt.game.load}** muestra primero el Autoguardado y el Guardado rápido, y luego las ranuras 1 a 12.
- Cada ranura muestra una imagen del momento, el nombre de la escena, la fecha y el tiempo de juego («12:34» o «1:02:03»).
- Guardar sobre una ranura usada pregunta «¿Sobrescribir …?». Eliminar una ranura pregunta «¿Eliminar …? No se puede deshacer.»

## Guardado rápido y carga rápida

- **F5** hace un guardado rápido mientras juegas («{tx.game.quickSaved}»): no recarga la página.
- **F9** hace una carga rápida, incluso desde la pantalla de título. Si no hay guardado rápido, el juego dice «{tx.game.noQuickSaveYetPressF5To}» Cargar mientras se juega pregunta «{tx.game.loadThisSaveUnsavedProgressWillBe}»
- Las mismas acciones son botones del menú de pausa y, si los muestras, del menú rápido.

## Autoguardado

El juego se autoguarda cada vez que el jugador **entra en una escena distinta**, cuando empieza una partida nueva, y cuando se carga una partida desde la pantalla de título o en otra escena. No se autoguarda dentro de una escena. Un autoguardado fallido es silencioso.

## Continuar

En la pantalla de título, **{rt.game.continue}** carga la partida más reciente de cualquier tipo (manual, rápida o automática). No aparece cuando no hay ninguna partida guardada.

## Qué contiene una partida guardada

La escena y el momento, los valores de las variables, el inventario, las zonas ya usadas, el estado del mapa, el tiempo de juego, la música y el sonido ambiente que suenan, y las últimas 200 líneas del [Historial](/novelworks-docs/es/player/history/). **No** contiene qué líneas se han leído (eso se guarda aparte para Saltar), los [capítulos](/novelworks-docs/es/game-ui/chapters/) alcanzados (también se guardan aparte) ni el texto que se estaba escribiendo: una línea cargada aparece entera. Un momento cargado empieza en su último plano de cámara, y sus efectos, su voz y sus efectos de sonido no se reproducen.

## Cuando actualizas tu juego

Las partidas apuntan a escenas y momentos por su identidad, así que siguen funcionando cuando editas texto, añades escenas o reordenas cosas.

- Una variable que ya no existe, o cuyo tipo cambió (de Puntuación a Hecho), pierde su valor guardado. Las variables nuevas empiezan con su valor inicial.
- Un objeto que ya no existe se descarta.
- Si se eliminó el **momento** guardado, el juego se reanuda al comienzo de su escena. Si se eliminó la **escena**, se reanuda al comienzo de la escena inicial.
- Una partida dañada, o de una versión más reciente de NovelWorks, aparece como una ranura vacía.

## Cuando el navegador no permite guardar

En la navegación privada, o con los datos de sitios desactivados, el navegador puede bloquear el almacenamiento. Entonces la pantalla de guardar dice «{tx.savesScreen.savingIsNotAvailableInThisBrowser}», y la pantalla de cargar dice que no hay nada que cargar. Un guardado rápido explica que «Puedes seguir jugando, pero tu progreso no se conservará.» Si el almacenamiento está lleno: «El guardado no se pudo escribir: el almacenamiento del navegador está lleno. Elimina una partida antigua e inténtalo de nuevo.»

Entonces las opciones de los jugadores y las líneas leídas solo duran la sesión.
