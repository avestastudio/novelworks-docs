---
title: Ferramentas do modo Jogar
description: "A barra acima do jogo quando você joga: variáveis e itens, tela de abertura, reiniciar, salvamentos de teste e falas lidas."
---

Quando você joga no editor, uma barra no alto reúne as ferramentas de teste. Os botões da barra nunca tomam o foco do teclado, então **Espaço** e **Enter** continuam indo para o jogo.

![Modo Jogar: a barra de ferramentas no alto e o painel de variáveis e itens à direita.](/novelworks-docs/screenshots/play-bar.png)

| Ferramenta | O que faz |
|---|---|
| **{ui.playOverlay.playing}** e onde você está | A cena e o momento, sempre atualizados. |
| “{tx.playOverlay.rightClickGameMenu}” | Um lembrete: o clique direito abre o menu de pausa do jogo. |
| **{ui.playOverlay.variablesItems}** | Mostra ou oculta um painel com os valores ao vivo das suas variáveis e dos seus itens (veja abaixo). |
| **{ui.playOverlay.openMap}** | Abre o mapa agora, mesmo que os jogadores ainda não pudessem abri-lo neste ponto. **{rt.game.back}** volta para onde você estava. Só quando o seu jogo tem um mapa. |
| **{ui.playOverlay.showSplash}** | Mostra a tela “Feito com NovelWorks” com que um jogo exportado começa, a cada início e ao reiniciar. Desligada por padrão. Ligar reinicia o teste. |
| **{ui.playOverlay.restart}** | Começa este teste de novo, pela tela de título ou pelo momento em que você começou. Estado, histórico e tempo de jogo são zerados. |
| **{ui.playOverlay.clearTestSaves}** | Exclui os salvamentos, o salvamento rápido e o salvamento automático feitos durante o teste. |
| **{ui.playOverlay.resetReadLines}** | Esquece quais falas você leu, para que **{ui.quickMenu.button.skip}** pare em todas as falas de novo. |
| **{ui.playOverlay.stop}** | Volta ao editor (**Esc**). |

## Variáveis e itens

Com **{ui.playOverlay.variablesItems}** (ou **{ui.leftPanel.variables}**, quando o recurso Inventário está desligado) um painel mostra:

- **{ui.leftPanel.variables}**: cada uma com o valor atual. Um valor diferente do inicial fica destacado. Na tela de título e na tela Fim, aparece “{tx.playOverlay.startingValues}”. Você não pode editar uma variável aqui: jogue para mudá-la e confira o que as suas escolhas mudam.
- **{ui.gameUI.inventory}** (com o recurso Inventário): todos os itens do seu jogo, com um **−** e um **+** para tirar ou dar um durante o teste, sem aviso. Um item acumulável mostra a quantidade, um item único mostra Sim ou Não. Antes de o jogo começar, aparece “{tx.playOverlay.startPlayingToGiveOrRemoveItems}” O painel fica aberto ou fechado de um teste para o outro.

## Salvamentos de teste e falas lidas

Os salvamentos, o salvamento rápido e o salvamento automático, as opções do jogador (tamanho do texto, velocidade…) e o registro das falas lidas usado pelo Pular têm, cada um, um espaço próprio para cada jogo **só no modo Jogar**. Eles são separados dos salvamentos de um jogo exportado e não fazem parte do seu projeto. Ficam de um teste para o outro até você limpá-los:

- **{ui.playOverlay.clearTestSaves}** pergunta antes: “Jogos exportados mantêm os próprios salvamentos.”
- **{ui.playOverlay.resetReadLines}** age na hora, sem perguntar.

As opções do próprio testador (tamanho do texto, velocidade…) são guardadas do mesmo jeito, mas não têm botão para limpar. A chave **{ui.playOverlay.showSplash}** dura até você fechar o editor.
