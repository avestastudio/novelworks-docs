---
title: Écran d’inventaire
description: Le bouton Inventaire et le panneau des objets.
---

L’écran **{ui.gameUI.inventory}** est le bouton que les joueurs utilisent pour ouvrir leurs objets, et le panneau qui les liste. Il demande la [fonctionnalité Inventaire](/novelworks-docs/fr/features/inventory/). Quand la fonctionnalité est désactivée, la page le dit et propose d’ouvrir Fonctionnalités.

## Le bouton

- **{ui.gameUIInspector.label}** : le texte du bouton, le titre du panneau et le nom de l’entrée du menu pause. Par défaut, « Inventaire ».
- **{ui.gameUIInspector.cornerOfTheScreen}** : en haut à gauche, en haut à droite (par défaut), en bas à gauche ou en bas à droite.
- **{ui.gameUIInspector.buttonStyle}** : « Identique à Polices et couleurs » par défaut.

Le bouton est masqué sur l’écran-titre, l’écran de fin et pendant la pause.

## Couleurs du panneau et du bouton

Ces deux couleurs s’appliquent **au panneau et au bouton** :

- **{ui.gameUIInspector.panelColor}** : « Identique à la boîte de dialogue » par défaut (avec le style de bouton « Texte », le bouton n’a pas de fond).
- **{ui.gameUIInspector.textColor}** : « Identique à la couleur du texte » par défaut.

## Ce que les joueurs obtiennent

Les joueurs l’ouvrent avec le bouton, le menu pause ou la touche **I**. C’est un panneau au milieu du jeu avec une grille des objets qu’ils possèdent : une image, le nom, et pour les objets empilables un nombre comme « ×3 ». Sélectionner un objet affiche sa description (ou son nom s’il n’en a pas). Quand il est vide, il indique « Rien ici pour l’instant. » Esc, **I**, le bouton × ou un clic à l’extérieur le ferme. L’histoire est en pause tant qu’il est ouvert.
