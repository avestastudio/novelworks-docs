---
title: La mémoire du jeu
description: "Scores et faits : comment votre jeu retient ce que le joueur a fait."
---

Un choix n'a de poids que si le jeu s'en **souvient**. NovelWorks garde en mémoire ce qui s'est passé dans des **variables**. Il en existe deux sortes.

| Sorte | Ce qu'elle contient | Exemple |
|---|---|---|
| **{ui.variables.number}** | Un nombre que le jeu peut augmenter ou diminuer. | L'affection de Mia, l'argent |
| **{ui.variables.yesNo}** | Une chose s'est produite ou non : **{ui.variables.yes}** ou **{ui.variables.no}**. | « A rencontré Mia », « A la clé » |

Les objets que le joueur porte (clés, lettres, pièces…) forment une partie à part, facultative, du jeu : voir [Inventaire](/novelworks-docs/fr/features/inventory/).

## L'onglet Variables

L'onglet **{ui.leftPanel.variables}** liste vos variables, chacune avec sa sorte et sa valeur de départ (« Score · commence à 0 »). Cliquez sur **{ui.variablesTab.newVariable}** pour ajouter un Score nommé « Variable N » (N compte vos variables), puis renommez-le et réglez sa valeur de départ dans l'inspecteur (**{ui.variableInspector.startsAt}**). Vous pouvez changer le **{ui.variableInspector.type}** : si la variable est déjà utilisée, NovelWorks demande une confirmation et réinitialise les valeurs.

Si vous supprimez une variable utilisée quelque part, NovelWorks vous avertit. Les endroits qui l'utilisaient restent en place et affichent un avertissement.

## Faire retenir quelque chose au jeu

Vous avez rarement besoin de commencer par l'onglet Variables. Dans un **{ui.moments.choice}**, chaque option a une zone **{ui.branchInspectors.changes}**. Cliquez sur **{ui.memory.remember}** et le panneau demande **{ui.memory.rememberTitle}** :

1. Choisissez **{ui.memory.scoreTitle}** (un nombre qui monte ou descend, comme « l'affection de Mia ») ou **{ui.memory.factTitle}** (une chose qui s'est produite : oui ou non, comme « A rencontré Mia »), et tapez un nom dans **{ui.memory.nameLabel}**.
2. Ou choisissez une variable que vous avez déjà avec **{ui.memory.orPick}**.
3. Cliquez sur **{ui.memory.createAndUse}**.

NovelWorks crée la variable si elle est nouvelle et ajoute le changement à l'option, en une seule étape. Un Score commence par « ajouter +1 » et un Fait par « mettre à Oui ». Vous pouvez modifier la valeur ensuite.

## Utiliser ce que le jeu retient

Un moment **{ui.moments.condition}** envoie l'histoire vers différentes scènes selon une variable, et une option de choix peut n'apparaître que si une condition est remplie. Pour un Score, vous pouvez tester : est, n'est pas, au moins, au plus, plus que, moins que. Pour un Fait : est, n'est pas. Voir [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/) et [Conditions](/novelworks-docs/fr/branching/conditions/).

## Ce que vos choix peuvent totaliser

Sous un test de Score, NovelWorks vous indique ce qui est possible, pour que vous n'ayez pas à compter à la main :

- « Vos choix peuvent totaliser +5 en Affection. »
- « Au total, vos choix peuvent faire passer l'Affection de 0 à 5. »
- « Rien ne change encore l'Affection : elle reste à 0. »

Quand vous tapez un nombre à comparer, NovelWorks vous dit « Cela peut arriver » ou vous avertit « Cela ne peut jamais être vrai : l'Affection reste entre 0 et 5 ». Rien n'est dit quand NovelWorks ne peut pas savoir jusqu'où un Score peut monter ou descendre (par exemple quand une scène boucle, ou qu'une zone fonctionne à chaque fois), car le total n'a alors pas de limite.

Essayez un moment **{ui.moments.condition}** avec la zone **{ui.memory.tryTitle}** : choisissez une valeur à simuler, et NovelWorks montre quel cas est vrai et où l'histoire irait, sans lancer le jeu.
