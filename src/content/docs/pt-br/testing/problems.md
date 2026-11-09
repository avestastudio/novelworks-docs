---
title: "Problemas: todos os avisos"
description: Onde o editor avisa que algo está errado e a lista completa de avisos, com o que fazer.
---

O editor avisa quando algo na sua história está incompleto ou nunca vai funcionar, para você corrigir antes de os jogadores verem. **Um aviso nunca te impede de nada:** você ainda pode jogar e exportar. O jogo em si nunca trava por causa desses problemas: um link que falta significa apenas “continuar com o próximo momento”.

## Onde os avisos aparecem

- **Em um cartão de momento** na linha do tempo, um triângulo de aviso. Aponte para ele para ler todos os problemas desse momento.
- **No inspetor** do momento, uma caixa “{tx.branchInspectors.thisMomentNeedsYourAttention}” lista os problemas.
- **Na aba Cenas**, uma etiqueta vermelha **{ui.scenesTab.unreachable}** em uma cena para a qual nada leva.
- **No [mapa da história](/novelworks-docs/pt-br/branching/story-map/)**, um selo de aviso com uma contagem em um cartão de cena, e a etiqueta **{ui.storyMap.unreachable}**. O filtro **{ui.storyMap.problems}** destaca as cenas que têm avisos ou são inacessíveis. A etiqueta “{tx.storyMap.gameEndsHere}” é uma informação, não um aviso.
- **No espaço de trabalho Mapa**, uma caixa “Verificar seu mapa”.
- **Ao exportar**, uma lista de “pontos a verificar antes” para o jogo inteiro. Veja [Exportação para web](/novelworks-docs/pt-br/publish/web-export/).
- **No [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/)**, um conjunto separado de sublinhados amarelos nas linhas.

Não há contador de problemas na barra superior nem painel que liste tudo: a janela de exportação é o único lugar que lista de uma vez os problemas do jogo inteiro.

## Qualquer momento

| Aviso | O que significa e o que fazer |
|---|---|
| Os jogadores nunca veem este momento: um final, um salto, um momento “{tx.moments.showMap}” ou uma exploração sem zona Continuar vem antes dele nesta cena. | Um momento colocado depois de um que sai da cena. Mova-o ou exclua-o. |

## Escolha

| Aviso | O que fazer |
|---|---|
| Esta escolha não tem opções. | Adicione opções. |
| A opção N não tem texto. | Digite o texto da opção. |
| A opção N vai para uma cena que foi excluída. Escolha outra cena ou Continuar. | Escolha outra cena, ou “Continuar”. |
| A opção N muda uma variável, mas nenhuma foi escolhida. / … que foi excluída. | Escolha uma variável. |
| A opção N usa um item, mas nenhum foi escolhido. / … que foi excluído. / … mas o recurso Inventário está desativado. | Escolha um item, ou ative o Inventário em Recursos. |
| A opção N verifica uma variável ou um item, mas nenhum foi escolhido. / … que foi excluído. / … mas o recurso Inventário está desativado. | Corrija a condição da opção. |

## Se…

| Aviso | O que fazer |
|---|---|
| Escolha a variável que esta condição verifica. | Escolha uma variável. |
| Escolha o item que esta condição verifica. | Escolha um item. |
| Esta condição verifica uma variável que foi excluída. / um item que foi excluído. | Escolha outro. |
| Esta condição verifica um item, mas o recurso Inventário está desativado. | Ative o Inventário. |
| Escolha a cena de destino quando a condição for verdadeira. | Escolha uma cena. |
| Quando verdadeira, isto vai para uma cena que foi excluída. / Caso contrário, isto vai para uma cena que foi excluída. | Escolha outra cena. |

Lembre que um Se… com condição quebrada é ignorado pelo jogo. Veja [Condições Se…](/novelworks-docs/pt-br/branching/conditions/).

## Salto

| Aviso | O que fazer |
|---|---|
| Escolha a cena de destino. | Escolha uma cena. |
| Isto vai para uma cena que foi excluída. | Escolha outra cena. |

## Momento de item

| Aviso | O que fazer |
|---|---|
| Escolha o item a dar. / Escolha o item a remover. | Escolha um item. |
| Este momento dá um item que foi excluído. / … remove um item que foi excluído. | Escolha outro item. |
| O recurso Inventário está desativado: os jogadores não têm inventário. Ative-o em Recursos. | Ative o Inventário. |

## Momento de exploração

| Aviso | O que fazer |
|---|---|
| Desenhe pelo menos uma zona para o jogador clicar. | Desenhe uma zona. |
| “Zona” vai para uma cena, mas nenhuma foi escolhida. / vai para uma cena que foi excluída. (Também “… vai para uma cena quando o item é usado, mas nenhuma foi escolhida.”) | Escolha uma cena. |
| “Zona” não tem nada a dizer quando examinada. / … quando o item é usado. | Digite a fala que ela mostra. |
| “Zona” verifica uma variável ou um item, mas nenhum foi escolhido. / … que foi excluído. / … mas o recurso Inventário está desativado. (a condição dela) | Corrija a condição. |
| “Zona” usa um item, mas nenhum foi escolhido. / … que foi excluído. / … mas o recurso Inventário está desativado. | Corrija o item. |
| “Zona” é examinada por um personagem que foi excluído. | Escolha outro falante. |
| “Zona” muda uma variável, mas nenhuma foi escolhida. / … que foi excluída. | Escolha uma variável. |
| “Zona” precisa de um item que os jogadores nunca conseguem obter. | Dê o item em algum lugar (um momento de item, uma escolha ou uma zona de pegar). |
| “Zona” nunca poderá ser usada: a condição dela nunca é verdadeira. | Confira o que muda a variável ou dá o item. |
| Um objeto de cena não tem imagem. / Um objeto de cena está vinculado a uma zona que foi excluída. | Escolha uma imagem, ou vincule o objeto de cena a outra zona. |
| Os jogadores podem ficar presos aqui: nenhuma zona clicável leva a outra cena ou continua a história. | Adicione uma zona que leve a uma cena ou continue. |

## Mapa

| Aviso | O que fazer |
|---|---|
| O recurso Mapa está desativado: este momento não faz nada. Ative-o em Recursos. | Ative o Mapa em Recursos (este é o aviso de um momento “{tx.moments.showMap}”). |
| Crie seu mapa em Mapa e adicione um fundo. / O momento do mapa foi excluído. Escolha outro momento de exploração. / O momento do mapa não é mais uma exploração. Escolha outro. | Crie ou corrija o mapa. Em um momento “{tx.moments.showMap}”, estes terminam com “Até lá, este momento não faz nada.” |
| Adicione uma imagem de fundo em Mapa. | Escolha um fundo. |
| Os jogadores nunca poderão abrir o mapa: o jogo não tem cena inicial. | Defina uma cena inicial. |
| Os jogadores nunca poderão abrir o mapa: o botão Mapa está desligado / à espera de um momento “{tx.moments.showMap}” e nenhum momento “{tx.moments.showMap}” pode ser alcançado. Adicione um ou deixe o mapa sempre disponível. | Adicione um momento “{tx.moments.showMap}”, ou mude a disponibilidade do mapa. |

## Jogo inteiro (janela de exportação)

| Aviso | O que fazer |
|---|---|
| O jogo ainda não tem cenas: os jogadores verão só a tela de título. | Adicione uma cena. |
| Nenhuma cena inicial definida: Novo jogo irá direto para o final. | Defina uma cena inicial com a estrela. |
| Os jogadores nunca chegam a esta cena: nenhuma escolha, condição, salto ou zona leva até ela. (Só quando o jogo tem mais de uma cena.) | Ligue-a a algo, ou exclua-a. |
| Esta cena não tem momentos. | Adicione um momento. |
| Os jogadores nunca veem estes momentos: um final, um salto ou uma exploração sem zona Continuar vem antes deles nesta cena. | Mova-os ou exclua-os. |

A janela de exportação também lista os avisos próprios de cada momento, como “Cena, momento 4 — mensagem”.

## Links que você não pode fazer no mapa

Quando você arrasta um link no mapa da história, um tipo de link que não pode valer fica acinzentado, com um motivo: a cena termina com um final, já termina com um salto, termina com uma exploração (adicione uma zona no lugar) ou a escolha dela já tem 6 opções.

## O que não é verificado

Um momento de diálogo não tem aviso próprio: uma fala de diálogo vazia não é sinalizada. Roupas, ambientes, a câmera, efeitos e sons também não têm avisos.
