---
title: "Où vos choix peuvent mener (jusqu’à +5)"
description: Ce que signifie la phrase sous un test de Score, comment elle est calculée et ce qu’elle ne sait pas.
---

Quand vous testez un **{ui.variables.number}** dans un [Si…](/novelworks-docs/fr/branching/conditions/), dans la condition d’une option ou dans une zone d’exploration, NovelWorks ajoute une ligne sous le test. Elle vous dit à quoi vos choix peuvent aboutir, pour que vous n’ayez pas à compter à la main. La même phrase se trouve dans l’inspecteur de la variable.

## Les phrases

| Vous voyez | Signification |
|---|---|
| « Tes choix peuvent ajouter jusqu’à +5 à Affection en tout. » | Le Score part de sa valeur de départ et vos choix ne peuvent que l’augmenter, de 5 au maximum. |
| « En tout, tes choix peuvent amener Affection de 0 à 5. » | Certains choix le font aussi baisser : il y a donc une valeur la plus basse et une valeur la plus haute. |
| « Rien ne change encore Affection : il reste à 0. » | Aucun choix ne modifie ce Score. |
| « {tx.reachHint.possible} » | Pour un nombre que vous avez saisi pour comparer : il fait partie de ce qui est possible. |
| « ⚠ Ce ne sera jamais vrai : Affection reste entre 0 et 5. » | Le test exige une valeur que le Score ne peut jamais atteindre : ce cas ne pourra donc jamais être choisi. |

Rien n’est dit à propos d’un Fait (oui ou non), puisqu’il n’a pas de plage de valeurs.

## Comment c’est calculé

NovelWorks regarde **tout le projet**, pas un seul chemin :

- Le Score part de sa valeur de départ.
- Pour chaque moment **choix**, un joueur prend une option. NovelWorks ajoute la **meilleure** option (celle qui ajoute le plus) à la valeur la plus haute, et la **pire** option (celle qui retire le plus) à la valeur la plus basse.
- Une zone d’exploration réglée sur **{ui.explorationInspectors.onceOnly}** qui modifie le Score compte une seule fois. Une zone réglée sur **{ui.explorationInspectors.everyTime}** (le réglage par défaut) peut être utilisée encore et encore : elle laisse donc ce côté sans limite. Voir « Quand rien n’est dit ».
- Un changement **« {tx.branchInspectors.setTo} »** élargit volontairement la plage : la valeur la plus basse est la plus petite entre la valeur de départ et les valeurs auxquelles il peut la fixer, et la plus haute est la plus grande. Les ajouts qui viennent ensuite comptent toujours.

## Quand rien n’est dit

Si une partie de votre histoire peut se répéter (une scène qui revient sur elle-même, un lieu de la carte que le joueur peut visiter de nouveau, ou **toute zone d’exploration qui fonctionne « {ui.explorationInspectors.everyTime} », ce qui est le réglage par défaut**), le total peut croître sans limite de ce côté. Un Score modifié par une zone par défaut n’a donc aucune phrase : réglez la zone sur « {ui.explorationInspectors.onceOnly} » si vous voulez que NovelWorks la compte. NovelWorks ne dit alors rien de ce côté, car il préfère se taire plutôt que dire quelque chose de faux. Seule la ligne « Rien ne change … encore » reste affichée quand rien ne modifie le Score.

## Ce qu’elle ne sait pas

La phrase est prudente, mais elle ne suit pas l’histoire :

- Elle ignore l’**ordre** des scènes et le chemin que prend le joueur.
- Elle compte les options cachées par une condition, car elle ne sait pas si elles seront disponibles.
- Ainsi, « peuvent ajouter jusqu’à +5 » signifie « vous ne pouvez pas dépasser 5 », et non « tous les joueurs peuvent atteindre 5 ».

Une condition marquée « ne sera jamais vraie » est fiable. Une condition marquée « cela peut arriver » signifie seulement que ce n’est pas exclu.
