---
title: "Mode Script : chaque ligne"
description: Tous les types de lignes que vous pouvez écrire en mode Script, avec des exemples.
---

En mode Script, **une ligne est une chose qui se passe**. Les exemples utilisent les mots anglais. NovelWorks comprend aussi, en même temps, les mots des autres langues de l’éditeur (`si`, `décor`, `fin`…). Les majuscules, les accents et les espaces en trop n’ont pas d’importance quand NovelWorks lit un mot-clé ou un nom.

Pour les choix, les conditions et les sauts, voyez [Mode Script : conditions et choix](/novelworks-docs/fr/writing/script-mode-conditions/).

## Dialogue

```
Mia : Hello!
```

Une ligne `Name : text` est une réplique prononcée par ce personnage. Les espaces autour des deux-points sont facultatifs. Si aucun personnage ne porte ce nom, toute la ligne est lue comme de la narration et signalée, et une correction rapide propose de créer le personnage.

### Avec une expression

```
Mia (happy) : Hello!
```

Mia parle avec l’expression « happy ». Si elle est déjà en scène, elle change d’expression et reste où elle est. Si elle n’est pas en scène, elle apparaît au centre.

### Texte sur plusieurs lignes

```
Mia : I looked for you everywhere.
  I had given up hope.
```

Une ligne décalée de deux espaces prolonge la ligne du dessus, comme une nouvelle ligne **dans la même boîte**.

## Narration

```
It had been raining since morning.
```

Toute ligne qui n’est pas d’un autre type est de la narration.

### Une ligne gardée exactement comme écrite

```
> background : this is just text
```

Une ligne qui commence par `>` est de la narration **exactement comme écrite**, même si elle ressemble à une commande. NovelWorks écrit lui-même le `>` quand la narration risquerait d’être mal lue.

## Notes

```
// to re-read
Mia : Hello!
```

Une ligne qui commence par `//` est une note privée attachée au moment suivant. Elle n’est jamais montrée dans le jeu. Voir [Notes](/novelworks-docs/fr/writing/notes/).

## Lignes de mise en scène

Ces lignes ne forment pas un moment à elles seules : elles changent la scène à partir de la ligne suivante.

```
background : Station
show : Mia happy left
hide : Mia
hide : everyone
```

- **`background : Name`** change le décor pour l’image appelée Nom. `background : none`, ou rien après les deux-points, l’enlève.
- **`show : Mia happy left`** fait apparaître un personnage, ou change son expression ou sa place. Après le nom, vous pouvez ajouter une expression et une place : `left`, `center` ou `right`, ou `placed by hand` pour garder un placement libre. Sans place, un personnage déjà en scène garde la sienne, et un nouveau va au centre. Un nom de personnage peut contenir des espaces.
- **`hide : Mia`** fait partir un personnage. `hide : everyone`, ou rien après les deux-points, vide la scène.

Une ligne de mise en scène a besoin d’une ligne après elle. Sinon, elle est signalée.

## Objets

```
give : Key
give : Key x3
remove : Key
give : Key, no notice
```

Un moment qui donne un objet au joueur, ou qui le lui retire. `x3` est la quantité (le signe × fonctionne aussi). `take :` veut dire la même chose que `remove :`. `, no notice` cache la courte notification que le joueur voit normalement. Les objets sont une fonctionnalité de votre jeu, voir [Inventaire](/novelworks-docs/fr/features/inventory/).

## Ouvrir la carte

```
map
```

Une ligne avec le seul mot `map` ouvre la carte (un moment Afficher la carte). Voir [Carte](/novelworks-docs/fr/features/map/).

## Fins

```
end : Good ending
  You understood everything.
```

Une fin, avec son nom après les deux-points. Les lignes décalées en dessous forment un court texte facultatif. `ending :` fonctionne aussi. Un personnage qui s’appelle justement « End » l’emporte sur le mot-clé, sauf si vous écrivez la commande entre crochets.

## Moments d’exploration

```
exploration : 3 zones
```

Le mode Script montre un moment d’exploration sous la forme d’une ligne avec le nombre de zones. Vous ne pouvez pas créer ni modifier de zones ici : une exploration se modifie dans l’inspecteur, et un moment garde ses zones et ses accessoires quand vous modifiez le reste du texte. Une nouvelle ligne `exploration` commence vide. Voir [Exploration](/novelworks-docs/fr/features/exploration/).

## Titres (texte de tout le jeu)

```
# Park
```

Dans le texte de tout le jeu, une ligne qui commence par `#` commence une scène portant ce nom.

## Crochets

Une ligne de commande peut être entourée de crochets : `[background : Station]` revient au même que `background : Station`. Les crochets veulent toujours dire « ceci est une commande ». Vous n’en avez besoin que si un personnage porte le même nom qu’une commande : si vous avez un personnage appelé Background, écrivez `[background : Station]` pour la commande et `Background : Hi!` pour le personnage.

## Aide-mémoire

| Vous écrivez | Ce que ça fait |
|---|---|
| `Mia : Hello!` | Mia parle. |
| `Mia (happy) : Hello!` | Mia parle avec une expression. |
| `It rained.` | Narration. |
| `  more text` | La réplique continue dans la même boîte. |
| `> text` | Une ligne gardée exactement comme écrite. |
| `// note` | Une note privée sur le moment suivant. |
| `background : Station` | Le décor change à partir d’ici. |
| `show : Mia happy left` | Un personnage apparaît ou change. |
| `hide : Mia` | Un personnage part. |
| `give : Key x3` / `remove : Key` | Donne ou retire un objet. |
| `map` | Ouvre la carte. |
| `end : Good ending` | Une fin. |
| `-> Park` | Un saut vers une scène. |
| `? …`, `- …`, `if …` | Choix et conditions : voir la page suivante. |
| `# Park` | Une scène (texte de tout le jeu seulement). |
