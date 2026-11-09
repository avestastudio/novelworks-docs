---
title: Boîte de dialogue
description: "L’endroit où apparaissent les noms et les répliques : position, taille, fond, texte et avatar."
---

La **{ui.gameUI.dialogueBox}** est la boîte qui affiche le nom de celui qui parle et le texte. Sa taille et sa place sont en pourcentages de l’écran (surtout de sa hauteur), donc elle garde son aspect à toutes les résolutions.

## Modèles

Sous {ui.templates.heading}, quatre cartes placent la boîte pour vous : {ui.templates.dialogue.classic} (en bas), {ui.templates.dialogue.sidePanel} (à droite), {ui.templates.dialogue.centerCard} et {ui.templates.dialogue.topBanner}. Un clic change seulement la position, la marge, la largeur et la hauteur. Les couleurs, l’étiquette du nom, l’avatar, les images et le texte restent comme vous les avez réglés. Un seul {ui.topBar.undo} ramène ce que vous aviez.

La carte du modèle actuel est mise en évidence jusqu’à ce que vous changiez l’un de ces réglages.

## Position et taille

- **{ui.gameUIInspector.position}** : {ui.gameUIInspector.bottom} (par défaut), {ui.gameUIInspector.top}, {ui.gameUIInspector.left}, {ui.gameUIInspector.right} ou {ui.gameUIInspector.center}. Choisir une position règle aussi la largeur et la hauteur sur une bonne taille de départ : une large bande en haut et en bas, un grand panneau (environ un tiers de l’écran) à gauche et à droite, et une boîte au milieu pour le centre.
- **{ui.gameUIInspector.margin}** : l’espace jusqu’aux bords de l’écran (de 0 à 20 %, 3,5 par défaut).
- **{ui.gameUIInspector.width}** et **{ui.gameUIInspector.height}** : de 10 à 100 %. Après avoir choisi une position, vous pouvez les ajuster.

## Couleurs des mots

{ui.richText.palette} contient cinq couleurs, numérotées de 1 à 5. Ce sont les couleurs proposées quand vous sélectionnez des mots dans une ligne. Voir [Texte enrichi](/novelworks-docs/fr/writing/rich-text/). Si vous changez une couleur ici, tous les mots qui l’utilisent changent aussi.

## Fond

Choisissez **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}** : une couleur et une **{ui.gameUIInspector.opacity}** (de 0 à 100 %, 80 par défaut). Cette couleur est aussi la couleur par défaut des boutons de choix, du menu pause et d’autres panneaux (« {tx.gameUIInspector.sameAsTheDialogueBox} »), ainsi que de l’onglet du nom. C’est toujours vrai quand la boîte elle-même utilise une image : la couleur et l’opacité ne se voient alors plus sur la boîte, mais elles colorent encore ces boutons et ces panneaux.
- **{ui.gameUIInspector.image}** : n’importe quelle image. Les parties transparentes restent transparentes, donc vous pouvez utiliser des bulles, des parchemins ou n’importe quelle forme. Choisissez comment elle s’adapte :
  - **{ui.gameUIInspector.stretch}** : remplit toute la boîte (l’image peut paraître écrasée) ;
  - **{ui.gameUIInspector.fit}** : l’image entière, en gardant sa forme ;
  - **{ui.gameUIInspector.slice}** : les coins gardent leur taille, les bords et le milieu s’étirent. Réglez la **{ui.gameUIInspector.cornerSize}** (en % de l’image). Par défaut, les coins sont affichés à la taille d’origine de l’image ; décochez cette case pour régler la **{ui.gameUIInspector.cornerDisplaySize}**, utile pour les grands cadres en haute résolution.

## Texte et nom

- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut.
- **{ui.gameUIInspector.nameColor}** : **{ui.gameUIInspector.characterColors}** (la [couleur du nom](/novelworks-docs/fr/writing/characters/) propre à chaque personnage, par défaut) ou **{ui.gameUIInspector.oneColor}** (une seule **{ui.gameUIInspector.colorOfEveryName}** pour tous).
- **{ui.gameUIInspector.textPadding}** : l’espace entre le bord de la boîte et le texte (de 0 à 15 %, 4 par défaut).
- **{ui.gameUIInspector.speakerName}** : **{ui.gameUIInspector.insideTheBox}** (par défaut) ou **{ui.gameUIInspector.tabAbove}** (un onglet au-dessus de la boîte).

## Avatar

Quand un personnage qui a un avatar parle, l’avatar est affiché à côté du nom. Définissez les avatars dans l’[onglet Personnages](/novelworks-docs/fr/writing/characters/).

- **{ui.gameUIInspector.side}** : à gauche (par défaut) ou à droite.
- **{ui.gameUIInspector.size}** : de 5 à 60 % de la hauteur de l’écran (20 par défaut). Jamais plus haut que la boîte.

## Vérifier le résultat

Utilisez **{ui.gameUIMode.longTextAvatar}** au-dessus de l’aperçu pour voir une longue réplique et un personnage avec un avatar.
