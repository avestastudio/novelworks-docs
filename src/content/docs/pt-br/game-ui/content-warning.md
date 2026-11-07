---
title: Aviso de conteúdo
description: Avise os jogadores sobre temas sensíveis antes de começarem.
---

O **{ui.gameUI.contentWarning}** aparece antes da tela de título, depois das imagens da sua introdução. Os jogadores o leem e clicam em **{rt.game.continue}**.

## Ative-o

Ligue **{ui.contentWarning.enabled}**. Ele vem desativado por padrão.

## O que ele diz

- **{ui.contentWarning.topics}**: marque quantos quiser entre onze temas: Violência, Sangue, Morte, Suicídio, Automutilação, Abuso, Terror, Conteúdo sexual, Drogas, Linguagem forte, Luzes piscando. A tela do jogador lista os marcados sob "{tx.contentWarning.contains}", sempre nesta ordem.
- **{ui.contentWarning.message}**: texto livre mostrado embaixo da lista, por exemplo uma palavra gentil ou uma indicação de ajuda. Opcional.

## Quando ele aparece

Em **{ui.contentWarning.when}**:

- **{ui.contentWarning.firstLaunch}** (padrão): cada jogador o vê na primeira vez que inicia o jogo. Isso fica guardado no navegador dele.
- **{ui.contentWarning.everyLaunch}**: ele aparece toda vez que o jogo começa.

No modo Jogar do editor, ele aparece toda vez que você aperta Jogar.

## A aparência

Em **{ui.gameUIInspector.screen}**: **{ui.gameUIInspector.backgroundColor}** (por padrão, a da tela de título), **{ui.gameUIInspector.textColor}** e **{ui.gameUIInspector.buttonStyle}**.

## O que os jogadores fazem

O único jeito de passar é o botão **{rt.game.continue}**, que já vem com o foco quando a tela abre. Clicar em outro lugar não a pula. Com o teclado, **Tab** fica no botão, e **Enter** ou **Espaço** o aperta.
