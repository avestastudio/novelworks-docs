---
title: Touches et écrans tactiles
description: Toutes les touches, actions de souris et gestes tactiles que les joueurs peuvent utiliser dans le jeu.
---

Les raccourcis sont ignorés tant que **Ctrl**, **Cmd** ou **Alt** est maintenue (sauf maintenir **Ctrl** seule pour passer).

## Clavier

| Touche | Ce qu’elle fait |
|---|---|
| **Space**, **Enter** | Termine le texte, puis passe à la suite. Sur un bouton sélectionné, l’actionne. Sur une zone sélectionnée, l’utilise. |
| **1** à **6** | Choisit la Nᵉ option à l’écran. Le premier appui pendant que le texte apparaît le termine. |
| **Esc** | Ouvre ou ferme le menu pause. Ferme l’inventaire, l’Historique, les Options et Enregistrer/Charger. |
| **H** | Ouvre ou ferme l’Historique. |
| **A** | Active ou désactive Auto. |
| **S** | Active ou désactive Passer. |
| **Ctrl** (maintenue) | Passe le texte tant qu’elle est maintenue. |
| **F5** | Sauvegarde rapide (pendant la partie). |
| **F9** | Chargement rapide (même depuis l’écran-titre). |
| **I** | Ouvre ou ferme l’inventaire (avec la fonctionnalité Inventaire). |
| **M** | Ouvre la carte (quand le bouton Carte est affiché). |
| **Tab** | Passe d’un bouton ou d’une zone d’exploration à l’autre. Elle reste dans Enregistrer, l’Historique, les Options et l’avertissement de contenu tant qu’ils sont ouverts. |
| Flèches, **Home**, **End**, **Page Up**, **Page Down** | Dans l’Historique : font défiler. Dans Enregistrer et Charger : les flèches, **Home** et **End** passent d’un emplacement à l’autre. Dans les Options : les flèches changent la valeur. Elles ne font pas avancer l’histoire. |
| `Delete` / `Backspace` sur un emplacement | Demande s’il faut supprimer la sauvegarde. |

Le jeu n’a pas de touche pour le plein écran : celle du navigateur (**F11**) fonctionne, ainsi que le bouton plein écran de la page.

## Souris

- **Clic gauche** sur l’histoire : termine le texte, passe à la suite, choisit une option ou utilise une zone.
- **Clic droit** : ouvre ou ferme le menu pause (le menu du navigateur ne s’affiche jamais par-dessus le jeu). Il ne fait rien tant que Enregistrer, Charger, l’Historique, les Options ou une question est ouvert.
- **Molette vers le haut** : ouvre l’Historique. La molette vers le bas ne fait rien.
- **Survol** d’une zone d’exploration : affiche sa surbrillance et son étiquette.

## Écrans tactiles

- **Un appui** passe à la suite, comme un clic.
- Sur une zone d’exploration **avec étiquette**, le premier appui affiche l’étiquette et le second agit. Sans étiquette, un seul appui suffit.
- Le jeu n’a ni balayage, ni appui long, ni double appui. Le clic droit n’a pas d’équivalent tactile : la page ajoute un bouton **{ui.gameUIInspector.menu}** pour les appareils tactiles.
- Faire glisser le doigt fait défiler l’Historique.

## Ce qu’ajoute la page web exportée

Un petit groupe de boutons en haut à droite (estompés tant qu’on ne les touche pas ou qu’on ne les survole pas) :

- **{ui.gameUIInspector.menu}**, sur les appareils tactiles uniquement : ouvre le menu pause, puisqu’il n’y a ni clic droit ni Esc.
- « Plein écran » / « Quitter le plein écran », quand le navigateur le permet (pas sur iPhone).

Il n’y a pas de bouton Quitter dans le jeu web. Le jeu est redimensionné pour tenir dans la fenêtre, avec des bandes noires autour, en gardant ses proportions. Il a besoin de JavaScript, et d’un navigateur qui autorise le stockage local pour conserver les sauvegardes. Voir [Export web](/novelworks-docs/fr/publish/web-export/).
