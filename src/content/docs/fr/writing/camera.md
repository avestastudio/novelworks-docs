---
title: La caméra
description: Choisissez ce que voit le joueur, enchaînez plusieurs plans dans un moment, et ajoutez de la profondeur, du flou et des effets de film.
---

La caméra décide quelle partie de la scène voit le joueur : tout l’écran ou un gros plan. Sélectionnez un moment, ouvrez l’onglet {ui.inspectorTabs.effects} du [panneau du moment](/novelworks-docs/fr/writing/moment-panel/) et cliquez sur {ui.camera.open}.

![La fenêtre de la caméra : la scène avec son cadre, les mouvements tout faits en haut, les réglages sur le côté et les plans en bas.](/novelworks-docs/screenshots/camera-window.png)

Sur l’écran du jeu de l’éditeur, vous voyez toujours la scène entière. Le petit aperçu de l’onglet {ui.inspectorTabs.effects} montre ce que voit le joueur.

## Plans

Un moment a un plan ou plus, montrés sur une rangée en bas de la fenêtre. Chaque plan est un cadre sur la scène, et la caméra va de l’un à l’autre.

- **Faites glisser** le cadre sur la scène pour choisir ce que voit le joueur.
- {ui.camera.addShot} (le signe plus) ajoute un plan, jusqu’à 6.
- {ui.camera.removeShot} supprime le plan sélectionné.
- {ui.camera.play} joue les plans dans la fenêtre. {ui.camera.stop} y met fin.

## Mouvements tout faits

Les boutons du haut écrivent les plans pour vous. Ils remplacent les plans que vous aviez, et gardent les réglages de tout le moment. Les mouvements qui se rapprochent visent le premier personnage en scène, ou le milieu de l’écran s’il n’y a personne.

| Mouvement | Ce qu’il fait |
|---|---|
| {ui.camera.preset.fixed} | Tout l’écran, sans mouvement. |
| {ui.camera.preset.slowZoom} | Depuis tout l’écran, se rapproche lentement. |
| {ui.camera.preset.travelling} | Glisse à travers la scène à vitesse régulière. |
| {ui.camera.preset.reveal} | Commence de près, puis recule jusqu’à tout l’écran. |
| {ui.camera.preset.focus} | Se rapproche un peu pendant que le décor devient flou. |
| {ui.camera.preset.tension} | Depuis tout l’écran vers un gros plan penché, avec un peu de flou. |

## Cadrer sur un personnage

{ui.camera.frameOn} montre les personnages en scène. Cliquez sur l’un d’eux pour placer le cadre sur son visage. Le cadre reste où il est : il ne suit pas le personnage si celui-ci bouge plus tard.

## Réglages d’un plan

| Réglage | Ce qu’il fait |
|---|---|
| {ui.camera.zoom} | De 100 % (tout l’écran) à 400 %. |
| {ui.camera.arrive} | La façon dont la caméra atteint ce plan : {ui.camera.smooth}, {ui.camera.steady}, {ui.camera.quick} ou {ui.camera.cut}. Pour le premier plan, ce réglage est {ui.camera.arriveFirst}. |
| {ui.camera.seconds} | Le temps que met la caméra pour y arriver, de 0,2 à 8 secondes. |
| {ui.camera.hold} | Affiché à la place pour un plan atteint d’un coup : le temps qu’il reste avant le suivant. |
| {ui.camera.blur} | Rend flou le décor, pas les personnages. |
| {ui.camera.tilt} | Penche le plan, jusqu’à 12 degrés de chaque côté. |

Sur le premier moment d’une scène, le premier plan n’a rien d’où venir. Il affiche {ui.camera.start}.

## Réglages de tout le moment

Sous {ui.camera.wholeMoment} :

- {ui.camera.bars}
- {ui.camera.vignette}
- {ui.camera.grain}
- {ui.camera.fadeIn}
- {ui.camera.handheld}
- {ui.camera.depth}. Elle est à 100 % au départ, et vous pouvez la baisser jusqu’à 0.

{ui.camera.foreground} place une image devant les personnages, comme des branches ou une vitre. Elle couvre tout l’écran : utilisez donc une image avec des zones transparentes. Avec la profondeur, elle bouge plus que les personnages. Les clics passent à travers.

{ui.camera.reset} retire la caméra de ce moment : tous ses plans et les réglages de tout le moment. Le premier plan reste.

## Combien de temps elle dure

La caméra et le premier plan restent d’un moment au suivant, comme le décor, jusqu’à ce qu’un moment les change. {ui.stage.scopeLabel} se trouve en bas de la fenêtre : voir [Le plateau](/novelworks-docs/fr/concepts/stage/).

## Dans le jeu

- Les plans se suivent pendant que le texte s’écrit.
- Le premier clic termine le mouvement et montre toute la ligne. Le clic suivant passe à la suite.
- Les moments suivants gardent le dernier plan et ne rejouent pas les plans.
- Entre deux moments d’une scène, la caméra glisse vers sa nouvelle place. Une nouvelle scène commence directement sur son premier plan.
- Une sauvegarde chargée commence sur le dernier plan.
- La boîte de dialogue et les menus ne bougent jamais.

Si le joueur a demandé à son système moins d’animations, le jeu va directement au dernier plan, sans tremblement et sans fondu.

## Limites

- Sur un moment d’exploration, {ui.camera.tilt} et {ui.camera.depth} sont ignorés, pour que les zones restent exactement sur ce qu’elles couvrent.
- Zoomer agrandit l’image : un petit décor devient flou.
- Le mode Script ne peut pas écrire la caméra. Il la conserve quand vous modifiez le texte.
- La démo permet 2 plans par moment. Voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/).
