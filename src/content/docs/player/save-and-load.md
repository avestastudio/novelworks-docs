---
title: Saving and loading
description: How players save and load, where saves are kept, and what happens when you update your game.
---

This page describes what **players** experience. For the look of the screens, see [Save and load screen](/novelworks-docs/game-ui/save-load-screen/).

## Where saves are kept

Saves are kept **in the player's browser** (its local storage), for your game only. Each project has a game identifier created with it that never changes. It is part of every save's name, so:

- two different games never share saves, even on the same web site;
- if you export the same game again, or update it, **players keep their saves**, as long as the game stays at the **same web address**;
- saves belong to one browser, at one web address, on one computer: they do not follow the player to another browser or device, or to a new address (a new host or domain).

Saves made while you test in the editor are separate (see [Play mode tools](/novelworks-docs/testing/test-saves-and-read-lines/)).

## Slots

- **12 manual slots**, a **quick save** and an **autosave**.
- The **{rt.game.save}** screen shows slots 1 to 12. The **{rt.game.load}** screen shows the Autosave and the Quick save first, then slots 1 to 12.
- Each slot shows a picture of the moment, the scene name, the date and the play time ("12:34" or "1:02:03").
- Saving over a used slot asks "Overwrite …?". Deleting a slot asks "Delete …? This can't be undone."

## Quick save and quick load

- **F5** quick-saves while playing ("{tx.game.quickSaved}"): it does not reload the page.
- **F9** quick-loads, even from the title screen. If there is no quick save, the game says "{tx.game.noQuickSaveYetPressF5To}" Loading while playing asks "{tx.game.loadThisSaveUnsavedProgressWillBe}"
- The same actions are buttons of the pause menu and, if you show them, of the quick menu.

## Autosave

The game autosaves each time the player **enters a different scene**, when a new game starts, and when a game is loaded from the title screen or into another scene. It does not autosave inside a scene. A failed autosave is silent.

## Continue

On the title screen, **{rt.game.continue}** loads the newest save of any kind (manual, quick or auto). It does not show when there is no save.

## What a save contains

The scene and the moment, the values of variables, the inventory, the zones already used, the map state, the play time, and the last 200 lines of the [History](/novelworks-docs/player/history/). It does **not** contain which lines were read (that is kept separately for Skip), or the text being typed: a loaded line appears whole.

## When you update your game

Saves point at scenes and moments by their identity, so they keep working when you edit text, add scenes or reorder things.

- A variable that no longer exists, or whose kind changed (Score to Fact), loses its saved value. New variables start at their starting value.
- An item that no longer exists is dropped.
- If the saved **moment** was deleted, the game resumes at the start of its scene. If the **scene** was deleted, it resumes at the start scene.
- A save that is damaged, or from a newer version of NovelWorks, shows as an empty slot.

## When the browser does not allow saving

In private browsing, or with site data turned off, the browser may block storage. The Save screen then says "{tx.savesScreen.savingIsNotAvailableInThisBrowser}", and the Load screen says there is nothing to load. A quick save explains that "You can keep playing, but your progress will not be kept." If the storage is full: "The save could not be written: the browser storage is full. Delete an old save and try again."

Players' options and read lines then only last for the session.
