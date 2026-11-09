---
title: Efeitos
description: Adicione entradas, saídas, reações, efeitos de tela, partículas e transições a um momento.
---

Os efeitos acontecem quando um momento chega. Selecione um momento, abra a aba **{ui.inspectorTabs.effects}** do [painel do momento](/novelworks-docs/pt-br/writing/moment-panel/) e clique em **{ui.effects.open}**.

![A janela de efeitos: as seis categorias no alto, a tela do jogo, os quadros de efeitos e a lista dos efeitos deste momento.](/novelworks-docs/screenshots/effects-library.png)

## As seis categorias

Cada categoria tem cinco efeitos.

| Categoria | Efeitos |
|---|---|
| **{ui.effects.category.enter}** | **{ui.effects.name.fade}**, **{ui.effects.name.slideLeft}**, **{ui.effects.name.slideRight}**, **{ui.effects.name.rise}**, **{ui.effects.name.zoomIn}** |
| **{ui.effects.category.exit}** | **{ui.effects.name.fade}**, **{ui.effects.name.slideLeft}**, **{ui.effects.name.slideRight}**, **{ui.effects.name.fall}**, **{ui.effects.name.zoomOut}** |
| **{ui.effects.category.reaction}** | **{ui.effects.name.jump}**, **{ui.effects.name.shake}**, **{ui.effects.name.nod}**, **{ui.effects.name.recoil}**, **{ui.effects.name.surprise}** |
| **{ui.effects.category.screen}** | **{ui.effects.name.flash}**, **{ui.effects.name.lightning}**, **{ui.effects.name.quake}**, **{ui.effects.name.blackout}**, **{ui.effects.name.pulse}** |
| **{ui.effects.category.particles}** | **{ui.effects.particle.rain}**, **{ui.effects.particle.snow}**, **{ui.effects.particle.petals}**, **{ui.effects.particle.leaves}**, **{ui.effects.particle.fireflies}** |
| **{ui.effects.category.transition}** | **{ui.effects.name.fade}**, **{ui.effects.name.black}**, **{ui.effects.name.wipe}**, **{ui.effects.name.iris}**, **{ui.effects.name.curtain}** |

## Adicionar um efeito

1. Escolha uma categoria.
2. Clique em um efeito. Ele é reproduzido na tela da janela, então você pode experimentar quantos quiser.
3. Para **{ui.effects.category.enter}**, **{ui.effects.category.exit}** e **{ui.effects.category.reaction}**, escolha o personagem.
4. Ajuste as configurações.
5. Clique em **{ui.effects.add}**.

| Configuração | Onde | Faixa |
|---|---|---|
| **{ui.camera.seconds}** | Todos, menos partículas | 0,2 a 3 segundos |
| **{ui.effects.intensity}** | Reações, efeitos de tela e partículas | 10 a 100 % |
| **{ui.effects.speed}** | Partículas | 20 a 200 % |

Os efeitos que você adicionou ficam listados em **{ui.effects.ofThisMoment}**. O X em cada um o remove. Um momento pode ter até 12 efeitos, sem contar as partículas.

**{ui.effects.playAll}** reproduz a lista inteira na janela.

## Em que ordem

Os efeitos são reproduzidos uma vez, quando o momento chega, um depois do outro, na ordem da lista.

Uma transição sempre vem primeiro, onde quer que esteja na lista. Se você adicionar várias transições a um momento, só a primeira é reproduzida.

## Saídas

Se você escolher uma saída para um personagem em cena, o personagem também sai de cena neste momento. Uma saída só é reproduzida para um personagem que realmente sai aqui.

## Partículas

As partículas são diferentes dos outros efeitos. Elas continuam de um momento para o outro, como um ambiente, até você pará-las. **{ui.stage.scopeLabel}** funciona como sempre: veja [O palco](/novelworks-docs/pt-br/concepts/stage/).

Um momento mostra um tipo de partícula de cada vez. Para pará-las, clique no X das partículas na lista (**{ui.effects.stopParticles}**).

## Entrada e saída padrão

Você pode dar a todos os personagens o mesmo jeito de chegar e de sair, para o jogo inteiro. Vá em **{ui.topBar.gameUI}**, **{ui.gameUI.fontsColors}**, **{ui.effects.defaultsTitle}**, e escolha **{ui.effects.defaultEnter}** e **{ui.effects.defaultExit}**.

Elas são usadas sempre que um momento não tem efeito próprio para aquele personagem. **{ui.effects.defaultNone}** é a configuração de um jogo novo.

## No jogo

- O primeiro clique termina os efeitos na hora. O clique seguinte avança. As partículas continuam caindo.
- Quando o jogador pula ou carrega um jogo salvo, os efeitos não são reproduzidos.
- Se o jogador tiver pedido ao sistema menos movimento, os efeitos não são reproduzidos e as partículas ficam paradas.

O modo Roteiro não consegue escrever efeitos. Ele os mantém quando você edita o texto.

A demo inclui alguns dos efeitos. Você pode experimentar os outros na janela, mas não adicioná-los. Veja [Demo e versão completa](/novelworks-docs/pt-br/getting-started/demo-edition/).
