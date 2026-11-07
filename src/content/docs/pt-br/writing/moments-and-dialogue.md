---
title: Momentos e diálogo
description: Escreva falas, adicione momentos, reordene-os e use o menu do momento.
---

Um **momento** é uma etapa de uma cena: uma fala, uma escolha, um salto… Esta página trata do mais comum, o momento **{ui.moments.dialogue}**. Os outros tipos estão em [Cenas, momentos e a linha do tempo](/novelworks-docs/pt-br/concepts/scenes-moments-timeline/).

## Escrever uma fala

Clique na caixa de diálogo da tela do jogo e digite. O texto é digitado direto na caixa, e você também pode usar **{ui.momentInspector.text}** no inspetor.

- **Enter** começa a **próxima fala**: um novo momento de diálogo depois deste, com o mesmo que estava em cena e o mesmo falante, pronto para digitar.
- **Shift+Enter** adiciona uma nova linha **dentro da mesma caixa**.
- Um texto longo que não cabe na caixa mostra um aviso: aperte **Enter** para continuar em um novo momento.

## Quem está falando

Acima do texto, na plaquinha do nome, ou com **{ui.momentInspector.speaker}** no inspetor, escolha:

- **{ui.stageControls.narrator}**: sem falante, só texto;
- um personagem. Os personagens em cena aparecem primeiro, depois os outros.

Uma nova fala mantém o falante da fala anterior. Se você excluir um personagem, as falas dele viram narração.

## Adicionar momentos

Na linha do tempo, os botões acima dos cartões adicionam um momento de cada tipo **depois do selecionado**: {ui.moments.dialogue}, {ui.moments.choice}, {ui.moments.condition}, {ui.moments.jump}, {ui.moments.ending}, {ui.moments.exploration} e, quando esses recursos estão ativados, {ui.moments.item} e {ui.moments.showMap}. O **+** no fim da faixa adiciona uma fala. Em uma cena vazia, **{ui.timeline.writeTheFirstLine}** faz o mesmo.

Um novo momento não muda nada na tela: ele mostra o que o momento anterior mostrava (veja [O palco](/novelworks-docs/pt-br/concepts/stage/)).

## Reordenar momentos

Arraste um cartão para a esquerda ou para a direita. As setas **←** e **→** movem a seleção para o momento anterior e o seguinte, **Home** e **End** para o primeiro e o último, e **Cmd+[** / **Cmd+]** (**Ctrl+[** / **Ctrl+]**) fazem o mesmo enquanto você digita.

## O que um cartão mostra

Um cartão mostra o nome do falante na cor dele (ou “Narrador”, ou o tipo do momento com uma faixa colorida), o começo do texto e o número dele no canto. Ele também pode mostrar:

- um ícone de nota adesiva, se o momento tiver uma [nota](/novelworks-docs/pt-br/writing/notes/);
- um triângulo de aviso: aponte para ele para ler o que precisa de atenção, por exemplo uma escolha sem opções, um link para uma cena excluída, ou um momento que os jogadores nunca podem ver porque um final ou um salto vem antes dele;
- pequenas etiquetas para o que o momento muda em cena e, abaixo dos cartões, o gráfico de quem está em cena.

## O menu do momento

Clique com o botão direito em um cartão:

| Entrada | O que faz |
|---|---|
| {ui.contextMenus.insertBefore} | Adiciona um momento de diálogo antes deste. Ele assume o falante do momento diante do qual é colocado e mostra a tela do momento anterior. |
| {ui.contextMenus.insertAfter} | Adiciona um depois (**Cmd+Enter** / **Ctrl+Enter**). |
| {ui.contextMenus.duplicate} | Copia o momento logo depois dele, mostrando a mesma tela (**Cmd+D** / **Ctrl+D**). |
| {ui.contextMenus.changeType} | Transforma o momento em outro tipo. O texto de um diálogo, escolha ou final é mantido; se algumas configurações não puderem ser mantidas, o NovelWorks pergunta e você pode desfazer. |
| {ui.contextMenus.addNote} / {ui.contextMenus.editNote} | Abre a nota do momento. |
| {ui.contextMenus.playFromHere} | Joga a partir deste momento (**Cmd+Shift+P** / **Ctrl+Shift+P**). |
| {ui.contextMenus.delete} | Exclui o momento. |

## Excluir um momento

Use o ícone de lixeira acima da linha do tempo, **{ui.momentInspector.delete}** no inspetor, **{ui.contextMenus.delete}** no menu, ou a tecla `Delete`. O NovelWorks pede confirmação, exceto para uma fala vazia. O que o momento excluído mudava em cena passa para o seguinte, então os outros momentos continuam mostrando a mesma coisa.

## O inspetor de um momento de diálogo

De cima para baixo: os avisos, se houver, o **{ui.momentInspector.speaker}** e o **{ui.momentInspector.text}**, o **{ui.momentInspector.background}**, quem está **{ui.momentInspector.onStage}**, a **{ui.momentInspector.note}** e o **{ui.momentInspector.script}**, que mostra como este momento é escrito no [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/) para você copiar. Um momento de diálogo não tem configuração de som, música ou transição.
