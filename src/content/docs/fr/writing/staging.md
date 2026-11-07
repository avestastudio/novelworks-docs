---
title: Mettre en scène une scène
description: Choisissez le décor, placez des personnages à l'écran, puis déplacez-les, redimensionnez-les, retournez-les et ordonnez-les.
---

Mettre en scène, c'est décider de ce que le joueur voit derrière le texte : le décor et les personnages. Tout se passe sur l'écran du jeu, dans le mode **{ui.topBar.story}**, vue Visuel. Avant de commencer, lisez [La scène](/novelworks-docs/fr/concepts/stage/) : ce que vous réglez à un moment se poursuit dans les suivants.

## Choisir jusqu'où va un changement

Au-dessus de l'écran du jeu, **{ui.stage.scopeLabel}** a deux réglages : **{ui.stage.scopeFollowing}** (par défaut) et **{ui.stage.scopeOnlyHere}**. Réglez-le avant de changer quelque chose. Les moments touchés par un changement clignotent brièvement dans la chronologie, et sur l'écran du jeu les personnages sont marqués **{ui.stage.markNew}** ou **{ui.stage.markChanged}**.

## Le décor

- Cliquez sur le bouton de décor au-dessus de l'écran du jeu (« {ui.stage.chooseTheBackgroundOfThisMoment} »), ou sur **{ui.momentInspector.change}** dans l'inspecteur. Le sélecteur propose vos décors et vos CG, et un moyen d'importer tout de suite une nouvelle image. **{ui.momentInspector.noneBlackScreen}** donne un écran noir.
- **{ui.stage.applyToTheFollowingMoments}** donne le décor de ce moment à tous les moments suivants de la scène, après vous avoir demandé de confirmer. Il est désactivé sur le dernier moment.

Une scène vide affiche **{ui.stage.chooseBackground}** sur l'écran du jeu.

## Mettre un personnage en scène

Cliquez sur **{ui.stageControls.character}** au-dessus de l'écran du jeu (« {ui.stageControls.putACharacterOnStage} »), ou sur **{ui.momentInspector.add}** dans la section **{ui.momentInspector.onStage}** de l'inspecteur. La liste montre vos personnages ; ceux qui sont déjà en scène sont désactivés. Si vous n'en avez aucun, **{ui.stageControls.newCharacter}** en crée un.

Le personnage va à la première place libre parmi le centre, la gauche et la droite, au bord inférieur. Si les trois places sont prises, le nouveau personnage est placé près du milieu, un peu à côté des autres, et les personnages peuvent se chevaucher : faites-les glisser où vous voulez. La barre **{ui.stage.castTitle}** au-dessus de l'écran du jeu permet aussi de mettre des personnages en scène ou de les retirer d'un clic.

## Sélectionner, déplacer et redimensionner

- **Cliquez** sur un personnage de l'écran du jeu pour le sélectionner. Une petite barre d'outils apparaît au-dessus de lui, et l'inspecteur montre ses réglages.
- **Faites-le glisser** pour le déplacer où vous voulez. Il s'aimante à Gauche, Centre et Droite, et au bord inférieur, quand vous vous en approchez. Tout le glissement compte pour une seule étape d'annulation.
- **Faites glisser un coin** pour le redimensionner (**{ui.stage.dragToResize}**). Les pieds restent en place. La taille va de 30 % à 200 %.

## Placer, retourner et ordonner

Dans la barre d'outils au-dessus du personnage, ou dans l'inspecteur (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**) :

| Commande | Ce qu'elle fait |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Change l'expression. Celle par défaut a une étoile. Si le personnage n'a aucune expression, un bouton vous amène à l'onglet Personnages. |
| Gauche / Centre / Droite | Place le personnage sur l'une des trois places au bas de l'écran. Il garde sa taille et sa direction. |
| **{ui.stage.flipHorizontally}** | Tourne le personnage pour qu'il regarde de l'autre côté. |
| **{ui.stage.bringForward}** / **{ui.stage.sendBackward}** | Place le personnage devant ou derrière un autre. La boîte de dialogue est toujours au premier plan. |
| **{ui.stage.removeFromStage}** | Retire le personnage de la scène, à partir de ce moment. |

L'inspecteur a aussi un curseur **{ui.stageCharacterInspector.size}** et un bouton pour modifier le nom et les expressions du personnage.

Vous pouvez aussi faire un clic droit sur un personnage pour les mêmes commandes, plus **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** et **{ui.contextMenus.leavesHere}** ; elles sont expliquées dans [La scène](/novelworks-docs/fr/concepts/stage/).

Pour retirer un personnage sélectionné, vous pouvez aussi appuyer sur `Delete` ou `Backspace`. Les flèches ne déplacent pas les personnages : elles servent à passer d'un moment à l'autre.

## Commencer une scène comme une autre s'est terminée

Sur le premier moment d'une scène vers laquelle d'autres scènes mènent, un bandeau peut proposer de commencer avec ce qui était à l'écran à la fin de la scène précédente. Voir [La scène](/novelworks-docs/fr/concepts/stage/).

## Pendant que vous modifiez

- L'écran du jeu est toujours mis à l'échelle pour tenir dans la fenêtre. Un badge indique le pourcentage (« Ajusté · 65 % »).
- Un personnage sans image est dessiné comme un contour en pointillés avec « (pas d'image) », pour que vous puissiez quand même le placer. Dans le jeu, un tel personnage n'est pas dessiné.
- La boîte de dialogue est remplacée par des champs modifiables pendant que vous éditez, et les zones sont masquées.
- Dans une fenêtre étroite, certains outils de la barre d'outils sont regroupés dans un menu **{ui.stage.more}**.
