---
title: Son et musique
description: Importez des sons, réglez la musique, l’ambiance sonore, les bruitages et les voix de vos moments, et voyez-les sur la chronologie.
---

## Importer vos sons

NovelWorks lit les fichiers MP3, OGG et WAV. Vous pouvez les importer :

- avec {ui.assetsTab.import} dans l’onglet {ui.leftPanel.assets} ;
- en déposant les fichiers sur la fenêtre de l’éditeur ;
- avec {ui.sound.import}, là où vous choisissez un son dans l’onglet {ui.sound.tab}.

Chaque son a un type : {ui.assetTypes.music}, {ui.assetTypes.sound} ou {ui.assetTypes.voice}. Le filtre {ui.assetsTab.sounds} de l’onglet {ui.leftPanel.assets} les montre tous.

## L’onglet Son

Sélectionnez un moment et ouvrez l’onglet {ui.sound.tab} du [panneau du moment](/novelworks-docs/fr/writing/moment-panel/).

![L’onglet Son d’un moment, avec la musique, l’ambiance sonore, les bruitages et la voix de la réplique.](/novelworks-docs/screenshots/moment-sound-tab.png)

### Musique et ambiance sonore

{ui.sound.music} et {ui.sound.ambience} se jouent en boucle, l’une par-dessus l’autre. Chacune a trois choix :

| Choix | Ce qu’il fait |
|---|---|
| {ui.sound.continue} | Rien ne change. L’onglet vous dit ce qui est en train de jouer. |
| {ui.sound.chooseMusic} / {ui.sound.chooseAmbience} | Lance un son ici, avec un {ui.sound.volume} et un {ui.sound.fade}. |
| {ui.sound.stop} | Arrête le son ici, avec un {ui.sound.fade}. |

Le {ui.sound.fade} va de 0 à 10 secondes. C’est le temps que met l’ancien son à laisser la place au nouveau.

{ui.sound.chooseMusic} liste vos musiques. {ui.sound.chooseAmbience} liste vos bruitages et vos musiques.

### Bruitages

Les {ui.sound.effects} s’entendent une fois, quand le moment arrive, et se jouent jusqu’à leur fin. Un moment peut en avoir jusqu’à 6. Ils sont disponibles sur les moments que le joueur voit : dialogues, choix, explorations et fins.

### Voix

{ui.sound.voice} est disponible sur les moments de dialogue. La voix s’arrête quand le joueur passe à la réplique suivante.

À côté d’un son que vous avez choisi, {ui.sound.listen} vous permet de l’entendre depuis l’onglet.

## Combien de temps ils durent

La musique et l’ambiance sonore continuent de jouer d’un moment au suivant, et d’une scène à la suivante, jusqu’à ce qu’un moment les change.

Les réglages de son ne dépendent pas de {ui.stage.scopeLabel}.

## Sur la chronologie

Des bandes de couleur sous la chronologie montrent jusqu’où va chaque musique et chaque ambiance sonore. Une bande avec des trous signifie que le son vient d’une scène précédente.

![La chronologie avec des bandes de son sous les moments.](/novelworks-docs/screenshots/sound-timeline.png)

Une rangée supplémentaire marque les moments qui ont des bruitages ou une voix. Cliquez sur une bande ou une marque pour ouvrir l’onglet {ui.sound.tab} de ce moment.

Pour déterminer ce qui vient d’une scène précédente, l’éditeur suit l’ordre de votre liste de scènes. Le vrai parcours d’un joueur peut être différent. Dans le jeu, ce qui joue est ce que le joueur a vraiment entendu.

## Musique de l’écran-titre

Allez dans {ui.topBar.gameUI}, {ui.gameUI.titleScreen}, {ui.sound.music}, et cliquez sur {ui.sound.chooseMusic}. Elle se joue en boucle sur l’écran-titre. L’ambiance sonore s’y arrête.

## Dans le jeu

- Quand le joueur passe des moments ou charge une sauvegarde, les bruitages et les voix ne sont pas joués. La musique et l’ambiance sonore continuent.
- En mode Auto, le jeu attend la fin de la voix.
- Dans les [Options](/novelworks-docs/fr/game-ui/options/), les joueurs ont trois volumes : {rt.optionsScreen.musicVolume}, {rt.optionsScreen.soundVolume} et {rt.optionsScreen.voiceVolume}. Ils n’apparaissent que si votre jeu contient des sons. L’ambiance sonore suit {rt.optionsScreen.soundVolume}.

## Dans un jeu web

Les navigateurs refusent de lancer un son avant le premier clic ou la première touche du joueur. Le son refusé commence à ce moment-là.

## Limites

La démo permet 5 fichiers son. Voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/).
