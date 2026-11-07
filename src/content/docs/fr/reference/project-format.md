---
title: Format du projet, compatibilité et sauvegardes
description: Ce que contient un dossier de projet, comment les anciens et les nouveaux projets sont gérés, et comment votre travail est protégé.
---

## Ce qu’est un projet

Un projet est un **dossier** que vous pouvez copier, déplacer ou sauvegarder comme n’importe quel autre :

- `project.json` : tout votre jeu, dans un seul fichier (du texte au format JSON, avec une indentation de 2 espaces).
- `assets` : les images que vous avez importées.
- `backups` : les versions plus anciennes de `project.json`, et `backups/deleted-assets` pour les images que vous avez supprimées.

À chaque enregistrement, NovelWorks écrit le fichier en toute sécurité (dans un fichier temporaire, puis il le renomme) : un plantage pendant l’enregistrement ne l’abîme donc pas.

## La version du format

`project.json` porte une **version de format**. Cette version de NovelWorks écrit le format **17**. Chaque fois que le format a changé, NovelWorks a gagné une mise à niveau automatique : tous les anciens projets s’ouvrent donc encore. Parmi les changements :

| Format | Ce qu’il a ajouté |
|---|---|
| 2 | Les options de la boîte de dialogue (coins en 9 découpes, couleur du texte, une couleur pour tous les noms) et la langue de correction orthographique. |
| 3, 4 | Les notes de l’auteur, les positions sur la carte de l’histoire, les résumés de scène et l’état d’écriture. |
| 5 | Les moments d’exploration (zones et accessoires). |
| 6 | Les objets et les fonctionnalités facultatives. |
| 7 | Le placement libre des personnages. |
| 8 | La fonctionnalité Carte. |
| 9 | Un identifiant de jeu, pour les sauvegardes des joueurs, et l’apparence des écrans Enregistrer et Charger. |
| 10, 12, 13 | L’apparence des écrans Historique, menu rapide et Options. |
| 11 | La carte dans son propre espace. |
| 14 | Les images d’intro et l’avertissement de contenu. |
| 15 | Les personnages restent en scène : un moment ne garde que ce qu’il change. |
| 16 | Un Si… avec plusieurs cas. |
| 17 | Une option de choix qui n’apparaît que si une condition est remplie. |

## Ouvrir un projet plus ancien

- NovelWorks met le projet à niveau **en mémoire** seulement. Avant de le confier à l’éditeur, il enregistre une **copie exacte** du `project.json` d’origine dans `backups`, nommée par exemple `project-2026-11-07_17-15-04-migration.json`, et vérifie que la copie est identique.
- Si la copie ne peut pas être faite, le projet **n’est pas ouvert** et rien n’est modifié.
- Une barre vous indique où se trouve la copie (avec **{ui.store.showCopy}**) et vous rappelle qu’il faut enregistrer pour conserver la mise à niveau. Le projet compte comme non enregistré.
- Le rouvrir sans enregistrer réutilise la même copie. Ces copies « {tx.restoreBackupDialog.beforeUpgrade} » ne sont jamais supprimées.
- Vous pouvez revenir à l’original avec **{ui.native.menu.file} → Restaurer depuis une sauvegarde de secours…**.

Les sauvegardes de vos jeux par les joueurs restent lisibles : elles désignent les scènes et les moments par leur identité.

## Ouvrir un projet plus récent

Un projet enregistré par une version **plus récente** de NovelWorks ne peut pas être ouvert : NovelWorks vous le dit et vous demande de faire la mise à jour. Rien n’est modifié.

Si un dossier n’a pas de `project.json`, ou si le fichier est endommagé (ce n’est pas du JSON valide), NovelWorks vous le dit et ne l’ouvre pas.

## Sauvegardes

Voir [Enregistrement, sauvegardes et annulation](/novelworks-docs/fr/getting-started/saving-and-undo/) : une sauvegarde avant chaque enregistrement manuel, au plus une toutes les 15 minutes pour l’enregistrement automatique, les 20 plus récentes plus la plus récente de chacun des 7 derniers jours.

## Modifier le fichier à la main

Vous pouvez ouvrir `project.json` dans un éditeur de texte, mais ne le modifiez pas pendant que NovelWorks a le projet ouvert, et faites-en d’abord une copie. NovelWorks refuse un fichier qu’il ne peut pas lire plutôt que de deviner.

## Démo et version complète

Les deux éditions utilisent exactement le même format. Voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/).
