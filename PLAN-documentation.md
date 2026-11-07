# PLAN — documentation en ligne exhaustive de Novelworks

Statut : **plan à valider, aucune page écrite.** Rien n'est poussé. Partie 2 (Steam) : pas touchée, j'attends ta confirmation explicite.

## 1. Ce que j'ai trouvé (important, ça change le plan)

**Un site de documentation existe déjà.** C'est un site Astro Starlight (`novelworks-docs`, dépôt public `avestastudio/novelworks-docs`, publié sur `avestastudio.github.io/novelworks-docs/`, ouvert par Aide → Documentation).
- 35 pages en anglais (≈ 4 900 mots, soit ≈ 140 mots par page : des résumés), traduites en fr, es, pt-br, zh-cn, ru (175 pages). Un script `check-translations` bloque le build si une traduction manque ou si un lien interne est cassé.
- Il date d'avant : Mode Script, menu rapide, Options du joueur, intro + avertissement, « les personnages restent en scène », les « Si… » à plusieurs cas, les fins, les options conditionnelles, le tutoriel à 14 étapes, l'écran des projets, la copie de sécurité avant mise à jour… (je l'ai vérifié par recherche de mots dans les 35 pages : « Quick menu », « dyslexia », « content warning », « Tidy up », « Theme » n'apparaissent nulle part).
- Son `TODO.md` liste des affirmations « écrites depuis le code mais pas vérifiées dans l'appli » (carte, clic droit des personnages, Game UI, licence activée, hub, export, liste des avertissements…). Je les reprendrai dans la liste « à vérifier ».
- Le dossier local `/Users/mac/RiderProjects/test/novelworks-docs` **n'est pas un dépôt git** (une copie aussi dans Téléchargements). Pour travailler « sur une branche à part », je propose de cloner le dépôt dans un nouveau dossier (question Q3).
- Convention actuelle : « garder les noms de boutons en anglais ». **Elle n'a plus de sens** : l'éditeur existe en 7 langues. Je propose de citer chaque bouton avec son nom exact dans la langue de la page (voir §5).

## 2. Structure proposée (≈ 70 pages ; les 35 existantes sont réécrites, leurs adresses gardées)

Chaque page : à quoi ça sert → pas à pas → cas particuliers et limites → messages d'avertissement → raccourcis → pour aller plus loin (liens).

1. **Premiers pas** : Bienvenue (ce qu'est Novelworks, les 4 zones) · Installer et activer · Édition démo / complète · L'écran des projets et « Nouveau projet » · Visite de l'éditeur · Votre premier roman visuel (pas à pas) · Enregistrer, copies de sécurité et annuler · Réglages de l'éditeur (thème, langue, correcteur, réglages du projet) · La visite guidée (les 14 étapes).
2. **Les idées clés** (les pages-images) : *La scène de théâtre* (les personnages restent en place) · *Scènes, moments, frise* · *La mémoire du jeu* (Score, Fait, objets) · *Comment l'histoire se ramifie* (tableau des personnages et ligne « Branches »).
3. **Écrire** : Scènes · Moments et dialogues · Personnages et expressions · Images (décors, sprites, CG, accessoires, interface, avatars) · Mise en scène (réglage « À partir d'ici / Ce moment seulement », barre « En scène », tableau de la scène, clic droit d'un personnage, « Commencer comme la fin de… ») · **Mode Script** (3 pages : bases, toutes les lignes, conditions/choix) · Importer / exporter un script · Chercher et remplacer · Copier, coller, dupliquer · Notes.
4. **Embranchements** : Choix (effets, option conditionnelle) · Variables (Score / Fait, « Faire retenir quelque chose au jeu ») · « Si… » (cas, et / ou, sinon, « Essayer ») · Sauts · Fins et vue « Fins du jeu » · Carte de l'histoire (filtres, résumé et état des scènes, liens, « Ranger ») · « Jusqu'à +5 » (ce que tes choix peuvent donner).
5. **Fonctions de jeu** : Bibliothèque de fonctions · Exploration · Inventaire · Carte (lieux, disponibilité).
6. **Interface du jeu (Game UI)** : vue d'ensemble + une page par groupe : Polices et couleurs · Écran titre · Boîte de dialogue · Choix · Pause · Fin · Historique · Sauvegarde et chargement · Menu rapide · Options · Intro · Avertissement de contenu · Inventaire · Bouton Carte · Notifications.
7. **Ce que vit le joueur** : Sauvegarder / charger · Historique · Auto et Skip · Texte qui s'affiche · Menu rapide · Options et accessibilité (taille du texte, vitesse, police dyslexie, contraste) · Touches et écran tactile dans le jeu.
8. **Tester** : Jouer / Jouer à partir d'ici / Tester la carte · Outils du mode Jouer (variables et objets, lignes lues, sauvegardes de test, Redémarrer, écran de démarrage, ouvrir la carte) · **Liste complète des avertissements** (la page « Problèmes », complétée depuis `problems.ts`).
9. **Exporter et publier** : Export web · itch.io. (Steam : seulement quand ce sera vrai ; rien sur ce qui n'existe pas.)
10. **Référence** : Raccourcis (tous, Mac et Windows) · Tous les menus · Syntaxe du Script (7 langues) · Glossaire · Format des projets, compatibilité et sauvegardes · FAQ · Dépannage et messages · Signaler un bug · Licences et éditions.

## 3. Audit : tout ce qui doit être documenté

Méthode : inventaire **par le code** (menus natifs, catalogues de textes, composants, tableau de raccourcis, registre des fonctions), puis comparaison avec `NOUVEAUTES-A-DOCUMENTER.md`. **Limite honnête :** à ce stade je n'ai pas encore cliqué sur chaque bouton dans l'appli ; ce contrôle se fait page par page à l'écriture (§4).

**Ce que `NOUVEAUTES-A-DOCUMENTER.md` couvre** (la refonte seulement) : sécurité des projets · personnages qui restent en scène · raccourcis de copier-coller · confort de mise en scène · variables Score / Fait et « Si… » · embranchements visibles · « Si… » à plusieurs cas · Script (et / ou / sinon si) · « jusqu'à +5 » · Fins du jeu · option conditionnelle · tutoriel.

**Ce que j'ai trouvé en plus** (absent du fichier ; une partie n'est que sommairement dans l'ancien site) :
- *Menus natifs* : Fichier (Nouveau, Ouvrir, Enregistrer, Restaurer une copie, Importer / Exporter un script, Exporter pour le web, Fermer), Édition (annuler/rétablir, chercher et remplacer, couper/copier/coller, langue du correcteur), Affichage (thème sombre/clair/système, langue, plein écran), Fenêtre, Aide (Documentation, revoir la visite, raccourcis, Activer, Signaler un bug, À propos).
- *Écran des projets* (recherche, récents, localiser, retirer de la liste), *Nouveau projet* (dossier, fonctions à cocher), premier lancement : *choix de la langue*.
- *Barre du haut* : modes Histoire / Carte de l'histoire / Game UI, Visuel / Script, Jouer / Jouer à partir d'ici / Tester la carte, Enregistré · auto, retour aux projets, réglages du projet (titre, auteur, langue du jeu, taille d'écran, longueur de lecture).
- *Panneau gauche* : Scènes, Images, Personnages, Variables, Objets ; Fonctions ; glisser-déposer d'images ; panneaux redimensionnables.
- *Les 8 sortes de moment* et leurs inspecteurs (dont Exploration : zones, formes, accessoires, actions, verrouillage ; Objet ; Afficher la carte).
- *Menus clic droit* (≈ 40 entrées : renommer, doublon, insérer avant/après, note, « Utilisé à N endroits », départ…).
- *Mode Jouer* : panneau Variables et objets, lignes lues, sauvegardes de test, Redémarrer, écran de démarrage, ouvrir la carte, clic droit = menu du jeu, Échap.
- *Jeu* : écran titre, pause, sauvegardes (12 emplacements, F5 / F9, autosauvegarde, Continuer), historique, Auto, Skip, texte qui s'affiche, **menu rapide** configurable, **Options** (taille, vitesse, vitesse Auto, police dyslexie, contraste), **intro** du créateur, **avertissement de contenu**, notifications, inventaire, carte.
- *Export* (dossier, plein écran, mobile, images manquantes, test dans le navigateur), *itch.io*, *éditions démo / complète*, *activation et désactivation de licence*, *À propos*, *signalement de bug*.
- *Copies de sécurité automatiques* toutes les 2 minutes + rotation, *historique d'annulation* (200 étapes, regroupement de la saisie), correctifs récents (Ctrl+Z, bouton « Supprimer cette condition », aperçu du Script).
- *Format* : versions 1 → 17, migrations, sauvegardes des joueurs.
- *Corrections du jour à intégrer* : l'étape 10 du tutoriel pointe le bouton « Choix » ; l'aperçu du Script ne clignote plus.

## 4. Méthode d'écriture et de vérification
1. **Une branche à part** dans le dépôt de la documentation (`docs-exhaustive`), jamais poussée. Une phase = un lot de pages = un commit relisible.
2. **Source de chaque affirmation** : je tiens un fichier `docs-verification.md` (page → affirmation → fichier ou clé de texte qui la prouve, ou « vérifié dans l'appli le … »). Pas de source = « à vérifier », la page le dit dans ma liste, pas dans le texte publié.
3. **Contrôle dans l'appli** : pour chaque page, j'ouvre l'appli sur une copie (avec les images) et je fais les étapes décrites.
4. **Noms de boutons** : un script extrait les libellés depuis les catalogues de l'éditeur (7 langues), et un test échoue si une page cite un bouton qui n'existe pas dans la langue de la page. Plus de noms recopiés à la main.
5. **Explications par l'image** : schémas simples en SVG (scène de théâtre ; tableau des personnages avec la ligne « Branches » ; frise ; carte de l'histoire ; ordre « Si… / sinon si / sinon »), sans capture de projet d'exemple.
6. **Liens** : le script existant bloque les liens cassés ; j'ajoute un contrôle « chaque page est dans la barre latérale » et « chaque raccourci du tableau du code apparaît dans la page Raccourcis ».
7. **`NOUVEAUTES-A-DOCUMENTER.md`** : je coche chaque ligne quand elle est traitée (page + section) ; à la fin, aucune ligne non cochée.

## 5. Langues
- **Anglais d'abord, complet et relu par toi**, puis traduction (fr, es, pt-BR, zh-CN, ru).
- **Japonais : je recommande de l'ajouter** (l'éditeur et le jeu sont déjà en japonais ; les boutons sont exacts, extraits des catalogues). Coût : une langue de plus à traduire (+ 1/6) et à faire relire. Je propose de le faire en dernier, après les 5 autres, sans retarder le reste.
- **`TRADUCTIONS-A-RELIRE.md`** : liste par langue des pages traduites par moi, avec la date, et ce qui demande un regard natif (ton, termes techniques « moment », « scène », « fin », noms des boutons).
- La traduction d'une page n'est faite qu'après validation de la page anglaise.

## 6. Découpage en phases (une validation de ta part à chaque phase)
- **D0** : cloner le dépôt, branche, scripts de contrôle (boutons, raccourcis, barre latérale), squelette de la nouvelle structure.
- **D1** Premiers pas + Idées clés · **D2** Écrire (dont Script) · **D3** Embranchements · **D4** Fonctions de jeu + Game UI · **D5** Joueur + Tester + Exporter · **D6** Référence · **D7** Traductions (5 langues, puis japonais si oui) · **D8** passage final : tout est coché, liens, build.
- À chaque phase : « ce que tu dois vérifier à la main » = lire la page dans le navigateur local, refaire les étapes dans l'appli.

## 7. Mes questions (toutes d'un coup)
- **Q1. Fusion de la phase C.** Les branches C1 → C4 et les deux correctifs (Ctrl+Z, aperçu du Script, étape 10) ne sont pas fusionnées dans `e2-quick-menu`. « La refonte est terminée » veut dire que tu les valides toutes ? Si oui, dis-le-moi par « validée, fusionne » et je les fusionne dans l'ordre. La documentation décrit l'appli finale.
- **Q2. Le site existant.** Je réécris et complète les 35 pages **en gardant leurs adresses** (recommandé), ou je repars d'une page blanche ?
- **Q3. Dépôt.** Le dossier local n'est pas un dépôt git. Je clone `avestastudio/novelworks-docs` dans un nouveau dossier et je travaille sur la branche `docs-exhaustive` (jamais de push). D'accord ?
- **Q4. Images.** « Sans projet d'exemple » : je comprends *pas de projet fourni avec l'appli et pas de capture d'une histoire entière*. Je peux utiliser des **captures de l'éditeur sur une copie de ton propre projet** (vues rognées sur l'interface) en plus des schémas, ou seulement des schémas ? (Recommandé : schémas + captures rognées de l'interface.)
- **Q5. Japonais.** Je l'ajoute, en dernier (recommandé) ?
- **Q6. Niveau de détail des pages « Référence ».** Un tableau exhaustif de tous les avertissements du panneau Problèmes (≈ tous ceux de `problems.ts`) et de tous les raccourcis, Mac et Windows : ok ?
