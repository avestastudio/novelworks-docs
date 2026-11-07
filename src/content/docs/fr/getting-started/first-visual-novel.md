---
title: Votre premier roman visuel
description: Un tutoriel pas à pas, d’un projet vide à un jeu auquel vous pouvez jouer.
---

Vous allez créer une toute petite histoire avec un décor, un personnage à deux expressions, quelques lignes de dialogue et un choix menant à deux fins. Il vous faut trois images : un décor, et deux images du **même personnage** avec des expressions différentes (par exemple content et surpris).

## 1. Créer le projet

1. Ouvrez NovelWorks. Sur l’[écran des projets](/novelworks-docs/fr/getting-started/projects-screen/), cliquez sur {ui.projectHub.newProject}.
2. Tapez un nom, vérifiez l’emplacement (ou cliquez sur {ui.newProjectScreen.browse}), laissez les fonctionnalités décochées et cliquez sur {ui.newProjectScreen.createProject}.

Le projet s’ouvre avec une scène, « {tx.shared.project.firstScene} », et une ligne de dialogue vide.

## 2. Ajouter vos images

1. Dans le panneau de gauche, ouvrez l’onglet {ui.leftPanel.assets}.
2. Cliquez sur {ui.assetsTab.import}, ou déposez vos images sur la fenêtre.
3. Pour chaque image, choisissez son type. Choisissez {ui.assetTypes.background} pour l’image du lieu, et {ui.assetTypes.characterSprite} pour les deux images de votre personnage.

## 3. Créer un personnage

1. Ouvrez l’onglet {ui.leftPanel.characters} et cliquez sur {ui.charactersTab.newCharacter}.
2. Dans l’inspecteur, tapez le {ui.characterInspector.characterName} et choisissez une {ui.characterInspector.nameColor}.
3. Sous {ui.characterInspector.expressions}, cliquez sur {ui.characterInspector.addExpression} pour chaque image (seules les images de type « {tx.assetTypes.characterSprite} » sont proposées), donnez-lui un nom (« Content », « Surpris ») et choisissez son image. L’expression qui porte l’étoile est celle qui s’affiche par défaut.

## 4. Écrire la première scène

1. Ouvrez l’onglet {ui.leftPanel.scenes} et sélectionnez votre scène.
2. Choisissez le décor du moment avec le bouton de décor au-dessus de l’écran du jeu (« {ui.stage.chooseTheBackgroundOfThisMoment} »).
3. Mettez votre personnage en scène avec le bouton {ui.stageControls.putACharacterOnStage}, puis glissez le personnage où vous voulez.
4. Cliquez sur la boîte de dialogue à l’écran et tapez. Appuyez sur **Entrée** pour commencer la ligne suivante : un nouveau moment démarre, avec **les mêmes personnages sur le plateau**, car [les personnages restent sur le plateau](/novelworks-docs/fr/concepts/stage/). Appuyez sur **Maj+Entrée** pour aller à la ligne dans la même boîte.
5. Cliquez sur le personnage à l’écran pour changer son expression dans un moment suivant.

## 5. Ajouter un choix

1. Dans la chronologie, ajoutez un moment {ui.moments.choice}.
2. Dans l’inspecteur, écrivez la question et le texte de deux options.
3. Pour chaque option, choisissez la scène vers laquelle elle mène dans {ui.branchInspectors.then}. Créez d’abord les scènes avec {ui.scenesTab.newScene} dans l’onglet Scènes.

Vous pouvez déjà faire en sorte qu’un choix compte : voir [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/).

## 6. Ajouter une fin

Au bout de chaque branche, ajoutez un moment {ui.moments.ending}. Il s’appelle d’abord « {tx.shared.scenes.goodEnding} » : changez le nom si vous voulez. Après une fin, le joueur revient à l’écran-titre.

## 7. Cliquer sur Jouer

Cliquez sur {ui.topBar.play} dans la barre du haut pour jouer depuis l’écran-titre. Pour tester depuis le milieu, sélectionnez un moment et cliquez sur {ui.topBar.playFromHere}. Appuyez sur **Échap** pour revenir à l’éditeur (si un menu du jeu est ouvert, **Échap** le ferme d’abord).

## 8. Enregistrer

Appuyez sur **Cmd+S** (Mac) ou **Ctrl+S** (Windows). NovelWorks enregistre aussi tout seul toutes les deux minutes. Voir [Enregistrement, sauvegardes de secours et annulation](/novelworks-docs/fr/getting-started/saving-and-undo/).

## Et ensuite ?

- Faites compter vos choix avec les [variables](/novelworks-docs/fr/branching/variables/) et les [conditions](/novelworks-docs/fr/branching/conditions/).
- Changez l’apparence de votre jeu dans l’[éditeur d’interface du jeu](/novelworks-docs/fr/game-ui/game-ui-editor/).
- [Exportez-le](/novelworks-docs/fr/publish/web-export/) et partagez-le.
