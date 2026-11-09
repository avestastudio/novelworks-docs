---
title: Capítulos
description: Marque as cenas que começam um capítulo e deixe os jogadores rejogarem os capítulos que já alcançaram.
---

Os capítulos permitem que os jogadores voltem a uma parte da sua história a partir da tela de título.

## Marcar um capítulo

1. Na aba **{ui.leftPanel.scenes}**, selecione uma cena.
2. No painel à direita, ative **{ui.sceneInspector.startsChapter}**.
3. Digite um nome, se quiser. Sem nome, o jogo mostra **{rt.chapters.chapterNumber}** com o número dele.

Um capítulo dura até a cena do próximo capítulo. A ordem dos capítulos é a ordem da sua lista de cenas. Um jogo pode ter até 50 capítulos.

Se você excluir uma cena, o capítulo dela vai junto.

## O que os jogadores veem

A tela de título ganha um botão **{rt.game.chapters}** assim que o seu jogo tem um capítulo.

A tela lista os capítulos. Os que o jogador já alcançou mostram o nome e podem ser escolhidos. Os outros mostram **{rt.chapters.locked}** e não podem ser escolhidos.

Um capítulo conta como alcançado quando o jogador está na cena dele, não importa como chegou lá: uma escolha, um salto ou um jogo salvo carregado.

## Rejogar um capítulo

Um capítulo começa no primeiro momento da cena dele, com os valores iniciais: as variáveis voltam ao primeiro valor e o inventário fica vazio.

A tela abre a partir da tela de título, então um jogo em andamento não é afetado.

Os capítulos alcançados ficam guardados para cada jogo no dispositivo do jogador, como os jogos salvos. Quando você testa no editor, eles ficam separados dos capítulos do jogo exportado.

## A aparência

Vá em **{ui.topBar.gameUI}** e escolha **{ui.gameUI.chapters}** na lista de telas.

![A tela Capítulos na Interface do jogo, com as cores e uma prévia da lista de capítulos.](/novelworks-docs/screenshots/game-ui-chapters.png)

Você pode definir **{ui.gameUIInspector.backgroundColor}**, **{ui.gameUIInspector.textColor}** e **{ui.gameUIInspector.buttonStyle}**. **{ui.gameUIInspector.resetToDefault}** deixa esta tela como era.

A prévia mostra os seus capítulos, ou três exemplos se você ainda não tiver nenhum, com o último ainda bloqueado.
