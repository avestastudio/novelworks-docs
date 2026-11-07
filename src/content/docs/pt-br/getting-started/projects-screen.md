---
title: A tela de projetos e os novos projetos
description: Abrir, encontrar e criar projetos, e o que uma pasta de projeto contém.
---

A **tela de projetos** é a primeira coisa que você vê quando o NovelWorks inicia, e o lugar para onde você volta com a seta de voltar da barra superior.

## A lista de projetos

A lista mostra seus **projetos recentes**, do mais novo para o mais antigo, até 30. Cada linha mostra:

- uma imagem: a última tela de jogo salva, ou o primeiro cenário, ou o logo do NovelWorks para um projeto que ainda não tem imagens;
- o nome do projeto e a pasta onde ele está;
- quando você o abriu pela última vez.

Clique em uma linha para abrir o projeto.

Acima da lista:

- **{ui.projectHub.open}** abre uma pasta de projeto do seu computador. O atalho é **Cmd+O** no Mac e **Ctrl+O** no Windows.
- **{ui.projectHub.newProject}** começa um novo projeto (**Cmd+N** / **Ctrl+N**).
- A caixa de busca (**{ui.projectHub.searchProjects}**) filtra por nome ou pasta. **Esc** limpa a busca e a seta para baixo pula para o primeiro resultado.

O botão **…** de uma linha (ou um clique com o botão direito nela) abre um menu:

- **{ui.projectHub.open_ed077f}**;
- **{ui.projectHub.showInFinder}** no Mac, **{ui.projectHub.showInExplorer}** no Windows;
- **{ui.projectHub.removeFromList}**: remove o projeto só desta lista.

Se você moveu ou apagou a pasta de um projeto, a linha dele fica cinza e diz **{ui.projectHub.folderNotFound}**. Clique em **{ui.projectHub.locate}** e escolha o novo lugar da pasta.

O lado esquerdo da tela também tem **{ui.projectHub.reportABug}**, o número da versão e, na versão completa antes da ativação, **{ui.projectHub.activateNovelWorks}**.

## Criar um novo projeto

Clique em **{ui.projectHub.newProject}**.

1. Digite o **{ui.newProjectScreen.projectName}**. O NovelWorks remove os caracteres que um nome de pasta não pode ter (`/ \ : * ? " < > |`) e avisa se o nome está vazio ou já existe.
2. Confira o **{ui.newProjectScreen.location}**. Ele começa no último lugar que você usou, ou em Documentos → NovelWorks. Clique em **{ui.newProjectScreen.browse}** para escolher outro lugar. A linha **{ui.newProjectScreen.willBeCreatedIn}** mostra a pasta final.
3. Se quiser, marque os **{ui.newProjectScreen.features}** de que o seu jogo precisa: **{ui.shared.features.inventory}** e **{ui.shared.features.map}**. Todos começam desligados, e você pode ligá-los ou desligá-los depois sem perder nada.
4. Clique em **{ui.newProjectScreen.createProject}** (ou aperte **Enter**). **Esc** cancela.

O NovelWorks cria a pasta, com um arquivo `project.json` e uma pasta `assets` vazia, e abre o projeto com uma cena, “{tx.shared.project.firstScene}”, que tem uma linha de diálogo vazia. Uma pasta `backups` aparece na primeira vez que um backup é feito.

## O que há em uma pasta de projeto

- `project.json`: toda a sua história, em um só arquivo.
- `assets`: as imagens que você importou.
- `backups`: versões anteriores do `project.json` (veja [Salvar, backups e desfazer](/novelworks-docs/pt-br/getting-started/saving-and-undo/)).

Para copiar um projeto para outro computador, copie a pasta inteira. Depois você pode abri-lo com **{ui.projectHub.open}**.

## Projetos mais antigos e mais novos

- Um projeto feito com uma versão **mais antiga** do NovelWorks abre normalmente. Antes de atualizá-lo, o NovelWorks salva uma cópia exata do original em `backups` e mostra uma barra com **{ui.store.showCopy}**. Nada muda no disco até você salvar.
- Um projeto salvo por uma versão **mais nova** do NovelWorks não pode ser aberto. Atualize o NovelWorks primeiro.
