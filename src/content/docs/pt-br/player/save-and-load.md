---
title: Salvar e carregar
description: Como os jogadores salvam e carregam, onde os salvamentos ficam guardados, e o que acontece quando você atualiza o jogo.
---

Esta página descreve o que os **jogadores** vivem. Para a aparência das telas, veja [Tela de salvar e carregar](/novelworks-docs/pt-br/game-ui/save-load-screen/).

## Onde os salvamentos ficam guardados

Os salvamentos ficam guardados **no navegador do jogador** (no armazenamento local dele), só para o seu jogo. Cada projeto tem um identificador de jogo, criado junto com ele, que nunca muda. Ele faz parte do nome de todo salvamento, então:

- dois jogos diferentes nunca compartilham salvamentos, mesmo no mesmo site;
- se você exportar o mesmo jogo de novo, ou atualizá-lo, **os jogadores mantêm os salvamentos**, desde que o jogo continue no **mesmo endereço da web**;
- os salvamentos pertencem a um navegador, em um endereço da web, em um computador: eles não acompanham o jogador para outro navegador ou dispositivo, nem para um endereço novo (um novo host ou domínio).

Os salvamentos feitos enquanto você testa no editor são separados (veja [Ferramentas do modo Jogar](/novelworks-docs/pt-br/testing/test-saves-and-read-lines/)).

## Espaços

- **12 espaços manuais**, um **salvamento rápido** e um **salvamento automático**.
- A tela **{rt.game.save}** mostra os espaços de 1 a 12. A tela **{rt.game.load}** mostra primeiro o Salvamento automático e o Salvamento rápido, depois os espaços de 1 a 12.
- Cada espaço mostra uma imagem do momento, o nome da cena, a data e o tempo de jogo (“12:34” ou “1:02:03”).
- Salvar sobre um espaço usado pergunta “Sobrescrever …?”. Excluir um espaço pergunta “Excluir …? Isso não pode ser desfeito.”

## Salvamento rápido e carregamento rápido

- **F5** faz um salvamento rápido durante o jogo (“{tx.game.quickSaved}”): a página não recarrega.
- **F9** faz um carregamento rápido, até mesmo da tela de título. Se não houver salvamento rápido, o jogo diz “{tx.game.noQuickSaveYetPressF5To}” Carregar durante o jogo pergunta “{tx.game.loadThisSaveUnsavedProgressWillBe}”
- As mesmas ações são botões do menu de pausa e, se você os mostrar, do menu rápido.

## Salvamento automático

O jogo salva automaticamente cada vez que o jogador **entra em uma cena diferente**, quando um jogo novo começa, e quando um jogo é carregado pela tela de título ou para outra cena. Ele não salva automaticamente dentro de uma cena. Um salvamento automático que falha é silencioso.

## Continuar

Na tela de título, **{rt.game.continue}** carrega o salvamento mais novo de qualquer tipo (manual, rápido ou automático). Ele não aparece quando não há nenhum salvamento.

## O que um salvamento contém

A cena e o momento, os valores das variáveis, o inventário, as zonas já usadas, o estado do mapa, o tempo de jogo, a música e o som ambiente que estão tocando e as últimas 200 falas do [Histórico](/novelworks-docs/pt-br/player/history/). Ele **não** contém quais falas foram lidas (isso é guardado à parte, para o modo Pular), os [capítulos](/novelworks-docs/pt-br/game-ui/chapters/) alcançados (também guardados à parte), nem o texto que estava sendo digitado: uma fala carregada aparece inteira. Um momento carregado começa no último plano da câmera, e os efeitos, a voz e os efeitos sonoros dele não são reproduzidos.

## Quando você atualiza o jogo

Os salvamentos apontam para cenas e momentos pela identidade deles, então continuam funcionando quando você edita textos, adiciona cenas ou reordena coisas.

- Uma variável que não existe mais, ou cujo tipo mudou (Pontuação para Fato), perde o valor salvo. As variáveis novas começam com o valor inicial.
- Um item que não existe mais é descartado.
- Se o **momento** salvo foi excluído, o jogo retoma no início da cena dele. Se a **cena** foi excluída, retoma na cena inicial.
- Um salvamento danificado, ou de uma versão mais nova do NovelWorks, aparece como um espaço vazio.

## Quando o navegador não permite salvar

Em navegação privada, ou com os dados de sites desativados, o navegador pode bloquear o armazenamento. A tela de salvar então diz “{tx.savesScreen.savingIsNotAvailableInThisBrowser}”, e a tela de carregar diz que não há nada para carregar. Um salvamento rápido explica que “Você pode continuar jogando, mas seu progresso não será mantido.” Se o armazenamento estiver cheio: “Não foi possível gravar o salvamento: o armazenamento do navegador está cheio. Exclua um salvamento antigo e tente de novo.”

As opções dos jogadores e as falas lidas duram então só a sessão.
