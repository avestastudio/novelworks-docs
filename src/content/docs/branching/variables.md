---
title: Variables
description: Create and manage the Scores and Facts your game remembers, and see where each one is used.
---

A **variable** is something the game remembers. There are two kinds, explained in [The game's memory](/novelworks-docs/concepts/game-memory/): a **{ui.variables.number}** (a number that goes up or down, like Mia's affection or money) and a **{ui.variables.yesNo}** (did something happen: yes or no, like "Met Mia" or "Has the key").

Things the player carries (keys, coins…) are not variables. They are **items**, part of the [Inventory](/novelworks-docs/features/inventory/) feature.

## The Variables tab

The **{ui.leftPanel.variables}** tab lists every variable with its kind and where it starts ("Score · starts at 0"). Click **{ui.variablesTab.newVariable}** to add one. In an empty project the tab explains what variables are.

A new variable is called "Variable N", where N is the number of variables you already have plus one (or the next number if that name exists). It is a Score that starts at 0. Select it to edit it in the inspector.

You can also create a variable at the moment you need it, with **{ui.memory.remember}** in a choice. See [Choices](/novelworks-docs/branching/choices/).

## The variable inspector

- **{ui.variableInspector.name}**: for example "Mia affection". Renaming is safe: everything that uses the variable follows the new name.
- **{ui.variableInspector.type}**: Score or Fact.
- **{ui.variableInspector.startsAt}**: the value every new game starts with.
- For a Score, a sentence about what your choices can add up to. See [Where your choices can lead](/novelworks-docs/branching/reach/).
- **{ui.memory.changedBy}** and **{ui.memory.checkedBy}**: the lists below.

### Where a variable is used

The two lists show where the variable is used, with the scene and the moment number. Click a line to go there. A variable is *changed* by a choice option or an exploration zone, and *checked* by an option's condition, an If… or a zone. If nothing changes it yet, the inspector says so, and the same for checks.

## Change the type

If the variable is already used, NovelWorks asks you to confirm, and lists where. The values in those places are reset to fit the new type:

- the start value becomes 0 for a Score, or No for a Fact;
- every change and every test on this variable is reset: to 0 for a Score, to Yes for a Fact;
- a Fact can only be set, so an "add" becomes "set to", and a comparison that does not fit the new type becomes "is".

If the variable is not used, the type changes at once.

## Delete a variable

NovelWorks asks you to confirm. If the variable is used, it lists where, and warns that **those places will show a warning until you pick another variable**. Only the variable is removed: the changes and tests that used it are kept, show a warning, and appear as "Deleted variable (pick another)".

## Variables and the player's saves

The game keeps each variable's value in the player's save. When a save is loaded:

- variables that still exist, with the same kind, get their saved value;
- values for variables that were deleted, or whose kind changed, are dropped;
- variables added since start at their start value.

So you can update your game without breaking old saves.

## Where variables can be used

In the changes of a choice option, in the conditions of an option, in the tests of an [If…](/novelworks-docs/branching/conditions/), and in exploration zones (their conditions and the "change a variable" action).
