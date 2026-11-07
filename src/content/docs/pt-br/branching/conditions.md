---
title: "Condições Se…"
description: Mande a história para cenas diferentes conforme o que o jogo lembra, com quantos casos você precisar.
---

Um momento **{ui.moments.condition}** verifica o que o jogo lembra e manda a história para uma cena. **Os jogadores nunca o veem:** o jogo o verifica e segue em frente na hora. Para ver a ideia em imagens, veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/).

## Casos

Um Se… é uma lista de **casos**, verificados **de cima para baixo**. Vale o primeiro caso que for verdadeiro. Cada caso tem:

- uma ou mais **condições**;
- a cena para onde ir (“ir para”).

Depois do último caso vem o *senão*: para onde a história vai quando nenhum caso é verdadeiro.

Um novo Se… tem um caso com uma condição vazia. Com um único caso, ele aparece de forma simples. Com dois ou mais, cada caso é um cartão com o título “Caso 1”, “Caso 2”…

![O inspetor de um momento Se…, com uma condição, “ir para” e “senão”.](/novelworks-docs/screenshots/if-conditions.png)

- **{ui.conditionCases.addCase}** adiciona um caso no fim.
- As setas de um cartão movem o caso para cima ou para baixo. A ordem importa, porque vale o primeiro caso que for verdadeiro.
- Um botão no cartão remove o caso. Um Se… sempre mantém pelo menos um.

![Um Se… verifica o Caso 1, depois o Caso 2, e então vai para senão.](/novelworks-docs/diagrams/if-order.svg)

## Condições

Uma condição começa com a palavra “Se” e verifica uma variável ou um item. A opção **{ui.branchInspectors.whatToCheck}** (Variável ou Item) aparece quando o recurso Inventário está ligado.

### Uma variável

Escolha a variável, a comparação e o valor.

| Tipo | Comparações |
|---|---|
| **{ui.variables.number}** | {ui.conditionTests.is}, {ui.moments.isNot}, {ui.moments.atLeast}, {ui.moments.atMost}, {ui.moments.moreThan}, {ui.moments.lessThan} |
| **{ui.variables.yesNo}** | {ui.conditionTests.is}, {ui.moments.isNot} |

Embaixo de um teste de Pontuação, uma linha diz a que total as suas escolhas podem chegar e se o teste pode algum dia ser verdadeiro. Veja [Aonde suas escolhas podem levar](/novelworks-docs/pt-br/branching/reach/). Se você ainda não tem nenhuma variável, o editor avisa e diz para criar uma na aba Variáveis.

### Um item

“Se o jogador” **{ui.conditionTests.has}**, **{ui.conditionTests.doesnTHave}** ou (para um item acumulável) **{ui.conditionTests.hasAtLeast}** uma quantidade daquele item.

### Várias condições em um caso

Clique em **{ui.conditionCases.addTest}**. Depois escolha como elas se combinam:

- **{ui.conditionCases.matchAll}**: todas as condições precisam ser verdadeiras (“{tx.conditionCases.and}”);
- **{ui.conditionCases.matchAny}**: basta uma (“ou”).

A seleção aparece quando um caso tem duas ou mais condições. Para remover uma, use **{ui.conditionCases.removeTest}**, que só aparece quando há mais de uma. Com uma condição só, a opção de combinação some.

## Para onde ir

Embaixo de cada caso: a cena para onde ir. Um caso precisa de uma cena (o editor avisa quando ele não tem). Depois vem o *senão*, que também pode ser “{tx.linkSelects.continueNextMoment}”. Se você não escolher cena para o *senão*, a história simplesmente continua com o próximo momento.

## O que o jogo faz

- Os casos são tentados de cima para baixo. Vale o primeiro que for verdadeiro.
- Se nenhum é verdadeiro, o jogo vai para o *senão*, ou continua se não houver.
- Um caso vencedor sem cena, ou com uma cena excluída, continua com o próximo momento.
- **Se o jogo chega a um caso que verifica uma variável ou um item que foi excluído ou nunca foi escolhido, ele não adivinha:** ignora o Se… inteiro e continua com o próximo momento, sem olhar os casos de baixo nem o *senão*. (Um caso acima dele que seja verdadeiro ainda vence primeiro.) Em um caso em que só uma entre várias condições é necessária (**{ui.conditionCases.matchAny}**), uma única coisa faltando estraga o caso inteiro. O editor avisa você, então corrija o aviso.
- As Pontuações são comparadas com o valor atual, ou com o valor inicial se o jogador ainda não as mudou.

## Laços

Se vários Se… e saltos só levam de volta uns aos outros (a cena A vai para B, e B volta direto para A), o jogo não consegue seguir. Depois de 1000 passos automáticos seguidos ele para e mostra a tela final, e o editor não avisa você. Garanta que todo laço contenha algo que o jogador faz, como uma fala de diálogo ou uma escolha.

## Experimentar

Embaixo dos casos, **{ui.memory.tryTitle}** permite conferir o seu Se… sem jogar. Imagine que uma Pontuação tem um valor, ou que o jogador tem uma quantidade de um item, e o NovelWorks diz para onde a história iria:

- “O caso 2 é verdadeiro: vai para …”;
- “Senão: vai para …”, ou “{tx.memory.tryContinue}”;
- “{tx.memory.tryPickFirst}” quando uma condição não está terminada.

Ele usa as mesmas regras do jogo. Com um caso e uma condição, há uma caixa; senão, há uma caixa para cada variável ou item usado.

## Na linha do tempo

Um cartão mostra o primeiro caso (“Se Affection ≥ 2 → Park”) e a tela do jogo lista uma linha por caso, depois o *senão*.

## Avisos

- Escolha a variável ou o item que esta condição verifica.
- Esta condição verifica uma variável ou um item que foi excluído, ou um item enquanto o recurso Inventário está desligado.
- Escolha a cena para onde ir quando a condição é verdadeira.
- Quando verdadeira, ou no senão, isto vai para uma cena que foi excluída.

## As mesmas condições em outros lugares

As condições de uma opção em uma [escolha](/novelworks-docs/pt-br/branching/choices/) usam o mesmo editor, com uma diferença: uma condição que verifica algo que falta conta como falsa (a opção fica escondida ou bloqueada) em vez de ignorar tudo.
