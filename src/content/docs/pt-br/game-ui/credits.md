---
title: Créditos
description: Adicione créditos que rolam na tela ao seu jogo, na tela de título, depois de um final, ou nos dois.
---

**{ui.gameUI.credits}** adiciona ao seu jogo créditos que rolam na tela. Vá em **{ui.topBar.gameUI}** e escolha **{ui.gameUI.credits}** na lista de telas.

![A tela Créditos na Interface do jogo, com as chaves, as suas linhas e a prévia.](/novelworks-docs/screenshots/game-ui-credits.png)

Os créditos vêm desativados em um jogo novo. Ative **{ui.credits.enabled}** para começar.

## Onde eles aparecem

Em **{ui.credits.where}**, duas chaves funcionam separadamente. As duas vêm ativadas.

- **{ui.credits.onTitleScreen}** adiciona um botão **{rt.game.credits}** à tela de título.
- **{ui.credits.afterEnding}** faz os créditos rolarem quando o jogador sai de um final: um [momento Final](/novelworks-docs/pt-br/branching/endings/) ou a [tela **{ui.gameUI.theEnd}**](/novelworks-docs/pt-br/game-ui/ending-screen/). A tela de título vem depois deles.

## O que eles dizem

Os créditos começam com o título do jogo e o autor, tirados das [configurações do projeto](/novelworks-docs/pt-br/getting-started/editor-settings/).

Depois vêm **{ui.credits.lines}**. Clique em **{ui.credits.addLine}** e preencha:

- **{ui.credits.role}**, por exemplo “Arte”;
- **{ui.credits.names}**, um nome por linha.

Você pode ter até 30 linhas. As setas mudam a ordem delas, e uma linha deixada vazia é ignorada.

**{ui.credits.madeWith}** vem ativado. Você pode desativá-lo.

## A aparência

Você pode definir **{ui.gameUIInspector.backgroundColor}**, **{ui.gameUIInspector.textColor}** e **{ui.gameUIInspector.buttonStyle}**. **{ui.gameUIInspector.resetToDefault}** redefine a página inteira, não só a aparência: as suas linhas são removidas e os créditos são desativados. O NovelWorks pergunta antes, e {ui.topBar.undo} traz tudo de volta.

## No jogo

Os créditos rolam para cima sozinhos e param no fim, com as últimas linhas ainda na tela. **{rt.credits.back}** os fecha, e `Esc`, `Enter` e `Space` também.

Se o jogador tiver pedido ao sistema menos movimento, nada se move: a lista inteira é mostrada e pode ser rolada. A prévia no editor funciona do mesmo jeito.
