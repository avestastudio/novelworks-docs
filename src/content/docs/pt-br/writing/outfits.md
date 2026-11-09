---
title: Roupas e o guarda-roupa
description: Vista um personagem com peças que você pode combinar, salve roupas e troque-as durante a história.
---

O guarda-roupa permite vestir um personagem com imagens colocadas sobre ele. Você combina peças, salva o resultado como uma roupa e escolhe a roupa na sua história.

## Abrir o guarda-roupa

Na aba **{ui.leftPanel.characters}**, selecione um personagem e clique no botão grande **{ui.wardrobe.open}**. O mesmo botão está no painel de um personagem em cena.

![O guarda-roupa: o personagem em tamanho grande, as peças por categoria e as roupas salvas embaixo.](/novelworks-docs/screenshots/wardrobe.png)

A janela mostra:

- o personagem em tamanho grande, com as expressões embaixo, para você conferir cada uma;
- as categorias e as peças delas, na lateral;
- as roupas salvas, embaixo.

Você pode desfazer cada mudança com `Cmd+Z` / `Ctrl+Z` enquanto a janela estiver aberta.

## Adicionar peças

Uma peça é uma imagem com fundo transparente, guardada em uma categoria. Solte arquivos em uma categoria ou clique em **{ui.wardrobe.addPiece}** (o sinal de mais). As peças são um tipo de imagem próprio, **{ui.assetTypes.clothing}**, e o seletor de peças só mostra esse tipo.

Um personagem usa uma peça por categoria. Para um chapéu e um colar juntos, use duas categorias.

## Categorias

Um guarda-roupa novo tem quatro categorias: **{ui.wardrobe.category.shoes}**, **{ui.wardrobe.category.bottoms}**, **{ui.wardrobe.category.tops}** e **{ui.wardrobe.category.accessories}**.

- Clique no nome de uma categoria para renomeá-la. As categorias não servem só para roupas: cabelo também funciona.
- **{ui.wardrobe.addCategory}** adiciona uma, até 12.
- **{ui.wardrobe.removeCategory}** exclui a categoria e as peças dela, e as tira das roupas. As imagens continuam nos seus recursos.
- **{ui.wardrobe.required}** remove a opção **{ui.wardrobe.none}** dessa categoria.

## Posicionar uma peça

Clique em uma peça. Um quadro aparece em volta dela sobre o personagem.

- **Arraste** o quadro para mover a peça.
- **Puxe o canto** para redimensioná-la, de 5 % a 400 %.
- Use as **setas do teclado** para passos pequenos. Segure `Shift` para passos maiores.
- **{ui.wardrobe.resetPlacement}** desfaz tudo isso.

Você posiciona uma peça uma vez. Todas as roupas e expressões que a usam acompanham.

Uma imagem com o mesmo formato do personagem fica exatamente sobre ele quando você a adiciona. Uma imagem com outro formato, como um chapéu recortado sozinho, chega no próprio tamanho.

## Ordem das camadas

A lista de categorias mostra a frente no alto. **{ui.wardrobe.moveForward}** e **{ui.wardrobe.moveBack}** movem uma categoria.

A fileira **{ui.wardrobe.expressionLayer}** se move do mesmo jeito. Mova-a para colocar o cabelo sobre o rosto ou um corpo embaixo dele.

## Experimentar e salvar

Clicar em uma peça só a experimenta. Nada é salvo ainda.

- **{ui.wardrobe.saveAsNew}** cria uma roupa com o que o personagem está vestindo.
- **{ui.wardrobe.updateOutfit}** aparece quando você mudou a roupa selecionada, e salva a mudança.
- **{ui.outfits.default}** é o personagem sem nenhuma peça.

Selecione uma roupa embaixo para renomeá-la ou para excluí-la com **{ui.outfits.remove}**.

## Desenhos inteiros

Se o seu personagem for desenhado em uma peça só, você pode dispensar as camadas. Selecione uma roupa e abra **{ui.wardrobe.wholeDrawings}**. Dê a ela um desenho pronto por expressão. Um desenho inteiro substitui as camadas para aquela expressão, naquela roupa.

## Trocar a roupa na história

Clique no personagem na tela do jogo. Você tem então três caminhos:

- a seção **{ui.stageControls.outfit}** do painel à direita, com o personagem mostrado em cada roupa;
- o menu **{ui.stageControls.outfit}** na pequena barra sobre o personagem;
- **{ui.contextMenus.outfit}** no menu do botão direito.

A roupa fica até um momento posterior mudá-la, como uma expressão. **{ui.stage.scopeLabel}** funciona como sempre: veja [O palco](/novelworks-docs/pt-br/concepts/stage/).

## No modo Roteiro

Adicione a palavra `outfit` e o nome da roupa a uma linha `show`:

```
show : Mia happy outfit Uniform left
show : Mia outfit default
```

`outfit default` volta para a roupa inicial. Um nome de roupa que não existe é apontado, com um jeito de criá-la.

## Excluir, copiar e colar

- Se você excluir uma roupa, os personagens que a usavam voltam para **{ui.outfits.default}**.
- Se você excluir uma peça, ela é tirada das roupas que a usam.
- Quando você cola momentos em outro projeto, a roupa é encontrada pelo nome. Se não houver nenhuma com esse nome, o personagem usa a roupa inicial.

## Exportação

Só as peças usadas por uma roupa salva entram no seu jogo exportado.

## Limites

- Um personagem pode ter até 20 roupas além da inicial, e 200 peças.
- Os avatares não mudam com a roupa.
- A demo permite 2 roupas por personagem. Veja [Demo e versão completa](/novelworks-docs/pt-br/getting-started/demo-edition/).
