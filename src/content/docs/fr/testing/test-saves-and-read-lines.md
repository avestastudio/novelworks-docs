---
title: Outils du mode Jouer
description: "La barre au-dessus du jeu quand vous jouez : variables et objets, écran de démarrage, relance, sauvegardes de test et lignes lues."
---

Quand vous jouez dans l’éditeur, une barre en haut réunit les outils de test. Les boutons de la barre ne prennent jamais le focus du clavier : **Space** et **Enter** continuent donc d’aller au jeu.

![Mode Jouer : la barre d’outils en haut, et le panneau des variables et des objets à droite.](/novelworks-docs/screenshots/play-bar.png)

| Outil | Ce qu’il fait |
|---|---|
| **{ui.playOverlay.playing}** et l’endroit où vous êtes | La scène et le moment, mis à jour en continu. |
| « Clic droit : menu du jeu » | Un rappel : un clic droit ouvre le menu pause du jeu. |
| **{ui.playOverlay.variablesItems}** | Affiche ou masque un panneau avec les valeurs en direct de vos variables et de vos objets (voir plus bas). |
| **{ui.playOverlay.openMap}** | Ouvre la carte tout de suite, même si les joueurs ne pouvaient pas encore l’ouvrir à ce moment-là. **{rt.game.back}** vous ramène où vous étiez. Uniquement si votre jeu a une carte. |
| **{ui.playOverlay.showSplash}** | Affiche l’écran « Made with NovelWorks » par lequel un jeu exporté commence, à chaque démarrage et à chaque relance. Désactivé par défaut. L’activer relance le test. |
| **{ui.playOverlay.restart}** | Relance ce test, depuis l’écran-titre ou depuis le moment où vous aviez commencé. L’état, l’historique et le temps de jeu sont remis à zéro. |
| **{ui.playOverlay.clearTestSaves}** | Supprime les sauvegardes, la sauvegarde rapide et la sauvegarde automatique faites pendant les tests. |
| **{ui.playOverlay.resetReadLines}** | Oublie les lignes que vous avez lues : **{ui.quickMenu.button.skip}** s’arrête de nouveau à chaque ligne. |
| **{ui.playOverlay.stop}** | Retour à l’éditeur (**Esc**). |

## Variables et objets

Avec **{ui.playOverlay.variablesItems}** (ou **{ui.leftPanel.variables}**, quand la fonctionnalité Inventaire est désactivée), un panneau affiche :

- **{ui.leftPanel.variables}** : chacune avec sa valeur actuelle. Une valeur différente de celle de départ est mise en évidence. Sur l’écran-titre et sur l’écran de fin, il affiche « (valeurs de départ) ». Vous ne pouvez pas modifier une variable ici : jouez pour la changer, afin de vérifier ce que changent vos choix.
- **{ui.gameUI.inventory}** (avec la fonctionnalité Inventaire) : tous les objets de votre jeu, avec un **−** et un **+** pour en retirer ou en donner un pendant le test, sans notification. Un objet empilable affiche sa quantité, un objet unique affiche Oui ou Non. Avant le début du jeu, le panneau indique « Lancez la partie pour donner ou retirer des objets. » Le panneau reste ouvert ou fermé d’un test à l’autre.

## Sauvegardes de test et lignes lues

Les sauvegardes, la sauvegarde rapide et la sauvegarde automatique, les options du joueur (taille du texte, vitesse…) et le registre des lignes lues utilisé par Passer ont chacun leur propre espace pour chaque jeu, **dans le mode Jouer uniquement**. Ils sont séparés des sauvegardes d’un jeu exporté et ne font pas partie de votre projet. Ils restent d’un test à l’autre jusqu’à ce que vous les effaciez :

- **{ui.playOverlay.clearTestSaves}** demande d’abord confirmation : « Les jeux exportés gardent leurs propres sauvegardes. »
- **{ui.playOverlay.resetReadLines}** agit tout de suite, sans poser de question.

Les options du joueur de l’éditeur de test (taille du texte, vitesse…) sont conservées de la même façon, mais aucun bouton ne permet de les effacer. L’interrupteur **{ui.playOverlay.showSplash}** reste en place jusqu’à ce que vous fermiez l’éditeur.
