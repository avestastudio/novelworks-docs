---
title: Boîte de dialogue
description: "L’endroit où apparaissent les noms et les répliques : position, taille, fond, texte et avatar."
---

La **{ui.gameUI.dialogueBox}** est la boîte qui affiche le nom de celui qui parle et le texte. Sa taille et sa place sont exprimées en pourcentages de l’écran (le plus souvent de sa hauteur), si bien qu’elle garde son aspect à toutes les résolutions.

## Position et taille

- **{ui.gameUIInspector.position}** : {ui.gameUIInspector.bottom} (par défaut), {ui.gameUIInspector.top}, {ui.gameUIInspector.left}, {ui.gameUIInspector.right} ou {ui.gameUIInspector.center}. En choisir une règle aussi la largeur et la hauteur sur une bonne taille de départ : une large bande pour le haut et le bas, un grand panneau (environ un tiers de l’écran) pour la gauche et la droite, et une boîte au milieu pour le centre.
- **{ui.gameUIInspector.margin}** : l’espace jusqu’aux bords de l’écran (0 à 20 %, 3,5 par défaut).
- **{ui.gameUIInspector.width}** et **{ui.gameUIInspector.height}** : 10 à 100 %. Après avoir choisi une position, vous pouvez les ajuster.

## Fond

Choisissez **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}** : une couleur et une **{ui.gameUIInspector.opacity}** (0 à 100 %, 80 par défaut). Cette couleur est aussi la couleur par défaut des boutons de choix, du menu pause et des autres panneaux (« Comme la boîte de dialogue »), et de l’onglet du nom. C’est encore vrai quand la boîte elle-même utilise une image : la couleur et l’opacité ne se voient alors plus sur la boîte, mais elles colorent toujours ces boutons et ces panneaux.
- **{ui.gameUIInspector.image}** : n’importe quelle image. Les parties transparentes restent transparentes : vous pouvez donc utiliser des bulles, des parchemins ou toute autre forme. Choisissez comment elle s’ajuste :
  - **{ui.gameUIInspector.stretch}** : remplit toute la boîte (l’image peut sembler écrasée) ;
  - **{ui.gameUIInspector.fit}** : l’image entière, en gardant sa forme ;
  - **{ui.gameUIInspector.slice}** : les coins gardent leur taille, les bords et le milieu s’étirent. Réglez la **{ui.gameUIInspector.cornerSize}** (en % de l’image). Par défaut, les coins sont affichés à la taille d’origine de l’image ; décochez cette case pour régler la **{ui.gameUIInspector.cornerDisplaySize}**, utile pour les grands cadres en haute résolution.

## Texte et nom

- **{ui.gameUIInspector.textColor}** : « Comme la couleur du texte » par défaut.
- **{ui.gameUIInspector.nameColor}** : **{ui.gameUIInspector.characterColors}** (la [couleur du nom](/novelworks-docs/fr/writing/characters/) propre à chaque personnage, par défaut) ou **{ui.gameUIInspector.oneColor}** (une seule **{ui.gameUIInspector.colorOfEveryName}** pour tous).
- **{ui.gameUIInspector.textPadding}** : l’espace entre le bord de la boîte et le texte (0 à 15 %, 4 par défaut).
- **{ui.gameUIInspector.speakerName}** : **{ui.gameUIInspector.insideTheBox}** (par défaut) ou **{ui.gameUIInspector.tabAbove}** (un onglet au-dessus de la boîte).

## Avatar

Quand un personnage qui a un avatar parle, l’avatar s’affiche à côté du nom. Réglez les avatars dans l’[onglet Personnages](/novelworks-docs/fr/writing/characters/).

- **{ui.gameUIInspector.side}** : à gauche (par défaut) ou à droite.
- **{ui.gameUIInspector.size}** : 5 à 60 % de la hauteur de l’écran (20 par défaut). Jamais plus haut que la boîte.

## Vérifier le résultat

Utilisez **{ui.gameUIMode.longTextAvatar}** au-dessus de l’aperçu pour voir une longue réplique et un personnage avec un avatar.
