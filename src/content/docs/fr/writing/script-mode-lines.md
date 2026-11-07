---
title: "Mode Script : toutes les lignes"
description: Tous les types de lignes que vous pouvez écrire en mode Script, avec des exemples.
---

En mode Script, **une ligne correspond à une chose qui se passe**. Les exemples utilisent les mots anglais. NovelWorks comprend aussi, en même temps, les mots des autres langues de l’éditeur (`si`, `décor`, `fin`…). Les majuscules, les accents et les espaces en trop n’ont pas d’importance quand NovelWorks lit un mot-clé ou un nom.

Pour les choix, les conditions et les sauts, voir [Mode Script : conditions et choix](/novelworks-docs/fr/writing/script-mode-conditions/).

## Dialogue

```
Mia : Hello!
```

Une ligne `Name : text` est une réplique de dialogue dite par ce personnage. Les espaces autour des deux-points sont facultatifs. Si aucun personnage ne porte ce nom, toute la ligne est lue comme du texte de narration et signalée, et une correction rapide propose de créer le personnage.

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

Une ligne décalée de deux espaces prolonge la ligne du dessus, sous forme de nouvelle ligne **dans la même boîte**.

## Narration

```
It had been raining since morning.
```

Toute ligne qui n’est pas un autre type de ligne est de la narration.

### Une ligne gardée exactement comme écrite

```
> background : this is just text
```

Une ligne qui commence par `>` est de la narration **exactement comme écrite**, même si elle ressemble à une commande. NovelWorks écrit lui-même le `>` quand la narration risquerait sinon d’être mal comprise.

## Notes

```
// to re-read
Mia : Hello!
```

Une ligne qui commence par `//` est une note privée attachée au moment suivant. Elle n’est jamais affichée dans le jeu. Voir [Notes](/novelworks-docs/fr/writing/notes/).

## Lignes de mise en scène

Ces lignes ne créent pas de moment à elles seules : elles modifient la scène à partir de la ligne suivante.

```
background : Station
show : Mia happy left
hide : Mia
hide : everyone
```

- **`background : Name`** change le décor pour l’image appelée Name. `background : none`, ou rien après les deux-points, le supprime.
- **`show : Mia happy left`** fait apparaître un personnage, ou change son expression ou sa place. Après le nom, vous pouvez ajouter une expression et une place : `left`, `center` ou `right`, ou `placed by hand` pour garder un placement libre. Sans place, un personnage déjà en scène garde sa place, et un nouveau va au centre. Le nom d’un personnage peut contenir des espaces.
- **`hide : Mia`** fait partir un personnage. `hide : everyone`, ou rien après les deux-points, vide la scène.

Une ligne de mise en scène a besoin d’une ligne après elle. Sinon, elle est signalée.

## Objets

```
give : Key
give : Key x3
remove : Key
give : Key, no notice
```

Un moment qui donne un objet au joueur, ou qui le lui retire. `x3` est la quantité (le signe × fonctionne aussi). `take :` a le même sens que `remove :`. `, no notice` masque la courte notification que le joueur voit normalement. Les objets sont une fonctionnalité de votre jeu, voir [Inventaire](/novelworks-docs/fr/features/inventory/).

## Ouvrir la carte

```
map
```

Une ligne avec seulement le mot `map` ouvre la carte (un moment Afficher la carte). Voir [Carte](/novelworks-docs/fr/features/map/).

## Fins

```
end : Good ending
  You understood everything.
```

Une fin, avec son nom après les deux-points. Les lignes décalées en dessous forment un court texte facultatif. `ending :` fonctionne aussi. Un personnage qui s’appelle « End » l’emporte sur le mot-clé, sauf si vous écrivez la commande entre crochets.

## Moments d’exploration

```
exploration : 3 zones
```

Le mode Script montre un moment d’exploration sous la forme d’une seule ligne avec le nombre de zones. Vous ne pouvez pas créer ni modifier de zones ici : une exploration se modifie dans l’inspecteur, et un moment garde ses zones et ses accessoires quand vous modifiez le reste du texte. Une nouvelle ligne `exploration` commence vide. Voir [Exploration](/novelworks-docs/fr/features/exploration/).

## Titres (texte de tout le jeu)

```
# Park
```

Dans le texte de tout le jeu, une ligne qui commence par `#` démarre une scène portant ce nom.

## Crochets

Une ligne de commande peut être entourée de crochets : `[background : Station]` revient à `background : Station`. Les crochets signifient toujours « ceci est une commande ». Vous n’en avez besoin que si un personnage porte le même nom qu’une commande : si vous avez un personnage appelé Background, écrivez `[background : Station]` pour la commande et `Background : Hi!` pour le personnage.

## Aide-mémoire

| Vous écrivez | Ce que cela fait |
|---|---|
| `Mia : Hello!` | Mia parle. |
| `Mia (happy) : Hello!` | Mia parle avec une expression. |
| `It rained.` | Narration. |
| `  more text` | La ligne continue dans la même boîte. |
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
