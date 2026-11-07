---
title: Map
description: Let players pick where to go on a map made of a picture and clickable locations.
---

With the **{ui.shared.features.map}** feature on, players open a map and pick where to go. A map is a picture of your world with **locations** on it. Each location leads to a scene. Turn it on in the [Features library](/novelworks-docs/features/features-panel/).

## Open the Map workspace

Click **{ui.leftPanel.map}** in the left panel (or **{ui.mapSettings.editMap}** in the Features library). The Map workspace has a list of locations on the left, the map in the middle and the settings on the right. **{ui.mapMode.backToStory}** returns to the Story mode.

The map is stored as a hidden scene: it does not appear in the Scenes tab or on the story map.

### Create the map

With no map yet, **{ui.mapMode.createYourMap}** says: "{tx.mapMode.chooseAPictureOfYourWorldThen}" Click **{ui.mapMode.addAMapBackground}** and pick a background or a CG. Later, **{ui.mapMode.changeBackground}** changes it.

## Add locations

Click **{ui.mapMode.addLocation}** and drag on the map to draw a location. For a custom shape, choose **{ui.explorationCanvas.shape}**, click its corners, then press **Enter**. Drag a location to move it, or its handles to resize it. Select a location to edit it.

### What a location has

- **{ui.mapMode.name}**: for you.
- **{ui.mapMode.sceneToPlay}**: the scene it leads to. You can pick one, or **{ui.mapMode.createAScene}** (it asks for a name, creates a scene and links it). **{ui.mapMode.editScene}** opens it.
- **{ui.mapMode.returnToMapWhenFinished}**: the player goes back to the map after this scene and any scenes it leads to. An Ending moment still ends the game.
- **{ui.mapMode.availability}**:
  - **{ui.mapMode.availableUnderACondition}**: a variable or item condition. **{ui.mapMode.otherwise}** you can **{ui.mapMode.hideLocation}** or **{ui.mapMode.showAsLocked}**, and for a locked one write a **{ui.mapMode.messageWhenLocked}** (empty means nothing happens).
- **{ui.mapMode.appearanceAndVisits}**: a **{ui.mapMode.labelOnHover}**, a **{ui.mapMode.highlight}** (**{ui.mapMode.glow}**, **{ui.mapMode.outline}** or **{ui.mapMode.none}**) and **{ui.mapMode.visitOnlyOnce}** (a location visited once stays visible but cannot be used again).
- **{ui.mapMode.duplicate}** and **{ui.mapMode.delete}**.

A location is an exploration zone, so a location that keeps a custom interaction from an older project is edited like a zone (see [Exploration](/novelworks-docs/features/exploration/)). The list on the left also has collapsible **Decorations** (props placed on the map) and **{ui.leftPanel.characters}** sections. A "Check your map" box at the bottom of the settings lists problems.

## When can players open the map?

In the map settings (no location selected), **{ui.mapMode.mapButtonAvailable}**:

| Setting | What it means |
|---|---|
| **{ui.map.fromTheStart}** | Players can open the map with its button from the start of the game. |
| **{ui.map.afterFirstShown}** | The Map button appears after the story first reaches a "{tx.moments.showMap}" moment. |
| **{ui.map.storyOnly}** | Only a "{tx.moments.showMap}" moment in your story opens the map. No Map button is shown. |

### The "{tx.moments.showMap}" moment

Add a **{ui.moments.showMap}** moment to a scene to open the map right away. It also makes the Map button appear when the setting is "{tx.map.afterFirstShown}". Players do not see the moment itself, and moments placed after it in the same scene can never be reached. A map opened this way has no Back button: the player must choose a destination.

A map opened with its button has a **{rt.game.back}** button that returns the player to the exact moment where they were.

## What happens when a player picks a location

The game goes to the location's scene. If **{ui.mapMode.returnToMapWhenFinished}** is on, the player goes back to the map when the story runs out. A location with no scene does nothing. See also [Map button](/novelworks-docs/game-ui/map-button/) for the button's look, and the **M** key and pause-menu entry that also open the map.

## Testing

- In the Map workspace, the top bar's **{ui.topBar.testMap}** (and the button of the same name in the map settings) plays starting from the map.
- In Play mode, **{ui.playOverlay.openMap}** opens the map even if players could not open it yet at that point; Back returns to where you were.

## Warnings

- The Map feature is off: a "{tx.moments.showMap}" moment does nothing.
- Create your map and add a background; the map moment was deleted or is no longer an exploration.
- Players can never open the map: the game has no start scene, or the button is waiting for a "{tx.moments.showMap}" moment that cannot be reached.
- Add a background image in Map.
- A location goes to a scene but none is picked, or to a scene that was deleted.
- Draw at least one zone for the player to click.
