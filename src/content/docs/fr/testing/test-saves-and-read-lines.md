---
title: Outils du mode Jouer
description: "La barre au-dessus du jeu quand vous jouez : variables et objets, écran de lancement, recommencer, sauvegardes de test et répliques lues."
---

Quand vous jouez dans l’éditeur, une barre en haut contient les outils de test. Les boutons de la barre ne prennent jamais le focus du clavier : **Espace** et **Entrée** continuent donc d’aller au jeu.

![Mode Jouer : la barre d’outils en haut, et le panneau des variables et des objets à droite.](/novelworks-docs/screenshots/play-bar.png)

| Outil | Ce qu’il fait |
|---|---|
| **{ui.playOverlay.playing}** et où vous en êtes | La scène et le moment, tenus à jour. |
| « {tx.playOverlay.rightClickGameMenu} » | Un rappel : un clic droit ouvre le menu pause du jeu. |
| **{ui.playOverlay.variablesItems}** | Affiche ou masque un panneau avec les valeurs en direct de vos variables et de vos objets (voir plus bas). |
| **{ui.playOverlay.openMap}** | Ouvre la carte tout de suite, même si les joueurs ne pouvaient pas encore l’ouvrir à ce stade. **{rt.game.back}** vous ramène où vous étiez. Seulement quand votre jeu a une carte. |
| **{ui.playOverlay.showSplash}** | Affiche l’écran « Made with NovelWorks » par lequel un jeu exporté commence, à chaque démarrage et à chaque redémarrage. Désactivé par défaut. L’activer relance le test. |
| **{ui.playOverlay.restart}** | Relance ce test, depuis l’écran-titre ou depuis le moment où vous aviez commencé. L’état, l’historique et le temps de jeu sont remis à zéro. |
| **{ui.playOverlay.clearTestSaves}** | Supprime les sauvegardes, la sauvegarde rapide et la sauvegarde automatique faites pendant les tests. |
| **{ui.playOverlay.resetReadLines}** | Oublie quelles répliques vous avez lues, pour que **{ui.quickMenu.button.skip}** s’arrête de nouveau à chaque réplique. |
| **{ui.playOverlay.stop}** | Retour à l’éditeur (**Échap**). |

## Variables et objets

Avec **{ui.playOverlay.variablesItems}** (ou **{ui.leftPanel.variables}**, quand la fonctionnalité Inventaire est désactivée), un panneau affiche :

- **{ui.leftPanel.variables}** : chacune avec sa valeur actuelle. Une valeur différente de celle de départ est mise en évidence. Sur l’écran-titre et l’écran Fin, il affiche « {tx.playOverlay.startingValues} ». Vous ne pouvez pas modifier une variable ici : jouez pour la changer, afin de vérifier ce que vos choix modifient.
- **{ui.gameUI.inventory}** (avec la fonctionnalité Inventaire) : tous les objets de votre jeu, avec un **−** et un **+** pour en retirer ou en donner un pendant le test, sans notification. Un objet empilable affiche sa quantité, un objet unique Oui ou Non. Avant le début de la partie, il indique « {tx.playOverlay.startPlayingToGiveOrRemoveItems} » Le panneau reste ouvert ou fermé d’un test à l’autre.

## Sauvegardes de test et répliques lues

Les sauvegardes, la sauvegarde rapide et la sauvegarde automatique, les options du joueur (taille du texte, vitesse…) et la liste des répliques lues utilisée par Passer ont chacune leur propre espace pour chaque jeu **en mode Jouer seulement**. Ils sont séparés des sauvegardes d’un jeu exporté, et ne font pas partie de votre projet. Ils restent d’un test à l’autre jusqu’à ce que vous les effaciez :

- **{ui.playOverlay.clearTestSaves}** demande d’abord confirmation : « Les jeux exportés gardent leurs propres sauvegardes. »
- **{ui.playOverlay.resetReadLines}** agit tout de suite, sans poser de question.

Les options du joueur propres au testeur (taille du texte, vitesse…) sont conservées de la même façon, mais n’ont pas de bouton pour les effacer. L’interrupteur **{ui.playOverlay.showSplash}** reste actif jusqu’à ce que vous fermiez l’éditeur.
