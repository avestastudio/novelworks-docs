---
title: Installer et activer
description: "Téléchargez NovelWorks, ouvrez-le pour la première fois et débloquez l'export avec votre clé de téléchargement."
---

## Quel fichier télécharger ?

| Ordinateur | Fichier |
|---|---|
| Mac avec puce Apple Silicon (M1, M2, M3, M4…) | `Novelworks-<version>-mac-arm64.dmg` |
| Mac avec processeur Intel | `Novelworks-<version>-mac-x64.dmg` |
| Windows 10 / 11 | `Novelworks-<version>-win-x64.exe` |

La démo gratuite a les mêmes trois fichiers, avec `-demo` après le numéro de version (par exemple `Novelworks-<version>-demo-win-x64.exe`). Voir [la démo gratuite](/novelworks-docs/fr/getting-started/demo-edition/).

Vous ne savez pas quel Mac vous avez ? Ouvrez le menu Pomme → **À propos de ce Mac**. « Puce : Apple M… » signifie Apple Silicon.

## La première ouverture

### Sur Mac

L'application Mac n'est **pas encore signée avec un identifiant Apple Developer** (elle n'a qu'une signature ad hoc). macOS peut donc refuser de l'ouvrir la première fois et afficher un avertissement. Les étapes exactes dépendent de votre version de macOS.

1. Ouvrez le fichier `.dmg` et faites glisser **Novelworks** dans **Applications**.
2. Ouvrez l'application depuis Applications.
3. Si macOS la bloque, cherchez dans **Réglages Système → Confidentialité et sécurité** un message à propos de Novelworks, avec un bouton pour l'ouvrir quand même. Sur les anciennes versions de macOS, la méthode habituelle est de faire un clic droit sur l'application et de choisir « Ouvrir » (commande de macOS).

### Sur Windows

Lancez le fichier `.exe`. L'installateur vous laisse choisir le dossier d'installation, installe pour votre utilisateur seulement et ajoute un raccourci sur le bureau. Si Windows affiche un avertissement de sécurité au lancement, il propose normalement un moyen de lancer le programme quand même. Le texte dépend de votre version de Windows.

## Choisir la langue de l'éditeur

La toute première fois, NovelWorks affiche **{ui.languageDialog.title}**. Choisissez une langue et cliquez sur **{ui.languageDialog.continue}**. Si vous fermez la fenêtre à la place, NovelWorks suit la langue de votre ordinateur. Vous pourrez la changer plus tard dans **{ui.menu.view} → {ui.native.menu.language}**. Vous verrez ensuite l'[écran des projets](/novelworks-docs/fr/getting-started/projects-screen/).

## Activer NovelWorks (version complète)

La version complète demande la **clé de téléchargement** fournie avec votre achat. Sans elle, vous pouvez quand même ouvrir, modifier et jouer vos projets. Seul l'**export** est verrouillé : la commande d'export du menu Fichier ouvre alors la fenêtre d'activation.

1. Ouvrez **Aide → {ui.native.menu.activateNovelWorks}**. La même fenêtre s'ouvre depuis l'écran des projets et depuis la fenêtre À propos.
2. Collez votre clé de téléchargement dans **{ui.activateDialog.downloadKey}**. Vous pouvez aussi coller l'adresse complète de votre page de téléchargement.
3. Cliquez sur **{ui.activateDialog.activate}**.

Où trouver la clé : ouvrez l'e-mail de votre achat dans votre navigateur, puis ouvrez la page de téléchargement de NovelWorks, et copiez la clé de téléchargement ou l'adresse de la page.

![Fenêtre Activer NovelWorks avec un champ de clé de téléchargement vide](/novelworks-docs/screenshots/activate-novelworks.png)

Bon à savoir :

- L'activation contacte le serveur d'activation : il faut donc une connexion internet. Une fois activé, NovelWorks vérifie votre licence sur votre ordinateur à chaque démarrage, donc vous pouvez exporter sans internet.
- La fenêtre d'activation indique qu'**une clé fonctionne sur 3 ordinateurs au maximum**, et que vous pouvez désactiver un ordinateur pour utiliser votre clé sur un autre. Pour cela, ouvrez la même fenêtre et cliquez sur **{ui.activateDialog.deactivateThisDevice}**. Cela contacte aussi le serveur : il faut donc une connexion internet.
- Si la fenêtre vous dit que la clé est déjà activée sur le nombre maximal d'ordinateurs, désactivez NovelWorks sur un autre ordinateur, ou utilisez **{ui.activateDialog.contactUs}** dans la fenêtre.

Si l'activation échoue, la fenêtre affiche un message qui explique quoi faire. Voir aussi la [FAQ](/novelworks-docs/fr/reference/faq/).
