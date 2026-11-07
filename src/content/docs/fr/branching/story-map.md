---
title: La carte de l’histoire
description: "Voir toutes les scènes et leurs liens, relier des scènes par glisser-déposer et repérer ce qui demande de l’attention."
---

La **{ui.topBar.storyMap}** affiche chaque scène de votre jeu sous la forme d’une carte, et chaque choix, condition, saut et zone sous la forme d’une flèche entre elles. Ouvrez-la depuis la barre du haut, ou avec **Cmd+6** / **Ctrl+6**.

![La carte de l’histoire : chaque scène est une carte, avec des flèches pour les choix, les conditions et les sauts. Quand aucune scène n’est sélectionnée, le panneau de droite liste les fins.](/novelworks-docs/screenshots/story-map.png)

## Les cartes de scène

Chaque carte indique :

- le nom de la scène, et **★ Départ** sur la scène de départ ;
- son résumé, ou « Pas encore de résumé » (le [résumé](/novelworks-docs/fr/writing/scenes/) n’est que pour vous) ;
- son état d’écriture (**{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** ou **{ui.shared.outline.done}**) et son nombre de mots, ou « Vide ». Pointez le nombre de mots pour voir le nombre de moments ;
- un badge en forme de note adhésive avec le nombre de moments qui ont une [note](/novelworks-docs/fr/writing/notes/) ;
- un badge d’avertissement avec le nombre de problèmes. Pointez-le pour lire chacun d’eux (« Moment 4 : … ») ;
- des étiquettes : un drapeau avec le nom de chaque fin, « Inaccessible » (rien n’y mène depuis la scène de départ ; elle n’apparaît pas quand le projet n’a qu’une seule scène), « Le jeu se termine ici » (rien ne suit cette scène et elle n’a pas de fin) et « Retour à la carte ».

Une carte inaccessible a une bordure en pointillés et elle est atténuée.

## Les flèches

Une flèche va d’une scène vers la scène à laquelle l’un de ses moments mène. Tous les liens entre les deux mêmes scènes sont réunis en une seule flèche avec plusieurs étiquettes. Une étiquette se lit « numéro du moment · texte », par exemple « 11 · Aider », et elle a la couleur de son type de moment.

| Étiquette de la flèche | Créée par |
|---|---|
| Le texte d’une option | Une option de choix qui va vers une scène |
| « si … » et « sinon » | Les cas et le sinon d’un Si… |
| « saut » | Un saut |
| Le nom d’une zone | Une zone d’exploration qui va vers une scène |

Une boucle en pointillés sous une scène signifie « l’histoire continue dans cette scène » : une option de choix ou un sinon sans scène, qui continue avec le moment suivant. Une flèche en pointillés de la couleur des avertissements, avec « scène supprimée », signifie qu’un lien va vers une scène qui a été supprimée. Une flèche affiche jusqu’à trois étiquettes, puis « +N de plus » : pointez-la pour les voir toutes.

La légende **{ui.storyMap.arrows}** du panneau de droite les rappelle.

## Se déplacer

- **Faites défiler** ou utilisez deux doigts pour déplacer la carte. **Faites glisser un endroit vide**, maintenez **Espace** en glissant, ou utilisez le bouton central de la souris, pour vous déplacer.
- **Pincez**, ou maintenez **Cmd** / **Ctrl** en faisant défiler, pour zoomer autour du pointeur. Les boutons dézooment et zooment (x0.8 et x1.25), entre 20 % et 200 %.
- Le bouton **{ui.gameUIInspector.fit}** (avec le pourcentage de zoom) affiche toute l’histoire (**Maj+1**). **Maj+0** revient à 100 %.
- **+** et **-** zooment et dézooment.

La carte se souvient de l’endroit où vous étiez tant que NovelWorks reste ouvert, et affiche toute l’histoire la première fois.

## Placer les scènes

- **Faites glisser une carte** pour la déplacer. Sa position est enregistrée dans le projet. Vous pouvez déposer une carte sur une autre : déplacez-la de nouveau si cela arrive. Une scène **nouvelle** ou **copiée** arrive toujours sur un emplacement libre.
- Les scènes que vous n’avez pas placées reçoivent une position automatique : des colonnes selon la distance à la scène de départ, et les scènes inaccessibles regroupées en dessous.
- **{ui.storyMap.tidyUp}** oublie toutes les positions que vous avez choisies et replace automatiquement toutes les scènes, à partir de la scène de départ. Il est désactivé quand tout est déjà automatique.

## Ajouter une scène

Cliquez sur **{ui.storyMap.newScene}**, ou double-cliquez sur un endroit vide de la carte. Une petite carte apparaît : tapez le nom, appuyez sur Entrée pour passer au résumé, puis de nouveau sur Entrée pour confirmer. **Échap** annule. La scène est créée avec une ligne de dialogue vide.

## Ouvrir une scène

Double-cliquez sur une carte, ou sélectionnez-la et appuyez sur Entrée, ou faites un clic droit et choisissez **{ui.storyMap.openInEditor}** : la scène s’ouvre dans le mode {ui.topBar.story}.

## Relier deux scènes

Faites glisser la **poignée ronde** à droite d’une carte vers une autre carte, ou vers un endroit vide (pour y créer une nouvelle scène). Une petite fenêtre demande comment les relier :

| Type | Ce que cela ajoute à la fin de la première scène |
|---|---|
| {ui.shared.linking.jump} | Un saut vers la scène, ou la cible de son dernier saut. |
| {ui.shared.linking.choiceOption} | Une option (vous tapez son texte) dans le dernier choix, ou un nouveau choix. |
| {ui.shared.linking.condition} | Un nouveau Si… dont le premier cas va vers la scène. Il vous reste à choisir la variable. |
| {ui.shared.linking.explorationZone} | Une zone qui va vers la scène, dans le dernier moment Exploration. |

Un type qui ne s’applique pas est grisé, avec la raison : « Cette scène se termine par une fin », « Cette scène se termine déjà par un saut », « Son choix a déjà 6 options »… Relier se fait en une seule étape pour Annuler. Cela ajoute un moment à la scène : rien n’est enregistré dans la carte elle-même.

## Clic droit

### Une scène

**{ui.storyMap.openInEditor}**, **{ui.storyMap.rename}**, **{ui.storyMap.editSummary}**, **{ui.storyMap.status}** (À écrire, Brouillon, Terminé), **{ui.storyMap.duplicate}** (la copie apparaît juste en dessous), **{ui.storyMap.setAsStartScene}** et **{ui.storyMap.delete}** (avec la confirmation habituelle).

### Une flèche

- **{ui.storyMap.goToTheMomentThatCreatesThis}** : ouvre ce moment (une entrée par étiquette quand il y en a plusieurs).
- **{ui.storyMap.removeLink}** : pour un saut ou une option. Pour un saut, le saut reste mais perd sa scène. Pour une option, l’option est supprimée, sauf si le choix n’a que deux options : dans ce cas, seul le lien est effacé.
- **{ui.storyMap.unlinkZone}** : pour une zone, qui reste là où elle a été dessinée.

Les liens créés par un Si… ne peuvent pas être supprimés depuis la carte. Modifiez-les dans l’inspecteur. Chaque suppression demande d’abord une confirmation, et peut être annulée.

## Mettre en valeur ce qui compte

En haut, **{ui.storyMap.highlight}** estompe les scènes qui ne correspondent pas, ainsi que leurs flèches :

- **{ui.storyMap.all}** : tout ;
- **{ui.storyMap.toWrite}** : les scènes encore à écrire ;
- **{ui.storyMap.endingsFilter}** : les scènes qui contiennent une fin ;
- **{ui.storyMap.problems}** : les scènes avec un avertissement, ou inaccessibles.

La progression de l’écriture se trouve à côté : le nombre de scènes, puis combien sont terminées, en brouillon et à écrire.

## Le panneau de droite

- **Avec une scène sélectionnée** : son inspecteur (nom, résumé, état d’écriture, scène de départ, **{ui.branches.entriesTitle}**, nombre de moments, et boutons pour l’ouvrir, la dupliquer ou la supprimer).
- **Sans rien de sélectionné** : un panneau d’aide avec les **{ui.endings.title}** ([voir toutes les fins](/novelworks-docs/fr/branching/endings/)), la légende **{ui.storyMap.arrows}**, et des rappels pour ajouter, relier et déplacer des scènes.
