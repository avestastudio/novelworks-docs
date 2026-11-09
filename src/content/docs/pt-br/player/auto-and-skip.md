---
title: Auto e Pular
description: Deixe o jogo ler sozinho, ou pule as falas já lidas.
---

## Ligue-os

- **A** liga ou desliga o **{rt.game.auto}**, e **S** liga ou desliga o **{rt.game.skip}**.
- Os botões **{rt.game.auto}** e **{rt.game.skip}** do [menu rápido](/novelworks-docs/pt-br/game-ui/quick-menu/) fazem o mesmo, se você os mostrar. Eles aparecem apertados enquanto um modo está ligado. Esconder um botão nunca remove a tecla dele.
- Segurar a tecla **Ctrl** pula enquanto ela está apertada.
- Só um modo fica ligado por vez. Eles são ignorados durante a pausa ou quando uma tela está aberta.

## Auto

O Auto passa para a próxima fala sozinho, depois de uma espera que depende do tamanho da fala, **assim que a fala termina de aparecer**:

- cerca de 1 segundo mais 55 milissegundos por caractere, entre 1,5 e 10 segundos. Por exemplo, um “{tx.numberInput.yes}” curto espera 1,5 segundo, e uma fala de 100 caracteres cerca de 6,5 segundos;
- depois multiplicado pela **{rt.optionsScreen.autoSpeed}** do jogador: Lenta (x1,5, ou seja, até 15 segundos), Normal (x1), Rápida (x0,6, ou seja, até 0,9 segundo).

O Auto para em um momento que não é uma fala de diálogo: uma escolha, uma exploração ou um final.

## Pular

O Pular passa depressa pelas falas **que o jogador já leu**, terminando o texto de uma vez e encurtando as animações. Os [efeitos](/novelworks-docs/pt-br/writing/effects/), as vozes e os efeitos sonoros dos momentos pulados não são reproduzidos. Ele para na primeira fala que o jogador não leu, e em uma escolha, uma exploração ou um final.

- Uma fala conta como lida assim que aparece, e o registro é guardado **por jogo, no navegador**, não por salvamento. Ele continua entre jogos novos.
- Se você mudar o texto ou quem fala em uma fala, ela volta a contar como não lida.
- Os jogadores não podem redefinir o registro sozinhos, a não ser limpando os dados do site. No editor, **{ui.playOverlay.resetReadLines}** faz isso para os seus testes.

## O que os faz parar

Um clique ou uma tecla que avança a história (**Espaço**, **Enter**, **1** a **6**), abrir qualquer tela (Histórico, Opções, Salvar, Carregar, o inventário, o menu de pausa) e carregar um jogo. Uma cena nova não os faz parar.

## Voz

Se uma fala tiver [voz](/novelworks-docs/pt-br/writing/sound/), o Auto espera a voz terminar e avança depois de 0,6 segundo, qualquer que seja a **{rt.optionsScreen.autoSpeed}**. Passar para a próxima fala corta a voz.
