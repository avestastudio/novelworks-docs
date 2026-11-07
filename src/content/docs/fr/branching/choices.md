---
title: Choix
description: Laissez le joueur choisir une option, changez ce dont le jeu se souvient, et menez vers une autre scène.
---

Un moment **{ui.moments.choice}** montre au joueur de deux à six boutons. Chaque option peut changer ce dont le jeu se souvient et envoyer l’histoire vers une autre scène. Pour voir comment tout cela s’articule, lisez [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/).

## Ajouter un choix

Dans la chronologie, ajoutez un moment **{ui.moments.choice}**. Il commence avec deux options vides. Vous pouvez écrire dans l’inspecteur, ou directement sur l’écran du jeu.

![Un choix avec deux options : ce que chacune change, et la scène vers laquelle elle mène.](/novelworks-docs/screenshots/choice-options.png)

## La question

**{ui.branchInspectors.questionOptional}** s’affiche dans la boîte de texte au-dessus des options, comme de la narration sans personnage qui parle. Laissez-la vide si vous n’en avez pas besoin.

## Les options

Chaque option est une carte avec son numéro et son texte.

- **{ui.branchInspectors.addOption}** en ajoute une. Un choix peut avoir **jusqu’à 6 options**, et le bouton est désactivé à 6.
- La croix retire une option. Un choix en a besoin d’**au moins 2**, donc la croix est désactivée quand il en reste deux.
- On ne peut pas réordonner les options en les faisant glisser. Pour changer l’ordre, modifiez les textes.

Les joueurs cliquent sur une option, ou appuient sur sa touche numérique, de 1 à 6.

## Où mène une option

**{ui.branchInspectors.then}** choisit ce qui se passe après l’option :

- **{ui.linkSelects.continueNextMoment}** : l’histoire continue avec le moment suivant de la même scène.
- une scène, sous **{ui.linkSelects.orGoToScene}** : le jeu entre dans cette scène à son premier moment.
- **{ui.linkSelects.newScene}** crée une scène vide et la relie.

Si la scène a été supprimée, la liste affiche **{ui.linkSelects.deletedScenePickAnother}** et un avertissement l’explique. Dans le jeu, une scène manquante se comporte comme « continuer ».

Quand le joueur choisit une option, le jeu applique d’abord ses changements, puis suit le lien.

## Ce qu’une option change

Sous **{ui.branchInspectors.changes}**, chaque option liste ce dont le jeu se souvient si elle est choisie. Le premier bouton est **{ui.memory.remember}** : il crée un [Score ou un Fait](/novelworks-docs/fr/concepts/game-memory/) si vous en avez besoin et ajoute le changement en une seule étape. Un Score commence par « ajouter 1 », un Fait par « définir à Oui ».

Chaque changement est une ligne :

- **Une variable.** Choisissez la variable. Pour un Score, choisissez **{ui.branchInspectors.add}** ou **{ui.branchInspectors.setTo}** et tapez un nombre. Pour un Fait, c’est toujours **{ui.branchInspectors.setTo}** Oui ou Non. La croix retire le changement.
- **Un objet**, quand la fonctionnalité Inventaire est activée : **{ui.branchInspectors.giveRemoveAnItem}**. Choisissez l’objet, **{ui.branchInspectors.give_0895a5}** ou **{ui.branchInspectors.remove_7e5608}**, et la quantité pour un objet cumulable.

Quand le jeu applique les changements, il le fait dans l’ordre. Un changement qui pointe vers une variable ou un objet supprimé ou non choisi est ignoré (l’éditeur vous avertit). Ajouter à un Fait ne fait rien. Un objet unique n’est jamais présent plus d’une fois, et un objet cumulable ne descend jamais sous zéro.

## Une option qui n’apparaît que parfois

Cliquez sur **{ui.optionCondition.add}**. Un bloc **{ui.optionCondition.title}** apparaît, avec le même éditeur que les cas d’un [Si…](/novelworks-docs/fr/branching/conditions/) : une ou plusieurs conditions, et **{ui.conditionCases.matchAll}** ou **{ui.conditionCases.matchAny}** quand il y en a plusieurs.

Choisissez ensuite **{ui.optionCondition.whenFalse}** :

- **{ui.optionCondition.hidden}** : l’option n’est pas montrée, et les autres boutons comblent le vide.
- **{ui.optionCondition.locked}** : l’option est montrée grisée et ne peut pas être choisie.

**{ui.optionCondition.remove}** rend l’option de nouveau toujours disponible. Retirer la dernière condition fait la même chose.

**Les joueurs gardent toujours un moyen de continuer.** Si toutes les options devaient être cachées ou verrouillées, le jeu les montre toutes normalement.

Une condition qui vérifie une variable ou un objet supprimé ou non choisi compte comme fausse, donc l’option est cachée ou verrouillée, et l’éditeur vous avertit.

## Dans le jeu

- Les options sont des boutons empilés au milieu de l’écran. Leur apparence vient de l’[Interface du jeu](/novelworks-docs/fr/game-ui/game-ui-editor/).
- Les boutons apparaissent quand le texte a fini de s’afficher.
- Une option cachée ne laisse pas de vide, et les touches numériques comptent les boutons **présents à l’écran**. Un bouton verrouillé prend un numéro mais ne peut pas être choisi.

## Avertissements

Un moment qui a un problème montre un triangle sur sa carte, et une boîte « {tx.branchInspectors.thisMomentNeedsYourAttention} » dans l’inspecteur. Pour un choix :

- Ce choix n’a pas d’options.
- Une option n’a pas de texte.
- Une option mène à une scène qui a été supprimée. Choisissez une autre scène ou Continuer.
- Une option change une variable, mais aucune n’est choisie, ou la variable a été supprimée.
- Une option utilise ou vérifie un objet qui n’est pas choisi, qui a été supprimé, ou dont la fonctionnalité Inventaire est désactivée.
- Une option vérifie une variable qui n’est pas choisie ou qui a été supprimée.

Il n’y a pas d’avertissement quand toutes les options sont verrouillées : le jeu les montre toutes, comme décrit plus haut.
