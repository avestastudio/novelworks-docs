---
title: Cenas
description: Crie, renomeie, reordene, duplique e exclua cenas, e escolha onde o jogo começa.
---

Uma cena é um capítulo da sua história: uma série de [momentos](/novelworks-docs/pt-br/writing/moments-and-dialogue/) reproduzidos um após o outro. As cenas ficam na aba **{ui.leftPanel.scenes}**. Para a visão geral, veja [Cenas, momentos e a linha do tempo](/novelworks-docs/pt-br/concepts/scenes-moments-timeline/).

## Criar uma cena

Clique em **{ui.scenesTab.newScene}**. A cena se chama "Cena N", em que N é o número de cenas que você já tem mais um (ou o próximo número, se esse nome já existir), contém uma linha de diálogo vazia e fica selecionada. Se o seu projeto não tinha cena inicial, a nova cena vira a cena inicial.

## Renomear uma cena

Dê dois cliques na cena da lista, digite o nome e aperte **Enter**. **Esc** cancela, e um nome vazio mantém o nome antigo. Você também pode usar **{ui.sceneInspector.name}** no inspetor, ou clicar com o botão direito na cena e escolher **{ui.contextMenus.rename}**. Uma cena sem nome aparece como "Cena sem título".

## Reordenar cenas

Arraste uma cena para cima ou para baixo na lista. A ordem da lista não muda como a história é jogada: as cenas são ligadas por escolhas, condições, saltos e zonas.

## Duplicar uma cena

Use **{ui.scenesTab.duplicateScene}** na linha, ou **{ui.contextMenus.duplicate}** no menu do botão direito, ou **Cmd+D** / **Ctrl+D** com a cena selecionada. A cópia vai logo depois do original e se chama algo como "Uma mãozinha (cópia)". Ela mantém o resumo e o status de escrita, os momentos dela recebem novas identidades, e o lugar dela no mapa da história é escolhido de novo.

## Excluir uma cena

Clique em **{ui.scenesTab.deleteScene}** (ou em **{ui.contextMenus.delete}** no menu do botão direito). O NovelWorks sempre pergunta antes e informa:

- quantos momentos serão excluídos;
- se for a cena inicial, qual cena vai se tornar a cena inicial (ou que o seu jogo ficará sem cenas);
- se outras cenas levam a ela, quais momentos fazem isso.

Escolhas, condições, saltos e zonas que levavam a uma cena excluída **não** são alterados. Eles continuam apontando para o vazio e mostram um aviso até você escolher outra cena. Você pode desfazer uma exclusão com **{ui.native.menu.undo}**.

## A cena inicial

O jogo começa na **cena inicial**. Ela tem uma estrela e o rótulo "Cena inicial". Para mudá-la, clique no botão de estrela de outra cena (**{ui.scenesTab.makeStartScene}**), use **{ui.contextMenus.setAsStartScene}** no menu do botão direito, ou use o botão no inspetor da cena.

## O que a lista mostra

Cada linha de cena mostra quantos momentos ela tem. Uma pequena bifurcação com "Ramificações: N" mostra em quantos momentos a história pode ir para outro lugar (veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/)). Uma etiqueta vermelha **{ui.scenesTab.unreachable}** significa que os jogadores ainda não conseguem chegar lá: nenhuma escolha, condição, salto ou zona leva até ela a partir da cena inicial.

## O inspetor da cena

Selecione uma cena para ver:

- **{ui.sceneInspector.name}**;
- **{ui.sceneInspector.summary}**: uma ou duas frases, só para você. Ele aparece no mapa da história e acima da linha do tempo, e nunca no jogo;
- **{ui.sceneInspector.writingStatus}**: **{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** ou **{ui.shared.outline.done}**. Se você nunca o definir, será "Por escrever" até a cena ter algum texto, e depois "{tx.shared.outline.draft}";
- o botão de cena inicial;
- **{ui.branches.entriesTitle}**: os lugares que levam a esta cena, nos quais você pode clicar;
- os botões **{ui.sceneInspector.deleteScene}** e de duplicar.

## Jogar a partir de uma cena

Clique com o botão direito em uma cena e escolha **{ui.contextMenus.playFromHere}** para jogar a partir do primeiro momento dela (desativado se a cena não tiver momentos).
