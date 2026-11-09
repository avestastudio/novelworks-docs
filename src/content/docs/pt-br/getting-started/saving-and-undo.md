---
title: Salvar, backups e desfazer
description: Como o NovelWorks salva seu trabalho, guarda versões anteriores e deixa você voltar atrás.
---

## Salvar

- Clique em **{ui.topBar.save}**, escolha **{ui.native.menu.file} → {ui.native.menu.save}** ou aperte **Cmd+S** (Mac) / **Ctrl+S** (Windows). Uma mensagem “{tx.store.projectSaved}” confirma.
- O NovelWorks também **salva automaticamente**: a cada 2 minutos e sempre que a janela perde o foco, mas só se houver alterações não salvas. A barra superior então mostra **{ui.topBar.savedAuto}**.
- O indicador de salvamento mostra **{ui.topBar.unsavedChanges}** até o próximo salvamento.
- Se você fechar a janela ou o projeto com alterações não salvas, o NovelWorks pergunta se deve salvar, não salvar ou cancelar.

## Backups

Backups são cópias anteriores do `project.json`, guardadas na pasta `backups` dentro do seu projeto.

- Um backup é feito **antes de cada salvamento manual**.
- Com o salvamento automático, um backup é feito **no máximo a cada 15 minutos**.
- Nenhum backup é feito se nada mudou desde o mais recente.
- O NovelWorks guarda os **20 mais recentes**, mais o **backup mais recente de cada um dos últimos 7 dias**. Os mais antigos são apagados.
- As cópias feitas quando um projeto antigo é atualizado (**{ui.restoreBackupDialog.beforeUpgrade}**) nunca são apagadas.
- As imagens, os vídeos e os sons que você apaga do projeto são movidas para `backups/deleted-assets` em vez de serem eliminadas, para que um backup ainda consiga encontrá-las. Elas são limpas quando nenhum backup guardado precisa mais delas.

### Voltar para um backup

1. Escolha **{ui.native.menu.file} → {ui.native.menu.restoreFromBackup}**.
2. Escolha uma versão na lista. Cada linha mostra a data, o tipo (**{ui.restoreBackupDialog.saved}**, **{ui.restoreBackupDialog.autosave}**, **{ui.restoreBackupDialog.beforeRestoringABackup}** ou **{ui.restoreBackupDialog.beforeUpgrade}**) e quantas cenas e momentos ela tem.
3. Clique em **{ui.restoreBackupDialog.restoreThisVersion}** (ou clique duas vezes na linha).

Sua versão atual também é guardada como backup, e **{ui.native.menu.undo}** a traz de volta.

## Desfazer e refazer

**{ui.native.menu.edit} → {ui.native.menu.undo}** (**Cmd+Z** / **Ctrl+Z**) e **{ui.native.menu.redo}** (**Shift+Cmd+Z** no Mac, **Ctrl+Y** ou **Ctrl+Shift+Z** no Windows) voltam e avançam pelas suas alterações. A barra superior tem as mesmas duas setas.

- O NovelWorks lembra os últimos **200** passos.
- Digitar em uma caixa de texto é agrupado: uma sequência de digitação é um passo, encerrado por uma pausa de cerca de um segundo.
- Uma ação que muda várias coisas de uma vez, como uma mudança que alcança momentos posteriores, é um passo só.
- Desfazer continua funcionando depois que você salva. Ele é zerado quando você abre ou fecha um projeto.
- Desfazer e refazer ficam desligados enquanto você está jogando.
- Mudar o tema ou o idioma do editor, redimensionar painéis e trocar de aba não fazem parte do histórico.

## Projetos mais antigos

O NovelWorks abre projetos feitos com versões mais antigas e os atualiza. Antes disso, ele salva uma cópia exata do `project.json` original em `backups`, e uma barra no alto mostra onde, com **{ui.store.showCopy}**. Se a cópia não puder ser feita, o projeto não é aberto e nada é alterado. Um projeto de uma versão mais nova do NovelWorks é recusado.
