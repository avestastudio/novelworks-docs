---
title: Avertissement de contenu
description: Prévenez les joueurs des sujets sensibles avant qu’ils commencent.
---

L’**{ui.gameUI.contentWarning}** s’affiche avant l’écran-titre, après vos images d’intro. Les joueurs le lisent et cliquent sur **{rt.game.continue}**.

## L’activer

Activez **{ui.contentWarning.enabled}**. Il est désactivé par défaut.

## Ce qu’il dit

- **{ui.contentWarning.topics}** : cochez les sujets de votre choix parmi onze : Violence, Sang, Mort, Suicide, Automutilation, Maltraitance, Horreur, Contenu sexuel, Drogues, Langage grossier, Lumières clignotantes. L’écran du joueur liste ceux qui sont cochés sous « {tx.contentWarning.contains} », toujours dans cet ordre.
- **{ui.contentWarning.message}** : du texte libre affiché sous la liste, par exemple un mot bienveillant ou une indication pour trouver de l’aide. Facultatif.

## Quand il apparaît

Sous **{ui.contentWarning.when}** :

- **{ui.contentWarning.firstLaunch}** (par défaut) : chaque joueur le voit la première fois qu’il lance le jeu. Il est mémorisé dans son navigateur.
- **{ui.contentWarning.everyLaunch}** : il s’affiche à chaque lancement du jeu.

En mode Jouer dans l’éditeur, il s’affiche chaque fois que vous appuyez sur Jouer.

## Son apparence

Sous **{ui.gameUIInspector.screen}** : **{ui.gameUIInspector.backgroundColor}** (celle de l’écran-titre par défaut), **{ui.gameUIInspector.textColor}** et **{ui.gameUIInspector.buttonStyle}**.

## Ce que font les joueurs

Le seul moyen de le passer est le bouton **{rt.game.continue}**, qui a le focus à l’ouverture de l’écran. Cliquer ailleurs ne le passe pas. Au clavier, **Tab** reste sur le bouton, et **Entrée** ou **Espace** l’actionne.
