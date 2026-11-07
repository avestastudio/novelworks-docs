# Vérification : d'où vient chaque affirmation

Une ligne par affirmation non triviale d'une page. Colonnes : page · affirmation · preuve · état.
**Preuve** = fichier du code (`chemin:ligne`) ou clé de texte (`{ui.clé}`), ou « vérifié dans l'appli le AAAA-MM-JJ (copie du projet X) ».
**État** : `code` (prouvé par le code seulement) · `appli` (fait et vu dans l'appli) · `à vérifier` (aucune preuve : à regarder à la main, jamais publié comme certain).

Les noms de boutons ne sont **jamais** recopiés : on écrit `{ui.clé}` ou `{rt.clé}` ; le build les remplace par le nom exact dans la langue de la page, et échoue si la clé n'existe pas (scripts/check-docs.mjs).

| Page | Affirmation | Preuve | État |
|---|---|---|---|
| _(vide : D0 n'a écrit aucune page)_ | | | |

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
