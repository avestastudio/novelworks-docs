---
title: Inventaire
description: "Les objets que portent les joueurs : les créer, les donner et les retirer, les vérifier dans des conditions, et les voir dans le jeu."
---

Avec la fonctionnalité **{ui.shared.features.inventory}** activée, les joueurs peuvent ramasser des **objets** : clés, lettres, pièces, indices. Ils les voient dans un menu Inventaire. Activez-la dans la [bibliothèque de fonctionnalités](/novelworks-docs/fr/features/features-panel/). Les objets ne sont pas des [variables](/novelworks-docs/fr/branching/variables/) : un objet est quelque chose que le joueur porte.

## L’onglet Objets

L’onglet **{ui.leftPanel.items}** liste vos objets, chacun avec son image (ou un sac à dos), son nom et **{ui.itemInspector.single}** ou **{ui.itemInspector.stackable}**. Cliquez sur **{ui.itemsTab.newItem}**. Un nouvel objet s’appelle « Objet 1 », « Objet 2 »… et il est sélectionné.

![L’onglet Objets, avec l’inspecteur d’un objet.](/novelworks-docs/screenshots/items-tab.png)

Dans l’inspecteur :

- **{ui.itemInspector.name}** ;
- **{ui.itemInspector.picture}** : une image de type « Accessoire », affichée dans l’inventaire (vous pouvez en importer une sur place) ;
- **{ui.itemInspector.description}** : ce que les joueurs lisent quand ils l’examinent dans l’inventaire ;
- **{ui.itemInspector.kind}** : **{ui.itemInspector.single}** (les joueurs l’ont ou non, comme une clé) ou **{ui.itemInspector.stackable}** (les joueurs peuvent en avoir plusieurs, comme des pièces ; l’inventaire indique combien) ;
- **{ui.itemInspector.usedIn}** : où l’objet est utilisé, ou « Pas encore utilisé. Donnez-le avec un moment Objet, un choix ou une zone Ramasser ».

### Supprimer un objet

**{ui.itemInspector.deleteItem}** demande d’abord confirmation, et liste les endroits où l’objet est utilisé. Seul l’objet est retiré : les endroits qui l’utilisaient sont conservés et affichent un avertissement jusqu’à ce que vous choisissiez un autre objet.

## Donner et retirer des objets

- **Un moment Objet** : il donne des objets ou les retire, et les joueurs ne voient pas le moment lui-même. Choisissez **{ui.branchInspectors.give}** ou **{ui.branchInspectors.remove}**, l’objet, et la quantité pour un objet cumulable. Une case à cocher décide s’il faut afficher une notification (« Vous avez obtenu : … »). Voir [Scènes, moments et ligne de temps](/novelworks-docs/fr/concepts/scenes-moments-timeline/).
- **Une option de choix** : **{ui.branchInspectors.giveRemoveAnItem}** ajoute un changement à une option. Une notification est toujours affichée. Voir [Choix](/novelworks-docs/fr/branching/choices/).
- **Une zone d’exploration** : **{ui.explorationInspectors.pickUpAnItem}** (la zone et ses accessoires disparaissent pour de bon) ou **{ui.shared.exploration.useAnItem}**. Voir [Exploration](/novelworks-docs/fr/features/exploration/).

Un objet unique ne peut jamais dépasser un exemplaire, et un objet cumulable ne descend jamais sous zéro. Retirer plus que ce que le joueur possède retire ce qui existe.

## Vérifier des objets

Dans un [Si…](/novelworks-docs/fr/branching/conditions/), dans la condition d’une option ou d’une zone, choisissez **{ui.moments.item}** dans **{ui.branchInspectors.whatToCheck}** : le joueur **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}** ou **{ui.conditionTests.hasAtLeast}** un certain nombre de cet objet. Un test sur un objet supprimé n’est jamais réussi.

Si vous désactivez la fonctionnalité Inventaire, les joueurs perdent le bouton, l’entrée de menu et la touche **I**, mais les moments qui donnent ou vérifient des objets continuent de s’exécuter ; l’éditeur vous avertit. Voir [La bibliothèque de fonctionnalités](/novelworks-docs/fr/features/features-panel/).

## Ce que voient les joueurs

- Un bouton dans un coin de l’écran (en haut à droite par défaut, réglable dans l’[écran Inventaire](/novelworks-docs/fr/game-ui/inventory-ui/)), une entrée dans le menu pause, et la touche **I**.
- Un panneau avec une grille des objets qu’ils possèdent, avec le nombre pour les objets cumulables. Cliquer sur l’un affiche sa description. Il n’y a pas de bouton « utiliser » : utiliser un objet, c’est ce qu’une zone vérifie.
- Des **{ui.gameUI.notices}** comme « Vous avez obtenu : Clé » et « Vous avez perdu : Clé » (voir [Notifications](/novelworks-docs/fr/game-ui/notifications/)).
- Les objets sont conservés dans les sauvegardes du joueur. Quand une ancienne sauvegarde est chargée, les objets qui n’existent plus sont abandonnés.

## Test

En mode Jouer, **{ui.playOverlay.variablesItems}** affiche tous les objets de votre jeu avec un **−** et un **+** pour en donner ou en retirer un pendant que vous testez (sans notification). Avant le début du jeu, il indique « Lancez la partie pour donner ou retirer des objets. »

## Avertissements

- Choisissez l’objet à donner ou à retirer ; ce moment donne ou retire un objet qui a été supprimé.
- La fonctionnalité Inventaire est désactivée : les joueurs n’ont pas d’inventaire. Activez-la dans Fonctionnalités.
- Un effet ou une condition utilise ou vérifie un objet qui n’est pas choisi, qui a été supprimé, ou alors que la fonctionnalité Inventaire est désactivée.
- Une zone a besoin d’un objet que les joueurs ne peuvent jamais obtenir (rien dans l’histoire ne le donne).
