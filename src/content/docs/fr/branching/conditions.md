---
title: "Conditions Si…"
description: Envoyez l’histoire vers différentes scènes selon ce dont le jeu se souvient, avec autant de cas que nécessaire.
---

Un moment **{ui.moments.condition}** vérifie ce dont le jeu se souvient et envoie l’histoire vers une scène. **Les joueurs ne le voient jamais :** le jeu le vérifie et passe tout de suite à la suite. Pour l’idée en images, voyez [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/).

## Cas

Un Si… est une liste de **cas**, vérifiés **de haut en bas**. Le premier cas qui est vrai l’emporte. Chaque cas a :

- une ou plusieurs **conditions** ;
- la scène où aller (« aller à »).

Après le dernier cas vient *sinon* : là où l’histoire va quand aucun cas n’est vrai.

Un nouveau Si… a un cas avec une condition vide. Avec un seul cas, il s’affiche simplement. Avec deux cas ou plus, chaque cas est une carte intitulée « Cas 1 », « Cas 2 »…

![L’inspecteur d’un moment Si…, avec une condition, « aller à » et « sinon ».](/novelworks-docs/screenshots/if-conditions.png)

- **{ui.conditionCases.addCase}** ajoute un cas à la fin.
- Les flèches d’une carte déplacent le cas vers le haut ou vers le bas. L’ordre compte, parce que le premier cas qui est vrai l’emporte.
- Un bouton sur la carte retire le cas. Un Si… en garde toujours au moins un.

![Un Si… vérifie le Cas 1, puis le Cas 2, puis va à « sinon ».](/novelworks-docs/diagrams/if-order.svg)

## Conditions

Une condition commence par le mot « Si » et vérifie une variable ou un objet. Le choix **{ui.branchInspectors.whatToCheck}** (Variable ou Objet) apparaît quand la fonctionnalité Inventaire est activée.

### Une variable

Choisissez la variable, la comparaison et la valeur.

| Sorte | Comparaisons |
|---|---|
| **{ui.variables.number}** | {ui.conditionTests.is}, {ui.moments.isNot}, {ui.moments.atLeast}, {ui.moments.atMost}, {ui.moments.moreThan}, {ui.moments.lessThan} |
| **{ui.variables.yesNo}** | {ui.conditionTests.is}, {ui.moments.isNot} |

Sous un test de Score, une ligne vous dit ce que vos choix peuvent totaliser, et si le test peut un jour être vrai. Voir [Où vos choix peuvent mener (jusqu’à +5)](/novelworks-docs/fr/branching/reach/). Si vous n’avez encore aucune variable, l’éditeur le dit et vous invite à en créer une dans l’onglet Variables.

### Un objet

« Si le joueur » **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}**, ou (pour un objet cumulable) **{ui.conditionTests.hasAtLeast}** un certain nombre de cet objet.

### Plusieurs conditions dans un cas

Cliquez sur **{ui.conditionCases.addTest}**. Choisissez ensuite comment elles se combinent :

- **{ui.conditionCases.matchAll}** : chaque condition doit être vraie (« {tx.conditionCases.and} ») ;
- **{ui.conditionCases.matchAny}** : une seule suffit (« ou »).

Le sélecteur apparaît quand un cas a deux conditions ou plus. Pour en retirer une, utilisez **{ui.conditionCases.removeTest}**, qui n’apparaît que lorsqu’il y en a plus d’une. Quand il ne reste qu’une condition, le choix de combinaison disparaît.

## Où aller

Sous chaque cas : la scène où aller. Un cas a besoin d’une scène (l’éditeur vous avertit quand il n’en a pas). Vient ensuite *sinon*, qui peut aussi être « {tx.linkSelects.continueNextMoment} ». Si vous ne choisissez aucune scène pour *sinon*, l’histoire continue simplement avec le moment suivant.

## Ce que fait le jeu

- Les cas sont essayés de haut en bas. Le premier qui est vrai l’emporte.
- Si aucun n’est vrai, le jeu va à *sinon*, ou continue s’il n’y en a pas.
- Un cas gagnant sans scène, ou dont la scène a été supprimée, continue avec le moment suivant.
- **Si le jeu arrive à un cas qui vérifie une variable ou un objet supprimé ou jamais choisi, il ne devine pas :** il saute tout le Si… et continue avec le moment suivant, sans regarder les cas en dessous ni *sinon*. (Un cas au-dessus qui est vrai l’emporte quand même en premier.) Dans un cas où une seule des conditions suffit (**{ui.conditionCases.matchAny}**), un seul élément manquant casse tout le cas. L’éditeur vous en avertit, alors corrigez l’avertissement.
- Les Scores sont comparés avec leur valeur actuelle, ou leur valeur de départ si le joueur ne les a pas encore changés.

## Boucles

Si des Si… et des sauts ne font que se renvoyer l’un à l’autre (la scène A va vers B, et B revient aussitôt vers A), le jeu ne peut pas avancer. Après 1000 étapes automatiques de suite, il s’arrête et affiche l’écran de fin, et l’éditeur ne vous avertit pas. Assurez-vous que chaque boucle contient quelque chose que fait le joueur, comme une réplique ou un choix.

## Essayer

Sous les cas, **{ui.memory.tryTitle}** vous permet de vérifier votre Si… sans jouer. Faites comme si un Score avait une valeur, ou comme si le joueur avait un certain nombre d’un objet, et NovelWorks vous dit où irait l’histoire :

- « Le cas 2 est vrai : va vers … » ;
- « Sinon : va vers … », ou « {tx.memory.tryContinue} » ;
- « {tx.memory.tryPickFirst} » quand une condition n’est pas terminée.

Il suit les mêmes règles que le jeu. Avec un cas et une condition, il y a une seule case ; sinon, il y a une case par variable ou objet utilisé.

## Sur la chronologie

Une carte montre le premier cas (« Si Affection ≥ 2 → Park ») et l’écran du jeu liste une ligne par cas, puis *sinon*.

## Avertissements

- Choisissez la variable ou l’objet que vérifie cette condition.
- Cette condition vérifie une variable ou un objet qui a été supprimé, ou un objet alors que la fonctionnalité Inventaire est désactivée.
- Choisissez la scène où aller quand la condition est vraie.
- Quand c’est vrai, ou sinon, cela mène à une scène qui a été supprimée.

## Les mêmes conditions ailleurs

Les conditions d’une option dans un [choix](/novelworks-docs/fr/branching/choices/) utilisent le même éditeur, avec une différence : une condition qui vérifie quelque chose de manquant compte comme fausse (l’option est cachée ou verrouillée) au lieu de tout sauter.
