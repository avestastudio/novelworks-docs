---
title: Aperçu de l’interface du jeu
description: Changez l’apparence de votre jeu, écran par écran, avec un aperçu en direct.
---

Le mode **{ui.topBar.gameUI}** change l’apparence de votre jeu : sa police et ses couleurs, l’écran-titre, la boîte de dialogue, les boutons de choix, les menus et les petits messages. Passez-y depuis la barre du haut, ou avec **Cmd+5** / **Ctrl+5**.

![Le mode Interface du jeu : la liste des écrans, l’aperçu en direct et les réglages de la boîte de dialogue.](/novelworks-docs/screenshots/game-ui-dialogue.png)

## Les trois parties de la fenêtre

- **À gauche : la liste des écrans.** Cliquez sur un écran pour travailler dessus.
- **Au centre : l’aperçu.** C’est le vrai jeu, dessiné avec vos réglages, sur un petit exemple (votre premier arrière-plan et votre premier personnage, ou un personnage d’exemple). Il n’est pas interactif : appuyez sur **{ui.topBar.play}** pour essayer le jeu avec ces réglages. Une ligne sous l’aperçu le rappelle.
- **À droite : les réglages de l’écran.** Chaque écran se termine par un bouton **{ui.gameUIInspector.resetToDefault}**.

## Les écrans

| Écran | Ce que c’est | Page |
|---|---|---|
| {ui.gameUI.fontsColors} | La police et les couleurs que tous les écrans utilisent. | [Polices et couleurs](/novelworks-docs/fr/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | Le logo de votre studio ou d’autres images, avant l’écran-titre. | [Intro](/novelworks-docs/fr/game-ui/intro/) |
| {ui.gameUI.contentWarning} | Prévient les joueurs des sujets sensibles avant l’écran-titre. | [Avertissement de contenu](/novelworks-docs/fr/game-ui/content-warning/) |
| {ui.gameUI.titleScreen} | Le premier écran de votre jeu. | [Écran-titre](/novelworks-docs/fr/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | L’endroit où apparaissent les noms et les répliques. | [Boîte de dialogue](/novelworks-docs/fr/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | Les boutons d’un choix. | [Choix](/novelworks-docs/fr/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | S’ouvre par un clic droit ou avec Esc. | [Menu pause](/novelworks-docs/fr/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | Les écrans de sauvegarde et de chargement. | [Écran de sauvegarde et de chargement](/novelworks-docs/fr/game-ui/save-load-screen/) |
| {ui.gameUI.history} | La liste des répliques déjà lues. | [Écran d’historique](/novelworks-docs/fr/game-ui/history-screen/) |
| {ui.gameUI.options} | L’endroit où les joueurs choisissent la taille du texte, la vitesse, la police et le contraste. | [Options du joueur](/novelworks-docs/fr/game-ui/options/) |
| {ui.quickMenu.title} | Les commandes de lecture au-dessus de l’histoire. | [Menu rapide](/novelworks-docs/fr/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | Affiché quand l’histoire est terminée. | [Écran de fin](/novelworks-docs/fr/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | Son bouton et le panneau des objets (fonctionnalité Inventaire). | [Écran d’inventaire](/novelworks-docs/fr/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | Le bouton qui ouvre la carte (fonctionnalité Carte). | [Bouton de carte](/novelworks-docs/fr/game-ui/map-button/) |
| {ui.gameUI.notices} | De courts messages comme « Vous avez obtenu : Clé ». | [Notifications](/novelworks-docs/fr/game-ui/notifications/) |

## Texte long et avatar

Pour les écrans Polices et couleurs, Boîte de dialogue, Choix et Menu pause, le bouton **{ui.gameUIMode.longTextAvatar}** au-dessus de l’aperçu montre une longue réplique et un personnage avec un avatar, pour que vous vérifiiez que tout tient.

## Des réglages qui fonctionnent partout de la même façon

- **Couleurs.** Une pastille ouvre un sélecteur de couleur, et une case accepte un code (`#rgb` ou `#rrggbb`). Quand une couleur est « Comme … » (par exemple « Comme la couleur du texte »), rien n’est enregistré : elle suit l’autre couleur. Dès que vous choisissez une couleur, une petite flèche circulaire à côté d’elle permet de revenir à « Comme … ».
- **Style de bouton.** Une liste déroulante avec **{ui.gameUIInspector.sameAsFontsColors}**, **{ui.gameUIInspector.pill}**, **{ui.gameUIInspector.rounded}**, **{ui.gameUIInspector.square}** et **{ui.gameUIInspector.text}** (pas de boîte, juste les mots). « Comme Polices et couleurs » suit le style global.
- **Curseurs.** Ils affichent leur valeur avec son unité, le plus souvent %. Les pourcentages sont relatifs à l’écran : votre création tient donc à toutes les tailles.
- **Images.** Un champ d’image affiche une miniature avec **{ui.gameUIInspector.choose_c7f937}** ou **{ui.gameUIInspector.change}**, et une croix pour la retirer. Vous pouvez en général choisir n’importe laquelle de vos images, ou en importer une nouvelle sur place. (L’arrière-plan de l’écran-titre propose seulement des arrière-plans, des CG et des images d’interface.) Si une image est supprimée, le jeu revient à la couleur unie ou au texte.
- **{ui.gameUIInspector.resetToDefault}.** Le bouton en bas d’un écran vous demande de confirmer, puis remet **cet écran seulement** comme dans un nouveau jeu. Les autres écrans ne changent pas.

## Annuler

Chaque changement dans l’interface du jeu peut être annulé. Taper du texte, faire glisser un curseur ou choisir une couleur dans un champ compte pour une seule étape.

## Ce qui est enregistré

L’apparence est enregistrée dans votre projet, avec le reste. Les choix propres aux joueurs (taille du texte, police adaptée à la dyslexie, contraste élevé) s’appliquent par-dessus votre création, pour eux seulement. Voir [Options et accessibilité](/novelworks-docs/fr/player/options-and-accessibility/).
