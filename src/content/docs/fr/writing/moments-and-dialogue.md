---
title: Moments et dialogues
description: Écrire des répliques, ajouter des moments, les réorganiser et utiliser le menu d’un moment.
---

Un **moment** est une étape d’une scène : une réplique, un choix, un saut… Cette page traite du plus courant, le moment **{ui.moments.dialogue}**. Les autres sortes sont décrites dans [Scènes, moments et chronologie](/novelworks-docs/fr/concepts/scenes-moments-timeline/).

## Écrire une réplique

Cliquez sur la boîte de dialogue de l’écran du jeu et tapez. Le texte se tape directement dans la boîte, et vous pouvez aussi utiliser **{ui.momentInspector.text}** dans l’onglet **{ui.inspectorTabs.text}** de l’inspecteur. Sélectionnez des mots pour les mettre en forme : voir [Mettre en forme votre texte](/novelworks-docs/fr/writing/rich-text/).

- **Entrée** commence la **ligne suivante** : un nouveau moment de dialogue après celui-ci, avec le même plateau et le même personnage qui parle, prêt à taper.
- **Maj+Entrée** ajoute une nouvelle ligne **dans la même boîte**.
- Un texte trop long pour tenir dans la boîte affiche un avertissement : appuyez sur **Entrée** pour continuer dans un nouveau moment.

## Qui parle

Au-dessus du texte, sur la plaque de nom, ou avec **{ui.momentInspector.speaker}** dans l’onglet **{ui.inspectorTabs.text}**, choisissez :

- **{ui.stageControls.narrator}** : personne ne parle, juste du texte ;
- un personnage. Les personnages en scène sont listés en premier, puis les autres.

Une nouvelle ligne garde le personnage de la ligne précédente. Si vous supprimez un personnage, les répliques qu’il disait deviennent de la narration.

## Ajouter des moments

Dans l’en-tête de la chronologie, au-dessus des cartes, **{ui.moments.dialogue}** ajoute une ligne de dialogue **après le moment sélectionné**. **{ui.timeline.addOther}** liste les autres sortes de moments, chacune avec une phrase qui l’explique : {ui.moments.choice}, {ui.moments.condition}, {ui.moments.jump}, {ui.moments.ending}, {ui.moments.exploration} et, quand ces fonctionnalités sont activées, {ui.moments.item} et {ui.moments.showMap}. Le **+** au bout de la bande ajoute une réplique. Dans une scène vide, **{ui.timeline.writeTheFirstLine}** fait la même chose.

Un nouveau moment ne change rien à l’écran : il montre ce que montrait le moment précédent (voir [Le plateau](/novelworks-docs/fr/concepts/stage/)).

## Réorganiser les moments

Faites glisser une carte vers la gauche ou vers la droite. Les flèches **←** et **→** déplacent la sélection vers le moment précédent et le suivant, **Début** et **Fin** vers le premier et le dernier, et **Cmd+[** / **Cmd+]** (**Ctrl+[** / **Ctrl+]**) font de même pendant que vous tapez.

## Ce que montre une carte

Une carte montre le nom du personnage qui parle dans sa couleur (ou « {tx.timeline.narrator} », ou la sorte de moment avec une bande de couleur), le début du texte, et son numéro dans le coin. Elle peut aussi montrer :

- une icône de note adhésive si le moment a une [note](/novelworks-docs/fr/writing/notes/) ;
- un triangle d’avertissement : pointez-le pour lire ce qui demande votre attention, par exemple un choix sans options, un lien vers une scène supprimée, ou un moment que les joueurs ne peuvent jamais voir parce qu’une fin ou un saut le précède ;
- de petites pastilles pour ce que le moment change en scène, et sous les cartes le graphique de qui est en scène.

## Le menu d’un moment

Faites un clic droit sur une carte :

| Entrée | Ce qu’elle fait |
|---|---|
| {ui.contextMenus.insertBefore} | Ajoute un moment de dialogue avant celui-ci. Il prend le personnage qui parle du moment devant lequel il est placé, et montre l’écran du moment précédent. |
| {ui.contextMenus.insertAfter} | En ajoute un après (**Cmd+Entrée** / **Ctrl+Entrée**). |
| {ui.contextMenus.duplicate} | Copie le moment juste après lui, avec le même écran (**Cmd+D** / **Ctrl+D**). |
| {ui.contextMenus.changeType} | Transforme le moment en une autre sorte. Le texte d’un dialogue, d’un choix ou d’une fin est conservé ; si certains réglages ne peuvent pas l’être, NovelWorks demande et vous pouvez annuler. |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | Ouvre la note du moment. |
| {ui.contextMenus.playFromHere} | Joue à partir de ce moment (**Cmd+Maj+P** / **Ctrl+Maj+P**). |
| {ui.contextMenus.delete} | Supprime le moment. |

## Supprimer un moment

Utilisez l’icône de corbeille dans l’en-tête de la chronologie, **{ui.contextMenus.delete}** dans le menu du clic droit, ou la touche `Delete`. NovelWorks demande une confirmation, sauf pour une ligne de dialogue vide. Ce que le moment supprimé changeait en scène passe au suivant, si bien que les autres moments continuent de montrer la même chose.

## L’inspecteur d’un moment de dialogue

Les éventuels avertissements sont en haut. En dessous se trouvent quatre onglets :

- {ui.inspectorTabs.text} : le **{ui.momentInspector.speaker}** et le **{ui.momentInspector.text}**, où mène le moment, la **{ui.momentInspector.note}**, et **{ui.momentInspector.script}**, qui montre comment ce moment s’écrit en [mode Script](/novelworks-docs/fr/writing/script-mode/) pour que vous puissiez le copier.
- {ui.inspectorTabs.image} : jusqu’où va un changement, le **{ui.momentInspector.background}**, l’**{ui.ambience.title}**, et qui est **{ui.momentInspector.onStage}**.
- {ui.inspectorTabs.effects} : la [caméra](/novelworks-docs/fr/writing/camera/) et les [effets](/novelworks-docs/fr/writing/effects/).
- {ui.sound.tab} : [musique, ambiance sonore, bruitages et voix](/novelworks-docs/fr/writing/sound/).

Voir [Le panneau du moment](/novelworks-docs/fr/writing/moment-panel/).
