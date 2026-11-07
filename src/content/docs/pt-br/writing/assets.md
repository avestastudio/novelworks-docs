---
title: Recursos
description: Importe imagens, escolha o tipo delas e gerencie-as na aba Recursos.
---

Toda imagem do seu jogo é um **recurso** do seu projeto: cenários, imagens de personagens, ilustrações, objetos e imagens para as telas do próprio jogo. Elas ficam na aba **{ui.leftPanel.assets}** e são copiadas para a pasta `assets` do seu projeto.

## Formatos e limites

- Somente **PNG, JPG e WebP** (também `.jpeg`).
- Até **50 MB** por arquivo. Outros arquivos são ignorados, e o NovelWorks lista quais.
- Nada é redimensionado nem convertido. Um cenário menor que a tela do jogo é esticado e pode ficar borrado, e a janela de importação avisa você.

## Importar imagens

De três maneiras:

- Clique em **{ui.assetsTab.import}** na aba Recursos (você pode escolher vários arquivos).
- **Arraste imagens para a janela do editor.** Uma camada mostra “{tx.dropOverlay.dropYourImagesHere}”. Depois de soltar, a aba Recursos abre.
- Use o atalho de importação de um seletor, por exemplo quando você escolhe um cenário ou uma expressão.

Uma janela pede então que você confira **{ui.importDialog.name}** e **{ui.importDialog.type}** de cada imagem. O NovelWorks adivinha o tipo para poupar o seu tempo: uma imagem com transparência é considerada um sprite, uma imagem paisagem ou quadrada, um cenário, e uma imagem retrato, um sprite. Você pode mudar cada palpite. **{ui.dialogs.cancel}** não copia nada.

Para um **sprite de personagem**, você também pode escolher **{ui.importDialog.addToCharacter}**: um personagem existente ou **{ui.importDialog.newCharacter}**, e o **{ui.importDialog.expressionName}**. Se um arquivo se chamar `mia_happy` e um personagem se chamar Mia, o NovelWorks propõe Mia e “happy” sozinho. Com várias imagens, você pode definir o tipo ou o personagem de todas de uma vez.

## Tipos de imagem

| Tipo | Para que serve |
|---|---|
| {ui.assetTypes.background} | Preenche a tela atrás dos personagens. |
| {ui.assetTypes.characterSprite} | Uma imagem de um personagem, usada para as expressões. |
| {ui.assetTypes.cG} | Uma ilustração em tela cheia para um evento especial. |
| {ui.assetTypes.prop} | Uma imagem de um objeto (uma chave, uma carta…), colocada no palco dos momentos de exploração. |
| {ui.assetTypes.uI} | Uma imagem para as telas do próprio jogo: caixa de diálogo, logo, botões. |
| {ui.assetTypes.avatar} | Um pequeno retrato exibido ao lado do nome do falante. |

O seletor de cenário oferece cenários e CGs.

## A aba Recursos

Etiquetas filtram a lista por tipo, com o número de imagens em cada um. Selecione uma imagem para vê-la no inspetor:

- **{ui.assetInspector.name}**: o nome exibido no NovelWorks. Mudá-lo não renomeia o arquivo;
- **{ui.assetInspector.type}**: você pode mudá-lo a qualquer momento;
- **{ui.assetInspector.usedIn}**: onde a imagem é usada, ou “{tx.assetInspector.notUsedYet}”;
- **{ui.assetInspector.file}**: o arquivo dela na pasta `assets`.

Clique com o botão direito em uma imagem para **{ui.contextMenus.rename}**, **{ui.contextMenus.showUsages}** e **{ui.contextMenus.delete}**.

Os nomes de arquivo são limpos (os caracteres que um nome de arquivo não pode conter são removidos) e, se um nome já estiver em uso, o novo arquivo vira `name-2.png`, `name-3.png`… Um arquivo existente nunca é sobrescrito.

## Substituir uma imagem

Uma imagem em si não pode ser substituída no lugar. Para um personagem, clique na imagem de uma expressão e escolha **{ui.characterInspector.changeImage}**: isso importa ou escolhe outra imagem e faz a expressão apontar para ela. A imagem antiga continua na aba Recursos.

## Excluir uma imagem

Clique em **{ui.assetInspector.deleteImage}**. O NovelWorks pergunta antes. Se a imagem for usada, ele lista onde e avisa que esses lugares ficarão sem imagem. O arquivo não é apagado na hora: quando você salva, ele é movido para `backups/deleted-assets`, e volta se você desfizer ou restaurar um backup. Veja [Salvar, backups e desfazer](/novelworks-docs/pt-br/getting-started/saving-and-undo/).
