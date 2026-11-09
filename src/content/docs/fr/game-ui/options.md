---
title: Options du joueur
description: L’écran où les joueurs choisissent la taille du texte, la vitesse, la police et le contraste, et ce que vous contrôlez.
---

L’écran **{ui.gameUI.options}** est l’endroit où les joueurs adaptent le jeu à eux-mêmes. Vous en contrôlez l’**apparence**. Les options elles-mêmes sont les mêmes dans tous les jeux, et vous ne pouvez en masquer aucune. Les trois volumes n’apparaissent que si votre jeu a des sons.

## Ce que vous pouvez changer

Sous **{ui.gameUIInspector.screen}** :

- **{ui.gameUIInspector.backgroundColor}** : par défaut, la couleur de l’écran-titre, légèrement transparente ;
- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut ;
- **{ui.gameUIInspector.buttonStyle}** : le style des boutons.

## Ce que les joueurs peuvent choisir

| Option | Choix |
|---|---|
| Taille du texte | Normale, Grande, Très grande |
| Vitesse du texte | Lente, Normale, Rapide, Très rapide, Instantanée |
| Vitesse du mode Auto | Lente, Normale, Rapide |
| Police adaptée à la dyslexie | Activé, Désactivé |
| Contraste élevé | Activé, Désactivé |
| {rt.optionsScreen.musicVolume}, {rt.optionsScreen.soundVolume}, {rt.optionsScreen.voiceVolume} (seulement si le jeu a des sons) | 0 à 100, par pas de 5 |

Une ligne d’exemple montre le texte tel qu’il apparaîtra, et **{rt.optionsScreen.defaults}** remet tout aux réglages par défaut. Les changements s’appliquent tout de suite. Ils s’appliquent **par-dessus** votre interface du jeu, pour ce joueur seulement, et sont gardés pour votre jeu dans son navigateur.

Si un joueur n’a pas choisi de vitesse du texte et que son système demande de réduire les animations, le texte apparaît instantanément.

Pour en savoir plus sur chaque option, et sur la façon dont les joueurs accèdent à cet écran, voir [Options et accessibilité](/novelworks-docs/fr/player/options-and-accessibility/).

## Où les joueurs la trouvent

Le bouton **{rt.game.options}** de l’écran-titre, le menu pause, et le menu rapide si vous affichez son bouton Options. Échap la ferme.
