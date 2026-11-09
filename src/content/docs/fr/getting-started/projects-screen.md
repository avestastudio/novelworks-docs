---
title: L’écran des projets et les nouveaux projets
description: Ouvrir, retrouver et créer des projets, et ce que contient un dossier de projet.
---

L’**écran des projets** est la première chose que vous voyez au démarrage de NovelWorks, et l’endroit où vous revenez avec la flèche de retour de la barre du haut.

## La liste des projets

La liste montre vos **projets récents**, du plus récent au plus ancien, jusqu’à 30. Chaque ligne affiche :

- une image : le dernier écran du jeu enregistré, ou le premier décor, ou le logo NovelWorks pour un projet qui n’a pas encore d’images ;
- le nom du projet et le dossier où il se trouve ;
- la date de sa dernière ouverture.

Cliquez sur une ligne pour ouvrir le projet.

Au-dessus de la liste :

- {ui.projectHub.open} ouvre un dossier de projet de votre ordinateur. Le raccourci est **Cmd+O** sur Mac et **Ctrl+O** sur Windows.
- {ui.projectHub.newProject} démarre un nouveau projet (**Cmd+N** / **Ctrl+N**).
- La zone de recherche ({ui.projectHub.searchProjects}) filtre par nom ou par dossier. **Échap** l’efface et la flèche vers le bas saute au premier résultat.

Le bouton **…** d’une ligne (ou un clic droit dessus) ouvre un menu :

- {ui.projectHub.open_ed077f} ;
- {ui.projectHub.showInFinder} sur Mac, {ui.projectHub.showInExplorer} sur Windows ;
- {ui.projectHub.removeFromList} : retire le projet de cette liste seulement.

Si vous avez déplacé ou supprimé un dossier de projet, sa ligne devient grise et affiche {ui.projectHub.folderNotFound}. Cliquez sur {ui.projectHub.locate} et choisissez le nouvel emplacement du dossier.

Le côté gauche de l’écran contient aussi {ui.projectHub.reportABug}, le numéro de version et, dans la version complète avant l’activation, {ui.projectHub.activateNovelWorks}.

## Créer un nouveau projet

Cliquez sur {ui.projectHub.newProject}.

1. Tapez le {ui.newProjectScreen.projectName}. NovelWorks retire les caractères qu’un nom de dossier ne peut pas contenir (`/ \ : * ? " < > |`) et vous prévient si le nom est vide ou déjà pris.
2. Vérifiez l’{ui.newProjectScreen.location}. Elle commence au dernier endroit utilisé, ou dans Documents → NovelWorks. Cliquez sur {ui.newProjectScreen.browse} pour choisir un autre endroit. La ligne {ui.newProjectScreen.willBeCreatedIn} montre le dossier final.
3. Si vous voulez, cochez les {ui.newProjectScreen.features} dont votre jeu a besoin : {ui.shared.features.inventory} et {ui.shared.features.map}. Elles sont toutes désactivées par défaut et vous pourrez les activer ou les désactiver plus tard sans rien perdre.
4. Cliquez sur {ui.newProjectScreen.createProject} (ou appuyez sur **Entrée**). **Échap** annule.

NovelWorks crée le dossier, avec un fichier `project.json` et un dossier `assets` vide, et ouvre le projet avec une scène, « {tx.shared.project.firstScene} », qui contient une ligne de dialogue vide. Un dossier `backups` apparaît la première fois qu’une sauvegarde de secours est faite.

## Ce que contient un dossier de projet

- `project.json` : toute votre histoire, dans un seul fichier.
- `assets` : les images, vidéos et sons que vous avez importés.
- `backups` : les versions précédentes de `project.json` (voir [Enregistrement, sauvegardes de secours et annulation](/novelworks-docs/fr/getting-started/saving-and-undo/)).

Pour copier un projet sur un autre ordinateur, copiez le dossier entier. Vous pourrez ensuite l’ouvrir avec {ui.projectHub.open}.

## Projets plus anciens et plus récents

- Un projet créé avec une version **plus ancienne** de NovelWorks s’ouvre normalement. Avant de le mettre à niveau, NovelWorks enregistre une copie exacte de l’original dans `backups`, et affiche une barre avec {ui.store.showCopy}. Rien n’est modifié sur le disque tant que vous n’enregistrez pas.
- Un projet enregistré par une version **plus récente** de NovelWorks ne peut pas être ouvert. Mettez d’abord NovelWorks à jour.
