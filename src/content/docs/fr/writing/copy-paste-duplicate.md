---
title: Copier, coller et dupliquer
description: Copiez des moments, des scènes et des personnages, collez-les ailleurs, et dupliquez d’une seule touche.
---

## Dupliquer

**Cmd+D** / **Ctrl+D** duplique ce qui est sélectionné, même pendant que vous tapez :

- un **moment** : la copie se place juste après l’original, avec une nouvelle identité. Elle ne change rien à l’écran, donc elle montre la même image que l’original, et sa note est copiée ;
- une **scène** : la copie se place juste après l’original et s’appelle par exemple « A helping hand (copie) » (voir [Scènes](/novelworks-docs/fr/writing/scenes/)) ;
- une **zone** d’exploration.

Le menu du clic droit propose **{ui.contextMenus.duplicate}** pour un moment et une scène, et **{ui.contextMenus.duplicateZone}** pour une zone. L’inspecteur d’un moment a un bouton **{ui.momentInspector.duplicate}**.

## Copier, couper et coller

**Cmd+C**, **Cmd+X** et **Cmd+V** (**Ctrl** sous Windows) copient, coupent et collent :

| Sélection | Copier et couper | Coller |
|---|---|---|
| Un **moment** (ou rien) | Le moment. Couper le supprime, sans poser de question, et les moments suivants continuent à montrer la même chose. | Insère la copie **après le moment sélectionné** de la scène en cours, ou à la fin. |
| Une **scène** (dans la liste des scènes) | La scène entière. Couper demande de confirmer la suppression. | Ajoute la copie à la fin de la liste, sélectionnée. |
| Un **personnage en scène** sur l’écran du jeu | Le personnage, tel qu’il est placé à ce moment : expression, place, taille, direction. Couper le fait sortir de scène. | Met le personnage en scène au moment sélectionné, avec l’apparence copiée. Si le personnage y est déjà, il prend l’apparence collée. |

Un moment collé emporte ses propres changements de scène : si c’était le moment où Mia arrivait, elle arrive de nouveau. Un collage compte pour une seule étape d’annulation.

### Quand ça marche

Copier, couper et coller ne fonctionnent que dans le mode {ui.topBar.story}, en vue **{ui.topBar.visual}**. Ils ne font rien dans la vue Script, ni quand une zone de texte a le focus (la zone garde son propre copier-coller), ni quand une fenêtre ou un menu est ouvert, ni quand du texte est sélectionné sur la page. Une image, une variable, une zone ou un accessoire ne peut pas être copié.

Les menus du clic droit n’ont pas d’entrées Copier ou Coller : utilisez les touches, ou les éléments Couper, Copier et Coller du menu Édition.

### Entre projets et fenêtres

La copie va dans le presse-papiers de votre ordinateur sous forme de texte, donc vous pouvez coller dans **un autre projet ou une autre fenêtre**. Le presse-papiers contient le moment, la scène ou le personnage lui-même, **pas** les images, personnages, scènes ou variables auxquels il fait référence.

Voici ce que vous voyez quand l’autre projet ne les a pas (vérifié en collant un moment d’un projet dans un autre) :

- un personnage qui parle et qui n’existe pas là-bas devient le **{ui.stageControls.narrator}** ;
- un décor qui n’existe pas là-bas est abandonné (le moment affiche « {tx.stage.noBackground} ») ;
- un personnage qui n’existe pas là-bas n’est pas dessiné, et peut apparaître comme une ligne « Sans nom » dans le diagramme de la scène, ou comme `?` dans le [mode Script](/novelworks-docs/fr/writing/script-mode-lines/) ;
- **aucun avertissement n’est affiché**, donc vérifiez vous-même le moment collé.

Collez dans un projet qui a les mêmes personnages, images, scènes et variables pour un meilleur résultat.

## Supprimer

`Delete` ou `Backspace` retire de la scène le personnage, la zone ou l’accessoire sélectionné, ou supprime le moment sélectionné, quand aucune zone de texte n’a le focus.

## Tous les raccourcis

Voir [Raccourcis clavier](/novelworks-docs/fr/reference/keyboard-shortcuts/).
