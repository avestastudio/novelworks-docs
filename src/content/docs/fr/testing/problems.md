---
title: "Problèmes : tous les avertissements"
description: Les endroits où l’éditeur vous prévient que quelque chose ne va pas, et la liste complète des avertissements avec ce qu’il faut faire.
---

L’éditeur vous prévient quand quelque chose dans votre histoire est incomplet ou ne pourra jamais fonctionner, pour que vous puissiez le corriger avant que les joueurs ne le voient. **Un avertissement ne vous bloque jamais :** vous pouvez quand même jouer et exporter. Le jeu lui-même ne plante jamais à cause de ces problèmes : un lien manquant signifie simplement « continuer avec le moment suivant ».

## Où apparaissent les avertissements

- **Sur la carte d’un moment** dans la chronologie, un triangle d’avertissement. Pointez-le pour lire tous les problèmes de ce moment.
- **Dans l’inspecteur** du moment, un encadré « {tx.branchInspectors.thisMomentNeedsYourAttention} » les énumère.
- **Dans l’onglet Scènes**, une étiquette rouge **{ui.scenesTab.unreachable}** sur une scène vers laquelle rien ne mène.
- **Sur la [carte de l’histoire](/novelworks-docs/fr/branching/story-map/)**, un badge d’avertissement avec un nombre sur la carte d’une scène, et l’étiquette **{ui.storyMap.unreachable}**. Le filtre **{ui.storyMap.problems}** met en évidence les scènes qui ont des avertissements ou qui sont inaccessibles. L’étiquette « {tx.storyMap.gameEndsHere} » est une information, pas un avertissement.
- **Dans l’espace de travail Carte**, un encadré « Vérifier la carte ».
- **Quand vous exportez**, une liste de « points à vérifier d’abord » pour tout le jeu. Voir [Export web](/novelworks-docs/fr/publish/web-export/).
- **Dans le [mode Script](/novelworks-docs/fr/writing/script-mode/)**, un ensemble distinct de soulignements jaunes sur des lignes.

Il n’y a pas de compteur de problèmes dans la barre du haut ni de panneau qui liste tout : la fenêtre d’export est le seul endroit qui liste d’un coup tous les problèmes du jeu.

## N’importe quel moment

| Avertissement | Ce que cela signifie et ce qu’il faut faire |
|---|---|
| Les joueurs ne voient jamais ce moment : une fin, un saut, un moment « {tx.moments.showMap} » ou une exploration sans zone « Continuer » le précède dans cette scène. | Un moment placé après un moment qui quitte la scène. Déplacez-le ou supprimez-le. |

## Choix

| Avertissement | Ce qu’il faut faire |
|---|---|
| Ce choix n’a aucune option. | Ajoutez des options. |
| L’option N n’a pas de texte. | Saisissez le texte de l’option. |
| L’option N mène à une scène qui a été supprimée. Choisissez une autre scène ou « Continuer ». | Choisissez une autre scène, ou « Continuer ». |
| L’option N modifie une variable, mais aucune n’est choisie. / … qui a été supprimée. | Choisissez une variable. |
| L’option N utilise un objet, mais aucun n’est choisi. / … qui a été supprimé. / … mais la fonctionnalité Inventaire est désactivée. | Choisissez un objet, ou activez Inventaire dans Fonctionnalités. |
| L’option N vérifie une variable ou un objet, mais aucun n’est choisi. / … qui a été supprimé. / … mais la fonctionnalité Inventaire est désactivée. | Corrigez la condition de l’option. |

## Si…

| Avertissement | Ce qu’il faut faire |
|---|---|
| Choisissez la variable que cette condition vérifie. | Choisissez une variable. |
| Choisissez l’objet que cette condition vérifie. | Choisissez un objet. |
| Cette condition vérifie une variable qui a été supprimée. / un objet qui a été supprimé. | Choisissez-en un autre. |
| Cette condition vérifie un objet, mais la fonctionnalité Inventaire est désactivée. | Activez Inventaire. |
| Choisissez la scène de destination lorsque la condition est vraie. | Choisissez une scène. |
| Lorsque la condition est vraie, ceci mène à une scène qui a été supprimée. / Sinon, ceci mène à une scène qui a été supprimée. | Choisissez une autre scène. |

Rappelez-vous qu’un bloc Si… dont la condition est cassée est ignoré par le jeu. Voir [Conditions Si…](/novelworks-docs/fr/branching/conditions/).

## Saut

| Avertissement | Ce qu’il faut faire |
|---|---|
| Choisissez la scène de destination. | Choisissez une scène. |
| Ceci mène à une scène qui a été supprimée. | Choisissez une autre scène. |

## Moment Objet

| Avertissement | Ce qu’il faut faire |
|---|---|
| Choisissez l’objet à donner. / Choisissez l’objet à retirer. | Choisissez un objet. |
| Ce moment donne un objet qui a été supprimé. / … retire un objet qui a été supprimé. | Choisissez un autre objet. |
| La fonctionnalité Inventaire est désactivée : les joueurs n’ont pas d’inventaire. Activez-la dans Fonctionnalités. | Activez Inventaire. |

## Moment Exploration

| Avertissement | Ce qu’il faut faire |
|---|---|
| Dessinez au moins une zone sur laquelle le joueur pourra cliquer. | Dessinez une zone. |
| « Zone » mène à une scène, mais aucune n’est choisie. / mène à une scène qui a été supprimée. (Aussi « … mène à une scène quand l’objet est utilisé, mais aucune n’est choisie. ») | Choisissez une scène. |
| « Zone » n’a rien à dire quand on l’examine. / … quand l’objet est utilisé. | Saisissez la réplique qu’elle affiche. |
| « Zone » vérifie une variable ou un objet, mais aucun n’est choisi. / … qui a été supprimé. / … mais la fonctionnalité Inventaire est désactivée. (sa condition) | Corrigez la condition. |
| « Zone » utilise un objet, mais aucun n’est choisi. / … qui a été supprimé. / … mais la fonctionnalité Inventaire est désactivée. | Corrigez l’objet. |
| « Zone » est examinée par un personnage qui a été supprimé. | Choisissez un autre personnage qui parle. |
| « Zone » modifie une variable, mais aucune n’est choisie. / … qui a été supprimée. | Choisissez une variable. |
| « Zone » nécessite un objet que les joueurs ne peuvent jamais obtenir. | Donnez l’objet quelque part (un moment Objet, un choix ou une zone de ramassage). |
| « Zone » ne peut jamais être utilisée : sa condition n’est jamais vraie. | Vérifiez ce qui modifie la variable ou donne l’objet. |
| Un accessoire n’a pas d’image. / Un accessoire est lié à une zone qui a été supprimée. | Choisissez une image, ou liez l’accessoire à une autre zone. |
| Les joueurs peuvent rester bloqués ici : aucune zone cliquable ne mène à une autre scène ni ne poursuit l’histoire. | Ajoutez une zone qui mène à une scène ou qui poursuit l’histoire. |

## Carte

| Avertissement | Ce qu’il faut faire |
|---|---|
| La fonctionnalité Carte est désactivée : ce moment ne fait rien. Activez-la dans Fonctionnalités. | Activez Carte dans Fonctionnalités (c’est l’avertissement d’un moment « {tx.moments.showMap} »). |
| Créez votre carte dans Carte et ajoutez un arrière-plan. / Le moment de la carte a été supprimé. Choisissez un autre moment d’exploration. / Le moment de la carte n’est plus une exploration. Choisissez-en un autre. | Créez ou corrigez la carte. Sur un moment « {tx.moments.showMap} », ces messages se terminent par « D’ici là, ce moment ne fait rien. » |
| Ajoutez une image d’arrière-plan dans Carte. | Choisissez un arrière-plan. |
| Les joueurs ne peuvent jamais ouvrir la carte : le jeu n’a pas de scène de départ. | Définissez une scène de départ. |
| Les joueurs ne peuvent jamais ouvrir la carte : le bouton Carte est désactivé / en attente d’un moment « {tx.moments.showMap} », et aucun moment « {tx.moments.showMap} » ne peut être atteint. Ajoutez-en un, ou rendez la carte disponible en permanence. | Ajoutez un moment « {tx.moments.showMap} », ou changez la disponibilité de la carte. |

## Jeu entier (fenêtre d’export)

| Avertissement | Ce qu’il faut faire |
|---|---|
| Le jeu ne contient encore aucune scène : les joueurs ne verront que l’écran-titre. | Ajoutez une scène. |
| Aucune scène de départ n’est définie : « Nouvelle partie » mènera directement à la fin. | Définissez une scène de départ avec l’étoile. |
| Les joueurs ne peuvent jamais atteindre cette scène : aucun choix, condition, saut ni zone n’y mène. (Seulement quand le jeu a plus d’une scène.) | Reliez-la, ou supprimez-la. |
| Cette scène ne contient aucun moment. | Ajoutez un moment. |
| Les joueurs ne voient jamais ces moments : une fin, un saut ou une exploration sans zone « Continuer » les précède dans cette scène. | Déplacez-les ou supprimez-les. |

La fenêtre d’export liste aussi les avertissements propres à chaque moment, sous la forme « Scène, moment 4 — message ».

## Liens impossibles à faire sur la carte

Quand vous faites glisser un lien sur la carte de l’histoire, un type de lien qui ne peut pas s’appliquer est grisé avec une raison : la scène se termine par une fin, se termine déjà par un saut, se termine par une exploration (ajoutez plutôt une zone), ou son choix a déjà 6 options.

## Ce qui n’est pas vérifié

Un moment de dialogue n’a pas d’avertissement propre : une réplique de dialogue vide n’est pas signalée. Les tenues, les ambiances, la caméra, les effets et les sons n’ont pas non plus d’avertissements.
