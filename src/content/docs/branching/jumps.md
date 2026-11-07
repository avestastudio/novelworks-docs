---
title: Jumps
description: Go straight to another scene, for example to bring two branches back together.
---

A **{ui.moments.jump}** moment sends the story straight to another scene. Players do not see it: the game enters the other scene at its first moment, and shows nothing in between. Use it to bring two branches back together, or to move on to the next scene.

## Set it up

Select the Jump moment. In the inspector, choose the scene in **{ui.branchInspectors.goTo}**. Unlike an option of a choice, a jump has no "continue" entry: it needs a scene. On the timeline the card reads "Go to Park".

## Good to know

- A jump is an **exit** of its scene. Moments placed after it can never be reached, and the editor warns about them ("Players never see this moment…").
- If the target scene was deleted, or none is picked, the editor warns you. In the game, such a jump continues with the next moment of the scene.
- A scene can end with only one jump. On the story map, linking a scene that already ends with a jump is refused.
- On the [story map](/novelworks-docs/branching/story-map/), a jump is an arrow labeled "jump".
- Jumps also exist in [Script mode](/novelworks-docs/writing/script-mode-conditions/) as `-> Park`.
