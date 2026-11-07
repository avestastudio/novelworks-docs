---
title: "Mode Script : conditions et choix"
description: Écrivez en texte les choix, les effets des options, les conditions à plusieurs cas et les sauts.
---

Cette page fait suite à [Mode Script : toutes les lignes](/novelworks-docs/fr/writing/script-mode-lines/). Les exemples utilisent les mots anglais ; NovelWorks comprend aussi, en même temps, les mots des autres langues de l’éditeur.

## Sauts

```
-> Park
```

Un saut vers la scène appelée Park. Les joueurs ne voient pas ce moment. Si vous écrivez `->` sans nom, c’est un saut qui ne mène pas encore à une scène.

## Choix

```
? What now?
- Talk to her -> Park
- Leave
```

- Une ligne qui commence par `?` est la question. Elle est facultative : une ligne qui commence par `-` sans question avant elle démarre un choix sans question.
- Chaque ligne qui commence par `-` est une option. `-> Park` après le texte est la scène vers laquelle l’option mène (la partie après le **dernier** `->`). Une option sans `->` laisse l’histoire continuer.
- Un choix composé uniquement de la question, sans option, est lu tel quel. Un choix a besoin d’au moins deux options pour fonctionner dans le jeu.

### Ce qu’une option change

Les lignes décalées sous une option indiquent ce qu’elle change :

```
- Give her the flower -> Park
  + Affection 1
  = MetMia true
  give : Key
  remove : Coin
```

| Ligne | Signification |
|---|---|
| `+ Affection 1` | Ajoute 1 au Score appelé Affection. |
| `= MetMia true` | Définit MetMia. La valeur est un nombre, ou `true` / `false` (`yes` / `no` fonctionnent aussi). |
| `give : Key` (`give : Key x3`) | Donne un objet au joueur. |
| `remove : Key` | Retire un objet. |

Toute autre ligne décalée est signalée et ignorée.

### Une option qui n’apparaît que parfois

```
- Open the door -> Hall
  if item Key, locked
```

Une ligne `if` décalée sous une option indique quand elle est disponible. Ajoutez `, locked` pour afficher l’option grisée quand elle n’est pas disponible. Sans cela, l’option est masquée. Voir [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/) : les joueurs gardent toujours un moyen de continuer.

## Tests

Une condition teste une variable ou un objet :

| Test | Signification |
|---|---|
| `Affection >= 3` | Le Score Affection vaut au moins 3. |
| `MetMia = true` | Le Fait MetMia vaut Oui. |
| `item Key` | Le joueur a une Key. |
| `item Coin x3` | Le joueur a au moins 3 Coins. |
| `without Key` | Le joueur n’a pas de Key. |

Pour un Score, vous pouvez utiliser `=` (ou `==`), `!=` (ou `≠`), `>`, `>=` (ou `≥`), `<` et `<=` (ou `≤`). Pour un Fait, `=` et `!=`. Un nombre avec une virgule décimale est accepté.

## Conditions : un moment Si…

```
if Affection >= 3 -> Park, else -> Nothing
```

L’endroit où aller quand la condition est vraie et, après `, else ->`, l’endroit où aller quand elle ne l’est pas. Les deux parties sont facultatives. Les joueurs ne voient pas ce moment.

### Plusieurs cas

Mettez chaque cas sur sa propre ligne. Le premier cas qui est vrai l’emporte :

```
if Affection >= 5 -> Park
else if Affection >= 2 -> Station
else -> Nothing
```

- `else if …` ajoute un cas. `else -> …` est l’endroit où aller quand aucun cas n’est vrai.
- Ces lignes doivent se suivre, sans ligne vide entre elles, et rien ne peut suivre le `else` final. Une ligne `else` qui ne prolonge pas une condition est du texte ordinaire.
- Si aucune scène n’est écrite après le `else` final, l’histoire continue avec le moment suivant.

![Un Si… vérifie le cas 1, puis le cas 2, puis va à « sinon ».](/novelworks-docs/diagrams/if-order.svg)

### Plusieurs tests dans un cas

```
if Affection >= 3 and item Key -> Park
if MetMia = true or item Letter -> Library
```

Utilisez `and` quand tous les tests doivent être vrais, `or` quand un seul suffit. **Ne mélangez pas `and` et `or` sur une même ligne :** NovelWorks le signale et n’utilise que le premier type.

## Si un nom n’existe pas encore

Une scène, une variable ou un objet inconnu est souligné. Une correction rapide, ou **{ui.scriptMode.createMissing_other}**, le crée. Voir [Mode Script : les bases](/novelworks-docs/fr/writing/script-mode/).
