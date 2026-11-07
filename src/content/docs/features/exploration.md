---
title: Exploration
description: "Point-and-click scenes: zones the player clicks to look around, collect items or move on."
---

An **{ui.moments.exploration}** moment has **no text box**: the player looks at a picture and clicks the **zones** you draw on it. A zone can show a line of text, change a variable, give an item, or lead to another scene. It is always available: no feature to turn on.

## Add one

In the timeline, add an **{ui.moments.exploration}** moment. It starts empty and uses the background of the moment before it. Select it: the inspector shows **{ui.explorationInspectors.zones}** and **{ui.explorationInspectors.props}** with **+ Zone** and **+ Prop**.

![An Exploration moment: the zones drawn on the picture, and the list of zones and props in the inspector.](/novelworks-docs/screenshots/exploration-editor.png)

## Draw zones

Above the game screen, choose **{ui.explorationCanvas.drawZonesAs}**: **{ui.explorationCanvas.rectangle}** or **{ui.explorationCanvas.shape}**. (On a narrow window, they are in the **{ui.stage.more}** menu.)

- **{ui.explorationCanvas.rectangle}**: drag on the picture. A plain click makes nothing, and a zone smaller than 2 % of the screen is not created.
- **{ui.explorationCanvas.shape}**: click point by point around an object. Close the shape by clicking the first point again, or by pressing **Enter**. **Esc** cancels. At least three points are needed.

A zone is selected right after you draw it. Drag it to move it. A rectangle has eight handles to resize it, and a shape has a handle on every point. You can also use **+ Zone** to add a rectangle in the middle of the screen.

Right-click a zone for **{ui.contextMenus.duplicateZone}** and **{ui.contextMenus.deleteZone}**, or use **Cmd+D** / **Ctrl+D** to duplicate and `Delete` to delete. A copy is placed a little lower and to the right, named "… (copy)". Each edit is one undo step.

## The zone inspector

- **{ui.explorationInspectors.name}**: only for you, to find the zone. Players never see it. New zones are "Zone 1", "Zone 2"…
- **{ui.explorationInspectors.label}**: shown when the pointer is over the zone (on phones: first tap).
- **{ui.explorationInspectors.highlight}**: None, Glow (default) or Outline.
- **{ui.explorationInspectors.whenClicked}**, the action:

| Action | What it does |
|---|---|
| Examine (default) | Shows a line of text, from the narrator or a character you choose. The next click goes back to exploring. |
| Go to scene | Leaves the exploration for that scene. |
| Continue | Leaves the exploration and goes on with the next moment of this scene. |
| Change a variable | Adds to a Score or sets a variable. Other zones that depend on it appear, disappear or unlock right away. |
| Pick up an item | Puts an item in the inventory, with a notice. The zone and its props then disappear for good. (Inventory feature.) |
| Use an item | Checks the inventory. Choose **{ui.explorationInspectors.itemToUse}**, whether it **uses it up**, and a result **{ui.explorationInspectors.whenThePlayerHasIt}** (Examine, Go to scene, Continue or Change a variable). **{ui.explorationInspectors.withoutItOptional}** is the line shown when the player does not have it; if empty, nothing happens. (Inventory feature.) |

- **{ui.explorationInspectors.works}**: **{ui.explorationInspectors.everyTime}** or **{ui.explorationInspectors.onceOnly}** (after its first use the zone does nothing more, in this playthrough).
- **A condition**: "{tx.explorationInspectors.onlyAvailableWhenAVariableOrAn}". When it is not true, **{ui.explorationInspectors.otherwise}**: **Hidden** (the zone and its props cannot be seen or clicked) or **Locked** (it shows its label but cannot be used, with an optional line shown when clicked).

## Props

**{ui.explorationInspectors.props}** are pictures of objects (a key, a letter, a vase) placed on the stage. They are not clickable: link a prop to a zone to hide them together.

- **+ Prop** opens "{tx.explorationInspectors.chooseAProp}" (pictures of type Prop, with an import option). A new prop goes in the center.
- Drag a prop to move it, or a corner to resize it. In the inspector, **{ui.explorationInspectors.size}** is a width of 2 to 100 % of the screen.
- **{ui.explorationInspectors.hiddenWithZone}**: when that zone is hidden by its condition, the prop is hidden too. **{ui.explorationInspectors.addAZoneAroundIt}** adds a zone around the prop.
- **{ui.explorationInspectors.forward}** and **{ui.explorationInspectors.backward}** change which prop is in front. **{ui.explorationInspectors.removeProp}** deletes it.
- Props are drawn behind the characters and above the background.

## How players see it

- Zones are **invisible** until the pointer is over them (or they are focused, or tapped once on a touch screen). Then the highlight shows, and the label appears in a small tag.
- The cursor becomes a pointer over a zone, and a "not allowed" cursor over a locked one.
- While a line of text is shown, zones do nothing: any click closes the line.
- On a touch screen, with a label the first tap shows the label and the second tap acts. Without a label, one tap acts.
- With the keyboard, **Tab** moves between zones and **Enter** uses one. Screen readers read the label, or "Something to look at 1", and "(locked)" for a locked zone.

**There is no "all done" exit.** The player stays in the exploration until they click a zone that goes to a scene, or Continue. Make sure at least one zone does.

## Warnings

- Draw at least one zone for the player to click.
- **Players can get stuck here**: no zone they can click leads to another scene or continues the story.
- A zone goes to a scene but none is picked, or to a deleted scene; has nothing to say (when examined, or when an item is used); is examined by a deleted character; changes a variable that is not picked or was deleted.
- A zone's condition checks a variable or an item that is not picked, was deleted, or whose Inventory feature is off.
- A pick-up or use-item zone uses an item that is not picked, was deleted, or whose Inventory feature is off.
- A zone needs an item that players can never get, or can never be used because its condition is never true.
- A prop has no picture, or is linked to a deleted zone.
- Moments placed after an exploration with no Continue zone can never be reached.
- On the map, "{tx.shared.map.addABackgroundImageInMap}" and "Players can never open the map…" (see [Map](/novelworks-docs/features/map/)).

## Elsewhere

- On the [story map](/novelworks-docs/branching/story-map/), zones that go to a scene (including the result of "{tx.shared.exploration.useAnItem}") are arrows labeled with the zone's name. A zone that only continues stays inside the scene: no arrow.
- In [Script mode](/novelworks-docs/writing/script-mode-lines/), an exploration is a single line `exploration : 3 zones`. Zones and props are edited only in the Visual view, and are kept when you edit the text.
- The [Map](/novelworks-docs/features/map/) uses the same zones, as locations.
