---
title: Sauts
description: "Aller directement dans une autre scène, par exemple pour réunir deux branches."
---

Un moment **{ui.moments.jump}** envoie l’histoire directement dans une autre scène. Les joueurs ne le voient pas : le jeu entre dans l’autre scène à son premier moment, sans rien afficher entre les deux. Utilisez-le pour réunir deux branches, ou pour passer à la scène suivante.

## Le mettre en place

Sélectionnez le moment Saut. Dans l’inspecteur, choisissez la scène dans **{ui.branchInspectors.goTo}**. Contrairement à une option de choix, un saut n’a pas d’entrée « continuer » : il lui faut une scène. Sur la ligne de temps, la carte indique « Aller à Parc ».

## Bon à savoir

- Un saut est une **sortie** de sa scène. Les moments placés après lui ne peuvent jamais être atteints, et l’éditeur vous avertit à leur sujet (« Les joueurs ne voient jamais ce moment… »).
- Si la scène cible a été supprimée, ou si aucune n’est choisie, l’éditeur vous avertit. Dans le jeu, un tel saut continue avec le moment suivant de la scène.
- Une scène ne peut se terminer que par un seul saut. Sur la [carte de l’histoire](/novelworks-docs/fr/branching/story-map/), relier une scène dont le dernier saut a déjà une scène est refusé, alors qu’un saut sans scène est simplement complété.
- Des sauts qui ne font que se renvoyer l’un à l’autre créent une boucle sans fin : le jeu s’arrête après 1000 étapes automatiques et affiche l’écran de fin. Voir [Les conditions Si…](/novelworks-docs/fr/branching/conditions/).
- Sur la carte de l’histoire, un saut est une flèche étiquetée « saut ».
- Les sauts existent aussi dans le [mode Script](/novelworks-docs/fr/writing/script-mode-conditions/) sous la forme `-> Park`.
