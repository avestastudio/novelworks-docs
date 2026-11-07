---
title: Tour pelo editor
description: As áreas da janela do NovelWorks e o que cada controle faz.
---

O editor tem uma **barra superior** e, no modo {ui.topBar.story}, mais três áreas: o **painel esquerdo**, o centro e a parte de baixo, além do **inspetor** à direita.

![O editor do NovelWorks: lista de cenas à esquerda, a tela do jogo no meio, a linha do tempo e o gráfico de quem está em cena embaixo, e o inspetor à direita.](/novelworks-docs/screenshots/editor-overview.png)

## A barra superior

Da esquerda para a direita:

- **A seta de voltar** leva de volta à [tela de projetos](/novelworks-docs/pt-br/getting-started/projects-screen/). Se houver alterações não salvas, ela pergunta se você quer salvá-las antes.
- **O título do projeto** (ou “Projeto sem título”). Clique nele para mostrar as configurações do projeto no inspetor (veja [Configurações do editor e do projeto](/novelworks-docs/pt-br/getting-started/editor-settings/)).
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
- **{ui.leftPanel.assets}**: suas imagens, com um botão **{ui.assetsTab.import}** e filtros por tipo.
- **{ui.leftPanel.characters}**: seus personagens e quantas expressões cada um tem.
- **{ui.leftPanel.variables}**: o que o seu jogo lembra.
- **{ui.leftPanel.items}**: só quando o recurso Inventário está ligado.

Embaixo: **{ui.leftPanel.map}** (só quando o recurso Mapa está ligado), **{ui.leftPanel.features}** (abre a lista das partes opcionais do seu jogo) e uma dica que muda a cada 30 segundos. Enquanto você busca (**{ui.native.menu.edit} → {ui.native.menu.findAndReplace}**), o painel de busca substitui as abas.

Você pode arrastar a borda entre os painéis para redimensioná-los; clique duas vezes na borda para voltar à largura padrão. Suas larguras ficam guardadas neste computador.

## O centro: a tela do jogo

O jogo como os jogadores vão ver, ajustado para caber. Acima dela você pode escolher o cenário do momento, adicionar personagens e alternar entre duas coisas:

- **{ui.topBar.visual}** e **{ui.topBar.script}**: mostram a cena como a tela do jogo com uma linha do tempo, ou como um texto que você digita como um roteiro de filme.
- **{ui.stage.scopeLabel}**: **{ui.stage.scopeFollowing}** ou **{ui.stage.scopeOnlyHere}**. Isso é explicado em [O palco](/novelworks-docs/pt-br/concepts/stage/).

Acima da tela, uma fileira de botões pequenos mostra para onde o momento selecionado leva (veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/)).

Em uma janela baixa (menos de cerca de 780 pixels de altura), cada fileira acima da tela do jogo fica em uma só linha que rola para os lados, e o lembrete de teclas embaixo da tela do jogo some, para dar espaço à tela do jogo.

## A parte de baixo: a linha do tempo

Os momentos da cena atual, como cartões que você pode reordenar. Botões adicionam um momento de cada tipo depois do selecionado, e dois ícones duplicam ou apagam o momento selecionado. Embaixo dos cartões, um gráfico mostra quem está em cena e uma fileira mostra onde a história se ramifica. Veja [Cenas, momentos e a linha do tempo](/novelworks-docs/pt-br/concepts/scenes-moments-timeline/).

## A direita: o inspetor

As propriedades do que você selecionou: um momento, uma cena, uma imagem, um personagem, uma variável, um item, um personagem em cena. O título muda conforme a seleção. Sem nada selecionado, ele mostra as **{ui.inspector.projectSettings}**.

## Os menus

No Mac, o menu do aplicativo reúne Sobre, Serviços, Ocultar e Sair; no Windows, Sair fica no menu Arquivo.

- **{ui.native.menu.file}**: Novo projeto, Abrir projeto, Salvar, Restaurar do backup, Importar roteiro, Exportar o roteiro, {ui.native.menu.exportForWeb}, Fechar projeto.
- **{ui.native.menu.edit}**: Desfazer, Refazer, Localizar e substituir, Recortar, Copiar, Colar, Selecionar tudo, Idioma da ortografia.
- **{ui.menu.view}**: Tema, Idioma, Alternar tela cheia.
- **{ui.native.role.window}**.
- **{ui.native.role.help}**: Documentação, Rever o tutorial, Atalhos de teclado, Ativar o NovelWorks (só na versão completa), Relatar um bug e Sobre no Windows.

Uma lista completa de atalhos está em [Atalhos de teclado](/novelworks-docs/pt-br/reference/keyboard-shortcuts/).
