---
title: Affichage du texte
description: Comment le texte apparaît, et ce que fait un clic pendant qu’il apparaît.
---

Le texte apparaît lettre par lettre, comme sur une machine à écrire. La vitesse est un choix du joueur, dans les [options](/novelworks-docs/fr/player/options-and-accessibility/).

| Réglage | Caractères par seconde |
|---|---|
| Lente | 20 |
| Normale (par défaut) | 40 |
| Rapide | 70 |
| Très rapide | 120 |
| Instantanée | toute la réplique d’un coup |

Un changement s’applique tout de suite, même au milieu d’une réplique.

## Clic, **Espace** ou **Entrée**

- **Pendant que le texte apparaît**, le premier clic, **Espace**, **Entrée** ou la touche d’un choix **termine la réplique** et ne fait rien d’autre. Toute pause restante dans la réplique est aussi ignorée.
- **Pendant que des [effets](/novelworks-docs/fr/writing/effects/) ou un mouvement de [caméra](/novelworks-docs/fr/writing/camera/) sont joués**, le premier clic, **Espace** ou **Entrée** les termine aussi. Les particules comme la pluie continuent.
- **Une fois tout cela terminé**, le clic suivant passe à la réplique d’après.

Les boutons d’un choix apparaissent quand la question est entièrement affichée : le premier appui sur **1** à **6** ne fait donc que terminer le texte.

## Texte enrichi

Une réplique peut utiliser du [texte enrichi](/novelworks-docs/fr/writing/rich-text/). Les lettres apparaissent avec leurs couleurs et leurs tailles, et les lettres qui tremblent ou ondulent bougent. Le texte s’arrête pendant la durée de chaque pause, puis reprend. Quand le joueur a demandé des animations réduites, les lettres ne bougent pas.

## Toujours instantané

- la vitesse « {tx.optionsScreen.speedInstant} » (les pauses dans le texte sont ignorées) ;
- le mode Passer ;
- une réplique après le chargement d’une sauvegarde ;
- quand le joueur n’a pas choisi de vitesse et que son système demande de **réduire les animations**. S’il choisit lui-même une vitesse, elle est utilisée.

## La flèche de suite

Un petit triangle pointant vers le bas, de votre couleur principale, rebondit à la fin d’une réplique de dialogue (ou d’une réplique d’exploration). Son emplacement fait partie du design de la [boîte de dialogue](/novelworks-docs/fr/game-ui/dialogue-box/).

## Mise en pause

Le texte cesse d’apparaître tant que le menu pause ou un écran est ouvert, et tant que la page est masquée.

## Lecteurs d’écran

Un lecteur d’écran lit la réplique entière d’un coup (avec le nom de la personne qui parle), en mots simples, et non lettre par lettre.
