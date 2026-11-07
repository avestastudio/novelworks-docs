---
title: Saltos
description: Vá direto para outra cena, por exemplo para reunir dois ramos de novo.
---

Um momento **{ui.moments.jump}** leva a história direto para outra cena. Os jogadores não o veem: o jogo entra na outra cena pelo primeiro momento e não mostra nada no meio. Use-o para reunir dois ramos de novo ou para seguir para a próxima cena.

## Configure

Selecione o momento Salto. No inspetor, escolha a cena em **{ui.branchInspectors.goTo}**. Ao contrário de uma opção de escolha, um salto não tem a entrada “continuar”: ele precisa de uma cena. Na linha do tempo, o cartão mostra “Ir para Park”.

## Bom saber

- Um salto é uma **saída** da sua cena. Os momentos colocados depois dele nunca podem ser alcançados, e o editor avisa sobre eles (“Os jogadores nunca veem este momento…”).
- Se a cena de destino foi excluída, ou se nenhuma foi escolhida, o editor avisa você. No jogo, esse salto continua com o próximo momento da cena.
- Uma cena só pode terminar com um salto. No [mapa da história](/novelworks-docs/pt-br/branching/story-map/), ligar uma cena cujo último salto já tem uma cena é recusado, enquanto um salto sem cena é simplesmente preenchido.
- Saltos que só levam uns aos outros formam um laço infinito: o jogo para depois de 1000 passos automáticos e mostra a tela final. Veja [Condições Se…](/novelworks-docs/pt-br/branching/conditions/).
- No mapa da história, um salto é uma seta com o rótulo “{tx.storyMap.jump}”.
- Os saltos também existem no [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode-conditions/), como `-> Park`.
