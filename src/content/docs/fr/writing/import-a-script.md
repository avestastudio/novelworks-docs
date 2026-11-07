---
title: Importer et exporter un script
description: Importez un fichier texte dans votre projet sous forme de scènes, et enregistrez tout votre jeu en texte.
---

Vous pouvez écrire votre histoire dans n’importe quel éditeur de texte et l’importer dans NovelWorks, ou enregistrer tout le jeu dans un fichier texte. Le texte utilise le format du [mode Script](/novelworks-docs/fr/writing/script-mode/).

## Importer un script

Choisissez **Fichier → {ui.native.menu.importScript}**. (Il n’y a pas de raccourci clavier. Le menu a besoin d’un projet ouvert.) La fenêtre **{ui.scriptImport.title}** s’ouvre.

1. Collez votre texte dans la zone, ou cliquez sur **{ui.scriptImport.openFile}** et choisissez un fichier `.txt` ou `.md`. Seul le texte brut est lu, pas les fichiers Word.
2. Cliquez sur le bouton en bas :
   - si votre texte contient des lignes `# Heading`, **{ui.scriptImport.importAsScenes}** : chaque titre devient une scène de votre jeu ;
   - sinon, **{ui.scriptImport.importInto}** la scène sélectionnée : les lignes sont ajoutées à la fin de cette scène.

NovelWorks nettoie d’abord le texte : les guillemets doubles courbes (“ ”) deviennent des guillemets droits, et un `•` ou un `·` suivi d’une espace au début d’une ligne devient `-`. Ensuite, il passe en vue Script et ajoute votre texte **comme si vous l’aviez tapé**. Il est appliqué après le délai habituel d’une demi-seconde.

### Ce que vous obtenez

- Une ligne `Name : text` est un dialogue si un personnage porte ce nom. Sinon, c’est de la narration, le nom est souligné et une correction rapide crée le personnage.
- Les décors, scènes, variables et objets inconnus sont soulignés eux aussi. Le bouton **{ui.scriptMode.createMissing_other}** les crée tous en un clic.
- Il n’y a pas d’étape d’aperçu ni de question sur les personnages qui parlent : ils sont reconnus grâce à la règle `Name : text` et à vos personnages existants.
- L’import **ajoute** du texte. Il ne remplace pas ce qui est déjà là.

:::note
Avec des `# headings`, **chaque titre crée toujours une nouvelle scène**, même si votre jeu a déjà une scène portant ce nom : vous obtenez alors deux scènes avec le même nom, et celle qui existait n’est pas modifiée. Renommez ou supprimez la scène en trop si vous n’en vouliez pas.
:::

La fenêtre indique que l’import est une seule étape d’annulation. En pratique, il a fallu appuyer **deux** fois sur **{ui.native.menu.undo}** pour retirer un import : si les nouvelles scènes sont toujours là après la première fois, appuyez de nouveau.

## Exporter le script

Choisissez **Fichier → {ui.native.menu.exportScript}**. NovelWorks demande où enregistrer, avec le titre **{ui.native.exportIpc.saveTheScript}**, et écrit un fichier `.txt`.

- Le fichier contient **tout le jeu** : chaque scène sous un titre `# Name`, avec une ligne vide entre les scènes. La scène cachée de la Carte n’est pas incluse. Vous ne pouvez pas exporter une seule scène.
- Il est écrit en UTF-8, avec les mots de la langue actuelle de votre éditeur.
- Le nom de fichier par défaut est le titre de votre projet, où les caractères qu’un nom de fichier ne peut pas contenir sont remplacés par `-`.
- L’export ne change rien dans votre projet.

Vous pouvez réimporter le fichier exporté avec **{ui.native.menu.importScript}**.
