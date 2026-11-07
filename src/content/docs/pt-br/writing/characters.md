---
title: Personagens e expressões
description: Crie personagens, dê expressões e avatares a eles e saiba o que acontece quando você exclui um.
---

Um personagem é uma pessoa da sua história. Cada personagem tem um nome, uma cor de nome e **expressões**: uma imagem para cada humor. Os personagens ficam na aba **{ui.leftPanel.characters}**.

## Criar um personagem

Clique em **{ui.charactersTab.newCharacter}**. O personagem se chama "Personagem N", em que N é o número de personagens que você já tem mais um (dois personagens podem acabar com o mesmo nome, então renomeie-os) e recebe uma cor de nome de um conjunto de oito. Selecione-o para editá-lo no inspetor.

Você também pode criar um personagem ao importar imagens: veja [Recursos](/novelworks-docs/pt-br/writing/assets/).

## Nome e cor

- **{ui.characterInspector.name}**: digite-o no inspetor (não dá para renomear na própria lista, mas **{ui.contextMenus.rename}** no menu do botão direito leva você ao campo).
- **{ui.characterInspector.nameColor}**: escolha uma das oito cores predefinidas, ou qualquer cor com **{ui.characterInspector.pickAnyColor}**. Ela colore o nome na caixa de diálogo e no modo Roteiro.

## Expressões

Em **{ui.characterInspector.expressions}**, adicione uma imagem para cada humor (feliz, triste, bravo…).

- Clique em **{ui.characterInspector.addExpression}** e escolha uma imagem do tipo "{tx.assetTypes.characterSprite}", ou importe uma nova pelo seletor. A expressão recebe o nome da imagem.
- Digite outro nome em **{ui.characterInspector.expressionName}**, se quiser.
- Clique na estrela para **{ui.characterInspector.makeThisTheDefaultExpression}**. A primeira expressão que você adiciona é a padrão. Ela é a que aparece quando um personagem chega sem expressão.
- Clique na imagem para **{ui.characterInspector.changeImage}**. A imagem antiga continua nos seus recursos.
- Clique no X para remover a expressão. Se algum momento a usar, o NovelWorks avisa que eles vão usar a expressão padrão. Se você remover a padrão, a primeira expressão restante vira a padrão.

## Avatar

Um avatar é um pequeno retrato exibido na caixa de diálogo ao lado do nome. Em **{ui.characterInspector.avatar}**, escolha:

- **{ui.characterInspector.none}**: nenhum retrato na caixa de diálogo;
- **{ui.characterInspector.fixed}**: o mesmo retrato toda vez que este personagem fala;
- **{ui.characterInspector.perExpression}**: um retrato para cada expressão. Expressões sem retrato usam o avatar padrão.

Os avatares podem ser imagens do tipo "{tx.assetTypes.avatar}", "{tx.assetTypes.characterSprite}" ou "Interface".

## Colocar um personagem em cena

Veja [Encenar uma cena](/novelworks-docs/pt-br/writing/staging/). Resumindo: em um momento, use **{ui.momentInspector.add}** em **{ui.momentInspector.onStage}** (ou o botão **{ui.stageControls.character}** acima da tela do jogo) e depois arraste o personagem para onde quiser.

## Excluir um personagem

Use **{ui.characterInspector.deleteCharacter}** no inspetor ou **{ui.contextMenus.delete}** no menu do botão direito. Se o personagem não for usado, o NovelWorks o remove junto com as expressões dele; as imagens continuam nos seus recursos. Se ele aparecer na sua história, o NovelWorks lista onde e avisa que ele vai **sair desses momentos e as falas dele vão virar narração**. Use **{ui.contextMenus.showUsages}** antes para ver onde um personagem é usado.

Você pode desfazer uma exclusão.
