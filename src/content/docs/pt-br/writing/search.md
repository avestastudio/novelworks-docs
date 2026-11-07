---
title: Localizar e substituir
description: Pesquise no jogo inteiro, vá até cada resultado e substitua texto em todo lugar.
---

Abra a busca com **{ui.native.menu.edit} → {ui.native.menu.findAndReplace}** ou **Cmd+F** / **Ctrl+F**. O painel de busca ocupa o lugar das abas do painel da esquerda, e o cursor fica na primeira caixa. Feche com o X, ou aperte **Esc** em uma das caixas. A busca vale para o projeto inteiro, nunca para uma cena só.

![O painel de busca, com os resultados agrupados por cena.](/novelworks-docs/screenshots/search-panel.png)

## O que é pesquisado

- diálogos, perguntas e opções de escolha, nomes e textos de finais;
- rótulos de zonas de exploração, textos de examinar e textos de bloqueio;
- notas de momentos;
- nomes e resumos de cenas;
- nomes de personagens;
- nomes e descrições de itens.

Não são pesquisados: quem fala uma linha, nomes de variáveis, nomes de imagens e nomes de expressões.

## Buscar

Digite em **{ui.searchPanel.find}**. Uma linha abaixo diz “3 de 12” ou “Nenhum resultado”. Embaixo dela, os resultados ficam agrupados por cena (depois personagens, depois itens). Cada linha mostra onde está a ocorrência (“Momento 4 · Diálogo”, “{tx.characterInspector.characterName}”…) e um trecho curto com a ocorrência destacada. No máximo 500 resultados são listados: digite mais palavras para refinar a busca.

Duas opções refinam a busca:

- **{ui.searchPanel.matchCase}**: “Aa” não é “aa”. Desligada por padrão.
- **{ui.searchPanel.wholeWordsOnly}**: “{tx.gameUIPreview.mia}” mas não “Miami”. Desligada por padrão.

O texto que você digita é procurado exatamente como foi escrito. Não há padrões.

Clique em um resultado para ir até ele: o momento, a cena, o personagem, o item ou a zona fica selecionado. **Enter** vai para o próximo resultado e **Shift+Enter** para o anterior, e a busca dá a volta.

## Substituir

Digite o novo texto em **{ui.searchPanel.replaceWith}**.

- **{ui.searchPanel.replace}** substitui o resultado selecionado e vai para o próximo.
- O ícone na linha de um resultado (**{ui.searchPanel.replaceThisOne}**) substitui só aquele, e não avança.
- **{ui.searchPanel.replaceAll}** substitui todas as ocorrências no seu jogo. O NovelWorks primeiro pede que você confirme, dizendo quantas ocorrências há e que você pode desfazer. Uma substituição vazia remove o texto.

Uma substituição é ignorada se o texto mudou depois que a ocorrência foi encontrada. Substituir no jogo inteiro é feito em uma única ação, e um só **{ui.native.menu.undo}** desfaz tudo. Uma mensagem diz quantas ocorrências foram substituídas (“31 ocorrências substituídas.”).
