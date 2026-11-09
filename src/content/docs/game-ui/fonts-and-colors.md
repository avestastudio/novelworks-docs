---
title: Fonts and colors
description: The font, text color, primary color and button style every screen uses.
---

**{ui.gameUI.fontsColors}** holds what every screen shares. Each other screen can override part of it.

## Text

- **{ui.gameUIInspector.font}**: four fonts, each shown in its own style.

| Name | Style | Font | License |
|---|---|---|---|
| {ui.gameUIInspector.fontClean} (default) | Modern sans-serif | Inter | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontClassic} | Serif, for a literary look | Lora | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontRounded} | Soft, friendly | Nunito | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontTypewriter} | Typewriter | Courier Prime | SIL Open Font License 1.1 |

  The font files and their license texts are included in every exported game.

- **{ui.gameUIInspector.textColor}**: the text color of the whole game. The default is white. Screens that say "{tx.gameUIInspector.sameAsTheTextColor}" follow it.

### Languages and fonts

**{ui.gameUIInspector.fontClean}**, **{ui.gameUIInspector.fontClassic}** and **{ui.gameUIInspector.fontRounded}** cover Latin letters with accents, Cyrillic and Vietnamese. Only **{ui.gameUIInspector.fontClean}** also covers Greek. **{ui.gameUIInspector.fontTypewriter}** covers Latin letters (with accents) only. For characters a font does not have, such as Chinese and Japanese, the game uses the player's system fonts (and, when the game language is Japanese, Japanese system fonts first).

You cannot import your own font yet.

Players who turn on the dyslexia-friendly font in the player options get a dedicated font, whatever you chose here.

## Characters arriving and leaving

**{ui.effects.defaultsTitle}**: choose one **{ui.effects.defaultEnter}** and one **{ui.effects.defaultExit}** for the whole game. They are used whenever a moment has no [effect](/novelworks-docs/writing/effects/) of its own for that character. The default is "{tx.effects.defaultNone}".

## Colors and buttons

- **{ui.gameUIInspector.primaryColor}**: "Buttons, highlights and the 'continue' arrow." It also gives the title screen its glow. The default is a pink.
- **{ui.gameUIInspector.buttonStyle}**: **{ui.gameUIInspector.pill}** (fully rounded, the default), **{ui.gameUIInspector.rounded}** (soft corners), **{ui.gameUIInspector.square}** (sharp corners) or **{ui.gameUIInspector.text}** (no box, only the words). It is "used by every menu and choice, unless a screen picks its own".

There is no global background color: backgrounds are set per screen.

## The preview

The preview of this page shows the dialogue box over your first background. Use **{ui.gameUIMode.longTextAvatar}** to check long lines.

## Reset

**{ui.gameUIInspector.resetToDefault}** on this page only resets the settings of this page. The other screens keep their settings.
