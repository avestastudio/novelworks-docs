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
| install-and-activate | Avertissements macOS / Windows au premier lancement | **retiré** des pages à ta demande (non prouvé). Reste écrit : Mac = signature ad hoc, pas d'Apple Developer ID (`electron-builder.yml:24-26`). Windows : aucune affirmation sur la signature (aucun réglage de signature dans le yml ≠ preuve) ; texte prudent « si Windows affiche un avertissement… » | prudence |
| install-and-activate | Clé de téléchargement ; l'activation contacte le serveur (internet) ; vérification de la licence sur l'ordinateur à chaque démarrage ; **la fenêtre d'activation dit** qu'une clé marche sur 3 ordinateurs (formulé comme texte de l'appli, pas comme règle serveur) ; désactiver contacte le serveur | `main/license.ts:80-97`, catalogue `activateDialog.*` ; limite de 3 : texte du catalogue seulement (serveur `license-worker` non lu) | code (limite 3 : à vérifier côté serveur) |
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
| saving-and-undo | Redo = Maj+⌘Z (Mac) ; Ctrl+Y ou Ctrl+Maj+Z (Windows) | tooltip `TopBar.tsx:10-12` ; menu `menu.ts` (Ctrl+Maj+Z) ; Ctrl+Y « géré ailleurs » non confirmé | code (Ctrl+Y et Ctrl+Maj+Z prouvés par `shortcuts.ts` ligne « redo », hors Mac) |
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
| concepts/how-stories-branch | Panneau « Fins du jeu » quand aucune scène n'est sélectionnée | texte du tutoriel (étape 11) ; **confirmé en D3** : `StoryMap.tsx:64-71,915` (visible quand aucune scène n'est sélectionnée) | code |
| writing/scenes | Créer (« Scene N », un moment vide, devient départ si aucune), renommer (double-clic, Entrée/Échap), glisser pour réordonner, dupliquer (« Copy of »), supprimer (confirmation, liens restent avec avertissement) | `ScenesTab.tsx:37-84`, `scenes.ts:65-110`, `shared/src/scenes.ts:95-135` | code |
| writing/scenes | Scène de départ, « unreachable », « Branches : N », état d'écriture automatique, entrées | `ScenesTab.tsx:120`, `problems.ts:106-125`, `outline.ts:13-20` | code |
| writing/scenes | Libellé exact de « Copy of … » | clé `shared.scenes.copy` non lue | **à vérifier dans l'appli** |
| writing/moments-and-dialogue | Entrée = nouveau moment même scène/orateur ; Maj+Entrée = ligne ; avertissement texte trop long | `StageControls.tsx:333`, `Stage.tsx:406-423` | code |
| writing/moments-and-dialogue | Menu clic droit d'un moment (7 entrées), « Changer le type » garde texte dialogue/choix/fin | `contextMenus.ts:130-166`, catalogue `scenes.changeThisMomentInto` | code |
| writing/moments-and-dialogue | Pas de son / musique / transition sur un moment de dialogue | `MomentInspector.tsx` (aucun champ) | code |
| writing/moments-and-dialogue | Touches ←/→/Home/End et ⌘[ ⌘] | `shortcuts.ts:67-83` | code |
| writing/characters | 8 couleurs prédéfinies, création « Character N », expressions (première = défaut), avatar Aucun/Fixe/Par expression | `characters.ts:15-61`, `CharacterInspector.tsx` | code |
| writing/characters | Supprimer : le personnage quitte les moments, ses répliques deviennent narration | `shared/src/references.ts:124-134`, `characters.delete*` | code |
| writing/assets | PNG/JPG/WebP, 50 Mo, devinette du type, 6 types, noms de fichier nettoyés, jamais d'écrasement, glisser-déposer | `main/projectFiles.ts:77-118`, `importSuggestions.ts:11`, `assetTypes.ts` | code |
| writing/assets | Suppression : fichier déplacé vers `backups/deleted-assets` à l'enregistrement | `main/backups.ts:171-196` | code |
| writing/assets | Pas de remplacement d'une image en place (seulement via une expression) | `CharacterInspector.tsx:68-70` | code |
| writing/staging | Placement des personnages (centre, gauche, droite), glisser avec aimantation 2,5 %, taille 30–200 %, ordre, retourner | `shared/src/stage.ts:7-52`, `Stage.tsx:236-345` | code |
| writing/staging | Les flèches ne déplacent pas les personnages | `shortcuts.ts:67-69` | code |
| writing/staging | Personnage sans image : silhouette pointillée (éditeur), non dessiné dans le jeu | `render.ts:66,85`, runtime `render.noPicture` | code |
| writing/script-mode | Bascule Visuel/Script, portée « scène / jeu entier », prévisualisation, rangée « Où ça mène » | `ScriptMode.tsx`, `StoryViewSwitch.tsx`, `script.ts:21-27`, `shared/src/script/document.ts` | code |
| writing/script-mode | Application 500 ms après la frappe, une rafale = une étape d'annulation, moments inchangés conservés | `ScriptMode.tsx:22`, `script.ts:41-48`, `shared/src/script/sync.ts:17-76` | code |
| writing/script-mode | Liste des avertissements du Script et leurs correctifs | `shared/src/script/parse.ts, resolve.ts`, catalogue `script.problem.*`, `script.fix.*` | code |
| writing/script-mode | Éditeur CodeMirror, auto-complétion, `/`, Tab, ⌘. / ⌘⏎ | `scriptEditor.ts:326-331` | code |
| writing/script-mode-lines | Syntaxe de chaque ligne (dialogue, expression, `>`, `//`, background/show/hide, give/remove/no notice, map, end, exploration, `#`, crochets) | `shared/src/script/parse.ts`, `generate.ts`, `script.test.ts` | code |
| writing/script-mode-conditions | Choix `?`/`-`, `->`, effets `+ = give remove`, `if … , locked`, tests, `else if`, `and`/`or` non mélangés | `parse.ts:43-58,274-297`, `conditionCases.test.ts` | code |
| writing/script-mode-conditions | « Un choix sans option » | aucun test ni commentaire ne le mentionne (NOUVEAUTES le cite comme limite connue) : formulé ainsi : « un choix de la seule question est lu tel quel » | **à vérifier dans l'appli** |
| writing/import-a-script | Import : `.txt`/`.md`, nettoyage guillemets/puces, bouton « Importer comme nouvelles scènes » ou « Importer dans « scène » », texte ajouté, pas d'aperçu | `ScriptImportDialog.tsx:40-72` | code |
| writing/import-a-script | Titres `#` d'un import avec le même nom qu'une scène existante : traités comme cette scène (remplacement ?) | `document.ts:62-69` (lu par l'agent, comportement non testé) | **à vérifier dans l'appli** (encadré « attention » dans la page) |
| writing/import-a-script | Export : jeu entier, `.txt` UTF-8, titre « Save the script », une scène seule impossible | `script.ts:63-69`, `main/exportIpc.ts:52-61` | code |
| writing/search | Où ça cherche (14 champs), pas de regex, 500 résultats max, Maj+Entrée, « Remplacer tout » avec confirmation | `search.ts:41-77`, `SearchPanel.tsx` | code |
| writing/search | Un seul Annuler pour « Remplacer tout » | `edit()` non lu en détail | **à vérifier dans l'appli** (la page le dit en prudence) |
| writing/copy-paste-duplicate | Quand copier/coller marche (mode Histoire + Visuel, pas dans un champ, pas de fenêtre ouverte) ; ce qu'on copie ; coller après le moment sélectionné ; scène à la fin ; personnage sur la scène | `clipboard.ts:12-95`, `scenes.ts:392-442`, tests | code |
| writing/copy-paste-duplicate | Collage dans un autre projet : références aux images/scènes/variables absentes | pas de remappage dans le code ; **rendu dans l'interface non vérifié** | **à vérifier dans l'appli** (page prudente) |
| writing/notes | Une note par moment, icône sur la carte, `//` en Script, pas de note de scène (résumé) | `MomentInspector.tsx`, `Timeline.tsx:243`, `generate.ts:42`, `resolve.ts:106` | code |
| writing/notes | Les notes sont retirées de l'export du jeu | `export.ts:55-72` lu seulement ; **non écrit dans la page** | **à vérifier** |

| branching/choices | 2 à 6 options (X désactivé à 2, ajout désactivé à 6), pas de réordonnancement, « Puis » : continuer / scène / nouvelle scène / scène supprimée = continuer | `shared/src/scenes.ts:41-63`, `BranchInspectors.tsx:75-157`, `runtime/player.ts:103-106` | code |
| branching/choices | Effets : ajout/fixer (Score), fixer (Fait), objets (si Inventaire) ; règles d'exécution (manquant ignoré, Fait + ignoré, objet unique ≤ 1, empilable ≥ 0) | `BI:160-230`, `shared/src/conditions.ts:100-130`, `variables.ts:31-39` | code |
| branching/choices | Option conditionnelle : cacher/griser ; « toujours une issue » (si tout est masqué, tout s'affiche) ; test manquant = faux | `shared/src/conditions.ts:37-49,87-98`, `runtime/resolve.ts:143-151`, `player.ts:99` | code |
| branching/choices | En jeu : boutons empilés, apparaissent après le texte, touches 1-6 = boutons visibles (un bouton grisé prend un numéro) | `runtime/layout.ts`, `game.ts:258-259,1006-1011`, `render.ts:349-375` | code |
| branching/choices | Texte d'option trop long coupé par « … » | `render.ts:371-373` (style lu, non testé visuellement) | **non écrit** dans la page |
| branching/choices | Avertissements des choix (liste) | `shared/src/problems.ts:18-38`, `reach.ts:47-65` | code |
| branching/variables | Création « Variable N » (Score à 0) ; renommer suit partout ; changement de type : confirmation + valeurs remises à 0/Oui ; suppression : avertissements, références gardées | `shared/src/variables.ts:10-99,158-162`, `R/variables.ts:62-122` | code |
| branching/variables | Listes « Modifiée par / Vérifiée par » | `memory.changedBy/checkedBy`, `shared/src/variables.ts:117-139` | code |
| branching/variables | Sauvegardes des joueurs : valeurs restaurées si même id et même type, sinon abandonnées | `runtime/player.ts:476-492` | code |
| branching/variables | Menu clic droit d'une variable, texte du bouton de confirmation de suppression | non lus | **non écrit** |
| branching/conditions | Cas de haut en bas, tests, opérateurs Score/Fait, tests d'objet, tous/au moins un, « sinon » | `BI:236-414`, `shared/src/variables.ts:27-29`, `R/moments.ts:72-86` | code |
| branching/conditions | Condition cassée (variable/objet supprimé ou non choisi) : le jeu **saute tout le Si…** et continue | `shared/src/conditions.ts:37-85`, `runtime/player.ts:244-258` | code (à confirmer en jouant) |
| branching/conditions | « Essayer » (zone de test) | `BI:466-573`, `memoryTry.ts` | code |
| branching/conditions | Au moins un cas ; pas d'avertissement « cas sans scène » en jeu (continue) | `moments.ts:202-204`, `problems.ts:39-55` | code |
| branching/jumps | Saut sans « continuer » ; une scène ne finit que par un seul saut ; cible supprimée = continuer | `BI:577-586`, `player.ts:240-258`, `shared/src/linking.ts` | code |
| branching/endings | Nom par défaut « Good ending » ; vide = « The End » en jeu ; texte court ; clic = retour au titre ; bouton Carte caché ; Auto/Skip s'arrêtent | `shared/src/scenes.ts:47`, `runtime/render.ts:382-413`, `resolve.ts:151`, `player.ts:89,407`, `reading.ts:114` | code |
| branching/endings | Écran « The End » de Game UI = histoire épuisée sans moment Fin ; ce n'est pas le moment Fin | `gameUI.ts:18`, `runtime/game.ts:132-135,440`, `player.ts:224,269` | code |
| branching/endings | Panneau « Fins du jeu » : visible quand **aucune scène n'est sélectionnée** dans la carte (résout le point « à vérifier ») | `StoryMap.tsx:64-71,915` | code |
| branching/endings | Avertissement « rien ne mène » ; ne tient pas compte de l'accessibilité de la scène ; couleur « orange » | `EndingsList.tsx`, `shared/src/endings.ts`, `styles.css:2882` (couleur non lue) | code (couleur : non écrite) |
| branching/endings | Une partie arrivée à une fin n'est pas sauvegardée | `saveOf` ne sauve que `playing` ; l'écran « end » n'est pas le moment Fin | **non écrit** (non prouvé pour le moment Fin) |
| branching/story-map | Carte : cartes de scène, étiquettes, flèches fusionnées, boucles pointillées, flèche vers scène supprimée en pointillés | `StoryMap.tsx`, `storyMap.ts:84-150`, `styles.css:3870-3874` | code |
| branching/story-map | Navigation (molette, pincer, Espace, Maj+1, Maj+0, +/-), zoom 20–200 %, vue gardée seulement pendant la session | `StoryMap.tsx:125-145`, `storyMap.ts` | code |
| branching/story-map | Positions enregistrées (`mapPosition`) ; « Tidy up » les efface toutes ; désactivé si tout est auto | `scenes.ts:212`, `StoryMap.tsx` | code |
| branching/story-map | Lier par la poignée : ce qui est ajouté en fin de scène (saut/choix/Si/zone), raisons de refus | `shared/src/linking.ts:34-116`, `StoryMap.tsx` | code |
| branching/story-map | Clic droit : scène (7 entrées), flèche (aller au moment, retirer le lien, délier la zone) ; pas de menu sur le vide | `StoryMap.tsx:215-260`, `scenes.ts:166-188` | code (vide : non lu en détail) |
| branching/story-map | Filtres Tout / À écrire / Fins / Problèmes ; progression en texte dans la barre | `StoryMap.tsx:77-82`, `outline.ts:22-26` | code |
| branching/story-map | Panneau de droite : inspecteur d'une scène ou aide (fins, légende, plan, déplacement) | `StoryMap.tsx:64-71`, `SceneInspector.tsx` | code |
| branching/reach | Calcul : meilleur/pire choix par moment, zones comptées une fois, « fixer » = plage large, boucles = côté ouvert → rien dit | `shared/src/scoreRange.ts:5-151` | code |
| branching/reach | Limites : ordre et chemin ignorés ; options conditionnelles comptées | `scoreRange.ts` (commentaires en tête) | code |
| branching/reach | Rendu de « ce test ne sera jamais vrai » quand un côté est ouvert | non vérifié | **non écrit** (la page ne dit pas ce cas) |

| features/* | Fonctions : 2 existantes (Inventaire, Carte) ; ce que fait l'activation/désactivation (rien n'est perdu, avertissements, confirmations) | `shared/src/features.ts:25-66`, `FeaturesDialog.tsx`, `E/features.ts:43-71` | code + **appli** (fenêtre Features comparée à l'écran) |
| features/exploration | Dessin (rectangle min 2 %, forme ≥ 3 points), poignées, actions (6), conditions Caché/Verrouillé, accessoires, comportement du joueur (zones invisibles tant qu'on ne survole pas, 2 touchers avec étiquette), « pas de sortie auto » | `ExplorationCanvas.tsx`, `ExplorationInspectors.tsx`, `runtime/player.ts:288-346`, `game.ts:873-1003` | code (survol non revu en capture) |
| features/inventory | Onglet Objets, Simple/Empilable, suppression, notifications, panneau du jeu (touche I, pas de bouton « utiliser »), panneau Variables & objets du test | `ItemsTab.tsx`, `ItemInspector.tsx`, `runtime/game.ts:720-822`, `PlayOverlay.tsx` | code + **appli** (onglet Items) |
| features/map | Espace Carte, lieux, 3 disponibilités, moment « Show map », bouton Retour, avertissements | `MapMode.tsx`, `S/map.ts`, `runtime/player.ts:219-409` | code |
| game-ui/* | 15 écrans dans l'ordre ; tous les réglages de chaque écran | `gameUI.ts:7-23`, `GameUIInspector.tsx`, `schema.ts` | code + **appli** (liste des 15 écrans identique ; réglages relevés à l'écran et comparés aux libellés des pages : tout trouvé, sauf les contrôles conditionnels non affichés par défaut) |
| game-ui/fonts-and-colors | 4 polices (Inter, Lora, Nunito, Courier Prime), couverture des alphabets | `schema.ts:301`, `runtime/fonts`, `theme.ts:17-56` | code (couverture déduite de la liste des fichiers : prudente) |
| player/* | Sauvegardes (clés, 12 + rapide + auto, contenu, compatibilité), Historique (200), Auto (délai 1 s + 55 ms/car., 1,5–10 s), Passer (lignes lues, FNV-1a), vitesses du texte, options (5), touches, tactile | `runtime/saves.ts`, `reading.ts`, `playerOptions.ts`, `game.ts:925-1015`, `player.ts:438-509` | code |
| player/auto-and-skip | Pas de voix/son | aucun champ de son sur un moment de dialogue (`MomentInspector.tsx`) | code (formulé prudemment) |
| testing/play | Façons de lancer, jouer le projet non enregistré, arrêt (Échap) | `store.ts:419`, `PlayOverlay.tsx` | code + **appli** (barre de jeu vue : Playing, Variables & items, Open map, Show splash, Restart, Clear test saves, Reset read lines, Stop) |
| testing/problems | Liste complète des avertissements (choix, Si, saut, objet, exploration, carte, jeu entier) ; où ils s'affichent | `shared/src/problems.ts`, `reach.ts`, `exploration.ts`, `map.ts`, `export.ts` | code + **appli** (avertissement « variable supprimée » vu à l'écran) |
| testing/* | Il n'y a **pas** de panneau « Problèmes » ni de compteur : seule la fenêtre d'export liste tout | recherche dans le code ; écrit tel quel | code |
| publish/web-export | Étapes, fichiers produits, nom du dossier `-web`, `withoutWriterData`, images utilisées, erreurs, « Test in browser », file:// fonctionne | `webExport.ts`, `exportIpc.ts`, `shared/src/export.ts` | code (**export non lancé dans l'appli** : voir plus bas) |
| publish/itch-io | Étapes itch.io (type HTML, viewport…) | **connaissance générale d'itch.io, pas du code** : encadré « pas NovelWorks » dans la page | prudence |


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

## Défauts constatés dans les textes de l'appli
Constatés en lisant les catalogues de docs-plan pendant D2. Les pages décrivent le **vrai** comportement.
**Corrigés** sur la branche `fix-script-help-text` du dépôt de l'éditeur (3 commits après `20c408b`, 1325 tests + typecheck verts, **non fusionnée, non poussée**) :
1. ✅ Aide du Script en anglais : « à gauche / au centre / à droite » → les lieux viennent maintenant des mots-clés de la langue (`{left} / {center} / {right}`), dans les 7 langues.
2. ✅ `script.problem.badCondition` : « si objet Key » etc. → `{if}`, `{item}`, `{without}` de la langue ; l'exemple japonais utilisait un mauvais mot (« なし » au lieu de « 未所持 »).
3. ✅ `scriptImport.help` : ne cite plus « Help → Script format help » ; pointe vers le bouton « ? » de la barre du Script, en 7 langues.
4. ✅ Phrase `script.help.hide` mal formée : réécrite (« hide : everyone » fait partir tout le monde).
5. ✅ `scriptMode.hint` : « décor : Park » → `{background}` de la langue.
6. ✅ **Trouvé en plus pendant la correction** : en es, pt-BR, zh-CN, ru, ja, plusieurs exemples de l'aide étaient restés en français ou en anglais (conditions à plusieurs cas, « et/ou », option verrouillée ; en japonais presque tous). Traduits.
Tests ajoutés : `packages/shared/src/script/helpText.test.ts` (30 tests : chaque exemple est lu par l'analyseur comme la bonne ligne, dans chaque langue ; les mots-clés sont ceux de la langue ; plus de mots d'exemple d'une autre langue ; la phrase d'import cite le bouton « ? »). Vérifié : 15 de ces tests échouent sur les anciens textes.
**Restent à décider** (non corrigés, hors de la demande) :
- L'indice de recherche vide (`searchPanel.dialogueChoicesEndingsNotesCharactersAndScene`) oublie les objets, les résumés et les zones, qui sont pourtant cherchés.
- `script.problem.unknownLine` ne peut jamais s'afficher (tout ce qui n'est pas reconnu devient narration).
Les pages de documentation ne citent aucun de ces textes ; elles restent vraies avec ou sans la correction.

## Vérifié dans l'appli (copie de « Sketches of Spring », 2026-11-07)
- ✅ Si une condition d'un « Si… » vérifie une variable supprimée : l'éditeur affiche « This condition checks a variable that was deleted. » (carte du moment + encadré de l'inspecteur) ; **le jeu saute tout le « Si… »** et continue : avec les deux « Si… » cassés, il arrive à l'écran de fin de l'histoire (« To be continued… », « The End »), pas à « Friends First ».
- ✅ Fenêtre de suppression d'une variable, listes « Changed by / Checked by », liste des 15 écrans du Game UI, fenêtre Features, onglet Items, barre du mode Jouer, bandeau « Show the copy » après migration : tous conformes aux pages.
- ❌→✅ **Erreurs trouvées dans mes pages par ces essais et corrigées** : dupliquer une scène donne « A helping hand (copy) » (la page disait « Copy of … ») ; un titre `# …` d'import portant le nom d'une scène existante crée une **nouvelle scène du même nom** (la page disait qu'il pouvait la remplacer) ; l'import demande **deux** Annuler (la fenêtre promet une étape) ; coller un moment dans un autre projet : l'orateur inconnu devient Narrateur, le décor manquant est retiré, le personnage manquant laisse une ligne « Unnamed » dans le tableau, **sans aucun avertissement**.
- ✅ « Remplacer tout » : un seul Annuler le défait entièrement (« 31 matches replaced. »).
- Pas encore revu en vrai : l'export (je ne l'ai pas lancé), le survol d'une zone d'exploration (ma capture n'a pas montré la surbrillance : à refaire), le menu clic droit d'une flèche de la carte, les 14 étapes du tour.

## Défauts d'éditeur trouvés par ces essais (non corrigés)
- L'import d'un script dit « One undo step » mais il en faut deux.
- Coller un moment dans un autre projet laisse des références mortes sans avertissement (orateur → Narrateur, personnage absent « Unnamed » dans le tableau).
- Un titre `#` d'import qui reprend le nom d'une scène crée un doublon silencieux.

## Relecture indépendante (4 relecteurs, regard neuf, 2026-11-07)
Quatre agents qui n'avaient pas vu l'écriture ont relu les 73 pages contre le code (un pour Premiers pas/Idées/Écrire, un pour Embranchements/Fonctions, un pour Game UI, un pour Joueur/Test/Export/Référence). Environ 60 constats ; **tous traités sauf ceux listés plus bas**. Erreurs de fond corrigées :
- Inventory désactivé : j'avais écrit que les moments d'objets « ne font rien » ; faux, ils **continuent de tourner** (seuls le bouton, l'entrée du menu pause et la touche I disparaissent).
- « Jusqu'à +5 » : une zone d'exploration réglée sur « Every time » (le réglage par défaut) **rend muette** la phrase pour ce Score ; seules les zones « Once only » comptent une fois.
- « Si… » cassé : une case au-dessus qui est vraie gagne encore ; en « au moins un », un seul élément manquant casse la case.
- Boucles : le jeu s'arrête après 1000 étapes automatiques (écran de fin) sans avertissement de l'éditeur (jumps/Si qui se renvoient la balle).
- Carte : on peut déposer une carte sur une autre en la glissant ; les zones « Continuer » ne font pas de flèche.
- Menu pause : « Quick load » seulement si une sauvegarde rapide existe ; le bouton Carte seulement si la carte est ouvrable ; dans le menu rapide « Quick load » est grisé (pas caché) ; les boutons de sauvegarde ne sont **pas** cachés quand le navigateur refuse (corrigé).
- Polices : seul Typewriter n'a ni cyrillique ni vietnamien.
- Noms automatiques : « Scene N », « Variable N », « Character N » = nombre existant + 1 (pas « premier numéro libre »).
- Auto : le plancher de 1,5 s s'applique avant le coefficient de vitesse (0,9 s à 15 s selon le réglage).
- Sauvegardes des joueurs : conservées **à la même adresse web** seulement.
- Export : `project.js` est lisible par tout joueur ; un titre sans lettres latines devient `Game-web` ; fenêtre « Show in Finder » même sous Windows ; erreur « The demo exports games of up to N scenes… ».
- Fenêtre d'export : « Test in browser », « Done » ; lien d'erreurs corrigé ; liste des avertissements complétée.
**Non traités / décisions à prendre** :
- Le libellé d'export : le code dit « Export for browser… » (docs-plan) ; sur demo-build, la **version complète** garde « Export for Web (itch.io)… » et seule la **démo** dit « Export for Web… ». Les pages disent « Export for Web… » comme demandé : à trancher (voir la liste finale).
- L'édition Steam existe dans le code (sans clé, exporte toujours) : volontairement non documentée (pas de Steam sans demande).
- Page « démo » : décrit demo-build (non fusionnée) comme demandé.

## État final (2026-11-07, avant la passe humaine)
**Vérifié en direct dans l'appli** (copie de vos projets, via le pilote CDP) : visite guidée (14 étapes, textes et boutons identiques aux pages), lecture d'un jeu avec zones d'exploration (14 zones détectées, aria-label correct), copier/coller, import, annuler/refaire, recherche, Problèmes, panneau Variables et objets du mode Jouer, 15 captures.
**Vérifié dans le code seulement** : fonctions D4–D6 non rejouées une à une (Interface du jeu, exportation, écran du joueur hors mode Jouer), comportements rares de l'import.
**Non vérifié** : survol des zones d'exploration (la capture montre seulement le jeu, sans halo visible : à regarder), menu contextuel de la carte, Windows (raccourcis), limite de 3 ordinateurs par clé, messages d'installation, branche demo-build non fusionnée (édition Steam volontairement non documentée).
**Traductions** : relues par agents indépendants (6 langues), jamais par des natifs : voir TRADUCTIONS-A-RELIRE.md.
**Contrôles automatiques** : check:docs, check:translations, test:ui, build + check:dist : tous OK au dernier commit.
**Environnement** : mon instance de l'appli (ports 9334/9230) n'a pas pu être arrêtée par moi (kill refusé) ; settings.json et recents.json de Novelworks restaurés depuis la sauvegarde.

## Mise à jour après les correctifs de l'éditeur (2026-11-07)
- **Survol des zones d'exploration : vérifié dans l'appli** (copie de « Sketches of Spring », scène « The classroom », moment 5, lecture « Play from here »). Au repos, trait et fond transparents et étiquette à opacité 0 ; au survol, trait blanc 75 %, fond blanc 16 %, étiquette « Blackboard » à opacité 1 ; retour à l'invisible quand le pointeur sort. Conforme à features/exploration.md. Captures : scratchpad caps/zone-hover.png, zone-nohover.png.
- **Menu clic droit de la carte : vérifié dans l'appli.** Scène : Open in editor, Rename, Edit summary, Status, Duplicate, Set as start scene, Delete… ; flèche de saut/option : « Go to the moment that creates this link » + « Remove link… » ; flèche de zone : « … » + « Unlink zone… » ; flèche d'un « If… » : seulement « Go to the moment… ». Conforme à branching/story-map.md.
- **Import annulable en un seul pas** (branche fix-import-undo) : testé par tests automatiques sur la vraie vue Script (échoue sans le correctif), pas rejoué à la main. Cas non testé : importer alors que la vue Script est déjà ouverte avec la même portée.
- **Import d'un titre déjà existant** : « Nom (copy) », « Nom (copy) 2 »… (tests ; pas rejoué dans l'appli). Limite connue : un lien `-> Nom` dans le texte importé pointe toujours vers la scène d'origine.
- **Collage entre projets** : la copie porte aussi les noms ; au collage, garde par identité, sinon cherche par nom, sinon retire, avec un message de 15 s (max 8 éléments). 9 tests ; pas rejoué à la main entre deux vrais projets.
- **Inventaire désactivé** : l'avertissement existait déjà (panneau Problèmes, badges, fenêtre d'export) ; un test de non-régression de 16 cas a été ajouté ; le Script ne le souligne pas. Page features/inventory mise à jour.
- **« Export for Web… »** : le même libellé anglais dans le menu, la liste des raccourcis et (sans points de suspension) le titre de la fenêtre, dans les 7 langues. demo-build est fusionné dans docs-plan ; `data/ui/overlay.json` est vide ; l'avertissement « pending merge » a disparu.
- **Steam** : contenu de la démo reconstruit (Windows + Mac) depuis docs-plan, contrôle des fichiers interdits OK ; **envoi non fait** (steamcmd demande le mot de passe, pas de session mémorisée). À lancer par l'utilisateur.
