---
title: Avisos (notificaciones)
description: "Los mensajes cortos como «Has conseguido: Llave», y cuánto tiempo se quedan."
---

Los **{ui.gameUI.notices}** son mensajes cortos como «Has conseguido: Llave». Necesitan la [función Inventario](/novelworks-docs/es/features/inventory/) para aparecer con los objetos. La página lo dice cuando la función está desactivada.

## Qué puedes cambiar

- **{ui.gameUIInspector.position}**: arriba (por defecto), centro o abajo.
- **{ui.gameUIInspector.backgroundColor}**: «{tx.gameUIInspector.sameAsTheDialogueBox}» por defecto.
- **{ui.gameUIInspector.textColor}**: «{tx.gameUIInspector.sameAsTheTextColor}» por defecto.
- **{ui.gameUIInspector.shownFor}**: cuánto tiempo se quedan en pantalla «Has conseguido: …» y «Has perdido: …», de 1 a 10 segundos (por defecto 2,5).

## Qué dicen

- «Has conseguido: Llave» y «Has perdido: Llave»;
- para un objeto acumulable que cambia en más de uno: «3 × Moneda».

Se muestra un solo aviso para todos los objetos que cambian a la vez. El mismo cuadro también muestra pequeños mensajes del sistema, por ejemplo «{tx.game.quickSaved}».
