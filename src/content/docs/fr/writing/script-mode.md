---
title: "Mode Script : les bases"
description: Écrivez toute une scène sous forme de texte, comme un scénario, et voyez-la se mettre à jour pendant que vous tapez.
---

Le **mode Script** montre une scène sous forme de texte au lieu d'un écran de jeu et d'une chronologie. Vous écrivez une ligne par chose qui se passe, comme dans un scénario, et la scène se met à jour pendant que vous tapez. Les deux vues modifient la même histoire : vous pouvez passer de l'une à l'autre à tout moment.

```
Mia : Hello!
Mia (surprised) : You came back.
background : Station
? What now?
- Talk to her -> Park
- Leave
```

## Passer en mode Script

Au-dessus de l'écran du jeu, le commutateur **{ui.topBar.storyView}** a deux boutons : **{ui.topBar.visual}** (l'écran du jeu et la chronologie) et **{ui.topBar.script}** (la scène sous forme de texte). Le même commutateur se trouve dans la vue Script, pour que vous puissiez revenir.

![Mode Script : la scène sous forme de texte à gauche, le moment sous le curseur à droite.](/novelworks-docs/screenshots/script-mode.png)

## Ce que montre le texte

La barre d'outils Script a un commutateur **{ui.scriptMode.scope}** :

- **Le nom de la scène** : seulement la scène sélectionnée.
- **{ui.scriptMode.wholeGame}** : toutes les scènes du jeu dans un seul texte, chacune sous un titre `# Name`. Vous pouvez renommer une scène depuis son titre, ajouter une scène avec un nouveau titre, et déplacer des lignes d'une scène à l'autre. Une scène dont vous supprimez le titre est conservée et placée après les autres. La scène cachée propre à la Carte n'est pas incluse.

Un `# heading` dans la vue d'une seule scène est ignoré et signalé.

## L'aperçu

Le côté droit montre le **moment sous le curseur**, tel qu'il apparaît dans le jeu (« Moment 3 sur 12 »). Déplacer le curseur sélectionne ce moment, et sélectionner un moment ailleurs déplace le curseur sur sa ligne. Une ligne qui continue celle du dessus appartient au même moment. La colonne d'aperçu peut être redimensionnée en faisant glisser son bord ; double-cliquez sur le bord pour la réinitialiser.

Au-dessus de l'aperçu, la ligne **{ui.branches.whereTitle}** montre où mène le moment sélectionné, comme dans la vue Visuel (voir [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/)). Un bouton la masque.

## Modifier

- Le texte est appliqué à votre projet **une demi-seconde après que vous avez arrêté de taper**, et quand vous changez de portée, lancez le jeu ou quittez le mode Script.
- Une rafale de frappe compte pour **une seule étape d'annulation**. Une pause d'environ une seconde commence une nouvelle étape.
- Un moment dont vous n'avez pas changé le texte est **conservé tel quel**, avec sa note, sa position sur la carte de l'histoire, ses répliques lues et les sauvegardes des joueurs. Ce que le texte ne peut pas exprimer (placement libre, taille, retournement, ordre des personnages, zones d'exploration et accessoires) est conservé aussi, et un moment dont l'écran n'a pas changé le garde exactement.
- Si vous changez le projet ailleurs (l'inspecteur, la chronologie, l'annulation), le texte se met à jour sans déplacer votre curseur. Si vous êtes en train de taper à ce moment-là, c'est votre texte qui l'emporte.
- Les noms qui n'existent pas encore ne bloquent jamais rien. Le moment est créé quand même et la ligne est soulignée.

## De l'aide pendant que vous tapez

- Tapez `/` au début d'une ligne pour choisir une commande dans une liste. Les noms de personnages, d'images, de scènes, de variables et d'objets sont suggérés pendant que vous tapez, et après `background :`, `show :`, `hide :`, `give`, `remove`, `->`, `+`, `=` et `if`, la liste contient le bon type de noms.
- **Tab** ajoute un retrait et **Shift+Tab** l'enlève.
- Les noms de personnages sont colorés avec la couleur du nom du personnage.
- Le bouton **?** (**{ui.scriptMode.help}**) ouvre un panneau « Écrire un script » avec le format.

## Les noms qui n'existent pas encore

Un nom inconnu est souligné, et une correction rapide propose de le créer en un clic :

- le bouton **{ui.scriptMode.createMissing_other}** dans la barre d'outils crée tous les personnages, expressions, scènes, variables et objets manquants cités dans le texte (**Cmd+.** / **Ctrl+.**) ;
- sur une ligne, la correction propose de créer seulement celui-là.

Une expression créée n'a pas encore d'image. Une variable est créée comme un Fait quand la ligne la compare ou la met à vrai ou faux, sinon comme un Score. Un objet est empilable quand la ligne a une quantité comme `x3`.

## Jouer à partir du curseur

**{ui.scriptMode.playFromCursor}** lance le jeu à partir de la ligne sous le curseur (**Cmd+Enter** / **Ctrl+Enter**).

## Avertissements en mode Script

Une ligne que NovelWorks veut vous faire vérifier reçoit un soulignement jaune. Pointez-la pour lire pourquoi. Le nombre de lignes à vérifier est affiché sous l'aperçu.

| Message | Quand |
|---|---|
| Aucun personnage ne s'appelle « … » | Une ligne `Name : text` dont le nom n'est pas un personnage. La ligne est lue comme de la narration pour l'instant. Corrections : créer le personnage, ou « C'est le narrateur ». |
| Aucune expression ne s'appelle « … » | Une expression que le personnage n'a pas. Correction : la créer. |
| Aucune image ne s'appelle « … » | Un `background :` qui ne correspond à aucune image. Importez-la, ou vérifiez le nom. |
| Aucune scène ne s'appelle « … » | Une cible `->`, une option ou une condition qui nomme une scène inexistante. Correction : la créer. |
| Aucune variable / aucun objet ne s'appelle « … » | Correction : le créer. |
| Cette ligne sous une option n'est pas un effet | Une ligne en retrait sous une option qui n'est pas `+`, `=`, `give` ou `remove`. Elle est ignorée. |
| Cette condition n'a pas pu être lue | Une ligne `if` avec un test qui n'est pas compris. |
| Utilisez soit « and » soit « or » dans une condition | Les deux dans la même condition : seule la première sorte est utilisée. |
| Cette ligne change la scène, mais aucune ligne ne la suit | Un `background`, `show` ou `hide` sans ligne après lui. |
| Cette note n'a aucune ligne à laquelle se rattacher | Une note `//` à la fin sans rien après. |
| « … » n'est pas en scène ici | Un `hide :` pour un personnage qui n'est pas en scène. |
| « … » est un mot réservé | Un personnage nommé comme une commande. Renommez le personnage, ou écrivez la commande entre crochets. |
| Un titre # ne fonctionne que dans le document du jeu entier | Un titre dans la vue d'une seule scène. Il est ignoré. |

## Suite

- [Mode Script : toutes les lignes](/novelworks-docs/fr/writing/script-mode-lines/)
- [Mode Script : conditions et choix](/novelworks-docs/fr/writing/script-mode-conditions/)
- [Importer et exporter un script](/novelworks-docs/fr/writing/import-a-script/)
