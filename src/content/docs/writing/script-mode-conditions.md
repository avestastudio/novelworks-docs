---
title: "Script mode: conditions and choices"
description: Write choices, option effects, conditions with several cases, and jumps as text.
---

This page continues [Script mode: every line](/novelworks-docs/writing/script-mode-lines/). The examples use the English words; NovelWorks also understands the words of the other editor languages at the same time.

## Jumps

```
-> Park
```

A jump to the scene called Park. Players do not see this moment. If you write `->` with no name, it is a jump with no scene yet.

## Choices

```
? What now?
- Talk to her -> Park
- Leave
```

- A line starting with `?` is the question. It is optional: a line starting with `-` with no question before it starts a choice with no question.
- Each line starting with `-` is an option. `-> Park` after the text is the scene the option leads to (the part after the **last** `->`). An option with no `->` lets the story go on.
- A choice made of the question only, with no options, is read as such. A choice needs at least two options to work in the game.

### What an option changes

Indented lines under an option are what it changes:

```
- Give her the flower -> Park
  + Affection 1
  = MetMia true
  give : Key
  remove : Coin
```

| Line | Meaning |
|---|---|
| `+ Affection 1` | Adds 1 to the Score called Affection. |
| `= MetMia true` | Sets MetMia. The value is a number, or `true` / `false` (`yes` / `no` also work). |
| `give : Key` (`give : Key x3`) | Gives the player an item. |
| `remove : Key` | Takes an item away. |

Any other indented line is flagged and ignored.

### An option that appears only sometimes

```
- Open the door -> Hall
  if item Key, locked
```

An indented `if` line under an option says when it is available. Add `, locked` to show the option greyed out when it is not available. Without it, the option is hidden. See [How a story branches](/novelworks-docs/concepts/how-stories-branch/): players always keep a way to go on.

## Tests

A condition tests a variable or an item:

| Test | Meaning |
|---|---|
| `Affection >= 3` | The Score Affection is at least 3. |
| `MetMia = true` | The Fact MetMia is Yes. |
| `item Key` | The player has a Key. |
| `item Coin x3` | The player has at least 3 Coins. |
| `without Key` | The player does not have a Key. |

For a Score you can use `=` (or `==`), `!=` (or `≠`), `>`, `>=` (or `≥`), `<` and `<=` (or `≤`). For a Fact, `=` and `!=`. A number with a decimal comma is accepted.

## Conditions: an If… moment

```
if Affection >= 3 -> Park, else -> Nothing
```

Where to go when the condition holds, and, after `, else ->`, where to go if it does not. Both parts are optional. Players do not see this moment.

### Several cases

Put each case on its own line. The first case that holds wins:

```
if Affection >= 5 -> Park
else if Affection >= 2 -> Station
else -> Nothing
```

- `else if …` adds a case. `else -> …` is where to go when no case holds.
- These lines must follow each other, with no blank line between, and nothing can follow the final `else`. An `else` line that does not continue a condition is ordinary text.
- If no scene is written after the final `else`, the story continues with the next moment.

![An If… checks Case 1, then Case 2, then goes to otherwise.](/novelworks-docs/diagrams/if-order.svg)

### Several tests in one case

```
if Affection >= 3 and item Key -> Park
if MetMia = true or item Letter -> Library
```

Use `and` when all the tests must hold, `or` when one is enough. **Do not mix `and` and `or` on one line:** NovelWorks flags it and uses only the first kind.

## If a name does not exist yet

An unknown scene, variable or item is underlined. A quick fix, or **{ui.scriptMode.createMissing_other}**, creates it. See [Script mode: the basics](/novelworks-docs/writing/script-mode/).
