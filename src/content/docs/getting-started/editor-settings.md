---
title: Editor and project settings
description: Theme, language and spelling for the editor, and the settings of each project.
---

There are two kinds of settings: those of the **editor** (the same for all your projects) and those of one **project**.

## Editor settings

All of them are in the **{ui.menu.view}** and **{ui.native.menu.edit}** menus.

### Theme

**{ui.menu.view} → {ui.native.menu.theme}**: **{ui.native.menu.dark}** (the default), **{ui.native.menu.light}** or **{ui.native.menu.system}** (follows your computer).

### Editor language

**{ui.menu.view} → {ui.native.menu.language}**: **{ui.native.menu.languageAuto}** or one of the seven languages, each written in its own name. The menus and the editor change right away in every open window. This setting is only about the editor. It does not change your story or your game's language.

### Spelling language (saved in the project)

This one is the exception: it is not shared by all your projects, because the choice is saved **in the project** (and you can undo it).

**{ui.native.menu.edit} → {ui.native.spelling.spellingLanguage}**. On Windows, the default is your computer's languages plus English, and you can pick another language. On a Mac, macOS detects the language of your text by itself, so the menu only says so. 

### Full screen

**{ui.menu.view} → {ui.native.role.togglefullscreen}**.

## Project settings

Click the project title in the top bar, or select nothing, and the inspector shows the **{ui.inspector.projectSettings}**:

| Setting | What it does |
|---|---|
| {ui.projectSettings.gameTitle} | The title of your game. |
| {ui.projectSettings.author} | Your name, as the author. |
| {ui.project.gameLanguage} | The language of the game's own buttons and menus. Your story text stays as you wrote it. If a language is not available for the game, the game uses English for it. |
| {ui.projectSettings.length} | How long the story is to read: every line, choice and ending read once (words and minutes). It is only shown, not set. A playthrough of a branching story is shorter. |
| {ui.projectSettings.features} | The optional parts that are on. **{ui.projectSettings.openFeatures}** opens the list to switch them. |
| {ui.projectSettings.screenSize} | The size of the game screen, 1280 × 720 pixels. It is only shown. |
| {ui.projectSettings.savedIn} | The project's folder. |

Every change here can be undone with **{ui.native.menu.undo}**.
