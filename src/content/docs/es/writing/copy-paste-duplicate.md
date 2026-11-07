---
title: Copiar, pegar y duplicar
description: Copia momentos, escenas y personajes, pégalos en otro sitio y duplica con una sola tecla.
---

## Duplicar

**Cmd+D** / **Ctrl+D** duplica lo que está seleccionado, incluso mientras escribes:

- un **momento**: la copia va justo después del original, con una identidad nueva. No cambia nada en pantalla, así que muestra la misma imagen que el original, y su nota se copia;
- una **escena**: la copia va justo después del original y se llama, por ejemplo, «A helping hand (copia)» (mira [Escenas](/novelworks-docs/es/writing/scenes/));
- una **zona** de exploración.

El menú del clic derecho tiene **{ui.contextMenus.duplicate}** para un momento y una escena, y **{ui.contextMenus.duplicateZone}** para una zona. El inspector de un momento tiene un botón **{ui.momentInspector.duplicate}**.

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

La copia va al portapapeles de tu ordenador como texto, así que puedes pegar en **otro proyecto u otra ventana**. El portapapeles guarda el momento, la escena o el personaje en sí, **no** las imágenes, personajes, escenas o variables a las que hace referencia.

Lo que ves cuando el otro proyecto no los tiene (comprobado pegando un momento de un proyecto en otro):

- un hablante que no existe allí se convierte en el **{ui.stageControls.narrator}**;
- un fondo que no existe allí se descarta (el momento muestra «{tx.stage.noBackground}»);
- un personaje que no existe allí no se dibuja, y puede aparecer como una fila «Sin nombre» en el esquema de la escena, o como `?` en el [modo Guion](/novelworks-docs/es/writing/script-mode-lines/);
- **no se muestra ningún aviso**, así que revisa tú mismo el momento pegado.

Pega en un proyecto que tenga los mismos personajes, imágenes, escenas y variables para obtener el mejor resultado.

## Borrar

`Delete` o `Backspace` quita de la escena el personaje, la zona o el objeto decorativo seleccionado, o borra el momento seleccionado, cuando ningún cuadro de texto tiene el foco.

## Todos los atajos

Mira [Atajos de teclado](/novelworks-docs/es/reference/keyboard-shortcuts/).
