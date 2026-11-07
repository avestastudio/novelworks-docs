---
title: Sauvegarder et charger
description: Comment les joueurs sauvegardent et chargent, où sont conservées les sauvegardes, et ce qui se passe quand vous mettez votre jeu à jour.
---

Cette page décrit ce que vivent les **joueurs**. Pour l’apparence des écrans, voir [Écran de sauvegarde et de chargement](/novelworks-docs/fr/game-ui/save-load-screen/).

## Où sont conservées les sauvegardes

Les sauvegardes sont conservées **dans le navigateur du joueur** (son stockage local), pour votre jeu seulement. Chaque projet reçoit à sa création un identifiant de jeu qui ne change jamais. Il fait partie du nom de chaque sauvegarde, donc :

- deux jeux différents ne partagent jamais leurs sauvegardes, même sur le même site web ;
- si vous exportez de nouveau le même jeu, ou si vous le mettez à jour, **les joueurs gardent leurs sauvegardes**, tant que le jeu reste à la **même adresse web** ;
- les sauvegardes appartiennent à un seul navigateur, à une seule adresse web, sur un seul ordinateur : elles ne suivent pas le joueur dans un autre navigateur ou sur un autre appareil, ni à une nouvelle adresse (un nouvel hébergeur ou un nouveau domaine).

Les sauvegardes faites pendant vos tests dans l’éditeur sont séparées (voir [Outils du mode Jouer](/novelworks-docs/fr/testing/test-saves-and-read-lines/)).

## Emplacements

- **12 emplacements manuels**, une **sauvegarde rapide** et une **sauvegarde automatique**.
- L’écran **{rt.game.save}** montre les emplacements 1 à 12. L’écran **{rt.game.load}** montre d’abord la sauvegarde automatique et la sauvegarde rapide, puis les emplacements 1 à 12.
- Chaque emplacement montre une image du moment, le nom de la scène, la date et le temps de jeu (« 12:34 » ou « 1:02:03 »).
- Enregistrer sur un emplacement déjà utilisé demande « Écraser … ? ». Supprimer un emplacement demande « Supprimer … ? Cette action est irréversible. »

## Sauvegarde rapide et chargement rapide

- **F5** fait une sauvegarde rapide pendant la partie (« Sauvegarde rapide effectuée ») : elle ne recharge pas la page.
- **F9** fait un chargement rapide, même depuis l’écran-titre. S’il n’y a pas de sauvegarde rapide, le jeu dit « Aucune sauvegarde rapide pour l’instant. Appuyez sur F5 pour en faire une. » Charger pendant la partie demande « Charger cette sauvegarde ? La progression non sauvegardée sera perdue. »
- Les mêmes actions sont des boutons du menu pause et, si vous les affichez, du menu rapide.

## Sauvegarde automatique

Le jeu sauvegarde automatiquement chaque fois que le joueur **entre dans une autre scène**, quand une nouvelle partie commence, et quand une partie est chargée depuis l’écran-titre ou vers une autre scène. Il ne sauvegarde pas automatiquement à l’intérieur d’une scène. Une sauvegarde automatique qui échoue ne dit rien.

## Continuer

Sur l’écran-titre, **{rt.game.continue}** charge la sauvegarde la plus récente de tout type (manuelle, rapide ou automatique). Il ne s’affiche pas quand il n’y a aucune sauvegarde.

## Ce que contient une sauvegarde

La scène et le moment, les valeurs des variables, l’inventaire, les zones déjà utilisées, l’état de la carte, le temps de jeu, et les 200 dernières répliques de l’[Historique](/novelworks-docs/fr/player/history/). Elle ne contient **pas** les répliques lues (elles sont conservées à part pour le mode Passer), ni le texte en train de s’écrire : une réplique chargée apparaît en entier.

## Quand vous mettez votre jeu à jour

Les sauvegardes désignent les scènes et les moments par leur identité : elles continuent donc de fonctionner quand vous modifiez du texte, ajoutez des scènes ou réorganisez des éléments.

- Une variable qui n’existe plus, ou dont le type a changé (de Score à Fait), perd sa valeur sauvegardée. Les nouvelles variables commencent à leur valeur de départ.
- Un objet qui n’existe plus est retiré.
- Si le **moment** sauvegardé a été supprimé, le jeu reprend au début de sa scène. Si la **scène** a été supprimée, il reprend à la scène de départ.
- Une sauvegarde abîmée, ou venant d’une version plus récente de NovelWorks, apparaît comme un emplacement vide.

## Quand le navigateur n’autorise pas la sauvegarde

En navigation privée, ou quand les données de sites sont désactivées, le navigateur peut bloquer le stockage. L’écran de sauvegarde indique alors « La sauvegarde n’est pas disponible dans ce navigateur (navigation privée, ou données de sites désactivées). », et l’écran de chargement dit qu’il n’y a rien à charger. Une sauvegarde rapide explique que « Vous pouvez continuer à jouer, mais votre progression ne sera pas conservée. » Si le stockage est plein : « La sauvegarde n’a pas pu être écrite : le stockage du navigateur est plein. Supprimez une ancienne sauvegarde et réessayez. »

Les options des joueurs et les répliques lues ne durent alors que le temps de la session.
