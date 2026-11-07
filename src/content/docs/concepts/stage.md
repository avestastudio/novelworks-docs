---
title: "The stage: characters stay in place"
description: Why a character you put on screen is still there in the next moments, and how to control it.
---

NovelWorks works like a **theater stage**. When a character walks on, they **stay in place** until something changes them. The same goes for the background: it is the *set* of the scene.

![A scene of six moments: the background lasts the whole scene, Leo is on stage for moments 2 and 3, Mia arrives at moment 4 and stays until the end.](/novelworks-docs/diagrams/stage-persistence.svg)

Only the **screen** carries over from one moment to the next: the background and the characters. The **lines of dialogue** do not. Each moment has its own text.

## What a moment stores

A moment does not store a full picture of the screen. It stores only **what it changes**: a new background, a character who arrives, changes expression or position, or leaves. The screen you see at any moment is all the changes of the scene played in order, starting from an empty screen.

You never have to think about this to start: add a character at moment 1 and they are on screen in every following moment. It matters when you **change** something halfway.

## "{tx.stage.scopeFollowing}" or "{tx.stage.scopeOnlyHere}"

Above the game screen, the switch **{ui.stage.scopeLabel}** decides how far your next change reaches:

- **{ui.stage.scopeFollowing}** (the default): the change stays for this moment and the next ones, until a moment changes it again. Like on a stage.
- **{ui.stage.scopeOnlyHere}**: the change applies to this moment only. The following moments keep what they showed before.

The first time a change reaches other moments, a short message tells you so. The moments it reached flash briefly. The whole change is **one step** for Undo, even when it reaches many moments.

## See who is on stage

### The "On stage" bar

Above the game screen, the **{ui.stage.castTitle}** bar shows a round picture for each character who is on stage at some moment of the scene, in the order they arrive. A lit picture means the character is on stage **at this moment**. Click a picture to take the character off stage or bring them on, following the switch above. The bar only appears when the scene has at least one character.

### The chart under the thumbnails

Under the timeline, one row shows the **{ui.timeline.chartBackground}** and one row per character. A bar covers the moments where the thing is on screen. A new bar starts wherever the look changes: another expression, another position or size, a flipped picture, or another background image. Point at a bar to read, for example, "Mia stays on stage until moment 7", "…until the end of the scene" or "…for this moment only".

The chart shows up to 5 rows and scrolls beyond that (fewer on a small window).

![Under the timeline cards, the chart shows one bar for each character, as long as they are on stage.](/novelworks-docs/screenshots/stage-chart.png)

### Small chips on each moment

Under each moment card, small chips list what that moment changes: the background, a character who arrives, leaves, changes expression or is placed differently, or a change in the drawing order. At most four are shown, then "+N".

### In the inspector

With a moment selected, the **{ui.momentInspector.onStage}** section shows one card per character, with a badge:

- **{ui.momentInspector.originNew}**: they arrive at this moment.
- **{ui.momentInspector.originChanged}**: this moment changes them.
- "From moment N": they are carried over from an earlier moment.

Each card has a button to go **back to how it was** before this moment changed them. A character who leaves at this moment is listed with **{ui.momentInspector.bringBack}**. **{ui.momentInspector.add}** puts someone on stage.

## Right-click a character

Right-click a character on the game screen for these entries:

- **{ui.contextMenus.expression}** and **{ui.contextMenus.position}**.
- **{ui.contextMenus.flipHorizontally}**, **{ui.contextMenus.resetSize}**, **{ui.contextMenus.bringForward}**, **{ui.contextMenus.sendBackward}**.
- **{ui.contextMenus.stayUntil}**: choose "Until moment N" (one of the next moments) or **{ui.contextMenus.untilEnd}**. The character keeps their current look until then, even across moments that used to change them.
- **{ui.contextMenus.onlyThisMoment}**: what this moment changed does not continue. It is greyed out if this moment changes nothing for the character, or if it is the last moment.
- **{ui.contextMenus.backToBefore}**: undoes this moment's change for this character.
- **{ui.contextMenus.leavesHere}**: the character leaves from this moment on, whatever the switch says.

## Start a scene like another one ended

When other scenes lead to a scene, and the screen at the end of the scene before differs from how this one starts, a banner appears on this scene's **first moment**: "This scene starts empty" or "This scene starts with: Mia, Leo". For each scene that leads here, a button **Start like the end of "…"** puts on stage what was on screen at the moment that leads here. The next moments follow, and it is one step for Undo.

## What happens when you delete, move, copy or insert a moment

NovelWorks keeps every other moment looking the same:

- **Delete a moment**: what it changed passes to the next moment, so all the remaining moments show exactly what they showed before.
- **Insert a moment** (or press **Enter**): the new moment has no change, so it shows the screen of the moment before it.
- **Duplicate a moment**: the copy goes right after the original and shows the same screen.
- **Move a moment**: it takes its own changes with it. If Mia arrives in that moment and you move it to the end, Mia now arrives there, and the moments left behind no longer show her.
- **Delete a character or a background from the library**: it disappears everywhere, and nothing else changes.

## Good to know

- In Script mode the same rules apply: text you did not change changes nothing.
- The screen of every moment is replayed from the changes, so the thumbnails, the history and the players' saved games all show the right screen.
