# Vérification : d'où vient chaque affirmation

Une ligne par affirmation non triviale d'une page. Colonnes : page · affirmation · preuve · état.
**Preuve** = fichier du code (`chemin:ligne`) ou clé de texte (`{ui.clé}`), ou « vérifié dans l'appli le AAAA-MM-JJ (copie du projet X) ».
**État** : `code` (prouvé par le code seulement) · `appli` (fait et vu dans l'appli) · `à vérifier` (aucune preuve : à regarder à la main, jamais publié comme certain).

Les noms de boutons ne sont **jamais** recopiés : on écrit `{ui.clé}` ou `{rt.clé}` ; le build les remplace par le nom exact dans la langue de la page, et échoue si la clé n'existe pas (scripts/check-docs.mjs).

| Page | Affirmation | Preuve | État |
|---|---|---|---|

| welcome | 7 langues d'éditeur ; « sans royalties » | catalogues `data/ui/editor-*.json` ; `aboutDialog.makeVisualNovelsWithoutCodeYourGames` | code |
| install-and-activate | 3 fichiers d'installation ; `-demo` dans le nom des versions démo | `electron-builder.yml` (artifactName), `scripts/itch-uploads.mjs:10-12` | code |
| install-and-activate | Mac : signature ad hoc, pas de certificat Apple Developer ; Windows : installeur NSIS, dossier modifiable, par utilisateur, raccourci bureau | `electron-builder.yml` (commentaires et options) | code |
| install-and-activate | Messages « Windows protected your PC » / « Open Anyway » (étapes Mac/Windows) | repris de l'ancienne page, non revérifié | **à vérifier** |
| install-and-activate | Clé de téléchargement ; connexion internet requise à l'activation, ensuite hors ligne ; 3 ordinateurs ; désactiver demande internet | `main/license.ts:80-97`, catalogue `activateDialog.*` ; limite de 3 : texte du catalogue seulement (serveur `license-worker` non lu) | code (limite 3 : à vérifier côté serveur) |
| install-and-activate | Langue de l'éditeur demandée au premier lancement ; fermer la fenêtre = langue du système | `LanguageDialog.tsx:14-21` | code |
| demo-edition | Démo : export jusqu'à 5 scènes (scènes du panneau Scènes ; scène cachée de la Carte non comptée) | branche **demo-build** : `packages/shared/src/demoLimits.ts` (DEMO_MAX_SCENES = 5) ; message `edition.edition.theDemoExportsGamesOfUpToScenes` | code (branche non fusionnée dans docs-plan) |
| demo-edition | Export de démo marqué : texte de lancement « Made with NovelWorks Demo » et petit logo dans un coin | `demoLimits.ts` (DEMO_SPLASH_TEXT, DEMO_CORNER_TEXT) sur demo-build | code (demo-build) |
| demo-edition | Dossier de données séparé, licence du jeu complet jamais touchée ; démo itch.io et Steam | `preload/edition.ts` sur demo-build (`dataFolderName`, `demo-steam`) | code (demo-build) |
| demo-edition | Fenêtre « Export your game » avec Not now / Get the full version, message « jusqu'à N scènes » | `DemoExportDialog.tsx` (demo-build) ; clés `demoExportDialog.*` | code (demo-build) |
| projects-screen | Liste des récents : 30 max, plus récent d'abord ; miniature = dernier écran enregistré, sinon 1er décor, sinon logo | `main/recents.ts:11,38`, `ProjectHub.tsx` | code |
| projects-screen | Recherche : nom ou dossier, sans casse ; Échap efface ; flèche bas | `hub.ts:39-43`, `ProjectHub.tsx:138-144` | code |
| projects-screen | « Retirer de la liste » ne touche pas aux fichiers | seulement l'appel `removeRecent` lu (liste, pas disque) | **à vérifier dans l'appli** |
| projects-screen | Dossier introuvable : ligne grisée, Locate… | `ProjectHub.tsx:178-201` | code |
| projects-screen | Nouveau projet : nom nettoyé, emplacement par défaut (dernier ou Documents/NovelWorks), fonctionnalités décochées, création de `project.json` + `assets/` ; scène « Scene 1 » avec un moment vide | `NewProjectScreen.tsx`, `main/newProject.ts:22-49`, `projectFiles.ts:26-68`, `shared/src/project.ts:30-42` | code |
| projects-screen | Projet ancien : copie exacte avant migration, bandeau « Show the copy » ; projet plus récent refusé | `shared/migrations/index.ts:84-106`, `main/backups.ts:122-141`, `store.ts:49-57` | code |
| tour-of-the-editor | Barre du haut, onglets, panneaux redimensionnables (200–480 / 260–560 px, double-clic = défaut, mémorisé) | `TopBar.tsx`, `LeftPanel.tsx`, `panelSizes.ts` | code |
| tour-of-the-editor | Le commutateur Visuel/Script est au-dessus de l'écran de jeu, pas dans la barre du haut | `StoryViewSwitch.tsx`, `Stage.tsx:105` | code |
| tour-of-the-editor | Menus natifs (Fichier, Édition, Affichage, Fenêtre, Aide) et leurs entrées | `main/menu.ts` | code |
| tour-of-the-editor | Capture d'écran | l'ancienne capture (avant refonte) a été retirée ; à refaire sur une copie du projet | **à faire** |
| saving-and-undo | Autosave toutes les 2 min et à la perte de focus, seulement s'il y a des changements | `App.tsx:40,88-103` | code |
| saving-and-undo | Copie avant chaque enregistrement manuel ; autosave : au plus 1 copie / 15 min ; 20 dernières + dernière de chacun des 7 derniers jours ; migration jamais effacée ; images supprimées dans `backups/deleted-assets` | `main/backups.ts:7-19,48-112,144-169` | code |
| saving-and-undo | Annuler : 200 étapes, saisie groupée (pause 1 s), pas vidé par l'enregistrement, désactivé pendant Jouer | `history.ts:19-35`, `store.ts` | code |
| saving-and-undo | Redo = Maj+⌘Z (Mac) ; Ctrl+Y ou Ctrl+Maj+Z (Windows) | tooltip `TopBar.tsx:10-12` ; menu `menu.ts` (Ctrl+Maj+Z) ; Ctrl+Y « géré ailleurs » non confirmé | code (Ctrl+Y : à vérifier) |
| editor-settings | Thème (sombre par défaut), langue de l'éditeur (auto), stockés dans `settings.json` | `main/settings.ts:21-56`, `main/i18n.ts` | code |
| editor-settings | Langue du correcteur : enregistrée dans le projet, annulable ; macOS détecte seul | `main/spelling.ts:48-79`, `schema.ts:539` | code |
| editor-settings | Réglages du projet : titre, auteur, langue du jeu, durée (lecture seule), fonctionnalités, taille d'écran 1280×720 (lecture seule), dossier | `ProjectSettings.tsx`, `shared/src/project.ts:7` | code |
| guided-tour | 14 étapes dans cet ordre, boutons, clavier (Entrée/→, ←, Échap), démarrage unique, relance par Aide | `Tutorial.tsx:13-28,106-141`, `tutorialSteps.test.ts` | code |
| concepts/stage | Modèle « ce qui change », rejeu depuis un écran vide | `shared/src/stageChange.ts:3-7,53`, `momentStage.ts:4-32` | code |
| concepts/stage | Réglage À partir d'ici / Ce moment seulement ; message unique de 14 s ; halo des moments touchés | `StoryViewSwitch.tsx:30-52`, `stageChange.ts`, `scenes.ts:296-309`, `stageEditing.test.ts` | code |
| concepts/stage | Barre « En scène », tableau (jusqu'à 5 lignes), pastilles (4 max + « +N »), infobulles | `StageCast.tsx`, `Timeline.tsx:315-355`, `reachText.ts` | code |
| concepts/stage | Clic droit d'un personnage ; bandeau « Commencer comme la fin de… » ; règles supprimer/insérer/dupliquer/déplacer | `contextMenus.ts:168-237`, `StageCast.tsx:50-76`, `scenes.ts:349-503`, `stageEditing.test.ts` | code |
| concepts/stage | « Script : mêmes règles, un texte inchangé ne change rien » | `NOUVEAUTES-A-DOCUMENTER.md` (refonte) | **à vérifier dans l'appli** |
| concepts/scenes-moments-timeline | 8 sortes de moment, lesquelles sont visibles des joueurs | `moments.ts:37-66` | code |
| concepts/scenes-moments-timeline | Chronologie : boutons d'ajout, doublon/suppression (confirmation sauf ligne vide), carte « + », Entrée / Maj+Entrée | `Timeline.tsx`, `StageControls.tsx:331-337` | code |
| concepts/scenes-moments-timeline | Scène de départ, « unreachable », résumé, état d'écriture (automatique) | `ScenesTab.tsx`, `SceneInspector.tsx`, `shared/src/outline.ts:13-20` | code |
| concepts/game-memory | Score / Fait, création, changement de type avec confirmation, suppression avertit | `variables.ts:17,86-105`, `shared/src/variables.ts:17,147-161` | code |
| concepts/game-memory | « Faire retenir quelque chose au jeu » (Score +1, Fait = Oui) | `Remember.tsx`, `variables.ts:26-48` | code |
| concepts/game-memory | Opérateurs Score / Fait ; phrases « jusqu'à +N » ; « Essayer » | `moments.ts:79-86`, `RangeHint.tsx`, `reachText`/`reachHint.*`, `memoryTry.ts` | code |
| concepts/how-stories-branch | Choix : 2 à 6 options, touches 1 à 6, option conditionnelle (Cacher / Griser, toujours une issue) | `BranchInspectors.tsx:76-155`, catalogue `optionCondition.*` | code |
| concepts/how-stories-branch | « Si… » : cas de haut en bas, tous/au moins un, sinon, joueurs ne le voient pas | `BranchInspectors.tsx:336-460`, `conditionCases.*` | code |
| concepts/how-stories-branch | Ligne « Branches » (icônes, +N, rouge si cible manquante, repli) ; barre « Où ça mène » (4 max, Retour sur 20 pas) | `branchMarks.ts`, `Timeline.tsx:360-394`, `FlowStrip.tsx:11`, `scenes.ts TRAIL_LIMIT` | code |
| concepts/how-stories-branch | Panneau « Fins du jeu » quand aucune scène n'est sélectionnée | texte du tutoriel (étape 11) ; condition « aucune scène » non lue dans `EndingsList.tsx` | **à vérifier dans l'appli** |

Légende : tout est « code » : aucune de ces pages n'a encore été suivie pas à pas dans l'appli (étape D1, partie « contrôle à la main »).

## Hérité de l'ancien TODO.md (« écrit depuis le code, pas vérifié dans l'appli »)
Ces points sont repris comme `à vérifier` et seront contrôlés page par page :
- Carte : Edit map, Add location, Test map, trois libellés de disponibilité (MapMode.tsx, MapSettings.tsx, map.ts).
- Carte de l'histoire : barre de progression et filtre, double-clic / poignée / clic droit.
- Personnages : actions du clic droit. Images : texte du bouton d'import et de l'invite de glisser-déposer.
- Game UI : options par écran au-delà de celles déjà citées.
- Fenêtre d'activation : « Activate », « Deactivate this device », « Contact us ».
- Écran des projets et fenêtre Nouveau projet : « Browse… », « Create project ».
- Fenêtre d'export et étapes itch.io (venues de la fenêtre de l'appli).
- Page Problèmes : liste des avertissements (échantillon, pas complète).

## Liens à ajouter quand les pages existeront (aujourd'hui interdits : pages brouillon)
- concepts/stage → Mise en scène (writing/staging), Mode Script (3 pages), Copier/coller.
- how-stories-branch, game-memory → « Jusqu'à +5 » (branching/reach), Fins du jeu, Mode Script conditions.
- guided-tour → Mode Script, Fins du jeu. welcome → Options et accessibilité.

## Divergence entre branches (à trancher avant D8)
- Les pages décrivent l'appli de la branche **docs-plan** (refonte terminée) **sauf** la démo, décrite d'après **demo-build** (limite de 5 scènes à l'export, marque dans le jeu exporté). `demo-build` n'est pas fusionnée dans `docs-plan` : le libellé du menu d'export y est « Export for Web… » (démo) / « Export for Web (itch.io)… » alors que `docs-plan` dit « Export for browser… ». Quand les branches seront fusionnées, relancer `npm run sync:ui` et revoir ces libellés.
