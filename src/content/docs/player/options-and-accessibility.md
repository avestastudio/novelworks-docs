---
title: Options and accessibility
description: What each player option does, and how the game supports accessibility.
---

Players open **{rt.game.options}** from the title screen, the pause menu, or the quick menu (if you show its Options button). Esc closes it. Every change applies at once and is kept **per game, in the browser**. If the browser blocks storage, it lasts only for the session. A sample line shows the text as it will look. **{rt.optionsScreen.defaults}** puts every option back.

The look of the screen is yours to set: [Player options](/novelworks-docs/game-ui/options/). You cannot hide any option.

## The options

### Text size

Normal, Large (x1.15) or Very large (x1.3). It scales the dialogue, the names, the choices, the zone labels, the notices and the History. If the text no longer fits in your dialogue box, it scrolls.

### Text speed

Slow, Normal, Fast, Very fast or Instant (see [Text reveal](/novelworks-docs/player/text-reveal/)). If a player has not chosen one, the system decides: Instant when it asks for reduced motion, Normal otherwise.

### Auto speed

Slow, Normal or Fast. It changes the delay of [Auto](/novelworks-docs/player/auto-and-skip/).

### Dyslexia-friendly font

Switches **the whole game** to a font designed to be easier to read for dyslexic readers, **whatever font you chose**. For characters it does not have (such as Chinese or Japanese), the system fonts are used.

### High contrast

Text becomes white and the primary color yellow. The text box, choices, menus, buttons and slots get a black background with a white border, and shadows and transparency are removed. Speaker names are yellow. Hovered or focused buttons turn yellow with black text. The pause, inventory, save, history, options and end screens get a black background.

### Volumes

**{rt.optionsScreen.musicVolume}**, **{rt.optionsScreen.soundVolume}** (ambient sounds and sound effects) and **{rt.optionsScreen.voiceVolume}**, from 0 to 100, with 100 as the default. These three sliders are shown only if the game has sounds. See [Sound](/novelworks-docs/writing/sound/).

## Other accessibility features

- **Keyboard**: the whole game can be played without a mouse. See [Keys and touch screens](/novelworks-docs/player/keys-and-touch/). Zones of an exploration can be reached with **Tab**.
- **Screen readers**: the story text is read once per line, as plain words, without its formatting, screens are announced as dialogs, notices are announced, and keyboard shortcuts are exposed on the buttons.
- **Reduced motion**: when the system asks for it, text appears at once by default (a text speed the player picks is still used) and the letters of [rich text](/novelworks-docs/writing/rich-text/) do not shake or wave. The camera goes straight to its last shot, with no handheld shake. [Effects](/novelworks-docs/writing/effects/) do not play, and particles stay still. The [credits](/novelworks-docs/game-ui/credits/) do not roll: they are shown as a list to scroll. The intro slides and splash fade plainly.
- **{rt.contentWarning.title}**: you can warn players about sensitive topics: [Content warning](/novelworks-docs/game-ui/content-warning/).
- **Selecting text**: the game does not let players select or copy its text.
