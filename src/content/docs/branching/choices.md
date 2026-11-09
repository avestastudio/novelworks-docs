---
title: Choices
description: Let the player pick an option, change what the game remembers, and lead to another scene.
---

A **{ui.moments.choice}** moment shows the player two to six buttons. Each option can change what the game remembers and send the story to another scene. For how it fits with the rest, see [How a story branches](/novelworks-docs/concepts/how-stories-branch/).

## Add a choice

In the header of the timeline, open **{ui.timeline.addOther}** and add a **{ui.moments.choice}** moment. It starts with two empty options. You can write in the **{ui.inspectorTabs.text}** tab of the inspector, or directly on the game screen.

![A choice with two options: what each one changes, and the scene it leads to.](/novelworks-docs/screenshots/choice-options.png)

## The question

**{ui.branchInspectors.questionOptional}** is shown in the text box above the options, as narration with no speaker. Leave it empty if you do not need it.

## The options

Each option is a card with its number and its text.

- **{ui.branchInspectors.addOption}** adds one. A choice can have **up to 6 options**, and the button is disabled at 6.
- The X removes an option. A choice needs **at least 2**, so the X is disabled with two left.
- Options cannot be reordered by dragging. To change the order, edit the texts.

Players click an option, or press its number key, 1 to 6.

## Where an option leads

**{ui.branchInspectors.then}** chooses what happens after the option:

- **{ui.linkSelects.continueNextMoment}**: the story goes on with the next moment of the same scene.
- a scene, under **{ui.linkSelects.orGoToScene}**: the game enters that scene at its first moment.
- **{ui.linkSelects.newScene}** creates an empty scene and links it.

If the scene was deleted, the list shows **{ui.linkSelects.deletedScenePickAnother}** and a warning explains it. In the game a missing scene behaves like "continue".

When the player picks an option, the game first applies its changes, then follows the link.

## What an option changes

Under **{ui.branchInspectors.changes}**, each option lists what the game remembers if it is picked. The first button is **{ui.memory.remember}**: it creates a [Score or a Fact](/novelworks-docs/concepts/game-memory/) if you need one and adds the change in one step. A Score starts with "add 1", a Fact with "set to Yes".

Each change is a row:

- **A variable.** Pick the variable. For a Score, choose **{ui.branchInspectors.add}** or **{ui.branchInspectors.setTo}** and type a number. For a Fact, it is always **{ui.branchInspectors.setTo}** Yes or No. The X removes the change.
- **An item**, when the Inventory feature is on: **{ui.branchInspectors.giveRemoveAnItem}**. Pick the item, **{ui.branchInspectors.give_0895a5}** or **{ui.branchInspectors.remove_7e5608}**, and how many for a stackable item.

When the game applies the changes, it goes in order. A change that points to a deleted or unpicked variable or item is skipped (the editor warns you). Adding to a Fact does nothing. A single item is never more than one, and a stackable item never goes below zero.

## An option that appears only sometimes

Click **{ui.optionCondition.add}**. A block **{ui.optionCondition.title}** appears with the same editor as the cases of an [If…](/novelworks-docs/branching/conditions/): one or more conditions, and **{ui.conditionCases.matchAll}** or **{ui.conditionCases.matchAny}** when there are several.

Then choose **{ui.optionCondition.whenFalse}**:

- **{ui.optionCondition.hidden}**: the option is not shown, and the other buttons close the gap.
- **{ui.optionCondition.locked}**: the option is shown greyed out and cannot be picked.

**{ui.optionCondition.remove}** makes the option always available again. Removing the last condition does the same.

**Players always keep a way to go on.** If every option would be hidden or locked, the game shows all of them normally.

A condition that checks a deleted or unpicked variable or item counts as false, so the option is hidden or locked, and the editor warns you.

## In the game

- Options are buttons stacked in the middle of the screen. Their look comes from the [Game UI](/novelworks-docs/game-ui/game-ui-editor/).
- The buttons appear when the text has finished appearing.
- A hidden option leaves no gap, and the number keys count the buttons that are **on screen**. A locked button takes a number but cannot be picked.

## Warnings

A moment with a problem shows a triangle on its card, and a box "{tx.branchInspectors.thisMomentNeedsYourAttention}" in the inspector. For a choice:

- This choice has no options.
- An option has no text.
- An option goes to a scene that was deleted. Pick another scene or Continue.
- An option changes a variable, but none is picked, or the variable was deleted.
- An option uses or checks an item that is not picked, was deleted, or whose Inventory feature is off.
- An option checks a variable that is not picked or was deleted.

There is no warning when every option is locked: the game shows them all, as described above.
