---
title: Écran de sauvegarde et de chargement
description: "Les écrans de sauvegarde et de chargement : emplacements, sauvegarde rapide, sauvegarde automatique et apparence."
---

Les écrans **{ui.gameUI.saveLoad}** sont accessibles depuis l’écran-titre et le menu pause.

## Ce que vous pouvez changer

Sous **{ui.gameUIInspector.screen}** :

- **{ui.gameUIInspector.backgroundColor}** : la couleur de l’écran-titre par défaut ;
- **{ui.gameUIInspector.textColor}** : « Comme la couleur du texte » par défaut ;
- **{ui.gameUIInspector.buttonStyle}** : le style du bouton Retour. (Les questions de confirmation, comme « Écraser » et « Supprimer », prennent le style de bouton du [menu pause](/novelworks-docs/fr/game-ui/pause-menu/).)

Sous **{ui.gameUIInspector.slots}** :

- **{ui.gameUIInspector.slotColor}** : la couleur de chaque tuile d’emplacement (« Comme la boîte de dialogue » par défaut).

## Ce que les joueurs obtiennent

- **12 emplacements de sauvegarde**, affichés dans une grille de trois colonnes, une **sauvegarde rapide** et une **sauvegarde automatique** au début de chaque nouvelle scène.
- Chaque emplacement montre une petite image du moment (arrière-plan, accessoires et personnages, sans le dialogue), le nom de la scène, la date et le temps de jeu. Un emplacement vide indique « Vide ».
- L’écran **{rt.game.load}** liste d’abord la sauvegarde automatique et la sauvegarde rapide, puis les emplacements 1 à 12. L’écran **{rt.game.save}** liste les emplacements 1 à 12.
- Enregistrer sur un emplacement demande confirmation (« Écraser ») ; supprimer un emplacement (le × sur un emplacement rempli) le demande aussi ; charger une sauvegarde pendant une partie demande « Charger cette sauvegarde ? La progression non enregistrée sera perdue. »
- Clavier : les flèches se déplacent entre les emplacements, **Entrée** ou **Espace** choisit, `Delete` ou `Backspace` supprime, **Home** et **End** vont au premier et au dernier emplacement de la liste, **Esc** revient en arrière.

## Où les joueurs le trouvent

- **{ui.gameUI.titleScreen}** : **{rt.game.continue}** (la sauvegarde la plus récente, seulement s’il y en a une) et **{rt.game.load}**.
- **{ui.gameUI.pauseMenu}** : **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (**F5**) et **{rt.game.quickLoad}** (**F9**). Le chargement rapide n’apparaît qu’une fois qu’une sauvegarde rapide existe.
- **{ui.quickMenu.title}** : les quatre mêmes boutons, si vous les affichez.

Si le navigateur n’autorise pas la sauvegarde (navigation privée, ou données de sites désactivées), les écrans l’indiquent, et rien ne peut être enregistré. Voir [Sauvegarder et charger](/novelworks-docs/fr/player/save-and-load/).
