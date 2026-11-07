---
title: Exploration
description: "Des scènes pointer-cliquer : des zones sur lesquelles le joueur clique pour observer, ramasser des objets ou avancer."
---

Un moment **{ui.moments.exploration}** n’a **pas de boîte de texte** : le joueur regarde une image et clique sur les **zones** que vous y dessinez. Une zone peut afficher une ligne de texte, changer une variable, donner un objet ou mener à une autre scène. Il est toujours disponible : aucune fonctionnalité à activer.

## En ajouter un

Dans la ligne de temps, ajoutez un moment **{ui.moments.exploration}**. Il commence vide et utilise le décor du moment précédent. Sélectionnez-le : l’inspecteur affiche **{ui.explorationInspectors.zones}** et **{ui.explorationInspectors.props}** avec **+ Zone** et **+ Accessoire**.

![Un moment Exploration : les zones dessinées sur l’image, et la liste des zones et des accessoires dans l’inspecteur.](/novelworks-docs/screenshots/exploration-editor.png)

## Dessiner des zones

Au-dessus de l’écran du jeu, choisissez **{ui.explorationCanvas.drawZonesAs}** : Rectangle ou Forme. (Dans une fenêtre étroite, ces choix se trouvent dans le menu **{ui.stage.more}**.)

- Rectangle : faites glisser sur l’image. Un simple clic ne crée rien, et une zone plus petite que 2 % de l’écran n’est pas créée.
- Forme : cliquez point par point autour d’un objet. Fermez la forme en cliquant de nouveau sur le premier point, ou en appuyant sur Entrée. **Échap** annule. Il faut au moins trois points.

Une zone est sélectionnée juste après que vous l’avez dessinée. Faites-la glisser pour la déplacer. Un rectangle a huit poignées pour le redimensionner, et une forme a une poignée sur chaque point. Vous pouvez aussi utiliser **+ Zone** pour ajouter un rectangle au milieu de l’écran.

Faites un clic droit sur une zone pour **{ui.contextMenus.duplicateZone}** et **{ui.contextMenus.deleteZone}**, ou utilisez **Cmd+D** / **Ctrl+D** pour dupliquer et `Delete` pour supprimer. Une copie est placée un peu plus bas et à droite, nommée « … (copie) ». Chaque modification est une étape d’annulation.

## L’inspecteur de zone

- **{ui.explorationInspectors.name}** : pour vous seulement, afin de retrouver la zone. Les joueurs ne le voient jamais. Les nouvelles zones s’appellent « Zone 1 », « Zone 2 »…
- **{ui.explorationInspectors.label}** : affichée quand le pointeur est sur la zone (sur téléphone : au premier toucher).
- **{ui.explorationInspectors.highlight}** : Aucun, Lueur (par défaut) ou Contour.
- **{ui.explorationInspectors.whenClicked}**, l’action :

| Action | Ce qu’elle fait |
|---|---|
| Examiner (par défaut) | Affiche une ligne de texte, dite par le narrateur ou par un personnage de votre choix. Le clic suivant ramène à l’exploration. |
| Aller à la scène | Quitte l’exploration pour cette scène. |
| Continuer | Quitte l’exploration et poursuit avec le moment suivant de cette scène. |
| Changer une variable | Ajoute à un Score ou fixe une variable. Les autres zones qui en dépendent apparaissent, disparaissent ou se déverrouillent aussitôt. |
| Ramasser un objet | Met un objet dans l’inventaire, avec une notification. La zone et ses accessoires disparaissent alors pour de bon. (Fonctionnalité Inventaire.) |
| Utiliser un objet | Vérifie l’inventaire. Choisissez **{ui.explorationInspectors.itemToUse}**, s’il est **consommé**, et un résultat **{ui.explorationInspectors.whenThePlayerHasIt}** (Examiner, Aller à la scène, Continuer ou Changer une variable). **{ui.explorationInspectors.withoutItOptional}** est la ligne affichée quand le joueur ne l’a pas ; si elle est vide, rien ne se passe. (Fonctionnalité Inventaire.) |

- **{ui.explorationInspectors.works}** : **{ui.explorationInspectors.everyTime}** ou **{ui.explorationInspectors.onceOnly}** (après sa première utilisation, la zone ne fait plus rien, dans cette partie).
- **Une condition** : « Disponible seulement quand une variable ou un objet le dit ». Quand elle n’est pas vraie, **{ui.explorationInspectors.otherwise}** : Masquée (la zone et ses accessoires ne peuvent être ni vus ni cliqués) ou Verrouillée (elle affiche son étiquette mais ne peut pas être utilisée, avec une ligne facultative affichée au clic).

## Accessoires

Les **{ui.explorationInspectors.props}** sont des images d’objets (une clé, une lettre, un vase) placées sur la scène. Ils ne sont pas cliquables : liez un accessoire à une zone pour les masquer ensemble.

- **+ Accessoire** ouvre « Choisir un accessoire » (des images de type Accessoire, avec une option d’import). Un nouvel accessoire est placé au centre.
- Faites glisser un accessoire pour le déplacer, ou un coin pour le redimensionner. Dans l’inspecteur, **{ui.explorationInspectors.size}** est une largeur de 2 à 100 % de l’écran.
- **{ui.explorationInspectors.hiddenWithZone}** : quand cette zone est masquée par sa condition, l’accessoire l’est aussi. **{ui.explorationInspectors.addAZoneAroundIt}** ajoute une zone autour de l’accessoire.
- **{ui.explorationInspectors.forward}** et **{ui.explorationInspectors.backward}** changent l’accessoire qui est devant. **{ui.explorationInspectors.removeProp}** le supprime.
- Les accessoires sont dessinés derrière les personnages et au-dessus du décor.

## Ce que voient les joueurs

- Les zones sont **invisibles** tant que le pointeur n’est pas dessus (ou qu’elles n’ont pas le focus, ou qu’on ne les a pas touchées une fois sur un écran tactile). Alors la mise en valeur s’affiche, et l’étiquette apparaît dans une petite bulle.
- Le curseur devient une main au-dessus d’une zone, et un curseur « interdit » au-dessus d’une zone verrouillée.
- Tant qu’une ligne de texte est affichée, les zones ne font rien : n’importe quel clic ferme la ligne.
- Sur un écran tactile, avec une étiquette, le premier toucher affiche l’étiquette et le second agit. Sans étiquette, un toucher suffit pour agir.
- Au clavier, **Tab** passe d’une zone à l’autre et Entrée en utilise une. Les lecteurs d’écran lisent l’étiquette, ou « Quelque chose à regarder 1 », et « (verrouillée) » pour une zone verrouillée.

**Il n’y a pas de sortie « tout est fait ».** Le joueur reste dans l’exploration jusqu’à ce qu’il clique sur une zone qui mène à une scène, ou sur Continuer. Assurez-vous qu’au moins une zone le fasse.

## Avertissements

- Dessinez au moins une zone sur laquelle le joueur peut cliquer.
- **Les joueurs peuvent rester bloqués ici** : aucune zone sur laquelle ils peuvent cliquer ne mène à une autre scène ni ne poursuit l’histoire.
- Une zone mène à une scène mais aucune n’est choisie, ou mène à une scène supprimée ; n’a rien à dire (à l’examen, ou quand un objet est utilisé) ; est examinée par un personnage supprimé ; change une variable qui n’est pas choisie ou qui a été supprimée.
- La condition d’une zone vérifie une variable ou un objet qui n’est pas choisi, qui a été supprimé, ou dont la fonctionnalité Inventaire est désactivée.
- Une zone pour ramasser ou utiliser un objet emploie un objet qui n’est pas choisi, qui a été supprimé, ou dont la fonctionnalité Inventaire est désactivée.
- Une zone a besoin d’un objet que les joueurs ne peuvent jamais obtenir, ou qui ne peut jamais être utilisé parce que sa condition n’est jamais vraie.
- Un accessoire n’a pas d’image, ou est lié à une zone supprimée.
- Les moments placés après une exploration sans zone Continuer ne peuvent jamais être atteints.
- Sur la carte : « Ajoutez une image d’arrière-plan dans Carte. » et « Les joueurs ne peuvent jamais ouvrir la carte… » (voir [Carte](/novelworks-docs/fr/features/map/)).

## Ailleurs

- Sur la [carte de l’histoire](/novelworks-docs/fr/branching/story-map/), les zones qui mènent à une scène (y compris le résultat de « Utiliser un objet ») sont des flèches étiquetées avec le nom de la zone. Une zone qui ne fait que continuer reste à l’intérieur de la scène : pas de flèche.
- Dans le [mode Script](/novelworks-docs/fr/writing/script-mode-lines/), une exploration tient sur une seule ligne `exploration : 3 zones`. Les zones et les accessoires se modifient uniquement dans la vue Visuel, et sont conservés quand vous modifiez le texte.
- La [Carte](/novelworks-docs/fr/features/map/) utilise les mêmes zones, comme des lieux.
