---
title: Personnages et expressions
description: Créez des personnages, donnez-leur des expressions et des avatars, et sachez ce qui se passe quand vous en supprimez un.
---

Un *personnage* est une personne de votre histoire. Chaque personnage a un nom, une couleur de nom et des **expressions** : une image par humeur. Les personnages se trouvent dans l'onglet **{ui.leftPanel.characters}**.

## Créer un personnage

Cliquez sur **{ui.charactersTab.newCharacter}**. Le personnage s'appelle « Personnage N », où N est le nombre de personnages que vous avez déjà plus un (deux personnages peuvent finir avec le même nom, pensez donc à les renommer), et reçoit une couleur de nom parmi un jeu de huit. Sélectionnez-le pour le modifier dans l'inspecteur.

Vous pouvez aussi créer un personnage pendant l'import d'images : voir [Ressources](/novelworks-docs/fr/writing/assets/).

## Nom et couleur

- **{ui.characterInspector.name}** : tapez-le dans l'inspecteur (la liste elle-même ne permet pas de renommer, mais **{ui.contextMenus.rename}** dans le menu du clic droit vous amène au champ).
- **{ui.characterInspector.nameColor}** : choisissez l'une des huit couleurs prédéfinies, ou n'importe quelle couleur avec **{ui.characterInspector.pickAnyColor}**. Elle colore le nom dans la boîte de dialogue et dans le mode Script.

## Expressions

Sous **{ui.characterInspector.expressions}**, ajoutez une image pour chaque humeur (joyeux, triste, en colère…).

- Cliquez sur **{ui.characterInspector.addExpression}** et choisissez une image de type « Sprite de personnage », ou importez-en une nouvelle depuis le sélecteur. L'expression prend le nom de l'image.
- Tapez un autre nom dans **{ui.characterInspector.expressionName}** si vous le souhaitez.
- Cliquez sur l'étoile pour **{ui.characterInspector.makeThisTheDefaultExpression}**. La première expression que vous ajoutez est celle par défaut. C'est celle qui s'affiche quand un personnage arrive sans expression.
- Cliquez sur l'image pour **{ui.characterInspector.changeImage}**. L'ancienne image reste dans vos ressources.
- Cliquez sur la croix pour retirer l'expression. Si des moments l'utilisent, NovelWorks vous dit qu'ils utiliseront l'expression par défaut à la place. Si vous retirez l'expression par défaut, la première expression restante devient la nouvelle expression par défaut.

## Avatar

Un avatar est un petit portrait affiché dans la boîte de dialogue à côté du nom. Dans **{ui.characterInspector.avatar}**, choisissez :

- **{ui.characterInspector.none}** : pas de portrait dans la boîte de dialogue ;
- **{ui.characterInspector.fixed}** : le même portrait chaque fois que ce personnage parle ;
- **{ui.characterInspector.perExpression}** : un portrait pour chaque expression. Les expressions qui n'en ont pas utilisent l'avatar par défaut.

Les avatars peuvent être des images de type « Avatar », « Sprite de personnage » ou « Interface ».

## Mettre un personnage en scène

Voir [Mettre en scène une scène](/novelworks-docs/fr/writing/staging/). En bref : dans un moment, utilisez **{ui.momentInspector.add}** sous **{ui.momentInspector.onStage}** (ou le bouton **{ui.stageControls.character}** au-dessus de l'écran du jeu), puis faites glisser le personnage où vous voulez.

## Supprimer un personnage

Utilisez **{ui.characterInspector.deleteCharacter}** dans l'inspecteur ou **{ui.contextMenus.delete}** dans le menu du clic droit. Si le personnage n'est pas utilisé, NovelWorks le supprime avec ses expressions ; les images restent dans vos ressources. S'il apparaît dans votre histoire, NovelWorks indique où, et vous avertit qu'il va **quitter ces moments et que ses répliques deviendront de la narration**. Utilisez d'abord **{ui.contextMenus.showUsages}** pour voir où un personnage est utilisé.

Vous pouvez annuler une suppression.
