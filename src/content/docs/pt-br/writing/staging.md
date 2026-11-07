---
title: Encenar uma cena
description: Escolha o cenário, coloque personagens na tela e posicione, redimensione, espelhe e ordene.
---

Encenar é decidir o que o jogador vê atrás do texto: o cenário e os personagens. Tudo acontece na tela do jogo, no modo **{ui.topBar.story}**, visão Visual. Antes de começar, leia [O palco](/novelworks-docs/pt-br/concepts/stage/): o que você define em um momento continua nos seguintes.

## Escolher até onde uma mudança vai

Acima da tela do jogo, **{ui.stage.scopeLabel}** tem duas opções: **{ui.stage.scopeFollowing}** (a padrão) e **{ui.stage.scopeOnlyHere}**. Defina-a antes de mudar algo. Os momentos alcançados por uma mudança piscam rapidamente na linha do tempo e, na tela do jogo, os personagens são marcados como **{ui.stage.markNew}** ou **{ui.stage.markChanged}**.

## O cenário

- Clique no botão de cenário acima da tela do jogo ("{ui.stage.chooseTheBackgroundOfThisMoment}"), ou em **{ui.momentInspector.change}** no inspetor. O seletor oferece os seus cenários e CGs, e um jeito de importar uma nova imagem na hora. **{ui.momentInspector.noneBlackScreen}** deixa a tela preta.
- **{ui.stage.applyToTheFollowingMoments}** dá o cenário deste momento a todos os momentos seguintes da cena, depois de pedir a sua confirmação. Fica desativado no último momento.

Uma cena vazia mostra **{ui.stage.chooseBackground}** na tela do jogo.

## Colocar um personagem em cena

Clique em **{ui.stageControls.character}** acima da tela do jogo ("{ui.stageControls.putACharacterOnStage}"), ou em **{ui.momentInspector.add}** na seção **{ui.momentInspector.onStage}** do inspetor. A lista mostra os seus personagens; os que já estão em cena ficam desativados. Se você não tiver nenhum, **{ui.stageControls.newCharacter}** cria um.

O personagem vai para o primeiro lugar livre entre centro, esquerda e direita, na borda inferior. Se os três lugares estiverem ocupados, o novo personagem é colocado perto do meio, um pouco ao lado dos outros, e os personagens podem se sobrepor: arraste-os para onde quiser. A barra **{ui.stage.castTitle}** acima da tela do jogo também coloca e tira personagens de cena com um clique.

## Selecionar, mover e redimensionar

- **Clique** em um personagem na tela do jogo para selecioná-lo. Uma pequena barra de ferramentas aparece sobre ele, e o inspetor mostra as configurações dele.
- **Arraste-o** para movê-lo para qualquer lugar. Ele se encaixa em Esquerda, Centro e Direita, e na borda inferior, quando você chega perto. O arrastar inteiro é um único passo de desfazer.
- **Arraste um canto** para redimensioná-lo (**{ui.stage.dragToResize}**). Os pés ficam no lugar. O tamanho vai de 30 % a 200 %.

## Posicionar, espelhar e ordenar

Na barra de ferramentas sobre o personagem, ou no inspetor (**{ui.stageCharacterInspector.position}**, **{ui.stageCharacterInspector.size}**, **{ui.stageCharacterInspector.order}**):

| Controle | O que faz |
|---|---|
| **{ui.stageCharacterInspector.expression}** | Muda a expressão. A padrão tem uma estrela. Se o personagem não tiver expressões, um botão leva você à aba Personagens. |
| Esquerda / Centro / Direita | Coloca o personagem em um de três lugares na parte inferior da tela. Eles mantêm o tamanho e a direção. |
| **{ui.stage.flipHorizontally}** | Vira o personagem para olhar para o outro lado. |
| **{ui.stage.bringForward}** / **{ui.stage.sendBackward}** | Move o personagem para a frente ou para trás de outro. A caixa de diálogo fica sempre por cima. |
| **{ui.stage.removeFromStage}** | Tira o personagem de cena, a partir deste momento. |

O inspetor também tem um controle deslizante **{ui.stageCharacterInspector.size}** e um botão para editar o nome e as expressões do personagem.

Você também pode clicar com o botão direito em um personagem para ter os mesmos controles, mais **{ui.contextMenus.stayUntil}**, **{ui.contextMenus.onlyThisMoment}**, **{ui.contextMenus.backToBefore}** e **{ui.contextMenus.leavesHere}**; eles são explicados em [O palco](/novelworks-docs/pt-br/concepts/stage/).

Para remover um personagem selecionado, você também pode apertar `Delete` ou `Backspace`. As setas do teclado não movem personagens: elas se movem entre momentos.

## Começar uma cena de onde outra terminou

No primeiro momento de uma cena para a qual outras cenas levam, um aviso pode oferecer começar com o que estava na tela no fim da cena anterior. Veja [O palco](/novelworks-docs/pt-br/concepts/stage/).

## Enquanto você edita

- A tela do jogo é sempre ajustada para caber na janela. Um selo mostra a porcentagem ("Ajustar · 65 %").
- Um personagem sem imagem é desenhado como um contorno tracejado com "(sem imagem)", para você poder posicioná-lo mesmo assim. No jogo, esse personagem não é desenhado.
- A caixa de diálogo é substituída por campos editáveis enquanto você edita, e as zonas ficam ocultas.
- Em uma janela estreita, algumas ferramentas da barra de ferramentas ficam reunidas em um menu **{ui.stage.more}**.
