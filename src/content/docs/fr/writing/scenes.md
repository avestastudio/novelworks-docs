---
title: Scènes
description: Créer, renommer, réorganiser, dupliquer et supprimer des scènes, et choisir où le jeu commence.
---

Une scène est un chapitre de votre histoire : une suite de [moments](/novelworks-docs/fr/writing/moments-and-dialogue/) joués l’un après l’autre. Les scènes se trouvent dans l’onglet **{ui.leftPanel.scenes}**. Pour la vue d’ensemble, voir [Scènes, moments et chronologie](/novelworks-docs/fr/concepts/scenes-moments-timeline/).

## Créer une scène

Cliquez sur **{ui.scenesTab.newScene}**. La scène s’appelle « Scène N », où N est le nombre de scènes que vous avez déjà plus un (ou le numéro suivant si ce nom existe), contient une ligne de dialogue vide et est sélectionnée. Si votre projet n’avait pas de scène de départ, la nouvelle scène devient la scène de départ.

## Renommer une scène

Double-cliquez sur la scène dans la liste, tapez le nom et appuyez sur **Entrée**. **Échap** annule, et un nom vide conserve l’ancien. Vous pouvez aussi utiliser **{ui.sceneInspector.name}** dans l’inspecteur, ou faire un clic droit sur la scène et choisir **{ui.contextMenus.rename}**. Une scène sans nom s’affiche comme « Scène sans titre ».

## Réorganiser les scènes

Faites glisser une scène vers le haut ou vers le bas dans la liste. L’ordre de la liste ne change pas le déroulement de l’histoire : les scènes sont reliées par des choix, des conditions, des sauts et des zones.

## Dupliquer une scène

Utilisez **{ui.scenesTab.duplicateScene}** sur la ligne, ou **{ui.contextMenus.duplicate}** dans le menu du clic droit, ou **Cmd+D** / **Ctrl+D** avec la scène sélectionnée. La copie se place juste après l’original et s’appelle par exemple « Un coup de main (copie) ». Elle garde le résumé et l’état d’écriture, ses moments reçoivent de nouvelles identités, et sa place sur la carte de l’histoire est recalculée.

## Supprimer une scène

Cliquez sur **{ui.scenesTab.deleteScene}** (ou **{ui.contextMenus.delete}** dans le menu du clic droit). NovelWorks demande toujours d’abord, et vous indique :

- combien de moments seront supprimés ;
- si c’est la scène de départ, quelle scène deviendra la scène de départ (ou que votre jeu n’aura plus aucune scène) ;
- si d’autres scènes y mènent, quels moments le font.

Les choix, conditions, sauts et zones qui menaient à une scène supprimée ne sont **pas** modifiés. Ils continuent de pointer vers rien et affichent un avertissement jusqu’à ce que vous choisissiez une autre scène. Vous pouvez annuler une suppression avec **{ui.native.menu.undo}**.

## La scène de départ

Le jeu commence à la **scène de départ**. Elle porte une étoile et l’étiquette « Scène de départ ». Pour la changer, cliquez sur le bouton étoile d’une autre scène (**{ui.scenesTab.makeStartScene}**), utilisez **{ui.contextMenus.setAsStartScene}** dans le menu du clic droit, ou utilisez le bouton de l’inspecteur de la scène.

## Ce que montre la liste

Chaque ligne de scène indique son nombre de moments. Une petite fourche avec « Branches : N » indique combien de moments laissent l’histoire aller ailleurs (voir [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/)). Une étiquette rouge **{ui.scenesTab.unreachable}** signifie que les joueurs ne peuvent pas encore y arriver : aucun choix, condition, saut ni zone n’y mène depuis la scène de départ.

## L’inspecteur de scène

Sélectionnez une scène pour voir :

- **{ui.sceneInspector.name}** ;
- **{ui.sceneInspector.summary}** : une ou deux phrases, pour vous seul. Il est affiché sur la carte de l’histoire et au-dessus de la chronologie, et jamais dans le jeu ;
- **{ui.sceneInspector.writingStatus}** : **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** ou **{ui.shared.outline.done}**. Si vous ne le définissez jamais, c’est « À écrire » tant que la scène n’a pas de texte, puis « {tx.shared.outline.draft} » ;
- le bouton de scène de départ ;
- **{ui.branches.entriesTitle}** : les endroits qui mènent à cette scène, sur lesquels vous pouvez cliquer ;
- les boutons **{ui.sceneInspector.deleteScene}** et de duplication.

## Jouer à partir d’une scène

Faites un clic droit sur une scène et choisissez **{ui.contextMenus.playFromHere}** pour jouer à partir de son premier moment (désactivé si la scène n’a aucun moment).
