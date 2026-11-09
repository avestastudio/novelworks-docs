---
title: Export web
description: Transformez votre jeu en un dossier et un .zip qui se jouent dans n’importe quel navigateur, sur ordinateur et sur téléphone.
---

Choisissez **{ui.native.menu.file} → {ui.native.menu.exportForWeb}** (**Cmd+E** / **Ctrl+E**). NovelWorks crée une version de votre jeu qui se joue dans n’importe quel navigateur web, sur ordinateur et sur téléphone : **un dossier et un .zip** prêts à partager ou à téléverser. La commande a besoin d’un projet ouvert et n’est pas disponible pendant que vous jouez.

Dans la **démo**, vous pouvez exporter les jeux de 5 scènes ou moins qui restent dans les [limites de la démo](/novelworks-docs/fr/reference/licenses-and-editions/) : voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/). Dans la version complète, NovelWorks vous demande de l’[activer](/novelworks-docs/fr/getting-started/install-and-activate/) à chaque export, tant que vous ne l’avez pas fait.

## Les étapes

1. **Vérifiez les avertissements.** Si NovelWorks trouve quelque chose à vérifier, il le liste : « N points à vérifier d’abord. Le jeu reste jouable, mais les joueurs pourraient le remarquer. » Chaque ligne dit où (« Parc, moment 3 — … »). Le bouton devient alors **{ui.exportDialog.exportAnyway}**. Voir [Problèmes : tous les avertissements](/novelworks-docs/fr/testing/problems/).
2. **Choisissez où enregistrer.** **{ui.exportDialog.saveTo}** affiche un dossier. NovelWorks retient le dernier dossier que vous avez utilisé pour ce projet, et propose sinon le dossier qui contient votre projet. **{ui.exportDialog.change}** permet d’en choisir un autre.
3. Cliquez sur **{ui.exportDialog.export}**. Le bouton affiche « {tx.exportDialog.exporting} » jusqu’à la fin.
4. Quand la fenêtre indique « {tx.exportDialog.yourWebGameIsReady} », elle affiche le nom du .zip (à partager ou à téléverser ; le dossier à côté contient le même jeu décompressé) et trois boutons :
   - **{ui.exportDialog.showInFinder}**, qui montre le fichier dans votre gestionnaire de fichiers (son nom dit « Finder » sur tous les ordinateurs) ;
   - **{ui.exportDialog.testInBrowser}**, qui lance le jeu exporté depuis une adresse locale, dans votre navigateur par défaut ;
   - **{ui.exportDialog.done}**.

![La fenêtre affichée quand l’export est terminé.](/novelworks-docs/screenshots/export-done.png)

Si certaines images sont introuvables dans le dossier assets de votre projet, la fenêtre les liste (« N images sont introuvables… et n’ont pas pu être incluses »). L’export réussit quand même.

La fenêtre vous indique aussi la **taille de jeu recommandée** (la résolution de votre projet), et vous invite à vérifier le jeu dans des navigateurs d’ordinateur et de mobile.

## Ce que vous obtenez

NovelWorks crée, dans le dossier que vous avez choisi :

- un dossier nommé d’après votre jeu, se terminant par `-web` (par exemple `The-Rainy-Day-web`), et un `.zip` du même nom. Les accents sont supprimés et tout autre caractère est remplacé par `-`. Un titre sans lettres latines ni chiffres (en chinois, russe ou japonais, par exemple) devient `Game-web` ;
- à l’intérieur : `index.html`, `project.js` (les données de votre jeu), `game.js` (le lecteur), un dossier `assets` avec **seulement les images, vidéos et sons que votre jeu utilise**, et un dossier `fonts` avec les polices et leurs fichiers de licence.

Les images, vidéos et sons sont copiés tels quels, sans redimensionnement ni conversion. Les expressions et les avatars d’un personnage sont tous inclus quand le personnage apparaît ou parle. Les pièces de la garde-robe ne sont incluses que si une tenue les porte.

Si un dossier d’export du même nom existe déjà et qu’il s’agit d’un export précédent, il est remplacé. Si c’est autre chose, NovelWorks refuse et vous demande de choisir un autre dossier : il n’écrase donc jamais vos fichiers.

### Vidéos et sons

- NovelWorks ne refuse jamais une vidéo à cause de sa taille, mais vous prévient quand vous importez plus de 40 Mo de vidéo d’un coup : un jeu web avec de la vidéo met plus de temps à charger.
- Les vidéos et les sons MP3 et OGG entrent dans le `.zip` sans compression : ils gardent donc tout leur poids. Les fichiers WAV sont compressés quand cela les rend plus petits.
- Les navigateurs n’autorisent aucun son avant le premier clic ou la première touche du joueur. Ce qui devrait déjà être en train de jouer commence à ce moment-là.

### Ce qui est retiré

Vos données d’écriture privées sont effacées avant l’export : les **notes** des moments, les **résumés** des scènes et le **statut d’écriture**, les positions des scènes sur la carte de l’histoire, et les noms des zones d’exploration. Votre histoire, vos personnages et vos variables sont bien sûr conservés, **sous une forme claire et lisible** dans `project.js` : toute personne qui ouvre les fichiers peut lire tout votre texte et vos embranchements.

## L’ouvrir

- **Sur votre ordinateur** : double-cliquez sur `index.html`. Cela fonctionne sans serveur web.
- **Sur le web** : téléversez **tous les fichiers**, avec `index.html` à la racine. Si `project.js` est absent, la page affiche « {tx.player.missingProject} »

## Ce que vos joueurs obtiennent

- Un court **écran de lancement NovelWorks** d’abord : le logo et « {tx.splash.tagline} », environ 3 secondes, que l’on peut passer. (L’éditeur l’appelle l’écran « Made with NovelWorks ».)
- Le titre de la page est le titre de votre jeu, et la page est dans la langue de votre jeu. L’icône de la page est la première lettre du titre sur votre couleur principale.
- Un jeu mis à l’échelle de la fenêtre, en gardant ses proportions, avec des bandes noires autour, sur ordinateur et sur téléphone. Un bouton de **{rt.player.fullscreen}** quand le navigateur le permet, et un bouton **{ui.gameUIInspector.menu}** sur les écrans tactiles. Voir [Touches et écrans tactiles](/novelworks-docs/fr/player/keys-and-touch/).
- Des sauvegardes dans leur navigateur, conservées quand vous mettez le jeu à jour. Voir [Sauvegarder et charger](/novelworks-docs/fr/player/save-and-load/).
- Il a besoin de JavaScript. Sans lui, la page affiche « {tx.export.javascriptRequired} »

## Si l’export échoue

| Message | Ce qu’il faut faire |
|---|---|
| NovelWorks n’a pas le droit d’enregistrer dans ce dossier. | Choisissez un autre dossier, par exemple Documents ou Bureau. |
| Le disque est plein. | Libérez de la place, ou choisissez un dossier sur un autre disque. |
| Ce dossier n’existe plus. | Choisissez un autre dossier. |
| Un dossier nommé « … » est déjà présent et ne provient pas d’un export précédent. | Choisissez un autre dossier. |
| Activez NovelWorks pour exporter des jeux. | Ouvrez **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}** |
| La démo exporte des jeux de 5 scènes au plus, et votre projet en compte N. | Dans la démo seulement. Supprimez des scènes, ou procurez-vous la version complète. |
| Ce projet dépasse ce que la démo peut exporter : … | Dans la démo seulement. Retirez ce que le message liste, ou procurez-vous la version complète. |
| Le jeu n’a pas pu être exporté : … | La raison suit. Voir [Dépannage et messages](/novelworks-docs/fr/reference/troubleshooting/). |

## Publier

Pour mettre votre jeu en ligne, voir [Publier sur itch.io](/novelworks-docs/fr/publish/itch-io/), ou utilisez n’importe quel hébergeur web qui sert des jeux HTML.
