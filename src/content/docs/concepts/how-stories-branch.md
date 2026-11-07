---
title: How a story branches
description: Choices, conditions, jumps and endings, and how to see where your story goes.
---

A story branches when it can go to **another scene**. Four kinds of moment do that.

| Moment | What it does |
|---|---|
| **{ui.moments.choice}** | The player picks one option out of 2 to 6. Each option can change variables and lead to a scene. |
| **{ui.moments.condition}** | The game checks what it remembers and sends the story to a scene. Players never see it. |
| **{ui.moments.jump}** | Goes straight to a scene. Players never see it. |
| **{ui.moments.ending}** | Shows the ending's name, then returns to the title screen. |

An **{ui.moments.exploration}** moment can also lead to scenes, through the zones the player clicks.

## Choices

In the inspector, write an optional question, then the text of each option. For each option:

- **{ui.branchInspectors.changes}**: what the game remembers if the player picks it (see [The game's memory](/novelworks-docs/concepts/game-memory/)).
- **{ui.branchInspectors.then}**: the scene it leads to. You can also let the story continue with the next moment.
- **{ui.optionCondition.add}**: the option appears only when a condition holds. Then choose what happens otherwise: **{ui.optionCondition.hidden}** or **{ui.optionCondition.locked}**. Players always keep a way to go on: if no option could be picked, they all appear. **{ui.optionCondition.remove}** makes it available again.

Players click an option or press its number key, 1 to 6. A choice needs at least two options.

## If…

An **{ui.moments.condition}** moment has one or more **cases**, checked **from top to bottom**. The first case that holds wins.

![An If… checks Case 1, then Case 2, then goes to otherwise.](/novelworks-docs/diagrams/if-order.svg)

- Each case has one or more conditions. Choose whether **{ui.conditionCases.matchAll}** or **{ui.conditionCases.matchAny}**, and click **{ui.conditionCases.addTest}** for more.
- Each case has a scene to go to. Use **{ui.conditionCases.addCase}** for another case, and the arrows to change the order.
- *otherwise* is where the story goes when no case holds. If you pick no scene, the story continues with the next moment.

## Jumps and endings

A **{ui.moments.jump}** needs only a scene to go to. An **{ui.moments.ending}** has a name (**{ui.branchInspectors.endingName}**) and an optional short text. A story can have as many endings as you like.

## See where the story goes

### The "Where this leads" bar

Above the game screen, one small button per exit of the selected moment shows where it leads, up to four and then "+N". Click one to jump to that scene. A "Back" button takes you to where you were (the last 20 steps are remembered). On a scene's first moment, a list shows what leads **into** the scene.

### The Branches row

Under the thumbnails and the stage chart, the **{ui.branches.rowTitle}** row marks every moment that leaves the scene, in line with the moment:

![The chart under the thumbnails, with the Branches row: a fork on moment 3 and a flag on moment 6.](/novelworks-docs/diagrams/branches-row.svg)

- a fork: a choice or an If…;
- an arrow: a jump;
- a pointer: an exploration zone;
- a flag: an ending, with its name;
- a map icon: a Show map moment.

Next to the icon is the name of the first scene it leads to, and "+N" if there are more exits. A mark turns red if a scene is missing. Point at a mark to list all exits, click it to select the moment. A button folds the row away.

The Scenes tab also shows how many branches each scene has.

### The story map

The **{ui.topBar.storyMap}** shows every scene of your game and what links one to another. Click a scene to see it, double-click to open it. With no scene selected, the panel on the right is the list of the game's endings (**{ui.endings.title}**) and what leads to each. An ending nothing leads to is flagged, because players cannot reach it. See [The story map](/novelworks-docs/branching/story-map/).
