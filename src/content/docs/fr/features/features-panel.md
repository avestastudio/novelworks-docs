---
title: La bibliothèque de fonctionnalités
description: "Activer et désactiver des parties facultatives de votre jeu : l’Inventaire et la Carte."
---

Certaines parties d’un roman visuel ne sont pas utiles à tous les jeux. NovelWorks vous permet de les ajouter en un clic depuis la bibliothèque **{ui.featuresDialog.features}**, et de les désactiver sans rien perdre.

## L’ouvrir

- Cliquez sur **{ui.leftPanel.features}** en bas du panneau de gauche.
- Ou utilisez **{ui.projectSettings.openFeatures}** dans les [réglages du projet](/novelworks-docs/fr/getting-started/editor-settings/), ou **{ui.mapMode.features}** en bas de l’espace de travail Carte.
- Quand vous créez un projet, les cartes **{ui.newProjectScreen.features}** de la fenêtre Nouveau projet font la même chose (rien n’est coché par défaut).

La fenêtre **{ui.featuresDialog.features}** dit : « Ajoutez des éléments prêts à l’emploi à votre jeu en un clic. Vous pouvez les désactiver à tout moment : rien de ce que vous avez créé n’est perdu. » Elle contient une carte par fonctionnalité, avec un interrupteur et une description. Fermez-la avec **{ui.featuresDialog.done}**.

![La fenêtre Fonctionnalités, avec les cartes Inventaire et Carte.](/novelworks-docs/screenshots/features-dialog.png)

## Les deux fonctionnalités

| Fonctionnalité | Ce qu’elle ajoute |
|---|---|
| **{ui.shared.features.inventory}** | Les joueurs ramassent des objets (clés, lettres, pièces, indices) et les voient dans un menu Inventaire. Un onglet **{ui.leftPanel.items}** apparaît à gauche, et les moments, les choix, les conditions et les zones peuvent donner, vérifier et utiliser des objets. Voir [Inventaire](/novelworks-docs/fr/features/inventory/). |
| **{ui.shared.features.map}** | Les joueurs ouvrent une carte et choisissent où aller. Un bouton **{ui.leftPanel.map}** apparaît à gauche : vous y dessinez des lieux et les reliez à des scènes, et un moment « Afficher la carte » l’ouvre pendant l’histoire. Voir [Carte](/novelworks-docs/fr/features/map/). |

Quand une fonctionnalité est activée, sa carte affiche **{ui.featuresDialog.openItems}** (Inventaire) ou les réglages de la carte avec **{ui.mapSettings.editMap}** (Carte). Quand elle est désactivée, la carte indique « Désactivé ».

## Ce que fait la désactivation d’une fonctionnalité

- Rien de ce que vous avez créé n’est supprimé : les objets, les réglages de la carte et tous les moments qui les utilisent sont conservés. Réactiver la fonctionnalité ramène tout.
- L’onglet, les boutons et les types de moments de la fonctionnalité disparaissent de l’éditeur.
- **Carte désactivée** : le jeu n’a pas de bouton Carte, et un moment « Afficher la carte » ne fait rien.
- **Inventaire désactivé** : le jeu n’a ni bouton Inventaire, ni entrée dans le menu pause, ni touche **I**. Les moments, les choix et les zones qui donnent ou vérifient des objets **s’exécutent encore** dans le jeu (et l’éditeur vous avertit) : réactivez donc la fonctionnalité si vous utilisez des objets.
- Les moments qui utilisent la fonctionnalité restent, et affichent un **avertissement** jusqu’à ce que vous la réactiviez.
- Si votre histoire utilise des objets, NovelWorks demande d’abord confirmation (**{ui.features.turnTheInventoryOff}**) et liste ce qui cessera de fonctionner. Il en va de même pour la carte quand vous avez des moments « Afficher la carte » (**{ui.features.turnTheMapOff}**).
- Si vous étiez dans l’espace de travail Carte, vous revenez au mode Histoire. Si vous étiez sur l’onglet Objets, vous passez à l’onglet Variables.

Dans l’Interface du jeu, les écrans Inventaire, bouton Carte et Notifications restent dans la liste, avec une note indiquant que les joueurs ne les voient pas tant que la fonctionnalité est désactivée.

## Les autres parties de votre jeu

L’Exploration (les scènes pointer-cliquer) n’est pas une fonctionnalité à activer : le moment Exploration est toujours disponible. Voir [Exploration](/novelworks-docs/fr/features/exploration/).
