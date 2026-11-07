---
title: Dépannage et messages
description: "Ce que signifient les messages de NovelWorks et que faire, pour l’ouverture des projets, l’activation, l’export et l’enregistrement."
---

## Ouvrir un projet

| Message | Ce que cela signifie et que faire |
|---|---|
| "… is not a Novelworks project: it has no project.json file." | Le dossier que vous avez choisi n’a pas de `project.json`. Choisissez le dossier du projet lui-même. |
| "project.json is damaged: it is not valid JSON." | Le fichier a été modifié ou tronqué. Ouvrez une sauvegarde : copiez un fichier de `backups` par-dessus `project.json` (gardez l’abîmé de côté). |
| "This project was saved by a newer version of Novelworks (format N). Please update Novelworks to open it." | Installez la dernière version de NovelWorks. Rien n’a été modifié. |
| "Novelworks could not save a safety copy of this project before upgrading it, so it was not opened. Your project has not been changed." | Il est impossible d’écrire dans le dossier. Vérifiez ses droits d’accès et l’espace libre, puis rouvrez-le. |
| "Folder not found" (écran des projets) | Le dossier du projet a été déplacé ou supprimé. Cliquez sur **{ui.projectHub.locate}** et indiquez son nouvel emplacement. |

## Activation

| Message | Que faire |
|---|---|
| Paste your download key first. | Collez la clé dans le champ. |
| NovelWorks couldn't reach the activation server. | Vérifiez votre connexion internet et réessayez. L’activation et la désactivation en ont besoin. |
| This isn't a NovelWorks download key. | Copiez-la à nouveau depuis votre page de téléchargement ou votre e-mail d’achat. |
| This key is already activated on 3 computers. | Désactivez NovelWorks sur un autre ordinateur, ou utilisez **{ui.activateDialog.contactUs}** dans la fenêtre. |
| Activation isn't working right now. Try again in a few minutes. | Un problème temporaire du côté du serveur. |
| Deactivation isn't working right now. Try again in a few minutes. | La même chose, lors de la désactivation. |

## Exporter

Voir le tableau dans [Export web](/novelworks-docs/fr/publish/web-export/). Les cas les plus courants : choisissez un autre dossier (Documents ou Bureau), libérez de l’espace disque, ou activez NovelWorks.

## Enregistrer dans vos jeux

Les messages que voient les joueurs quand le navigateur bloque le stockage se trouvent dans [Enregistrer et charger](/novelworks-docs/fr/player/save-and-load/).

## Quand quelque chose semble anormal dans l’histoire

- Une scène marquée **{ui.scenesTab.unreachable}**, un triangle sur une carte, ou un encadré « Ce moment demande votre attention » : voir [Problèmes : tous les avertissements](/novelworks-docs/fr/testing/problems/).
- Un personnage manque à l’écran : les personnages restent en scène jusqu’à ce que quelque chose les change, et partent quand un moment le demande. Voir [La scène de jeu](/novelworks-docs/fr/concepts/stage/).
- Une option de choix n’apparaît pas : elle a peut-être une condition. Voir [Choix](/novelworks-docs/fr/branching/choices/).
- L’histoire saute un Si… : une condition vérifie quelque chose qui a été supprimé. Voir [Conditions Si…](/novelworks-docs/fr/branching/conditions/).

## Toujours bloqué ?

[Signaler un bogue](/novelworks-docs/fr/reference/report-a-bug/).
