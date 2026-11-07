---
title: Carte
description: Laissez les joueurs choisir où aller sur une carte faite d’une image et de lieux cliquables.
---

Avec la fonctionnalité **{ui.shared.features.map}** activée, les joueurs ouvrent une carte et choisissent où aller. Une carte est une image de votre monde avec des **lieux** dessus. Chaque lieu mène à une scène. Activez-la dans la [bibliothèque de fonctionnalités](/novelworks-docs/fr/features/features-panel/).

## Ouvrir l’espace de travail Carte

Cliquez sur **{ui.leftPanel.map}** dans le panneau de gauche (ou sur **{ui.mapSettings.editMap}** dans la bibliothèque de fonctionnalités). L’espace de travail Carte a une liste de lieux à gauche, la carte au milieu et les réglages à droite. **{ui.mapMode.backToStory}** ramène au mode Histoire.

La carte est stockée comme une scène cachée : elle n’apparaît ni dans l’onglet Scènes ni sur la carte de l’histoire.

### Créer la carte

Sans carte pour l’instant, **{ui.mapMode.createYourMap}** dit : « {tx.mapMode.chooseAPictureOfYourWorldThen} » Cliquez sur **{ui.mapMode.addAMapBackground}** et choisissez un arrière-plan ou une CG. Plus tard, **{ui.mapMode.changeBackground}** le change.

## Ajouter des lieux

Cliquez sur **{ui.mapMode.addLocation}** et faites glisser sur la carte pour dessiner un lieu. Pour une **{ui.explorationCanvas.shape}** personnalisée, choisissez **forme**, cliquez sur ses coins, puis appuyez sur **Entrée**. Faites glisser un lieu pour le déplacer, ou ses poignées pour le redimensionner. Sélectionnez un lieu pour le modifier.

### Ce qu’a un lieu

- **{ui.mapMode.name}** : pour vous.
- **{ui.mapMode.sceneToPlay}** : la scène vers laquelle il mène. Vous pouvez en choisir une, ou **{ui.mapMode.createAScene}** (cela demande un nom, crée une scène et la relie). **{ui.mapMode.editScene}** l’ouvre.
- **{ui.mapMode.returnToMapWhenFinished}** : le joueur revient à la carte après cette scène et les scènes auxquelles elle mène. Un moment Fin termine toujours le jeu.
- **{ui.mapMode.availability}** :
  - **{ui.mapMode.availableUnderACondition}** : une condition sur une variable ou un objet. **{ui.mapMode.otherwise}** vous pouvez **{ui.mapMode.hideLocation}** ou **{ui.mapMode.showAsLocked}**, et pour un lieu verrouillé écrire un **{ui.mapMode.messageWhenLocked}** (vide, il ne se passe rien).
- **{ui.mapMode.appearanceAndVisits}** : un **{ui.mapMode.labelOnHover}**, une **{ui.mapMode.highlight}** (**{ui.mapMode.glow}**, **{ui.mapMode.outline}** ou **{ui.mapMode.none}**) et **{ui.mapMode.visitOnlyOnce}** (un lieu visité une fois reste visible mais ne peut plus être utilisé).
- **{ui.mapMode.duplicate}** et **{ui.mapMode.delete}**.

Un lieu est une zone d’exploration : un lieu qui garde une interaction personnalisée d’un ancien projet se modifie donc comme une zone (voir [Exploration](/novelworks-docs/fr/features/exploration/)). La liste de gauche a aussi des sections repliables **Décorations** (des accessoires placés sur la carte) et **{ui.leftPanel.characters}**. Un encadré « Vérifier la carte » en bas des réglages liste les problèmes.

## Quand les joueurs peuvent-ils ouvrir la carte ?

Dans les réglages de la carte (aucun lieu sélectionné), **{ui.mapMode.mapButtonAvailable}** :

| Réglage | Ce que cela signifie |
|---|---|
| **{ui.map.fromTheStart}** | Les joueurs peuvent ouvrir la carte avec son bouton dès le début du jeu. |
| **{ui.map.afterFirstShown}** | Le bouton Carte apparaît après que l’histoire a atteint pour la première fois un moment « {tx.moments.showMap} ». |
| **{ui.map.storyOnly}** | Seul un moment « {tx.moments.showMap} » de votre histoire ouvre la carte. Aucun bouton Carte n’est affiché. |

### Le moment « {tx.moments.showMap} »

Ajoutez un moment **{ui.moments.showMap}** à une scène pour ouvrir la carte immédiatement. Il fait aussi apparaître le bouton Carte quand le réglage est « {tx.map.afterFirstShown} ». Les joueurs ne voient pas le moment lui-même, et les moments placés après lui dans la même scène ne peuvent jamais être atteints. Une carte ouverte ainsi n’a pas de bouton Retour : le joueur doit choisir une destination.

Une carte ouverte avec son bouton a un bouton **{rt.game.back}** qui ramène le joueur exactement au moment où il se trouvait.

## Ce qui se passe quand un joueur choisit un lieu

Le jeu va à la scène du lieu. Si **{ui.mapMode.returnToMapWhenFinished}** est activé, le joueur revient à la carte quand l’histoire s’arrête. Un lieu sans scène ne fait rien. Voir aussi [Bouton Carte](/novelworks-docs/fr/game-ui/map-button/) pour l’apparence du bouton, ainsi que la touche **M** et l’entrée du menu pause qui ouvrent aussi la carte.

## Tester

- Dans l’espace de travail Carte, **{ui.topBar.testMap}** de la barre du haut (et le bouton du même nom dans les réglages de la carte) lance le jeu à partir de la carte.
- En mode Jeu, **{ui.playOverlay.openMap}** ouvre la carte même si les joueurs ne pouvaient pas encore l’ouvrir à ce stade ; Retour ramène là où vous étiez.

## Avertissements

- La fonctionnalité Carte est désactivée : un moment « {tx.moments.showMap} » ne fait rien.
- Créez votre carte et ajoutez un arrière-plan ; le moment de la carte a été supprimé ou n’est plus une exploration.
- Les joueurs ne peuvent jamais ouvrir la carte : le jeu n’a pas de scène de départ, ou le bouton attend un moment « {tx.moments.showMap} » qui ne peut pas être atteint.
- Ajoutez une image d’arrière-plan dans Carte.
- Un lieu mène à une scène mais aucune n’est choisie, ou à une scène qui a été supprimée.
- Dessinez au moins une zone sur laquelle le joueur peut cliquer.
