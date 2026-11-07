---
title: "Where your choices can lead (up to +5)"
description: What the sentence under a Score test means, how it is computed and what it does not know.
---

When you test a **{ui.variables.number}** in an [If…](/novelworks-docs/branching/conditions/), in the condition of an option, or in an exploration zone, NovelWorks adds a line under the test. It tells you what your choices can add up to, so you do not have to count by hand. The same sentence is in the inspector of the variable.

## The sentences

| You see | Meaning |
|---|---|
| "Your choices can add up to +5 to Affection in total." | The Score starts at its start value and your choices can only raise it, by 5 at most. |
| "In total, your choices can bring Affection from 0 to 5." | Some choices also lower it, so there is a lowest and a highest value. |
| "Nothing changes Affection yet: it stays at 0." | No choice changes this Score. |
| "✓ This can happen." | For a number you typed to compare with: it is within what is possible. |
| "⚠ This can never be true: Affection stays between 0 and 5." | The test needs a value the Score can never reach, so that case can never be chosen. |

Nothing is said about a Fact (yes or no), since it has no range.

## How it is computed

NovelWorks looks at **the whole project**, not at one path:

- The Score starts at its start value.
- For every **choice** moment, a player takes one option. NovelWorks adds the **best** option (the most it can add) to the highest value, and the **worst** option (the most it can remove) to the lowest value.
- An exploration zone set to **{ui.explorationInspectors.onceOnly}** that changes the Score counts once. A zone set to **{ui.explorationInspectors.everyTime}** (the default) can be used again and again, so it leaves that side without limit: see "When nothing is said".
- A **"set to"** change makes the range wide on purpose: the lowest value is the smaller of the start value and the values it can be set to, and the highest is the larger one. Additions that come later still count.

## When nothing is said

If a part of your story can repeat (a scene that leads back to itself, a map location the player can visit again, or **any exploration zone that works "{ui.explorationInspectors.everyTime}", which is the default**), the total can grow without limit on that side. So a Score changed by a default zone gets no sentence at all: set the zone to "{ui.explorationInspectors.onceOnly}" if you want NovelWorks to count it. NovelWorks then says nothing about that side, because it prefers to say nothing than something wrong. Only the line "Nothing changes … yet" is still shown when nothing changes the Score at all.

## What it does not know

The sentence is careful, but it does not follow the story:

- It ignores the **order** of scenes and which path the player takes.
- It counts options that are hidden by a condition, because it does not know whether they will be available.
- So "can add up to +5" means "you cannot reach more than 5", not "every player can reach 5".

A condition marked "can never be true" is reliable. A condition marked "this can happen" only means it is not ruled out.
