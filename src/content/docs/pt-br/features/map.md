---
title: Mapa
description: Deixe os jogadores escolherem aonde ir num mapa feito de uma imagem e de locais clicáveis.
---

Com o recurso **{ui.shared.features.map}** ativado, os jogadores abrem um mapa e escolhem aonde ir. Um mapa é uma imagem do seu mundo com **locais** sobre ela. Cada local leva a uma cena. Ative-o na [biblioteca de recursos](/novelworks-docs/pt-br/features/features-panel/).

## Abra o espaço de trabalho do Mapa

Clique em **{ui.leftPanel.map}** no painel da esquerda (ou em **{ui.mapSettings.editMap}** na biblioteca de recursos). O espaço de trabalho do Mapa tem uma lista de locais à esquerda, o mapa no meio e as configurações à direita. **{ui.mapMode.backToStory}** volta ao modo História.

O mapa é guardado como uma cena oculta: ele não aparece na aba Cenas nem no mapa da história.

### Crie o mapa

Sem mapa ainda, **{ui.mapMode.createYourMap}** diz: “{tx.mapMode.chooseAPictureOfYourWorldThen}” Clique em **{ui.mapMode.addAMapBackground}** e escolha um fundo ou uma CG. Depois, **{ui.mapMode.changeBackground}** o troca.

## Adicione locais

Clique em **{ui.mapMode.addLocation}** e arraste no mapa para desenhar um local. Para uma forma personalizada, escolha **{ui.explorationCanvas.shape}**, clique nos cantos e pressione **Enter**. Arraste um local para movê-lo, ou as alças dele para redimensioná-lo. Selecione um local para editá-lo.

### O que um local tem

- **{ui.mapMode.name}**: para você.
- **{ui.mapMode.sceneToPlay}**: a cena a que ele leva. Você pode escolher uma, ou **{ui.mapMode.createAScene}** (ele pede um nome, cria uma cena e a liga). **{ui.mapMode.editScene}** a abre.
- **{ui.mapMode.returnToMapWhenFinished}**: o jogador volta ao mapa depois desta cena e de todas as cenas a que ela leva. Um momento Final ainda termina o jogo.
- **{ui.mapMode.availability}**:
  - **{ui.mapMode.availableUnderACondition}**: uma condição de variável ou de item. **{ui.mapMode.otherwise}** você pode **{ui.mapMode.hideLocation}** ou **{ui.mapMode.showAsLocked}**, e para um local bloqueado escrever uma **{ui.mapMode.messageWhenLocked}** (vazia significa que nada acontece).
- **{ui.mapMode.appearanceAndVisits}**: um **{ui.mapMode.labelOnHover}**, um **{ui.mapMode.highlight}** (**{ui.mapMode.glow}**, **{ui.mapMode.outline}** ou **{ui.mapMode.none}**) e **{ui.mapMode.visitOnlyOnce}** (um local visitado uma vez continua visível, mas não pode ser usado de novo).
- **{ui.mapMode.duplicate}** e **{ui.mapMode.delete}**.

Um local é uma zona de exploração, então um local que mantém uma interação personalizada de um projeto mais antigo é editado como uma zona (veja [Exploração](/novelworks-docs/pt-br/features/exploration/)). A lista à esquerda também tem seções recolhíveis **Decorações** (objetos de cena colocados no mapa) e **{ui.leftPanel.characters}**. Uma caixa “Verificar seu mapa” na parte de baixo das configurações lista os problemas.

## Quando os jogadores podem abrir o mapa?

Nas configurações do mapa (sem nenhum local selecionado), **{ui.mapMode.mapButtonAvailable}**:

| Configuração | O que significa |
|---|---|
| **{ui.map.fromTheStart}** | Os jogadores podem abrir o mapa com o botão dele desde o começo do jogo. |
| **{ui.map.afterFirstShown}** | O botão Mapa aparece depois que a história chega pela primeira vez a um momento “{tx.moments.showMap}”. |
| **{ui.map.storyOnly}** | Só um momento “{tx.moments.showMap}” na sua história abre o mapa. Nenhum botão Mapa é mostrado. |

### O momento “{tx.moments.showMap}”

Adicione um momento **{ui.moments.showMap}** a uma cena para abrir o mapa na hora. Ele também faz o botão Mapa aparecer quando a configuração é “{tx.map.afterFirstShown}”. Os jogadores não veem o momento em si, e os momentos colocados depois dele na mesma cena nunca podem ser alcançados. Um mapa aberto assim não tem botão Voltar: o jogador precisa escolher um destino.

Um mapa aberto com o botão dele tem um botão **{rt.game.back}** que leva o jogador de volta ao momento exato em que ele estava.

## O que acontece quando um jogador escolhe um local

O jogo vai para a cena do local. Se **{ui.mapMode.returnToMapWhenFinished}** está ativado, o jogador volta ao mapa quando a história acaba. Um local sem cena não faz nada. Veja também [Botão do mapa](/novelworks-docs/pt-br/game-ui/map-button/) para a aparência do botão, e a tecla **M** e a entrada do menu de pausa, que também abrem o mapa.

## Testes

- No espaço de trabalho do Mapa, o **{ui.topBar.testMap}** da barra superior (e o botão de mesmo nome nas configurações do mapa) joga a partir do mapa.
- No modo Jogar, **{ui.playOverlay.openMap}** abre o mapa mesmo que os jogadores ainda não pudessem abri-lo nesse ponto; Voltar leva de volta ao lugar onde você estava.

## Avisos

- O recurso Mapa está desativado: um momento “{tx.moments.showMap}” não faz nada.
- Crie seu mapa e adicione um fundo; o momento do mapa foi excluído ou não é mais uma exploração.
- Os jogadores nunca poderão abrir o mapa: o jogo não tem cena inicial, ou o botão está esperando um momento “{tx.moments.showMap}” que não pode ser alcançado.
- Adicione uma imagem de fundo em Mapa.
- Um local vai para uma cena, mas nenhuma foi escolhida, ou para uma cena que foi excluída.
- Desenhe pelo menos uma zona para o jogador clicar.
