---
title: Visite de l'éditeur
description: Les zones de la fenêtre de NovelWorks et le rôle de chaque commande.
---

L'éditeur a une **barre du haut** et, en mode {ui.topBar.story}, trois autres zones : le **panneau de gauche**, le centre et le bas, plus l'**inspecteur** à droite.

![L'éditeur NovelWorks : la liste des scènes à gauche, l'écran du jeu au milieu, la ligne de temps et le graphique de qui est en scène en bas, et l'inspecteur à droite.](/novelworks-docs/screenshots/editor-overview.png)

## La barre du haut

De gauche à droite :

- **La flèche de retour** ramène à l'[écran des projets](/novelworks-docs/fr/getting-started/projects-screen/). Si vous avez des changements non enregistrés, elle demande d'abord si vous voulez les enregistrer.
- **Le titre du projet** (ou « Projet sans titre »). Cliquez dessus pour afficher les réglages du projet dans l'inspecteur (voir [Réglages de l'éditeur et du projet](/novelworks-docs/fr/getting-started/editor-settings/)).
- **L'indicateur d'enregistrement** : {ui.topBar.unsavedChanges}, {ui.topBar.savedAuto} ou {ui.topBar.saved}.
- **Trois modes** :
  - **{ui.topBar.story}** : les scènes, les moments et les personnages. C'est ici que vous écrivez.
  - **{ui.topBar.storyMap}** : toutes les scènes de votre jeu et la façon dont les choix, les conditions et les sauts les relient.
  - **{ui.topBar.gameUI}** : l'apparence de votre jeu (écran-titre, boîte de dialogue, menus).
- Les flèches **{ui.topBar.undo}** et **{ui.topBar.redo}**.
- **{ui.topBar.save}**.
- **{ui.topBar.playFromHere}** joue à partir du moment sélectionné. Dans l'espace de travail Carte, il devient **{ui.topBar.testMap}**.
- **{ui.topBar.play}** joue depuis l'écran-titre.

Sur une fenêtre étroite, les noms des modes et le libellé « Jouer à partir d'ici » se réduisent à des icônes.

## Le panneau de gauche

Les onglets :

- **{ui.leftPanel.scenes}** : vos scènes. Faites-les glisser pour les réordonner ; l'étoile marque la scène de départ.
- **{ui.leftPanel.assets}** : vos images, avec un bouton **{ui.assetsTab.import}** et des filtres par type.
- **{ui.leftPanel.characters}** : vos personnages et le nombre d'expressions de chacun.
- **{ui.leftPanel.variables}** : ce que votre jeu retient.
- **{ui.leftPanel.items}** : seulement quand la fonctionnalité Inventaire est activée.

En bas : **{ui.leftPanel.map}** (seulement quand la fonctionnalité Carte est activée), **{ui.leftPanel.features}** (ouvre la liste des parties facultatives de votre jeu) et une astuce qui change toutes les 30 secondes. Pendant une recherche (**Édition → {ui.native.menu.findAndReplace}**), le panneau de recherche remplace les onglets.

Vous pouvez faire glisser le bord entre les panneaux pour les redimensionner ; double-cliquez sur le bord pour revenir à la largeur par défaut. Vos largeurs sont mémorisées sur cet ordinateur.

## Le centre : l'écran du jeu

Le jeu tel que les joueurs le verront, mis à l'échelle pour tenir dans la zone. Au-dessus, vous pouvez choisir le décor du moment, ajouter des personnages, et basculer entre deux choses :

- **{ui.topBar.visual}** et **{ui.topBar.script}** : afficher la scène comme l'écran du jeu avec une ligne de temps, ou comme un texte que vous tapez à la manière d'un scénario.
- **{ui.stage.scopeLabel}** : **{ui.stage.scopeFollowing}** ou **{ui.stage.scopeOnlyHere}**. Cela est expliqué dans [La mise en scène](/novelworks-docs/fr/concepts/stage/).

Au-dessus de l'écran, une rangée de petits boutons montre où mène le moment sélectionné (voir [Comment une histoire se ramifie](/novelworks-docs/fr/concepts/how-stories-branch/)).

Sur une fenêtre peu haute (moins de 780 pixels environ), les rangées au-dessus de l'écran du jeu tiennent chacune sur une seule ligne qui défile sur le côté, et le rappel des touches sous l'écran du jeu est masqué, pour laisser de la place à l'écran du jeu.

## Le bas : la ligne de temps

Les moments de la scène en cours, sous forme de cartes que vous pouvez réordonner. Des boutons ajoutent un moment de chaque sorte après celui qui est sélectionné, et deux icônes dupliquent ou suppriment le moment sélectionné. Sous les cartes, un graphique montre qui est en scène et une rangée montre où l'histoire se ramifie. Voir [Scènes, moments et ligne de temps](/novelworks-docs/fr/concepts/scenes-moments-timeline/).

## La droite : l'inspecteur

Les propriétés de ce que vous avez sélectionné : un moment, une scène, une image, un personnage, une variable, un objet, un personnage en scène. Son titre change selon la sélection. Quand rien n'est sélectionné, il affiche les **{ui.inspector.projectSettings}**.

## Les menus

Sur Mac, le menu de l'application contient À propos, Services, Masquer et Quitter ; sur Windows, Quitter se trouve dans le menu Fichier.

- **{ui.native.menu.file}** : Nouveau projet, Ouvrir un projet, Enregistrer, Restaurer depuis une sauvegarde de secours, Importer un script, Exporter le script, {ui.native.menu.exportForWeb}, Fermer le projet.
- **{ui.native.menu.edit}** : Annuler, Rétablir, Rechercher et remplacer, Couper, Copier, Coller, Tout sélectionner, Langue de correction.
- **{ui.menu.view}** : Thème, Langue, Plein écran.
- **{ui.native.role.window}**.
- **{ui.native.role.help}** : Documentation, Rejouer le tutoriel, Raccourcis clavier, Activer NovelWorks (version complète seulement), Signaler un bug, et À propos sur Windows.

Une liste complète des raccourcis se trouve dans [Raccourcis clavier](/novelworks-docs/fr/reference/keyboard-shortcuts/).
