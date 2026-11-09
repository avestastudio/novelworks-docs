---
title: Copiar, pegar y duplicar
description: Copia momentos, escenas y personajes, pégalos en otro sitio y duplica con una sola tecla.
---

## Duplicar

**Cmd+D** / **Ctrl+D** duplica lo que está seleccionado, incluso mientras escribes:

- un **momento**: la copia va justo después del original, con una identidad nueva. No cambia nada en pantalla, así que muestra la misma imagen que el original, y su nota se copia;
- una **escena**: la copia va justo después del original y se llama, por ejemplo, «A helping hand (copia)» (mira [Escenas](/novelworks-docs/es/writing/scenes/));
- una **zona** de exploración.

El menú del clic derecho tiene **{ui.contextMenus.duplicate}** para un momento y una escena, y **{ui.contextMenus.duplicateZone}** para una zona. La cabecera de la línea de tiempo tiene un icono de duplicar para el momento seleccionado.

## Copiar, cortar y pegar

**Cmd+C**, **Cmd+X** y **Cmd+V** (**Ctrl** en Windows) copian, cortan y pegan:

| Seleccionado | Copiar y cortar | Pegar |
|---|---|---|
| Un **momento** (o nada) | El momento. Cortar lo quita, sin preguntar, y los momentos siguientes siguen mostrando lo mismo. | Inserta la copia **después del momento seleccionado** de la escena actual, o al final. |
| Una **escena** (en la lista de escenas) | La escena entera. Cortar pide confirmar el borrado. | Añade la copia al final de la lista, seleccionada. |
| Un personaje en la pantalla del juego | El personaje, tal como está colocado en ese momento: expresión, lugar, tamaño, dirección. Cortar lo saca de escena. | Pone al personaje en la escena del momento seleccionado con el aspecto copiado. Si el personaje ya está ahí, adopta el aspecto pegado. |

Un momento pegado lleva consigo sus propios cambios de escena: si era el momento en que llegaba Mia, ella llega otra vez. Un pegado es un solo paso de deshacer.

### Cuándo funciona

Copiar, cortar y pegar solo funcionan en el modo {ui.topBar.story}, vista **{ui.topBar.visual}**. No hacen nada en la vista Guion, ni cuando un cuadro de texto tiene el foco (el cuadro conserva su propio copiar y pegar), ni cuando hay una ventana o un menú abierto, ni cuando hay texto seleccionado en la página. Una imagen, una variable, una zona o un objeto decorativo no se pueden copiar.

Los menús del clic derecho no tienen entradas Copiar ni Pegar: usa las teclas, o las opciones Cortar, Copiar y Pegar del menú Edición.

### Entre proyectos y ventanas

La copia va al portapapeles de tu ordenador como texto, así que puedes pegar en **otro proyecto u otra ventana**. La copia lleva el momento, la escena o el personaje en sí y los **nombres** de los personajes, expresiones, atuendos, imágenes, variables, objetos y escenas a los que hace referencia, pero no esas cosas.

Al pegar, NovelWorks busca cada referencia en el proyecto donde pegas:

- si existe allí (misma identidad), se conserva;
- si no, se busca **por nombre**: una imagen del mismo tipo, una variable del mismo tipo, una expresión del personaje que corresponda;
- si no, se **deja fuera**: un personaje sale de escena, un hablante se convierte en el **{ui.stageControls.narrator}**, un fondo muestra «{tx.stage.noBackground}», y un enlace, un objeto o una variable pasa a «sin elegir».

Un aviso lista lo que se dejó fuera («Pegado, pero algunos elementos del otro proyecto no existen en este y se han dejado fuera: …»), hasta 8 entradas y luego «y N más». Se queda unos 15 segundos. Pegar en el mismo proyecto no muestra ningún aviso. Una copia hecha con una versión anterior de NovelWorks no tiene nombres, así que sus referencias se borran y aparecen como «sin nombre».

Pega en un proyecto que tenga los mismos personajes, imágenes, escenas y variables para obtener el mejor resultado.

## Borrar

`Delete` o `Backspace` quita de la escena el personaje, la zona o el objeto decorativo seleccionado, o borra el momento seleccionado, cuando ningún cuadro de texto tiene el foco.

## Todos los atajos

Mira [Atajos de teclado](/novelworks-docs/es/reference/keyboard-shortcuts/).
