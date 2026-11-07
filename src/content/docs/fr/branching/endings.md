---
title: Fins
description: "Terminer votre histoire, avec autant de fins que vous voulez, et vérifier que chacune peut être atteinte."
---

Un moment **{ui.moments.ending}** affiche le nom de la fin, puis ramène le joueur à l’écran-titre. Une histoire peut avoir autant de fins que vous le souhaitez, par exemple une pour chaque résultat d’un [Si…](/novelworks-docs/fr/branching/conditions/).

## Ajouter une fin

Dans la ligne de temps, ajoutez un moment **{ui.moments.ending}** à la fin d’une scène. Dans l’inspecteur :

- **{ui.branchInspectors.endingName}** : les nouvelles fins s’appellent « Bonne fin ». Si vous laissez le nom vide, le jeu affiche « Fin ».
- Un **court texte** (facultatif) affiché sous le nom.

Après la fin, le joueur retourne à l’écran-titre.

## Ce que voient les joueurs

Le jeu assombrit l’écran et affiche le nom de la fin, avec le court texte en dessous s’il y en a un. Une indication dit « Cliquez pour revenir à l’écran-titre », et un clic y ramène le joueur. Le bouton Carte est masqué sur une fin, et les modes de lecture (Auto et Passer) s’y arrêtent.

Une fin est la fin de sa scène : les moments placés après elle ne peuvent jamais être atteints, et l’éditeur vous avertit à leur sujet. Vous ne pouvez pas relier une nouvelle flèche depuis une scène qui se termine par une fin.

### Si l’histoire s’arrête simplement

Si une scène n’a pas de fin et que rien ne suit son dernier moment, le jeu affiche un écran de fin, appelé **{ui.gameUI.theEnd}** dans l’éditeur d’[Interface du jeu](/novelworks-docs/fr/game-ui/game-ui-editor/) (« Affiché quand l’histoire est terminée »). Vous pouvez y changer son texte, la couleur du fond et celle du texte. Ce n’est pas le même écran qu’un moment Fin, et la carte de l’histoire indique pour une telle scène « Le jeu se termine ici ». Ajoutez un vrai moment Fin pour offrir au joueur une vraie conclusion.

## Voir toutes les fins

Allez dans **{ui.topBar.storyMap}** et cliquez sur un endroit vide pour qu’**aucune scène ne soit sélectionnée**. Le panneau de droite affiche **{ui.endings.title}** : une carte pour chaque moment Fin de votre histoire, dans l’ordre de vos scènes. Chaque carte indique :

- le nom de la fin (« Fin sans titre » s’il est vide), avec un drapeau ;
- son emplacement : la scène et le numéro du moment ;
- **{ui.endings.leadsHere}** : ce qui y mène, une ligne par sortie qui va vers sa scène, par exemple `From "Park": Option "Run"`, `From "Station": if Affection ≥ 3` ou `From "Station": otherwise`. Si la scène est la scène de départ, il est indiqué « L’histoire commence dans cette scène. »

Cliquez sur le nom de la fin pour l’ouvrir, ou sur une ligne pour ouvrir le moment qui y mène.

![Le panneau « Fins du jeu » de la carte de l’histoire, avec ce qui mène à chaque fin.](/novelworks-docs/screenshots/endings-panel.png)

Si rien ne mène à une fin (et qu’elle n’est pas dans la scène de départ), la carte affiche un avertissement : **« Rien ne mène ici pour l’instant : les joueurs ne peuvent pas atteindre cette fin. »**

Si votre histoire n’a pas encore de fin, le panneau le dit et vous suggère d’en ajouter une à la fin d’une scène, par exemple une pour chaque résultat d’un Si….

Bon à savoir :

- Seules les sorties comptent : une scène qui continue simplement dans la suivante n’en est pas une, et une scène qui revient sur elle-même n’est pas indiquée comme menant à sa propre fin. Les lieux de la carte qui mènent à la scène comptent comme des sorties (affichés « Carte · … »).
- L’avertissement vérifie seulement que quelque chose mène à la fin. Une fin située dans une scène elle-même inaccessible peut n’afficher aucun avertissement si une autre scène inaccessible y mène. Regardez aussi les étiquettes « Inaccessible » sur la [carte de l’histoire](/novelworks-docs/fr/branching/story-map/).
- Le filtre **{ui.storyMap.endingsFilter}** en haut de la carte estompe les scènes qui ne contiennent aucune fin.
- Chaque fin apparaît aussi sous la forme d’un petit drapeau avec son nom sur la carte de sa scène.
