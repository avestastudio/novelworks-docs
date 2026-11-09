---
title: Som e música
description: Importe sons, defina música, som ambiente, efeitos sonoros e vozes nos seus momentos, e veja tudo isso na linha do tempo.
---

## Importar os seus sons

O NovelWorks lê arquivos MP3, OGG e WAV. Você pode importá-los:

- com **{ui.assetsTab.import}** na aba **{ui.leftPanel.assets}**;
- soltando os arquivos na janela do editor;
- com **{ui.sound.import}**, onde você escolhe um som na aba **{ui.sound.tab}**.

Cada som tem um tipo: **{ui.assetTypes.music}**, **{ui.assetTypes.sound}** ou **{ui.assetTypes.voice}**. O filtro **{ui.assetsTab.sounds}** da aba **{ui.leftPanel.assets}** mostra todos eles.

## A aba Som

Selecione um momento e abra a aba **{ui.sound.tab}** do [painel do momento](/novelworks-docs/pt-br/writing/moment-panel/).

![A aba Som de um momento, com música, som ambiente, efeitos sonoros e a voz da fala.](/novelworks-docs/screenshots/moment-sound-tab.png)

### Música e som ambiente

**{ui.sound.music}** e **{ui.sound.ambience}** tocam em loop, um sobre o outro. Cada um tem três opções:

| Opção | O que faz |
|---|---|
| **{ui.sound.continue}** | Nada muda. A aba diz o que está tocando. |
| **{ui.sound.chooseMusic}** / **{ui.sound.chooseAmbience}** | Começa um som aqui, com **{ui.sound.volume}** e **{ui.sound.fade}**. |
| **{ui.sound.stop}** | Para o som aqui, com **{ui.sound.fade}**. |

**{ui.sound.fade}** vai de 0 a 10 segundos. É o tempo que o som antigo leva para dar lugar ao novo.

**{ui.sound.chooseMusic}** lista as suas músicas. **{ui.sound.chooseAmbience}** lista os seus efeitos sonoros e as suas músicas.

### Efeitos sonoros

**{ui.sound.effects}** são ouvidos uma vez, quando o momento chega, e tocam até o fim. Um momento pode ter até 6. Eles estão disponíveis nos momentos que o jogador vê: diálogos, escolhas, explorações e finais.

### Voz

**{ui.sound.voice}** está disponível nos momentos de diálogo. A voz para quando o jogador passa para a próxima fala.

Ao lado de um som que você escolheu, **{ui.sound.listen}** permite ouvi-lo pela própria aba.

## Quanto tempo dura

A música e o som ambiente continuam tocando de um momento para o outro, e de uma cena para a outra, até um momento mudá-los.

As configurações de som não são afetadas por **{ui.stage.scopeLabel}**.

## Na linha do tempo

Faixas coloridas embaixo da linha do tempo mostram até onde vai cada música e cada som ambiente. Uma faixa com falhas significa que o som vem de uma cena anterior.

![A linha do tempo com faixas de som embaixo dos momentos.](/novelworks-docs/screenshots/sound-timeline.png)

Outra fileira marca os momentos com efeitos sonoros ou voz. Clique em uma faixa ou em uma marca para abrir a aba **{ui.sound.tab}** daquele momento.

Para calcular o que vem de uma cena anterior, o editor segue a ordem da sua lista de cenas. O caminho real de um jogador pode ser diferente. No jogo, o que toca é o que o jogador realmente ouviu.

## Música da tela de título

Vá em **{ui.topBar.gameUI}**, **{ui.gameUI.titleScreen}**, **{ui.sound.music}**, e clique em **{ui.sound.chooseMusic}**. Ela toca em loop na tela de título. O som ambiente para ali.

## No jogo

- Quando o jogador pula ou carrega um jogo salvo, os efeitos sonoros e as vozes não são tocados. A música e o som ambiente continuam.
- No modo Auto, o jogo espera a voz terminar.
- Em [Opções](/novelworks-docs/pt-br/game-ui/options/), os jogadores têm três volumes: **{rt.optionsScreen.musicVolume}**, **{rt.optionsScreen.soundVolume}** e **{rt.optionsScreen.voiceVolume}**. Eles só aparecem se o seu jogo tiver sons. O som ambiente segue **{rt.optionsScreen.soundVolume}**.

## Em um jogo web

Os navegadores se recusam a iniciar um som antes do primeiro clique ou do primeiro toque de tecla do jogador. O som que foi recusado começa nesse momento.

## Limites

A demo permite 5 arquivos de som. Veja [Demo e versão completa](/novelworks-docs/pt-br/getting-started/demo-edition/).
