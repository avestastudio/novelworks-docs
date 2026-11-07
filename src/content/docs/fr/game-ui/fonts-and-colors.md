---
title: Polices et couleurs
description: La police, la couleur du texte, la couleur principale et le style des boutons que tous les écrans utilisent.
---

**{ui.gameUI.fontsColors}** regroupe ce que tous les écrans partagent. Chaque autre écran peut en modifier une partie.

## Texte

- **{ui.gameUIInspector.font}** : quatre polices, chacune affichée dans son propre style.

| Nom | Style | Police | Licence |
|---|---|---|---|
| {ui.gameUIInspector.fontClean} (par défaut) | Sans empattement moderne | Inter | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontClassic} | Avec empattements, pour un air littéraire | Lora | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontRounded} | Douce, chaleureuse | Nunito | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontTypewriter} | Machine à écrire | Courier Prime | SIL Open Font License 1.1 |

  Les fichiers de police et le texte de leur licence sont inclus dans chaque jeu exporté.

- **{ui.gameUIInspector.textColor}** : la couleur du texte de tout le jeu. Par défaut, c’est le blanc. Les écrans qui indiquent « {tx.gameUIInspector.sameAsTheTextColor} » la suivent.

### Langues et polices

**{ui.gameUIInspector.fontClean}**, **{ui.gameUIInspector.fontClassic}** et **{ui.gameUIInspector.fontRounded}** couvrent les lettres latines avec accents, le cyrillique et le vietnamien. Seule **{ui.gameUIInspector.fontClean}** couvre aussi le grec. **{ui.gameUIInspector.fontTypewriter}** couvre uniquement les lettres latines (avec accents). Pour les caractères qu’une police n’a pas, comme le chinois et le japonais, le jeu utilise les polices du système du joueur (et, quand la langue du jeu est le japonais, d’abord les polices japonaises du système).

Vous ne pouvez pas encore importer votre propre police.

Les joueurs qui activent la police adaptée à la dyslexie dans les options du joueur obtiennent une police dédiée, quel que soit votre choix ici.

## Couleurs et boutons

- **{ui.gameUIInspector.primaryColor}** : « Boutons, éléments mis en valeur et flèche « continuer ». » Elle donne aussi son halo à l’écran-titre. Par défaut, c’est un rose.
- **{ui.gameUIInspector.buttonStyle}** : **{ui.gameUIInspector.pill}** (entièrement arrondi, par défaut), **{ui.gameUIInspector.rounded}** (coins doux), **{ui.gameUIInspector.square}** (coins nets) ou **{ui.gameUIInspector.text}** (pas de boîte, seulement les mots). Il est « utilisé par tous les menus et les choix, sauf si un écran définit le sien ».

Il n’y a pas de couleur de fond globale : les fonds se règlent écran par écran.

## L’aperçu

L’aperçu de cette page montre la boîte de dialogue sur votre premier décor. Utilisez **{ui.gameUIMode.longTextAvatar}** pour vérifier les longues répliques.

## Réinitialiser

**{ui.gameUIInspector.resetToDefault}** sur cette page réinitialise seulement les polices et les couleurs. Les autres écrans gardent leurs réglages.
