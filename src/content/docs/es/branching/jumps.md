---
title: Saltos
description: Ve directamente a otra escena, por ejemplo para unir de nuevo dos ramas.
---

Un momento **{ui.moments.jump}** envía la historia directamente a otra escena. Los jugadores no lo ven: el juego entra en la otra escena por su primer momento y no muestra nada entre las dos. Úsalo para unir de nuevo dos ramas, o para pasar a la escena siguiente.

## Configúralo

Selecciona el momento Salto. En el inspector, elige la escena en **{ui.branchInspectors.goTo}**. A diferencia de una opción de una elección, un salto no tiene la entrada «continuar»: necesita una escena. En la línea de tiempo, la tarjeta dice «Ir a Park».

## Conviene saber

- Un salto es una **salida** de su escena. Los momentos colocados después nunca se pueden alcanzar, y el editor te avisa de ello («Los jugadores nunca ven este momento…»).
- Si la escena de destino se eliminó, o no hay ninguna elegida, el editor te avisa. En el juego, un salto así continúa con el siguiente momento de la escena.
- Una escena solo puede terminar con un salto. En el [mapa de la historia](/novelworks-docs/es/branching/story-map/), se rechaza enlazar una escena cuyo último salto ya tiene una escena, mientras que un salto sin escena simplemente se rellena.
- Los saltos que solo se llevan unos a otros forman un bucle infinito: el juego se detiene tras 1000 pasos automáticos y muestra la pantalla final. Consulta [Condiciones Si…](/novelworks-docs/es/branching/conditions/).
- En el mapa de la historia, un salto es una flecha con la etiqueta «{tx.storyMap.jump}».
- Los saltos también existen en el [modo Guion](/novelworks-docs/es/writing/script-mode-conditions/) como `-> Park`.
