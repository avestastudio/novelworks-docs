---
title: Publier sur itch.io
description: Téléversez votre jeu exporté sur itch.io pour que l’on puisse y jouer dans le navigateur.
---

L’[export web](/novelworks-docs/fr/publish/web-export/) crée un `.zip` avec `index.html` à sa racine, ce qui est la structure qu’itch.io attend pour les jeux jouables dans le navigateur. NovelWorks ne téléverse rien lui-même : vous le faites sur le site web d’itch.io.

:::note
Ces étapes décrivent le site web d’itch.io lui-même, pas NovelWorks, et itch.io peut modifier ses pages. Si quelque chose est différent, l’aide d’itch.io fait référence.
:::

## Téléverser

1. Sur itch.io, créez un nouveau projet (ou ouvrez un projet existant).
2. Pour le type de projet, choisissez **{ui.exportDialog.hTML}** (un jeu qui se joue dans le navigateur).
3. Téléversez le `.zip` créé par NovelWorks, et indiquez qu’il s’agit d’un fichier qui **sera lu dans le navigateur**.
4. Réglez la fenêtre d’affichage sur la **taille de jeu recommandée** que NovelWorks a indiquée à la fin de l’export (c’est la résolution de votre projet). Les options comme un bouton de plein écran, c’est à vous de voir : le jeu a déjà le sien.
5. Enregistrez, ouvrez la page, et vérifiez le jeu sur un ordinateur et sur un téléphone.

## Bon à savoir

- Les sauvegardes des joueurs sont conservées dans leur navigateur, pour l’adresse web de votre jeu. Si l’adresse reste la même quand vous mettez le jeu à jour, elles sont conservées (cela dépend d’itch.io, et cette documentation ne peut pas le promettre).
- Ne téléversez pas seulement `index.html` : tous les fichiers de l’export sont nécessaires.
- Votre jeu se joue dans un cadre. Si vous donnez à la page une taille plus grande que la taille de jeu recommandée, le jeu est mis à l’échelle pour tenir, avec des bandes noires.
- Les jeux NovelWorks commencent toujours par le court écran « Made with NovelWorks ».

## Tester avant de publier

Utilisez **{ui.exportDialog.testInBrowser}** à la fin de l’export, ou jouez au dossier décompressé en ouvrant `index.html`.
