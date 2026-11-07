---
title: Cenas, momentos e a linha do tempo
description: Como uma história é organizada no NovelWorks, das cenas aos momentos.
---

## Cenas e momentos

Uma história é um conjunto de **cenas**, como capítulos. Uma cena é uma série de **momentos**, como slides, tocados em ordem. A maioria dos momentos é uma fala de diálogo, mas existem oito tipos.

![Uma cena como uma fileira de momentos: dois diálogos, uma escolha, um Se, um salto e um final.](/novelworks-docs/diagrams/moments-strip.svg)

| Tipo | O que faz | Os jogadores veem |
|---|---|---|
| **{ui.moments.dialogue}** | Uma fala de diálogo ou de narração. | Sim |
| **{ui.moments.choice}** | O jogador escolhe uma opção. Pode mudar variáveis e levar a outra cena. | Sim |
| **{ui.moments.condition}** | Leva a história para outro lugar dependendo de uma variável. | Não, o jogo verifica e segue em frente |
| **{ui.moments.jump}** | Vai direto para outra cena. | Não |
| **{ui.moments.ending}** | Mostra o nome do final e volta para a tela de título. | Sim |
| **{ui.moments.exploration}** | Sem caixa de texto: o jogador clica em zonas da imagem para olhar em volta, mudar variáveis ou ir para outra cena. | Sim |
| **{ui.moments.item}** | Dá itens ao jogador ou os tira, com um aviso curto. | Só o aviso |
| **{ui.moments.showMap}** | Abre o mapa na hora. | Só o mapa |

**{ui.moments.item}** e **{ui.moments.showMap}** só aparecem na lista quando os recursos Inventário e Mapa estão ligados. Veja [Exploração](/novelworks-docs/pt-br/features/exploration/), [Inventário](/novelworks-docs/pt-br/features/inventory/) e [Mapa](/novelworks-docs/pt-br/features/map/).

As cenas se ligam umas às outras **só por momentos**: as opções de uma escolha, os casos de um Se, um salto ou as zonas de uma exploração. Os momentos dentro de uma cena sempre tocam um depois do outro.

## A linha do tempo

Na parte de baixo da janela, a linha do tempo mostra os momentos da cena selecionada como cartões.

- O cabeçalho tem o nome da cena, o número de momentos e de palavras, e o resumo da cena, se você escreveu um. Clique no resumo para editá-lo no inspetor.
- Cada cartão mostra o tipo, quem fala (ou “Narrador”) e um breve resumo do que ele diz ou faz. Um cartão pode ter uma nota ou um aviso.
- Clique em um cartão para selecioná-lo e editá-lo na tela do jogo e no inspetor. Arraste os cartões para reordenar.
- Botões adicionam um momento **depois do selecionado**, um por tipo. Um cartão **+** no fim adiciona uma fala de diálogo.
- Dois ícones duplicam e apagam o momento selecionado. Apagar pede confirmação, a menos que o momento seja uma linha de diálogo vazia.
- Embaixo dos cartões, um gráfico mostra quem está em cena ([O palco](/novelworks-docs/pt-br/concepts/stage/)) e uma fileira mostra onde a história se ramifica ([Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/)).

### O jeito rápido de escrever

Na caixa de diálogo, **Enter** começa um novo momento com o mesmo palco. **Shift+Enter** adiciona uma linha dentro da mesma caixa.

## A cena inicial

O jogo começa na **cena inicial**, marcada com uma estrela na aba Cenas. Para mudá-la, use **{ui.scenesTab.makeStartScene}** em outra cena.

## Cenas que o jogador não consegue alcançar

Uma cena a que nenhuma escolha, condição, salto ou zona leva, a partir da cena inicial, é marcada como **{ui.scenesTab.unreachable}** na aba Cenas e tem um aviso. Veja [Problemas](/novelworks-docs/pt-br/testing/problems/).

## Resumo e status de escrita

Selecione uma cena para dar a ela um **{ui.sceneInspector.summary}**. Ele é só para você e aparece no mapa da história. Cada cena também tem um **{ui.sceneInspector.writingStatus}**: **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** ou **{ui.shared.outline.done}**. Se você não o definir, é **{ui.shared.outline.toWrite}** até que uma fala de diálogo tenha texto, e depois **{ui.shared.outline.draft}**.

## Mais sobre cenas

Veja [Cenas](/novelworks-docs/pt-br/writing/scenes/) e [Momentos e diálogo](/novelworks-docs/pt-br/writing/moments-and-dialogue/).
