---
title: Inventário
description: "Itens que os jogadores carregam: crie-os, dê e tire, verifique em condições e veja-os no jogo."
---

Com o recurso **{ui.shared.features.inventory}** ativado, os jogadores podem coletar itens: chaves, cartas, moedas, pistas. Eles os veem num menu Inventário. Ative-o na [biblioteca de recursos](/novelworks-docs/pt-br/features/features-panel/). Itens não são [variáveis](/novelworks-docs/pt-br/branching/variables/): um item é algo que o jogador carrega.

## A aba Itens

A aba **{ui.leftPanel.items}** lista seus itens, cada um com a imagem (ou uma mochila), o nome e **{ui.itemInspector.single}** ou **{ui.itemInspector.stackable}**. Clique em **{ui.itemsTab.newItem}**. Um novo item se chama “Item 1”, “Item 2”… e fica selecionado.

![A aba Itens, com o inspetor de um item.](/novelworks-docs/screenshots/items-tab.png)

No inspetor:

- **{ui.itemInspector.name}**;
- **{ui.itemInspector.picture}**: uma imagem do tipo “Objeto de cena”, mostrada no inventário (você pode importar uma na hora);
- **{ui.itemInspector.description}**: o que os jogadores leem quando olham para ele no inventário;
- **{ui.itemInspector.kind}**: **{ui.itemInspector.single}** (os jogadores o têm ou não, como uma chave) ou **{ui.itemInspector.stackable}** (os jogadores podem ter vários, como moedas; o inventário mostra quantos);
- **{ui.itemInspector.usedIn}**: onde o item é usado, ou “Ainda não usado. Entregue-o com um momento de Item, uma escolha ou uma zona de Pegar.”

### Exclua um item

**{ui.itemInspector.deleteItem}** pergunta antes e lista onde o item é usado. Só o item é removido: os lugares que o usavam são mantidos e mostram um aviso até você escolher outro item.

## Dê e tire itens

- **Um momento Item**: ele dá itens ou os tira, e os jogadores não veem o momento em si. Escolha **{ui.branchInspectors.give}** ou **{ui.branchInspectors.remove}**, o item e quantos, no caso de um item acumulável. Uma caixa de seleção decide se um aviso é mostrado (“Você pegou: …”). Veja [Cenas, momentos e a linha do tempo](/novelworks-docs/pt-br/concepts/scenes-moments-timeline/).
- **Uma opção de escolha**: **{ui.branchInspectors.giveRemoveAnItem}** adiciona uma mudança a uma opção. Um aviso sempre é mostrado. Veja [Escolhas](/novelworks-docs/pt-br/branching/choices/).
- **Uma zona de exploração**: **{ui.explorationInspectors.pickUpAnItem}** (a zona e os objetos de cena dela somem para sempre) ou **{ui.shared.exploration.useAnItem}**. Veja [Exploração](/novelworks-docs/pt-br/features/exploration/).

Um item único nunca pode passar de um, e um item acumulável nunca fica abaixo de zero. Remover mais do que o jogador tem remove o que existe.

## Verifique itens

Num [Se…](/novelworks-docs/pt-br/branching/conditions/), na condição de uma opção ou de uma zona, escolha **{ui.moments.item}** em **{ui.branchInspectors.whatToCheck}**: o jogador **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}** ou **{ui.conditionTests.hasAtLeast}** uma quantidade desse item. Um teste sobre um item excluído nunca passa.

Se você desativar o recurso Inventário, os jogadores perdem o botão, a entrada de menu e a tecla **I**, mas os momentos que dão ou verificam itens continuam funcionando; o editor avisa você. O aviso aparece para cada uso de um item: um momento de item (dar ou remover), um efeito de escolha, uma opção bloqueada por um item, um teste de um momento Se sobre um item e uma zona que pega, usa ou é bloqueada por um item. Você o vê na caixa de Problemas do momento, na linha do tempo e na janela de exportação (a visão Roteiro não o sublinha). Veja [A biblioteca de recursos](/novelworks-docs/pt-br/features/features-panel/).

## O que os jogadores veem

- Um botão num canto da tela (no canto superior direito por padrão, configurado na [tela Inventário](/novelworks-docs/pt-br/game-ui/inventory-ui/)), uma entrada no menu de pausa e a tecla **I**.
- Um painel com uma grade dos itens que eles têm, com a quantidade para os itens acumuláveis. Clicar num deles mostra a descrição. Não existe botão “usar”: usar um item é algo que uma zona verifica.
- **{ui.gameUI.notices}** como “Você pegou: Chave” e “Você perdeu: Chave” (veja [Notificações](/novelworks-docs/pt-br/game-ui/notifications/)).
- Os itens ficam guardados nos saves do jogador. Quando um save antigo é carregado, os itens que não existem mais são descartados.

## Testes

No modo Jogar, **{ui.playOverlay.variablesItems}** mostra todos os itens do seu jogo com um **−** e um **+** para dar ou remover um durante o teste (sem aviso). Antes de o jogo começar, ele diz “{tx.playOverlay.startPlayingToGiveOrRemoveItems}”

## Avisos

- Escolha o item a dar ou remover; este momento dá ou remove um item que foi excluído.
- O recurso Inventário está desativado: os jogadores não têm inventário. Ative-o em Recursos.
- Um efeito ou uma condição usa ou verifica um item que não foi escolhido, foi excluído, ou o recurso Inventário está desativado.
- Uma zona exige um item que os jogadores nunca podem conseguir (nada na história o dá).
