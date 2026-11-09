---
title: Sauvegarder et charger
description: Comment les joueurs sauvegardent et chargent, où les sauvegardes sont conservées, et ce qui se passe quand vous mettez votre jeu à jour.
---

Cette page décrit ce que vivent les **joueurs**. Pour l’apparence des écrans, voir [Écran de sauvegarde et de chargement](/novelworks-docs/fr/game-ui/save-load-screen/).

## Où les sauvegardes sont conservées

Les sauvegardes sont conservées **dans le navigateur du joueur** (son stockage local), pour votre jeu seulement. Chaque projet a un identifiant de jeu créé avec lui et qui ne change jamais. Il fait partie du nom de chaque sauvegarde, donc :

- deux jeux différents ne partagent jamais leurs sauvegardes, même sur le même site web ;
- si vous exportez de nouveau le même jeu, ou si vous le mettez à jour, **les joueurs gardent leurs sauvegardes**, tant que le jeu reste à la **même adresse web** ;
- les sauvegardes appartiennent à un navigateur, à une adresse web, sur un ordinateur : elles ne suivent pas le joueur vers un autre navigateur ou appareil, ni vers une nouvelle adresse (un nouvel hôte ou domaine).

Les sauvegardes faites pendant vos tests dans l’éditeur sont séparées (voir [Outils du mode Jouer](/novelworks-docs/fr/testing/test-saves-and-read-lines/)).

## Emplacements

- **12 emplacements manuels**, une **sauvegarde rapide** et une **sauvegarde auto**.
- L’écran **{rt.game.save}** montre les emplacements 1 à 12. L’écran **{rt.game.load}** montre d’abord la Sauvegarde auto et la Sauvegarde rapide, puis les emplacements 1 à 12.
- Chaque emplacement montre une image du moment, le nom de la scène, la date et le temps de jeu (« 12:34 » ou « 1:02:03 »).
- Sauvegarder sur un emplacement utilisé demande « Écraser … ? ». Supprimer un emplacement demande « Supprimer … ? Cette action est irréversible. »

## Sauvegarde rapide et chargement rapide

- **F5** fait une sauvegarde rapide pendant le jeu (« {tx.game.quickSaved} ») : cela ne recharge pas la page.
- **F9** fait un chargement rapide, même depuis l’écran-titre. S’il n’y a pas de sauvegarde rapide, le jeu dit « {tx.game.noQuickSaveYetPressF5To} » Charger pendant une partie demande « {tx.game.loadThisSaveUnsavedProgressWillBe} »
- Les mêmes actions existent sous forme de boutons du menu pause et, si vous les affichez, du menu rapide.

## Sauvegarde auto

Le jeu fait une sauvegarde auto chaque fois que le joueur **entre dans une autre scène**, quand une nouvelle partie commence, et quand une partie est chargée depuis l’écran-titre ou dans une autre scène. Il n’en fait pas à l’intérieur d’une scène. Une sauvegarde auto qui échoue reste silencieuse.

## Continuer

Sur l’écran-titre, **{rt.game.continue}** charge la sauvegarde la plus récente, de n’importe quel type (manuelle, rapide ou auto). Il n’apparaît pas quand il n’y a aucune sauvegarde.

## Ce que contient une sauvegarde

La scène et le moment, les valeurs des variables, l’inventaire, les zones déjà utilisées, l’état de la carte, le temps de jeu, la musique et l’ambiance sonore en cours, et les 200 dernières répliques de l’[Historique](/novelworks-docs/fr/player/history/). Elle ne contient **pas** les répliques lues (elles sont conservées à part pour Passer), les [chapitres](/novelworks-docs/fr/game-ui/chapters/) atteints (conservés à part eux aussi), ni le texte en train de s’écrire : une réplique chargée apparaît en entier. Un moment chargé commence sur son dernier plan de caméra, et ses effets, sa voix et ses bruitages ne sont pas joués.

## Quand vous mettez votre jeu à jour

Les sauvegardes désignent les scènes et les moments par leur identité, donc elles continuent de fonctionner quand vous modifiez du texte, ajoutez des scènes ou réordonnez des éléments.

- Une variable qui n’existe plus, ou dont le type a changé (Score en Fait), perd sa valeur sauvegardée. Les nouvelles variables démarrent à leur valeur de départ.
- Un objet qui n’existe plus est abandonné.
- Si le **moment** sauvegardé a été supprimé, le jeu reprend au début de sa scène. Si la **scène** a été supprimée, il reprend à la scène de départ.
- Une sauvegarde endommagée, ou issue d’une version plus récente de NovelWorks, apparaît comme un emplacement vide.

## Quand le navigateur n’autorise pas la sauvegarde

En navigation privée, ou avec les données de sites désactivées, le navigateur peut bloquer le stockage. L’écran de sauvegarde affiche alors « {tx.savesScreen.savingIsNotAvailableInThisBrowser} », et l’écran de chargement dit qu’il n’y a rien à charger. Une sauvegarde rapide explique que « Vous pouvez continuer à jouer, mais votre progression ne sera pas conservée. » Si le stockage est plein : « La sauvegarde n’a pas pu être écrite : le stockage du navigateur est plein. Supprimez une ancienne sauvegarde et réessayez. »

Les options du joueur et les répliques lues ne durent alors que le temps de la session.
