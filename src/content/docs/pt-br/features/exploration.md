---
title: Exploração
description: "Cenas de apontar e clicar: zonas em que o jogador clica para olhar ao redor, coletar itens ou seguir adiante."
---

Um momento **{ui.moments.exploration}** **não tem caixa de texto**: o jogador olha para uma imagem e clica nas **zonas** que você desenha sobre ela. Uma zona pode mostrar uma linha de texto, mudar uma variável, dar um item ou levar a outra cena. Ele está sempre disponível: não há recurso para ativar.

## Adicione uma

Na linha do tempo, adicione um momento **{ui.moments.exploration}**. Ele começa vazio e usa o cenário do momento anterior. Selecione-o: o inspetor mostra **{ui.explorationInspectors.zones}** e **{ui.explorationInspectors.props}** com **+ Zona** e **+ Objeto de cena**.

![Um momento de Exploração: as zonas desenhadas sobre a imagem e a lista de zonas e objetos de cena no inspetor.](/novelworks-docs/screenshots/exploration-editor.png)

## Desenhe zonas

Acima da tela do jogo, escolha **{ui.explorationCanvas.drawZonesAs}**: **{ui.explorationCanvas.rectangle}** ou **{ui.explorationCanvas.shape}**. (Numa janela estreita, eles ficam no menu **{ui.stage.more}**.)

- **{ui.explorationCanvas.rectangle}**: arraste sobre a imagem. Um simples clique não cria nada, e uma zona menor que 2 % da tela não é criada.
- **{ui.explorationCanvas.shape}**: clique ponto por ponto ao redor de um objeto. Feche a forma clicando no primeiro ponto de novo, ou pressionando **Enter**. **Esc** cancela. São necessários pelo menos três pontos.

Uma zona fica selecionada logo depois que você a desenha. Arraste-a para movê-la. Um retângulo tem oito alças para redimensioná-lo, e uma forma tem uma alça em cada ponto. Você também pode usar **+ Zona** para adicionar um retângulo no meio da tela.

Clique com o botão direito numa zona para **{ui.contextMenus.duplicateZone}** e **{ui.contextMenus.deleteZone}**, ou use **Cmd+D** / **Ctrl+D** para duplicar e `Delete` para excluir. Uma cópia é colocada um pouco mais abaixo e à direita, com o nome “… (cópia)”. Cada edição vale um passo de Desfazer.

## O inspetor da zona

- **{ui.explorationInspectors.name}**: só para você, para achar a zona. Os jogadores nunca o veem. As novas zonas se chamam “Zona 1”, “Zona 2”…
- **{ui.explorationInspectors.label}**: mostrado quando o ponteiro está sobre a zona (em celulares: no primeiro toque).
- **{ui.explorationInspectors.highlight}**: Nenhum, Brilho (padrão) ou Contorno.
- **{ui.explorationInspectors.whenClicked}**, a ação:

| Ação | O que ela faz |
|---|---|
| Examinar (padrão) | Mostra uma linha de texto, do narrador ou de um personagem que você escolher. O clique seguinte volta a explorar. |
| Ir para cena | Sai da exploração para essa cena. |
| Continuar | Sai da exploração e segue com o próximo momento desta cena. |
| Mudar uma variável | Soma a uma Pontuação ou define uma variável. As outras zonas que dependem dela aparecem, somem ou são liberadas na hora. |
| Pegar um item | Coloca um item no inventário, com um aviso. A zona e os objetos de cena dela somem então para sempre. (Recurso Inventário.) |
| Usar um item | Verifica o inventário. Escolha **{ui.explorationInspectors.itemToUse}**, se ele é **consumido**, e um resultado **{ui.explorationInspectors.whenThePlayerHasIt}** (Examinar, Ir para cena, Continuar ou Mudar uma variável). **{ui.explorationInspectors.withoutItOptional}** é a linha mostrada quando o jogador não o tem; se estiver vazia, nada acontece. (Recurso Inventário.) |

- **{ui.explorationInspectors.works}**: **{ui.explorationInspectors.everyTime}** ou **{ui.explorationInspectors.onceOnly}** (depois do primeiro uso, a zona não faz mais nada, nesta partida).
- **Uma condição**: “{tx.explorationInspectors.onlyAvailableWhenAVariableOrAn}”. Quando ela não é verdadeira, **{ui.explorationInspectors.otherwise}**: “Oculta” (a zona e os objetos de cena dela não podem ser vistos nem clicados) ou “Bloqueada” (ela mostra o rótulo, mas não pode ser usada, com uma linha opcional mostrada ao clicar).

## Objetos de cena

**{ui.explorationInspectors.props}** são imagens de objetos (uma chave, uma carta, um vaso) colocadas em cena. Não são clicáveis: ligue um objeto de cena a uma zona para ocultá-los juntos.

- **+ Objeto de cena** abre “{tx.explorationInspectors.chooseAProp}” (imagens do tipo Objeto de cena, com opção de importar). Um novo objeto de cena vai para o centro.
- Arraste um objeto de cena para movê-lo, ou um canto para redimensioná-lo. No inspetor, **{ui.explorationInspectors.size}** é uma largura de 2 a 100 % da tela.
- **{ui.explorationInspectors.hiddenWithZone}**: quando essa zona está oculta pela condição dela, o objeto de cena também fica oculto. **{ui.explorationInspectors.addAZoneAroundIt}** adiciona uma zona ao redor do objeto de cena.
- **{ui.explorationInspectors.forward}** e **{ui.explorationInspectors.backward}** mudam qual objeto de cena fica na frente. **{ui.explorationInspectors.removeProp}** o exclui.
- Os objetos de cena são desenhados atrás dos personagens e acima do cenário.

## Como os jogadores veem

- As zonas são **invisíveis** até o ponteiro passar sobre elas (ou elas receberem o foco, ou serem tocadas uma vez numa tela de toque). Então o destaque aparece, e o rótulo surge numa pequena etiqueta.
- O cursor vira um ponteiro sobre uma zona, e um cursor de “proibido” sobre uma bloqueada.
- Enquanto uma linha de texto é mostrada, as zonas não fazem nada: qualquer clique fecha a linha.
- Numa tela de toque, com rótulo, o primeiro toque mostra o rótulo e o segundo age. Sem rótulo, um toque age.
- Com o teclado, **Tab** passa de uma zona a outra e **Enter** usa uma. Os leitores de tela leem o rótulo, ou “Algo para olhar 1”, e “(bloqueada)” para uma zona bloqueada.

**Não existe saída “tudo feito”.** O jogador fica na exploração até clicar numa zona que vai para uma cena, ou em Continuar. Garanta que pelo menos uma zona faça isso.

## Avisos

- Desenhe pelo menos uma zona para o jogador clicar.
- **Os jogadores podem ficar presos aqui**: nenhuma zona clicável leva a outra cena ou continua a história.
- Uma zona vai para uma cena, mas nenhuma foi escolhida, ou para uma cena excluída; não tem nada a dizer (ao ser examinada, ou quando um item é usado); é examinada por um personagem excluído; muda uma variável que não foi escolhida ou foi excluída.
- A condição de uma zona verifica uma variável ou um item que não foi escolhido, foi excluído, ou cujo recurso Inventário está desativado.
- Uma zona de pegar ou de usar item usa um item que não foi escolhido, foi excluído, ou cujo recurso Inventário está desativado.
- Uma zona exige um item que os jogadores nunca podem conseguir, ou que nunca pode ser usado porque a condição dela nunca é verdadeira.
- Um objeto de cena não tem imagem, ou está ligado a uma zona excluída.
- Os momentos colocados depois de uma exploração sem zona Continuar nunca podem ser alcançados.
- No mapa, “{tx.shared.map.addABackgroundImageInMap}” e “Os jogadores nunca poderão abrir o mapa…” (veja [Mapa](/novelworks-docs/pt-br/features/map/)).

## Em outros lugares

- No [mapa da história](/novelworks-docs/pt-br/branching/story-map/), as zonas que vão para uma cena (incluindo o resultado de “{tx.shared.exploration.useAnItem}”) são setas com o nome da zona como rótulo. Uma zona que só continua fica dentro da cena: sem seta.
- No [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode-lines/), uma exploração é uma única linha `exploration : 3 zones`. As zonas e os objetos de cena são editados só na vista Visual, e são mantidos quando você edita o texto.
- O [Mapa](/novelworks-docs/pt-br/features/map/) usa as mesmas zonas, como locais.
