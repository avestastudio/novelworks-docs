---
title: Écran-titre
description: "Le premier écran de votre jeu : arrière-plan, logo et menu."
---

L’**{ui.gameUI.titleScreen}** est le premier écran que les joueurs voient (après l’[intro](/novelworks-docs/fr/game-ui/intro/) et l’[avertissement de contenu](/novelworks-docs/fr/game-ui/content-warning/), qui sont facultatifs).

## Modèles

Sous {ui.templates.heading}, quatre cartes donnent un style tout prêt : {ui.templates.title.classic} (le style d’un nouveau projet), {ui.templates.title.darkNight}, {ui.templates.title.soft} et {ui.templates.title.minimal}. Un clic règle seulement la couleur de fond et le style des boutons de cet écran. Vos images, votre police et les couleurs du texte restent. Un seul {ui.topBar.undo} ramène ce que vous aviez.

La carte du modèle actuel est mise en évidence. Dès que vous changez l’un de ces deux réglages, plus aucune carte n’est mise en évidence.

## Arrière-plan

Choisissez **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}** : par défaut, un bleu très sombre. Il « brille avec la couleur principale en haut » : le jeu dessine par-dessus un doux halo de votre [couleur principale](/novelworks-docs/fr/game-ui/fonts-and-colors/).
- **{ui.gameUIInspector.image}** : choisissez un décor, un CG ou une image d’interface. Tant que vous n’en avez pas choisi, la couleur est affichée.

## Logo

**{ui.gameUIInspector.logoImage}** : n’importe quelle image. Elle est dessinée dans la partie haute de l’écran, en gardant ses proportions. Sans logo, le jeu écrit le **titre de votre jeu** (défini dans les [réglages du projet](/novelworks-docs/fr/getting-started/editor-settings/)), ou « {tx.export.untitled} » s’il est vide.

## Musique

Sous {ui.sound.music}, {ui.sound.chooseMusic} choisit un morceau de type Musique, ou en importe un. Une fois la musique choisie, vous avez un curseur {ui.sound.volume} et une croix pour la retirer. Elle commence après l’intro. Quand l’histoire commence, la musique de vos moments prend le relais. Voir [Son et musique](/novelworks-docs/fr/writing/sound/).

Les navigateurs n’autorisent aucun son avant le premier clic ou la première touche du joueur : dans un jeu web, la musique commence donc à ce moment-là.

## Menu

Seul le **{ui.gameUIInspector.buttonStyle}** peut être changé. Les boutons et leurs mots sont fixes :

- **{rt.game.continue}** : affiché seulement quand le joueur a une sauvegarde, et charge la plus récente ;
- **{rt.game.newGame}** ;
- **{rt.game.load}** : affiché quand la sauvegarde est possible ;
- {rt.game.chapters} : affiché seulement si votre jeu a au moins un chapitre. Voir [Chapitres](/novelworks-docs/fr/game-ui/chapters/) ;
- **{rt.game.options}** ;
- {rt.game.credits} : affiché seulement si vous avez activé les crédits et leur bouton. Voir [Crédits](/novelworks-docs/fr/game-ui/credits/) ;
- **{rt.game.quit}** : seulement dans un hôte qui permet de quitter (pas dans le navigateur).

Les mots de ces boutons suivent la [langue du jeu](/novelworks-docs/fr/getting-started/editor-settings/) de votre projet.
