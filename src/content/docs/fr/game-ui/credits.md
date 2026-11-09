---
title: Crédits
description: Ajoutez à votre jeu des crédits qui défilent, sur l’écran-titre, après une fin, ou les deux.
---

{ui.gameUI.credits} ajoute à votre jeu des crédits qui défilent. Allez dans {ui.topBar.gameUI} et choisissez {ui.gameUI.credits} dans la liste des écrans.

![L’écran Crédits dans l’interface du jeu, avec les interrupteurs, vos lignes et l’aperçu.](/novelworks-docs/screenshots/game-ui-credits.png)

Les crédits sont désactivés dans un nouveau jeu. Activez {ui.credits.enabled} pour commencer.

## Où ils apparaissent

Sous {ui.credits.where}, deux interrupteurs fonctionnent séparément. Les deux sont activés au départ.

- {ui.credits.onTitleScreen} ajoute un bouton {rt.game.credits} à l’écran-titre.
- {ui.credits.afterEnding} fait défiler les crédits quand le joueur quitte une fin : un [moment de fin](/novelworks-docs/fr/branching/endings/) ou l’[écran {ui.gameUI.theEnd}](/novelworks-docs/fr/game-ui/ending-screen/). L’écran-titre vient après eux.

## Ce qu’ils disent

Les crédits commencent par le titre du jeu et son auteur, repris des [réglages du projet](/novelworks-docs/fr/getting-started/editor-settings/).

Viennent ensuite {ui.credits.lines}. Cliquez sur {ui.credits.addLine} et remplissez :

- {ui.credits.role}, par exemple « Dessins » ;
- {ui.credits.names}, un nom par ligne.

Vous pouvez avoir jusqu’à 30 lignes. Les flèches changent leur ordre, et une ligne laissée vide est ignorée.

{ui.credits.madeWith} est activé au départ. Vous pouvez le désactiver.

## L’apparence

Vous pouvez régler {ui.gameUIInspector.backgroundColor}, {ui.gameUIInspector.textColor} et {ui.gameUIInspector.buttonStyle}. {ui.gameUIInspector.resetToDefault} réinitialise toute la page, pas seulement l’apparence : vos lignes sont supprimées et les crédits sont désactivés. NovelWorks demande d’abord, et {ui.topBar.undo} les ramène.

## Dans le jeu

Les crédits défilent tout seuls vers le haut et s’arrêtent à la fin, avec les dernières lignes encore à l’écran. {rt.credits.back} les ferme, de même que `Esc`, `Enter` et `Space`.

Si le joueur a demandé à son système moins d’animations, rien ne bouge : toute la liste est affichée et on peut la faire défiler. L’aperçu dans l’éditeur fonctionne de la même façon.
