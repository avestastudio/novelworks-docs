---
title: Rechercher et remplacer
description: Cherchez dans tout votre jeu, allez à chaque résultat et remplacez du texte partout.
---

Ouvrez la recherche avec **Édition → {ui.native.menu.findAndReplace}** ou **Cmd+F** / **Ctrl+F**. Le panneau de recherche remplace les onglets du panneau de gauche, et le curseur est dans la première zone. Fermez-le avec la croix, ou appuyez sur **Esc** dans l’une de ses zones. Il cherche dans tout le projet, jamais dans une seule scène.

![Le panneau de recherche, avec les résultats regroupés par scène.](/novelworks-docs/screenshots/search-panel.png)

## Ce qui est recherché

- les dialogues, les questions et options des choix, les noms et textes des fins ;
- les noms des zones d’exploration, les textes d’examen et les textes de verrouillage ;
- les notes des moments ;
- les noms et résumés des scènes ;
- les noms des personnages ;
- les noms et descriptions des objets.

Ne sont pas recherchés : qui prononce une réplique, les noms des variables, les noms des images et les noms des expressions.

## Rechercher

Tapez dans **{ui.searchPanel.find}**. Une ligne en dessous indique « 3 sur 12 » ou « Aucun résultat ». Dessous, les résultats sont regroupés par scène (puis les personnages, puis les objets). Chaque ligne indique où se trouve la correspondance (« Moment 4 · Dialogue », « Nom du personnage »…) et un court extrait où la correspondance est surlignée. 500 résultats au maximum sont listés : tapez plus de mots pour affiner la recherche.

Deux options affinent la recherche :

- **{ui.searchPanel.matchCase}** : « Aa » n’est pas « aa ». Désactivée par défaut.
- **{ui.searchPanel.wholeWordsOnly}** : « Mia » mais pas « Miami ». Désactivée par défaut.

Le texte que vous tapez est cherché exactement comme écrit. Il n’y a pas de motifs.

Cliquez sur un résultat pour y aller : le moment, la scène, le personnage, l’objet ou la zone est sélectionné. **Enter** va au résultat suivant et **Shift+Enter** au précédent, et la recherche reboucle.

## Remplacer

Tapez le nouveau texte dans **{ui.searchPanel.replaceWith}**.

- **{ui.searchPanel.replace}** remplace le résultat sélectionné, puis va au suivant.
- L’icône sur la ligne d’un résultat (**{ui.searchPanel.replaceThisOne}**) remplace seulement celui-là, et ne passe pas au suivant.
- **{ui.searchPanel.replaceAll}** remplace toutes les correspondances de votre jeu. NovelWorks vous demande d’abord de confirmer, en vous disant combien il y a de correspondances, et que vous pouvez annuler. Un remplacement vide supprime le texte.

Un remplacement est ignoré si le texte a changé depuis que la correspondance a été trouvée. Le remplacement dans tout le jeu se fait en une seule action, et un seul **{ui.native.menu.undo}** annule tout. Un message vous indique combien de correspondances ont été remplacées (« 31 correspondances remplacées. »).
