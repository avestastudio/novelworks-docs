---
title: Chapitres
description: Marquez les scènes qui commencent un chapitre et laissez les joueurs rejouer les chapitres qu’ils ont atteints.
---

Les chapitres permettent aux joueurs de revenir à une partie de votre histoire depuis l’écran-titre.

## Marquer un chapitre

1. Dans l’onglet {ui.leftPanel.scenes}, sélectionnez une scène.
2. Dans le panneau de droite, activez {ui.sceneInspector.startsChapter}.
3. Tapez un nom si vous en voulez un. Sans nom, le jeu affiche {rt.chapters.chapterNumber} avec son numéro.

Un chapitre dure jusqu’à la scène du chapitre suivant. L’ordre des chapitres est celui de votre liste de scènes. Un jeu peut avoir jusqu’à 50 chapitres.

Si vous supprimez une scène, son chapitre disparaît avec elle.

## Ce que voient les joueurs

L’écran-titre reçoit un bouton {rt.game.chapters} dès que votre jeu a un chapitre.

L’écran liste les chapitres. Ceux que le joueur a déjà atteints affichent leur nom et peuvent être choisis. Les autres affichent {rt.chapters.locked} et ne peuvent pas être choisis.

Un chapitre compte comme atteint quand le joueur est dans sa scène, peu importe comment il y est arrivé : un choix, un saut ou une sauvegarde chargée.

## Rejouer un chapitre

Un chapitre commence au premier moment de sa scène, avec les valeurs de départ : les variables reviennent à leur première valeur et l’inventaire est vide.

L’écran s’ouvre depuis l’écran-titre : une partie en cours n’est donc pas touchée.

Les chapitres atteints sont conservés pour chaque jeu sur l’appareil du joueur, comme les sauvegardes. Quand vous testez dans l’éditeur, ils sont conservés à part de ceux du jeu exporté.

## L’apparence

Allez dans {ui.topBar.gameUI} et choisissez {ui.gameUI.chapters} dans la liste des écrans.

![L’écran Chapitres dans l’interface du jeu, avec ses couleurs et un aperçu de la liste des chapitres.](/novelworks-docs/screenshots/game-ui-chapters.png)

Vous pouvez régler {ui.gameUIInspector.backgroundColor}, {ui.gameUIInspector.textColor} et {ui.gameUIInspector.buttonStyle}. {ui.gameUIInspector.resetToDefault} remet cet écran comme il était.

L’aperçu montre vos chapitres, ou trois exemples si vous n’en avez encore aucun, le dernier restant verrouillé.
