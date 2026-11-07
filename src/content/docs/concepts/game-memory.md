---
title: The game's memory
description: "Scores and facts: how your game remembers what the player did."
---

A choice only matters if the game **remembers** it. NovelWorks stores what happened in **variables**. There are two kinds.

| Kind | What it holds | Example |
|---|---|---|
| **{ui.variables.number}** | A number the game can raise or lower. | Mia's affection, money |
| **{ui.variables.yesNo}** | Did something happen or not: **{ui.variables.yes}** or **{ui.variables.no}**. | "{tx.memory.factExample}", "Has the key" |

Items the player carries (keys, letters, coins…) are a separate, optional part of the game: see [Inventory](/novelworks-docs/features/inventory/).

## The Variables tab

The **{ui.leftPanel.variables}** tab lists your variables, each with its kind and where it starts ("Score · starts at 0"). Click **{ui.variablesTab.newVariable}** to add a Score named "Variable N" (N counts your variables), then rename it and set where it starts in the inspector (**{ui.variableInspector.startsAt}**). You can change the **{ui.variableInspector.type}**: if the variable is already used, NovelWorks asks for confirmation and resets the values.

If you delete a variable that is used somewhere, NovelWorks warns you. The places that used it stay, and show a warning.

## Make the game remember something

You rarely need the Variables tab first. In a **{ui.moments.choice}**, each option has a **{ui.branchInspectors.changes}** area. Click **{ui.memory.remember}** and the panel asks **{ui.memory.rememberTitle}**:

1. Pick **{ui.memory.scoreTitle}** (a number that goes up or down, such as "Mia's affection") or **{ui.memory.factTitle}** (something that happened: yes or no, such as "{tx.memory.factExample}"), and type a name in **{ui.memory.nameLabel}**.
2. Or choose a variable you already have with **{ui.memory.orPick}**.
3. Click **{ui.memory.createAndUse}**.

NovelWorks creates the variable if it is new and adds the change to the option in one step. A Score starts with "add +1" and a Fact with "set to Yes". You can edit the amount afterwards.

## Use what the game remembers

An **{ui.moments.condition}** moment sends the story to different scenes depending on a variable, and an option of a choice can show up only when a condition holds. For a Score you can test: is, is not, at least, at most, more than, less than. For a Fact: is, is not. See [How a story branches](/novelworks-docs/concepts/how-stories-branch/) and [Conditions](/novelworks-docs/branching/conditions/).

## What your choices can add up to

Under a Score test, NovelWorks tells you what is possible, so you do not have to count by hand:

- "Your choices can add up to +5 to Affection in total."
- "In total, your choices can bring Affection from 0 to 5."
- "Nothing changes Affection yet: it stays at 0."

When you type a number to compare with, it tells you "This can happen" or warns "This can never be true: Affection stays between 0 and 5". Nothing is said when NovelWorks cannot tell how high or low a Score can go (for example when a scene loops, or a zone works every time), because the total has no limit.

Try an **{ui.moments.condition}** with the **{ui.memory.tryTitle}** box: pick a value to pretend, and it shows which case holds and where the story would go, without playing.
