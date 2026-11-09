---
title: Encenar uma cena
description: Escolha o cenário, coloque personagens na tela e posicione, redimensione, espelhe e ordene.
---

Encenar é decidir o que o jogador vê atrás do texto: o cenário e os personagens. Tudo acontece na tela do jogo, no modo **{ui.topBar.story}**, visão Visual. Antes de começar, leia [O palco](/novelworks-docs/pt-br/concepts/stage/): o que você define em um momento continua nos seguintes. Para uma visão geral das abas à direita, veja [O painel do momento](/novelworks-docs/pt-br/writing/moment-panel/).

## Escolher até onde uma mudança vai

A chave **{ui.stage.scopeLabel}** tem duas opções: **{ui.stage.scopeFollowing}** (a padrão) e **{ui.stage.scopeOnlyHere}**. Você a encontra nas abas **{ui.inspectorTabs.image}** e **{ui.inspectorTabs.effects}** de um momento, e no painel de um personagem em cena. Defina-a antes de mudar algo. Os momentos alcançados por uma mudança piscam rapidamente na linha do tempo e, na tela do jogo, os personagens são marcados como **{ui.stage.markNew}** ou **{ui.stage.markChanged}**.

## O cenário

- Clique no botão de cenário acima da tela do jogo (“{ui.stage.chooseTheBackgroundOfThisMoment}”), ou em **{ui.momentInspector.change}** na aba **{ui.inspectorTabs.image}**. O seletor oferece os seus cenários e CGs, e um jeito de importar uma nova imagem ou um [cenário animado](/novelworks-docs/pt-br/writing/ambience-and-animated-backgrounds/) na hora. **{ui.momentInspector.noneBlackScreen}** deixa a tela preta.
- **{ui.momentInspector.applyToTheFollowingMoments}**, na aba **{ui.inspectorTabs.image}**, dá o cenário deste momento a todos os momentos seguintes da cena, depois de pedir a sua confirmação. Fica desativado no último momento.

Uma cena vazia mostra **{ui.stage.chooseBackground}** na tela do jogo. A mesma aba também traz o [ambiente](/novelworks-docs/pt-br/writing/ambience-and-animated-backgrounds/) do momento.

## Colocar um personagem em cena

Clique em **{ui.stageControls.character}** acima da tela do jogo (“{ui.stageControls.putACharacterOnStage}”), ou em **{ui.momentInspector.add}** na seção **{ui.momentInspector.onStage}** da aba **{ui.inspectorTabs.image}**. A lista mostra os seus personagens; os que já estão em cena ficam desativados. Se você não tiver nenhum, **{ui.stageControls.newCharacter}** cria um.

O personagem vai para o primeiro lugar livre entre centro, esquerda e direita, na borda inferior. Se os três lugares estiverem ocupados, o novo personagem é colocado perto do meio, um pouco ao lado dos outros, e os personagens podem se sobrepor: arraste-os para onde quiser. A barra **{ui.stage.castTitle}** nessa seção também coloca e tira personagens de cena com um clique.

## Selecionar, mover e redimensionar

- **Clique** em um personagem na tela do jogo para selecioná-lo. Uma pequena barra aparece sobre ele com a expressão e a roupa, e o inspetor mostra **{ui.inspector.characterOnStage}**: todos os detalhes dele. **{ui.stageCharacterInspector.backToTheMoment}** volta às abas do momento.
- **Arraste-o** para movê-lo para qualquer lugar. Ele se encaixa em Esquerda, Centro e Direita, e na borda inferior, quando você chega perto. O arrastar inteiro é um único passo de desfazer.
- **Arraste um canto** para redimensioná-lo (**{ui.stage.dragToResize}**). Os pés ficam no lugar. O tamanho vai de 30 % a 200 %.

## Posicionar, espelhar e ordenar

A barra sobre o personagem traz só a expressão e a roupa (a roupa aparece quando o personagem tem roupas). O resto fica no inspetor, depois que o personagem é selecionado (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**):

| Controle | O que faz |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Muda a expressão. A padrão tem uma estrela. Se o personagem não tiver expressões, um botão leva você à aba Personagens. |
| **{ui.stageControls.outfit}** | Muda a roupa. Veja [Roupas](/novelworks-docs/pt-br/writing/outfits/). |
| {ui.scenes.left} / {ui.scenes.center} / {ui.scenes.right} | Coloca o personagem em um de três lugares na parte inferior da tela. Eles mantêm o tamanho e a direção. |
| **{ui.stageCharacterInspector.flippedHorizontallyFacingTheOtherWay}** | Vira o personagem para olhar para o outro lado. |
| **{ui.stageCharacterInspector.forward}** / **{ui.stageCharacterInspector.backward}** | Move o personagem para a frente ou para trás de outro. A caixa de diálogo fica sempre por cima. |
| **{ui.stageCharacterInspector.removeFromStage}** | Tira o personagem de cena, conforme a chave **{ui.stage.scopeLabel}**. |

O inspetor também tem um controle deslizante **{ui.stageCharacterInspector.size}** e um botão para editar o nome e as expressões do personagem.

Você também pode clicar com o botão direito em um personagem para ter a expressão, a roupa, a posição, o espelhamento e a ordem, mais **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** e **{ui.contextMenus.leavesHere}**; eles são explicados em [O palco](/novelworks-docs/pt-br/concepts/stage/).

Para remover um personagem selecionado, você também pode apertar `Delete` ou `Backspace`. As setas do teclado não movem personagens: elas se movem entre momentos.

## Começar uma cena de onde outra terminou

No primeiro momento de uma cena para a qual outras cenas levam, um aviso na aba **{ui.inspectorTabs.image}** pode oferecer começar com o que estava na tela no fim da cena anterior. Veja [O palco](/novelworks-docs/pt-br/concepts/stage/).

## Enquanto você edita

- A tela do jogo é sempre ajustada para caber na janela.
- Um personagem sem imagem é desenhado como um contorno tracejado com “{tx.render.noPicture}”, para você poder posicioná-lo mesmo assim. No jogo, esse personagem não é desenhado.
- A caixa de diálogo é substituída por campos editáveis enquanto você edita.
