---
title: "Votre premier visual novel en 15 minutes"
description: "Un tutoriel pas à pas, du projet vide au jeu jouable."
---

Vous allez créer une courte histoire avec un décor, un personnage, quelques répliques et un choix. Prévoyez trois images : un décor et deux expressions d’un personnage, par exemple joyeux et surpris.


## 1. Créer le projet

1. Ouvrez NovelWorks et cliquez sur **New project** dans l’écran des projets.
2. Saisissez un nom, choisissez le dossier avec **Browse…**, puis cliquez sur **Create project**. Laissez les fonctionnalités optionnelles décochées.

Votre projet est un dossier contenant `project.json` et un sous-dossier `assets`.

## 2. Ajouter les images

1. Ouvrez l’onglet **Assets** dans le panneau gauche.
2. Glissez vos images dans la fenêtre ou utilisez le bouton d’importation.
3. Choisissez la catégorie de chaque image : **Background** pour un décor, **Sprite** pour un personnage, etc.

## 3. Créer un personnage

1. Dans **Characters**, ajoutez un personnage, donnez-lui un nom et choisissez sa **Name color**.
2. Ajoutez une expression par sprite, par exemple « Joyeux » et « Surpris », puis choisissez son image. L’étoile indique l’expression par défaut.

## 4. Écrire la première scène

1. Dans **Scenes**, sélectionnez la première scène et renommez-la par un double-clic.
2. La **timeline**, sous l’écran, affiche les moments de la scène. Cliquez sur **+ Dialogue** pour ajouter une réplique.
3. Choisissez un décor, cliquez sur **+ Character** pour placer le personnage et déplacez-le à votre convenance.
4. Cliquez dans la boîte de dialogue et écrivez. **Enter** crée la réplique suivante en conservant la mise en scène ; **Shift+Enter** insère un retour à la ligne dans la même boîte.

## 5. Ajouter un choix

1. Cliquez sur **Choice** dans la timeline.
2. Écrivez la question et ajoutez deux options.
3. Pour chaque option, choisissez la scène de destination. Créez-en une au besoin avec **New scene** dans **Scenes**.

## 6. Ajouter une fin

Sélectionnez le dernier moment de chaque branche et cliquez sur **Ending**. Donnez un nom à la fin, par exemple « Bonne fin ».

## 7. Lancer le jeu

Cliquez sur **Play** dans la barre du haut. Cliquez ou appuyez sur **Space** pour avancer ; **Esc** revient à l’éditeur.

Pour tester au milieu de l’histoire, sélectionnez un moment et cliquez sur **Play from here**.

## 8. Enregistrer

Appuyez sur **Cmd+S** sur Mac ou **Ctrl+S** sur Windows. NovelWorks enregistre aussi automatiquement.

## Et ensuite ?

- Donnez des conséquences aux choix avec les [variables](/novelworks-docs/fr/branching/variables/) et les [conditions](/novelworks-docs/fr/branching/conditions/).
- Personnalisez l’apparence dans [Game UI](/novelworks-docs/fr/game-ui/game-ui-editor/).
- [Exportez votre jeu](/novelworks-docs/fr/publish/web-export/) pour le partager.
