---
title: "Exploration en point-and-click"
description: "Permettre aux joueurs de cliquer sur une image."
---

Un moment **Exploration** affiche des zones cliquables sans boîte de dialogue, pratique pour les enquêtes et escape games.

1. Ajoutez **Exploration** dans la timeline et choisissez un décor.
2. **Glissez sur l’image** pour dessiner une zone.
3. Sélectionnez-la et configurez son action dans l’inspecteur.

## Actions d’une zone

- **Go to a scene** : aller à une scène.
- **Continue** : poursuivre l’histoire.
- **Examine** : afficher une courte réplique, avec un personnage facultatif.
- Modifier une **variable**.
- **Pick up an item** : ramasser un objet, puis faire disparaître la zone ; nécessite Inventory.
- **Use an item** : agir seulement si le joueur possède l’objet, avec consommation facultative ; nécessite Inventory.

## Options

- **Label** au survol et surbrillance : aucune, lueur ou contour.
- Zone masquée ou verrouillée selon une condition ; un verrouillage peut afficher un message.
- Activation une seule fois ou à chaque visite.
- **Props** : images d’objets placées sur le décor et liées à une zone.

Sur téléphone, le premier toucher affiche le libellé et le second déclenche l’action.
