---
title: Pantalla final
description: La pantalla que se muestra cuando se acaba la historia, y en qué se diferencia de un momento Final.
---

**{ui.gameUI.theEnd}** se «muestra cuando la historia termina»: cuando el juego llega al final de una escena y no hay nada después. **No** es la pantalla de un [momento Final](/novelworks-docs/es/branching/endings/), que muestra el nombre del final.

## Qué puedes cambiar

- **{ui.gameUIInspector.text}**: el título mostrado en letras grandes. Por defecto es «Fin». Si lo vacías, no se muestra ningún título.
- **{ui.gameUIInspector.backgroundColor}**: un color liso, negro por defecto. No hay opción de imagen.
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto.

Bajo el título, el juego muestra «{tx.game.returnToTitle}». Este texto no se puede cambiar, y un clic lleva al jugador de vuelta a la pantalla de título.

## Créditos después del final

Si activaste los [créditos](/novelworks-docs/es/game-ui/credits/) y **{ui.credits.afterEnding}**, los créditos pasan cuando el jugador hace clic para salir de un final. Esto vale para esta pantalla y para un [momento Final](/novelworks-docs/es/branching/endings/). Cuando los créditos se cierran, el juego vuelve a la pantalla de título.
