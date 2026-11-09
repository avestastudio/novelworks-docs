---
title: Atuendos y vestuario
description: Viste a un personaje con prendas combinables, guarda atuendos y cámbialos durante la historia.
---

El vestuario te permite vestir a un personaje con imágenes colocadas sobre él. Combinas prendas, guardas el resultado como un atuendo y eliges el atuendo en tu historia.

## Abrir el vestuario

En la pestaña **{ui.leftPanel.characters}**, selecciona un personaje y haz clic en el botón grande **{ui.wardrobe.open}**. El mismo botón está en el panel de un personaje en escena.

![El vestuario: el personaje en grande, las prendas por categoría y los atuendos guardados abajo.](/novelworks-docs/screenshots/wardrobe.png)

La ventana muestra:

- el personaje en grande, con sus expresiones debajo, para que puedas comprobar cada una;
- las categorías y sus prendas, a un lado;
- los atuendos guardados, abajo.

Puedes deshacer cada cambio con `Cmd+Z` / `Ctrl+Z` mientras la ventana está abierta.

## Añadir prendas

Una prenda es una imagen con fondo transparente, guardada en una categoría. Suelta archivos sobre una categoría, o haz clic en **{ui.wardrobe.addPiece}** (el signo más). Las prendas son un tipo de imagen propio, **{ui.assetTypes.clothing}**, y el selector de prendas solo muestra ese tipo.

Un personaje lleva una prenda por categoría. Para llevar a la vez un sombrero y un collar, usa dos categorías.

## Categorías

Un vestuario nuevo tiene cuatro categorías: **{ui.wardrobe.category.shoes}**, **{ui.wardrobe.category.bottoms}**, **{ui.wardrobe.category.tops}** y **{ui.wardrobe.category.accessories}**.

- Haz clic en el nombre de una categoría para cambiarlo. Las categorías no son solo para ropa: también sirven para el pelo.
- **{ui.wardrobe.addCategory}** añade una, hasta 12.
- **{ui.wardrobe.removeCategory}** borra la categoría y sus prendas, y las quita de los atuendos. Las imágenes se quedan en tus recursos.
- **{ui.wardrobe.required}** quita la opción **{ui.wardrobe.none}** de esa categoría.

## Colocar una prenda

Haz clic en una prenda. Aparece un marco a su alrededor sobre el personaje.

- **Arrastra** el marco para mover la prenda.
- **Tira de la esquina** para cambiar su tamaño, del 5 % al 400 %.
- Usa las **teclas de flecha** para dar pasos pequeños. Mantén pulsada `Shift` para dar pasos más grandes.
- **{ui.wardrobe.resetPlacement}** deshace todo eso.

Una prenda se coloca una sola vez. Todos los atuendos y expresiones que la usan la siguen.

Una imagen con la misma forma que el personaje queda justo sobre él al añadirla. Una imagen con otra forma, como un sombrero recortado por separado, llega con su propio tamaño.

## Orden de las capas

La lista de categorías muestra arriba lo que queda delante. **{ui.wardrobe.moveForward}** y **{ui.wardrobe.moveBack}** mueven una categoría.

La fila **{ui.wardrobe.expressionLayer}** se mueve del mismo modo. Muévela para poner el pelo sobre la cara, o un cuerpo debajo de ella.

## Probar y guardar

Al hacer clic en una prenda solo te la pruebas. Todavía no se guarda nada.

- **{ui.wardrobe.saveAsNew}** crea un atuendo con lo que lleva puesto el personaje.
- **{ui.wardrobe.updateOutfit}** aparece cuando has cambiado el atuendo seleccionado, y guarda el cambio.
- **{ui.outfits.default}** es el personaje sin prendas.

Selecciona un atuendo abajo para cambiarle el nombre, o para borrarlo con **{ui.outfits.remove}**.

## Dibujos enteros

Si tu personaje está dibujado de una sola pieza, puedes prescindir de las capas. Selecciona un atuendo y abre **{ui.wardrobe.wholeDrawings}**. Dale un dibujo terminado por expresión. Un dibujo entero sustituye a las capas para esa expresión, en ese atuendo.

## Cambiar el atuendo en la historia

Haz clic en el personaje en la pantalla del juego. Entonces tienes tres maneras:

- la sección **{ui.stageControls.outfit}** del panel de la derecha, con el personaje mostrado en cada atuendo;
- el menú **{ui.stageControls.outfit}** de la pequeña barra sobre el personaje;
- **{ui.contextMenus.outfit}** en el menú del clic derecho.

El atuendo se mantiene hasta que un momento posterior lo cambia, como una expresión. **{ui.stage.scopeLabel}** funciona como siempre: consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).

## En el modo Guion

Añade la palabra `outfit` y el nombre del atuendo a una línea `show`:

```
show : Mia happy outfit Uniform left
show : Mia outfit default
```

`outfit default` vuelve al atuendo inicial. Un nombre de atuendo que no existe se señala, con una forma de crearlo.

## Borrar, copiar y pegar

- Si borras un atuendo, los personajes que lo llevaban vuelven a **{ui.outfits.default}**.
- Si borras una prenda, se quita de los atuendos que la usan.
- Cuando pegas momentos en otro proyecto, el atuendo se busca por su nombre. Si no hay ninguno con ese nombre, el personaje lleva el atuendo inicial.

## Exportar

Solo las prendas que lleva un atuendo guardado entran en tu juego exportado.

## Límites

- Un personaje puede tener hasta 20 atuendos además del inicial, y 200 prendas.
- Los avatares no cambian con el atuendo.
- La demo permite 2 atuendos por personaje. Consulta [Demo y edición completa](/novelworks-docs/es/getting-started/demo-edition/).
