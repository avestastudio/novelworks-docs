---
title: Personajes y expresiones
description: Crea personajes, dales expresiones y avatares, y sabe qué pasa al borrar uno.
---

Un personaje es una persona de tu historia. Cada personaje tiene un nombre, un color de nombre y **expresiones**: una imagen por cada estado de ánimo. Los personajes viven en la pestaña **{ui.leftPanel.characters}**.

## Crear un personaje

Haz clic en **{ui.charactersTab.newCharacter}**. El personaje se llama «Personaje N», donde N es el número de personajes que ya tienes más uno (dos personajes pueden acabar con el mismo nombre, así que cámbiales el nombre), y un color de nombre de un conjunto de ocho. Selecciónalo para editarlo en el inspector.

También puedes crear un personaje mientras importas imágenes: consulta [Recursos](/novelworks-docs/es/writing/assets/).

## Nombre y color

- **{ui.characterInspector.name}**: escríbelo en el inspector (la lista no permite renombrar directamente, pero **{ui.contextMenus.rename}** en el menú del clic derecho te lleva al campo).
- **{ui.characterInspector.nameColor}**: elige uno de ocho colores predefinidos, o cualquier color con **{ui.characterInspector.pickAnyColor}**. Colorea el nombre en el cuadro de diálogo y en el modo Guion.

## Expresiones

En **{ui.characterInspector.expressions}**, añade una imagen para cada estado de ánimo (alegre, triste, enfadado…).

- Haz clic en **{ui.characterInspector.addExpression}** y elige una imagen del tipo «{tx.assetTypes.characterSprite}», o importa una nueva desde el selector. La expresión toma el nombre de la imagen.
- Escribe otro nombre en **{ui.characterInspector.expressionName}** si quieres.
- Haz clic en la estrella para **{ui.characterInspector.makeThisTheDefaultExpression}**. La primera expresión que añades es la predeterminada. Es la que se muestra cuando un personaje llega sin expresión.
- Haz clic en la imagen para **{ui.characterInspector.changeImage}**. La imagen anterior se queda en tus recursos.
- Haz clic en la X para quitar la expresión. Si hay momentos que la usan, NovelWorks te avisa de que usarán la expresión predeterminada. Si quitas la predeterminada, la primera expresión que quede pasa a ser la predeterminada.

## Avatar

Un avatar es un pequeño retrato que se muestra en el cuadro de diálogo junto al nombre. En **{ui.characterInspector.avatar}**, elige:

- **{ui.characterInspector.none}**: sin retrato en el cuadro de diálogo;
- **{ui.characterInspector.fixed}**: el mismo retrato cada vez que habla este personaje;
- **{ui.characterInspector.perExpression}**: un retrato para cada expresión. Las expresiones que no tienen uno usan el avatar predeterminado.

Los avatares pueden ser imágenes de tipo «{tx.assetTypes.avatar}», «{tx.assetTypes.characterSprite}» o «Interfaz».

## Poner un personaje en escena

Consulta [Poner en escena una escena](/novelworks-docs/es/writing/staging/). En resumen: en un momento, usa **{ui.momentInspector.add}** en **{ui.momentInspector.onStage}** (o el botón **{ui.stageControls.character}** sobre la pantalla del juego) y arrastra el personaje adonde quieras.

## Borrar un personaje

Usa **{ui.characterInspector.deleteCharacter}** en el inspector o **{ui.contextMenus.delete}** en el menú del clic derecho. Si el personaje no se usa, NovelWorks lo quita junto con sus expresiones; las imágenes se quedan en tus recursos. Si aparece en tu historia, NovelWorks indica dónde y avisa de que **saldrá de esos momentos y sus líneas pasarán a ser narración**. Usa antes **{ui.contextMenus.showUsages}** para ver dónde se usa un personaje.

Puedes deshacer un borrado.
