---
title: Effets
description: Ajoutez à un moment des entrées, des sorties, des réactions, des effets d’écran, des particules et des transitions.
---

Les effets se produisent quand un moment arrive. Sélectionnez un moment, ouvrez l’onglet {ui.inspectorTabs.effects} du [panneau du moment](/novelworks-docs/fr/writing/moment-panel/) et cliquez sur {ui.effects.open}.

![La fenêtre des effets : les six catégories en haut, l’écran du jeu, les vignettes d’effets et la liste des effets de ce moment.](/novelworks-docs/screenshots/effects-library.png)

## Les six catégories

Chaque catégorie a cinq effets.

| Catégorie | Effets |
|---|---|
| {ui.effects.category.enter} | {ui.effects.name.fade}, {ui.effects.name.slideLeft}, {ui.effects.name.slideRight}, {ui.effects.name.rise}, {ui.effects.name.zoomIn} |
| {ui.effects.category.exit} | {ui.effects.name.fade}, {ui.effects.name.slideLeft}, {ui.effects.name.slideRight}, {ui.effects.name.fall}, {ui.effects.name.zoomOut} |
| {ui.effects.category.reaction} | {ui.effects.name.jump}, {ui.effects.name.shake}, {ui.effects.name.nod}, {ui.effects.name.recoil}, {ui.effects.name.surprise} |
| {ui.effects.category.screen} | {ui.effects.name.flash}, {ui.effects.name.lightning}, {ui.effects.name.quake}, {ui.effects.name.blackout}, {ui.effects.name.pulse} |
| {ui.effects.category.particles} | {ui.effects.particle.rain}, {ui.effects.particle.snow}, {ui.effects.particle.petals}, {ui.effects.particle.leaves}, {ui.effects.particle.fireflies} |
| {ui.effects.category.transition} | {ui.effects.name.fade}, {ui.effects.name.black}, {ui.effects.name.wipe}, {ui.effects.name.iris}, {ui.effects.name.curtain} |

## Ajouter un effet

1. Choisissez une catégorie.
2. Cliquez sur un effet. Il se joue sur l’écran de la fenêtre : vous pouvez en essayer autant que vous voulez.
3. Pour {ui.effects.category.enter}, {ui.effects.category.exit} et {ui.effects.category.reaction}, choisissez le personnage.
4. Ajustez les réglages.
5. Cliquez sur {ui.effects.add}.

| Réglage | Où | Plage |
|---|---|---|
| {ui.camera.seconds} | Tous sauf les particules | 0,2 à 3 secondes |
| {ui.effects.intensity} | Réactions, effets d’écran et particules | 10 à 100 % |
| {ui.effects.speed} | Particules | 20 à 200 % |

Les effets ajoutés sont listés sous {ui.effects.ofThisMoment}. La croix sur chacun le retire. Un moment peut avoir jusqu’à 12 effets, sans compter les particules.

{ui.effects.playAll} joue toute la liste dans la fenêtre.

## Dans quel ordre

Les effets se jouent une fois, quand le moment arrive, l’un après l’autre dans l’ordre de la liste.

Une transition vient toujours en premier, où qu’elle soit dans la liste. Si vous ajoutez plusieurs transitions à un moment, seule la première est jouée.

## Sorties

Si vous choisissez une sortie pour un personnage en scène, le personnage quitte aussi le plateau à ce moment. Une sortie n’est jouée que pour un personnage qui part vraiment ici.

## Particules

Les particules sont différentes des autres effets. Elles restent d’un moment au suivant, comme une ambiance, jusqu’à ce que vous les arrêtiez. {ui.stage.scopeLabel} fonctionne comme d’habitude : voir [Le plateau](/novelworks-docs/fr/concepts/stage/).

Un moment montre une seule sorte de particules à la fois. Pour les arrêter, cliquez sur la croix des particules dans la liste ({ui.effects.stopParticles}).

## Entrée et sortie par défaut

Vous pouvez donner à tous les personnages la même façon d’arriver et de partir, pour tout le jeu. Allez dans {ui.topBar.gameUI}, {ui.gameUI.fontsColors}, {ui.effects.defaultsTitle}, et choisissez une {ui.effects.defaultEnter} et une {ui.effects.defaultExit}.

Elles servent chaque fois qu’un moment n’a pas d’effet propre pour ce personnage. {ui.effects.defaultNone} est le réglage d’un nouveau jeu.

## Dans le jeu

- Le premier clic termine les effets tout de suite. Le clic suivant passe à la suite. Les particules continuent de tomber.
- Quand le joueur passe des moments ou charge une sauvegarde, les effets ne sont pas joués.
- Si le joueur a demandé à son système moins d’animations, les effets ne sont pas joués et les particules restent immobiles.

Le mode Script ne peut pas écrire les effets. Il les conserve quand vous modifiez le texte.

La démo contient une partie des effets. Vous pouvez essayer les autres dans la fenêtre, mais pas les ajouter. Voir [La démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/).
