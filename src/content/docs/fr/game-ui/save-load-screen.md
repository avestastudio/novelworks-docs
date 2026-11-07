---
title: Écran de sauvegarde et de chargement
description: "Les écrans Sauvegarder et Charger : emplacements, sauvegarde rapide, sauvegarde auto et apparence."
---

Les écrans **{ui.gameUI.saveLoad}** sont accessibles depuis l’écran-titre et le menu pause.

## Ce que vous pouvez changer

Sous **{ui.gameUIInspector.screen}** :

- **{ui.gameUIInspector.backgroundColor}** : par défaut, la couleur de l’écran-titre ;
- **{ui.gameUIInspector.textColor}** : « {tx.gameUIInspector.sameAsTheTextColor} » par défaut ;
- **{ui.gameUIInspector.buttonStyle}** : le style du bouton Retour. (Les questions de confirmation, comme « {tx.savesScreen.overwrite} » et « {tx.savesScreen.delete} », prennent le style de bouton du [menu pause](/novelworks-docs/fr/game-ui/pause-menu/).)

Sous **{ui.gameUIInspector.slots}** :

- **{ui.gameUIInspector.slotColor}** : la couleur de la tuile de chaque emplacement (« {tx.gameUIInspector.sameAsTheDialogueBox} » par défaut).

## Ce que les joueurs obtiennent

- **12 emplacements de sauvegarde**, affichés dans une grille de trois colonnes, une **sauvegarde rapide** et une **sauvegarde auto** au début de chaque nouvelle scène.
- Chaque emplacement montre une petite image du moment (décor, accessoires et personnages, sans le dialogue), le nom de la scène, la date et le temps de jeu. Un emplacement vide affiche « Vide ».
- L’écran **{rt.game.load}** liste d’abord la Sauvegarde auto et la Sauvegarde rapide, puis les emplacements 1 à 12. L’écran **{rt.game.save}** liste les emplacements 1 à 12.
- Sauvegarder sur un emplacement demande confirmation (« {tx.savesScreen.overwrite} ») ; supprimer un emplacement (le × sur un emplacement rempli) en demande aussi ; charger une sauvegarde pendant une partie demande « {tx.game.loadThisSaveUnsavedProgressWillBe} »
- Au clavier : les flèches se déplacent entre les emplacements, **Entrée** ou **Espace** choisit, `Delete` ou `Backspace` supprime, **Début** et **Fin** sautent au premier et au dernier emplacement de la liste, **Échap** revient en arrière.

## Où les joueurs la trouvent

- **{ui.gameUI.titleScreen}** : **{rt.game.continue}** (la dernière sauvegarde, seulement s’il y en a une) et **{rt.game.load}**.
- **{ui.gameUI.pauseMenu}** : **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (**F5**) et **{rt.game.quickLoad}** (**F9**). Le chargement rapide n’apparaît qu’une fois qu’une sauvegarde rapide existe.
- **{ui.quickMenu.title}** : les quatre mêmes boutons, si vous les affichez.

Si le navigateur n’autorise pas la sauvegarde (navigation privée, ou données de sites désactivées), les écrans l’indiquent, et rien ne peut être sauvegardé. Voir [Sauvegarder et charger](/novelworks-docs/fr/player/save-and-load/).
