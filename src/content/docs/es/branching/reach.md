---
title: "Hasta dónde pueden llevar tus elecciones (hasta +5)"
description: Qué significa la frase bajo una prueba de Puntuación, cómo se calcula y qué no sabe.
---

Cuando pruebas un **{ui.variables.number}** en un [Si…](/novelworks-docs/es/branching/conditions/), en la condición de una opción o en una zona de exploración, NovelWorks añade una línea bajo la prueba. Te dice a cuánto pueden sumar tus elecciones, para que no tengas que contar a mano. La misma frase aparece en el inspector de la variable.

## Las frases

| Lo que ves | Significado |
|---|---|
| «Tus elecciones pueden sumar hasta +5 a Affection en total.» | La Puntuación empieza en su valor inicial y tus elecciones solo pueden subirla, como máximo 5. |
| «En total, tus elecciones pueden llevar Affection de 0 a 5.» | Algunas elecciones también la bajan, así que hay un valor mínimo y uno máximo. |
| «Nada cambia todavía Affection: se queda en 0.» | Ninguna elección cambia esta Puntuación. |
| «{tx.reachHint.possible}» | Para un número que escribiste para comparar: está dentro de lo posible. |
| «⚠ Esto nunca será cierto: Affection se queda entre 0 y 5.» | La prueba necesita un valor que la Puntuación nunca puede alcanzar, así que ese caso nunca se puede elegir. |

No se dice nada de un Hecho (sí o no), porque no tiene un rango.

## Cómo se calcula

NovelWorks mira **todo el proyecto**, no un solo camino:

- La Puntuación empieza en su valor inicial.
- En cada momento de **elección**, el jugador toma una opción. NovelWorks suma la **mejor** opción (la que más puede sumar) al valor más alto, y la **peor** opción (la que más puede quitar) al valor más bajo.
- Una zona de exploración configurada como **{ui.explorationInspectors.onceOnly}** que cambia la Puntuación cuenta una sola vez. Una zona configurada como **{ui.explorationInspectors.everyTime}** (la opción por defecto) se puede usar una y otra vez, así que deja ese lado sin límite: consulta «Cuando no se dice nada».
- Un cambio **«{tx.branchInspectors.setTo}»** hace el rango amplio a propósito: el valor más bajo es el menor entre el valor inicial y los valores a los que se puede establecer, y el más alto es el mayor. Las sumas que vienen después siguen contando.

## Cuando no se dice nada

Si una parte de tu historia puede repetirse (una escena que vuelve a sí misma, un lugar del mapa que el jugador puede visitar de nuevo, o **cualquier zona de exploración que funcione «{ui.explorationInspectors.everyTime}», que es la opción por defecto**), el total puede crecer sin límite por ese lado. Por eso una Puntuación cambiada por una zona por defecto no recibe ninguna frase: configura la zona como «{ui.explorationInspectors.onceOnly}» si quieres que NovelWorks la cuente. NovelWorks no dice entonces nada sobre ese lado, porque prefiere no decir nada antes que decir algo incorrecto. Solo se sigue mostrando la línea «Nada cambia … todavía» cuando nada cambia la Puntuación en absoluto.

## Lo que no sabe

La frase es prudente, pero no sigue la historia:

- Ignora el **orden** de las escenas y el camino que toma el jugador.
- Cuenta las opciones que una condición oculta, porque no sabe si estarán disponibles.
- Así que «pueden sumar hasta +5» significa «no puedes llegar a más de 5», no «todos los jugadores pueden llegar a 5».

Una condición marcada como «nunca será cierto» es fiable. Una condición marcada como «esto puede ocurrir» solo significa que no está descartada.
