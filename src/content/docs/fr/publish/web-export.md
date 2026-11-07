---
title: Export web
description: Transformez votre jeu en un dossier et un .zip qui se jouent dans n’importe quel navigateur, sur ordinateur et sur téléphone.
---

Choisissez **Fichier → {ui.native.menu.exportForWeb}** (**Cmd+E** / **Ctrl+E**). NovelWorks crée une version de votre jeu qui se joue dans n’importe quel navigateur web, sur ordinateur et sur téléphone : **un dossier et un .zip** prêts à partager ou à mettre en ligne. La commande demande un projet ouvert et n’est pas disponible pendant que vous jouez.

Dans la **démo**, l’export est limité aux jeux de 5 scènes ou moins : voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/). Dans la version complète, NovelWorks vous demande de [l’activer](/novelworks-docs/fr/getting-started/install-and-activate/) à chaque export, tant que ce n’est pas fait.

## Les étapes

1. **Vérifiez les avertissements.** Si NovelWorks trouve quelque chose à vérifier, il le liste : « N points à vérifier d’abord. Le jeu se joue quand même, mais les joueurs pourraient le remarquer. » Chaque ligne indique où (« Parc, moment 3 — … »). Le bouton s’appelle alors **{ui.exportDialog.exportAnyway}**. Voir [Problèmes](/novelworks-docs/fr/testing/problems/).
2. **Choisissez où enregistrer.** **{ui.exportDialog.saveTo}** affiche un dossier. NovelWorks retient le dernier dossier utilisé pour ce projet ; sinon il propose le dossier qui contient votre projet. **{ui.exportDialog.change}** permet d’en choisir un autre.
3. Cliquez sur **{ui.exportDialog.export}**. Le bouton affiche « Export en cours… » jusqu’à la fin.
4. Quand la fenêtre indique « Votre jeu web est prêt », elle affiche le nom du .zip (à partager ou à mettre en ligne ; le dossier à côté contient le même jeu, non compressé) et trois boutons :
   - **{ui.exportDialog.showInFinder}**, qui affiche le fichier dans votre gestionnaire de fichiers (son nom dit « Finder » sur tous les ordinateurs) ;
   - **{ui.exportDialog.testInBrowser}**, qui lance le jeu exporté depuis une adresse locale dans votre navigateur par défaut ;
   - **{ui.exportDialog.done}**.

![La fenêtre affichée quand l’export est terminé.](/novelworks-docs/screenshots/export-done.png)

Si certaines images n’ont pas été trouvées dans le dossier de ressources de votre projet, la fenêtre les liste (« N images introuvables… et n’ont pas pu être incluses »). L’export réussit quand même.

La fenêtre vous indique aussi la **taille de jeu recommandée** (la résolution de votre projet), et vous invite à vérifier le jeu dans des navigateurs d’ordinateur et de mobile.

## Ce que vous obtenez

NovelWorks crée, dans le dossier que vous avez choisi :

- un dossier qui porte le nom de votre jeu, suivi de `-web` (par exemple `The-Rainy-Day-web`), et un `.zip` du même nom. Les accents sont supprimés et tout autre caractère est remplacé par `-`. Un titre sans lettre latine ni chiffre (en chinois, en russe ou en japonais, par exemple) devient `Game-web` ;
- à l’intérieur : `index.html`, `project.js` (les données de votre jeu), `game.js` (le lecteur), un dossier `assets` qui contient **uniquement les images utilisées par votre jeu**, et un dossier `fonts` avec les polices et leurs fichiers de licence.

Les images sont copiées telles quelles, sans redimensionnement ni conversion. Les expressions et les avatars d’un personnage sont tous inclus quand le personnage apparaît ou parle.

Si un dossier d’export du même nom existe déjà et qu’il s’agit d’un export précédent, il est remplacé. Si c’est autre chose, NovelWorks refuse et vous demande de choisir un autre dossier : vos fichiers ne sont donc jamais écrasés.

### Ce qui est retiré

Vos données d’écriture privées sont effacées avant l’export : les **notes** des moments, les **résumés** et l’**état d’écriture** des scènes, les positions des scènes sur la carte de l’histoire, et les noms des zones d’exploration. Votre histoire, vos personnages et vos variables sont bien sûr conservés, **sous une forme claire et lisible**, dans `project.js` : toute personne qui ouvre les fichiers peut lire tous vos textes et toutes vos branches.

## L’ouvrir

- **Sur votre ordinateur** : double-cliquez sur `index.html`. Cela fonctionne sans serveur web.
- **Sur le web** : mettez en ligne **tous les fichiers**, avec `index.html` à la racine. Si `project.js` manque, la page affiche « Les données du jeu (project.js) sont absentes. Mettez en ligne tous les fichiers de l’export, pas seulement index.html. »

## Ce que reçoivent vos joueurs

- Un court **écran de démarrage NovelWorks** d’abord : le logo et « Créé avec NovelWorks · L’éditeur de visual novels sans code », pendant environ 3 secondes, qu’on peut passer. (L’éditeur l’appelle l’écran « Made with NovelWorks ».)
- Le titre de la page est le titre de votre jeu, et la page est dans la langue de votre jeu. L’icône de la page est la première lettre du titre sur votre couleur principale.
- Un jeu qui se redimensionne pour tenir dans la fenêtre, en gardant ses proportions, avec des bandes noires autour, sur ordinateur et sur téléphone. Un bouton « Plein écran » quand le navigateur le permet, et un bouton **{ui.gameUIInspector.menu}** sur les écrans tactiles. Voir [Touches et écrans tactiles](/novelworks-docs/fr/player/keys-and-touch/).
- Des sauvegardes dans leur navigateur, conservées quand vous mettez le jeu à jour. Voir [Sauvegarder et charger](/novelworks-docs/fr/player/save-and-load/).
- Il a besoin de JavaScript. Sans lui, la page affiche « Ce jeu a besoin de JavaScript pour fonctionner. »

## Si l’export échoue

| Message | Ce qu’il faut faire |
|---|---|
| NovelWorks n’a pas le droit d’enregistrer dans ce dossier. | Choisissez un autre dossier, comme Documents ou Bureau. |
| Le disque est plein. | Libérez de l’espace, ou choisissez un dossier sur un autre disque. |
| Ce dossier n’existe plus. | Choisissez un autre dossier. |
| Un dossier nommé « … » est déjà là et n’est pas un export précédent. | Choisissez un autre dossier. |
| Activez NovelWorks pour exporter des jeux. | Ouvrez **Aide → Activer NovelWorks…** |
| La démo exporte des jeux de 5 scènes au maximum, et votre projet en compte N. | Dans la démo uniquement. Supprimez des scènes, ou obtenez la version complète. |
| Le jeu n’a pas pu être exporté : … | La raison suit. Voir [Dépannage](/novelworks-docs/fr/reference/troubleshooting/). |

## Publier

Pour mettre votre jeu en ligne, voir [Publier sur itch.io](/novelworks-docs/fr/publish/itch-io/), ou utilisez n’importe quel hébergeur web qui sert des jeux HTML.
