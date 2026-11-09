---
title: Visite de l’éditeur
description: Les zones de la fenêtre de NovelWorks et le rôle de chaque commande.
---

L’éditeur a une **barre du haut** et, en mode {ui.topBar.story}, trois autres zones : le **panneau de gauche**, le centre et le bas, plus l’**inspecteur** à droite.

![L’éditeur NovelWorks : la liste des scènes à gauche, l’écran du jeu au milieu, la chronologie et le graphique de qui est en scène en bas, et l’inspecteur à droite.](/novelworks-docs/screenshots/editor-overview.png)

## La barre du haut

De gauche à droite :

- Sous Windows, {ui.appMenuButton.menu} vient en premier et ouvre le menu de l’application (Fichier, Édition, Affichage, Aide).
- **La flèche de retour** ramène à l’[écran des projets](/novelworks-docs/fr/getting-started/projects-screen/). Si vous avez des changements non enregistrés, elle demande d’abord s’il faut les enregistrer.
- **Le titre du projet** (ou « {tx.topBar.untitledProject} »). Cliquez dessus pour afficher les réglages du projet dans l’inspecteur (voir [Réglages de l’éditeur et du projet](/novelworks-docs/fr/getting-started/editor-settings/)).
- **L’indicateur d’enregistrement** : {ui.topBar.unsavedChanges}, {ui.topBar.savedAuto} ou {ui.topBar.saved}.
- **Trois modes** :
  - {ui.topBar.story} : les scènes, les moments et les personnages. C’est ici que vous écrivez.
  - {ui.topBar.storyMap} : toutes les scènes de votre jeu et la façon dont les choix, les conditions et les sauts les relient.
  - {ui.topBar.gameUI} : l’apparence de votre jeu (écran-titre, boîte de dialogue, menus).
- Les flèches {ui.topBar.undo} et {ui.topBar.redo}.
- {ui.topBar.save}.
- {ui.topBar.playFromHere} joue à partir du moment sélectionné. Dans l’espace de travail Carte, il devient {ui.topBar.testMap}.
- {ui.topBar.play} joue depuis l’écran-titre.

Quand la fenêtre est étroite, les noms des modes et l’étiquette « {tx.leftPanel.playFromHere} » se réduisent à des icônes.

## Le panneau de gauche

Les onglets :

- {ui.leftPanel.scenes} : vos scènes. Glissez pour les réordonner ; l’étoile marque la scène de départ.
- {ui.leftPanel.assets} : vos images, vidéos et sons, avec un bouton {ui.assetsTab.import} et des filtres par type.
- {ui.leftPanel.characters} : vos personnages et le nombre d’expressions de chacun.
- {ui.leftPanel.variables} : ce dont votre jeu se souvient.
- {ui.leftPanel.items} : seulement quand la fonctionnalité Inventaire est activée.

En bas : {ui.leftPanel.map} (seulement quand la fonctionnalité Carte est activée), {ui.leftPanel.features} (ouvre la liste des parties facultatives de votre jeu) et une astuce qui change toutes les 30 secondes. Pendant une recherche ({ui.native.menu.edit} → {ui.native.menu.findAndReplace}), le panneau de recherche remplace les onglets.

Vous pouvez glisser le bord entre les panneaux pour les redimensionner ; double-cliquez sur le bord pour revenir à la largeur par défaut. Vos largeurs sont mémorisées sur cet ordinateur.

## Le centre : l’écran du jeu

Le jeu tel que les joueurs le verront, mis à l’échelle pour tenir. Au-dessus, vous ne trouvez que ces commandes :

- le bouton de décor, qui choisit le décor du moment ;
- {ui.stageControls.character}, qui met un personnage en scène ;
- sur un moment {ui.moments.exploration}, l’outil pour dessiner des zones (voir [Exploration](/novelworks-docs/fr/features/exploration/)) ;
- {ui.topBar.visual} et {ui.topBar.script} : afficher la scène comme l’écran du jeu avec une chronologie, ou comme un texte que vous tapez comme un scénario.

Cliquez sur un personnage de l’écran du jeu : une petite barre au-dessus de lui change son expression et sa tenue. Tout le reste concernant le personnage se trouve dans l’inspecteur. Voir [Mettre en scène une scène](/novelworks-docs/fr/writing/staging/).

Sur une fenêtre peu haute (moins de 780 pixels environ), le graphique sous la chronologie montre moins de rangées, pour laisser de la place à l’écran du jeu.

## Le bas : la chronologie

Les moments de la scène en cours, sous forme de cartes que vous pouvez réordonner. Dans l’en-tête de la chronologie, {ui.moments.dialogue} ajoute une ligne de dialogue après le moment sélectionné, et {ui.timeline.addOther} liste les autres sortes de moments, chacune avec une phrase qui l’explique. Deux icônes dupliquent ou suppriment le moment sélectionné. Ces deux actions se trouvent aussi dans le menu du clic droit d’une carte. Sous les cartes, un graphique montre qui est en scène, des rangées montrent jusqu’où va chaque son (quand la scène a des sons) et une rangée montre où l’histoire bifurque. Voir [Scènes, moments et chronologie](/novelworks-docs/fr/concepts/scenes-moments-timeline/).

## La droite : l’inspecteur

Les propriétés de ce que vous avez sélectionné : un moment, une scène, une image, un personnage, une variable, un objet, un personnage en scène. Son titre change selon la sélection. Quand rien n’est sélectionné, il affiche les {ui.inspector.projectSettings}.

Un moment a quatre onglets :

- {ui.inspectorTabs.text} : qui parle et ce qui est dit (ou le choix, la condition…), où mène le moment, ce qui y mène, et votre note.
- {ui.inspectorTabs.image} : jusqu’où va un changement, le décor, l’ambiance et qui est en scène.
- {ui.inspectorTabs.effects} : la caméra et les effets.
- {ui.sound.tab} : musique, ambiance sonore, bruitages et voix.

Voir [Le panneau du moment](/novelworks-docs/fr/writing/moment-panel/). Quand vous cliquez sur un personnage de l’écran du jeu, l’inspecteur affiche {ui.inspector.characterOnStage} : sa position, sa taille, son sens, son ordre et sa tenue.

## Les menus

Sur Mac, le menu de l’app contient À propos, Services, Masquer et Quitter ; sur Windows, Quitter est dans le menu Fichier.

- {ui.native.menu.file} : {tx.native.menu.newProject}, {tx.native.menu.openProject}, {tx.native.menu.save}, {tx.native.menu.restoreFromBackup}, {tx.native.menu.importScript}, {tx.native.menu.exportScript}, {ui.native.menu.exportForWeb}, {tx.native.menu.closeProject}.
- {ui.native.menu.edit} : {tx.native.menu.undo}, {tx.native.menu.redo}, {tx.native.menu.findAndReplace}, Couper, Copier, Coller, Tout sélectionner, Langue de correction orthographique.
- {ui.menu.view} : {tx.native.menu.theme}, Langue, Activer/désactiver le plein écran.
- {ui.native.role.window}.
- {ui.native.role.help} : Documentation, {tx.native.menu.replayTutorial}, {tx.native.menu.keyboardShortcuts}, {tx.native.menu.activateNovelWorks} (version complète seulement), {tx.native.menu.reportABug}, et À propos sous Windows.

Une liste complète des raccourcis se trouve dans [Raccourcis clavier](/novelworks-docs/fr/reference/keyboard-shortcuts/).
