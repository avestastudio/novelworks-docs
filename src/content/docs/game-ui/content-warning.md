---
title: Content warning
description: Warn players about sensitive topics before they start.
---

The **{ui.gameUI.contentWarning}** is shown before the title screen, after your intro pictures. Players read it and click **{rt.game.continue}**.

## Turn it on

Switch on **{ui.contentWarning.enabled}**. It is off by default.

## What it says

- **{ui.contentWarning.topics}**: tick any of eleven topics: Violence, Blood, Death, Suicide, Self-harm, Abuse, Horror, Sexual content, Drugs, Strong language, Flashing lights. The player's screen lists the ticked ones under "{tx.contentWarning.contains}", always in this order.
- **{ui.contentWarning.message}**: free text shown under the list, for example a kind word or a pointer to help. Optional.

## When it appears

Under **{ui.contentWarning.when}**:

- **{ui.contentWarning.firstLaunch}** (default): each player sees it the first time they start the game. It is remembered in their browser.
- **{ui.contentWarning.everyLaunch}**: it shows every time the game starts.

In Play mode in the editor, it shows every time you press Play.

## Its look

Under **{ui.gameUIInspector.screen}**: **{ui.gameUIInspector.backgroundColor}** (the title screen's by default), **{ui.gameUIInspector.textColor}** and **{ui.gameUIInspector.buttonStyle}**.

## What players do

The only way past it is the **{rt.game.continue}** button, which is focused when the screen opens. Clicking elsewhere does not skip it. With the keyboard, **Tab** stays on the button, and **Enter** or **Space** presses it.
