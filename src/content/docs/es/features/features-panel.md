---
title: La biblioteca de funciones
description: "Activa y desactiva partes opcionales de tu juego: Inventario y Mapa."
---

Algunas partes de una novela visual no las necesitan todos los juegos. NovelWorks te permite añadirlas con un clic desde la biblioteca de **{ui.featuresDialog.features}**, y desactivarlas de nuevo sin perder nada.

## Ábrela

- Haz clic en **{ui.leftPanel.features}** en la parte inferior del panel izquierdo.
- O usa **{ui.projectSettings.openFeatures}** en los [ajustes del proyecto](/novelworks-docs/es/getting-started/editor-settings/), o **{ui.mapMode.features}** en la parte inferior del espacio de trabajo del Mapa.
- Cuando creas un proyecto, las tarjetas **{ui.newProjectScreen.features}** de la ventana Nuevo proyecto hacen lo mismo (por defecto no hay nada marcado).

La ventana **{ui.featuresDialog.features}** dice: «{tx.featuresDialog.addReadyMadePartsToYourGame}» Tiene una tarjeta por cada función, con un interruptor y una descripción. Ciérrala con **{ui.featuresDialog.done}**.

![La ventana Funciones, con las tarjetas Inventario y Mapa.](/novelworks-docs/screenshots/features-dialog.png)

## Las dos funciones

| Función | Qué añade |
|---|---|
| **{ui.shared.features.inventory}** | Los jugadores recogen objetos (llaves, cartas, monedas, pistas) y los ven en un menú Inventario. Aparece una pestaña **{ui.leftPanel.items}** a la izquierda, y los momentos, las elecciones, las condiciones y las zonas pueden dar, comprobar y usar objetos. Consulta [Inventario](/novelworks-docs/es/features/inventory/). |
| **{ui.shared.features.map}** | Los jugadores abren un mapa y eligen adónde ir. Aparece un botón **{ui.leftPanel.map}** a la izquierda, donde dibujas lugares y los enlazas con escenas, y un momento «{tx.moments.showMap}» lo abre durante la historia. Consulta [Mapa](/novelworks-docs/es/features/map/). |

Cuando una función está activada, su tarjeta muestra **{ui.featuresDialog.openItems}** (Inventario) o los ajustes del mapa con **{ui.mapSettings.editMap}** (Mapa). Cuando está desactivada, la tarjeta dice «Desactivada».

## Qué hace desactivar una función

- No se elimina nada de lo que hiciste: se conservan los objetos, los ajustes del mapa y todos los momentos que los usan. Al volver a activar la función, todo vuelve.
- La pestaña, los botones y los tipos de momento de la función desaparecen del editor.
- **Mapa desactivado**: el juego no tiene botón Mapa, y un momento «{tx.moments.showMap}» no hace nada.
- **Inventario desactivado**: el juego no tiene botón Inventario, ni entrada en el menú de pausa, ni tecla **I**. Los momentos, elecciones y zonas que dan o comprueban objetos **se siguen ejecutando** en el juego (y el editor te avisa), así que vuelve a activar la función si usas objetos.
- Los momentos que usan la función se quedan, y muestran una **advertencia** hasta que la vuelvas a activar.
- Si tu historia usa objetos, NovelWorks pregunta antes (**{ui.features.turnTheInventoryOff}**) y lista lo que dejará de funcionar. Lo mismo ocurre con el mapa cuando tienes momentos «{tx.moments.showMap}» (**{ui.features.turnTheMapOff}**).
- Si estabas en el espacio de trabajo del Mapa, vuelves al modo Historia. Si estabas en la pestaña Objetos, pasas a la pestaña Variables.

En la Interfaz del juego, las pantallas Inventario, botón Mapa y Avisos se quedan en la lista, con una nota que indica que los jugadores no las ven mientras la función está desactivada.

## Otras partes de tu juego

La exploración (escenas de apuntar y hacer clic) no es una función que haya que activar: el momento Exploración siempre está disponible. Consulta [Exploración](/novelworks-docs/es/features/exploration/).
