---
title: "Le plateau : les personnages restent en place"
description: Pourquoi un personnage que vous mettez à l’écran est encore là dans les moments suivants, et comment le contrôler.
---

NovelWorks fonctionne comme un **plateau de théâtre**. Quand un personnage entre en scène, il **reste en place** jusqu’à ce que quelque chose le change. Il en va de même pour le décor : c’est le *décor de théâtre* de la scène.

![Une scène de six moments : le décor dure toute la scène, Leo est en scène pour les moments 2 et 3, Mia arrive au moment 4 et reste jusqu’à la fin.](/novelworks-docs/diagrams/stage-persistence.svg)

Seul l’**écran** se transmet d’un moment au suivant : le décor, les personnages, l’[ambiance](/novelworks-docs/fr/writing/ambience-and-animated-backgrounds/), la [caméra](/novelworks-docs/fr/writing/camera/) et les [particules](/novelworks-docs/fr/writing/effects/). Les **lignes de dialogue**, non. Chaque moment a son propre texte.

## Ce que garde un moment

Un moment ne garde pas une image complète de l’écran. Il garde seulement **ce qu’il change** : un nouveau décor, un personnage qui arrive, change d’expression ou de position, ou s’en va. L’écran que vous voyez à un moment donné, ce sont tous les changements de la scène joués dans l’ordre, en partant d’un écran vide.

Vous n’avez jamais besoin d’y penser pour commencer : ajoutez un personnage au moment 1 et il est à l’écran dans tous les moments suivants. Cela compte quand vous **changez** quelque chose en cours de route.

## « {tx.stage.scopeFollowing} » ou « {tx.stage.scopeOnlyHere} »

Dans les onglets {ui.inspectorTabs.image} et {ui.inspectorTabs.effects} d’un moment, et dans le panneau d’un personnage en scène, le sélecteur {ui.stage.scopeLabel} décide jusqu’où va votre prochain changement :

- {ui.stage.scopeFollowing} (par défaut) : le changement reste pour ce moment et les suivants, jusqu’à ce qu’un moment le change de nouveau. Comme sur un plateau.
- {ui.stage.scopeOnlyHere} : le changement ne s’applique qu’à ce moment. Les moments suivants gardent ce qu’ils montraient avant.

La première fois qu’un changement atteint d’autres moments, un court message vous le dit. Les moments atteints clignotent brièvement. Le changement entier est **une seule étape** pour Annuler, même s’il atteint beaucoup de moments.

## Voir qui est en scène

### La barre « {tx.stage.castTitle} »

Dans l’onglet {ui.inspectorTabs.image}, en haut de la section {ui.momentInspector.onStage}, la barre {ui.stage.castTitle} montre une image ronde pour chaque personnage qui est en scène à un moment de la scène, dans l’ordre de leur arrivée. Une image allumée signifie que le personnage est en scène **à ce moment**. Cliquez sur une image pour faire sortir le personnage ou le faire entrer, selon le sélecteur du dessus. La barre n’apparaît que si la scène a au moins un personnage.

### Le graphique sous les miniatures

Sous la chronologie, une rangée montre le {ui.timeline.chartBackground} et une rangée par personnage. Une barre couvre les moments où l’élément est à l’écran. Une nouvelle barre commence là où l’aspect change : une autre expression ou tenue, une autre position ou taille, une image retournée, une autre image de décor ou une autre ambiance. Pointez une barre pour lire, par exemple, « Mia reste en scène jusqu’au moment 7 », « … jusqu’à la fin de la scène » ou « … pour ce moment seulement ».

Le graphique montre jusqu’à 5 rangées et défile au-delà (moins sur une petite fenêtre).

![Sous les cartes de la chronologie, le graphique montre une barre pour chaque personnage, aussi longue que sa présence en scène.](/novelworks-docs/screenshots/stage-chart.png)

### De petites pastilles sur chaque moment

Sous chaque carte de moment, de petites pastilles listent ce que ce moment change : le décor, un personnage qui arrive, part, change d’expression ou est placé autrement, ou un changement dans l’ordre d’affichage. Quatre au maximum sont montrées, puis « +N ».

### Dans l’inspecteur

Quand un moment est sélectionné, la section {ui.momentInspector.onStage} de l’onglet {ui.inspectorTabs.image} montre une carte par personnage, avec un badge :

- {ui.momentInspector.originNew} : il arrive à ce moment.
- {ui.momentInspector.originChanged} : ce moment le change.
- « {tx.momentInspector.originFrom} » : il est repris d’un moment précédent.

Les cartes marquées {ui.momentInspector.originNew} ou {ui.momentInspector.originChanged} ont un bouton {ui.momentInspector.revert}, qui annule ce que ce moment a changé. Un personnage qui part à ce moment est listé avec {ui.momentInspector.bringBack}. {ui.momentInspector.add} met quelqu’un en scène.

## Clic droit sur un personnage

Faites un clic droit sur un personnage dans l’écran du jeu pour obtenir ces entrées :

- {ui.contextMenus.expression}, {ui.contextMenus.outfit} (quand le personnage a des tenues) et {ui.contextMenus.position}.
- {ui.contextMenus.flipHorizontally}, {ui.contextMenus.resetSize}, {ui.contextMenus.bringForward}, {ui.contextMenus.sendBackward}.
- {ui.contextMenus.stayUntil} : choisissez « {tx.contextMenus.untilMoment} » (l’un des moments suivants) ou {ui.contextMenus.untilEnd}. Le personnage garde son aspect actuel jusque-là, même à travers des moments qui le changeaient auparavant.
- {ui.contextMenus.onlyThisMoment} : ce que ce moment a changé ne continue pas. L’entrée est grisée si ce moment ne change rien pour le personnage, ou si c’est le dernier moment.
- {ui.contextMenus.backToBefore} : annule le changement de ce moment pour ce personnage.
- {ui.contextMenus.leavesHere} : le personnage part à partir de ce moment, quoi que dise le sélecteur.

## Commencer une scène comme une autre s’est terminée

Quand d’autres scènes mènent à une scène, et que l’écran à la fin de la scène précédente diffère de la façon dont celle-ci commence, une bannière apparaît dans l’onglet {ui.inspectorTabs.image} du **premier moment** de cette scène : « {tx.scene.startEmpty} » ou « {tx.scene.startWith} » Pour chaque scène qui mène ici, un bouton {ui.scene.startLike} met en scène ce qui était à l’écran au moment qui mène ici. Les moments suivants suivent, et c’est une seule étape pour Annuler.

## Ce qui se passe quand vous supprimez, déplacez, copiez ou insérez un moment

NovelWorks garde l’aspect de tous les autres moments inchangé :

- **Supprimer un moment** : ce qu’il changeait passe au moment suivant, donc tous les moments restants montrent exactement ce qu’ils montraient avant.
- **Insérer un moment** (ou appuyer sur **Entrée**) : le nouveau moment n’a aucun changement, il montre donc l’écran du moment qui le précède.
- **Dupliquer un moment** : la copie vient juste après l’original et montre le même écran.
- **Déplacer un moment** : il emporte ses propres changements avec lui. Si Mia arrive dans ce moment et que vous le déplacez à la fin, Mia arrive maintenant là, et les moments laissés derrière ne la montrent plus.
- **Supprimer un personnage ou un décor de la bibliothèque** : il disparaît partout, et rien d’autre ne change.

## Bon à savoir

- En mode Script, les mêmes règles s’appliquent : un texte que vous n’avez pas changé ne change rien.
- L’écran de chaque moment est rejoué à partir des changements, donc les miniatures, l’historique et les parties enregistrées des joueurs montrent tous le bon écran.
