---
title: Publier sur itch.io
description: Mettez votre jeu exporté en ligne sur itch.io pour que les gens puissent y jouer dans le navigateur.
---

L’[export web](/novelworks-docs/fr/publish/web-export/) crée un `.zip` avec `index.html` à sa racine, ce qui correspond à l’organisation qu’itch.io attend pour les jeux de navigateur. NovelWorks ne met rien en ligne lui-même : vous le faites sur le site web d’itch.io.

:::note
Ces étapes décrivent le site web d’itch.io, pas NovelWorks, et itch.io peut modifier ses pages. Si quelque chose est différent, l’aide d’itch.io fait référence.
:::

## Mettre en ligne

1. Sur itch.io, créez un nouveau projet (ou ouvrez un projet existant).
2. Pour le type de projet, choisissez **{ui.exportDialog.hTML}** (un jeu qui se joue dans le navigateur).
3. Envoyez le `.zip` créé par NovelWorks, et indiquez qu’il s’agit d’un fichier **à jouer dans le navigateur**.
4. Réglez la fenêtre d’affichage sur la **taille de jeu recommandée** que NovelWorks a affichée à la fin de l’export (c’est la résolution de votre projet). Les options comme un bouton plein écran sont à votre choix : le jeu a déjà le sien.
5. Enregistrez et ouvrez la page, puis vérifiez le jeu sur un ordinateur et sur un téléphone.

## Bon à savoir

- Les sauvegardes des joueurs sont stockées dans leur navigateur, pour l’adresse web de votre jeu. Si l’adresse reste la même quand vous mettez le jeu à jour, elles sont conservées (cela dépend d’itch.io, et cette documentation ne peut pas le garantir).
- N’envoyez pas seulement `index.html` : tous les fichiers de l’export sont nécessaires.
- Votre jeu se joue dans un cadre. Si vous donnez à la page une taille supérieure à la taille de jeu recommandée, le jeu est redimensionné pour tenir, avec des bandes noires.
- Les jeux NovelWorks commencent toujours par le court écran « Made with NovelWorks ».

## Tester avant de publier

Utilisez « Tester dans le navigateur » à la fin de l’export, ou jouez au dossier décompressé en ouvrant `index.html`.
