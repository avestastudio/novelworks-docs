---
title: Aperçu de l’interface du jeu
description: Changez l’apparence de votre jeu, écran par écran, avec un aperçu en direct.
---

Le mode **{ui.topBar.gameUI}** change l’apparence de votre jeu : sa police et ses couleurs, l’écran-titre, la boîte de dialogue, les boutons de choix, les menus et les petits messages. Passez-y depuis la barre du haut, ou avec **Cmd+5** / **Ctrl+5**.

![Le mode Interface du jeu : la liste des écrans, l’aperçu en direct et les réglages de la boîte de dialogue.](/novelworks-docs/screenshots/game-ui-dialogue.png)

## Les trois parties de la fenêtre

- **À gauche : la liste des écrans.** Cliquez sur un écran pour travailler dessus.
- **Au centre : l’aperçu.** C’est le vrai jeu, dessiné avec vos réglages, sur un petit exemple (votre premier décor et votre premier personnage, ou un personnage d’exemple). Il n’est pas interactif : appuyez sur **{ui.topBar.play}** pour essayer le jeu avec ces réglages. Une ligne sous l’aperçu le rappelle.
- **À droite : les réglages de l’écran.** Chaque écran se termine par un bouton **{ui.gameUIInspector.resetToDefault}**.

## Les écrans

| Écran | Ce que c’est | Page |
|---|---|---|
| {ui.gameUI.fontsColors} | La police et les couleurs que tous les écrans utilisent, et la façon dont les personnages arrivent et partent. | [Polices et couleurs](/novelworks-docs/fr/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | Le logo de votre studio ou d’autres images, avant l’écran-titre. | [Intro](/novelworks-docs/fr/game-ui/intro/) |
| {ui.gameUI.contentWarning} | Prévient les joueurs des sujets sensibles avant l’écran-titre. | [Avertissement de contenu](/novelworks-docs/fr/game-ui/content-warning/) |
| {ui.gameUI.credits} | Les crédits qui défilent. | [Crédits](/novelworks-docs/fr/game-ui/credits/) |
| {ui.gameUI.chapters} | L’écran où les joueurs choisissent un chapitre. | [Chapitres](/novelworks-docs/fr/game-ui/chapters/) |
| {ui.gameUI.titleScreen} | Le premier écran de votre jeu, et sa musique. | [Écran-titre](/novelworks-docs/fr/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | L’endroit où apparaissent les noms et les répliques. | [Boîte de dialogue](/novelworks-docs/fr/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | Les boutons d’un choix. | [Choix](/novelworks-docs/fr/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | Ouvert par un clic droit ou Échap. | [Menu pause](/novelworks-docs/fr/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | Les écrans de sauvegarde et de chargement. | [Écran de sauvegarde et de chargement](/novelworks-docs/fr/game-ui/save-load-screen/) |
| {ui.gameUI.history} | La liste des répliques déjà lues. | [Écran d’historique](/novelworks-docs/fr/game-ui/history-screen/) |
| {ui.gameUI.options} | L’endroit où les joueurs choisissent la taille du texte, la vitesse, la police, le contraste et les volumes. | [Options du joueur](/novelworks-docs/fr/game-ui/options/) |
| {ui.quickMenu.title} | Les commandes de lecture par-dessus l’histoire. | [Menu rapide](/novelworks-docs/fr/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | Affiché quand l’histoire est terminée. | [Écran de fin](/novelworks-docs/fr/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | Son bouton et le panneau des objets (fonctionnalité Inventaire). | [Écran de l’inventaire](/novelworks-docs/fr/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | Le bouton qui ouvre la carte (fonctionnalité Carte). | [Bouton de la carte](/novelworks-docs/fr/game-ui/map-button/) |
| {ui.gameUI.notices} | Des messages courts comme « Vous avez obtenu : Clé ». | [Notifications](/novelworks-docs/fr/game-ui/notifications/) |

## Texte long et avatar

Pour Polices et couleurs, la boîte de dialogue, les choix et le menu pause, le bouton **{ui.gameUIMode.longTextAvatar}** au-dessus de l’aperçu montre une longue réplique et un personnage avec un avatar, pour que vous puissiez vérifier que tout tient.

## Réglages identiques partout

- **Couleurs.** Une pastille ouvre un sélecteur de couleur, et une case accepte un code (`#rgb` ou `#rrggbb`). Quand une couleur est « Identique à … » (par exemple « {tx.gameUIInspector.sameAsTheTextColor} »), rien n’est enregistré : elle suit l’autre couleur. Dès que vous choisissez une couleur, une petite flèche circulaire à côté permet de revenir à « Identique à … ».
- **Style des boutons.** Une liste déroulante avec **{ui.gameUIInspector.sameAsFontsColors}**, **{ui.gameUIInspector.pill}**, **{ui.gameUIInspector.rounded}**, **{ui.gameUIInspector.square}** et **{ui.gameUIInspector.text}** (pas de boîte, juste les mots). « {tx.gameUIInspector.sameAsFontsColors} » suit le style global.
- **Les curseurs** affichent leur valeur avec son unité, le plus souvent %. Les pourcentages sont relatifs à l’écran, donc votre design tient à toutes les tailles.
- **Images.** Un champ d’image montre une vignette avec **{ui.gameUIInspector.choose_c7f937}** ou **{ui.gameUIInspector.change}**, et une croix pour la retirer. Vous pouvez en général choisir n’importe laquelle de vos images, ou en importer une nouvelle sur place. (L’arrière-plan de l’écran-titre propose seulement des décors, des CG et des images d’interface.) Si une image est supprimée, le jeu revient à la couleur unie ou au texte.
- **{ui.gameUIInspector.resetToDefault}.** Le bouton en bas d’un écran vous demande de confirmer, puis remet **cet écran seulement** comme dans un nouveau jeu. Les autres écrans ne changent pas.

## Annuler

Chaque changement dans l’interface du jeu peut être annulé. Taper du texte, faire glisser un curseur ou choisir une couleur dans un champ compte pour une seule étape.

## Ce qui est enregistré

L’apparence est enregistrée dans votre projet, avec le reste. Les choix propres aux joueurs (taille du texte, police adaptée à la dyslexie, contraste élevé) s’appliquent par-dessus votre design, pour eux seuls. Voir [Options et accessibilité](/novelworks-docs/fr/player/options-and-accessibility/).
