---
title: Réglages de l'éditeur et du projet
description: Thème, langue et correction orthographique de l'éditeur, et réglages de chaque projet.
---

Il y a deux sortes de réglages : ceux de l'**éditeur** (les mêmes pour tous vos projets) et ceux d'un **projet**.

## Réglages de l'éditeur

Ils se trouvent tous dans les menus **{ui.menu.view}** et **{ui.native.menu.edit}**.

### Thème

**{ui.menu.view} → {ui.native.menu.theme}** : **{ui.native.menu.dark}** (par défaut), **{ui.native.menu.light}** ou **{ui.native.menu.system}** (suit votre ordinateur).

### Langue de l'éditeur

**{ui.menu.view} → {ui.native.menu.language}** : **{ui.native.menu.languageAuto}** ou l'une des sept langues, chacune écrite sous son propre nom. Les menus et l'éditeur changent aussitôt dans toutes les fenêtres ouvertes. Ce réglage ne concerne que l'éditeur. Il ne change ni votre histoire ni la langue de votre jeu.

### Langue de correction (enregistrée dans le projet)

Celui-ci fait exception : il n'est pas partagé par tous vos projets, car le choix est enregistré **dans le projet** (et vous pouvez l'annuler).

**{ui.native.menu.edit} → {ui.native.spelling.spellingLanguage}**. Sur Windows, la valeur par défaut est les langues de votre ordinateur plus l'anglais, et vous pouvez choisir une autre langue. Sur Mac, macOS détecte tout seul la langue de votre texte, donc le menu se contente de l'indiquer. 

### Plein écran

**{ui.menu.view} → {ui.native.role.togglefullscreen}**.

## Réglages du projet

Cliquez sur le titre du projet dans la barre du haut, ou ne sélectionnez rien, et l'inspecteur affiche les **{ui.inspector.projectSettings}** :

| Réglage | Ce qu'il fait |
|---|---|
| {ui.projectSettings.gameTitle} | Le titre de votre jeu. |
| {ui.projectSettings.author} | Votre nom, en tant qu'auteur. |
| {ui.project.gameLanguage} | La langue des boutons et des menus du jeu. Le texte de votre histoire reste tel que vous l'avez écrit. Si une langue n'est pas disponible pour le jeu, le jeu utilise l'anglais pour elle. |
| {ui.projectSettings.length} | La durée de lecture de l'histoire : chaque ligne, choix et fin lus une fois (mots et minutes). Elle est seulement affichée, pas modifiable. Une partie d'une histoire ramifiée est plus courte. |
| {ui.projectSettings.features} | Les parties facultatives qui sont activées. **{ui.projectSettings.openFeatures}** ouvre la liste pour les activer ou les désactiver. |
| {ui.projectSettings.screenSize} | La taille de l'écran du jeu, 1280 × 720 pixels. Elle est seulement affichée. |
| {ui.projectSettings.savedIn} | Le dossier du projet. |

Chaque changement fait ici peut être annulé avec **{ui.native.menu.undo}**.
