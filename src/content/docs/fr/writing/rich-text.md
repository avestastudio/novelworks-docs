---
title: Mettre en forme votre texte
description: Mettez des mots en gras, en couleur, en grand ou faites-les trembler, et ajoutez des pauses et des variables à une ligne de dialogue.
---

Vous pouvez mettre en forme n’importe quelle partie d’une ligne de dialogue. Vous écrivez sur l’écran du jeu ou dans l’onglet {ui.inspectorTabs.text}, et le texte apparaît tel qu’il sera dans le jeu.

## Mettre en forme des mots

Sélectionnez des mots dans une ligne. Une petite barre d’outils apparaît au-dessus d’eux.

![La barre d’outils au-dessus des mots sélectionnés, avec le gras, l’italique, les couleurs, les tailles et les mouvements.](/novelworks-docs/screenshots/rich-text-toolbar.png)

| Commande | Ce qu’elle fait |
|---|---|
| {ui.richText.bold} et {ui.richText.italic} | Des lettres plus épaisses ou penchées. Vous pouvez aussi appuyer sur `Cmd+B` / `Ctrl+B` et `Cmd+I` / `Ctrl+I`. |
| Cinq couleurs rondes | Les couleurs de votre palette (voir ci-dessous). |
| {ui.richText.customColor} | N’importe quelle autre couleur, pour cette sélection seulement. |
| {ui.richText.small} et {ui.richText.big} | Des lettres plus petites ou plus grandes. Des mots n’ont qu’une taille à la fois. |
| {ui.richText.shake} et {ui.richText.wave} | Les lettres tremblent ou ondulent dans le jeu. Des mots n’ont qu’un mouvement à la fois. |
| {ui.richText.clear} | Retire toute la mise en forme de la sélection. |

Cliquez de nouveau sur un style pour le retirer.

## Vos cinq couleurs

Les cinq couleurs de la barre d’outils se règlent une seule fois pour tout le jeu : {ui.topBar.gameUI}, {ui.gameUI.dialogueBox}, {ui.richText.palette}.

Si vous y changez une couleur, tous les mots qui l’utilisent changent aussi. Une couleur choisie avec {ui.richText.customColor} ne suit pas la palette.

## Insérer une pause ou une variable

Sous le champ de texte de l’onglet {ui.inspectorTabs.text}, la rangée {ui.richText.insert} ajoute quelque chose à la dernière position de votre curseur.

{ui.richText.pause} ajoute une courte attente au milieu de la ligne. Elle apparaît comme une petite étiquette dans le texte. Elle dure une demi-seconde. Cliquez sur l’étiquette pour la changer, de 0,1 à 5 secondes.

{ui.richText.variable} ouvre la liste de vos [variables](/novelworks-docs/fr/branching/variables/). Dans le texte, vous voyez le nom de la variable sous forme de petite étiquette. Dans le jeu, le joueur voit sa valeur. Une variable vrai ou faux affiche {rt.game.yes} ou {rt.game.no}. Si vous supprimez la variable, le jeu n’affiche rien à sa place.

## Ce que voit le joueur

- La ligne s’écrit lettre par lettre et s’arrête à chaque pause.
- Le premier clic montre toute la ligne. Le clic suivant passe à la suite.
- Les lettres qui tremblent ou ondulent continuent de bouger tant que la ligne est à l’écran.
- Si le joueur a demandé à son système moins d’animations, les lettres ne bougent pas.
- L’[historique](/novelworks-docs/fr/player/history/) et les lecteurs d’écran reçoivent seulement les mots, sans mise en forme.

## En mode Script

En [mode Script](/novelworks-docs/fr/writing/script-mode/), les styles s’écrivent sous forme de balises autour des mots :

```
Mia : I {b}never{/b} said that.
Mia : It was {color=1}red{/color}, {shake}so red{/shake}.
Mia : Well...{pause} maybe.
Mia : Wait.{pause=2} You have {Affection} points.
```

| Balise | Signification |
|---|---|
| `{b}` … `{/b}` | Gras |
| `{i}` … `{/i}` | Italique |
| `{color=1}` … `{/color}` | Une couleur de la palette, de 1 à 5. Un code comme `{color=#ff0000}` fonctionne aussi. |
| `{small}` … `{/small}`, `{big}` … `{/big}` | Taille |
| `{shake}` … `{/shake}`, `{wave}` … `{/wave}` | Mouvement |
| `{pause}`, `{pause=2}` | Une pause d’une demi-seconde, ou du nombre de secondes indiqué |
| `{Affection}` | La valeur de la variable de ce nom |

Pour écrire un vrai `{`, tapez-le deux fois : `{{`.

Les mots des balises suivent la langue de l’éditeur. Un script copié depuis une autre langue fonctionne quand même.

## Limites

Les styles, les pauses et les variables ne fonctionnent que dans les lignes de dialogue. Les options d’un choix et le nom d’une fin sont du texte simple.
