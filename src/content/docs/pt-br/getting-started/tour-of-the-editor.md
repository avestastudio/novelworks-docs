---
title: Tour pelo editor
description: As áreas da janela do NovelWorks e o que cada controle faz.
---

O editor tem uma **barra superior** e, no modo {ui.topBar.story}, mais três áreas: o **painel esquerdo**, o centro e a parte de baixo, além do **inspetor** à direita.

![O editor do NovelWorks: lista de cenas à esquerda, a tela do jogo no meio, a linha do tempo e o gráfico de quem está em cena embaixo, e o inspetor à direita.](/novelworks-docs/screenshots/editor-overview.png)

## A barra superior

Da esquerda para a direita:

- No Windows, **{ui.appMenuButton.menu}** vem primeiro e abre o menu do aplicativo (Arquivo, Editar, Exibir, Ajuda).
- **A seta de voltar** leva de volta à [tela de projetos](/novelworks-docs/pt-br/getting-started/projects-screen/). Se houver alterações não salvas, ela pergunta se você quer salvá-las antes.
- **O título do projeto** (ou “{tx.topBar.untitledProject}”). Clique nele para mostrar as configurações do projeto no inspetor (veja [Configurações do editor e do projeto](/novelworks-docs/pt-br/getting-started/editor-settings/)).
- **O indicador de salvamento**: {ui.topBar.unsavedChanges}, {ui.topBar.savedAuto} ou {ui.topBar.saved}.
- **Três modos**:
  - **{ui.topBar.story}**: cenas, momentos e personagens. É aqui que você escreve.
  - **{ui.topBar.storyMap}**: todas as cenas do seu jogo e como escolhas, condições e saltos as ligam.
  - **{ui.topBar.gameUI}**: a aparência do seu jogo (tela de título, caixa de diálogo, menus).
- As setas **{ui.topBar.undo}** e **{ui.topBar.redo}**.
- **{ui.topBar.save}**.
- **{ui.topBar.playFromHere}** joga a partir do momento selecionado. No espaço de trabalho do Mapa, ele vira **{ui.topBar.testMap}**.
- **{ui.topBar.play}** joga a partir da tela de título.

Em uma janela estreita, os nomes dos modos e o texto “{tx.leftPanel.playFromHere}” encolhem e viram ícones.

## O painel esquerdo

Abas:

- **{ui.leftPanel.scenes}**: suas cenas. Arraste para reordenar; a estrela marca a cena inicial.
- **{ui.leftPanel.assets}**: suas imagens, vídeos e sons, com um botão **{ui.assetsTab.import}** e filtros por tipo.
- **{ui.leftPanel.characters}**: seus personagens e quantas expressões cada um tem.
- **{ui.leftPanel.variables}**: o que o seu jogo lembra.
- **{ui.leftPanel.items}**: só quando o recurso Inventário está ligado.

Embaixo: **{ui.leftPanel.map}** (só quando o recurso Mapa está ligado), **{ui.leftPanel.features}** (abre a lista das partes opcionais do seu jogo) e uma dica que muda a cada 30 segundos. Enquanto você busca (**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**), o painel de busca substitui as abas.

Você pode arrastar a borda entre os painéis para redimensioná-los; clique duas vezes na borda para voltar à largura padrão. Suas larguras ficam guardadas neste computador.

## O centro: a tela do jogo

O jogo como os jogadores vão ver, ajustado para caber. Acima dela você encontra só estes controles:

- o botão de cenário, que escolhe o cenário do momento;
- **{ui.stageControls.character}**, que coloca um personagem em cena;
- em um momento {ui.moments.exploration}, a ferramenta para desenhar zonas (veja [Exploração](/novelworks-docs/pt-br/features/exploration/));
- **{ui.topBar.visual}** e **{ui.topBar.script}**: mostram a cena como a tela do jogo com uma linha do tempo, ou como um texto que você digita como um roteiro de filme.

Clique em um personagem na tela do jogo: uma pequena barra sobre ele muda a expressão e a roupa. Todo o resto sobre o personagem está no inspetor. Veja [Encenar uma cena](/novelworks-docs/pt-br/writing/staging/).

Em uma janela baixa (menos de cerca de 780 pixels de altura), o gráfico embaixo da linha do tempo mostra menos fileiras, para dar espaço à tela do jogo.

## A parte de baixo: a linha do tempo

Os momentos da cena atual, como cartões que você pode reordenar. No cabeçalho da linha do tempo, **{ui.moments.dialogue}** adiciona uma fala de diálogo depois do momento selecionado, e **{ui.timeline.addOther}** lista os outros tipos de momento, cada um com uma frase que o explica. Dois ícones duplicam ou apagam o momento selecionado. Essas duas ações também estão no menu do botão direito de um cartão. Embaixo dos cartões, um gráfico mostra quem está em cena, fileiras mostram até onde vai cada som (quando a cena tem sons) e uma fileira mostra onde a história se ramifica. Veja [Cenas, momentos e a linha do tempo](/novelworks-docs/pt-br/concepts/scenes-moments-timeline/).

## A direita: o inspetor

As propriedades do que você selecionou: um momento, uma cena, uma imagem, um personagem, uma variável, um item, um personagem em cena. O título muda conforme a seleção. Sem nada selecionado, ele mostra as **{ui.inspector.projectSettings}**.

Um momento tem quatro abas:

- **{ui.inspectorTabs.text}**: quem fala e o que é dito (ou a escolha, a condição…), para onde o momento leva, o que leva até ele e a sua nota.
- **{ui.inspectorTabs.image}**: até onde vai uma mudança, o cenário, o ambiente e quem está em cena.
- **{ui.inspectorTabs.effects}**: a câmera e os efeitos.
- **{ui.sound.tab}**: música, som ambiente, efeitos sonoros e voz.

Veja [O painel do momento](/novelworks-docs/pt-br/writing/moment-panel/). Quando você clica em um personagem na tela do jogo, o inspetor mostra **{ui.inspector.characterOnStage}**: a posição, o tamanho, a direção, a ordem e a roupa dele.

## Os menus

No Mac, o menu do aplicativo reúne Sobre, Serviços, Ocultar e Sair; no Windows, Sair fica no menu Arquivo.

- **{ui.native.menu.file}**: {tx.native.menu.newProject}, {tx.native.menu.openProject}, {tx.native.menu.save}, {tx.native.menu.restoreFromBackup}, {tx.native.menu.importScript}, {tx.native.menu.exportScript}, {ui.native.menu.exportForWeb}, {tx.native.menu.closeProject}.
- **{ui.native.menu.edit}**: {tx.native.menu.undo}, {tx.native.menu.redo}, {tx.native.menu.findAndReplace}, Recortar, Copiar, Colar, Selecionar tudo, Idioma da ortografia.
- **{ui.menu.view}**: {tx.native.menu.theme}, Idioma, Alternar tela cheia.
- **{ui.native.role.window}**.
- **{ui.native.role.help}**: Documentação, {tx.native.menu.replayTutorial}, {tx.native.menu.keyboardShortcuts}, {tx.native.menu.activateNovelWorks} (só na versão completa), {tx.native.menu.reportABug} e Sobre no Windows.

Uma lista completa de atalhos está em [Atalhos de teclado](/novelworks-docs/pt-br/reference/keyboard-shortcuts/).
