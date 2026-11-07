---
title: "Aonde suas escolhas podem levar (até +5)"
description: O que significa a frase sob um teste de Pontuação, como ela é calculada e o que ela não sabe.
---

Quando você testa um **{ui.variables.number}** num [Se…](/novelworks-docs/pt-br/branching/conditions/), na condição de uma opção ou numa zona de exploração, o NovelWorks adiciona uma linha sob o teste. Ela diz a que suas escolhas podem chegar somadas, para você não precisar contar à mão. A mesma frase aparece no inspetor da variável.

## As frases

| Você vê | Significado |
|---|---|
| “Suas escolhas podem somar até +5 a Affection no total.” | A Pontuação começa no valor inicial e suas escolhas só podem aumentá-la, em 5 no máximo. |
| “No total, suas escolhas podem levar Affection de 0 a 5.” | Algumas escolhas também a diminuem, então há um valor mais baixo e um mais alto. |
| “Nada muda Affection ainda: fica em 0.” | Nenhuma escolha muda esta Pontuação. |
| “{tx.reachHint.possible}” | Para um número que você digitou para comparar: ele está dentro do que é possível. |
| “⚠ Isso nunca será verdade: Affection fica entre 0 e 5.” | O teste exige um valor que a Pontuação nunca pode alcançar, então esse caso nunca pode ser escolhido. |

Nada é dito sobre um Fato (sim ou não), pois ele não tem intervalo.

## Como é calculada

O NovelWorks olha para **o projeto inteiro**, não para um só caminho:

- A Pontuação começa no valor inicial.
- Em cada momento de **escolha**, o jogador toma uma opção. O NovelWorks soma a **melhor** opção (a que mais pode adicionar) ao valor mais alto, e a **pior** opção (a que mais pode tirar) ao valor mais baixo.
- Uma zona de exploração configurada como **{ui.explorationInspectors.onceOnly}** que muda a Pontuação conta uma vez. Uma zona configurada como **{ui.explorationInspectors.everyTime}** (o padrão) pode ser usada várias vezes, então ela deixa esse lado sem limite: veja “Quando nada é dito”.
- Uma mudança **“{tx.branchInspectors.setTo}”** deixa o intervalo largo de propósito: o valor mais baixo é o menor entre o valor inicial e os valores para os quais ela pode definir, e o mais alto é o maior deles. As adições que vêm depois ainda contam.

## Quando nada é dito

Se uma parte da sua história pode se repetir (uma cena que volta para si mesma, um local do mapa que o jogador pode visitar de novo, ou **qualquer zona de exploração que funciona “{ui.explorationInspectors.everyTime}”, que é o padrão**), o total pode crescer sem limite nesse lado. Por isso uma Pontuação mudada por uma zona padrão não recebe frase nenhuma: configure a zona como “{ui.explorationInspectors.onceOnly}” se quiser que o NovelWorks a conte. O NovelWorks então não diz nada sobre esse lado, porque prefere não dizer nada a dizer algo errado. Só a linha “Nada muda … ainda” continua aparecendo quando nada muda a Pontuação.

## O que ela não sabe

A frase é cuidadosa, mas não acompanha a história:

- Ela ignora a **ordem** das cenas e o caminho que o jogador toma.
- Ela conta opções escondidas por uma condição, porque não sabe se estarão disponíveis.
- Então “pode somar até +5” significa “você não consegue chegar a mais de 5”, não “todo jogador consegue chegar a 5”.

Uma condição marcada como “nunca será verdade” é confiável. Uma condição marcada como “isso pode acontecer” só quer dizer que não está descartada.
