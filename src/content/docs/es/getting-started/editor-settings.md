---
title: Ajustes del editor y del proyecto
description: Tema, idioma y ortografía del editor, y los ajustes de cada proyecto.
---

Hay dos tipos de ajustes: los del **editor** (iguales para todos tus proyectos) y los de un **proyecto**.

## Ajustes del editor

Todos están en los menús **{ui.menu.view}** y **{ui.native.menu.edit}**.

### Tema

**{ui.menu.view} → {ui.native.menu.theme}**: **{ui.native.menu.dark}** (el predeterminado), **{ui.native.menu.light}** o **{ui.native.menu.system}** (sigue a tu ordenador).

### Idioma del editor

**{ui.menu.view} → {ui.native.menu.language}**: **{ui.native.menu.languageAuto}** o uno de los siete idiomas, cada uno escrito con su propio nombre. Los menús y el editor cambian al instante en todas las ventanas abiertas. Este ajuste solo afecta al editor. No cambia tu historia ni el idioma de tu juego.

### Idioma de ortografía (guardado en el proyecto)

Este es la excepción: no lo comparten todos tus proyectos, porque la elección se guarda **en el proyecto** (y puedes deshacerla).

**{ui.native.menu.edit} → {ui.native.spelling.spellingLanguage}**. En Windows, el predeterminado son los idiomas de tu ordenador más inglés, y puedes elegir otro idioma. En un Mac, macOS detecta solo el idioma de tu texto, así que el menú solo lo indica.

### Pantalla completa

**{ui.menu.view} → {ui.native.role.togglefullscreen}**.

## Ajustes del proyecto

Haz clic en el título del proyecto en la barra superior, o no selecciones nada, y el inspector muestra los **{ui.inspector.projectSettings}**:

| Ajuste | Qué hace |
|---|---|
| {ui.projectSettings.gameTitle} | El título de tu juego. |
| {ui.projectSettings.author} | Tu nombre, como autor. |
| {ui.project.gameLanguage} | El idioma de los botones y menús del propio juego. El texto de tu historia queda como lo escribiste. Si un idioma no está disponible para el juego, el juego usa inglés para él. |
| {ui.projectSettings.length} | Cuánto dura leer la historia: cada línea, elección y final leídos una vez (palabras y minutos). Solo se muestra, no se ajusta. Una partida de una historia ramificada es más corta. |
| {ui.projectSettings.features} | Las partes opcionales que están activadas. **{ui.projectSettings.openFeatures}** abre la lista para activarlas o desactivarlas. |
| {ui.projectSettings.screenSize} | El tamaño de la pantalla del juego, 1280 × 720 píxeles. Solo se muestra. |
| {ui.projectSettings.savedIn} | La carpeta del proyecto. |

Todos los cambios de aquí se pueden deshacer con **{ui.native.menu.undo}**.
