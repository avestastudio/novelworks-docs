---
title: History screen
description: The list of lines the player has already read, and how to change its look.
---

The **{ui.gameUI.history}** screen shows "the lines they have read, with the speaker's name in their color, and the choices they made".

## What you can change

Under **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: by default the title screen's background color, slightly see-through, so the story shows faintly through.
- **{ui.gameUIInspector.textColor}**: "Same as the text color" by default.
- **{ui.gameUIInspector.buttonStyle}**: the style of the Back button.

## How players use it

- They open it with the **mouse wheel (scrolling up)**, the **H** key, the **{rt.game.history}** button of the [pause menu](/novelworks-docs/game-ui/pause-menu/), or the History button of the [quick menu](/novelworks-docs/game-ui/quick-menu/) if you show it.
- They close it with **Esc**, **H** or the **{rt.historyScreen.back}** button. On a touch screen they drag to scroll and tap Back.
- It is only available while the story is on screen: not on the title screen, while paused, or when another screen is open.
- It lists dialogue lines, choice questions, lines shown by exploration zones, and the option the player picked ("You chose: …"). It holds the last **200** entries and is saved with each save. When there is nothing yet, it says "Nothing has been said yet."

See also [History](/novelworks-docs/player/history/).
