---
title: Auto and Skip
description: Let the game read by itself, or skip lines already read.
---

## Turn them on

- **A** turns **{rt.game.auto}** on or off, and **S** turns **{rt.game.skip}** on or off.
- The **{rt.game.auto}** and **{rt.game.skip}** buttons of the [quick menu](/novelworks-docs/game-ui/quick-menu/) do the same, if you show them. They look pressed while a mode is on. Hiding a button never removes its key.
- Holding the **Ctrl** key skips while it is held.
- Only one mode is on at a time. They are ignored while paused or when a screen is open.

## Auto

Auto turns to the next line by itself, after a delay that depends on the length of the line, **once the line has finished appearing**:

- about 1 second plus 55 milliseconds per character, between 1.5 and 10 seconds. For example a short "{tx.numberInput.yes}" waits 1.5 seconds, and a line of 100 characters about 6.5 seconds;
- then multiplied by the player's **Auto speed**: Slow (x1.5, so up to 15 seconds), Normal (x1), Fast (x0.6, so as little as 0.9 seconds).

Auto stops at a moment that is not a line of dialogue: a choice, an exploration or an ending.

## Skip

Skip speeds through lines **the player has already read**, finishing text at once and shortening animations. It stops on the first line they have not read, and at a choice, an exploration or an ending.

- A line counts as read as soon as it appears, and the record is kept **per game, in the browser**, not per save. It stays across new games.
- If you change the text or the speaker of a line, that line counts as unread again.
- Players cannot reset the record themselves, other than by clearing the site data. In the editor, **Reset read lines** does it for your tests.

## What stops them

A click or a key that moves the story (**Space**, **Enter**, **1** to **6**), opening any screen (History, Options, Save, Load, the inventory, the pause menu), and loading a game. A new scene does not stop them.

## Voice

A dialogue moment has no voice or sound setting, so Auto waits only for the text.
