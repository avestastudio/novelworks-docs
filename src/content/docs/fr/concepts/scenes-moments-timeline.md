---
title: Scènes, moments et timeline
description: Comment une histoire est organisée dans NovelWorks, des scènes aux moments.
---

## Scènes et moments

Une histoire est un ensemble de **scènes**, comme des chapitres. Une scène est une suite de **moments**, comme des diapositives, joués dans l’ordre. La plupart des moments sont une ligne de dialogue, mais il y en a huit sortes.

![Une scène sous forme de rangée de moments : deux dialogues, un choix, un Si, un saut et une fin.](/novelworks-docs/diagrams/moments-strip.svg)

| Sorte | Ce qu’il fait | Les joueurs le voient |
|---|---|---|
| {ui.moments.dialogue} | Une ligne de dialogue ou de narration. | Oui |
| {ui.moments.choice} | Le joueur choisit une option. Il peut modifier des variables et mener à une autre scène. | Oui |
| {ui.moments.condition} | Envoie l’histoire ailleurs selon une variable. | Non, le jeu vérifie et continue |
| {ui.moments.jump} | Va directement à une autre scène. | Non |
| {ui.moments.ending} | Affiche le nom de la fin, puis revient à l’écran-titre. | Oui |
| {ui.moments.exploration} | Pas de boîte de texte : le joueur clique sur des zones de l’image pour regarder autour de lui, changer des variables ou aller à une autre scène. | Oui |
| {ui.moments.item} | Donne des objets au joueur ou les lui reprend, avec une courte notification. | Seulement la notification |
| {ui.moments.showMap} | Ouvre la carte tout de suite. | Seulement la carte |

{ui.moments.item} et {ui.moments.showMap} ne sont dans la liste que lorsque les fonctionnalités Inventaire et Carte sont activées. Voir [Exploration](/novelworks-docs/fr/features/exploration/), [Inventaire](/novelworks-docs/fr/features/inventory/) et [Carte](/novelworks-docs/fr/features/map/).

Les scènes ne sont reliées entre elles **que par des moments** : les options d’un choix, les cas d’un Si, un saut, ou les zones d’une exploration. Les moments à l’intérieur d’une scène se jouent toujours l’un après l’autre.

## La timeline

En bas de la fenêtre, la timeline montre les moments de la scène sélectionnée sous forme de cartes.

- L’en-tête contient le nom de la scène, le nombre de moments et de mots, et le résumé de la scène si vous en avez écrit un. Cliquez sur le résumé pour le modifier dans l’inspecteur.
- Chaque carte montre sa sorte, la personne qui parle (ou « Narrateur ») et un court résumé de ce qu’elle dit ou fait. Une carte peut porter une note ou un avertissement.
- Cliquez sur une carte pour la sélectionner et la modifier sur l’écran du jeu et dans l’inspecteur. Glissez les cartes pour les réordonner.
- Des boutons ajoutent un moment **après celui qui est sélectionné**, un par sorte. Une carte **+** à la fin ajoute une ligne de dialogue.
- Deux icônes dupliquent et suppriment le moment sélectionné. La suppression demande confirmation, sauf si le moment est une ligne de dialogue vide.
- Sous les cartes, un graphique montre qui est en scène ([Le plateau](/novelworks-docs/fr/concepts/stage/)) et une rangée montre où l’histoire bifurque ([Comment une histoire bifurque](/novelworks-docs/fr/concepts/how-stories-branch/)).

### La façon rapide d’écrire

Dans la boîte de dialogue, **Entrée** démarre un nouveau moment avec le même plateau. **Maj+Entrée** ajoute une ligne dans la même boîte.

## La scène de départ

Le jeu commence à la **scène de départ**, marquée d’une étoile dans l’onglet Scènes. Pour la changer, utilisez {ui.scenesTab.makeStartScene} sur une autre scène.

## Les scènes que le joueur ne peut pas atteindre

Une scène à laquelle ne mène aucun choix, condition, saut ou zone, en partant de la scène de départ, est marquée {ui.scenesTab.unreachable} dans l’onglet Scènes, et porte un avertissement. Voir [Problèmes](/novelworks-docs/fr/testing/problems/).

## Résumé et état d’écriture

Sélectionnez une scène pour lui donner un {ui.sceneInspector.summary}. Il n’est que pour vous, et s’affiche sur la carte de l’histoire. Chaque scène a aussi un {ui.sceneInspector.writingStatus} : {ui.shared.outline.toWrite}, {ui.shared.outline.draft} ou {ui.shared.outline.done}. Si vous ne le réglez pas, c’est {ui.shared.outline.toWrite} jusqu’à ce qu’une ligne de dialogue ait du texte, puis {ui.shared.outline.draft}.

## Pour en savoir plus sur les scènes

Voir [Scènes](/novelworks-docs/fr/writing/scenes/) et [Moments et dialogue](/novelworks-docs/fr/writing/moments-and-dialogue/).
