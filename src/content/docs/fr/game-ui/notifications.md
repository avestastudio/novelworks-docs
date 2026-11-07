---
title: Notifications (messages)
description: "Les messages courts comme « Vous avez obtenu : Clé », et le temps qu’ils restent affichés."
---

Les **{ui.gameUI.notices}** sont des messages courts comme « Vous avez obtenu : Clé ». Ils demandent la [fonctionnalité Inventaire](/novelworks-docs/fr/features/inventory/) pour apparaître pour les objets. La page le dit quand la fonctionnalité est désactivée.

## Ce que vous pouvez changer

- **{ui.gameUIInspector.position}** : en haut (par défaut), au centre ou en bas.
- **{ui.gameUIInspector.backgroundColor}** : « {tx.gameUIInspector.sameAsTheDialogueBox} » par défaut.
- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut.
- **{ui.gameUIInspector.shownFor}** : le temps que « Vous avez obtenu : … » et « Vous avez perdu : … » restent à l’écran, de 1 à 10 secondes (2,5 par défaut).

## Ce qu’elles disent

- « Vous avez obtenu : Clé » et « Vous avez perdu : Clé » ;
- pour un objet empilable dont la quantité change de plus d’une unité : « 3 × Pièce ».

Une seule notification est affichée pour tous les objets qui changent en même temps. La même boîte affiche aussi de petits messages du système, par exemple « {tx.game.quickSaved} ».
