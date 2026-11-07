---
title: Écran-titre
description: "Le premier écran de votre jeu : arrière-plan, logo et menu."
---

L’**{ui.gameUI.titleScreen}** est le premier écran que les joueurs voient (après l’[intro](/novelworks-docs/fr/game-ui/intro/) et l’[avertissement de contenu](/novelworks-docs/fr/game-ui/content-warning/), qui sont facultatifs).

## Arrière-plan

Choisissez **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}** : par défaut, c’est un bleu très sombre. Il « brille de la couleur principale en haut » : le jeu dessine par-dessus un doux halo de votre [couleur principale](/novelworks-docs/fr/game-ui/fonts-and-colors/).
- **{ui.gameUIInspector.image}** : choisissez un arrière-plan, un CG ou une image d’interface. Tant que vous n’en choisissez pas, la couleur est affichée.

## Logo

**{ui.gameUIInspector.logoImage}** : n’importe quelle image. Elle est dessinée dans la partie haute de l’écran, en gardant ses proportions. Sans logo, le jeu écrit le **titre de votre jeu** (réglé dans les [paramètres du projet](/novelworks-docs/fr/getting-started/editor-settings/)), ou « Jeu sans titre » s’il est vide.

## Menu

Seul le **{ui.gameUIInspector.buttonStyle}** peut être changé. Les boutons et leurs mots sont fixes :

- **{rt.game.continue}** : affiché seulement quand le joueur a une sauvegarde, il charge la plus récente ;
- Nouvelle partie ;
- **{rt.game.load}** : affiché quand la sauvegarde est possible ;
- **{rt.game.options}** ;
- Quitter : seulement dans un hôte qui permet de quitter (pas dans le navigateur).

Les mots de ces boutons suivent la [langue du jeu](/novelworks-docs/fr/getting-started/editor-settings/) de votre projet.
