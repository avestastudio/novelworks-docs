---
title: Jouer, Jouer à partir d’ici, Tester la carte
description: Essayez votre jeu dans l’éditeur, depuis le début ou depuis n’importe quel moment, sans enregistrer ni exporter.
---

Vous pouvez jouer à votre jeu à tout moment, dans l’éditeur. Il joue **ce qui se trouve dans l’éditeur à cet instant**, enregistré ou non, avec le même moteur qu’un jeu exporté. Pendant que vous jouez, la modification est bloquée.

## Façons de démarrer

| Comment | Où ça démarre |
|---|---|
| **{ui.topBar.play}** (barre du haut, **Cmd+P** / **Ctrl+P**) | L’écran-titre. |
| **{ui.topBar.playFromHere}** (barre du haut, **Cmd+Maj+P** / **Ctrl+Maj+P**) | Le moment sélectionné, sans l’écran-titre. Désactivé tant qu’aucun moment n’est sélectionné. |
| **{ui.contextMenus.playFromHere}** dans le menu du clic droit d’un moment ou d’une scène | Ce moment, ou le premier moment de cette scène. |
| **{ui.scriptMode.playFromCursor}** dans le [mode Script](/novelworks-docs/fr/writing/script-mode/) (**Cmd+Entrée** / **Ctrl+Entrée**) | La ligne sous le curseur. |
| **{ui.topBar.testMap}** dans l’espace de travail Carte (et dans les réglages de la carte) | La carte. Dans l’espace de travail Carte, le bouton **{ui.topBar.playFromHere}** et **Cmd+Maj+P** / **Ctrl+Maj+P** deviennent « Tester la carte ». Voir [Carte](/novelworks-docs/fr/features/map/). |

Chaque partie démarre avec les valeurs de départ de vos variables et de vos objets : rien n’est conservé d’un test précédent.

Si votre jeu n’a pas de scène de départ, ou si la scène de départ n’a aucun moment, le jeu ne démarre pas et vous dit quoi faire : définissez une scène de départ avec l’étoile dans l’onglet Scènes.

## Pendant que vous jouez

Une barre en haut indique où vous en êtes (« La classe · Moment 2 sur 5 », avec « Choix », « {tx.moments.ending} » ou « {tx.game.paused} » ajouté quand c’est le cas, ou « {tx.playOverlay.titleScreen} » ou « Fin »). Elle contient aussi les outils décrits dans [Outils du mode Jouer](/novelworks-docs/fr/testing/test-saves-and-read-lines/).

Vous jouez comme un joueur : cliquez ou appuyez sur **Espace** / **Entrée** pour avancer, sur **1** à **6** pour choisir une option, sur **A** pour Auto, **S** pour Passer, **H** pour l’Historique, **F5** et **F9** pour la sauvegarde et le chargement rapides. Le **clic droit** ouvre le menu pause du jeu. Voir [Touches et écrans tactiles](/novelworks-docs/fr/player/keys-and-touch/).

## Arrêter

- Cliquez sur **{ui.playOverlay.stop}**, ou appuyez sur **Échap**. Si le menu pause, Sauvegarder, Charger, l’Historique, les Options, l’intro ou l’avertissement de contenu est ouvert, **Échap** ferme d’abord celui-ci. **Échap** ne ferme pas l’inventaire en mode Jouer : appuyez sur **I** pour cela.
- Quand vous arrêtez, l’éditeur sélectionne la scène et le moment où vous en étiez.

## Ce que cela ne teste pas

Le mode Jouer n’est pas le jeu exporté : l’écran « Made with NovelWorks » est masqué sauf si vous l’activez, et vos tests utilisent leurs propres sauvegardes, séparées de celles d’un jeu exporté. Pour essayer le vrai jeu dans un navigateur, utilisez [Export web](/novelworks-docs/fr/publish/web-export/) et **{ui.exportDialog.testInBrowser}**.
