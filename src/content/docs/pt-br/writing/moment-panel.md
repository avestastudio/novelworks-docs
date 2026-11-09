---
title: O painel do momento
description: As abas Texto, Imagem, Efeitos e Som de um momento, os botões embaixo da linha do tempo e as ferramentas acima da tela do jogo.
---

Selecione um momento na linha do tempo e o painel à direita mostra as configurações dele, em quatro abas. Se você clicar em um personagem na tela do jogo, o painel mostra esse personagem. **{ui.stageCharacterInspector.backToTheMoment}** traz as abas de volta.

Se o momento tiver um problema, um quadro acima das abas diz o que está errado.

## As quatro abas

| Aba | O que você define nela |
|---|---|
| **{ui.inspectorTabs.text}** | O que é lido: quem fala e o que diz, ou as configurações de uma escolha, de uma condição ou de outro tipo de momento. A sua nota particular. |
| **{ui.inspectorTabs.image}** | O que é visto: o cenário, o ambiente e os personagens em cena. |
| **{ui.inspectorTabs.effects}** | Como se move: a câmera e os efeitos. |
| **{ui.sound.tab}** | O que é ouvido: música, som ambiente, efeitos sonoros e a voz da fala. |

Um pontinho em uma aba indica que há algo nela:

- **{ui.inspectorTabs.effects}** tem um ponto quando este momento tem câmera, primeiro plano, partículas ou efeitos. Câmera, primeiro plano e partículas continuam nos momentos seguintes, então o ponto também pode vir de um momento anterior.
- **{ui.sound.tab}** tem um ponto quando este momento tem uma configuração de som própria.
- **{ui.inspectorTabs.text}** e **{ui.inspectorTabs.image}** nunca têm ponto.

## Texto

![A aba Texto de um momento de diálogo, com o falante, a fala, os botões Inserir e a nota.](/novelworks-docs/screenshots/moment-text-tab.png)

Em um momento de diálogo, você encontra **{ui.momentInspector.speaker}**, **{ui.momentInspector.text}** e os botões **{ui.richText.insert}**. Veja [Formatar o seu texto](/novelworks-docs/pt-br/writing/rich-text/).

Nos outros tipos de momento, o alto da aba traz as configurações daquele tipo.

Na visão Visual, a aba mostra depois para onde o momento leva e, no primeiro momento de uma cena, o que leva até ele. Abaixo disso vêm **{ui.momentInspector.note}** e **{ui.momentInspector.script}**, que mostra como o momento é escrito no [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/).

## Imagem

![A aba Imagem, com o alcance das mudanças, o cenário, os quadros de ambiente e os personagens em cena.](/novelworks-docs/screenshots/moment-image-tab.png)

De cima para baixo:

- **{ui.stage.scopeLabel}**: **{ui.stage.scopeFollowing}** ou **{ui.stage.scopeOnlyHere}**. Veja [O palco](/novelworks-docs/pt-br/concepts/stage/).
- **{ui.momentInspector.background}**: veja [Encenar uma cena](/novelworks-docs/pt-br/writing/staging/).
- **{ui.ambience.title}**: veja [Ambiente e cenários animados](/novelworks-docs/pt-br/writing/ambience-and-animated-backgrounds/).
- **{ui.momentInspector.onStage}**: os personagens em cena, com a expressão e o lugar de cada um.

## Efeitos

![A aba Efeitos, com uma pequena prévia do que o jogador vê e os botões que abrem a câmera e os efeitos.](/novelworks-docs/screenshots/moment-effects-tab.png)

A aba começa com a mesma configuração **{ui.stage.scopeLabel}**. Depois:

- **{ui.camera.title}**: uma pequena prévia do que o jogador vê, e **{ui.camera.open}**. Veja [A câmera](/novelworks-docs/pt-br/writing/camera/).
- **{ui.effects.title}**: os efeitos deste momento, e **{ui.effects.open}**. Veja [Efeitos](/novelworks-docs/pt-br/writing/effects/).

## Som

A aba é explicada em [Som e música](/novelworks-docs/pt-br/writing/sound/).

## Embaixo da linha do tempo

- O botão com sinal de mais, **{ui.moments.dialogue}**, adiciona uma fala depois do momento selecionado com um clique.
- **{ui.timeline.addOther}** abre a lista dos outros tipos de momento, cada um com uma frase que diz para que serve. Dois deles só aparecem quando o [recurso](/novelworks-docs/pt-br/features/features-panel/) correspondente está ativado: **{ui.moments.item}** (Inventário) e **{ui.moments.showMap}** (Mapa).
- Dois botões com ícone ao lado deles duplicam e excluem o momento selecionado. Você também pode clicar com o botão direito em um momento para ter **{ui.contextMenus.duplicate}** e **{ui.contextMenus.delete}**.

## Acima da tela do jogo

A barra acima da tela do jogo é curta:

- O botão de cenário mostra o nome do cenário atual e abre o seletor.
- **{ui.stageControls.character}** coloca um personagem em cena.
- Em um momento de exploração, as ferramentas para desenhar zonas.
- **{ui.topBar.visual}** e **{ui.topBar.script}**, à direita, alternam entre a tela do jogo e o texto da cena.

Clicar no botão de cenário ou em **{ui.stageControls.character}** também muda o painel para **{ui.inspectorTabs.image}**.

## A barra sobre um personagem

Quando você seleciona um personagem na tela do jogo, uma pequena barra aparece sobre ele. Ela traz **{ui.stageCharacterInspector.expression}** e, se o personagem tiver outras roupas, **{ui.stageControls.outfit}**.

Todo o resto está no painel à direita: **{ui.stageCharacterInspector.position}**, tamanho, espelhamento, **{ui.stageCharacterInspector.order}** e **{ui.stageCharacterInspector.removeFromStage}**.
