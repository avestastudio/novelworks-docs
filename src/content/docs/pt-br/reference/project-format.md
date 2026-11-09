---
title: Formato do projeto, compatibilidade e backups
description: O que há em uma pasta de projeto, como projetos antigos e novos são tratados, e como o seu trabalho é protegido.
---

## O que é um projeto

Um projeto é uma **pasta** que você pode copiar, mover ou guardar em backup como qualquer outra:

- `project.json`: o seu jogo inteiro, em um só arquivo (texto no formato JSON, com recuo de 2 espaços).
- `assets`: as imagens, os vídeos e os sons que você importou.
- `backups`: versões anteriores do `project.json`, e `backups/deleted-assets` para os arquivos que você apagou.

Cada vez que você salva, o NovelWorks grava o arquivo com segurança (em um arquivo temporário, que depois é renomeado), então uma falha durante o salvamento não o danifica.

## A versão do formato

O `project.json` tem uma **versão de formato**. Esta versão do NovelWorks grava o formato **26**. Cada vez que o formato mudou, o NovelWorks ganhou uma atualização automática, então todo projeto antigo ainda abre. Entre as mudanças:

| Formato | O que ele acrescentou |
|---|---|
| 2 | Opções da caixa de diálogo (cantos 9-slice, cor do texto, uma cor para todos os nomes) e o idioma da correção ortográfica. |
| 3, 4 | Notas do autor, posições no mapa da história, resumos de cenas e estado da escrita. |
| 5 | Momentos de exploração (zonas e objetos de cena). |
| 6 | Itens e recursos opcionais. |
| 7 | Posicionamento livre dos personagens. |
| 8 | O recurso Mapa. |
| 9 | Um identificador do jogo, para os saves dos jogadores, e a aparência das telas de Salvar e Carregar. |
| 10, 12, 13 | A aparência das telas de Histórico, de menu rápido e de Opções. |
| 11 | O mapa em seu próprio espaço. |
| 14 | As imagens de introdução e o aviso de conteúdo. |
| 15 | Os personagens ficam em cena: um momento guarda só o que ele muda. |
| 16 | Um Se… com vários casos. |
| 17 | Uma opção de escolha que aparece só quando uma condição é verdadeira. |
| 18 | [Créditos](/novelworks-docs/pt-br/game-ui/credits/). |
| 19 | [Capítulos](/novelworks-docs/pt-br/game-ui/chapters/). |
| 20 | [Roupas](/novelworks-docs/pt-br/writing/outfits/) e o guarda-roupa. |
| 21 | [Ambiente e cenários animados](/novelworks-docs/pt-br/writing/ambience-and-animated-backgrounds/). |
| 22 | A [câmera](/novelworks-docs/pt-br/writing/camera/), a profundidade e a imagem de primeiro plano. |
| 23 | Vários planos de câmera por momento. |
| 24 | [Texto formatado](/novelworks-docs/pt-br/writing/rich-text/) nas falas, e as cinco cores das palavras. |
| 25 | [Efeitos](/novelworks-docs/pt-br/writing/effects/) e partículas. |
| 26 | [Som](/novelworks-docs/pt-br/writing/sound/): música, som ambiente, efeitos sonoros e vozes. |

## Abrir um projeto antigo

- O NovelWorks atualiza o projeto **só na memória**. Antes de entregá-lo ao editor, ele salva uma **cópia exata** do `project.json` original em `backups`, com um nome como `project-2026-11-07_17-15-04-migration.json`, e confere se a cópia é idêntica.
- Se a cópia não puder ser feita, o projeto **não é aberto** e nada é alterado.
- Uma barra diz onde está a cópia (com **{ui.store.showCopy}**) e que você precisa salvar para manter a atualização. O projeto conta como não salvo.
- Se você abrir de novo sem salvar, a mesma cópia é reutilizada. Estas cópias “{tx.restoreBackupDialog.beforeUpgrade}” nunca são apagadas.
- Você pode voltar ao original com **{ui.native.menu.file} → Restaurar do backup…**.

Os saves dos jogadores nos seus jogos continuam legíveis: os saves apontam para cenas e momentos pela identidade deles.

## Abrir um projeto mais novo

Um projeto salvo por uma versão **mais nova** do NovelWorks não pode ser aberto: o NovelWorks avisa e pede que você atualize. Nada é alterado.

Se uma pasta não tem `project.json`, ou se o arquivo está danificado (não é um JSON válido), o NovelWorks avisa e não abre a pasta.

## Backups

Veja [Salvar, backups e desfazer](/novelworks-docs/pt-br/getting-started/saving-and-undo/): um backup antes de cada salvamento manual, no máximo um a cada 15 minutos no salvamento automático, os 20 mais recentes mais o mais recente de cada um dos últimos 7 dias.

## Editar o arquivo à mão

Você pode abrir o `project.json` em um editor de texto, mas não o edite enquanto o NovelWorks estiver com o projeto aberto, e faça uma cópia antes. O NovelWorks recusa um arquivo que não consegue ler, em vez de adivinhar.

## Demo e versão completa

As duas edições usam exatamente o mesmo formato. Veja [A demo gratuita](/novelworks-docs/pt-br/getting-started/demo-edition/).
