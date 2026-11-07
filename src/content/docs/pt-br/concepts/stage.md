---
title: "O palco: os personagens ficam em cena"
description: Por que um personagem que você coloca na tela continua lá nos momentos seguintes, e como controlar isso.
---

O NovelWorks funciona como um **palco de teatro**. Quando um personagem entra, ele **fica no lugar** até que algo o mude. O mesmo vale para o cenário: ele é o *set* da cena.

![Uma cena de seis momentos: o cenário dura a cena toda, Leo está em cena nos momentos 2 e 3, Mia chega no momento 4 e fica até o fim.](/novelworks-docs/diagrams/stage-persistence.svg)

Só a **tela** passa de um momento para o outro: o cenário e os personagens. As **falas de diálogo** não passam. Cada momento tem o próprio texto.

## O que um momento guarda

Um momento não guarda uma imagem completa da tela. Ele guarda só **o que muda**: um novo cenário, um personagem que chega, muda de expressão ou de posição, ou sai. A tela que você vê em qualquer momento é o conjunto de todas as mudanças da cena, aplicadas em ordem, a partir de uma tela vazia.

Você não precisa pensar nisso para começar: adicione um personagem no momento 1 e ele estará na tela em todos os momentos seguintes. Isso importa quando você **muda** algo no meio.

## “{tx.stage.scopeFollowing}” ou “{tx.stage.scopeOnlyHere}”

Acima da tela do jogo, a chave **{ui.stage.scopeLabel}** decide até onde a sua próxima mudança alcança:

- **{ui.stage.scopeFollowing}** (o padrão): a mudança vale para este momento e os próximos, até que um momento a mude de novo. Como num palco.
- **{ui.stage.scopeOnlyHere}**: a mudança vale só para este momento. Os momentos seguintes mantêm o que mostravam antes.

Na primeira vez que uma mudança alcança outros momentos, uma mensagem curta avisa. Os momentos alcançados piscam por um instante. A mudança inteira é **um passo** para o Desfazer, mesmo quando alcança muitos momentos.

## Veja quem está em cena

### A barra “Em cena”

Acima da tela do jogo, a barra **{ui.stage.castTitle}** mostra uma imagem redonda para cada personagem que está em cena em algum momento da cena, na ordem em que chegam. Uma imagem acesa significa que o personagem está em cena **neste momento**. Clique em uma imagem para tirar o personagem de cena ou trazê-lo, conforme a chave acima. A barra só aparece quando a cena tem pelo menos um personagem.

### O gráfico embaixo das miniaturas

Embaixo da linha do tempo, uma fileira mostra o **{ui.timeline.chartBackground}** e há uma fileira por personagem. Uma barra cobre os momentos em que a coisa está na tela. Uma nova barra começa onde o visual muda: outra expressão, outra posição ou tamanho, uma imagem espelhada ou outra imagem de cenário. Aponte para uma barra para ler, por exemplo, “Mia fica em cena até o momento 7”, “…até o fim da cena” ou “…só neste momento”.

O gráfico mostra até 5 fileiras e rola além disso (menos em uma janela pequena).

![Embaixo dos cartões da linha do tempo, o gráfico mostra uma barra para cada personagem, do tamanho do tempo em que ele está em cena.](/novelworks-docs/screenshots/stage-chart.png)

### Pequenas etiquetas em cada momento

Embaixo de cada cartão de momento, pequenas etiquetas listam o que aquele momento muda: o cenário, um personagem que chega, sai, muda de expressão ou é posicionado de outro jeito, ou uma mudança na ordem de desenho. No máximo quatro são mostradas, depois “+N”.

### No inspetor

Com um momento selecionado, a seção **{ui.momentInspector.onStage}** mostra um cartão por personagem, com um selo:

- **{ui.momentInspector.originNew}**: ele chega neste momento.
- **{ui.momentInspector.originChanged}**: este momento o muda.
- “Desde o momento N”: ele vem de um momento anterior.

Cada cartão tem um botão para voltar a **como era** antes de este momento mudá-lo. Um personagem que sai neste momento aparece na lista com **{ui.momentInspector.bringBack}**. **{ui.momentInspector.add}** coloca alguém em cena.

## Clique com o botão direito em um personagem

Clique com o botão direito em um personagem na tela do jogo para ver estas opções:

- **{ui.contextMenus.expression}** e **{ui.contextMenus.position}**.
- **{ui.contextMenus.flipHorizontally}**, **{ui.contextMenus.resetSize}**, **{ui.contextMenus.bringForward}**, **{ui.contextMenus.sendBackward}**.
- **{ui.contextMenus.stayUntil}**: escolha “Até o momento N” (um dos próximos momentos) ou **{ui.contextMenus.untilEnd}**. O personagem mantém o visual atual até lá, mesmo nos momentos que antes o mudavam.
- **{ui.contextMenus.onlyThisMoment}**: o que este momento mudou não continua. Fica cinza se este momento não muda nada para o personagem, ou se é o último momento.
- **{ui.contextMenus.backToBefore}**: desfaz a mudança deste momento para este personagem.
- **{ui.contextMenus.leavesHere}**: o personagem sai a partir deste momento, qualquer que seja a chave.

## Comece uma cena como outra terminou

Quando outras cenas levam a uma cena, e a tela no fim da cena anterior é diferente de como esta começa, aparece um aviso no **primeiro momento** desta cena: “Esta cena começa vazia.” ou “Esta cena começa com: Mia, Leo.” Para cada cena que leva até aqui, um botão **Começar como o fim de “…”** coloca em cena o que estava na tela no momento que leva até aqui. Os momentos seguintes acompanham, e é um passo só para o Desfazer.

## O que acontece quando você apaga, move, copia ou insere um momento

O NovelWorks mantém todos os outros momentos com a mesma aparência:

- **Apagar um momento**: o que ele mudava passa para o momento seguinte, então todos os momentos restantes mostram exatamente o que mostravam antes.
- **Inserir um momento** (ou apertar **Enter**): o novo momento não tem mudança, então mostra a tela do momento anterior a ele.
- **Duplicar um momento**: a cópia vai logo depois do original e mostra a mesma tela.
- **Mover um momento**: ele leva as próprias mudanças consigo. Se Mia chega nesse momento e você o move para o fim, Mia agora chega lá, e os momentos que ficaram para trás não a mostram mais.
- **Apagar um personagem ou um cenário da biblioteca**: ele some de todo lugar, e mais nada muda.

## Bom saber

- No modo Roteiro valem as mesmas regras: o texto que você não mudou não muda nada.
- A tela de cada momento é refeita a partir das mudanças, então as miniaturas, o histórico e os jogos salvos dos jogadores mostram a tela certa.
