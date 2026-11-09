---
title: Touches et écrans tactiles
description: Toutes les touches, actions de souris et gestes tactiles que les joueurs peuvent utiliser dans le jeu.
---

Les raccourcis sont ignorés tant que **Ctrl**, **Cmd** ou **Alt** est maintenue (sauf maintenir **Ctrl** seule pour passer).

## Clavier

| Touche | Ce qu’elle fait |
|---|---|
| **Espace**, **Entrée** | Termine le texte, les effets et le mouvement de caméra, puis passe à la suite. Sur un bouton qui a le focus, l’active. Sur une zone qui a le focus, l’utilise. |
| **1** à **6** | Choisit la Nᵉ option à l’écran. Le premier appui pendant que le texte apparaît le termine. |
| **Échap** | Ouvre ou ferme le menu pause. Ferme l’inventaire, l’Historique, les Options, Sauvegarder/Charger, les Crédits et les Chapitres. |
| **H** | Ouvre ou ferme l’Historique. |
| **A** | Active ou désactive Auto. |
| **S** | Active ou désactive Passer. |
| **Ctrl** (maintenue) | Passe le texte tant qu’elle est maintenue. |
| **F5** | Sauvegarde rapide (pendant la partie). |
| **F9** | Chargement rapide (même depuis l’écran-titre). |
| **I** | Ouvre ou ferme l’inventaire (avec la fonctionnalité Inventaire). |
| **M** | Ouvre la carte (quand le bouton Carte est affiché). |
| **Tab** | Passe d’un bouton ou d’une zone d’exploration à l’autre. Reste dans Sauvegarder, Historique, Options et l’avertissement de contenu tant qu’ils sont ouverts. |
| Flèches, **Début**, **Fin**, **Page précédente**, **Page suivante** | Dans l’Historique : font défiler. Dans Sauvegarder et Charger : les flèches, **Début** et **Fin** passent d’un emplacement à l’autre. Dans Options : les flèches changent la valeur. Dans Chapitres : haut et bas passent d’un chapitre à l’autre. Elles ne font pas avancer l’histoire. |
| `Delete` / `Backspace` sur un emplacement | Demande s’il faut supprimer la sauvegarde. |

Dans les Crédits, **Entrée** et **Espace** ferment aussi l’écran.

Le jeu n’a pas de touche pour le plein écran : celle du navigateur (**F11**) fonctionne, ou le bouton de plein écran de la page.

## Souris

- **Clic gauche** sur l’histoire : termine le texte, les effets et le mouvement de caméra, passe à la suite, choisit une option ou utilise une zone.
- **Clic droit** : ouvre ou ferme le menu pause (le menu du navigateur ne s’affiche jamais par-dessus le jeu). Il ne fait rien tant que Sauvegarder, Charger, l’Historique, les Options ou une question est ouvert.
- **Molette vers le haut** : ouvre l’Historique. La molette vers le bas ne fait rien.
- **Survol** d’une zone d’exploration : affiche sa surbrillance et son libellé.

## Écrans tactiles

- **Toucher** fait avancer, comme un clic.
- Sur une zone d’exploration **avec libellé**, le premier toucher affiche le libellé et le second agit. Sans libellé, un seul toucher agit.
- Le jeu n’a ni balayage, ni appui long, ni double toucher. Le clic droit n’a pas d’équivalent tactile : la page ajoute un bouton **{ui.gameUIInspector.menu}** pour les appareils tactiles.
- Faire glisser le doigt fait défiler l’Historique.

## Ce qu’ajoute la page web exportée

Un petit groupe de boutons en haut à droite (estompés tant qu’on ne les touche pas ou ne les survole pas) :

- **{ui.gameUIInspector.menu}**, sur les appareils tactiles seulement : ouvre le menu pause, puisqu’il n’y a ni clic droit ni **Échap**.
- **{rt.player.fullscreen}** / **{rt.player.exitFullscreen}**, quand le navigateur le permet (pas sur iPhone).

Il n’y a pas de bouton Quitter dans le jeu web. Le jeu est mis à l’échelle pour tenir dans la fenêtre, avec des bandes noires autour, en gardant ses proportions. Il a besoin de JavaScript, et d’un navigateur qui autorise le stockage local pour conserver les sauvegardes. Voir [Export web](/novelworks-docs/fr/publish/web-export/).
