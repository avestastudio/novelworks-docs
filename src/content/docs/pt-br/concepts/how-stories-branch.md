---
title: Como uma história se ramifica
description: Escolhas, condições, saltos e finais, e como ver para onde a sua história vai.
---

Uma história se ramifica quando pode ir para **outra cena**. Quatro tipos de momento fazem isso.

| Momento | O que faz |
|---|---|
| **{ui.moments.choice}** | O jogador escolhe uma opção entre 2 e 6. Cada opção pode mudar variáveis e levar a uma cena. |
| **{ui.moments.condition}** | O jogo confere o que lembra e envia a história para uma cena. Os jogadores nunca o veem. |
| **{ui.moments.jump}** | Vai direto para uma cena. Os jogadores nunca o veem. |
| **{ui.moments.ending}** | Mostra o nome do final e depois volta para a tela de título. |

Um momento **{ui.moments.exploration}** também pode levar a cenas, pelas zonas em que o jogador clica.

## Escolhas

No inspetor, escreva uma pergunta (opcional) e depois o texto de cada opção. Para cada opção:

- **{ui.branchInspectors.changes}**: o que o jogo lembra se o jogador a escolher (veja [A memória do jogo](/novelworks-docs/pt-br/concepts/game-memory/)).
- **{ui.branchInspectors.then}**: a cena para onde ela leva. Você também pode deixar a história continuar com o momento seguinte.
- **{ui.optionCondition.add}**: a opção aparece só quando uma condição é verdadeira. Depois escolha o que acontece nos outros casos: **{ui.optionCondition.hidden}** ou **{ui.optionCondition.locked}**. Os jogadores sempre têm um jeito de continuar: se nenhuma opção pudesse ser escolhida, todas aparecem. **{ui.optionCondition.remove}** torna a opção disponível de novo.

Os jogadores clicam em uma opção ou apertam a tecla do número dela, de 1 a 6. Uma escolha precisa de pelo menos duas opções.

## Se…

Um momento **{ui.moments.condition}** tem um ou mais **casos**, conferidos **de cima para baixo**. Vale o primeiro caso que for verdadeiro.

![Um Se… confere o Caso 1, depois o Caso 2, e então vai para o senão.](/novelworks-docs/diagrams/if-order.svg)

- Cada caso tem uma ou mais condições. Escolha se **{ui.conditionCases.matchAll}** ou **{ui.conditionCases.matchAny}**, e clique em **{ui.conditionCases.addTest}** para adicionar mais.
- Cada caso tem uma cena para onde ir. Use **{ui.conditionCases.addCase}** para outro caso, e as setas para mudar a ordem.
- *senão* é para onde a história vai quando nenhum caso é verdadeiro. Se você não escolher nenhuma cena, a história continua com o momento seguinte.

## Saltos e finais

Um **{ui.moments.jump}** precisa só de uma cena para onde ir. Um **{ui.moments.ending}** tem um nome (**{ui.branchInspectors.endingName}**) e um texto curto opcional. Uma história pode ter quantos finais você quiser.

## Ver para onde a história vai

### A barra "{tx.branches.whereTitle}"

Acima da tela do jogo, um botão pequeno para cada saída do momento selecionado mostra para onde ela leva, até quatro e depois "+N". Uma frase longa demais termina com "…" (o texto completo está na dica). Clique em um deles para ir para essa cena. Um botão "Voltar" leva você ao ponto onde estava (os últimos 20 passos são lembrados). No primeiro momento de uma cena, uma lista mostra o que leva **até** a cena.

### A linha Ramificações

Abaixo das miniaturas e do gráfico de palco, a linha **{ui.branches.rowTitle}** marca todos os momentos que saem da cena, alinhada com o momento:

![O gráfico abaixo das miniaturas, com a linha Ramificações: uma bifurcação no momento 3 e uma bandeira no momento 6.](/novelworks-docs/diagrams/branches-row.svg)

- uma bifurcação: uma escolha ou um Se…;
- uma seta: um salto;
- um ponteiro: uma zona de exploração;
- uma bandeira: um final, com o nome dele;
- um ícone de mapa: um momento Mostrar mapa.

Ao lado do ícone está o nome da primeira cena para onde ele leva, e "+N" se houver mais saídas. Uma marca fica vermelha se faltar uma cena. Aponte para uma marca para listar todas as saídas e clique nela para selecionar o momento. Um botão recolhe a linha.

A aba Cenas também mostra quantas ramificações cada cena tem.

### O mapa da história

O **{ui.topBar.storyMap}** mostra todas as cenas do seu jogo e o que liga uma à outra. Clique em uma cena para vê-la e dê dois cliques para abri-la. Sem nenhuma cena selecionada, o painel da direita é a lista dos finais do jogo (**{ui.endings.title}**) e do que leva a cada um. Um final ao qual nada leva é sinalizado, porque os jogadores não conseguem chegar a ele. Veja [O mapa da história](/novelworks-docs/pt-br/branching/story-map/).
