---
title: Cuadro de diálogo
description: "Donde aparecen los nombres y las líneas: posición, tamaño, fondo, texto y avatar."
---

El **{ui.gameUI.dialogueBox}** es el cuadro que muestra el nombre de quien habla y el texto. Su tamaño y su lugar se dan en porcentajes de la pantalla (sobre todo de su altura), así que conserva su aspecto en cualquier resolución.

## Plantillas

En **{ui.templates.heading}**, cuatro tarjetas colocan el cuadro por ti: **{ui.templates.dialogue.classic}** (abajo), **{ui.templates.dialogue.sidePanel}** (a la derecha), **{ui.templates.dialogue.centerCard}** y **{ui.templates.dialogue.topBanner}**. Un clic cambia solo la posición, el margen, el ancho y el alto. Los colores, la etiqueta del nombre, el avatar, las imágenes y el texto se quedan como los definiste. Un solo **{ui.topBar.undo}** te devuelve lo que tenías.

La tarjeta de la plantilla actual aparece resaltada hasta que cambias uno de esos ajustes.

## Posición y tamaño

- **{ui.gameUIInspector.position}**: {ui.gameUIInspector.bottom} (por defecto), {ui.gameUIInspector.top}, {ui.gameUIInspector.left}, {ui.gameUIInspector.right} o {ui.gameUIInspector.center}. Al elegir una, el ancho y el alto también se ajustan a un buen tamaño inicial: una franja ancha para arriba y abajo, un panel alto (aproximadamente un tercio de la pantalla) para izquierda y derecha, y un cuadro en el medio para el centro.
- **{ui.gameUIInspector.margin}**: espacio hasta los bordes de la pantalla (de 0 a 20 %, por defecto 3,5).
- **{ui.gameUIInspector.width}** y **{ui.gameUIInspector.height}**: de 10 a 100 %. Después de elegir una posición puedes ajustarlos.

## Colores de las palabras

**{ui.richText.palette}** contiene cinco colores, numerados del 1 al 5. Son los colores que se ofrecen cuando seleccionas palabras en una línea. Consulta [Texto enriquecido](/novelworks-docs/es/writing/rich-text/). Si cambias un color aquí, también cambian todas las palabras que lo usan.

## Fondo

Elige **{ui.gameUIInspector.color}** o **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: un color y una **{ui.gameUIInspector.opacity}** (de 0 a 100 %, por defecto 80). Este color es también el color por defecto de los botones de elección, del menú de pausa y de otros paneles («{tx.gameUIInspector.sameAsTheDialogueBox}»), y de la pestaña del nombre. Esto sigue siendo así cuando el propio cuadro usa una imagen: el color y la opacidad ya no se ven en el cuadro, pero siguen dando color a esos botones y paneles.
- **{ui.gameUIInspector.image}**: cualquier imagen. Las partes transparentes siguen siendo transparentes, así que puedes usar bocadillos, pergaminos o cualquier forma. Elige cómo se ajusta:
  - **{ui.gameUIInspector.stretch}**: llena todo el cuadro (la imagen puede verse aplastada);
  - **{ui.gameUIInspector.fit}**: la imagen entera, manteniendo su forma;
  - **{ui.gameUIInspector.slice}**: las esquinas conservan su tamaño, y los bordes y el centro se estiran. Define el **{ui.gameUIInspector.cornerSize}** (en % de la imagen). Por defecto las esquinas se muestran al tamaño original de la imagen; desmarca esa casilla para definir el **{ui.gameUIInspector.cornerDisplaySize}**, útil para marcos grandes y de alta resolución.

## Texto y nombre

- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto.
- **{ui.gameUIInspector.nameColor}**: **{ui.gameUIInspector.characterColors}** (el [color del nombre](/novelworks-docs/es/writing/characters/) propio de cada personaje, el valor por defecto) o **{ui.gameUIInspector.oneColor}** (un único **{ui.gameUIInspector.colorOfEveryName}** para todos).
- **{ui.gameUIInspector.textPadding}**: espacio entre el borde del cuadro y el texto (de 0 a 15 %, por defecto 4).
- **{ui.gameUIInspector.speakerName}**: **{ui.gameUIInspector.insideTheBox}** (por defecto) o **{ui.gameUIInspector.tabAbove}** (una pestaña sobre el cuadro).

## Avatar

Cuando habla un personaje con avatar, el avatar se muestra junto al nombre. Define los avatares en la [pestaña Personajes](/novelworks-docs/es/writing/characters/).

- **{ui.gameUIInspector.side}**: izquierda (por defecto) o derecha.
- **{ui.gameUIInspector.size}**: de 5 a 60 % de la altura de la pantalla (por defecto 20). Nunca más alto que el cuadro.

## Comprobarlo

Usa **{ui.gameUIMode.longTextAvatar}** sobre la vista previa para ver una línea larga y un personaje con avatar.
