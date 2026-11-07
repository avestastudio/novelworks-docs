---
title: A memória do jogo
description: "Pontuações e fatos: como o seu jogo lembra o que o jogador fez."
---

Uma escolha só importa se o jogo **lembrar** dela. O NovelWorks guarda o que aconteceu em **variáveis**. Existem dois tipos.

| Tipo | O que guarda | Exemplo |
|---|---|---|
| **{ui.variables.number}** | Um número que o jogo pode aumentar ou diminuir. | A afeição da Mia, dinheiro |
| **{ui.variables.yesNo}** | Algo aconteceu ou não: **{ui.variables.yes}** ou **{ui.variables.no}**. | “{tx.memory.factExample}”, “Tem a chave” |

Os itens que o jogador carrega (chaves, cartas, moedas…) são uma parte separada e opcional do jogo: veja [Inventário](/novelworks-docs/pt-br/features/inventory/).

## A aba Variáveis

A aba **{ui.leftPanel.variables}** lista as suas variáveis, cada uma com o seu tipo e o valor em que começa (“Pontuação · começa em 0”). Clique em **{ui.variablesTab.newVariable}** para adicionar uma Pontuação chamada “Variável N” (N conta as suas variáveis), depois renomeie-a e defina onde ela começa no inspetor (**{ui.variableInspector.startsAt}**). Você pode mudar o **{ui.variableInspector.type}**: se a variável já estiver em uso, o NovelWorks pede confirmação e redefine os valores.

Se você excluir uma variável que está em uso em algum lugar, o NovelWorks avisa. Os lugares que a usavam continuam lá e mostram um aviso.

## Fazer o jogo lembrar de algo

Quase nunca é preciso começar pela aba Variáveis. Em uma **{ui.moments.choice}**, cada opção tem uma área **{ui.branchInspectors.changes}**. Clique em **{ui.memory.remember}** e o painel pergunta **{ui.memory.rememberTitle}**:

1. Escolha **{ui.memory.scoreTitle}** (um número que sobe ou desce, como “Afeição da Mia”) ou **{ui.memory.factTitle}** (algo que aconteceu: sim ou não, como “{tx.memory.factExample}”) e digite um nome em **{ui.memory.nameLabel}**.
2. Ou escolha uma variável que você já tem com **{ui.memory.orPick}**.
3. Clique em **{ui.memory.createAndUse}**.

O NovelWorks cria a variável, se ela for nova, e adiciona a mudança à opção em um só passo. Uma Pontuação começa com “somar +1” e um Fato com “definir como Sim”. Depois você pode editar o valor.

## Usar o que o jogo lembra

Um momento **{ui.moments.condition}** leva a história a cenas diferentes, conforme uma variável, e uma opção de escolha pode aparecer só quando uma condição é verdadeira. Para uma Pontuação, você pode testar: é, não é, pelo menos, no máximo, maior que, menor que. Para um Fato: é, não é. Veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/) e [Condições Se…](/novelworks-docs/pt-br/branching/conditions/).

## A que as suas escolhas podem chegar

Sob um teste de Pontuação, o NovelWorks mostra o que é possível, para você não precisar contar à mão:

- “Suas escolhas podem somar até +5 a Afeição no total.”
- “No total, suas escolhas podem levar Afeição de 0 a 5.”
- “Nada muda Afeição ainda: fica em 0.”

Quando você digita um número para comparar, ele diz “Isso pode acontecer” ou avisa “Isso nunca será verdade: Afeição fica entre 0 e 5”. Nada é dito quando o NovelWorks não sabe até onde uma Pontuação pode subir ou descer (por exemplo, quando uma cena se repete em ciclo, ou uma zona funciona toda vez), porque o total não tem limite.

Experimente um momento **{ui.moments.condition}** com a caixa **{ui.memory.tryTitle}**: escolha um valor para fingir e ela mostra qual caso é verdadeiro e para onde a história iria, sem precisar jogar.
