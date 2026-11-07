---
title: La memoria del juego
description: "Puntuaciones y hechos: cómo recuerda tu juego lo que hizo el jugador."
---

Una elección solo importa si el juego la **recuerda**. NovelWorks guarda lo que ha pasado en **variables**. Hay dos tipos.

| Tipo | Qué guarda | Ejemplo |
|---|---|---|
| **{ui.variables.number}** | Un número que el juego puede subir o bajar. | El cariño de Mia, el dinero |
| **{ui.variables.yesNo}** | Si algo ocurrió o no: **{ui.variables.yes}** o **{ui.variables.no}**. | «{tx.memory.factExample}», «Tiene la llave» |

Los objetos que lleva el jugador (llaves, cartas, monedas…) son una parte aparte y opcional del juego: consulta [Inventario](/novelworks-docs/es/features/inventory/).

## La pestaña Variables

La pestaña **{ui.leftPanel.variables}** muestra tus variables, cada una con su tipo y su valor inicial («Puntuación · empieza en 0»). Haz clic en **{ui.variablesTab.newVariable}** para añadir una Puntuación llamada «Variable N» (N cuenta tus variables), y luego cámbiale el nombre y elige su valor inicial en el inspector (**{ui.variableInspector.startsAt}**). Puedes cambiar el **{ui.variableInspector.type}**: si la variable ya se usa, NovelWorks te pide confirmación y reinicia los valores.

Si borras una variable que se usa en algún sitio, NovelWorks te avisa. Los lugares que la usaban se quedan como estaban y muestran una advertencia.

## Hacer que el juego recuerde algo

Casi nunca necesitas empezar por la pestaña Variables. En una **{ui.moments.choice}**, cada opción tiene una zona **{ui.branchInspectors.changes}**. Haz clic en **{ui.memory.remember}** y el panel pregunta **{ui.memory.rememberTitle}**:

1. Elige **{ui.memory.scoreTitle}** (un número que sube o baja, como «el cariño de Mia») o **{ui.memory.factTitle}** (algo que ocurrió: sí o no, como «{tx.memory.factExample}») y escribe un nombre en **{ui.memory.nameLabel}**.
2. O elige una variable que ya tengas con **{ui.memory.orPick}**.
3. Haz clic en **{ui.memory.createAndUse}**.

NovelWorks crea la variable si es nueva y añade el cambio a la opción en un solo paso. Una Puntuación empieza con «sumar +1» y un Hecho con «poner en Sí». Después puedes editar la cantidad.

## Usar lo que recuerda el juego

Un momento **{ui.moments.condition}** envía la historia a escenas distintas según una variable, y una opción de una elección puede aparecer solo cuando se cumple una condición. Con una Puntuación puedes comprobar: es, no es, al menos, como máximo, más que, menos que. Con un Hecho: es, no es. Consulta [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/) y [Condiciones](/novelworks-docs/es/branching/conditions/).

## A cuánto pueden sumar tus elecciones

Bajo una prueba de Puntuación, NovelWorks te dice qué es posible, para que no tengas que contar a mano:

- «Tus elecciones pueden sumar hasta +5 a Cariño en total.»
- «En total, tus elecciones pueden llevar Cariño de 0 a 5.»
- «Nada cambia todavía Cariño: se queda en 0.»

Cuando escribes un número para comparar, te dice «Esto puede ocurrir» o te avisa «Esto nunca será cierto: Cariño se queda entre 0 y 5». No dice nada cuando NovelWorks no puede saber hasta dónde sube o baja una Puntuación (por ejemplo cuando una escena se repite en bucle, o una zona funciona siempre), porque el total no tiene límite.

Prueba un momento **{ui.moments.condition}** con el cuadro **{ui.memory.tryTitle}**: elige un valor para simularlo y verás qué caso se cumple y adónde iría la historia, sin jugar.
