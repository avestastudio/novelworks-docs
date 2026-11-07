---
title: Comment une histoire se ramifie
description: Choix, conditions, sauts et fins, et comment voir où va votre histoire.
---

Une histoire se ramifie quand elle peut aller vers **une autre scène**. Quatre sortes de moments le permettent.

| Moment | Ce qu'il fait |
|---|---|
| **{ui.moments.choice}** | Le joueur choisit une option parmi 2 à 6. Chaque option peut modifier des variables et mener à une scène. |
| **{ui.moments.condition}** | Le jeu vérifie ce dont il se souvient et envoie l'histoire vers une scène. Les joueurs ne le voient jamais. |
| **{ui.moments.jump}** | Va directement vers une scène. Les joueurs ne le voient jamais. |
| **{ui.moments.ending}** | Affiche le nom de la fin, puis revient à l'écran-titre. |

Un moment **{ui.moments.exploration}** peut aussi mener à des scènes, par les zones sur lesquelles le joueur clique.

## Les choix

Dans l'inspecteur, écrivez une question (facultative), puis le texte de chaque option. Pour chaque option :

- **{ui.branchInspectors.changes}** : ce que le jeu retient si le joueur la choisit (voir [La mémoire du jeu](/novelworks-docs/fr/concepts/game-memory/)).
- **{ui.branchInspectors.then}** : la scène vers laquelle elle mène. Vous pouvez aussi laisser l'histoire continuer avec le moment suivant.
- **{ui.optionCondition.add}** : l'option n'apparaît que si une condition est remplie. Choisissez ensuite ce qui se passe sinon : **{ui.optionCondition.hidden}** ou **{ui.optionCondition.locked}**. Les joueurs gardent toujours un moyen de continuer : si aucune option ne pouvait être choisie, toutes apparaissent. **{ui.optionCondition.remove}** la rend de nouveau disponible.

Les joueurs cliquent sur une option ou appuient sur sa touche numérique, de 1 à 6. Un choix a besoin d'au moins deux options.

## Si…

Un moment **{ui.moments.condition}** a un ou plusieurs **cas**, vérifiés **de haut en bas**. Le premier cas vrai l'emporte.

![Un Si… vérifie le cas 1, puis le cas 2, puis va vers « sinon ».](/novelworks-docs/diagrams/if-order.svg)

- Chaque cas a une ou plusieurs conditions. Choisissez si **{ui.conditionCases.matchAll}** ou **{ui.conditionCases.matchAny}**, et cliquez sur **{ui.conditionCases.addTest}** pour en ajouter.
- Chaque cas a une scène où aller. Utilisez **{ui.conditionCases.addCase}** pour un autre cas, et les flèches pour changer l'ordre.
- *sinon* est l'endroit où va l'histoire quand aucun cas n'est vrai. Si vous ne choisissez aucune scène, l'histoire continue avec le moment suivant.

## Sauts et fins

Un **{ui.moments.jump}** n'a besoin que d'une scène où aller. Une **{ui.moments.ending}** a un nom (**{ui.branchInspectors.endingName}**) et un court texte facultatif. Une histoire peut avoir autant de fins que vous voulez.

## Voir où va l'histoire

### La barre « Où cela mène »

Au-dessus de l'écran du jeu, un petit bouton par sortie du moment sélectionné montre où elle mène, quatre au maximum puis « +N ». Une phrase trop longue se termine par « … » (le texte complet est dans l'infobulle). Cliquez sur un bouton pour aller à cette scène. Un bouton « Retour » vous ramène là où vous étiez (les 20 dernières étapes sont retenues). Sur le premier moment d'une scène, une liste montre ce qui mène **vers** la scène.

### La ligne Branches

Sous les vignettes et le graphique de mise en scène, la ligne **{ui.branches.rowTitle}** marque chaque moment qui quitte la scène, alignée sur le moment :

![Le graphique sous les vignettes, avec la ligne Branches : une fourche sur le moment 3 et un drapeau sur le moment 6.](/novelworks-docs/diagrams/branches-row.svg)

- une fourche : un choix ou un Si… ;
- une flèche : un saut ;
- un pointeur : une zone d'exploration ;
- un drapeau : une fin, avec son nom ;
- une icône de carte : un moment Afficher la carte.

À côté de l'icône figure le nom de la première scène vers laquelle elle mène, et « +N » s'il y a d'autres sorties. Une marque devient rouge si une scène manque. Pointez une marque pour lister toutes les sorties, cliquez dessus pour sélectionner le moment. Un bouton replie la ligne.

L'onglet Scènes indique aussi combien de branches a chaque scène.

### La carte de l'histoire

La **{ui.topBar.storyMap}** montre toutes les scènes de votre jeu et ce qui relie l'une à l'autre. Cliquez sur une scène pour la voir, double-cliquez pour l'ouvrir. Quand aucune scène n'est sélectionnée, le panneau de droite est la liste des fins du jeu (**{ui.endings.title}**) et de ce qui mène à chacune. Une fin vers laquelle rien ne mène est signalée, car les joueurs ne peuvent pas l'atteindre. Voir [La carte de l'histoire](/novelworks-docs/fr/branching/story-map/).
