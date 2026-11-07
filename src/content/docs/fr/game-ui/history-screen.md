---
title: Écran d’historique
description: La liste des répliques que le joueur a déjà lues, et comment changer son apparence.
---

L’écran **{ui.gameUI.history}** montre « les répliques déjà lues, avec le nom de l’interlocuteur dans sa couleur, ainsi que les choix faits ».

## Ce que vous pouvez changer

Sous **{ui.gameUIInspector.screen}** :

- **{ui.gameUIInspector.backgroundColor}** : par défaut, la couleur d’arrière-plan de l’écran-titre, légèrement transparente, pour que l’histoire se devine à travers.
- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut.
- **{ui.gameUIInspector.buttonStyle}** : le style du bouton Retour.

## Comment les joueurs l’utilisent

- Ils l’ouvrent avec la **molette de la souris (vers le haut)**, la touche **H**, le bouton **{rt.game.history}** du [menu pause](/novelworks-docs/fr/game-ui/pause-menu/), ou le bouton Historique du [menu rapide](/novelworks-docs/fr/game-ui/quick-menu/) si vous l’affichez.
- Ils le ferment avec **Échap**, **H** ou le bouton **{rt.historyScreen.back}**. Sur un écran tactile, ils font glisser pour défiler et touchent Retour.
- Il n’est disponible que lorsque l’histoire est à l’écran : pas sur l’écran-titre, pas en pause, ni quand un autre écran est ouvert.
- Il liste les répliques de dialogue, les questions des choix, les répliques affichées par les zones d’exploration, et l’option choisie par le joueur (« Vous avez choisi : … »). Il garde les **200** dernières entrées et il est enregistré avec chaque sauvegarde. Quand il n’y a encore rien, il affiche « {tx.historyScreen.nothingHasBeenSaidYet} »

Voir aussi [Historique](/novelworks-docs/fr/player/history/).
