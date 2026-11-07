---
title: Pantalla de historial
description: La lista de líneas que el jugador ya ha leído, y cómo cambiar su aspecto.
---

La pantalla **{ui.gameUI.history}** muestra «las líneas que han leído, con el nombre de quien habla en su color, y las elecciones que hicieron».

## Qué puedes cambiar

En **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: por defecto el color de fondo de la pantalla de título, algo transparente, de modo que la historia se ve tenuemente a través.
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto.
- **{ui.gameUIInspector.buttonStyle}**: el estilo del botón Atrás.

## Cómo la usan los jugadores

- La abren con la **rueda del ratón (desplazando hacia arriba)**, la tecla **H**, el botón **{rt.game.history}** del [menú de pausa](/novelworks-docs/es/game-ui/pause-menu/), o el botón Historial del [menú rápido](/novelworks-docs/es/game-ui/quick-menu/) si lo muestras.
- La cierran con **Esc**, **H** o el botón **{rt.historyScreen.back}**. En una pantalla táctil, arrastran para desplazarse y tocan Atrás.
- Solo está disponible mientras la historia está en pantalla: no en la pantalla de título, ni en pausa, ni cuando hay otra pantalla abierta.
- Enumera las líneas de diálogo, las preguntas de las elecciones, las líneas mostradas por las zonas de exploración y la opción que eligió el jugador («Elegiste: …»). Guarda las últimas **200** entradas y se guarda con cada partida. Cuando aún no hay nada, dice «{tx.historyScreen.nothingHasBeenSaidYet}»

Consulta también [Historial](/novelworks-docs/es/player/history/).
