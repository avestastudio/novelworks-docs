---
title: Importar y exportar un guion
description: Trae un archivo de texto a tu proyecto como escenas, y guarda todo tu juego como texto.
---

Puedes escribir tu historia en cualquier editor de texto e importarla a NovelWorks, o guardar todo el juego como un archivo de texto. El texto usa el formato del [modo Guion](/novelworks-docs/es/writing/script-mode/).

## Importar un guion

Elige **{ui.native.menu.file} → {ui.native.menu.importScript}**. (No hay atajo de teclado. El menú necesita un proyecto abierto.) Se abre la ventana **{ui.scriptImport.title}**.

1. Pega tu texto en el cuadro, o haz clic en **{ui.scriptImport.openFile}** y elige un archivo `.txt` o `.md`. Solo se lee texto sin formato, no archivos de Word.
2. Haz clic en el botón de abajo:
   - si tu texto tiene líneas `# Heading`, **{ui.scriptImport.importAsScenes}**: cada encabezado se convierte en una escena de tu juego;
   - si no, **{ui.scriptImport.importInto}** la escena seleccionada: las líneas se añaden al final de esa escena.

Primero NovelWorks limpia el texto: las comillas dobles curvas (“ ”) pasan a comillas rectas, y un `•` o un `·` seguido de un espacio al principio de una línea pasa a `-`. Después cambia a la vista Guion y añade tu texto **como si lo hubieras escrito tú**. Se aplica tras la espera habitual de medio segundo.

### Lo que obtienes

- Una línea `Name : text` es diálogo si un personaje tiene ese nombre. Si no, es narración, el nombre aparece subrayado y una corrección rápida crea el personaje.
- Los fondos, escenas, variables y objetos desconocidos también aparecen subrayados. El botón **{ui.scriptMode.createMissing_other}** los crea todos con un clic.
- No hay paso de vista previa ni pregunta sobre quién habla: los hablantes se reconocen con la regla `Name : text` y tus personajes existentes.
- La importación **añade** texto. No reemplaza lo que ya hay.

:::note
Con los `# headings`, **cada encabezado crea una escena nueva**. Si tu juego ya tiene una escena con ese nombre, la nueva se nombra como una escena duplicada: «Name (copia)», luego «Name (copia) 2», y así sucesivamente (al comparar nombres se ignoran los acentos y las mayúsculas). La escena existente nunca cambia. Un encabezado que aparece dos veces en el texto importado se renombra de la misma manera. Un enlace `-> Name` en el texto importado sigue apuntando a la escena original, así que revísalo.
:::

La importación es **un solo paso de deshacer**: una pulsación de **{ui.native.menu.undo}** quita todo lo que añadió, incluso si después sales del modo Guion.

## Exportar el guion

Elige **{ui.native.menu.file} → {ui.native.menu.exportScript}**. NovelWorks te pregunta dónde guardar, con el título **{ui.native.exportIpc.saveTheScript}**, y escribe un archivo `.txt`.

- El archivo contiene **todo el juego**: cada escena bajo un encabezado `# Name`, con una línea en blanco entre escenas. La escena oculta del Mapa no se incluye. No puedes exportar una sola escena.
- Se escribe en UTF-8, con las palabras del idioma actual de tu editor.
- El nombre de archivo por defecto es el título de tu proyecto, con los caracteres que un nombre de archivo no admite sustituidos por `-`.
- Exportar no cambia nada en tu proyecto.

Puedes volver a importar el archivo exportado con **{ui.native.menu.importScript}**.
