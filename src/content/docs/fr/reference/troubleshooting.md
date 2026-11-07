---
title: Dépannage et messages
description: Ce que signifient les messages de NovelWorks et ce qu’il faut faire, pour l’ouverture des projets, l’activation, l’export et l’enregistrement.
---

## Ouvrir un projet

| Message | Ce que cela signifie et ce qu’il faut faire |
|---|---|
| « … n’est pas un projet Novelworks : il ne contient pas de fichier project.json. » | Le dossier choisi n’a pas de `project.json`. Choisissez le dossier du projet lui-même. |
| « project.json est endommagé : son contenu est illisible. » | Le fichier a été modifié ou coupé. Ouvrez une sauvegarde : copiez un fichier de `backups` par-dessus `project.json` (gardez l’endommagé de côté). |
| « Ce projet a été enregistré par une version plus récente de Novelworks (format N). Mettez Novelworks à jour pour l’ouvrir. » | Installez la dernière version de NovelWorks. Rien n’a été modifié. |
| « Novelworks n’a pas pu faire de copie de sécurité de ce projet avant de le mettre à jour, il n’a donc pas été ouvert. Votre projet n’a pas été modifié. » | Le dossier n’est pas accessible en écriture. Vérifiez ses autorisations et l’espace libre, puis ouvrez-le de nouveau. |
| « {tx.projectHub.folderNotFound} » (écran des projets) | Le dossier du projet a été déplacé ou supprimé. Cliquez sur **{ui.projectHub.locate}** et indiquez son nouvel emplacement. |

## Activation

| Message | Que faire |
|---|---|
| Collez d’abord votre clé de téléchargement. | Collez la clé dans le champ. |
| NovelWorks n’a pas pu joindre le serveur d’activation. | Vérifiez votre connexion internet et réessayez. L’activation et la désactivation en ont besoin. |
| Ce n’est pas une clé de téléchargement NovelWorks. | Copiez-la à nouveau depuis votre page de téléchargement ou votre e-mail d’achat. |
| Cette clé est déjà activée sur 3 ordinateurs. | Désactivez NovelWorks sur un autre ordinateur, ou utilisez **{ui.activateDialog.contactUs}** dans la fenêtre. |
| L’activation ne fonctionne pas pour le moment. Réessayez dans quelques minutes. | Un problème temporaire du côté du serveur. |
| La désactivation ne fonctionne pas pour le moment. Réessayez dans quelques minutes. | La même chose, lors de la désactivation. |

## Exporter

Voir le tableau de [Export web](/novelworks-docs/fr/publish/web-export/). Les cas les plus courants : choisissez un autre dossier (Documents ou Bureau), libérez de l’espace disque, ou activez NovelWorks.

## Sauvegardes dans vos jeux

Les messages que voient les joueurs quand le navigateur bloque le stockage sont dans [Sauvegarder et charger](/novelworks-docs/fr/player/save-and-load/).

## Quand quelque chose semble anormal dans l’histoire

- Une scène marquée **{ui.scenesTab.unreachable}**, un triangle sur une carte, ou un encadré « {tx.branchInspectors.thisMomentNeedsYourAttention} » : voir [Problèmes : tous les avertissements](/novelworks-docs/fr/testing/problems/).
- Un personnage manque à l’écran : les personnages restent sur le plateau jusqu’à ce que quelque chose les change, et partent quand un moment le demande. Voir [Le plateau](/novelworks-docs/fr/concepts/stage/).
- Une option de choix n’apparaît pas : elle a peut-être une condition. Voir [Choix](/novelworks-docs/fr/branching/choices/).
- L’histoire saute un Si… : une condition vérifie quelque chose qui a été supprimé. Voir [Conditions Si…](/novelworks-docs/fr/branching/conditions/).

## Toujours bloqué ?

[Signaler un bug](/novelworks-docs/fr/reference/report-a-bug/).
