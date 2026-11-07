---
title: Variables
description: Créez et gérez les Scores et les Faits dont se souvient votre jeu, et voyez où chacun est utilisé.
---

Une **variable** est quelque chose dont le jeu se souvient. Il y en a de deux sortes, expliquées dans [La mémoire du jeu](/novelworks-docs/fr/concepts/game-memory/) : un **{ui.variables.number}** (un nombre qui monte ou descend, comme l’affection de Mia ou l’argent) et un **{ui.variables.yesNo}** (quelque chose s’est-il passé : oui ou non, comme « {tx.memory.factExample} » ou « Possède la clé »).

Les choses que le joueur porte (clés, pièces…) ne sont pas des variables. Ce sont des **objets**, qui font partie de la fonctionnalité [Inventaire](/novelworks-docs/fr/features/inventory/).

## L’onglet Variables

L’onglet **{ui.leftPanel.variables}** liste chaque variable avec sa sorte et son point de départ (« Score · valeur de départ : 0 »). Cliquez sur **{ui.variablesTab.newVariable}** pour en ajouter une. Dans un projet vide, l’onglet explique ce que sont les variables.

Une nouvelle variable s’appelle « Variable N », où N est le nombre de variables que vous avez déjà plus un (ou le numéro suivant si ce nom existe). C’est un Score qui démarre à 0. Sélectionnez-la pour la modifier dans l’inspecteur.

Vous pouvez aussi créer une variable au moment où vous en avez besoin, avec **{ui.memory.remember}** dans un choix. Voir [Choix](/novelworks-docs/fr/branching/choices/).

## L’inspecteur de variable

- **{ui.variableInspector.name}** : par exemple « {tx.variablesTab.miaAffection} ». Renommer est sans risque : tout ce qui utilise la variable suit le nouveau nom.
- **{ui.variableInspector.type}** : Score ou Fait.
- **{ui.variableInspector.startsAt}** : la valeur avec laquelle commence chaque nouvelle partie.
- Pour un Score, une phrase sur ce que vos choix peuvent totaliser. Voir [Où vos choix peuvent mener (jusqu’à +5)](/novelworks-docs/fr/branching/reach/).
- **{ui.memory.changedBy}** et **{ui.memory.checkedBy}** : les listes en dessous.

### Où une variable est utilisée

Les deux listes montrent où la variable est utilisée, avec la scène et le numéro du moment. Cliquez sur une ligne pour y aller. Une variable est *modifiée* par une option de choix ou une zone d’exploration, et *vérifiée* par la condition d’une option, un Si… ou une zone. Si rien ne la modifie encore, l’inspecteur le dit, et de même pour les vérifications.

## Changer le type

Si la variable est déjà utilisée, NovelWorks vous demande de confirmer, et liste où. Les valeurs à ces endroits sont réinitialisées pour correspondre au nouveau type :

- la valeur de départ devient 0 pour un Score, ou Non pour un Fait ;
- chaque changement et chaque test sur cette variable est réinitialisé : à 0 pour un Score, à Oui pour un Fait ;
- un Fait ne peut qu’être défini, donc « {tx.branchInspectors.add} » devient « {tx.branchInspectors.setTo} », et une comparaison qui ne convient pas au nouveau type devient « est ».

Si la variable n’est pas utilisée, le type change tout de suite.

## Supprimer une variable

NovelWorks vous demande de confirmer. Si la variable est utilisée, il liste où, et prévient que **ces endroits afficheront un avertissement tant que vous n’aurez pas choisi une autre variable**. Seule la variable est retirée : les changements et les tests qui l’utilisaient sont conservés, affichent un avertissement, et apparaissent comme « {tx.linkSelects.deletedVariablePickAnother} ».

## Variables et sauvegardes du joueur

Le jeu garde la valeur de chaque variable dans la sauvegarde du joueur. Quand une sauvegarde est chargée :

- les variables qui existent encore, de la même sorte, reprennent leur valeur sauvegardée ;
- les valeurs des variables qui ont été supprimées, ou dont la sorte a changé, sont abandonnées ;
- les variables ajoutées depuis commencent à leur valeur de départ.

Vous pouvez donc mettre à jour votre jeu sans casser les anciennes sauvegardes.

## Où on peut utiliser les variables

Dans les changements d’une option de choix, dans les conditions d’une option, dans les tests d’un [Si…](/novelworks-docs/fr/branching/conditions/), et dans les zones d’exploration (leurs conditions et l’action « modifier une variable »).
