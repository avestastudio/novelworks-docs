---
title: Tenues et garde-robe
description: Habillez un personnage avec des pièces à combiner, enregistrez des tenues et changez-les au fil de l’histoire.
---

La garde-robe vous permet d’habiller un personnage avec des images posées sur lui. Vous combinez des pièces, vous enregistrez le résultat comme une tenue, et vous choisissez la tenue dans votre histoire.

## Ouvrir la garde-robe

Dans l’onglet {ui.leftPanel.characters}, sélectionnez un personnage et cliquez sur le grand bouton {ui.wardrobe.open}. Le même bouton se trouve dans le panneau d’un personnage en scène.

![La garde-robe : le personnage en grand, les pièces par catégorie et les tenues enregistrées en bas.](/novelworks-docs/screenshots/wardrobe.png)

La fenêtre montre :

- le personnage en grand, avec ses expressions en dessous, pour que vous puissiez vérifier chacune ;
- les catégories et leurs pièces, sur le côté ;
- les tenues enregistrées, en bas.

Vous pouvez annuler chaque changement avec `Cmd+Z` / `Ctrl+Z` tant que la fenêtre est ouverte.

## Ajouter des pièces

Une pièce est une image à fond transparent, rangée dans une catégorie. Déposez des fichiers sur une catégorie, ou cliquez sur {ui.wardrobe.addPiece} (le signe plus). Les pièces sont un type d’image à part, {ui.assetTypes.clothing}, et le sélecteur de pièces ne montre que ce type.

Un personnage porte une pièce par catégorie. Pour un chapeau et un collier ensemble, utilisez deux catégories.

## Catégories

Une nouvelle garde-robe a quatre catégories : {ui.wardrobe.category.shoes}, {ui.wardrobe.category.bottoms}, {ui.wardrobe.category.tops} et {ui.wardrobe.category.accessories}.

- Cliquez sur le nom d’une catégorie pour la renommer. Les catégories ne servent pas qu’aux vêtements : les cheveux marchent aussi.
- {ui.wardrobe.addCategory} en ajoute une, jusqu’à 12.
- {ui.wardrobe.removeCategory} supprime la catégorie et ses pièces, et les retire des tenues. Les images restent dans vos ressources.
- {ui.wardrobe.required} retire le choix {ui.wardrobe.none} de cette catégorie.

## Placer une pièce

Cliquez sur une pièce. Un cadre apparaît autour d’elle sur le personnage.

- **Faites glisser** le cadre pour déplacer la pièce.
- **Tirez le coin** pour la redimensionner, de 5 % à 400 %.
- Utilisez les **flèches du clavier** pour de petits pas. Maintenez `Shift` pour des pas plus grands.
- {ui.wardrobe.resetPlacement} annule tout cela.

Vous placez une pièce une seule fois. Toutes les tenues et expressions qui l’utilisent suivent.

Une image de la même forme que le personnage se pose exactement sur lui quand vous l’ajoutez. Une image d’une autre forme, comme un chapeau découpé à part, arrive à sa propre taille.

## Ordre des calques

La liste des catégories montre le premier plan en haut. {ui.wardrobe.moveForward} et {ui.wardrobe.moveBack} déplacent une catégorie.

La rangée {ui.wardrobe.expressionLayer} se déplace de la même façon. Déplacez-la pour mettre des cheveux par-dessus le visage, ou un corps en dessous.

## Essayer et enregistrer

Cliquer sur une pièce ne fait que l’essayer. Rien n’est encore enregistré.

- {ui.wardrobe.saveAsNew} crée une tenue avec ce que porte le personnage.
- {ui.wardrobe.updateOutfit} apparaît quand vous avez changé la tenue sélectionnée, et enregistre le changement.
- {ui.outfits.default} est le personnage sans aucune pièce.

Sélectionnez une tenue en bas pour la renommer, ou pour la supprimer avec {ui.outfits.remove}.

## Dessins entiers

Si votre personnage est dessiné d’un seul bloc, vous pouvez vous passer des calques. Sélectionnez une tenue et ouvrez {ui.wardrobe.wholeDrawings}. Donnez-lui un dessin fini par expression. Un dessin entier remplace les calques pour cette expression, dans cette tenue.

## Changer la tenue dans l’histoire

Cliquez sur le personnage sur l’écran du jeu. Vous avez alors trois façons de faire :

- la section {ui.stageControls.outfit} du panneau de droite, avec le personnage montré dans chaque tenue ;
- le menu {ui.stageControls.outfit} dans la petite barre au-dessus du personnage ;
- {ui.contextMenus.outfit} dans le menu du clic droit.

La tenue reste jusqu’à ce qu’un moment suivant la change, comme une expression. {ui.stage.scopeLabel} fonctionne comme d’habitude : voir [Le plateau](/novelworks-docs/fr/concepts/stage/).

## En mode Script

Ajoutez le mot `outfit` et le nom de la tenue à une ligne `show` :

```
show : Mia happy outfit Uniform left
show : Mia outfit default
```

`outfit default` revient à la tenue de départ. Un nom de tenue qui n’existe pas est signalé, avec un moyen de la créer.

## Supprimer, copier et coller

- Si vous supprimez une tenue, les personnages qui la portaient reviennent à {ui.outfits.default}.
- Si vous supprimez une pièce, elle est retirée des tenues qui l’utilisent.
- Quand vous collez des moments dans un autre projet, la tenue est retrouvée par son nom. S’il n’y en a aucune de ce nom, le personnage porte la tenue de départ.

## Export

Seules les pièces portées par une tenue enregistrée vont dans votre jeu exporté.

## Limites

- Un personnage peut avoir jusqu’à 20 tenues en plus de celle de départ, et 200 pièces.
- Les avatars ne changent pas avec la tenue.
- La démo permet 2 tenues par personnage. Voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/).
