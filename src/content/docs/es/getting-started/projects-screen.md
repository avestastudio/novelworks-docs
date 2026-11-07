---
title: La pantalla de proyectos y los proyectos nuevos
description: Abre, busca y crea proyectos, y qué contiene la carpeta de un proyecto.
---

La **pantalla de proyectos** es lo primero que ves cuando arranca NovelWorks, y el lugar al que vuelves con la flecha atrás de la barra superior.

## La lista de proyectos

La lista muestra tus **proyectos recientes**, los más nuevos primero, hasta 30. Cada fila muestra:

- una imagen: la última pantalla de juego guardada, o el primer fondo, o el logotipo de NovelWorks si el proyecto aún no tiene imágenes;
- el nombre del proyecto y la carpeta en la que está;
- cuándo lo abriste por última vez.

Haz clic en una fila para abrir el proyecto.

Encima de la lista:

- **{ui.projectHub.open}** abre una carpeta de proyecto de tu ordenador. El atajo es **Cmd+O** en Mac y **Ctrl+O** en Windows.
- **{ui.projectHub.newProject}** empieza un proyecto nuevo (**Cmd+N** / **Ctrl+N**).
- El cuadro de búsqueda (**{ui.projectHub.searchProjects}**) filtra por nombre o carpeta. **Esc** lo borra y la flecha abajo salta al primer resultado.

El botón **…** de una fila (o un clic derecho sobre ella) abre un menú:

- **{ui.projectHub.open_ed077f}**;
- **{ui.projectHub.showInFinder}** en Mac, **{ui.projectHub.showInExplorer}** en Windows;
- **{ui.projectHub.removeFromList}**: quita el proyecto solo de esta lista.

Si moviste o borraste la carpeta de un proyecto, su fila se pone gris y dice **{ui.projectHub.folderNotFound}**. Haz clic en **{ui.projectHub.locate}** y elige el nuevo lugar de la carpeta.

En el lado izquierdo de la pantalla también están **{ui.projectHub.reportABug}**, el número de versión y, en la versión completa antes de activarla, **{ui.projectHub.activateNovelWorks}**.

## Crea un proyecto nuevo

Haz clic en **{ui.projectHub.newProject}**.

1. Escribe el **{ui.newProjectScreen.projectName}**. NovelWorks quita los caracteres que un nombre de carpeta no puede contener (`/ \ : * ? " < > |`) y te avisa si el nombre está vacío o ya existe.
2. Comprueba la **{ui.newProjectScreen.location}**. Empieza en el último lugar que usaste, o en Documentos → NovelWorks. Haz clic en **{ui.newProjectScreen.browse}** para elegir otro lugar. La línea **{ui.newProjectScreen.willBeCreatedIn}** muestra la carpeta final.
3. Si quieres, marca las **{ui.newProjectScreen.features}** que necesita tu juego: **{ui.shared.features.inventory}** y **{ui.shared.features.map}**. Todas están desactivadas por defecto y puedes activarlas o desactivarlas más tarde sin perder nada.
4. Haz clic en **{ui.newProjectScreen.createProject}** (o pulsa **Intro**). **Esc** cancela.

NovelWorks crea la carpeta, con un archivo `project.json` y una carpeta `assets` vacía, y abre el proyecto con una escena, «{tx.shared.project.firstScene}», que contiene una línea de diálogo vacía. Una carpeta `backups` aparece la primera vez que se hace una copia de seguridad.

## Qué hay en la carpeta de un proyecto

- `project.json`: toda tu historia, en un solo archivo.
- `assets`: las imágenes que importaste.
- `backups`: versiones anteriores de `project.json` (consulta [Guardar, copias de seguridad y deshacer](/novelworks-docs/es/getting-started/saving-and-undo/)).

Para copiar un proyecto a otro ordenador, copia la carpeta entera. Después puedes abrirlo con **{ui.projectHub.open}**.

## Proyectos más antiguos y más nuevos

- Un proyecto hecho con una versión **anterior** de NovelWorks se abre con normalidad. Antes de actualizarlo, NovelWorks guarda en `backups` una copia exacta del original y muestra una barra con **{ui.store.showCopy}**. No se cambia nada en el disco hasta que guardes.
- Un proyecto guardado con una versión **más nueva** de NovelWorks no se puede abrir. Actualiza primero NovelWorks.
