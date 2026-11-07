---
title: Moments et dialogues
description: Écrivez des répliques, ajoutez des moments, réordonnez-les et utilisez le menu du moment.
---

Un **moment** est une étape d'une scène : une réplique, un choix, un saut… Cette page parle du plus courant, le moment **{ui.moments.dialogue}**. Les autres sortes sont décrites dans [Scènes, moments et chronologie](/novelworks-docs/fr/concepts/scenes-moments-timeline/).

## Écrire une réplique

Cliquez sur la boîte de dialogue de l'écran du jeu et tapez. Le texte se tape directement dans la boîte, et vous pouvez aussi utiliser **{ui.momentInspector.text}** dans l'inspecteur.

- **Enter** commence la **ligne suivante** : un nouveau moment de dialogue après celui-ci, avec la même mise en scène et le même personnage qui parle, prêt à taper.
- **Shift+Enter** ajoute une nouvelle ligne **dans la même boîte**.
- Un long texte qui ne tient pas dans la boîte affiche un avertissement : appuyez sur **Enter** pour continuer dans un nouveau moment.

## Qui parle

Au-dessus du texte, sur la plaque de nom, ou avec **{ui.momentInspector.speaker}** dans l'inspecteur, choisissez :

- **{ui.stageControls.narrator}** : personne ne parle, il y a seulement du texte ;
- un personnage. Les personnages en scène sont listés en premier, puis les autres.

Une nouvelle réplique garde le locuteur de la réplique précédente. Si vous supprimez un personnage, les répliques qu'il disait deviennent de la narration.

## Ajouter des moments

Dans la chronologie, les boutons au-dessus des cartes ajoutent un moment de chaque sorte **après celui qui est sélectionné** : {ui.moments.dialogue}, {ui.moments.choice}, {ui.moments.condition}, {ui.moments.jump}, {ui.moments.ending}, {ui.moments.exploration} et, quand ces fonctionnalités sont activées, {ui.moments.item} et {ui.moments.showMap}. Le bouton **+** au bout de la bande ajoute une réplique. Dans une scène vide, **{ui.timeline.writeTheFirstLine}** fait la même chose.

Un nouveau moment ne change rien à l'écran : il montre ce que montrait le moment précédent (voir [La scène](/novelworks-docs/fr/concepts/stage/)).

## Réordonner les moments

Faites glisser une carte vers la gauche ou la droite. Les flèches **←** et **→** déplacent la sélection vers le moment précédent et le suivant, **Home** et **End** vers le premier et le dernier, et **Cmd+[** / **Cmd+]** (**Ctrl+[** / **Ctrl+]**) font de même pendant que vous tapez.

## Ce que montre une carte

Une carte montre le nom du personnage qui parle dans sa couleur (ou « Narrateur », ou la sorte de moment avec une bande de couleur), le début du texte et son numéro dans le coin. Elle peut aussi montrer :

- une icône de note autocollante si le moment a une [note](/novelworks-docs/fr/writing/notes/) ;
- un triangle d'avertissement : pointez-le pour lire ce qui demande votre attention, par exemple un choix sans option, un lien vers une scène supprimée, ou un moment que les joueurs ne pourront jamais voir parce qu'une fin ou un saut le précède ;
- de petites pastilles pour ce que le moment change en scène, et sous les cartes le graphique de qui est en scène.

## Le menu du moment

Faites un clic droit sur une carte :

| Entrée | Ce qu'elle fait |
|---|---|
| {ui.contextMenus.insertBefore} | Ajoute un moment de dialogue avant celui-ci. Il prend le locuteur du moment devant lequel il est placé, et montre l'écran du moment précédent. |
| {ui.contextMenus.insertAfter} | En ajoute un après (**Cmd+Enter** / **Ctrl+Enter**). |
| {ui.contextMenus.duplicate} | Copie le moment juste après lui-même, avec le même écran (**Cmd+D** / **Ctrl+D**). |
| {ui.contextMenus.changeType} | Transforme le moment en une autre sorte. Le texte d'un dialogue, d'un choix ou d'une fin est conservé ; si certains réglages ne peuvent pas l'être, NovelWorks demande et vous pouvez annuler. |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | Ouvre la note du moment. |
| {ui.contextMenus.playFromHere} | Joue à partir de ce moment (**Cmd+Shift+P** / **Ctrl+Shift+P**). |
| {ui.contextMenus.delete} | Supprime le moment. |

## Supprimer un moment

Utilisez l'icône de corbeille au-dessus de la chronologie, **{ui.momentInspector.delete}** dans l'inspecteur, **{ui.contextMenus.delete}** dans le menu, ou la touche `Delete`. NovelWorks demande confirmation, sauf pour une réplique vide. Ce que le moment supprimé changeait en scène passe au suivant, si bien que les autres moments continuent de montrer la même chose.

## L'inspecteur d'un moment de dialogue

De haut en bas : les éventuels avertissements, le **{ui.momentInspector.speaker}** et **{ui.momentInspector.text}**, le **{ui.momentInspector.background}**, qui est **{ui.momentInspector.onStage}**, la **{ui.momentInspector.note}**, et **{ui.momentInspector.script}**, qui montre comment ce moment s'écrit en [mode Script](/novelworks-docs/fr/writing/script-mode/) pour que vous puissiez le copier. Un moment de dialogue n'a pas de réglage de son, de musique ni de transition.
