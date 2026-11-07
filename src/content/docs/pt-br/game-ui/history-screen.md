---
title: Tela de histórico
description: A lista das falas que o jogador já leu, e como mudar a aparência dela.
---

A tela **{ui.gameUI.history}** mostra "as falas que eles leram, com o nome de quem fala na sua cor, e as escolhas que fizeram".

## O que você pode mudar

Em **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: por padrão, a cor de fundo da tela de título, um pouco transparente, para que a história apareça de leve por trás.
- **{ui.gameUIInspector.textColor}**: "{tx.gameUIInspector.sameAsTheTextColor}" por padrão.
- **{ui.gameUIInspector.buttonStyle}**: o estilo do botão Voltar.

## Como os jogadores usam

- Eles a abrem com a **roda do mouse (rolando para cima)**, com a tecla **H**, com o botão **{rt.game.history}** do [menu de pausa](/novelworks-docs/pt-br/game-ui/pause-menu/), ou com o botão Histórico do [menu rápido](/novelworks-docs/pt-br/game-ui/quick-menu/), se você o mostrar.
- Eles a fecham com **Esc**, **H** ou o botão **{rt.historyScreen.back}**. Em uma tela de toque, arrastam para rolar e tocam em Voltar.
- Ela só está disponível enquanto a história está na tela: não na tela de título, nem em pausa, nem quando outra tela está aberta.
- Ela lista as falas de diálogo, as perguntas das escolhas, as falas mostradas pelas zonas de exploração e a opção que o jogador escolheu ("Você escolheu: …"). Guarda as últimas **200** entradas e é salva junto com cada salvamento. Quando ainda não há nada, mostra "{tx.historyScreen.nothingHasBeenSaidYet}"

Veja também [Histórico](/novelworks-docs/pt-br/player/history/).
