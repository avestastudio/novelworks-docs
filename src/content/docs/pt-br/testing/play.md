---
title: Jogar, Jogar daqui, Testar mapa
description: Experimente seu jogo no editor, do começo ou de qualquer momento, sem salvar nem exportar.
---

Você pode jogar seu jogo a qualquer hora, dentro do editor. Ele joga **o que está no editor agora**, salvo ou não, com o mesmo motor de um jogo exportado. Enquanto você joga, a edição fica bloqueada.

## Jeitos de começar

| Como | Onde começa |
|---|---|
| **{ui.topBar.play}** (barra superior, **Cmd+P** / **Ctrl+P**) | A tela de título. |
| **{ui.topBar.playFromHere}** (barra superior, **Cmd+Shift+P** / **Ctrl+Shift+P**) | O momento selecionado, sem a tela de título. Fica desativado até um momento ser selecionado. |
| **{ui.contextMenus.playFromHere}** no menu de clique direito de um momento ou de uma cena | Esse momento, ou o primeiro momento dessa cena. |
| **{ui.scriptMode.playFromCursor}** no [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/) (**Cmd+Enter** / **Ctrl+Enter**) | A linha sob o cursor. |
| **{ui.topBar.testMap}** no espaço de trabalho Mapa (e nas configurações do mapa) | O mapa. No espaço de trabalho Mapa, o botão **{ui.topBar.playFromHere}** e **Cmd+Shift+P** / **Ctrl+Shift+P** viram “Testar mapa”. Veja [Mapa](/novelworks-docs/pt-br/features/map/). |

Cada jogada começa com os valores iniciais das suas variáveis e itens: nada vem de um teste anterior.

Se o seu jogo não tem cena inicial, ou a cena inicial não tem momentos, **{ui.topBar.play}** não começa e diz o que fazer: defina uma cena inicial com a estrela na aba Cenas.

## Enquanto você joga

Uma barra no alto mostra onde você está (“A sala de aula · Momento 2 de 5”, com “Escolha”, “{tx.moments.ending}” ou “{tx.game.paused}” acrescentado quando for o caso, ou “{tx.playOverlay.titleScreen}” ou “Fim”). Ela também tem as ferramentas descritas em [Ferramentas do modo Jogar](/novelworks-docs/pt-br/testing/test-saves-and-read-lines/).

Você joga como um jogador: clique ou aperte **Espaço** / **Enter** para avançar, **1** a **6** para escolher uma opção, **A** para Auto, **S** para Pular, **H** para o Histórico, **F5** e **F9** para salvamento e carregamento rápidos. O **clique direito** abre o menu de pausa do jogo. Veja [Teclas e telas de toque](/novelworks-docs/pt-br/player/keys-and-touch/).

## Parar

- Clique em **{ui.playOverlay.stop}**, ou aperte **Esc**. Se o menu de pausa, Salvar, Carregar, o Histórico, as Opções, os Créditos, os Capítulos, a introdução ou o aviso de conteúdo estiver aberto, **Esc** fecha isso primeiro. **Esc** não fecha o inventário no modo Jogar: aperte **I** para isso.
- Quando você para, o editor seleciona a cena e o momento em que você estava.

## O que isto não testa

O modo Jogar não é o jogo exportado: a tela “Feito com NovelWorks” fica oculta, a menos que você a ligue, e seus testes usam salvamentos próprios, separados dos de um jogo exportado. Para experimentar a versão de verdade em um navegador, use a [Exportação para web](/novelworks-docs/pt-br/publish/web-export/) e **{ui.exportDialog.testInBrowser}**.
