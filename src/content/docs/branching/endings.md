---
title: Endings
description: Finish your story, with as many endings as you want, and check that every one can be reached.
---

An **{ui.moments.ending}** moment shows the ending's name, then takes the player back to the title screen. A story can have as many endings as you like, for example one for each result of an [If…](/novelworks-docs/branching/conditions/).

## Add an ending

In the timeline, add an **{ui.moments.ending}** moment at the end of a scene. In the inspector:

- **{ui.branchInspectors.endingName}**: new endings are called "Good ending". If you leave the name empty, the game shows "The End".
- A **short text** (optional) shown under the name.

After the ending, the player goes back to the title screen.

## What players see

The game darkens the screen and shows the ending's name, with the short text under it if there is one. A hint says "Click to return to the title screen", and a click takes the player there. The Map button is hidden on an ending, and the reading modes (Auto and Skip) stop there.

An ending is the end of its scene: moments placed after it can never be reached, and the editor warns about them. You cannot link a new arrow from a scene that ends with an ending.

### If the story just runs out

If a scene has no ending and nothing after its last moment, the game shows an end screen, called **{ui.gameUI.theEnd}** in the [Game UI](/novelworks-docs/game-ui/game-ui-editor/) editor ("Shown when the story is over"). Its text, background color and text color can be changed there. It is not the same screen as an Ending moment, and the story map labels such a scene "Game ends here". Add a real Ending moment so the player gets a proper conclusion.

## See every ending

Go to **{ui.topBar.storyMap}** and click an empty spot so that **no scene is selected**. The panel on the right shows **{ui.endings.title}**: one card for every Ending moment of your story, in the order of your scenes. Each card shows:

- the ending's name ("Untitled ending" if empty), with a flag;
- its place: the scene and the moment number;
- **{ui.endings.leadsHere}**: what leads to it, one line per exit that goes to its scene, such as `From "Park": Option "Run"`, `From "Station": if Affection ≥ 3` or `From "Station": otherwise`. If the scene is the start scene, it says "The story starts in this scene."

Click the ending's name to open it, or a line to open the moment that leads there.

![The "Game endings" panel of the story map, with what leads to each ending.](/novelworks-docs/screenshots/endings-panel.png)

If nothing leads to an ending (and it is not in the start scene), the card shows a warning: **"Nothing leads here yet: players can't reach this ending."**

If your story has no ending yet, the panel says so, and suggests adding one at the end of a scene, for example one for each result of an If….

Good to know:

- Only exits count: a scene that simply continues into the next one does not, and a scene that loops back to itself is not listed as leading to its own ending. Map locations that lead to the scene count as exits (shown as "Map · …").
- The warning only checks that something leads to the ending. An ending in a scene that is itself unreachable can show no warning if another unreachable scene leads to it. Look for the "Unreachable" tags on the [story map](/novelworks-docs/branching/story-map/) too.
- The filter **{ui.storyMap.endingsFilter}** at the top of the map fades the scenes that contain no ending.
- Each ending also appears as a small flag with its name on its scene's card.
