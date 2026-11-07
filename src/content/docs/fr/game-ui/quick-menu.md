---
title: Menu rapide
description: "Les commandes de lecture affichées au-dessus de l’histoire : position, apparence et boutons à afficher."
---

Le **{ui.quickMenu.title}** est une petite barre de « commandes de lecture au-dessus de l’histoire ». Les joueurs peuvent cliquer sur ses boutons au lieu d’utiliser des touches.

![Les réglages du menu rapide, avec l’aperçu de la barre en haut du jeu.](/novelworks-docs/screenshots/game-ui-quick-menu.png)

## L’afficher, la placer

- **{ui.quickMenu.enabled}** : activé par défaut. Désactivez-le pour masquer toute la barre.
- **{ui.quickMenu.position}** : en haut à gauche, en haut au centre (par défaut), en haut à droite, en bas à gauche, en bas au centre ou en bas à droite.
- **{ui.quickMenu.margin}** : l’écart avec les bords, 0 à 10 % (1,5 par défaut).

## Apparence

- **{ui.gameUIInspector.buttonStyle}** : Capsule par défaut.
- **{ui.quickMenu.textSize}** : 60 à 140 % de la taille de texte de base (80 par défaut).
- **{ui.quickMenu.buttonColor}** : par défaut, un fond sombre translucide. Un lien rétablit la valeur par défaut.
- **{ui.gameUIInspector.textColor}** : « Identique à la couleur du texte » par défaut.

## Boutons visibles

Neuf boutons, chacun avec un interrupteur. Leur **ordre est fixe** : vous pouvez les afficher ou les masquer, pas les réordonner.

| Bouton | Par défaut | Touche | Ce qu’il fait |
|---|---|---|---|
| {ui.quickMenu.button.history} | activé | H | Ouvre l’Historique. |
| {ui.quickMenu.button.auto} | activé | A | Active ou désactive le mode Auto. |
| {ui.quickMenu.button.skip} | activé | S | Active ou désactive le mode Passer. |
| {ui.quickMenu.button.save} | désactivé | | Ouvre l’écran de sauvegarde. |
| {ui.quickMenu.button.load} | désactivé | | Ouvre l’écran de chargement. |
| {ui.quickMenu.button.quickSave} | désactivé | F5 | Sauvegarde rapide. |
| {ui.quickMenu.button.quickLoad} | désactivé | F9 | Chargement rapide (grisé tant qu’il n’existe pas de sauvegarde rapide). |
| {ui.quickMenu.button.options} | désactivé | | Ouvre les options du joueur. |
| {ui.quickMenu.button.menu} | désactivé | Esc | Ouvre le menu pause. |

**{ui.quickMenu.shortcutsHelp}**

## Quand la barre s’affiche

La barre est masquée sur l’écran-titre et l’écran de fin, pendant qu’un menu, l’Historique, les Options, la sauvegarde ou le chargement est ouvert, et quand tous les boutons sont masqués. **{rt.game.quickLoad}** est grisé tant qu’il n’existe pas de sauvegarde rapide. Auto et Passer indiquent s’ils sont activés.
