---
title: Copiar, colar e duplicar
description: Copie momentos, cenas e personagens, cole em outro lugar e duplique com uma tecla.
---

## Duplicar

**Cmd+D** / **Ctrl+D** duplica o que está selecionado, mesmo enquanto você digita:

- um **momento**: a cópia vai logo depois do original, com uma nova identidade. Ela não muda nada na tela, então mostra a mesma imagem do original, e a nota dele é copiada;
- uma **cena**: a cópia vai logo depois do original e se chama algo como “Uma mãozinha (cópia)” (veja [Cenas](/novelworks-docs/pt-br/writing/scenes/));
- uma **zona** de exploração.

O menu de clique direito tem **{ui.contextMenus.duplicate}** para um momento e uma cena, e **{ui.contextMenus.duplicateZone}** para uma zona. O inspetor de um momento tem um botão **{ui.momentInspector.duplicate}**.

## Copiar, recortar e colar

**Cmd+C**, **Cmd+X** e **Cmd+V** (**Ctrl** no Windows) copiam, recortam e colam:

| Selecionado | Copiar e recortar | Colar |
|---|---|---|
| Um **momento** (ou nada) | O momento. Recortar o remove, sem perguntar, e os momentos seguintes continuam mostrando a mesma coisa. | Insere a cópia **depois do momento selecionado** da cena atual, ou no fim. |
| Uma **cena** (na lista de cenas) | A cena inteira. Recortar pede confirmação para excluir. | Acrescenta a cópia no fim da lista, selecionada. |
| Um personagem na tela do jogo | O personagem, como está posicionado naquele momento: expressão, lugar, tamanho, direção. Recortar o tira de cena. | Põe o personagem em cena no momento selecionado com a aparência copiada. Se o personagem já está lá, ele assume a aparência colada. |

Um momento colado leva consigo suas próprias mudanças de cena: se era o momento em que Mia chegava, ela chega de novo. Uma colagem é um passo de desfazer.

### Quando funciona

Copiar, recortar e colar só funcionam no modo {ui.topBar.story}, visão **{ui.topBar.visual}**. Não fazem nada na visão Roteiro, nem quando uma caixa de texto está com o foco (a caixa tem o seu próprio copiar e colar), nem quando uma janela ou menu está aberto, nem quando há texto selecionado na página. Uma imagem, uma variável, uma zona ou um objeto de cena não podem ser copiados.

Os menus de clique direito não têm entradas Copiar ou Colar: use as teclas, ou os itens Recortar, Copiar e Colar do menu Editar.

### Entre projetos e janelas

A cópia vai para a área de transferência do seu computador como texto, então você pode colar em **outro projeto ou outra janela**. A cópia leva o próprio momento, cena ou personagem e os **nomes** dos personagens, expressões, imagens, variáveis, itens e cenas a que ele se refere, mas não essas coisas.

Quando você cola, o NovelWorks procura cada referência no projeto em que você cola:

- se ela existe lá (mesma identidade), é mantida;
- senão, é procurada **pelo nome**: uma imagem do mesmo tipo, uma variável do mesmo tipo, uma expressão do personagem correspondente;
- senão, é **deixada de fora**: um personagem sai de cena, um falante vira o **{ui.stageControls.narrator}**, um cenário mostra “{tx.stage.noBackground}”, e um link, um item ou uma variável vira “não escolhido”.

Uma mensagem lista o que foi deixado de fora (“Colado, mas alguns elementos do outro projeto não existem neste e foram deixados de fora: …”), até 8 entradas e depois “e mais N”. Ela fica por cerca de 15 segundos. Colar no mesmo projeto não mostra mensagem. Uma cópia feita com uma versão mais antiga do NovelWorks não tem nomes, então as referências dela são limpas e listadas como “sem nome”.

Cole em um projeto que tenha os mesmos personagens, imagens, cenas e variáveis para obter o melhor resultado.

## Excluir

`Delete` ou `Backspace` remove da cena o personagem, a zona ou o objeto selecionado, ou exclui o momento selecionado, quando nenhuma caixa de texto está com o foco.

## Todos os atalhos

Veja [Atalhos de teclado](/novelworks-docs/pt-br/reference/keyboard-shortcuts/).
