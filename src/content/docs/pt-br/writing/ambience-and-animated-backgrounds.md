---
title: Ambiente e cenários animados
description: Dê um tom a uma cena inteira com um clique e use GIFs ou vídeos em loop como cenários.
---

## Ambiente

Um ambiente é um tom de cor sobre a imagem inteira, para criar um clima ou indicar a hora do dia. Selecione um momento e abra a aba **{ui.inspectorTabs.image}** do [painel do momento](/novelworks-docs/pt-br/writing/moment-panel/).

A seção **{ui.ambience.title}** tem um quadro para cada visual, cada um mostrando o seu próprio cenário:

- **{ui.ambience.none}**
- **{ui.ambience.night}**
- **{ui.ambience.sunset}**
- **{ui.ambience.sepia}**
- **{ui.ambience.blackAndWhite}**
- **{ui.ambience.memory}**

Quando você escolhe um visual, aparecem duas configurações:

- **{ui.ambience.intensity}**, de 0 a 100 %. Começa em 100 %.
- **{ui.ambience.characters}**, marcada no início. Desmarque para aplicar o tom só ao cenário.

### Quanto tempo dura

Um ambiente continua de um momento para o outro, como o cenário, até um momento mudá-lo. **{ui.stage.scopeLabel}** funciona como sempre, então você pode usar **{ui.stage.scopeOnlyHere}** para um único momento. Veja [O palco](/novelworks-docs/pt-br/concepts/stage/).

O modo Roteiro não consegue escrever um ambiente. Ele mantém o ambiente dos seus momentos quando você edita o texto, e um novo momento continua o anterior.

## Cenários animados

### GIF e WebP animado

Eles são importados como qualquer outra imagem.

### Vídeos MP4 e WebM

Um vídeo pode ser o cenário de um momento. Ele fica em loop, sem som. Você pode importar um:

- pelo seletor de cenário de um momento;
- com **{ui.assetsTab.import}** na aba **{ui.leftPanel.assets}**;
- soltando o arquivo na janela do editor.

Um vídeo é do tipo **{ui.assetTypes.background}** ou **{ui.assetTypes.cG}**. Nas listas, um pequeno sinal de play o identifica, e ele é reproduzido enquanto o mouse está sobre ele.

No editor, o vídeo fica parado na primeira imagem. Em **{ui.topBar.play}** e no seu jogo exportado, ele é reproduzido em loop e para enquanto o menu de pausa está aberto.

### Tamanho

Um vídeo nunca é recusado pelo tamanho. Acima de 40 MB em uma importação, uma mensagem lembra que um jogo web com vídeo demora mais para carregar. Os vídeos não são comprimidos de novo no .zip exportado.

## Limites

- Um vídeo só pode ser o cenário de um momento. Personagens, itens e as telas do próprio jogo precisam de uma imagem.
- Uma imagem com mais de 50 MB, GIF incluído, é recusada.
