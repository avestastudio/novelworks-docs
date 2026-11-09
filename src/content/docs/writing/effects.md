---
title: Effects
description: Add entrances, exits, reactions, screen effects, particles and transitions to a moment.
---

Effects happen when a moment arrives. Select a moment, open the **{ui.inspectorTabs.effects}** tab of the [moment panel](/novelworks-docs/writing/moment-panel/) and click **{ui.effects.open}**.

![The effects window: the six categories on top, the game screen, the effect tiles and the list of this moment's effects.](/novelworks-docs/screenshots/effects-library.png)

## The six categories

Each category has five effects.

| Category | Effects |
|---|---|
| **{ui.effects.category.enter}** | **{ui.effects.name.fade}**, **{ui.effects.name.slideLeft}**, **{ui.effects.name.slideRight}**, **{ui.effects.name.rise}**, **{ui.effects.name.zoomIn}** |
| **{ui.effects.category.exit}** | **{ui.effects.name.fade}**, **{ui.effects.name.slideLeft}**, **{ui.effects.name.slideRight}**, **{ui.effects.name.fall}**, **{ui.effects.name.zoomOut}** |
| **{ui.effects.category.reaction}** | **{ui.effects.name.jump}**, **{ui.effects.name.shake}**, **{ui.effects.name.nod}**, **{ui.effects.name.recoil}**, **{ui.effects.name.surprise}** |
| **{ui.effects.category.screen}** | **{ui.effects.name.flash}**, **{ui.effects.name.lightning}**, **{ui.effects.name.quake}**, **{ui.effects.name.blackout}**, **{ui.effects.name.pulse}** |
| **{ui.effects.category.particles}** | **{ui.effects.particle.rain}**, **{ui.effects.particle.snow}**, **{ui.effects.particle.petals}**, **{ui.effects.particle.leaves}**, **{ui.effects.particle.fireflies}** |
| **{ui.effects.category.transition}** | **{ui.effects.name.fade}**, **{ui.effects.name.black}**, **{ui.effects.name.wipe}**, **{ui.effects.name.iris}**, **{ui.effects.name.curtain}** |

## Add an effect

1. Choose a category.
2. Click an effect. It plays on the screen in the window, so you can try as many as you like.
3. For **{ui.effects.category.enter}**, **{ui.effects.category.exit}** and **{ui.effects.category.reaction}**, choose the character.
4. Adjust the settings.
5. Click **{ui.effects.add}**.

| Setting | Where | Range |
|---|---|---|
| **{ui.camera.seconds}** | All but particles | 0.2 to 3 seconds |
| **{ui.effects.intensity}** | Reactions, screen effects and particles | 10 to 100 % |
| **{ui.effects.speed}** | Particles | 20 to 200 % |

The effects you added are listed under **{ui.effects.ofThisMoment}**. The cross on each one removes it. A moment can have up to 12 effects, particles not counted.

**{ui.effects.playAll}** plays the whole list in the window.

## In what order

Effects play once, when the moment arrives, one after the other in the order of the list.

A transition always comes first, wherever it is in the list. If you add several transitions to a moment, only the first one plays.

## Exits

If you choose an exit for a character on stage, the character also leaves the stage at this moment. An exit only plays for a character who really leaves here.

## Particles

Particles are different from the other effects. They stay from one moment to the next, like an ambience, until you stop them. **{ui.stage.scopeLabel}** works as usual: see [The stage](/novelworks-docs/concepts/stage/).

A moment shows one kind of particle at a time. To stop them, click the cross on the particles in the list (**{ui.effects.stopParticles}**).

## Default entrance and exit

You can give every character the same way of arriving and leaving, for the whole game. Go to **{ui.topBar.gameUI}**, **{ui.gameUI.fontsColors}**, **{ui.effects.defaultsTitle}**, and choose an **{ui.effects.defaultEnter}** and an **{ui.effects.defaultExit}**.

They are used whenever a moment has no effect of its own for that character. **{ui.effects.defaultNone}** is the setting for a new game.

## In the game

- The first click ends the effects at once. The next click moves on. Particles keep falling.
- When the player skips, or loads a save, effects do not play.
- If the player has asked their system for less motion, effects do not play and particles stay still.

Script mode cannot write effects. It keeps them when you edit the text.

The demo includes some of the effects. You can try the others in the window, but not add them. See [Demo and full edition](/novelworks-docs/getting-started/demo-edition/).
