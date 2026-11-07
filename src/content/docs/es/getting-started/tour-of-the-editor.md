---
title: Visita guiada por el editor
description: Las zonas de la ventana de NovelWorks y qué hace cada control.
---

El editor tiene una **barra superior** y, en el modo {ui.topBar.story}, tres zonas más: el **panel izquierdo**, el centro y la parte de abajo, además del **inspector** a la derecha.

![El editor de NovelWorks: la lista de escenas a la izquierda, la pantalla del juego en el centro, la línea de tiempo y el gráfico de quién está en escena abajo, y el inspector a la derecha.](/novelworks-docs/screenshots/editor-overview.png)

## La barra superior

De izquierda a derecha:

- **La flecha atrás** vuelve a la [pantalla de proyectos](/novelworks-docs/es/getting-started/projects-screen/). Si tienes cambios sin guardar, pregunta antes si quieres guardarlos.
- **El título del proyecto** (o «Proyecto sin título»). Haz clic para mostrar los ajustes del proyecto en el inspector (consulta [Ajustes del editor y del proyecto](/novelworks-docs/es/getting-started/editor-settings/)).
- **El indicador de guardado**: {ui.topBar.unsavedChanges}, {ui.topBar.savedAuto} o {ui.topBar.saved}.
- **Tres modos**:
  - **{ui.topBar.story}**: escenas, momentos y personajes. Aquí es donde escribes.
  - **{ui.topBar.storyMap}**: todas las escenas de tu juego y cómo las unen las elecciones, las condiciones y los saltos.
  - **{ui.topBar.gameUI}**: el aspecto de tu juego (pantalla de título, cuadro de diálogo, menús).
- Las flechas **{ui.topBar.undo}** y **{ui.topBar.redo}**.
- **{ui.topBar.save}**.
- **{ui.topBar.playFromHere}** juega desde el momento seleccionado. En el espacio de trabajo del mapa pasa a ser **{ui.topBar.testMap}**.
- **{ui.topBar.play}** juega desde la pantalla de título.

En una ventana estrecha, los nombres de los modos y la etiqueta «{tx.leftPanel.playFromHere}» se reducen a iconos.

## El panel izquierdo

Pestañas:

- **{ui.leftPanel.scenes}**: tus escenas. Arrastra para reordenarlas; la estrella marca la escena inicial.
- **{ui.leftPanel.assets}**: tus imágenes, con un botón **{ui.assetsTab.import}** y filtros por tipo.
- **{ui.leftPanel.characters}**: tus personajes y cuántas expresiones tiene cada uno.
- **{ui.leftPanel.variables}**: lo que recuerda tu juego.
- **{ui.leftPanel.items}**: solo cuando la función Inventario está activada.

Abajo: **{ui.leftPanel.map}** (solo cuando la función Mapa está activada), **{ui.leftPanel.features}** (abre la lista de las partes opcionales de tu juego) y un consejo que cambia cada 30 segundos. Mientras buscas (**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**), el panel de búsqueda sustituye a las pestañas.

Puedes arrastrar el borde entre paneles para cambiar su tamaño; haz doble clic en el borde para volver al ancho por defecto. Tus anchos se recuerdan en este ordenador.

## El centro: la pantalla del juego

El juego tal como lo verán los jugadores, escalado para encajar. Encima puedes elegir el fondo del momento, añadir personajes y cambiar entre dos cosas:

- **{ui.topBar.visual}** y **{ui.topBar.script}**: muestran la escena como la pantalla del juego con una línea de tiempo, o como texto que puedes escribir como un guion de cine.
- **{ui.stage.scopeLabel}**: **{ui.stage.scopeFollowing}** o **{ui.stage.scopeOnlyHere}**. Se explica en [El escenario](/novelworks-docs/es/concepts/stage/).

Encima de la pantalla, una fila de botones pequeños muestra adónde lleva el momento seleccionado (consulta [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/)).

En una ventana baja (de menos de unos 780 píxeles de alto), las filas de encima de la pantalla del juego se quedan cada una en una sola línea que se desplaza hacia los lados, y el recordatorio de teclas bajo la pantalla del juego se oculta, para dejar sitio a la pantalla del juego.

## Abajo: la línea de tiempo

Los momentos de la escena actual, como tarjetas que puedes reordenar. Unos botones añaden un momento de cada tipo después del seleccionado, y dos iconos duplican o borran el momento seleccionado. Bajo las tarjetas, un gráfico muestra quién está en escena y una fila muestra dónde se ramifica la historia. Consulta [Escenas, momentos y la línea de tiempo](/novelworks-docs/es/concepts/scenes-moments-timeline/).

## La derecha: el inspector

Las propiedades de lo que seleccionaste: un momento, una escena, una imagen, un personaje, una variable, un objeto, un personaje en escena. Su título cambia con la selección. Si no hay nada seleccionado, muestra los **{ui.inspector.projectSettings}**.

## Los menús

En un Mac, el menú de la app contiene Acerca de, Servicios, Ocultar y Salir; en Windows, Salir está en el menú Archivo.

- **{ui.native.menu.file}**: Nuevo proyecto…, Abrir proyecto…, Guardar, Restaurar desde copia de seguridad…, Importar guion…, Exportar el guion…, {ui.native.menu.exportForWeb}, Cerrar proyecto.
- **{ui.native.menu.edit}**: Deshacer, Rehacer, Buscar y reemplazar…, Cortar, Copiar, Pegar, Seleccionar todo, Idioma de ortografía.
- **{ui.menu.view}**: Tema, Idioma, Pantalla completa.
- **{ui.native.role.window}**.
- **{ui.native.role.help}**: Documentación, Repetir el tutorial, Atajos de teclado, Activar NovelWorks… (solo versión completa), Informar de un error… y, en Windows, Acerca de.

Encontrarás una lista completa de atajos en [Atajos de teclado](/novelworks-docs/es/reference/keyboard-shortcuts/).
