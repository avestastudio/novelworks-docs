---
title: Visão geral da interface do jogo
description: Mude a aparência do seu jogo, tela por tela, com uma prévia ao vivo.
---

O modo **{ui.topBar.gameUI}** muda a aparência do seu jogo: a fonte e as cores, a tela de título, a caixa de diálogo, os botões de escolha, os menus e as mensagens pequenas. Abra-o na barra superior ou com **Cmd+5** / **Ctrl+5**.

![O modo Interface do jogo: a lista de telas, a prévia ao vivo e as configurações da caixa de diálogo.](/novelworks-docs/screenshots/game-ui-dialogue.png)

## As três partes da janela

- **À esquerda: a lista de telas.** Clique em uma para trabalhar nela.
- **Ao centro: a prévia.** É o jogo de verdade, desenhado com as suas configurações, em um pequeno exemplo (seu primeiro cenário e seu primeiro personagem, ou um personagem de exemplo). Ela não é interativa: aperte **{ui.topBar.play}** para testar o jogo com essas configurações. Uma linha embaixo avisa isso.
- **À direita: as configurações da tela.** Toda tela termina com um botão **{ui.gameUIInspector.resetToDefault}**.

## As telas

| Tela | O que é | Página |
|---|---|---|
| {ui.gameUI.fontsColors} | A fonte e as cores que todas as telas usam. | [Fontes e cores](/novelworks-docs/pt-br/game-ui/fonts-and-colors/) |
| {ui.gameUI.creatorSplash} | O logotipo do seu estúdio ou outras imagens, antes da tela de título. | [Introdução](/novelworks-docs/pt-br/game-ui/intro/) |
| {ui.gameUI.contentWarning} | Avisa os jogadores sobre temas sensíveis antes da tela de título. | [Aviso de conteúdo](/novelworks-docs/pt-br/game-ui/content-warning/) |
| {ui.gameUI.titleScreen} | A primeira tela do seu jogo. | [Tela de título](/novelworks-docs/pt-br/game-ui/title-screen/) |
| {ui.gameUI.dialogueBox} | Onde aparecem os nomes e as falas. | [Caixa de diálogo](/novelworks-docs/pt-br/game-ui/dialogue-box/) |
| {ui.gameUI.choices} | Os botões de uma escolha. | [Escolhas](/novelworks-docs/pt-br/game-ui/choices-screen/) |
| {ui.gameUI.pauseMenu} | Abre com o botão direito do mouse ou com Esc. | [Menu de pausa](/novelworks-docs/pt-br/game-ui/pause-menu/) |
| {ui.gameUI.saveLoad} | As telas de salvar e de carregar. | [Tela de salvar e carregar](/novelworks-docs/pt-br/game-ui/save-load-screen/) |
| {ui.gameUI.history} | A lista das falas já lidas. | [Tela de histórico](/novelworks-docs/pt-br/game-ui/history-screen/) |
| {ui.gameUI.options} | Onde os jogadores escolhem o tamanho do texto, a velocidade, a fonte e o contraste. | [Opções do jogador](/novelworks-docs/pt-br/game-ui/options/) |
| {ui.quickMenu.title} | Controles de leitura sobre a história. | [Menu rápido](/novelworks-docs/pt-br/game-ui/quick-menu/) |
| {ui.gameUI.theEnd} | Aparece quando a história termina. | [Tela final](/novelworks-docs/pt-br/game-ui/ending-screen/) |
| {ui.gameUI.inventory} | O botão e o painel de itens (recurso Inventário). | [Tela de inventário](/novelworks-docs/pt-br/game-ui/inventory-ui/) |
| {ui.gameUI.mapButton} | O botão que abre o mapa (recurso Mapa). | [Botão do mapa](/novelworks-docs/pt-br/game-ui/map-button/) |
| {ui.gameUI.notices} | Mensagens curtas como "Você recebeu: Chave". | [Notificações](/novelworks-docs/pt-br/game-ui/notifications/) |

## Texto longo e avatar

Em Fontes e cores, Caixa de diálogo, Escolhas e Menu de pausa, o botão **{ui.gameUIMode.longTextAvatar}** acima da prévia mostra uma fala longa e um personagem com avatar, para você conferir se tudo cabe.

## Configurações que funcionam igual em todo lugar

- **Cores.** Uma amostra abre um seletor de cores, e uma caixa aceita um código (`#rgb` ou `#rrggbb`). Quando uma cor é "Igual a …" (por exemplo "{tx.gameUIInspector.sameAsTheTextColor}"), nada é guardado: ela acompanha a outra cor. Depois que você escolhe uma cor, uma pequena seta circular ao lado dela volta para "Igual a …".
- **Estilo do botão.** Uma lista com **{ui.gameUIInspector.sameAsFontsColors}**, **{ui.gameUIInspector.pill}**, **{ui.gameUIInspector.rounded}**, **{ui.gameUIInspector.square}** e **{ui.gameUIInspector.text}** (sem caixa, só as palavras). "{tx.gameUIInspector.sameAsFontsColors}" acompanha o estilo global.
- **Controles deslizantes** mostram o valor com a unidade, em geral %. As porcentagens são relativas à tela, então o seu visual se mantém em qualquer tamanho.
- **Imagens.** Um campo de imagem mostra uma miniatura com **{ui.gameUIInspector.choose_c7f937}** ou **{ui.gameUIInspector.change}**, e um X para removê-la. Em geral você pode escolher qualquer uma das suas imagens ou importar uma nova na hora. (O fundo da tela de título só oferece cenários, CGs e imagens de interface.) Se uma imagem for excluída, o jogo volta para a cor lisa ou para o texto.
- **{ui.gameUIInspector.resetToDefault}.** O botão no fim de uma tela pede confirmação e depois devolve **só aquela tela** ao visual de um jogo novo. As outras telas não mudam.

## Desfazer

Toda mudança na interface do jogo pode ser desfeita. Digitar, arrastar um controle deslizante ou escolher uma cor em um campo conta como um passo.

## O que é salvo

O visual é salvo no seu projeto, junto com o resto. As escolhas dos próprios jogadores (tamanho do texto, fonte adaptada para dislexia, alto contraste) valem por cima do seu visual, só para eles. Veja [Opções e acessibilidade](/novelworks-docs/pt-br/player/options-and-accessibility/).
