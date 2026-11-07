---
title: Tela de inventário
description: O botão Inventário e o painel de itens.
---

A tela **{ui.gameUI.inventory}** é o botão que os jogadores usam para abrir seus itens, e o painel que os lista. Ela precisa do [recurso Inventário](/novelworks-docs/pt-br/features/inventory/). Quando o recurso está desativado, a página avisa e oferece abrir os Recursos.

## O botão

- **{ui.gameUIInspector.label}**: o texto do botão, o título do painel e o nome da entrada no menu de pausa. Padrão "Inventário".
- **{ui.gameUIInspector.cornerOfTheScreen}**: no alto à esquerda, no alto à direita (padrão), embaixo à esquerda ou embaixo à direita.
- **{ui.gameUIInspector.buttonStyle}**: "{tx.gameUIInspector.sameAsFontsColors}" por padrão.

O botão fica escondido na tela de título, na tela final e durante a pausa.

## Cores do painel e do botão

Essas duas cores pintam **o painel e o botão**:

- **{ui.gameUIInspector.panelColor}**: "{tx.gameUIInspector.sameAsTheDialogueBox}" por padrão (com o estilo de botão "{tx.gameUIInspector.text}", o botão fica sem fundo).
- **{ui.gameUIInspector.textColor}**: "{tx.gameUIInspector.sameAsTheTextColor}" por padrão.

## O que os jogadores têm

Os jogadores o abrem com o botão, com o menu de pausa ou com a tecla **I**. É um painel no meio do jogo com uma grade dos itens que eles possuem: uma imagem, o nome e, para itens empilháveis, uma quantidade como "×3". Ao selecionar um item, aparece a descrição dele (ou o nome, se não tiver descrição). Quando está vazio, diz "Nada aqui ainda." Esc, **I**, o botão × ou um clique fora o fecha. A história fica em pausa enquanto ele está aberto.
