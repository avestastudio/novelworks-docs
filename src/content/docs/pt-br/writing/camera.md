---
title: A câmera
description: Escolha o que o jogador vê, encadeie vários planos em um momento e adicione profundidade, desfoque e efeitos de filme.
---

A câmera decide que parte da cena o jogador vê: a tela inteira ou um close. Selecione um momento, abra a aba **{ui.inspectorTabs.effects}** do [painel do momento](/novelworks-docs/pt-br/writing/moment-panel/) e clique em **{ui.camera.open}**.

![A janela da câmera: a cena com o quadro, os movimentos prontos no alto, as configurações na lateral e os planos embaixo.](/novelworks-docs/screenshots/camera-window.png)

Na tela do jogo do editor, você sempre vê a cena inteira. A pequena prévia na aba **{ui.inspectorTabs.effects}** mostra o que o jogador vê.

## Planos

Um momento tem um plano ou mais, mostrados em uma fileira embaixo da janela. Cada plano é um quadro sobre a cena, e a câmera vai de um para o outro.

- **Arraste** o quadro sobre a cena para escolher o que o jogador vê.
- **{ui.camera.addShot}** (o sinal de mais) adiciona um plano, até 6.
- **{ui.camera.removeShot}** exclui o plano selecionado.
- **{ui.camera.play}** reproduz os planos na janela. **{ui.camera.stop}** interrompe.

## Movimentos prontos

Os botões no alto escrevem os planos para você. Eles substituem os planos que você tinha e mantêm as configurações do momento inteiro. Os movimentos que se aproximam miram no primeiro personagem em cena, ou no meio da tela se não houver ninguém.

| Movimento | O que faz |
|---|---|
| **{ui.camera.preset.fixed}** | A tela inteira, sem movimento. |
| **{ui.camera.preset.slowZoom}** | Da tela inteira, aproximando devagar. |
| **{ui.camera.preset.travelling}** | Desliza pela cena em velocidade constante. |
| **{ui.camera.preset.reveal}** | Começa de perto e depois recua até a tela inteira. |
| **{ui.camera.preset.focus}** | Aproxima um pouco enquanto o cenário fica desfocado. |
| **{ui.camera.preset.tension}** | Da tela inteira a um close inclinado, com um pouco de desfoque. |

## Enquadrar um personagem

**{ui.camera.frameOn}** mostra os personagens em cena. Clique em um para colocar o quadro no rosto dele. O quadro fica onde está: ele não acompanha o personagem se ele se mover depois.

## Configurações de um plano

| Configuração | O que faz |
|---|---|
| **{ui.camera.zoom}** | De 100 % (a tela inteira) a 400 %. |
| **{ui.camera.arrive}** | Como a câmera chega a este plano: **{ui.camera.smooth}**, **{ui.camera.steady}**, **{ui.camera.quick}** ou **{ui.camera.cut}**. Para o plano inicial, esta configuração é **{ui.camera.arriveFirst}**. |
| **{ui.camera.seconds}** | Quanto tempo a câmera leva para chegar lá, de 0,2 a 8 segundos. |
| **{ui.camera.hold}** | Mostrado no lugar para um plano alcançado de imediato: quanto tempo ele fica antes do próximo. |
| **{ui.camera.blur}** | Desfoca o cenário, não os personagens. |
| **{ui.camera.tilt}** | Inclina o plano, até 12 graus para cada lado. |

No primeiro momento de uma cena, o plano inicial não tem de onde vir. Ele mostra **{ui.camera.start}**.

## Configurações do momento inteiro

Em **{ui.camera.wholeMoment}**:

- **{ui.camera.bars}**
- **{ui.camera.vignette}**
- **{ui.camera.grain}**
- **{ui.camera.fadeIn}**
- **{ui.camera.handheld}**
- **{ui.camera.depth}**. Começa em 100 %, e você pode baixar até 0.

**{ui.camera.foreground}** coloca uma imagem na frente dos personagens, como galhos ou o vidro de uma janela. Ela cobre a tela inteira, então use uma imagem com áreas transparentes. Com profundidade, ela se move mais do que os personagens. Os cliques passam através dela.

**{ui.camera.reset}** remove a câmera deste momento: todos os planos e as configurações do momento inteiro. O primeiro plano fica.

## Quanto tempo dura

A câmera e o primeiro plano continuam de um momento para o outro, como o cenário, até um momento mudá-los. **{ui.stage.scopeLabel}** fica embaixo na janela: veja [O palco](/novelworks-docs/pt-br/concepts/stage/).

## No jogo

- Os planos se sucedem enquanto o texto é digitado.
- O primeiro clique termina o movimento e mostra a fala inteira. O clique seguinte avança.
- Os momentos seguintes mantêm o último plano e não reproduzem os planos de novo.
- Entre dois momentos de uma cena, a câmera desliza até o novo lugar. Uma cena nova começa direto no plano inicial dela.
- Um jogo salvo carregado começa no último plano.
- A caixa de diálogo e os menus nunca se movem.

Se o jogador tiver pedido ao sistema menos movimento, o jogo vai direto para o último plano, sem tremor e sem transição gradual.

## Limites

- Em um momento de exploração, **{ui.camera.tilt}** e **{ui.camera.depth}** são ignorados, para que as zonas fiquem exatamente sobre o que cobrem.
- O zoom amplia a imagem: um cenário pequeno fica borrado.
- O modo Roteiro não consegue escrever a câmera. Ele a mantém quando você edita o texto.
- A demo permite 2 planos por momento. Veja [Demo e versão completa](/novelworks-docs/pt-br/getting-started/demo-edition/).
