---
title: Sound and music
description: Import sounds, set music, ambient sound, sound effects and voices on your moments, and see them on the timeline.
---

## Import your sounds

NovelWorks reads MP3, OGG and WAV files. You can import them:

- with **{ui.assetsTab.import}** in the **{ui.leftPanel.assets}** tab;
- by dropping the files on the editor window;
- with **{ui.sound.import}**, where you choose a sound in the **{ui.sound.tab}** tab.

Each sound has a type: **{ui.assetTypes.music}**, **{ui.assetTypes.sound}** or **{ui.assetTypes.voice}**. The filter **{ui.assetsTab.sounds}** of the **{ui.leftPanel.assets}** tab shows them all.

## The Sound tab

Select a moment and open the **{ui.sound.tab}** tab of the [moment panel](/novelworks-docs/writing/moment-panel/).

![The Sound tab of a moment, with music, ambient sound, sound effects and the voice of the line.](/novelworks-docs/screenshots/moment-sound-tab.png)

### Music and ambient sound

**{ui.sound.music}** and **{ui.sound.ambience}** play in a loop, one over the other. Each has three choices:

| Choice | What it does |
|---|---|
| **{ui.sound.continue}** | Nothing changes. The tab tells you what is playing. |
| **{ui.sound.chooseMusic}** / **{ui.sound.chooseAmbience}** | Starts a sound here, with a **{ui.sound.volume}** and a **{ui.sound.fade}**. |
| **{ui.sound.stop}** | Stops the sound here, with a **{ui.sound.fade}**. |

The **{ui.sound.fade}** goes from 0 to 10 seconds. It is how long the old sound takes to give way to the new one.

**{ui.sound.chooseMusic}** lists your music. **{ui.sound.chooseAmbience}** lists your sound effects and music.

### Sound effects

**{ui.sound.effects}** are heard once, when the moment arrives, and play to their end. A moment can have up to 6. They are available on moments the player sees: dialogue, choices, explorations and endings.

### Voice

**{ui.sound.voice}** is available on dialogue moments. The voice stops when the player moves to the next line.

Next to a sound you chose, **{ui.sound.listen}** lets you hear it from the tab.

## How long it lasts

Music and ambient sound keep playing from one moment to the next, and from one scene to the next, until a moment changes them.

Sound settings are not affected by **{ui.stage.scopeLabel}**.

## On the timeline

Colored bands under the timeline show how far each music and ambient sound goes. A band with gaps means the sound comes from a previous scene.

![The timeline with sound bands under the moments.](/novelworks-docs/screenshots/sound-timeline.png)

A further row marks the moments with sound effects or a voice. Click a band or a mark to open the **{ui.sound.tab}** tab of that moment.

To work out what comes from a previous scene, the editor follows the order of your scene list. A player's real path can be different. In the game, what plays is what the player has really heard.

## Title screen music

Go to **{ui.topBar.gameUI}**, **{ui.gameUI.titleScreen}**, **{ui.sound.music}**, and click **{ui.sound.chooseMusic}**. It plays in a loop on the title screen. Ambient sound stops there.

## In the game

- When the player skips or loads a save, sound effects and voices are not played. Music and ambient sound carry on.
- In Auto mode, the game waits for the voice to end.
- In [Options](/novelworks-docs/game-ui/options/), players get three volumes: **{rt.optionsScreen.musicVolume}**, **{rt.optionsScreen.soundVolume}** and **{rt.optionsScreen.voiceVolume}**. They appear only if your game contains sounds. Ambient sound follows **{rt.optionsScreen.soundVolume}**.

## In a web game

Browsers refuse to start a sound before the player's first click or key press. The sound that was refused starts at that moment.

## Limits

The demo allows 5 sound files. See [Demo and full edition](/novelworks-docs/getting-started/demo-edition/).
