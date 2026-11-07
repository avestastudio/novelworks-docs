---
title: "If… conditions"
description: Send the story to different scenes depending on what the game remembers, with as many cases as you need.
---

An **{ui.moments.condition}** moment checks what the game remembers and sends the story to a scene. **Players never see it:** the game checks it and moves on right away. For the idea in pictures, see [How a story branches](/novelworks-docs/concepts/how-stories-branch/).

## Cases

An If… is a list of **cases**, checked **from top to bottom**. The first case that holds wins. Each case has:

- one or more **conditions**;
- the scene to go to ("go to").

After the last case comes *otherwise*: where the story goes when no case holds.

A new If… has one case with one empty condition. With a single case it is shown plainly. With two or more, each case is a card titled "Case 1", "Case 2"…

![The inspector of an If… moment, with a condition, "go to" and "otherwise".](/novelworks-docs/screenshots/if-conditions.png)

- **{ui.conditionCases.addCase}** adds a case at the end.
- The arrows on a card move the case up or down. Order matters, because the first case that holds wins.
- A button on the card removes the case. An If… always keeps at least one.

![An If… checks Case 1, then Case 2, then goes to otherwise.](/novelworks-docs/diagrams/if-order.svg)

## Conditions

A condition starts with the word "If" and checks a variable or an item. The choice **{ui.branchInspectors.whatToCheck}** (Variable or Item) appears when the Inventory feature is on.

### A variable

Pick the variable, the comparison and the value.

| Kind | Comparisons |
|---|---|
| **{ui.variables.number}** | {ui.conditionTests.is}, {ui.moments.isNot}, {ui.moments.atLeast}, {ui.moments.atMost}, {ui.moments.moreThan}, {ui.moments.lessThan} |
| **{ui.variables.yesNo}** | {ui.conditionTests.is}, {ui.moments.isNot} |

Under a Score test, a line tells you what your choices can add up to, and whether the test can ever be true. See [Where your choices can lead](/novelworks-docs/branching/reach/). If you have no variable yet, the editor says so and tells you to create one in the Variables tab.

### An item

"If the player" **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}**, or (for a stackable item) **{ui.conditionTests.hasAtLeast}** a number of that item.

### Several conditions in one case

Click **{ui.conditionCases.addTest}**. Then choose how they combine:

- **{ui.conditionCases.matchAll}**: every condition must hold ("and");
- **{ui.conditionCases.matchAny}**: one is enough ("or").

The select appears when a case has two or more conditions. To remove one, use **{ui.conditionCases.removeTest}**, which only appears when there is more than one. With one condition left, the combining choice disappears.

## Where to go

Under each case: the scene to go to. A case needs a scene (the editor warns when it has none). Then *otherwise*, which can also be "Continue (next moment)". If you pick no scene for *otherwise*, the story simply continues with the next moment.

## What the game does

- Cases are tried top to bottom. The first one that holds wins.
- If none holds, the game goes to *otherwise*, or continues if there is none.
- A winning case with no scene, or a deleted one, continues with the next moment.
- **If the game reaches a case that checks a variable or an item that was deleted or never picked, it does not guess:** it skips the whole If… and continues with the next moment, without looking at the cases below or at *otherwise*. (A case above it that holds still wins first.) In a case where only one of several conditions is needed (**{ui.conditionCases.matchAny}**), one missing thing breaks the whole case. The editor warns you about it, so fix the warning.
- Scores are compared with their current value, or their start value if the player has not changed them yet.

## Loops

If Ifs and jumps only lead back to each other (scene A goes to B, and B goes straight back to A), the game cannot go on. After 1000 automatic steps in a row it stops and shows the end screen, and the editor does not warn you. Make sure every loop contains something the player does, such as a line of dialogue or a choice.

## Try it

Under the cases, **{ui.memory.tryTitle}** lets you check your If… without playing. Pretend that a Score has a value, or that the player has a number of an item, and NovelWorks tells you where the story would go:

- "Case 2 holds: goes to …";
- "Otherwise: goes to …", or "Otherwise: continues with the next moment";
- "Pick what to check first." when a condition is not finished.

It uses the same rules as the game. With one case and one condition, there is one box; otherwise there is one box per variable or item used.

## On the timeline

A card shows the first case ("If Affection ≥ 2 → Park") and the game screen lists one line per case, then *otherwise*.

## Warnings

- Pick the variable or the item this condition checks.
- This condition checks a variable or an item that was deleted, or an item while the Inventory feature is off.
- Pick the scene to go to when the condition is true.
- When true, or otherwise, this goes to a scene that was deleted.

## The same conditions elsewhere

The conditions of an option in a [choice](/novelworks-docs/branching/choices/) use the same editor, with one difference: a condition that checks something missing counts as false (the option is hidden or locked) instead of skipping everything.
