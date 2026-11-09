---
title: Opções do jogador
description: A tela em que os jogadores escolhem o tamanho do texto, a velocidade, a fonte e o contraste, e o que você controla.
---

A tela **{ui.gameUI.options}** é onde os jogadores adaptam o jogo a si mesmos. Você controla a **aparência** dela. As opções em si são as mesmas em todo jogo, e você não pode esconder nenhuma. Os três volumes só aparecem se o seu jogo tiver sons.

## O que você pode mudar

Em **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: por padrão, a cor da tela de título, um pouco transparente;
- **{ui.gameUIInspector.textColor}**: “{tx.gameUIInspector.sameAsTheTextColor}” por padrão;
- **{ui.gameUIInspector.buttonStyle}**: o estilo dos botões.

## O que os jogadores podem escolher

| Opção | Escolhas |
|---|---|
| Tamanho do texto | Normal, Grande, Muito grande |
| Velocidade do texto | Lenta, Normal, Rápida, Muito rápida, Instantânea |
| Velocidade do modo Auto | Lenta, Normal, Rápida |
| Fonte adaptada para dislexia | Ativado, Desativado |
| Alto contraste | Ativado, Desativado |
| {rt.optionsScreen.musicVolume}, {rt.optionsScreen.soundVolume}, {rt.optionsScreen.voiceVolume} (só se o jogo tiver sons) | 0 a 100, de 5 em 5 |

Uma fala de exemplo mostra como o texto vai ficar, e o botão **{rt.optionsScreen.defaults}** devolve tudo ao início. As mudanças valem na hora. Elas valem **por cima** da sua interface do jogo, só para aquele jogador, e ficam guardadas para o seu jogo no navegador dele.

Se um jogador não escolheu uma velocidade de texto e o sistema dele pede menos movimento, o texto aparece instantaneamente.

Mais sobre cada opção, e como os jogadores chegam a esta tela, em [Opções e acessibilidade](/novelworks-docs/pt-br/player/options-and-accessibility/).

## Onde os jogadores encontram

O botão **{rt.game.options}** da tela de título, do menu de pausa e do menu rápido, se você mostrar o botão Opções dele. Esc a fecha.
