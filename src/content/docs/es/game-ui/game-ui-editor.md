---
title: Visión general de la interfaz del juego
description: Cambia el aspecto de tu juego, pantalla por pantalla, con una vista previa en vivo.
---

El modo **{ui.topBar.gameUI}** cambia el aspecto de tu juego: su fuente y sus colores, la pantalla de título, el cuadro de diálogo, los botones de elección, los menús y los mensajes pequeños. Cámbiate a él en la barra superior, o con **Cmd+5** / **Ctrl+5**.

![El modo Interfaz del juego: la lista de pantallas, la vista previa en vivo y los ajustes del cuadro de diálogo.](/novelworks-docs/screenshots/game-ui-dialogue.png)

## Las tres partes de la ventana

- **Izquierda: la lista de pantallas.** Haz clic en una para trabajar en ella.
- **Centro: la vista previa.** Es el juego real, dibujado con tus ajustes, sobre una pequeña muestra (tu primer fondo y tu primer personaje, o un personaje de ejemplo). No es interactiva: pulsa **{ui.topBar.play}** para probar el juego con estos ajustes. Una línea bajo la vista previa lo indica.
- **Derecha: los ajustes de la pantalla.** Todas las pantallas terminan con un botón **{ui.gameUIInspector.resetToDefault}**.

## Las pantallas

| Pantalla | Qué es | Página |
|---|---|---|
| {ui.gameUI.fontsColors} | La fuente y los colores que usan todas las pantallas. | [Fuentes y colores](/novelworks-docs/es/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | El logotipo de tu estudio u otras imágenes, antes de la pantalla de título. | [Introducción](/novelworks-docs/es/game-ui/intro/) |
| {ui.gameUI.contentWarning} | Avisa a los jugadores de temas delicados antes de la pantalla de título. | [Advertencia de contenido](/novelworks-docs/es/game-ui/content-warning/) |
| {ui.gameUI.titleScreen} | La primera pantalla de tu juego. | [Pantalla de título](/novelworks-docs/es/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | Donde aparecen los nombres y las líneas. | [Cuadro de diálogo](/novelworks-docs/es/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | Los botones de una elección. | [Elecciones](/novelworks-docs/es/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | Se abre con clic derecho o con Esc. | [Menú de pausa](/novelworks-docs/es/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | Las pantallas de guardar y de cargar. | [Pantalla de guardar y cargar](/novelworks-docs/es/game-ui/save-load-screen/) |
| {ui.gameUI.history} | La lista de líneas ya leídas. | [Pantalla de historial](/novelworks-docs/es/game-ui/history-screen/) |
| {ui.gameUI.options} | Donde los jugadores eligen el tamaño del texto, la velocidad, la fuente y el contraste. | [Opciones del jugador](/novelworks-docs/es/game-ui/options/) |
| {ui.quickMenu.title} | Controles de lectura sobre la historia. | [Menú rápido](/novelworks-docs/es/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | Se muestra cuando la historia termina. | [Pantalla final](/novelworks-docs/es/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | Su botón y el panel de objetos (función Inventario). | [Pantalla de inventario](/novelworks-docs/es/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | El botón que abre el mapa (función Mapa). | [Botón del mapa](/novelworks-docs/es/game-ui/map-button/) |
| {ui.gameUI.notices} | Mensajes cortos como «Has conseguido: Llave». | [Avisos](/novelworks-docs/es/game-ui/notifications/) |

## Texto largo y avatar

En Fuentes y colores, el Cuadro de diálogo, las Elecciones y el Menú de pausa, el botón **{ui.gameUIMode.longTextAvatar}** que está sobre la vista previa muestra una línea larga y un personaje con avatar, para que compruebes que todo cabe.

## Ajustes que funcionan igual en todas partes

- **Colores.** Una muestra abre un selector de color, y un cuadro admite un código (`#rgb` o `#rrggbb`). Cuando un color dice «Igual que …» (por ejemplo «{tx.gameUIInspector.sameAsTheTextColor}»), no se guarda nada: sigue al otro color. Cuando eliges un color, una pequeña flecha circular a su lado vuelve a «Igual que …».
- **Estilo de botón.** Una lista desplegable con **{ui.gameUIInspector.sameAsFontsColors}**, **{ui.gameUIInspector.pill}**, **{ui.gameUIInspector.rounded}**, **{ui.gameUIInspector.square}** y **{ui.gameUIInspector.text}** (sin caja, solo las palabras). «{tx.gameUIInspector.sameAsFontsColors}» sigue el estilo global.
- **Controles deslizantes.** Muestran su valor con su unidad, normalmente %. Los porcentajes son relativos a la pantalla, así que tu diseño se mantiene en cualquier tamaño.
- **Imágenes.** Un campo de imagen muestra una miniatura con **{ui.gameUIInspector.choose_c7f937}** o **{ui.gameUIInspector.change}**, y una X para quitarla. Normalmente puedes elegir cualquiera de tus imágenes, o importar una nueva en el momento. (El fondo de la pantalla de título solo ofrece fondos, CG e imágenes de interfaz.) Si se elimina una imagen, el juego vuelve al color liso o al texto.
- **{ui.gameUIInspector.resetToDefault}.** El botón al final de una pantalla te pide confirmar y luego devuelve **solo esa pantalla** a como se ve un juego nuevo. Las demás pantallas no cambian.

## Deshacer

Todos los cambios de la Interfaz del juego se pueden deshacer. Escribir, arrastrar un control deslizante o elegir un color en un campo cuenta como un solo paso.

## Qué se guarda

El aspecto se guarda en tu proyecto, junto con el resto. Las elecciones propias de los jugadores (tamaño del texto, fuente adaptada a la dislexia, alto contraste) se aplican sobre tu diseño, solo para ellos. Consulta [Opciones y accesibilidad](/novelworks-docs/es/player/options-and-accessibility/).
