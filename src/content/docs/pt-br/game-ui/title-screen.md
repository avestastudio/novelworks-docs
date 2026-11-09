---
title: Tela de título
description: "A primeira tela do seu jogo: fundo, logotipo e menu."
---

A **{ui.gameUI.titleScreen}** é a primeira tela que os jogadores veem (depois da [introdução](/novelworks-docs/pt-br/game-ui/intro/) e do [aviso de conteúdo](/novelworks-docs/pt-br/game-ui/content-warning/), se você os usar).

## Modelos

Em **{ui.templates.heading}**, quatro cartões dão um visual pronto: **{ui.templates.title.classic}** (o visual de um projeto novo), **{ui.templates.title.darkNight}**, **{ui.templates.title.soft}** e **{ui.templates.title.minimal}**. Um clique define só a cor de fundo e o estilo dos botões desta tela. As suas imagens, a fonte e as cores do texto ficam. Um único **{ui.topBar.undo}** traz de volta o que você tinha.

O cartão do modelo atual fica destacado. Assim que você muda uma dessas duas configurações, nenhum cartão fica destacado.

## Fundo

Escolha **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: o padrão é um azul bem escuro. Ele “brilha com a cor principal no alto”: o jogo desenha um brilho suave da sua [cor principal](/novelworks-docs/pt-br/game-ui/fonts-and-colors/) por cima.
- **{ui.gameUIInspector.image}**: escolha um cenário, uma CG ou uma imagem de interface. Até você escolher uma, a cor é mostrada.

## Logotipo

**{ui.gameUIInspector.logoImage}**: qualquer imagem. Ela é desenhada na parte de cima da tela, mantendo as proporções. Sem logotipo, o jogo escreve o **título do seu jogo** (definido nas [configurações do projeto](/novelworks-docs/pt-br/getting-started/editor-settings/)), ou “{tx.export.untitled}” se estiver vazio.

## Música

Em **{ui.sound.music}**, **{ui.sound.chooseMusic}** escolhe uma faixa do tipo Música, ou importa uma. Depois de definida, você tem um controle deslizante **{ui.sound.volume}** e um X para removê-la. Ela começa depois da introdução. Quando a história começa, a música dos seus momentos assume. Veja [Som](/novelworks-docs/pt-br/writing/sound/).

Os navegadores não permitem som antes do primeiro clique ou do primeiro toque de tecla do jogador, então, em um jogo web, a música começa nesse instante.

## Menu

Só o **{ui.gameUIInspector.buttonStyle}** pode ser mudado. Os botões e as palavras deles são fixos:

- **{rt.game.continue}**: aparece só quando o jogador tem um salvamento, e carrega o mais recente;
- o botão **{rt.game.newGame}**;
- **{rt.game.load}**: aparece quando é possível salvar;
- **{rt.game.chapters}**: aparece só se o seu jogo tiver pelo menos um capítulo. Veja [Capítulos](/novelworks-docs/pt-br/game-ui/chapters/);
- **{rt.game.options}**;
- **{rt.game.credits}**: aparece só se você ativou os créditos e o botão deles. Veja [Créditos](/novelworks-docs/pt-br/game-ui/credits/);
- o botão **{rt.game.quit}**: só em um ambiente que tenha um jeito de sair (não no navegador).

As palavras desses botões acompanham o [idioma do jogo](/novelworks-docs/pt-br/getting-started/editor-settings/) do seu projeto.
