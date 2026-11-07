---
title: "Modo Guion: lo básico"
description: Escribe una escena entera como texto, igual que un guion de cine, y mira cómo se actualiza mientras escribes.
---

El **modo Guion** muestra una escena como texto, en lugar de una pantalla de juego y una línea de tiempo. Escribes una línea por cada cosa que ocurre, como en un guion de cine, y la escena se actualiza mientras escribes. Las dos vistas editan la misma historia: puedes cambiar de una a otra en cualquier momento.

```
Mia : Hello!
Mia (surprised) : You came back.
background : Station
? What now?
- Talk to her -> Park
- Leave
```

## Cambiar al modo Guion

Sobre la pantalla del juego, el interruptor **{ui.topBar.storyView}** tiene dos botones: **{ui.topBar.visual}** (la pantalla del juego y la línea de tiempo) y **{ui.topBar.script}** (la escena como texto). El mismo interruptor está en la vista Guion, así que puedes volver.

![Modo Guion: la escena como texto a la izquierda, el momento bajo el cursor a la derecha.](/novelworks-docs/screenshots/script-mode.png)

## Qué muestra el texto

La barra de herramientas de Guion tiene un interruptor **{ui.scriptMode.scope}**:

- **El nombre de la escena**: solo la escena seleccionada.
- **{ui.scriptMode.wholeGame}**: todas las escenas del juego en un solo texto, cada una bajo un título `# Name`. Puedes renombrar una escena desde su título, añadir una escena con un título nuevo y mover líneas entre escenas. Una escena cuyo título borras se conserva y se mueve después de las demás. La escena oculta propia del Mapa no se incluye.

Un título `# heading` en la vista de una sola escena se ignora y se marca.

## La vista previa

El lado derecho muestra el **momento bajo el cursor**, tal como se ve en el juego («Momento 3 de 12»). Al mover el cursor se selecciona ese momento, y al seleccionar un momento en otro sitio el cursor se mueve a su línea. Una línea que continúa la de arriba pertenece al mismo momento. Puedes cambiar el ancho de la columna de vista previa arrastrando su borde; haz doble clic en el borde para restablecerlo.

Sobre la vista previa, la fila **{ui.branches.whereTitle}** muestra adónde lleva el momento seleccionado, igual que en la vista Visual (consulta [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/)). Un botón la oculta.

## Edición

- El texto se aplica a tu proyecto **medio segundo después de que dejes de escribir**, y cuando cambias de alcance, juegas o sales del modo Guion.
- Una ráfaga de escritura es **un solo paso de deshacer**. Una pausa de alrededor de un segundo empieza un paso nuevo.
- Un momento cuyo texto no cambiaste **se conserva como estaba**, con su nota, su posición en el mapa de la historia, sus líneas leídas y las partidas guardadas de los jugadores. Las cosas que el texto no puede expresar (colocación libre, tamaño, volteo, orden de los personajes, zonas de exploración y objetos decorativos) también se conservan, y un momento cuya pantalla no cambió la conserva exactamente.
- Si cambias el proyecto en otro sitio (el inspector, la línea de tiempo, deshacer), el texto se actualiza sin mover tu cursor. Si estás escribiendo en ese momento, gana tu texto.
- Los nombres que aún no existen nunca bloquean nada. El momento se crea de todos modos y la línea se subraya.

## Ayuda mientras escribes

- Escribe `/` al principio de una línea para elegir un comando de una lista. Los nombres de personajes, imágenes, escenas, variables y objetos se sugieren mientras escribes, y después de `background :`, `show :`, `hide :`, `give`, `remove`, `->`, `+`, `=` y `if` la lista contiene el tipo de nombre que corresponde.
- **Tab** sangra y **Mayús+Tab** quita la sangría.
- Los nombres de los personajes se colorean con el color de nombre del personaje.
- El botón **?** (**{ui.scriptMode.help}**) abre un panel «{tx.script.help.title}» con el formato.

## Nombres que aún no existen

Un nombre desconocido se subraya, y una corrección rápida ofrece crearlo con un clic:

- el botón **{ui.scriptMode.createMissing_other}** de la barra de herramientas crea todos los personajes, expresiones, escenas, variables y objetos que faltan y se nombran en el texto (**Cmd+.** / **Ctrl+.**);
- en una línea, la corrección ofrece crear solo ese.

Una expresión creada aún no tiene imagen. Una variable se crea como Hecho cuando la línea la compara o la pone en verdadero o falso, y si no, como Puntuación. Un objeto es acumulable cuando la línea tiene una cantidad como `x3`.

## Jugar desde el cursor

**{ui.scriptMode.playFromCursor}** juega desde la línea que está bajo el cursor (**Cmd+Intro** / **Ctrl+Intro**).

## Advertencias en el modo Guion

Una línea que NovelWorks quiere que revises recibe un subrayado amarillo. Apunta a ella para leer por qué. El número de líneas por revisar se muestra bajo la vista previa.

| Mensaje | Cuándo |
|---|---|
| Ningún personaje se llama «…» | Una línea `Name : text` cuyo nombre no es un personaje. Por ahora la línea se lee como narración. Soluciones: crear el personaje, o «Es el narrador». |
| Ninguna expresión se llama «…» | Una expresión que el personaje no tiene. Solución: crearla. |
| Ninguna imagen se llama «…» | Un `background :` que no coincide con ninguna imagen. Impórtala o revisa el nombre. |
| Ninguna escena se llama «…» | Un destino de `->`, una opción o una condición que nombra una escena inexistente. Solución: crearla. |
| Ninguna variable / ningún objeto se llama «…» | Solución: crearlo. |
| Esta línea bajo una opción no es un efecto | Una línea con sangría bajo una opción que no es `+`, `=`, `give` ni `remove`. Se ignora. |
| No se pudo leer esta condición | Una línea `if` con una prueba que no se entiende. |
| En una misma condición usa «{tx.conditionCases.and}» o «o» | Los dos en la misma condición: solo se usa el primer tipo. |
| Esta línea cambia la escena, pero no hay ninguna línea después | Un `background`, `show` o `hide` sin ninguna línea después. |
| Esta nota no tiene una línea a la que pertenecer | Una nota `//` al final sin nada después. |
| «…» no está en escena aquí | Un `hide :` para un personaje que no está en escena. |
| «…» es una palabra reservada | Un personaje que se llama como un comando. Cambia el nombre del personaje o escribe el comando entre corchetes. |
| Un título # solo funciona en el documento de todo el juego | Un título en la vista de una sola escena. Se ignora. |

## Siguiente

- [Modo Guion: todas las líneas](/novelworks-docs/es/writing/script-mode-lines/)
- [Modo Guion: condiciones y elecciones](/novelworks-docs/es/writing/script-mode-conditions/)
- [Importar y exportar un guion](/novelworks-docs/es/writing/import-a-script/)
