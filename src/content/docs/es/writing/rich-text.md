---
title: Dar estilo a tu texto
description: Pon palabras en negrita, de color, grandes o temblorosas, y añade pausas y variables a una línea de diálogo.
---

Puedes dar estilo a cualquier parte de una línea de diálogo. Escribes en la pantalla del juego o en la pestaña **{ui.inspectorTabs.text}**, y el texto se ve como se verá en el juego.

## Dar estilo a unas palabras

Selecciona palabras en una línea. Encima de ellas aparece una pequeña barra de herramientas.

![La barra de herramientas sobre las palabras seleccionadas, con negrita, cursiva, los colores, los tamaños y los movimientos.](/novelworks-docs/screenshots/rich-text-toolbar.png)

| Control | Qué hace |
|---|---|
| **{ui.richText.bold}** y **{ui.richText.italic}** | Letras más gruesas o inclinadas. También puedes pulsar `Cmd+B` / `Ctrl+B` y `Cmd+I` / `Ctrl+I`. |
| Cinco colores redondos | Los colores de tu paleta (ver más abajo). |
| **{ui.richText.customColor}** | Cualquier otro color, solo para esta selección. |
| **{ui.richText.small}** y **{ui.richText.big}** | Letras más pequeñas o más grandes. Las palabras tienen un solo tamaño a la vez. |
| **{ui.richText.shake}** y **{ui.richText.wave}** | Las letras tiemblan u ondulan en el juego. Las palabras tienen un solo movimiento a la vez. |
| **{ui.richText.clear}** | Quita todos los estilos de la selección. |

Haz clic de nuevo en un estilo para quitarlo.

## Tus cinco colores

Los cinco colores de la barra se definen una sola vez para todo el juego: **{ui.topBar.gameUI}**, **{ui.gameUI.dialogueBox}**, **{ui.richText.palette}**.

Si cambias un color ahí, también cambian todas las palabras que lo usan. Un color elegido con **{ui.richText.customColor}** no sigue la paleta.

## Insertar una pausa o una variable

Bajo el campo de texto de la pestaña **{ui.inspectorTabs.text}**, la fila **{ui.richText.insert}** añade algo donde estuvo tu cursor por última vez.

**{ui.richText.pause}** añade una breve espera en medio de la línea. Aparece como una pequeña etiqueta en el texto. Dura medio segundo. Haz clic en la etiqueta para cambiarla, de 0,1 a 5 segundos.

**{ui.richText.variable}** abre la lista de tus [variables](/novelworks-docs/es/branching/variables/). En el texto ves el nombre de la variable como una pequeña etiqueta. En el juego, el jugador ve su valor. Una variable de verdadero o falso se lee **{rt.game.yes}** o **{rt.game.no}**. Si borras la variable, el juego no muestra nada en su lugar.

## Lo que ve el jugador

- La línea se escribe letra a letra y se detiene en cada pausa.
- El primer clic muestra la línea entera. El siguiente clic avanza.
- Las letras que tiemblan u ondulan siguen moviéndose mientras la línea está en pantalla.
- Si el jugador ha pedido a su sistema menos movimiento, las letras no se mueven.
- El [historial](/novelworks-docs/es/player/history/) y los lectores de pantalla reciben solo las palabras, sin estilos.

## En el modo Guion

En el [modo Guion](/novelworks-docs/es/writing/script-mode/), los estilos se escriben como etiquetas alrededor de las palabras:

```
Mia : I {b}never{/b} said that.
Mia : It was {color=1}red{/color}, {shake}so red{/shake}.
Mia : Well...{pause} maybe.
Mia : Wait.{pause=2} You have {Affection} points.
```

| Etiqueta | Significado |
|---|---|
| `{b}` … `{/b}` | Negrita |
| `{i}` … `{/i}` | Cursiva |
| `{color=1}` … `{/color}` | Un color de la paleta, del 1 al 5. También funciona un código como `{color=#ff0000}`. |
| `{small}` … `{/small}`, `{big}` … `{/big}` | Tamaño |
| `{shake}` … `{/shake}`, `{wave}` … `{/wave}` | Movimiento |
| `{pause}`, `{pause=2}` | Una pausa de medio segundo, o de los segundos que indiques |
| `{Affection}` | El valor de la variable con este nombre |

Para escribir una `{` real, escríbela dos veces: `{{`.

Las palabras de las etiquetas siguen el idioma del editor. Un guion copiado de otro idioma sigue funcionando.

## Límites

Los estilos, las pausas y las variables solo funcionan en las líneas de diálogo. Las opciones de una elección y el nombre de un final son texto sencillo.
