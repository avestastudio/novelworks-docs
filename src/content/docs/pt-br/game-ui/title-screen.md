---
title: Tela de título
description: "A primeira tela do seu jogo: fundo, logotipo e menu."
---

A **{ui.gameUI.titleScreen}** é a primeira tela que os jogadores veem (depois da [introdução](/novelworks-docs/pt-br/game-ui/intro/) e do [aviso de conteúdo](/novelworks-docs/pt-br/game-ui/content-warning/), se você os usar).

## Fundo

Escolha **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: o padrão é um azul bem escuro. Ele “brilha com a cor principal no alto”: o jogo desenha um brilho suave da sua [cor principal](/novelworks-docs/pt-br/game-ui/fonts-and-colors/) por cima.
- **{ui.gameUIInspector.image}**: escolha um cenário, uma CG ou uma imagem de interface. Até você escolher uma, a cor é mostrada.

## Logotipo

**{ui.gameUIInspector.logoImage}**: qualquer imagem. Ela é desenhada na parte de cima da tela, mantendo as proporções. Sem logotipo, o jogo escreve o **título do seu jogo** (definido nas [configurações do projeto](/novelworks-docs/pt-br/getting-started/editor-settings/)), ou “{tx.export.untitled}” se estiver vazio.

## Menu

Só o **{ui.gameUIInspector.buttonStyle}** pode ser mudado. Os botões e as palavras deles são fixos:

- **{rt.game.continue}**: aparece só quando o jogador tem um salvamento, e carrega o mais recente;
- o botão **{rt.game.newGame}**;
- **{rt.game.load}**: aparece quando é possível salvar;
- **{rt.game.options}**;
- o botão **{rt.game.quit}**: só em um ambiente que tenha um jeito de sair (não no navegador).

As palavras desses botões acompanham o [idioma do jogo](/novelworks-docs/pt-br/getting-started/editor-settings/) do seu projeto.
