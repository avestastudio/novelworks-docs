---
title: Mettre en scène une scène
description: Choisir le décor, placer des personnages à l’écran, les positionner, les redimensionner, les retourner et les ordonner.
---

Mettre en scène, c’est décider de ce que le joueur voit derrière le texte : le décor et les personnages. Tout se passe sur l’écran du jeu, dans le mode **{ui.topBar.story}**, vue Visuel. Avant de commencer, lisez [Le plateau](/novelworks-docs/fr/concepts/stage/) : ce que vous réglez à un moment se poursuit aux suivants. Pour un aperçu des onglets à droite, voir [Le panneau du moment](/novelworks-docs/fr/writing/moment-panel/).

## Choisir jusqu’où va un changement

Le sélecteur **{ui.stage.scopeLabel}** a deux réglages : **{ui.stage.scopeFollowing}** (par défaut) et **{ui.stage.scopeOnlyHere}**. Il se trouve dans les onglets **{ui.inspectorTabs.image}** et **{ui.inspectorTabs.effects}** d’un moment, et dans le panneau d’un personnage en scène. Réglez-le avant de changer quelque chose. Les moments touchés par un changement clignotent brièvement dans la chronologie, et sur l’écran du jeu les personnages sont marqués **{ui.stage.markNew}** ou **{ui.stage.markChanged}**.

## Le décor

- Cliquez sur le bouton de décor au-dessus de l’écran du jeu (« {ui.stage.chooseTheBackgroundOfThisMoment} »), ou sur **{ui.momentInspector.change}** dans l’onglet **{ui.inspectorTabs.image}**. Le sélecteur propose vos décors et vos CG, et un moyen d’importer tout de suite une nouvelle image ou un [décor animé](/novelworks-docs/fr/writing/ambience-and-animated-backgrounds/). **{ui.momentInspector.noneBlackScreen}** donne un écran noir.
- **{ui.momentInspector.applyToTheFollowingMoments}**, dans l’onglet **{ui.inspectorTabs.image}**, donne le décor de ce moment à tous les moments suivants de la scène, après vous avoir demandé de confirmer. C’est désactivé sur le dernier moment.

Une scène vide affiche **{ui.stage.chooseBackground}** sur l’écran du jeu. Le même onglet contient aussi l’[ambiance](/novelworks-docs/fr/writing/ambience-and-animated-backgrounds/) du moment.

## Mettre un personnage en scène

Cliquez sur **{ui.stageControls.character}** au-dessus de l’écran du jeu (« {ui.stageControls.putACharacterOnStage} »), ou sur **{ui.momentInspector.add}** dans la section **{ui.momentInspector.onStage}** de l’onglet **{ui.inspectorTabs.image}**. La liste montre vos personnages ; ceux qui sont déjà en scène sont désactivés. Si vous n’en avez aucun, **{ui.stageControls.newCharacter}** en crée un.

Le personnage va à la première place libre parmi le centre, la gauche et la droite, au bord inférieur. Si les trois places sont prises, le nouveau personnage est placé près du milieu, un peu à côté des autres, et les personnages peuvent se chevaucher : faites-les glisser où vous voulez. La barre **{ui.stage.castTitle}** de cette section permet aussi de mettre des personnages en scène ou de les retirer d’un clic.

## Sélectionner, déplacer et redimensionner

- **Cliquez** sur un personnage de l’écran du jeu pour le sélectionner. Une petite barre apparaît au-dessus de lui avec son expression et sa tenue, et l’inspecteur affiche **{ui.inspector.characterOnStage}** : tous ses détails. **{ui.stageCharacterInspector.backToTheMoment}** revient aux onglets du moment.
- **Faites-le glisser** pour le déplacer n’importe où. Il s’aimante à Gauche, Centre et Droite, et au bord inférieur, quand vous vous en approchez. Tout le glissement forme une seule étape d’annulation.
- **Faites glisser un coin** pour le redimensionner (**{ui.stage.dragToResize}**). Les pieds restent en place. La taille va de 30 % à 200 %.

## Placer, retourner et ordonner

La barre au-dessus du personnage ne garde que l’expression et la tenue (la tenue apparaît quand le personnage a des tenues). Le reste se trouve dans l’inspecteur, une fois le personnage sélectionné (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**) :

| Commande | Ce qu’elle fait |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Change l’expression. Celle par défaut porte une étoile. Si le personnage n’a pas d’expressions, un bouton vous mène à l’onglet Personnages. |
| **{ui.stageControls.outfit}** | Change la tenue. Voir [Tenues et garde-robe](/novelworks-docs/fr/writing/outfits/). |
| {ui.scenes.left} / {ui.scenes.center} / {ui.scenes.right} | Met le personnage à l’une des trois places en bas de l’écran. Il garde sa taille et son sens. |
| **{ui.stageCharacterInspector.flippedHorizontallyFacingTheOtherWay}** | Tourne le personnage pour qu’il regarde de l’autre côté. |
| **{ui.stageCharacterInspector.forward}** / **{ui.stageCharacterInspector.backward}** | Met le personnage devant ou derrière un autre. La boîte de dialogue est toujours au-dessus. |
| **{ui.stageCharacterInspector.removeFromStage}** | Retire le personnage du plateau, selon le sélecteur **{ui.stage.scopeLabel}**. |

L’inspecteur a aussi un curseur **{ui.stageCharacterInspector.size}** et un bouton pour modifier le nom et les expressions du personnage.

Vous pouvez aussi faire un clic droit sur un personnage pour l’expression, la tenue, la position, le retournement et l’ordre, plus **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** et **{ui.contextMenus.leavesHere}** ; elles sont expliquées dans [Le plateau](/novelworks-docs/fr/concepts/stage/).

Pour retirer un personnage sélectionné, vous pouvez aussi appuyer sur `Delete` ou `Backspace`. Les flèches du clavier ne déplacent pas les personnages : elles se déplacent entre les moments.

## Commencer une scène comme une autre s’est terminée

Sur le premier moment d’une scène vers laquelle d’autres scènes mènent, une bannière dans l’onglet **{ui.inspectorTabs.image}** peut proposer de commencer avec ce qui était à l’écran à la fin de la scène précédente. Voir [Le plateau](/novelworks-docs/fr/concepts/stage/).

## Pendant que vous modifiez

- L’écran du jeu est toujours mis à l’échelle pour tenir dans la fenêtre.
- Un personnage sans image est dessiné comme un contour en pointillés avec « {tx.render.noPicture} », pour que vous puissiez quand même le placer. Dans le jeu, un tel personnage n’est pas dessiné.
- La boîte de dialogue est remplacée par des champs modifiables pendant que vous éditez.

