---
title: Écran d’historique
description: La liste des répliques que le joueur a déjà lues, et comment changer son apparence.
---

L’écran **{ui.gameUI.history}** montre « les répliques lues, avec le nom de celui qui parle dans sa couleur, et les choix faits ».

## Ce que vous pouvez changer

Sous **{ui.gameUIInspector.screen}** :

- **{ui.gameUIInspector.backgroundColor}** : par défaut, la couleur d’arrière-plan de l’écran-titre, légèrement transparente, si bien que l’histoire se devine derrière.
- **{ui.gameUIInspector.textColor}** : « Comme la couleur du texte » par défaut.
- **{ui.gameUIInspector.buttonStyle}** : le style du bouton Retour.

## Comment les joueurs l’utilisent

- Ils l’ouvrent avec la **molette de la souris (vers le haut)**, la touche **H**, le bouton **{rt.game.history}** du [menu pause](/novelworks-docs/fr/game-ui/pause-menu/), ou le bouton Historique du [menu rapide](/novelworks-docs/fr/game-ui/quick-menu/) si vous l’affichez.
- Ils le ferment avec **Esc**, **H** ou le bouton **{rt.historyScreen.back}**. Sur un écran tactile, ils font glisser pour défiler et touchent Retour.
- Il n’est disponible que lorsque l’histoire est à l’écran : pas sur l’écran-titre, pas en pause, ni quand un autre écran est ouvert.
- Il liste les répliques de dialogue, les questions des choix, les répliques affichées par les zones d’exploration, et l’option choisie par le joueur (« Vous avez choisi : … »). Il garde les **200** dernières entrées et est enregistré avec chaque sauvegarde. Quand il n’y a encore rien, il indique « Nothing has been said yet. »

Voir aussi [Historique](/novelworks-docs/fr/player/history/).
