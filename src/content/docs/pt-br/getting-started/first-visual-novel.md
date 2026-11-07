---
title: Seu primeiro visual novel
description: Um tutorial passo a passo, de um projeto vazio até um jogo que você pode jogar.
---

Você vai fazer uma historinha com um cenário, um personagem com duas expressões, algumas falas de diálogo e uma escolha com dois finais. Você precisa de três imagens: um cenário e duas imagens do **mesmo personagem** com expressões diferentes (por exemplo, feliz e surpreso).

## 1. Crie o projeto

1. Abra o NovelWorks. Na [tela de projetos](/novelworks-docs/pt-br/getting-started/projects-screen/), clique em **{ui.projectHub.newProject}**.
2. Digite um nome, confira o local (ou clique em **{ui.newProjectScreen.browse}**), deixe os recursos desmarcados e clique em **{ui.newProjectScreen.createProject}**.

O projeto abre com uma cena, "{tx.shared.project.firstScene}", e uma linha de diálogo vazia.

## 2. Adicione suas imagens

1. No painel esquerdo, abra a aba **{ui.leftPanel.assets}**.
2. Clique em **{ui.assetsTab.import}**, ou solte suas imagens sobre a janela.
3. Para cada imagem, escolha o tipo. Escolha **{ui.assetTypes.background}** para a imagem do lugar e **{ui.assetTypes.characterSprite}** para as duas imagens do seu personagem.

## 3. Crie um personagem

1. Abra a aba **{ui.leftPanel.characters}** e clique em **{ui.charactersTab.newCharacter}**.
2. No inspetor, digite o **{ui.characterInspector.characterName}** e escolha uma **{ui.characterInspector.nameColor}**.
3. Em **{ui.characterInspector.expressions}**, clique em **{ui.characterInspector.addExpression}** para cada imagem (só as imagens do tipo "{tx.assetTypes.characterSprite}" aparecem), dê um nome a ela ("Feliz", "Surpreso") e escolha a imagem. A expressão com a estrela é a mostrada por padrão.

## 4. Escreva a primeira cena

1. Abra a aba **{ui.leftPanel.scenes}** e selecione sua cena.
2. Escolha o cenário do momento com o botão de cenário acima da tela do jogo ("{ui.stage.chooseTheBackgroundOfThisMoment}").
3. Coloque seu personagem em cena com o botão **{ui.stageControls.putACharacterOnStage}** e depois arraste o personagem para onde quiser.
4. Clique na caixa de diálogo na tela e digite. Aperte **Enter** para começar a próxima fala: um novo momento começa, com o **mesmo palco**, porque [os personagens ficam em cena](/novelworks-docs/pt-br/concepts/stage/). Aperte **Shift+Enter** para uma nova linha na mesma caixa.
5. Clique no personagem na tela para mudar a expressão dele em um momento posterior.

## 5. Adicione uma escolha

1. Na linha do tempo, adicione um momento **{ui.moments.choice}**.
2. No inspetor, escreva a pergunta e o texto de duas opções.
3. Para cada opção, escolha a cena para a qual ela leva em **{ui.branchInspectors.then}**. Crie as cenas antes com **{ui.scenesTab.newScene}** na aba Cenas.

Você já pode fazer uma escolha importar: veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/).

## 6. Adicione um final

No fim de cada ramificação, adicione um momento **{ui.moments.ending}**. No começo ele se chama "{tx.shared.scenes.goodEnding}": mude o nome se quiser. Depois de um final, o jogador volta para a tela de título.

## 7. Aperte Jogar

Clique em **{ui.topBar.play}** na barra superior para jogar a partir da tela de título. Para testar do meio, selecione um momento e clique em **{ui.topBar.playFromHere}**. Aperte **Esc** para voltar ao editor (se um menu do jogo estiver aberto, **Esc** fecha o menu primeiro).

## 8. Salve

Aperte **Cmd+S** (Mac) ou **Ctrl+S** (Windows). O NovelWorks também salva sozinho a cada dois minutos. Veja [Salvar, backups e desfazer](/novelworks-docs/pt-br/getting-started/saving-and-undo/).

## E agora?

- Faça as escolhas importarem com [variáveis](/novelworks-docs/pt-br/branching/variables/) e [condições](/novelworks-docs/pt-br/branching/conditions/).
- Mude a aparência do seu jogo no [editor de interface do jogo](/novelworks-docs/pt-br/game-ui/game-ui-editor/).
- [Exporte-o](/novelworks-docs/pt-br/publish/web-export/) e compartilhe.
