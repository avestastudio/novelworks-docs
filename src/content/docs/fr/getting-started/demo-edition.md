---
title: La démo gratuite
description: Ce que la démo de NovelWorks peut et ne peut pas faire, et son rapport avec la version complète.
---

**NovelWorks Demo** est l’édition gratuite. Vous avez tout l’éditeur et le mode Jouer, donc vous pouvez construire un jeu et le tester du début à la fin.

## La limite : les jeux exportés ont 5 scènes au maximum

Dans la démo, vous pouvez exporter votre jeu **s’il compte 5 scènes ou moins** et reste dans les limites ci-dessous. Les scènes comptées sont celles de l’onglet {ui.leftPanel.scenes}. (La scène cachée propre à l’espace de travail Carte ne compte pas.)

Si votre projet va au-delà, {ui.native.menu.exportForWeb} (dans le menu Fichier) ouvre une fenêtre intitulée {ui.demoExportDialog.exportYourGame}. Elle indique ce qui dépasse la limite : le nombre de scènes, et tout ce qui dépasse par ailleurs ce que permet la démo. Elle propose deux boutons :

- {ui.demoExportDialog.getTheFullVersion} ouvre la page de NovelWorks où vous pouvez obtenir la version complète. Dans la démo Steam, ce bouton est {ui.demoLimit.wishlist}.
- {ui.demoExportDialog.notNow} ferme la fenêtre.

Les scènes, les moments et les images sont illimités pendant que vous modifiez et jouez. Supprimez des scènes, ou obtenez la version complète, pour exporter un jeu plus long.

## Ce que vous pouvez ajouter dans la démo

La démo ouvre tout, mais vous empêche d’ajouter davantage que ceci :

| Élément | La démo autorise |
|---|---|
| Personnages | 3 |
| Tenues par personnage | 2 |
| Effets | 10 sur 25 : deux entrées, deux sorties, deux réactions, deux effets d’écran et deux transitions |
| Particules | 2 sur 5 : pluie et neige |
| Plans de caméra par moment | 2 |
| Fichiers son | 5 |
| Variables | 5 |
| Objets | 3 |

Quand vous atteignez une limite, une fenêtre vous le dit, avec {ui.demoLimit.continue} et un bouton vers la version complète. Rien n’est perdu. Un effet marqué d’un cadenas peut quand même être essayé dans la fenêtre des effets, mais pas ajouté à un moment.

Un projet qui dépasse déjà ces limites (par exemple un projet créé avec la version complète) s’ouvre normalement, et vous pouvez continuer à y travailler. Il ne peut pas être exporté depuis la démo tant qu’il ne respecte pas ces limites.

## Ce que montre un jeu de démo exporté

Un jeu exporté depuis la démo est marqué :

- l’écran de démarrage affiche **« Made with NovelWorks Demo »** au lieu de la phrase habituelle ;
- un petit logo **NovelWorks Demo** reste dans un coin pendant la partie.

Votre fichier de projet lui-même ne change jamais, et les jeux exportés depuis la version complète ne portent aucune de ces marques.

## La démo et la version complète ensemble

- Les deux éditions utilisent le **même format de projet**. Un projet créé dans la démo s’ouvre dans la version complète sans aucun changement, et inversement.
- La démo s’installe à côté de la version complète : vous pouvez donc garder les deux. Elle a ses propres réglages et sa propre liste de projets récents, et ne touche jamais à la licence de la version complète. Sa fenêtre et sa fenêtre À propos s’intitulent **NovelWorks Demo**.
- Pour supprimer les limites et les marques, obtenez la version complète et voyez [Installer et activer](/novelworks-docs/fr/getting-started/install-and-activate/).
