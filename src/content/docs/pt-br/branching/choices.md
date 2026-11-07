---
title: Escolhas
description: Deixe o jogador escolher uma opção, mude o que o jogo lembra e leve a outra cena.
---

Um momento **{ui.moments.choice}** mostra ao jogador de dois a seis botões. Cada opção pode mudar o que o jogo lembra e mandar a história para outra cena. Para ver como isso se encaixa no resto, veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/).

## Adicionar uma escolha

Na linha do tempo, adicione um momento **{ui.moments.choice}**. Ele começa com duas opções vazias. Você pode escrever no inspetor ou direto na tela do jogo.

![Uma escolha com duas opções: o que cada uma muda e a cena para onde ela leva.](/novelworks-docs/screenshots/choice-options.png)

## A pergunta

**{ui.branchInspectors.questionOptional}** aparece na caixa de texto acima das opções, como narração sem falante. Deixe vazio se você não precisar dela.

## As opções

Cada opção é um cartão com o número e o texto dela.

- **{ui.branchInspectors.addOption}** adiciona uma. Uma escolha pode ter **até 6 opções**, e o botão fica desativado em 6.
- O X remove uma opção. Uma escolha precisa de **pelo menos 2**, então o X fica desativado quando restam duas.
- Não é possível reordenar as opções arrastando. Para mudar a ordem, edite os textos.

Os jogadores clicam em uma opção ou apertam a tecla do número dela, de 1 a 6.

## Para onde uma opção leva

**{ui.branchInspectors.then}** escolhe o que acontece depois da opção:

- **{ui.linkSelects.continueNextMoment}**: a história segue com o próximo momento da mesma cena.
- uma cena, em **{ui.linkSelects.orGoToScene}**: o jogo entra nessa cena no primeiro momento dela.
- **{ui.linkSelects.newScene}** cria uma cena vazia e a liga.

Se a cena foi excluída, a lista mostra **{ui.linkSelects.deletedScenePickAnother}** e um aviso explica. No jogo, uma cena que falta se comporta como "continuar".

Quando o jogador escolhe uma opção, o jogo primeiro aplica as mudanças dela e depois segue o link.

## O que uma opção muda

Em **{ui.branchInspectors.changes}**, cada opção lista o que o jogo lembra se ela for escolhida. O primeiro botão é **{ui.memory.remember}**: ele cria uma [Pontuação ou um Fato](/novelworks-docs/pt-br/concepts/game-memory/) se você precisar de um e adiciona a mudança de uma só vez. Uma Pontuação começa com "somar 1", um Fato com "definir como Sim".

Cada mudança é uma linha:

- **Uma variável.** Escolha a variável. Para uma Pontuação, escolha **{ui.branchInspectors.add}** ou **{ui.branchInspectors.setTo}** e digite um número. Para um Fato, é sempre **{ui.branchInspectors.setTo}** Sim ou Não. O X remove a mudança.
- **Um item**, quando o recurso Inventário está ligado: **{ui.branchInspectors.giveRemoveAnItem}**. Escolha o item, **{ui.branchInspectors.give_0895a5}** ou **{ui.branchInspectors.remove_7e5608}**, e quantos, para um item acumulável.

Quando o jogo aplica as mudanças, ele segue a ordem. Uma mudança que aponta para uma variável ou item excluído ou não escolhido é ignorada (o editor avisa você). Somar a um Fato não faz nada. Um item único nunca passa de um, e um item acumulável nunca fica abaixo de zero.

## Uma opção que só aparece às vezes

Clique em **{ui.optionCondition.add}**. Aparece um bloco **{ui.optionCondition.title}** com o mesmo editor dos casos de um [Se…](/novelworks-docs/pt-br/branching/conditions/): uma ou mais condições, e **{ui.conditionCases.matchAll}** ou **{ui.conditionCases.matchAny}** quando há várias.

Depois escolha **{ui.optionCondition.whenFalse}**:

- **{ui.optionCondition.hidden}**: a opção não aparece, e os outros botões fecham o espaço.
- **{ui.optionCondition.locked}**: a opção aparece esmaecida e não pode ser escolhida.

**{ui.optionCondition.remove}** faz a opção ficar sempre disponível de novo. Remover a última condição faz o mesmo.

**Os jogadores sempre têm um jeito de seguir em frente.** Se todas as opções ficassem escondidas ou bloqueadas, o jogo mostra todas normalmente.

Uma condição que verifica uma variável ou item excluído ou não escolhido conta como falsa, então a opção fica escondida ou bloqueada, e o editor avisa você.

## No jogo

- As opções são botões empilhados no meio da tela. O visual vem da [Interface do jogo](/novelworks-docs/pt-br/game-ui/game-ui-editor/).
- Os botões aparecem quando o texto terminou de aparecer.
- Uma opção escondida não deixa espaço, e as teclas de número contam os botões que estão **na tela**. Um botão bloqueado ocupa um número, mas não pode ser escolhido.

## Avisos

Um momento com problema mostra um triângulo no cartão e uma caixa "{tx.branchInspectors.thisMomentNeedsYourAttention}" no inspetor. Para uma escolha:

- Esta escolha não tem opções.
- Uma opção não tem texto.
- Uma opção vai para uma cena que foi excluída. Escolha outra cena ou Continuar.
- Uma opção muda uma variável, mas nenhuma está escolhida, ou a variável foi excluída.
- Uma opção usa ou verifica um item que não está escolhido, foi excluído, ou cujo recurso Inventário está desligado.
- Uma opção verifica uma variável que não está escolhida ou foi excluída.

Não há aviso quando todas as opções estão bloqueadas: o jogo mostra todas, como descrito acima.
