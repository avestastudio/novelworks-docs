---
title: "Problems: every warning"
description: Where the editor warns you about something that is wrong, and the complete list of warnings with what to do.
---

The editor warns you when something in your story is incomplete or can never work, so you can fix it before players see it. **A warning never stops you:** you can still play and export. The game itself never crashes on these problems: a missing link simply means "continue with the next moment".

## Where warnings appear

- **On a moment card** in the timeline, a warning triangle. Point at it to read all the problems of that moment.
- **In the inspector** of the moment, a box "{tx.branchInspectors.thisMomentNeedsYourAttention}" lists them.
- **In the Scenes tab**, a red **{ui.scenesTab.unreachable}** tag on a scene nothing leads to.
- **On the [story map](/novelworks-docs/branching/story-map/)**, a warning badge with a count on a scene card, and the **Unreachable** tag. The **{ui.storyMap.problems}** filter highlights the scenes that have warnings or are unreachable. The tag "{tx.storyMap.gameEndsHere}" is information, not a warning.
- **In the Map workspace**, a "Check your map" box.
- **When you export**, a list of "things to check first" for the whole game. See [Web export](/novelworks-docs/publish/web-export/).
- **In [Script mode](/novelworks-docs/writing/script-mode/)**, a separate set of yellow underlines on lines.

There is no counter of problems in the top bar and no panel that lists everything: the export window is the only place that lists the whole game's problems at once.

## Any moment

| Warning | What it means and what to do |
|---|---|
| Players never see this moment: an ending, a jump, a "{tx.moments.showMap}" moment or an exploration with no Continue zone comes before it in this scene. | A moment placed after one that leaves the scene. Move or delete it. |

## Choice

| Warning | What to do |
|---|---|
| This choice has no options. | Add options. |
| Option N has no text. | Type the option's text. |
| Option N goes to a scene that was deleted. Pick another scene or Continue. | Pick another scene, or "Continue". |
| Option N changes a variable, but none is picked. / … that was deleted. | Pick a variable. |
| Option N uses an item, but none is picked. / … that was deleted. / … but the Inventory feature is off. | Pick an item, or turn Inventory on in Features. |
| Option N checks a variable or an item, but none is picked. / … that was deleted. / … but the Inventory feature is off. | Fix the condition of the option. |

## If…

| Warning | What to do |
|---|---|
| Pick the variable this condition checks. | Pick a variable. |
| Pick the item this condition checks. | Pick an item. |
| This condition checks a variable that was deleted. / an item that was deleted. | Pick another one. |
| This condition checks an item, but the Inventory feature is off. | Turn Inventory on. |
| Pick the scene to go to when the condition is true. | Pick a scene. |
| When true, this goes to a scene that was deleted. / Otherwise, this goes to a scene that was deleted. | Pick another scene. |

Remember that an If… with a broken condition is skipped by the game. See [If… conditions](/novelworks-docs/branching/conditions/).

## Jump

| Warning | What to do |
|---|---|
| Pick the scene to go to. | Pick a scene. |
| This goes to a scene that was deleted. | Pick another scene. |

## Item moment

| Warning | What to do |
|---|---|
| Pick the item to give. / Pick the item to remove. | Pick an item. |
| This moment gives an item that was deleted. / … removes an item that was deleted. | Pick another item. |
| The Inventory feature is off: players have no inventory. Turn it on in Features. | Turn Inventory on. |

## Exploration moment

| Warning | What to do |
|---|---|
| Draw at least one zone for the player to click. | Draw a zone. |
| "Zone" goes to a scene, but none is picked. / goes to a scene that was deleted. (Also "… goes to a scene when the item is used, but none is picked.") | Pick a scene. |
| "Zone" has nothing to say when examined. / … when the item is used. | Type the line it shows. |
| "Zone" checks a variable or an item, but none is picked. / … that was deleted. / … but the Inventory feature is off. (its condition) | Fix the condition. |
| "Zone" uses an item, but none is picked. / … that was deleted. / … but the Inventory feature is off. | Fix the item. |
| "Zone" is examined by a character who was deleted. | Pick another speaker. |
| "Zone" changes a variable, but none is picked. / … that was deleted. | Pick a variable. |
| "Zone" needs an item that players can never get. | Give the item somewhere (an Item moment, a choice, or a pick-up zone). |
| "Zone" can never be used: its condition is never true. | Check what changes the variable or gives the item. |
| A prop has no picture. / A prop is linked to a zone that was deleted. | Pick a picture, or link the prop to another zone. |
| Players can get stuck here: no zone they can click leads to another scene or continues the story. | Add a zone that goes to a scene or continues. |

## Map

| Warning | What to do |
|---|---|
| The Map feature is off: this moment does nothing. Turn it on in Features. | Turn Map on in Features (this is the warning of a "{tx.moments.showMap}" moment). |
| Create your map in Map and add a background. / The map moment was deleted. Pick another exploration moment. / The map moment is no longer an exploration. Pick another one. | Create or fix the map. On a "{tx.moments.showMap}" moment, these end with "Until then, this moment does nothing." |
| Add a background image in Map. | Choose a background. |
| Players can never open the map: the game has no start scene. | Set a start scene. |
| Players can never open the map: the Map button is off / waiting for a "{tx.moments.showMap}" moment, and no "{tx.moments.showMap}" moment can be reached. Add one, or make the map available always. | Add a "{tx.moments.showMap}" moment, or change the map's availability. |

## Whole game (export window)

| Warning | What to do |
|---|---|
| The game has no scenes yet: players will only see the title screen. | Add a scene. |
| No start scene is set: New Game will go straight to the end. | Set a start scene with the star. |
| Players can never reach this scene: no choice, condition, jump or zone leads to it. (Only when the game has more than one scene.) | Link it, or delete it. |
| This scene has no moments. | Add a moment. |
| Players never see these moments: an ending, a jump or an exploration with no Continue zone comes before them in this scene. | Move or delete them. |

The export window also lists each moment's own warnings, as "Scene, moment 4 — message".

## Links you cannot make on the map

When you drag a link on the story map, a kind of link that cannot apply is greyed out with a reason: the scene ends with an ending, already ends with a jump, ends with an exploration (add a zone instead), or its choice already has 6 options.

## What is not checked

A dialogue moment has no warning of its own: an empty line of dialogue is not flagged.
