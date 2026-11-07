---
title: Enregistrer, sauvegardes de secours et annuler
description: Comment NovelWorks enregistre votre travail, garde des versions précédentes et vous laisse revenir en arrière.
---

## Enregistrer

- Cliquez sur **{ui.topBar.save}**, choisissez **Fichier → {ui.native.menu.save}**, ou appuyez sur **Cmd+S** (Mac) / **Ctrl+S** (Windows). Le message « Projet enregistré. » le confirme.
- NovelWorks fait aussi un **enregistrement automatique** : toutes les 2 minutes, et chaque fois que la fenêtre perd le focus, mais seulement si vous avez des changements non enregistrés. La barre du haut affiche alors **{ui.topBar.savedAuto}**.
- L'indicateur d'enregistrement affiche **{ui.topBar.unsavedChanges}** jusqu'au prochain enregistrement.
- Si vous fermez la fenêtre ou le projet avec des changements non enregistrés, NovelWorks demande s'il faut enregistrer, ne pas enregistrer, ou annuler.

## Sauvegardes de secours

Les sauvegardes de secours sont des copies précédentes de `project.json`, conservées dans le dossier `backups` de votre projet.

- Une sauvegarde est faite **avant chaque enregistrement manuel**.
- Avec l'enregistrement automatique, une sauvegarde est faite **toutes les 15 minutes au plus**.
- Aucune sauvegarde n'est faite si rien n'a changé depuis la plus récente.
- NovelWorks garde les **20 plus récentes**, plus **la sauvegarde la plus récente de chacun des 7 derniers jours**. Les plus anciennes sont supprimées.
- Les copies faites quand un ancien projet est mis à niveau (**{ui.restoreBackupDialog.beforeUpgrade}**) ne sont jamais supprimées.
- Les images que vous supprimez du projet sont déplacées dans `backups/deleted-assets` au lieu d'être effacées, pour qu'une sauvegarde puisse encore les retrouver. Elles sont nettoyées dès qu'aucune sauvegarde conservée n'en a plus besoin.

### Revenir à une sauvegarde de secours

1. Choisissez **Fichier → {ui.native.menu.restoreFromBackup}**.
2. Choisissez une version dans la liste. Chaque ligne indique sa date, son type (**{ui.restoreBackupDialog.saved}**, **{ui.restoreBackupDialog.autosave}**, **{ui.restoreBackupDialog.beforeRestoringABackup}** ou **{ui.restoreBackupDialog.beforeUpgrade}**) et le nombre de scènes et de moments qu'elle contient.
3. Cliquez sur **{ui.restoreBackupDialog.restoreThisVersion}** (ou double-cliquez sur la ligne).

Votre version actuelle est conservée elle aussi comme sauvegarde, et **{ui.native.menu.undo}** la ramène.

## Annuler et rétablir

**Édition → {ui.native.menu.undo}** (**Cmd+Z** / **Ctrl+Z**) et **{ui.native.menu.redo}** (**Shift+Cmd+Z** sur Mac, **Ctrl+Y** ou **Ctrl+Shift+Z** sur Windows) reculent et avancent dans vos changements. La barre du haut a les deux mêmes flèches.

- NovelWorks retient les **200** dernières étapes.
- La saisie dans une même zone de texte est regroupée : une série de frappes forme une seule étape, qui se termine par une pause d'environ une seconde.
- Une action qui change plusieurs choses à la fois, comme un changement qui atteint les moments suivants, forme une seule étape.
- Annuler fonctionne encore après un enregistrement. Il est réinitialisé quand vous ouvrez ou fermez un projet.
- Annuler et rétablir sont désactivés pendant que vous jouez.
- Changer le thème ou la langue de l'éditeur, redimensionner les panneaux et passer d'un onglet à l'autre ne font pas partie de l'historique.

## Projets plus anciens

NovelWorks ouvre les projets créés avec des versions plus anciennes et les met à niveau. Avant cela, il enregistre une copie exacte du `project.json` d'origine dans `backups`, et une barre en haut indique où, avec **{ui.store.showCopy}**. Si la copie ne peut pas être faite, le projet n'est pas ouvert et rien n'est modifié. Un projet issu d'une version plus récente de NovelWorks est refusé.
