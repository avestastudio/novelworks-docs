---
title: Auto et Passer
description: Laissez le jeu lire tout seul, ou passez les répliques déjà lues.
---

## Les activer

- **A** active ou désactive **{rt.game.auto}**, et **S** active ou désactive **{rt.game.skip}**.
- Les boutons **{rt.game.auto}** et **{rt.game.skip}** du [menu rapide](/novelworks-docs/fr/game-ui/quick-menu/) font la même chose, si vous les affichez. Ils paraissent enfoncés tant qu’un mode est activé. Masquer un bouton ne retire jamais sa touche.
- Maintenir la touche **Ctrl** enfoncée fait passer les répliques tant qu’elle est maintenue.
- Un seul mode est activé à la fois. Ils sont ignorés en pause ou quand un écran est ouvert.

## Auto

Le mode Auto passe à la réplique suivante tout seul, après un délai qui dépend de la longueur de la réplique, **une fois que la réplique a fini de s’afficher** :

- environ 1 seconde plus 55 millisecondes par caractère, entre 1,5 et 10 secondes. Par exemple, un court « Oui. » attend 1,5 seconde, et une réplique de 100 caractères environ 6,5 secondes ;
- puis multiplié par la **vitesse du mode Auto** du joueur : Lente (x1,5, donc jusqu’à 15 secondes), Normale (x1), Rapide (x0,6, donc à peine 0,9 seconde).

Auto s’arrête à un moment qui n’est pas une réplique de dialogue : un choix, une exploration ou une fin.

## Passer

Le mode Passer parcourt vite les répliques **que le joueur a déjà lues**, en terminant le texte aussitôt et en raccourcissant les animations. Il s’arrête à la première réplique que le joueur n’a pas lue, et à un choix, une exploration ou une fin.

- Une réplique compte comme lue dès qu’elle apparaît, et le relevé est conservé **par jeu, dans le navigateur**, et non par sauvegarde. Il reste d’une nouvelle partie à l’autre.
- Si vous changez le texte ou le personnage qui parle d’une réplique, elle compte de nouveau comme non lue.
- Les joueurs ne peuvent pas réinitialiser eux-mêmes ce relevé, sauf en effaçant les données du site. Dans l’éditeur, « Oublier les répliques lues » le fait pour vos tests.

## Ce qui les arrête

Un clic ou une touche qui fait avancer l’histoire (**Space**, **Enter**, **1** à **6**), l’ouverture de n’importe quel écran (historique, options, sauvegarde, chargement, inventaire, menu pause), et le chargement d’une partie. Une nouvelle scène ne les arrête pas.

## Voix

Un moment de dialogue n’a pas de réglage de voix ni de son : Auto n’attend donc que le texte.
