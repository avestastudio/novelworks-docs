---
title: Menu rápido
description: "Os controles de leitura mostrados sobre a história: posição, aparência e quais botões exibir."
---

O **{ui.quickMenu.title}** é uma barra pequena de “controles de leitura sobre a história”. Os jogadores podem clicar nos botões dela em vez de usar teclas.

![As configurações do menu rápido, com a prévia da barra no alto do jogo.](/novelworks-docs/screenshots/game-ui-quick-menu.png)

## Mostrar e posicionar

- **{ui.quickMenu.enabled}**: ativado por padrão. Desative para esconder a barra toda.
- **{ui.quickMenu.position}**: no alto à esquerda, no alto ao centro (padrão), no alto à direita, embaixo à esquerda, embaixo ao centro ou embaixo à direita.
- **{ui.quickMenu.margin}**: a distância até as bordas, de 0 a 10 % (padrão 1,5).

## Aparência

- **{ui.gameUIInspector.buttonStyle}**: Pílula por padrão.
- **{ui.quickMenu.textSize}**: 60 a 140 % do tamanho base do texto (padrão 80).
- **{ui.quickMenu.buttonColor}**: por padrão, um fundo escuro translúcido. Um link restaura o padrão.
- **{ui.gameUIInspector.textColor}**: “{tx.gameUIInspector.sameAsTheTextColor}” por padrão.

## Botões visíveis

Nove botões, cada um com um interruptor. A **ordem é fixa**: você pode mostrá-los ou escondê-los, mas não reordená-los.

| Botão | Padrão | Tecla | O que faz |
|---|---|---|---|
| {ui.quickMenu.button.history} | ativado | H | Abre o Histórico. |
| {ui.quickMenu.button.auto} | ativado | A | Liga ou desliga o modo Auto. |
| {ui.quickMenu.button.skip} | ativado | S | Liga ou desliga o modo Pular. |
| {ui.quickMenu.button.save} | desativado | | Abre a tela de salvar. |
| {ui.quickMenu.button.load} | desativado | | Abre a tela de carregar. |
| {ui.quickMenu.button.quickSave} | desativado | F5 | Salvamento rápido. |
| {ui.quickMenu.button.quickLoad} | desativado | F9 | Carregamento rápido (em cinza até existir um salvamento rápido). |
| {ui.quickMenu.button.options} | desativado | | Abre as opções do jogador. |
| {ui.quickMenu.button.menu} | desativado | Esc | Abre o menu de pausa. |

**{ui.quickMenu.shortcutsHelp}**

## Quando a barra aparece

A barra fica escondida na tela de título e na tela final, enquanto um menu, o Histórico, as Opções, a tela de salvar ou a de carregar estão abertos, e quando todos os botões estão escondidos. **{rt.game.quickLoad}** fica em cinza até existir um salvamento rápido. Auto e Pular mostram se estão ligados.
