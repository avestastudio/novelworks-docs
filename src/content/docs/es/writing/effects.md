---
title: Efectos
description: Añade entradas, salidas, reacciones, efectos de pantalla, partículas y transiciones a un momento.
---

Los efectos ocurren cuando llega un momento. Selecciona un momento, abre la pestaña **{ui.inspectorTabs.effects}** del [panel del momento](/novelworks-docs/es/writing/moment-panel/) y haz clic en **{ui.effects.open}**.

![La ventana de efectos: las seis categorías arriba, la pantalla del juego, las casillas de efectos y la lista de efectos de este momento.](/novelworks-docs/screenshots/effects-library.png)

## Las seis categorías

Cada categoría tiene cinco efectos.

| Categoría | Efectos |
|---|---|
| **{ui.effects.category.enter}** | **{ui.effects.name.fade}**, **{ui.effects.name.slideLeft}**, **{ui.effects.name.slideRight}**, **{ui.effects.name.rise}**, **{ui.effects.name.zoomIn}** |
| **{ui.effects.category.exit}** | **{ui.effects.name.fade}**, **{ui.effects.name.slideLeft}**, **{ui.effects.name.slideRight}**, **{ui.effects.name.fall}**, **{ui.effects.name.zoomOut}** |
| **{ui.effects.category.reaction}** | **{ui.effects.name.jump}**, **{ui.effects.name.shake}**, **{ui.effects.name.nod}**, **{ui.effects.name.recoil}**, **{ui.effects.name.surprise}** |
| **{ui.effects.category.screen}** | **{ui.effects.name.flash}**, **{ui.effects.name.lightning}**, **{ui.effects.name.quake}**, **{ui.effects.name.blackout}**, **{ui.effects.name.pulse}** |
| **{ui.effects.category.particles}** | **{ui.effects.particle.rain}**, **{ui.effects.particle.snow}**, **{ui.effects.particle.petals}**, **{ui.effects.particle.leaves}**, **{ui.effects.particle.fireflies}** |
| **{ui.effects.category.transition}** | **{ui.effects.name.fade}**, **{ui.effects.name.black}**, **{ui.effects.name.wipe}**, **{ui.effects.name.iris}**, **{ui.effects.name.curtain}** |

## Añadir un efecto

1. Elige una categoría.
2. Haz clic en un efecto. Se reproduce en la pantalla de la ventana, así que puedes probar tantos como quieras.
3. Para **{ui.effects.category.enter}**, **{ui.effects.category.exit}** y **{ui.effects.category.reaction}**, elige el personaje.
4. Ajusta las opciones.
5. Haz clic en **{ui.effects.add}**.

| Ajuste | Dónde | Rango |
|---|---|---|
| **{ui.camera.seconds}** | Todos menos las partículas | De 0,2 a 3 segundos |
| **{ui.effects.intensity}** | Reacciones, efectos de pantalla y partículas | Del 10 al 100 % |
| **{ui.effects.speed}** | Partículas | Del 20 al 200 % |

Los efectos que has añadido aparecen en **{ui.effects.ofThisMoment}**. La cruz de cada uno lo quita. Un momento puede tener hasta 12 efectos, sin contar las partículas.

**{ui.effects.playAll}** reproduce toda la lista en la ventana.

## En qué orden

Los efectos se reproducen una vez, cuando llega el momento, uno tras otro en el orden de la lista.

Una transición siempre va primero, esté donde esté en la lista. Si añades varias transiciones a un momento, solo se reproduce la primera.

## Salidas

Si eliges una salida para un personaje en escena, el personaje también se va de la escena en este momento. Una salida solo se reproduce para un personaje que realmente se va aquí.

## Partículas

Las partículas son distintas de los demás efectos. Se mantienen de un momento al siguiente, como un ambiente, hasta que las detienes. **{ui.stage.scopeLabel}** funciona como siempre: consulta [El escenario: los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/).

Un momento muestra un solo tipo de partícula a la vez. Para detenerlas, haz clic en la cruz de las partículas en la lista (**{ui.effects.stopParticles}**).

## Entrada y salida predeterminadas

Puedes dar a todos los personajes la misma forma de llegar y de irse, para todo el juego. Ve a **{ui.topBar.gameUI}**, **{ui.gameUI.fontsColors}**, **{ui.effects.defaultsTitle}**, y elige una **{ui.effects.defaultEnter}** y una **{ui.effects.defaultExit}**.

Se usan siempre que un momento no tiene un efecto propio para ese personaje. **{ui.effects.defaultNone}** es el ajuste de un juego nuevo.

## En el juego

- El primer clic termina los efectos de golpe. El siguiente clic avanza. Las partículas siguen cayendo.
- Cuando el jugador salta o carga una partida, los efectos no se reproducen.
- Si el jugador ha pedido a su sistema menos movimiento, los efectos no se reproducen y las partículas se quedan quietas.

El modo Guion no puede escribir efectos. Los conserva cuando editas el texto.

La demo incluye algunos de los efectos. Puedes probar los demás en la ventana, pero no añadirlos. Consulta [Demo y edición completa](/novelworks-docs/es/getting-started/demo-edition/).
