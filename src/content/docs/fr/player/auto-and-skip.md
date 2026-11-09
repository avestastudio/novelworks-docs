---
title: Auto et Passer
description: Laissez le jeu lire tout seul, ou passez les répliques déjà lues.
---

## Les activer

- **A** active ou désactive **{rt.game.auto}**, et **S** active ou désactive **{rt.game.skip}**.
- Les boutons **{rt.game.auto}** et **{rt.game.skip}** du [menu rapide](/novelworks-docs/fr/game-ui/quick-menu/) font la même chose, si vous les affichez. Ils paraissent enfoncés tant qu’un mode est activé. Masquer un bouton ne supprime jamais sa touche.
- Maintenir la touche **Ctrl** enfoncée passe les répliques tant qu’elle est maintenue.
- Un seul mode est activé à la fois. Ils sont ignorés en pause ou quand un écran est ouvert.

## Auto

Auto passe à la réplique suivante tout seul, après un délai qui dépend de la longueur de la réplique, **une fois la réplique entièrement affichée** :

- environ 1 seconde plus 55 millisecondes par caractère, entre 1,5 et 10 secondes. Par exemple, un court « {tx.numberInput.yes} » attend 1,5 seconde, et une réplique de 100 caractères environ 6,5 secondes ;
- puis multiplié par la **{rt.optionsScreen.autoSpeed}** du joueur : Lente (x1,5, donc jusqu’à 15 secondes), Normale (x1), Rapide (x0,6, donc jusqu’à 0,9 seconde).

Auto s’arrête à un moment qui n’est pas une réplique de dialogue : un choix, une exploration ou une fin.

## Passer

Passer accélère à travers les répliques **que le joueur a déjà lues**, en terminant le texte tout de suite et en raccourcissant les animations. Les [effets](/novelworks-docs/fr/writing/effects/), les voix et les bruitages des moments passés ne sont pas joués. Il s’arrête à la première réplique qu’il n’a pas lue, et à un choix, une exploration ou une fin.

- Une réplique compte comme lue dès qu’elle apparaît, et le relevé est conservé **par jeu, dans le navigateur**, pas par sauvegarde. Il reste d’une nouvelle partie à l’autre.
- Si vous changez le texte ou l’interlocuteur d’une réplique, elle compte de nouveau comme non lue.
- Les joueurs ne peuvent pas réinitialiser le relevé eux-mêmes, sauf en effaçant les données du site. Dans l’éditeur, **{ui.playOverlay.resetReadLines}** le fait pour vos tests.

## Ce qui les arrête

Un clic ou une touche qui fait avancer l’histoire (**Espace**, **Entrée**, **1** à **6**), l’ouverture de n’importe quel écran (Historique, Options, Sauvegarde, Chargement, l’inventaire, le menu pause), et le chargement d’une partie. Une nouvelle scène ne les arrête pas.

## Voix

Si une réplique a une [voix](/novelworks-docs/fr/writing/sound/), Auto attend la fin de la voix, puis passe à la suite après 0,6 seconde, quelle que soit la valeur de **{rt.optionsScreen.autoSpeed}**. Passer à la réplique suivante coupe la voix.
