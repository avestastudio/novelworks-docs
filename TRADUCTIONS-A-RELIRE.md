# Traductions à faire relire par des natifs

Les 73 pages anglaises sont traduites en 6 langues (fr, es, pt-BR, zh-CN, ru, ja) par Claude, puis relues par un second agent indépendant par langue (termes, liens, chiffres, anglais oublié). **Aucune n'a été relue par une personne native.**
Les **noms de boutons** ne sont pas tapés à la main : ils viennent des catalogues de l'éditeur (`data/ui/`), donc ils sont exacts. À relire : le ton et les phrases d'explication.

## État par langue
| Langue | Pages | Relecture agent indépendant | Relue par un natif |
|---|---|---|---|
| fr | 73/73 | oui | non |
| es | 73/73 | oui | non |
| pt-BR | 73/73 | oui | non |
| zh-CN | 73/73 | oui | non |
| ru | 73/73 | oui | non |
| ja | 73/73 | oui | non |

Limite honnête : les relecteurs n'ont pas tout lu ligne à ligne (es ≈ 60 %, ja : surtout par scripts ; zh-CN lu en entier mais comparé à l'anglais seulement en cas de doute). Les chiffres et limites ont été comparés par script : identiques à l'anglais.

## Mots choisis (une seule traduction par notion, tirée du catalogue de l'éditeur)
| Notion | es | pt-BR | zh-CN | ja |
|---|---|---|---|---|
| scène | escena | cena | 场景 | シーン |
| moment | momento | momento | 片段 | カット |
| scène à l'écran (stage) | escenario / « en escena » | palco / « em cena » | 舞台 / 在台上 | ステージ |
| décor | fondo | cenário | 背景 | 背景 |
| zone | zona | zona | 区域 | エリア |
| fin | Final | final | 结局 | エンディング |
| mode Script | modo Guion | modo Roteiro | 剧本模式 | スクリプトモード |

(fr et ru : voir `data/glossary/fr.md` et `data/glossary/ru.md`.)

## Doutes à trancher avec un natif
- **Vocabulaire « stage »** : le catalogue de l'éditeur mélange deux mots dans plusieurs langues (es escenario/en escena, zh 舞台/在台上, ja ステージ/舞台 corrigé). Un mot par langue a été imposé aux pages ; vérifier que les pages « Les personnages restent en scène » sonnent juste.
- **es** : « Entrada » (élément de menu), « tira » (bande) peu usuels ; « recorrido guiado » (didacticiel) et « visita guiada por el editor » (page) très proches.
- **pt-BR** : « recursos » désigne à la fois Assets et Fonctions (ambigu dans le catalogue) ; « Criado com » / « Feito com » pour le même écran, tels que dans le catalogue ; ton « te / seu » un peu familier ; « visual novel » au masculin.
- **zh-CN** : 笔记 (prose) vs 备注 (messages du catalogue) mélangés ; 片段 vs 时刻 (messages cités tels quels) ; 玩家 vs 你 ; 游玩 vs 试玩.
- **ja** : 小道具 (type de ressource) vs 小物 (inspecteur) ; 物語 vs ストーリー ; ton です・ます dense sur les pages Exploration et Script ; le catalogue mélange ゾーン et エリア (les messages cités du panneau Problèmes disent encore ゾーン) ; ：/: dans les titres.
- **ru** : le catalogue mélange « на сцене » et « на площадке » (les pages disent « на сцене ») ; « Эмоция » (glossaire) vs « выражение » (messages du Script) ; « Сделано в / Создано в NovelWorks » (écran) à choisir ; « заставка » désigne à la fois splash et intro ; « Ресурсы » à côté de « картинки ».
- **Liens** : les liens courts en milieu de phrase (« Si… », « mode Guion ») ne reprennent pas le titre complet de la page cible, volontairement.
- **Tableaux générés** (raccourcis, mots du Script) : la page anglaise est générée par `scripts/gen-reference.mjs` ; les versions traduites sont maintenues à la main (le générateur ne les touche pas). Le mot « or » du raccourci Rétablir et les en-têtes « Word for » sont traduits dans les pages, pas dans le générateur.

## Titres ajoutés par Claude (non relus)
« Key ideas » → fr « Les idées clés », es « Ideas clave », pt-BR « Ideias-chave », zh-CN « 核心概念 », ru « Ключевые идеи ». Titre « Your first visual novel » (ancien : « Make your first visual novel in 15 minutes »).

## Texte hors catalogue
- « Export for Web… » : libellé de la branche demo-build, absent des catalogues non anglais (affiché en anglais partout, avertissement « pending merge » dans `check:docs`).
- Les captures d'écran et schémas sont en anglais pour toutes les langues (décision de l'utilisateur).
- Les mots du Script dans les exemples de code ne sont pas traduits (l'éditeur comprend tous les mots) ; la page « Script syntax in 7 languages » donne chaque langue.
