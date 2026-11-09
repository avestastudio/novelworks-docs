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

## Version 0.8 (2026-11-09)

# Evidence for the new pages

Paths: A = apps/editor/src/renderer/src, C = A/components, S = packages/shared/src, R = packages/runtime/src, M = apps/editor/src/main.

| page | claim | proof (file:line or {ui.key}) | code |
|---|---|---|---|
| moment-panel | Four tabs Text, Image, Effects, Sound | C/MomentInspector.tsx tabs array; {ui.inspectorTabs.text} {ui.inspectorTabs.image} {ui.inspectorTabs.effects} {ui.sound.tab} | `tabs = [text,image,effects,sound]` |
| moment-panel | Dot on Effects: camera, foreground, particles or effects | C/MomentInspector.tsx tabs array | `used: !!stage.camera \|\| !!stage.foreground \|\| !!stage.particles \|\| effects.length>0` |
| moment-panel | Dot on Sound: moment's own sound; none on Text/Image | C/MomentInspector.tsx tabs array | `used: !!moment.sound`, `used: false` |
| moment-panel | Problems box above the tabs | C/MomentInspector.tsx | `problems.length > 0 && <ProblemsBox>` before tablist |
| moment-panel | Text tab: where it leads only in Visual view, then note and script sample | C/MomentInspector.tsx TextTab, ScriptLineSection; C/FlowStrip.tsx:13,24 | `storyView === 'visual' && <FlowStrip>` |
| moment-panel | Image tab order: scope, background, ambience, on stage | C/MomentInspector.tsx ImageTab | sections in order |
| moment-panel | Effects tab: scope, camera with preview, effects | C/MomentInspector.tsx EffectsTab; {ui.camera.open} {ui.effects.open} | |
| moment-panel | + Dialogue adds after selected moment | C/Timeline.tsx:156-159; {ui.moments.dialogue} {ui.timeline.addedAfterTheSelectedMoment} | `MOMENT_KINDS.dialogue.label` |
| moment-panel | Other lists other kinds, each with help; Item and Map need features | C/Timeline.tsx:27-54,161; A/moments.ts:65-67 | `type !== 'item' \|\| project.features.inventory` |
| moment-panel | Duplicate/delete under timeline and right-click | C/Timeline.tsx:166-177; A/contextMenus.ts:140-145,168 | |
| moment-panel | Above screen: background, Character, zone tools, Visual/Script | C/Stage.tsx:70-92 | `canvas-toolbar` |
| moment-panel | Background and Character switch panel to Image | C/Stage.tsx:73-75,86 | `setInspectorTab('image')` |
| moment-panel | Bar over character: expression and outfit only | C/Stage.tsx:386-393; C/StageControls.tsx:255-259 | `ExpressionPicker`, `OutfitPicker` (null without outfits) |
| rich-text | Fields on game screen and Text tab | C/Stage.tsx:333; C/MomentInspector.tsx RichTextField | |
| rich-text | Toolbar contents | C/RichTextField.tsx rich-bar; {ui.richText.bold} {ui.richText.italic} {ui.richText.customColor} {ui.richText.small} {ui.richText.big} {ui.richText.shake} {ui.richText.wave} {ui.richText.clear} | |
| rich-text | Cmd/Ctrl+B and I | C/RichTextField.tsx onKeyDown | `event.metaKey \|\| event.ctrlKey` + b/i |
| rich-text | One size, one movement; click again removes | S/richText.ts RichStyle; C/RichTextField.tsx toggle | `size?`, `effect?`, `rangeHasStyle ? null : wanted` |
| rich-text | Palette in Game UI, Dialogue box | C/GameUIInspector.tsx:518-522; {ui.richText.palette} | `textColors` |
| rich-text | Palette change reaches words; custom does not | R/resolve.ts:165-168; S/richText.ts validColor | slot '1'-'5' vs '#rrggbb' |
| rich-text | Pause default 0.5, 0.1 to 5, click chip | S/richText.ts RICH_PAUSE; C/RichTextField.tsx onClick, rich-pause-pop | `{ min: 0.1, max: 5, default: 0.5 }` |
| rich-text | Variable: name in editor, value in game, yes/no, nothing if deleted | C/RichTextField.tsx draw; R/resolve.ts:161-164; {rt.game.yes} | `current === undefined ? ''` |
| rich-text | Typed letter by letter, stops at pauses | R/reading.ts:188-191; R/game.ts:341 | `richPauses` |
| rich-text | First click whole line | R/game.ts completeMoment/onClick | `completeReveal()` |
| rich-text | Reduced motion: letters do not move | R/game.ts:608; R/render.ts renderRichText | `liveText: interactive && !reduced`, `effect && live` |
| rich-text | History and screen readers get words alone | R/resolve.ts:165; R/history.ts:24; R/game.ts:285 | `plainRich` |
| rich-text | Script tags and English words | S/script/richTags.ts; {ui.script.tag.b} and siblings in editor-en.json | `script.tag.*` |
| rich-text | Script: variable by name, `{{`, other languages | S/script/richTags.ts tagLookup, scriptTag; S/richText.ts escapeRich | all catalogs in `tagLookup` |
| rich-text | Dialogue only | C/MomentInspector.tsx TextTab; R/resolve.ts:160-168 | `content.type === 'dialogue'` |
| outfits | Open from Characters panel and stage panel | C/CharacterInspector.tsx:181-192; C/StageCharacterInspector.tsx:45-51; {ui.wardrobe.open} | |
| outfits | Window content, undo while open | C/WardrobeWindow.tsx Modal | `projectUndo` |
| outfits | Drop or plus; Clothing only | C/WardrobeWindow.tsx dropFiles, ImagePicker; {ui.wardrobe.addPiece} {ui.assetTypes.clothing} | `categories: ['clothing']` |
| outfits | One piece per category | C/WardrobeWindow.tsx wear; S/characters.ts:81 | `draft[category.id]` |
| outfits | Four categories at first | A/wardrobe.ts ensureWardrobe; {ui.wardrobe.category.shoes} | |
| outfits | 12 categories | S/characters.ts:5 | `WARDROBE_MAX_CATEGORIES = 12` |
| outfits | Delete category removes pieces, from outfits; pictures stay | A/wardrobe.ts removeCategory, comment above removePiece | |
| outfits | Can't be taken off removes None | C/WardrobeWindow.tsx | `!category.required &&` |
| outfits | Frame, drag, corner, arrows, Shift | C/WardrobeWindow.tsx PieceFrame | `event.shiftKey ? 2 : 0.25` |
| outfits | 5 % to 400 % | S/characters.ts:8-9; A/wardrobe.ts clampScale | |
| outfits | Placement per piece | A/wardrobe.ts setPiecePlacement | `piece.placement` |
| outfits | Same shape lies over, other keeps own size | A/wardrobe.ts fittedPlacement | aspect ratio test |
| outfits | Front on top; expression row moves | C/WardrobeWindow.tsx rows reverse, moveButtons; {ui.wardrobe.expressionLayer} | `wardrobeRows(wardrobe).reverse()` |
| outfits | Try on without saving | C/WardrobeWindow.tsx wear | `setDraft` only |
| outfits | Save, Update when changed | C/WardrobeWindow.tsx wardrobe-actions; {ui.wardrobe.saveAsNew} {ui.wardrobe.updateOutfit} | `selected && dirty` |
| outfits | Default outfit has no pieces | S/characters.ts:89-93 | `outfit?.pieces` undefined |
| outfits | Whole drawings replace layers | S/characters.ts:90-92; {ui.wardrobe.wholeDrawingsHelp} | |
| outfits | Three ways in story | C/StageCharacterInspector.tsx:42-43; C/Stage.tsx:392; A/contextMenus.ts:191 | |
| outfits | Lasts, scope applies | A/scenes.ts:625-631 | `editStage` |
| outfits | Script form | S/script/generate.ts:28,57; {ui.script.kw.show} {ui.script.kw.outfit} {ui.script.kw.defaultOutfit} | `show : ...` |
| outfits | Unknown outfit flagged, can create | {ui.script.problem.unknownOutfit} {ui.script.fix.createOutfit}; A/scriptProblems.ts | |
| outfits | Delete outfit: wearers back to default | A/characters.ts:127-131 | `outfitId: _gone` |
| outfits | Delete piece: out of outfits | A/wardrobe.ts removePiece | |
| outfits | Paste finds by name, else default | A/clipboardRefs.ts:24,198-202 | |
| outfits | Export only worn pieces | S/export.ts:43-45 | `worn.has(piece.id)` |
| outfits | 20 outfits, 200 pieces | S/characters.ts:4,6 | |
| outfits | Avatars do not change | S/characters.ts:26-32 | no outfit in `avatarCandidates` |
| outfits | Demo 2 outfits | S/demoLimits.ts DEMO_LIMITS | `outfits: 2` |
| ambience | Tiles and labels | C/StageControls.tsx:119-142; S/ambience.ts:3; {ui.ambience.none} {ui.ambience.memory} | |
| ambience | Intensity 0-100, starts 100; characters checked | C/StageControls.tsx:126,150,153 | `intensity ?? 1`, `characters ?? true` |
| ambience | Persistence and scope | A/scenes.ts:539-541 | `editStage` |
| ambience | Script keeps | S/script/resolve.ts:111 | comment and code |
| ambience | GIF, WebP as pictures | M/projectFiles.ts:77 | `IMAGE_EXTENSIONS` |
| ambience | MP4, WebM | M/projectFiles.ts:78 | `VIDEO_EXTENSIONS` |
| ambience | Three import routes | C/StageControls.tsx:92; C/AssetsTab.tsx:35; A/assets.ts:187 | `allowVideo: true` |
| ambience | Background or CG | C/ImportDialog.tsx:130; A/assetTypes.ts:27-29; A/assets.ts:70 | `isFullScreenType` |
| ambience | Play sign and hover | C/AssetPicture.tsx | `onMouseEnter`, `asset-video-mark` |
| ambience | First picture in editor; loop, no sound in game | R/render.ts:526-543; C/MomentScreen.tsx:48 | `stillVideos`, `muted`, `loop` |
| ambience | Stops during pause menu | R/game.ts show() | `position && !paused ? play : pause` |
| ambience | 40 MB notice, never refused | A/assets.ts:13-14,114-117; M/projectFiles.ts:127; {ui.assets.heavyVideo} | |
| ambience | Not recompressed in zip | M/zip.ts:19-20 | regex on mp4, webm |
| ambience | Video only as a moment background | A: only C/StageControls.tsx passes `allowVideo` to ImagePicker; C/ImagePicker.tsx:30 | |
| ambience | Picture over 50 MB refused | M/projectFiles.ts:120,136 | `MAX_IMAGE_BYTES` |
| camera | Opened from Effects tab | C/MomentInspector.tsx EffectsTab | `setOpen(true)` |
| camera | Editor screen shows whole scene; thumbnail shows camera | C/MomentScreen.tsx:48; C/MomentInspector.tsx EffectsTab | `noCamera: editing` |
| camera | 6 shots | S/camera.ts CAMERA_SHOTS_MAX; C/CameraWindow.tsx:264 | |
| camera | Drag frame, play, stop | C/CameraWindow.tsx:152-172; {ui.camera.play} {ui.camera.stop} | |
| camera | Presets replace shots, keep look; first character | A/cameraEditing.ts applyPreset; C/CameraWindow.tsx:132 | `stage.characters[0]` |
| camera | Each preset's description | A/cameraEditing.ts `shots` table | |
| camera | Frame on face, no follow | S/camera.ts frameOnCharacter; C/CameraWindow.tsx:187 | writes x, y, zoom only |
| camera | Zoom 100-400 | S/camera.ts CAMERA_ZOOM | |
| camera | Moves and labels | S/camera.ts CAMERA_MOVES; {ui.camera.smooth} {ui.camera.steady} {ui.camera.quick} {ui.camera.cut} | |
| camera | Duration 0.2-8; hold label | S/camera.ts CAMERA_SECONDS; C/CameraWindow.tsx:210-212 | `holds ? 'camera.hold'` |
| camera | Blur on background only | R/render.ts:571 | `BLURRED_LAYERS` |
| camera | Tilt 12 | S/camera.ts CAMERA_TILT_MAX | |
| camera | First shot of first moment shows Start | C/CameraWindow.tsx:108,198,260; {ui.camera.start} | `arrives` |
| camera | Whole-moment list | C/CameraWindow.tsx:18,225-235 | |
| camera | Depth starts at 100 | A/cameraEditing.ts WIDE_CAMERA | `depth: 1` |
| camera | Foreground covers, clicks through, moves more | R/render.ts renderForeground, CAMERA_PLANES; S/camera.ts DEPTH | `pointerEvents: 'none'`, `objectFit: 'cover'` |
| camera | Lasts, scope in window | A/scenes.ts:573-580; C/CameraWindow.tsx:119 | |
| camera | First click ends movement and line | R/game.ts completeMoment | `finishCamera(screen)` |
| camera | Next moments keep last shot | R/render.ts renderCamera | `previous?.key === key` |
| camera | Glide in scene; new scene direct | R/game.ts:608 | `animateCamera: cameraScene === sceneId` |
| camera | Load on last shot | R/game.ts loadSave | `cameraRestored = true` |
| camera | Dialogue box never moves | R/render.ts:553,562-569 | not in `CAMERA_PLANES` |
| camera | Reduced motion | R/game.ts:608; R/render.ts renderCamera | `!playing` -> `place(last)`, `handheld`, fade need `playing` |
| camera | Exploration ignores tilt, depth | R/render.ts renderCamera; {ui.camera.explorationNote} | `!view.exploration` |
| camera | Script keeps | S/script/resolve.ts:111 | |
| camera | Demo 2 shots | S/demoLimits.ts | `cameraShots: 2` |
| effects | Six categories, five each | C/EffectsWindow.tsx:18; S/effects.ts:3-12 | 30 in all |
| effects | Click plays | C/EffectsWindow.tsx chooseName | `tryEffect` |
| effects | Character for three categories | S/effects.ts CHARACTER_EFFECTS | |
| effects | Duration 0.2-3 | S/effects.ts EFFECT_SECONDS | |
| effects | Intensity reactions, screen, particles 10-100 | S/effects.ts HAS_INTENSITY; C/EffectsWindow.tsx:225,237 | |
| effects | Speed 20-200 | S/effects.ts PARTICLE_SPEED; C/EffectsWindow.tsx:220 | |
| effects | 12 max, particles not counted | S/effects.ts EFFECTS_MAX; C/EffectsWindow.tsx:156 | `!isParticles && ...` |
| effects | Play all | C/EffectsWindow.tsx:151-154; {ui.effects.playAll} | |
| effects | One after another; transition first; only first | R/effects.ts playEffects | `effects.find(... 'transition')`, `at += seconds` |
| effects | Exit removes; only plays if leaving | C/EffectsWindow.tsx:149; R/effects.ts | `leaving.includes` |
| effects | Particles last, one kind, scope, stop | A/scenes.ts:544-546; C/EffectsWindow.tsx:249-253; {ui.effects.particlesLast} {ui.effects.stopParticles} | single `stage.particles` |
| effects | Defaults in Fonts & colors | C/GameUIInspector.tsx:141-146; A/gameUI.ts:7; {ui.effects.defaultsTitle} {ui.effects.defaultNone} | screen `global` |
| effects | Default none in new game | S/schema.ts:447-448; R/effects.ts | `.optional()` |
| effects | Click ends; particles go on | R/effects.ts finishEffects; R/game.ts completeMoment | |
| effects | Skip, load, reduced | R/game.ts show() | `reduced \|\| cameraRestored \|\| mode === 'skip'` |
| effects | Reduced particles still | R/game.ts:608; R/render.ts renderParticles | `animationPlayState` |
| effects | Script keeps | S/script/resolve.ts:122 | `...(old?.effects ...)` |
| effects | Demo: try but not add | C/EffectsWindow.tsx:140-142; S/demoLimits.ts | `showDemoLimit` |
| sound | MP3, OGG, WAV | S/sound.ts AUDIO_EXTENSIONS | |
| sound | Import routes | C/AssetsTab.tsx:35; A/assets.ts:187; C/SoundTab.tsx SoundPicker | |
| sound | Types, filter | A/assetTypes.ts; C/AssetsTab.tsx:17; {ui.assetTypes.music} {ui.assetsTab.sounds} | |
| sound | Three choices | C/SoundTab.tsx ChannelSection; {ui.sound.continue} {ui.sound.chooseMusic} {ui.sound.stop} | |
| sound | Fade 0-10 | S/sound.ts SOUND_FADE_MAX | |
| sound | Picker kinds | C/SoundTab.tsx CHANNEL_KINDS | `ambience: ['sound','music']` |
| sound | Up to 6; seen moments | S/sound.ts SOUND_EFFECTS_MAX; S/scenes.ts:172-173; C/SoundTab.tsx SoundTab | `momentIsSeen` |
| sound | Voice on dialogue; stops at next | C/SoundTab.tsx SoundTab; R/game.ts playMomentSound; R/audio.ts setVoice | |
| sound | Across scenes | S/sound.ts header; R/game.ts playMomentSound; {ui.sound.musicHelp} | |
| sound | Not scoped | A/scenes.ts:549 | `editMoment` |
| sound | Bands; dashes; click | C/SoundTab.tsx SoundRows; styles.css:6114; S/sound.ts soundBands | `is-inherited` |
| sound | Editor follows list order | S/sound.ts soundAt comment | |
| sound | Title music | C/GameUIInspector.tsx:474; R/game.ts playScreenSound | |
| sound | Skip/load no one-shots | R/game.ts playMomentSound | `heard = !cameraRestored && mode !== 'skip'` |
| sound | Auto waits for voice | R/game.ts:782 | `audio?.voiceBusy()` |
| sound | Volumes only with sounds; ambience on Sounds | R/optionsScreen.ts:94; R/game.ts:139,206; R/audio.ts setChannel | `hasSound`, `channel === 'music' ? 'music' : 'sounds'` |
| sound | Browser autoplay | R/audio.ts header, retryRefused | |
| sound | Demo 5 sounds | S/demoLimits.ts | `sounds: 5` |
| credits | Off by default; switches on | S/schema.ts CreditsThemeSchema | `enabled false`, `onTitleScreen true`, `afterEnding true`, `novelWorksMention true` |
| credits | Button on title | R/game.ts:707-708; {rt.game.credits} | |
| credits | After Ending moment or The End | R/game.ts:376-377 (commit 793b0a8) | `leavingAnEnding` |
| credits | Title after | R/game.ts:231-236; R/player.ts:88,92 | `send advance` -> TITLE |
| credits | Title, author, lines | R/creditsScreen.ts creditsLines | |
| credits | 30 lines, empty ignored, arrows | S/contentWarning.ts:23; R/creditsScreen.ts; C/GameUIInspector.tsx:366-369 | |
| credits | Colors, style, reset | C/GameUIInspector.tsx:389-400,109 | |
| credits | Rolls, stops; Back, Esc, Enter, Space | R/creditsScreen.ts CSS, onKeyDown; {rt.credits.back} | |
| credits | Reduced motion and preview still | R/creditsScreen.ts | `still = !interactive \|\| reducedMotion` |
| chapters | Mark on a scene, optional name | C/SceneInspector.tsx:51-60; {ui.sceneInspector.startsChapter} | |
| chapters | Default name | R/chaptersScreen.ts chapterTitle; {rt.chapters.chapterNumber} | |
| chapters | Lasts to next, list order, 50 | S/chapters.ts; {ui.sceneInspector.chapterHelp} | `CHAPTERS_MAX = 50` |
| chapters | Delete scene removes | S/scenes.ts:140-141 | |
| chapters | Title button if at least one | R/game.ts:703-704 | `chapterList.length > 0` |
| chapters | Locked shows ??? | R/chaptersScreen.ts refresh; {rt.chapters.locked} | |
| chapters | Reached however | R/game.ts:396,446,506-510 | `markChapterReached` |
| chapters | First moment, starting values | R/game.ts:249; R/player.ts:80-85,159-163 | `momentId: null`, `startingMemory` |
| chapters | Kept per game, test apart | R/chaptersScreen.ts createChapterStore; packages/runtime/player/main.ts:122; C/PlayOverlay.tsx:109 | `'test'` space |
| chapters | Look, reset | C/GameUIInspector.tsx:281-302,109 | |
| chapters | Preview samples, last locked | A/gameUIPreview.ts:180-191 | |
| page | claim | proof (file:line or {ui.key}) | code |
|---|---|---|---|
| tour-of-the-editor | Windows menu button first in top bar | components/AppMenuButton.tsx:8; TopBar.tsx:62 | `{ui.appMenuButton.menu}` |
| tour-of-the-editor | Assets tab holds pictures, videos, sounds | AssetsTab.tsx:16-17,35 | `allowVideo: true, allowAudio: true` |
| tour-of-the-editor, staging | Above game screen: background, + Character, zone tool on exploration, Visual/Script | Stage.tsx:70-93 | `canvas-toolbar` |
| tour, staging | Floating bar keeps expression and outfit only | Stage.tsx:385-393 | `ExpressionPicker`, `OutfitPicker` |
| staging | Outfit in the bar only with outfits | StageControls.tsx:259 | `outfitsOf(character).length === 0` returns null |
| tour | Chart shows fewer rows on short window (780) | Timeline.tsx:356-364 | `height < 780 ? ... : 5` |
| tour, timeline, moments, first-novel, choices, endings, exploration | Header has Dialogue and Other; Other lists kinds with help | Timeline.tsx:27-62,130,152-161 | `{ui.moments.dialogue}`, `{ui.timeline.addOther}` |
| tour, timeline, moments | Duplicate and delete icons in timeline header and right-click | Timeline.tsx:163-180; contextMenus.ts:139-147,168 | `duplicateCurrentMoment`, `deleteMoment` |
| tour, timeline | Sound rows under chart when the scene has sounds | Timeline.tsx:221; SoundTab.tsx:316-321 | `SoundRows`, `rows === 0 ? 0` |
| tour, moments | Four tabs and their contents | MomentInspector.tsx:49-54,127-292 | `{ui.inspectorTabs.text}`, `{ui.inspectorTabs.image}`, `{ui.inspectorTabs.effects}`, `{ui.sound.tab}` |
| tour, staging | Panel of a character on stage | Inspector.tsx:58-60; StageCharacterInspector.tsx:26-101 | `{ui.inspector.characterOnStage}` |
| first-novel | + Character button label | StageControls.tsx:311,336 | `{ui.stageControls.character}` |
| welcome, index | Feature list: outfits, ambience, camera, effects, sound, rich text | CHANGELOG.md 0.8.0-beta; MomentInspector.tsx:229,269,282 | release notes |
| guided-tour | Step 5 text | {tx tutorial.background.text}; Tutorial.tsx:18 | `tutorial.background.text` |
| guided-tour | Step 7 highlights the scope switch | Tutorial.tsx:20; `tutorial.persist.text` | `{ui.stage.scopeOnlyHere}` |
| projects-screen, saving | assets folder holds pictures, videos, sounds; all deleted files moved | assets.ts:104,218 | `deletedFileNames` |
| demo-edition | 5 scene export limit; other overruns listed in the window | NovelWorks-demo/packages/shared/src/demoLimits.ts:7,72-75; NovelWorks-demo/apps/editor/src/preload/edition.ts:61-66 | `exceedsDemoLimit`, `demoLimitMessage` |
| demo-edition | Limits 3/2/2/5/5/3 | demoLimits.ts DEMO_LIMITS | `{ characters: 3, outfits: 2, cameraShots: 2, sounds: 5, variables: 5, items: 3 }` |
| demo-edition | 10 of 25 effects, two per category | demoLimits.ts DEMO_EFFECTS; packages/shared/src/effects.ts:3-9 | `EFFECT_NAMES` 5x5 |
| demo-edition | 2 of 5 particles: rain, snow | demoLimits.ts DEMO_PARTICLES; effects.ts:12 | `PARTICLE_IDS` |
| demo-edition | Limit window buttons; Steam demo wishlist | NovelWorks-demo/.../DemoLimitDialog.tsx:12-26,46-52 | `{ui.demoLimit.continue}`, `{ui.demoLimit.wishlist}` |
| demo-edition | Locked effect shows a padlock, can be tried, not added | NovelWorks-demo/.../EffectsWindow.tsx:134-143,202 | `Lock`, `showDemoLimit` |
| demo-edition | Limits stop adding only; over-limit project opens, not exported | demoGate.ts:3; `demoLimit.body`; edition.ts:57 | `demoExportBlocked` |
| concepts/stage | Ambience, camera, particles carry over | packages/shared/src/schema.ts:188-193; MomentInspector.tsx:284 | `StageChangeSchema` |
| concepts/stage, staging | Scope switch in Image, Effects, character panel | StoryViewSwitch.tsx:28; MomentInspector.tsx:209,267; StageCharacterInspector.tsx:28 | `StageScopeSwitch` |
| concepts/stage, staging | On stage bar in Image tab | MomentInspector.tsx:234-238 | `CastBar` |
| concepts/stage | Chart bar breaks on outfit and ambience | packages/shared/src/stageChange.ts:318-320 | `c.outfitId`, `stage.ambience?.id` |
| concepts/stage | Right-click Outfit when outfits exist | contextMenus.ts:188-203 | `{ui.contextMenus.outfit}` |
| concepts/stage, staging | Start banner in Image tab | MomentInspector.tsx:210 | `SceneStartBanner` |
| how-stories-branch | Where this leads in Text tab, above preview in Script | MomentInspector.tsx:171-175; ScriptMode.tsx:303 | `FlowStrip` |
| staging | Apply to following in Image tab | MomentInspector.tsx:226 | `{ui.momentInspector.applyToTheFollowingMoments}` |
| staging | Character controls and keys | StageCharacterInspector.tsx:27,56,66,80-94 | `{ui.stageCharacterInspector.forward}` etc. |
| staging | Remove follows the scope switch | scenes.ts:671-672 | `mode?: StageScope` |
| staging | Fit badge and More menu are gone | Stage.tsx:70-93; catalog has no stage.more | absence |
| moments-and-dialogue | Text and speaker in Text tab | MomentInspector.tsx:135-155 | `{ui.momentInspector.speaker}` |
| moments-and-dialogue | No Delete button in the moment panel | MomentInspector.tsx (none); Timeline.tsx:172-180 | absence |
| characters | Wardrobe button under Outfits | CharacterInspector.tsx:177-193 | `{ui.outfits.heading}`, `{ui.wardrobe.open}` |
| assets | Extensions | apps/editor/src/main/projectFiles.ts:77-78; packages/shared/src/sound.ts:10 | `IMAGE_EXTENSIONS`, `VIDEO_EXTENSIONS`, `AUDIO_EXTENSIONS` |
| assets | 50 MB pictures, video and sound never refused for size | projectFiles.ts:120,127-138 | `MAX_IMAGE_BYTES` |
| assets | 40 MB video message | assets.ts:14,116-118; `assets.heavyVideo` | `HEAVY_VIDEO_BYTES` |
| assets | Video accepted where allowVideo | assets.ts:26,41; AssetsTab.tsx:35; StageControls.tsx:92,101; assets.ts:187 | `allowVideo` |
| assets | Sound tab import | assets.ts:29-30 | `options.sound` |
| assets | Video type limited to Background/CG; default background | ImportDialog.tsx:130; assets.ts:70; assetTypes.ts isFullScreenType | `isFullScreenType` |
| assets | Sound guess at 1 MB | assets.ts:15,129-131 | `SHORT_SOUND_BYTES` |
| assets | Clothing, Music, Sound, Voice types | assetTypes.ts ASSET_TYPES | `{ui.assetTypes.clothing}`, `{ui.assetTypes.music}`, `{ui.assetTypes.sound}`, `{ui.assetTypes.voice}` |
| assets | Expression picker only sprites | ImagePicker.tsx default `categories = ['sprite']`; CharacterInspector.tsx:256-262 | default prop |
| assets | Sounds filter, audio player, Delete sound | AssetsTab.tsx:17; AssetInspector.tsx:21,66 | `{ui.assetsTab.sounds}`, `{ui.assetInspector.deleteSound}` |
| copy-paste | Duplicate icon in timeline; outfit names carried | Timeline.tsx:163-171; clipboardRefs.ts:11,135-139 | `outfits?: Record` |
| scenes | Chapter switch and name; list order | SceneInspector.tsx:50-64; packages/shared/src/chapters.ts:16-20 | `{ui.sceneInspector.startsChapter}` |
| notes | Note in Text tab | MomentInspector.tsx:177; scenes.ts:642-645 | `setInspectorTab('text')` |
| script-mode | Ambience, camera, effects, sounds kept | packages/shared/src/script/resolve.ts:111-122 | `old?.effects`, `old?.sound` |
| script-mode-lines | `outfit` word, `outfit default` | keywords.ts:18-19; generate.ts:57; catalog `script.kw.outfit`, `script.kw.defaultOutfit`, `script.help.ex.showOutfit` | `kw('outfit')` |
| variables | Variable shown in a line | MomentInspector.tsx:83-124 | `insertInRichField` kind variable |
| endings | Credits roll after an ending when on | packages/runtime/src/game.ts:375-378; schema.ts:620; GameUIInspector.tsx:336 | `{ui.credits.afterEnding}` |
| page | claim | proof (file:line or {ui.key}) | code |
|---|---|---|---|
| game-ui/title-screen | Four templates; set only background color and button style | {ui.templates.heading}; packages/shared/src/templates.ts:8-17 | `TITLE_TEMPLATE_VALUES` |
| game-ui/title-screen | One undo step; card highlighted while matching | apps/editor/src/renderer/src/components/GameUIInspector.tsx:422,429 | `set({ ...values })`, `aria-pressed={current === id}` |
| game-ui/title-screen | Music section: choose, volume, remove | GameUIInspector.tsx:473-475; SoundTab.tsx:270-298; {ui.sound.chooseMusic} {ui.sound.volume} | `kinds={['music']}` |
| game-ui/title-screen | Music waits for intro; moments take over | packages/runtime/src/game.ts:551,582-590,564-568 | `introPending`, `setChannel('music', cueOf(project.theme.title.music)…)` |
| game-ui/title-screen, publish/* | Browsers block sound until first click or key | packages/runtime/src/audio.ts:7,34,75-80 | `UNLOCK_EVENTS` |
| game-ui/title-screen | Chapters and Credits buttons and conditions | game.ts:703-709 | `chapterList.length > 0`; `theme.credits.enabled && theme.credits.onTitleScreen` |
| game-ui/dialogue-box | Templates change only position, margin, width, height | packages/shared/src/templates.ts:22-29 | `Pick<DialogueTheme,'position'\|'margin'\|'width'\|'height'>` |
| game-ui/dialogue-box | Five colors of the words | GameUIInspector.tsx:519-524; packages/shared/src/richText.ts:15-16; {ui.richText.palette} | `RICH_COLOR_SLOTS = 5` |
| game-ui/game-ui-editor | Credits and Chapters in the list, before Title screen | apps/editor/src/renderer/src/gameUI.ts:10-12 | `GAME_UI_SCREENS` |
| game-ui/fonts-and-colors | Arriving/leaving is on the Fonts & colors screen (code has no "General" screen) | GameUIInspector.tsx:143-147; {ui.gameUI.fontsColors} | `effects.defaultsTitle` in `GlobalSettings` |
| game-ui/fonts-and-colors | Default is "At once" | GameUIInspector.tsx:1022-1023; packages/shared/src/schema.ts:447-448 | `.optional()` |
| game-ui/ending-screen | Credits after The End and after an Ending moment, then title | game.ts:375-380,231-235 | `leavingAnEnding` |
| game-ui/options, player/options-and-accessibility | Volumes only if the game has sounds; 0-100 step 5 | packages/runtime/src/optionsScreen.ts:94-96,191-194; game.ts:139,206 | `hasSound: soundFiles.size > 0` |
| player/options-and-accessibility | Sounds = ambience + sound effects; default 100 | packages/runtime/src/playerOptions.ts:21,36-38 | `soundVolume` |
| player/options-and-accessibility | Reduced motion: text instant, letters still | playerOptions.ts:52-54; game.ts:608; render.ts:253 | `liveText: interactive && !reduced` |
| player/options-and-accessibility | Reduced motion: camera last shot, no handheld | game.ts:608; render.ts:670,680,742-743 | `if (!playing \|\| atEnd) place(last…)` |
| player/options-and-accessibility | Reduced motion: no effects, particles still | game.ts:608,614; render.ts:790 | `if (reduced \|\| cameraRestored \|\| mode === 'skip') draw([])` |
| player/options-and-accessibility | Reduced motion: credits do not roll | creditsScreen.ts:87 | `const still = !interactive \|\| options.reducedMotion` |
| player/options-and-accessibility, text-reveal | Screen reader gets plain words | game.ts:~342 liveLine; resolve.ts:165 | `plainRich(content.text, value)` |
| player/text-reveal | First click finishes text, effects, camera; particles continue | game.ts:1064-1069,1074,1212; effects.ts:32-43 | `completeMoment` |
| player/text-reveal | Choice key only finishes the text | game.ts:1220 | `completeReveal()` |
| player/text-reveal | Pauses stop the text; Instant ignores them | game.ts:341; reading.ts:208-214 | `richPauses`; `shown = instant ? graphemes.length : 0` |
| player/text-reveal | Shake and wave move | render.ts:577-580,877 | `.vne-ch-shake`, `.vne-ch-wave` |
| player/auto-and-skip | Skipped moments: no effects, voices, sound effects | game.ts:571,614 | `const heard = !cameraRestored && mode !== 'skip'…` |
| player/auto-and-skip | Auto waits for voice, then 0.6 s, speed ignored | game.ts:782,789,1314 | `AUTO_AFTER_VOICE_MS = 600` |
| player/auto-and-skip | Next line cuts the voice | game.ts:572-573; audio.ts:22 | `audio.setVoice(voice)` |
| player/keys-and-touch | Esc closes Credits and Chapters; Enter/Space close Credits; up/down in Chapters | creditsScreen.ts:120-138; chaptersScreen.ts:141-153 | `onKeyDown` |
| player/history | Plain words | history.ts:24; resolve.ts:165 | `dialogue.text` is `plainRich` |
| player/save-and-load | Save holds music and ambient sound | packages/runtime/src/player.ts:481-482 | `sound?: SoundState` |
| player/save-and-load | Chapters kept separately | game.ts:143; chaptersScreen.ts createChapterStore | `chapterStore` |
| player/save-and-load | Loaded moment: last shot, no effects/voice/sfx | game.ts:445,571,614 | `cameraRestored = true` |
| testing/play | Esc closes Credits and Chapters first | game.ts:256,1293; PlayOverlay.tsx:128-132 | `extraOpen()` in `menuOpen` |
| testing/test-saves | Test chapters have no clear button | PlayOverlay.tsx:50-51,64,109 | only reads and saves are cleared |
| testing/problems | No warnings for outfits, ambience, camera, effects, sound | packages/shared/src/problems.ts:12-70 | `findMomentProblems` covers none |
| publish/web-export | Demo refuses projects over any limit | apps/editor/src/main/exportIpc.ts:68; preload/edition.ts:57-65; demoLimits.ts exceedsDemoLimit | {tx}`demoLimit.exportOver` |
| publish/web-export | Used pictures, videos, sounds; worn pieces only | packages/shared/src/export.ts:11-59 | `usedAssetIds` |
| publish/web-export | Files copied as is | apps/editor/src/main/webExport.ts:109-111 | `readFile` |
| publish/web-export | 40 MB import warning, never refused | apps/editor/src/renderer/src/assets.ts:13-14; {tx}`assets.heavyVideo` | `HEAVY_VIDEO_BYTES` |
| publish/web-export | mp4/webm/mp3/ogg not compressed; others if smaller | apps/editor/src/main/zip.ts:19-21 | regex |
| publish/web-export | .zip max 4 GB | zip.ts:33-34 (32-bit sizes, no zip64) | `writeUInt32LE` |
| reference/keyboard-shortcuts | Cmd+B, Cmd+I | RichTextField.tsx:269-271 | `toggleOnSelection` |
| reference/keyboard-shortcuts | Arrows nudge a wardrobe piece | WardrobeWindow.tsx:145,163 | `keys` |
| reference/script-syntax | Outfit words | packages/shared/src/script/keywords.ts:18; generate.ts:57; {ui.script.kw.outfit} | catalogs `script.kw.outfit`, `script.kw.defaultOutfit` |
| reference/script-syntax | Rich tags in 7 languages, read in all | script/richTags.ts:7-16; catalogs `script.tag.*` | `tagLookup` |
| reference/script-syntax | Color 1-5 or #rrggbb; pause 0.1-5, default 0.5; `{{` | richText.ts:14,19,21 | `RICH_PAUSE`, `validColor` |
| reference/glossary | Up to 6 shots | packages/shared/src/camera.ts:6 | `CAMERA_SHOTS_MAX = 6` |
| reference/project-format | Format 26; what 18-26 added | schema.ts:15; packages/shared/migrations/v17-to-v18.ts … v25-to-v26.ts (header comments) | `CURRENT_SCHEMA_VERSION = 26` |
| reference/project-format | deleted-assets holds any deleted asset | apps/editor/src/main/backups.ts:171 | "Moves the files of deleted assets" |
| reference/faq | MP3/OGG/WAV; GIF/WebP; MP4/WebM looping, muted | shared/src/sound.ts:10; main/projectFiles.ts:77-78; render.ts:536-537 | `AUDIO_EXTENSIONS` |
| reference/licenses-and-editions | Limits and allowed effects | NovelWorks-demo/packages/shared/src/demoLimits.ts:DEMO_LIMITS, DEMO_EFFECTS, DEMO_PARTICLES | |
| reference/licenses-and-editions | Limits only stop adding; over-limit project cannot export | demoLimits.ts comment, exceedsDemoLimit; {tx}`demoLimit.body` | |
| reference/licenses-and-editions | Steam edition needs no key | apps/editor/src/preload/edition.ts:35-36,46-47 | `usesLicense = edition === 'full'` |
| reference/licenses-and-editions | Demo splash and corner logo | packages/runtime/player/main.ts:85,94-100 | `DEMO_SPLASH_TEXT`, `DEMO_CORNER_TEXT` |
