---
title: Ambiance et décors animés
description: Teintez toute une scène en un clic, et utilisez des GIF ou des vidéos en boucle comme décors.
---

## Ambiance

Une ambiance est une teinte sur toute l’image, pour donner l’humeur ou l’heure de la journée. Sélectionnez un moment et ouvrez l’onglet {ui.inspectorTabs.image} du [panneau du moment](/novelworks-docs/fr/writing/moment-panel/).

La section {ui.ambience.title} a une vignette par style, chacune montrant votre propre décor :

- {ui.ambience.none}
- {ui.ambience.night}
- {ui.ambience.sunset}
- {ui.ambience.sepia}
- {ui.ambience.blackAndWhite}
- {ui.ambience.memory}

Une fois un style choisi, deux réglages apparaissent :

- {ui.ambience.intensity}, de 0 à 100 %. Elle commence à 100 %.
- {ui.ambience.characters}, coché au départ. Décochez-le pour ne teinter que le décor.

### Combien de temps elle dure

Une ambiance reste d’un moment au suivant, comme le décor, jusqu’à ce qu’un moment la change. {ui.stage.scopeLabel} fonctionne comme d’habitude : vous pouvez donc utiliser {ui.stage.scopeOnlyHere} pour un seul moment. Voir [Le plateau](/novelworks-docs/fr/concepts/stage/).

Le mode Script ne peut pas écrire une ambiance. Il conserve l’ambiance de vos moments quand vous modifiez le texte, et un nouveau moment continue celle d’avant.

## Décors animés

### GIF et WebP animés

Ils s’importent comme n’importe quelle autre image.

### Vidéos MP4 et WebM

Une vidéo peut être le décor d’un moment. Elle tourne en boucle, sans son. Vous pouvez en importer une :

- depuis le sélecteur de décor d’un moment ;
- avec {ui.assetsTab.import} dans l’onglet {ui.leftPanel.assets} ;
- en déposant le fichier sur la fenêtre de l’éditeur.

Une vidéo est de type {ui.assetTypes.background} ou {ui.assetTypes.cG}. Dans les listes, un petit signe de lecture la signale, et elle se lit quand votre souris passe dessus.

Dans l’éditeur, la vidéo reste sur sa première image. Dans {ui.topBar.play} et dans votre jeu exporté, elle se lit en boucle et s’arrête pendant que le menu pause est ouvert.

### Taille

Une vidéo n’est jamais refusée à cause de sa taille. Au-delà de 40 Mo en une seule importation, un message vous rappelle qu’un jeu web avec de la vidéo met plus de temps à charger. Les vidéos ne sont pas recompressées dans le .zip exporté.

## Limites

- Une vidéo ne peut être que le décor d’un moment. Les personnages, les objets et les écrans propres au jeu ont besoin d’une image.
- Une image de plus de 50 Mo, GIF compris, est refusée.
