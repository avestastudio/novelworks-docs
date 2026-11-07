---
title: Game UI overview
description: Change how your game looks, screen by screen, with a live preview.
---

The **{ui.topBar.gameUI}** mode changes how your game looks: its font and colors, the title screen, the dialogue box, the choice buttons, the menus and the small messages. Switch to it in the top bar, or with **Cmd+5** / **Ctrl+5**.

![The Game UI mode: the list of screens, the live preview, and the settings of the dialogue box.](/novelworks-docs/screenshots/game-ui-dialogue.png)

## The three parts of the window

- **Left: the list of screens.** Click one to work on it.
- **Center: the preview.** It is the real game, drawn with your settings, on a small sample (your first background and your first character, or a sample character). It is not interactive: press **{ui.topBar.play}** to try the game with these settings. A line under it says so.
- **Right: the settings of the screen.** Every screen ends with a **{ui.gameUIInspector.resetToDefault}** button.

## The screens

| Screen | What it is | Page |
|---|---|---|
| {ui.gameUI.fontsColors} | The font and colors every screen uses. | [Fonts and colors](/novelworks-docs/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | Your studio logo or other pictures, before the title screen. | [Intro](/novelworks-docs/game-ui/intro/) |
| {ui.gameUI.contentWarning} | Warns players about sensitive topics before the title screen. | [Content warning](/novelworks-docs/game-ui/content-warning/) |
| {ui.gameUI.titleScreen} | The first screen of your game. | [Title screen](/novelworks-docs/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | Where names and lines appear. | [Dialogue box](/novelworks-docs/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | The buttons of a choice. | [Choices](/novelworks-docs/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | Opened with a right-click or Esc. | [Pause menu](/novelworks-docs/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | The Save and Load screens. | [Save and load screen](/novelworks-docs/game-ui/save-load-screen/) |
| {ui.gameUI.history} | The list of lines already read. | [History screen](/novelworks-docs/game-ui/history-screen/) |
| {ui.gameUI.options} | Where players choose their text size, speed, font and contrast. | [Player options](/novelworks-docs/game-ui/options/) |
| {ui.quickMenu.title} | Reading controls over the story. | [Quick menu](/novelworks-docs/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | Shown when the story is over. | [Ending screen](/novelworks-docs/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | Its button and the panel of items (Inventory feature). | [Inventory screen](/novelworks-docs/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | The button that opens the map (Map feature). | [Map button](/novelworks-docs/game-ui/map-button/) |
| {ui.gameUI.notices} | Short messages like "You got: Key". | [Notifications](/novelworks-docs/game-ui/notifications/) |

## Long text and avatar

For Fonts and colors, the Dialogue box, Choices and the Pause menu, the button **{ui.gameUIMode.longTextAvatar}** above the preview shows a long line and a character with an avatar, so you can check that everything fits.

## Settings that work the same everywhere

- **Colors.** A swatch opens a color picker, and a box takes a code (`#rgb` or `#rrggbb`). When a color is "Same as …" (for example "Same as the text color"), nothing is stored: it follows the other color. Once you choose a color, a small circular arrow next to it goes back to "Same as …".
- **Button style.** A drop-down with **{ui.gameUIInspector.sameAsFontsColors}**, **{ui.gameUIInspector.pill}**, **{ui.gameUIInspector.rounded}**, **{ui.gameUIInspector.square}** and **{ui.gameUIInspector.text}** (no box, just the words). "Same as Fonts & colors" follows the global style.
- **Sliders** show their value with its unit, usually %. Percentages are relative to the screen, so your design holds at any size.
- **Pictures.** A picture field shows a thumbnail with **{ui.gameUIInspector.choose_c7f937}** or **{ui.gameUIInspector.change}**, and an X to remove it. You can usually pick any of your images, or import a new one on the spot. (The title screen's background only offers backgrounds, CGs and UI pictures.) If a picture is deleted, the game falls back to the plain color or text.
- **{ui.gameUIInspector.resetToDefault}.** The button at the bottom of a screen asks you to confirm, then puts **that screen only** back to how a new game looks. The other screens are not changed.

## Undo

Every change in the Game UI can be undone. Typing, dragging a slider or choosing a color in one field is one step.

## What is saved

The look is saved in your project, with the rest of it. Players' own choices (text size, dyslexia-friendly font, high contrast) apply over your design, only for them. See [Options and accessibility](/novelworks-docs/player/options-and-accessibility/).
