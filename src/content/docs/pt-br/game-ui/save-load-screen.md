---
title: Tela de salvar e carregar
description: "As telas de salvar e de carregar: espaços, salvamento rápido, salvamento automático e a aparência delas."
---

As telas **{ui.gameUI.saveLoad}** são acessadas pela tela de título e pelo menu de pausa.

## O que você pode mudar

Em **{ui.gameUIInspector.screen}**:

- **{ui.gameUIInspector.backgroundColor}**: por padrão, a cor da tela de título;
- **{ui.gameUIInspector.textColor}**: “{tx.gameUIInspector.sameAsTheTextColor}” por padrão;
- **{ui.gameUIInspector.buttonStyle}**: o estilo do botão Voltar. (As perguntas de confirmação, como “{tx.savesScreen.overwrite}” e “{tx.savesScreen.delete}”, usam o estilo de botão do [menu de pausa](/novelworks-docs/pt-br/game-ui/pause-menu/).)

Em **{ui.gameUIInspector.slots}**:

- **{ui.gameUIInspector.slotColor}**: a cor de cada bloco de espaço (“{tx.gameUIInspector.sameAsTheDialogueBox}” por padrão).

## O que os jogadores têm

- **12 espaços de salvamento**, mostrados em uma grade de três colunas, um **salvamento rápido** e um **salvamento automático** no começo de cada cena nova.
- Cada espaço mostra uma imagem pequena do momento (cenário, objetos de cena e personagens, sem o diálogo), o nome da cena, a data e o tempo de jogo. Um espaço vazio mostra “Vazio”.
- A tela **{rt.game.load}** lista primeiro o Salvamento automático e o Salvamento rápido, depois os espaços de 1 a 12. A tela **{rt.game.save}** lista os espaços de 1 a 12.
- Salvar sobre um espaço pede confirmação (“{tx.savesScreen.overwrite}”); excluir um espaço (o × em um espaço preenchido) também pede; carregar um salvamento com um jogo em andamento pergunta “{tx.game.loadThisSaveUnsavedProgressWillBe}”
- Teclado: as setas se movem entre os espaços, **Enter** ou **Espaço** escolhe, `Delete` ou `Backspace` exclui, **Home** e **End** pulam para o primeiro e o último espaço da lista, **Esc** volta.

## Onde os jogadores encontram

- **{ui.gameUI.titleScreen}**: **{rt.game.continue}** (o salvamento mais recente, só se houver um) e **{rt.game.load}**.
- **{ui.gameUI.pauseMenu}**: **{rt.game.save}**, **{rt.game.load}**, **{rt.game.quickSave}** (**F5**) e **{rt.game.quickLoad}** (**F9**). O carregamento rápido só aparece depois que existe um salvamento rápido.
- **{ui.quickMenu.title}**: os mesmos quatro botões, se você os mostrar.

Se o navegador não permitir salvar (navegação privada, ou dados de sites desativados), as telas avisam, e nada pode ser salvo. Veja [Salvar e carregar](/novelworks-docs/pt-br/player/save-and-load/).
