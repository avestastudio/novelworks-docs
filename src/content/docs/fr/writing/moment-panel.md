---
title: Le panneau du moment
description: Les onglets Texte, Image, Effets et Son d’un moment, les boutons sous la chronologie et les outils au-dessus de l’écran du jeu.
---

Sélectionnez un moment dans la chronologie : le panneau de droite affiche ses réglages, dans quatre onglets. Si vous cliquez sur un personnage de l’écran du jeu, le panneau affiche ce personnage à la place. {ui.stageCharacterInspector.backToTheMoment} ramène les onglets.

Si le moment a un problème, un encadré au-dessus des onglets vous dit ce qui ne va pas.

## Les quatre onglets

| Onglet | Ce que vous y réglez |
|---|---|
| {ui.inspectorTabs.text} | Ce qui se lit : qui parle et ce qui est dit, ou les réglages d’un choix, d’une condition ou d’une autre sorte de moment. Votre note personnelle. |
| {ui.inspectorTabs.image} | Ce qui se voit : le décor, l’ambiance et les personnages en scène. |
| {ui.inspectorTabs.effects} | Ce qui bouge : la caméra et les effets. |
| {ui.sound.tab} | Ce qui s’entend : la musique, l’ambiance sonore, les bruitages et la voix de la réplique. |

Un petit point sur un onglet vous indique qu’il contient quelque chose :

- {ui.inspectorTabs.effects} a un point quand ce moment a une caméra, un premier plan, des particules ou des effets. La caméra, le premier plan et les particules se poursuivent aux moments suivants : le point peut donc aussi venir d’un moment précédent.
- {ui.sound.tab} a un point quand ce moment a un réglage de son qui lui est propre.
- {ui.inspectorTabs.text} et {ui.inspectorTabs.image} n’ont jamais de point.

## Texte

![L’onglet Texte d’un moment de dialogue, avec le personnage qui parle, la réplique, les boutons d’insertion et la note.](/novelworks-docs/screenshots/moment-text-tab.png)

Sur un moment de dialogue, vous trouvez {ui.momentInspector.speaker}, {ui.momentInspector.text} et les boutons {ui.richText.insert}. Voir [Mettre en forme votre texte](/novelworks-docs/fr/writing/rich-text/).

Sur les autres sortes de moments, le haut de l’onglet contient les réglages de cette sorte.

En vue Visuel, l’onglet montre ensuite où mène le moment et, sur le premier moment d’une scène, ce qui y mène. En dessous viennent {ui.momentInspector.note} et {ui.momentInspector.script}, qui montre comment le moment s’écrit en [mode Script](/novelworks-docs/fr/writing/script-mode/).

## Image

![L’onglet Image, avec la portée des changements, le décor, les vignettes d’ambiance et les personnages en scène.](/novelworks-docs/screenshots/moment-image-tab.png)

De haut en bas :

- {ui.stage.scopeLabel} : {ui.stage.scopeFollowing} ou {ui.stage.scopeOnlyHere}. Voir [Le plateau](/novelworks-docs/fr/concepts/stage/).
- {ui.momentInspector.background} : voir [Mettre en scène une scène](/novelworks-docs/fr/writing/staging/).
- {ui.ambience.title} : voir [Ambiance et décors animés](/novelworks-docs/fr/writing/ambience-and-animated-backgrounds/).
- {ui.momentInspector.onStage} : les personnages en scène, avec leur expression et leur place.

## Effets

![L’onglet Effets, avec un petit aperçu de ce que voit le joueur et les boutons qui ouvrent la caméra et les effets.](/novelworks-docs/screenshots/moment-effects-tab.png)

L’onglet commence par le même réglage {ui.stage.scopeLabel}. Ensuite :

- {ui.camera.title} : un petit aperçu de ce que voit le joueur, et {ui.camera.open}. Voir [La caméra](/novelworks-docs/fr/writing/camera/).
- {ui.effects.title} : les effets de ce moment, et {ui.effects.open}. Voir [Effets](/novelworks-docs/fr/writing/effects/).

## Son

L’onglet est expliqué dans [Son et musique](/novelworks-docs/fr/writing/sound/).

## Sous la chronologie

- Le bouton avec un signe plus, {ui.moments.dialogue}, ajoute en un clic une ligne de dialogue après le moment sélectionné.
- {ui.timeline.addOther} ouvre la liste des autres sortes de moments, chacune avec une phrase qui dit à quoi elle sert. Deux d’entre elles n’apparaissent que si la [fonctionnalité](/novelworks-docs/fr/features/features-panel/) correspondante est activée : {ui.moments.item} (Inventaire) et {ui.moments.showMap} (Carte).
- Deux boutons à icône, juste à côté, dupliquent et suppriment le moment sélectionné. Vous pouvez aussi faire un clic droit sur un moment pour {ui.contextMenus.duplicate} et {ui.contextMenus.delete}.

## Au-dessus de l’écran du jeu

La barre au-dessus de l’écran du jeu est courte :

- Le bouton de décor affiche le nom du décor actuel et ouvre le sélecteur.
- {ui.stageControls.character} met un personnage en scène.
- Sur un moment d’exploration, les outils pour dessiner des zones.
- {ui.topBar.visual} et {ui.topBar.script}, à droite, basculent entre l’écran du jeu et le texte de la scène.

Un clic sur le bouton de décor ou sur {ui.stageControls.character} fait aussi passer le panneau à l’onglet {ui.inspectorTabs.image}.

## La barre au-dessus d’un personnage

Quand vous sélectionnez un personnage sur l’écran du jeu, une petite barre apparaît au-dessus de lui. Elle contient {ui.stageCharacterInspector.expression} et, si le personnage a d’autres tenues, {ui.stageControls.outfit}.

Tout le reste se trouve dans le panneau de droite : {ui.stageCharacterInspector.position}, la taille, le retournement, {ui.stageCharacterInspector.order} et {ui.stageCharacterInspector.removeFromStage}.
