---
title: Écran de l’inventaire
description: Le bouton Inventaire et le panneau des objets.
---

L’écran **{ui.gameUI.inventory}** est le bouton que les joueurs utilisent pour ouvrir leurs objets, et le panneau qui les liste. Il demande la [fonctionnalité Inventaire](/novelworks-docs/fr/features/inventory/). Quand la fonctionnalité est désactivée, la page le dit et propose d’ouvrir Fonctionnalités.

## Le bouton

- **{ui.gameUIInspector.label}** : le texte du bouton, le titre du panneau et le nom de l’entrée du menu pause. « Inventaire » par défaut.
- **{ui.gameUIInspector.cornerOfTheScreen}** : en haut à gauche, en haut à droite (par défaut), en bas à gauche ou en bas à droite.
- **{ui.gameUIInspector.buttonStyle}** : « {tx.gameUIInspector.sameAsFontsColors} » par défaut.

Le bouton est masqué sur l’écran-titre, l’écran de fin et pendant la pause.

## Couleurs du panneau et du bouton

Ces deux couleurs s’appliquent **à la fois au panneau et au bouton** :

- **{ui.gameUIInspector.panelColor}** : « {tx.gameUIInspector.sameAsTheDialogueBox} » par défaut (avec le style de bouton « {tx.gameUIInspector.text} », le bouton n’a pas de fond).
- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut.

## Ce que les joueurs obtiennent

Les joueurs l’ouvrent avec le bouton, le menu pause ou la touche **I**. C’est un panneau au milieu du jeu avec une grille des objets qu’ils possèdent : une image, le nom, et pour les objets cumulables un compteur comme « ×3 ». Sélectionner un objet affiche sa description (ou son nom s’il n’en a pas). Il affiche « Rien ici pour l’instant. » quand il est vide. Échap, **I**, le bouton × ou un clic à l’extérieur le ferment. L’histoire est en pause tant qu’il est ouvert.
