---
title: Ressources
description: Importer des images, choisir leur type et les gérer dans l’onglet Ressources.
---

Chaque image de votre jeu est une **image** de votre projet : décors, images de personnages, illustrations, objets et images pour les écrans propres au jeu. Elles se trouvent dans l’onglet **{ui.leftPanel.assets}** et sont copiées dans le dossier `assets` de votre projet.

## Formats et limites

- **PNG, JPG et WebP** uniquement (aussi `.jpeg`).
- Jusqu’à **50 Mo** par fichier. Les autres fichiers sont ignorés, et NovelWorks les liste.
- Rien n’est redimensionné ni converti. Un décor plus petit que l’écran de jeu est étiré et peut paraître flou, et la fenêtre d’importation vous en avertit.

## Importer des images

Trois façons :

- Cliquez sur **{ui.assetsTab.import}** dans l’onglet Ressources (vous pouvez choisir plusieurs fichiers).
- **Faites glisser des images sur la fenêtre de l’éditeur.** Une surcouche affiche « {tx.dropOverlay.dropYourImagesHere} ». Après un dépôt, l’onglet Ressources s’ouvre.
- Utilisez le raccourci d’importation d’un sélecteur, par exemple quand vous choisissez un décor ou une expression.

Une fenêtre vous demande alors de vérifier **{ui.importDialog.name}** et **{ui.importDialog.type}** pour chaque image. NovelWorks devine le type pour vous faire gagner du temps : une image avec de la transparence est devinée comme un sprite, une image en paysage ou carrée comme un décor, une image en portrait comme un sprite. Vous pouvez changer chaque choix. **{ui.dialogs.cancel}** ne copie rien.

Pour un **sprite de personnage**, vous pouvez aussi choisir **{ui.importDialog.addToCharacter}** : un personnage existant, ou **{ui.importDialog.newCharacter}**, et le **{ui.importDialog.expressionName}**. Si un fichier s’appelle par exemple `mia_happy` et qu’un personnage s’appelle Mia, NovelWorks propose de lui-même Mia et « happy ». Avec plusieurs images, vous pouvez régler le type ou le personnage de toutes en une fois.

## Types d’images

| Type | À quoi il sert |
|---|---|
| {ui.assetTypes.background} | Remplit l’écran derrière les personnages. |
| {ui.assetTypes.characterSprite} | Une image d’un personnage, utilisée pour les expressions. |
| {ui.assetTypes.cG} | Une illustration plein écran pour un événement spécial. |
| {ui.assetTypes.prop} | Une image d’un objet (une clé, une lettre…), placée sur la scène des moments d’exploration. |
| {ui.assetTypes.uI} | Une image pour les écrans propres au jeu : boîte de dialogue, logo, boutons. |
| {ui.assetTypes.avatar} | Un petit portrait affiché à côté du nom de celui qui parle. |

Le sélecteur de décor propose les décors et les CG.

## L’onglet Ressources

Des pastilles filtrent la liste par type, avec le nombre d’images de chacun. Sélectionnez une image pour la voir dans l’inspecteur :

- **{ui.assetInspector.name}** : le nom affiché dans NovelWorks. Le changer ne renomme pas le fichier ;
- **{ui.assetInspector.type}** : vous pouvez le changer à tout moment ;
- **{ui.assetInspector.usedIn}** : où l’image est utilisée, ou « {tx.assetInspector.notUsedYet} » ;
- **{ui.assetInspector.file}** : son fichier dans le dossier `assets`.

Faites un clic droit sur une image pour **{ui.contextMenus.rename}**, **{ui.contextMenus.showUsages}** et **{ui.contextMenus.delete}**.

Les noms de fichiers sont nettoyés (les caractères qu’un nom de fichier ne peut pas contenir sont retirés), et si un nom est déjà pris, le nouveau fichier devient `name-2.png`, `name-3.png`… Un fichier existant n’est jamais écrasé.

## Remplacer une image

Une image ne peut pas être remplacée sur place. Pour un personnage, cliquez sur l’image d’une expression et choisissez **{ui.characterInspector.changeImage}** : cela importe ou choisit une autre image et fait pointer l’expression vers elle. L’ancienne image reste dans l’onglet Ressources.

## Supprimer une image

Cliquez sur **{ui.assetInspector.deleteImage}**. NovelWorks demande d’abord. Si l’image est utilisée, il liste où, et vous prévient que ces endroits n’auront plus d’image. Le fichier n’est pas effacé tout de suite : quand vous enregistrez, il est déplacé dans `backups/deleted-assets`, et il revient si vous annulez ou restaurez une sauvegarde de secours. Voir [Enregistrer, sauvegardes et annulation](/novelworks-docs/fr/getting-started/saving-and-undo/).
