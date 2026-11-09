---
title: Variáveis
description: Crie e gerencie as Pontuações e os Fatos que o seu jogo lembra, e veja onde cada um é usado.
---

Uma **variável** é algo que o jogo lembra. Há dois tipos, explicados em [A memória do jogo](/novelworks-docs/pt-br/concepts/game-memory/): uma **{ui.variables.number}** (um número que sobe ou desce, como a afeição da Mia ou o dinheiro) e um **{ui.variables.yesNo}** (se algo aconteceu: sim ou não, como “{tx.memory.factExample}” ou “Tem a chave”).

As coisas que o jogador carrega (chaves, moedas…) não são variáveis. Elas são itens, parte do recurso [Inventário](/novelworks-docs/pt-br/features/inventory/).

## A aba Variáveis

A aba **{ui.leftPanel.variables}** lista todas as variáveis com o tipo e o valor inicial de cada uma (“Pontuação · começa em 0”). Clique em **{ui.variablesTab.newVariable}** para adicionar uma. Em um projeto vazio, a aba explica o que são variáveis.

Uma nova variável se chama “Variável N”, onde N é o número de variáveis que você já tem mais um (ou o próximo número, se esse nome já existir). Ela é uma Pontuação que começa em 0. Selecione-a para editá-la no inspetor.

Você também pode criar uma variável na hora em que precisa dela, com **{ui.memory.remember}** em uma escolha. Veja [Escolhas](/novelworks-docs/pt-br/branching/choices/).

## O inspetor de variável

- **{ui.variableInspector.name}**: por exemplo “{tx.variablesTab.miaAffection}”. Renomear é seguro: tudo o que usa a variável acompanha o novo nome.
- **{ui.variableInspector.type}**: Pontuação ou Fato.
- **{ui.variableInspector.startsAt}**: o valor com que todo jogo novo começa.
- Para uma Pontuação, uma frase sobre o total a que as suas escolhas podem chegar. Veja [Aonde suas escolhas podem levar](/novelworks-docs/pt-br/branching/reach/).
- **{ui.memory.changedBy}** e **{ui.memory.checkedBy}**: as listas logo abaixo.

### Onde uma variável é usada

As duas listas mostram onde a variável é usada, com a cena e o número do momento. Clique em uma linha para ir até lá. Uma variável é *alterada* por uma opção de escolha ou por uma zona de exploração, e *verificada* pela condição de uma opção, por um Se… ou por uma zona. Se nada a altera ainda, o inspetor diz isso, e o mesmo vale para as verificações.

## Mudar o tipo

Se a variável já é usada, o NovelWorks pede que você confirme e lista onde. Os valores nesses lugares são redefinidos para combinar com o novo tipo:

- o valor inicial vira 0 para uma Pontuação, ou Não para um Fato;
- toda mudança e todo teste dessa variável é redefinido: para 0 em uma Pontuação, para Sim em um Fato;
- um Fato só pode ser definido, então um “{tx.branchInspectors.add}” vira “{tx.branchInspectors.setTo}”, e uma comparação que não serve para o novo tipo vira “é”.

Se a variável não é usada, o tipo muda na hora.

## Excluir uma variável

O NovelWorks pede que você confirme. Se a variável é usada, ele lista onde e avisa que **esses lugares vão mostrar um aviso até você escolher outra variável**. Só a variável é removida: as mudanças e os testes que a usavam são mantidos, mostram um aviso e aparecem como “{tx.linkSelects.deletedVariablePickAnother}”.

## Variáveis e os saves do jogador

O jogo guarda o valor de cada variável no save do jogador. Quando um save é carregado:

- as variáveis que ainda existem, com o mesmo tipo, recebem o valor salvo;
- os valores de variáveis que foram excluídas, ou cujo tipo mudou, são descartados;
- as variáveis acrescentadas depois começam com o valor inicial.

Assim você pode atualizar o seu jogo sem quebrar saves antigos.

## Onde as variáveis podem ser usadas

Nas mudanças de uma opção de escolha, nas condições de uma opção, nos testes de um [Se…](/novelworks-docs/pt-br/branching/conditions/), nas zonas de exploração (as condições delas e a ação “mudar uma variável”) e dentro de uma fala, para mostrar o valor dela (veja [Formatar o seu texto](/novelworks-docs/pt-br/writing/rich-text/)).
