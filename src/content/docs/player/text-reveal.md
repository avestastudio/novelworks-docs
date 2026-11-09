---
title: Text reveal
description: How the text appears, and what a click does while it is appearing.
---

Text appears letter by letter, like a typewriter. The speed is the player's choice in the [options](/novelworks-docs/player/options-and-accessibility/).

| Setting | Characters per second |
|---|---|
| Slow | 20 |
| Normal (default) | 40 |
| Fast | 70 |
| Very fast | 120 |
| Instant | the whole line at once |

A change applies at once, even in the middle of a line.

## Click, Space or Enter

- **While the text is appearing**, the first click, **Space**, **Enter** or choice key **finishes the line** and does nothing else. Any pause left in the line is skipped too.
- **While [effects](/novelworks-docs/writing/effects/) or a [camera](/novelworks-docs/writing/camera/) move are playing**, the first click, **Space** or **Enter** finishes them as well. Particles such as rain keep going.
- **Once all that is complete**, the next click moves on to the next line.

The buttons of a choice appear when the question has fully appeared, so the first press of **1** to **6** only finishes the text.

## Rich text

A line can use [rich text](/novelworks-docs/writing/rich-text/). Letters appear with their colors and sizes, and shaking or waving letters move. The text stops for the length of each pause, then goes on. When the player has asked for reduced motion, letters do not move.

## Always instant

- the speed "{tx.optionsScreen.speedInstant}" (pauses in the text are ignored);
- Skip mode;
- a line after loading a save;
- when the player has not chosen a speed and their system asks for **reduced motion**. If they pick a speed themselves, it is used.

## The continue arrow

A small downward triangle in your primary color bounces at the end of a line of dialogue (or an exploration line). Its place is part of the [dialogue box](/novelworks-docs/game-ui/dialogue-box/) design.

## Pausing

The text stops appearing while the pause menu or a screen is open, and while the page is hidden.

## Screen readers

A screen reader reads the whole line at once (with the speaker's name), as plain words, instead of letter by letter.
