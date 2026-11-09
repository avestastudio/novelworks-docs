---
title: Écran de fin
description: L’écran affiché quand l’histoire est terminée, et en quoi il diffère d’un moment Fin.
---

**{ui.gameUI.theEnd}** est « affiché quand l’histoire est terminée » : quand le jeu arrive à la fin d’une scène et que rien ne vient après. Ce n’est **pas** l’écran d’un [moment Fin](/novelworks-docs/fr/branching/endings/), qui montre le nom de la fin.

## Ce que vous pouvez changer

- **{ui.gameUIInspector.text}** : le titre affiché en grandes lettres. Par défaut, c’est « Fin ». Si vous le videz, aucun titre n’est affiché.
- **{ui.gameUIInspector.backgroundColor}** : une couleur unie, noire par défaut. Il n’y a pas d’option d’image.
- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut.

Sous le titre, le jeu affiche « {tx.game.returnToTitle} ». Ce texte ne peut pas être changé, et un clic ramène le joueur à l’écran-titre.

## Crédits après la fin

Si vous avez activé les [crédits](/novelworks-docs/fr/game-ui/credits/) et {ui.credits.afterEnding}, les crédits défilent quand le joueur clique pour quitter une fin. Cela vaut pour cet écran et pour un [moment de fin](/novelworks-docs/fr/branching/endings/). Quand les crédits se ferment, le jeu revient à l’écran-titre.
