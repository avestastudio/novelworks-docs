---
title: Formatar o seu texto
description: Deixe palavras em negrito, coloridas, grandes ou tremendo, e adicione pausas e variáveis a uma fala.
---

Você pode formatar qualquer parte de uma fala. Você escreve na tela do jogo ou na aba **{ui.inspectorTabs.text}**, e o texto fica com a aparência que terá no jogo.

## Formatar algumas palavras

Selecione palavras em uma fala. Uma pequena barra de ferramentas aparece acima delas.

![A barra de ferramentas acima das palavras selecionadas, com negrito, itálico, as cores, os tamanhos e os movimentos.](/novelworks-docs/screenshots/rich-text-toolbar.png)

| Controle | O que faz |
|---|---|
| **{ui.richText.bold}** e **{ui.richText.italic}** | Letras mais grossas ou inclinadas. Você também pode apertar `Cmd+B` / `Ctrl+B` e `Cmd+I` / `Ctrl+I`. |
| Cinco cores redondas | As cores da sua paleta (veja abaixo). |
| **{ui.richText.customColor}** | Qualquer outra cor, só para esta seleção. |
| **{ui.richText.small}** e **{ui.richText.big}** | Letras menores ou maiores. As palavras têm um tamanho de cada vez. |
| **{ui.richText.shake}** e **{ui.richText.wave}** | As letras tremem ou ondulam no jogo. As palavras têm um movimento de cada vez. |
| **{ui.richText.clear}** | Tira todos os estilos da seleção. |

Clique em um estilo de novo para tirá-lo.

## As suas cinco cores

As cinco cores da barra de ferramentas são definidas uma vez para o jogo inteiro: **{ui.topBar.gameUI}**, **{ui.gameUI.dialogueBox}**, **{ui.richText.palette}**.

Se você mudar uma cor ali, todas as palavras que a usam mudam também. Uma cor escolhida com **{ui.richText.customColor}** não acompanha a paleta.

## Inserir uma pausa ou uma variável

Embaixo do campo de texto na aba **{ui.inspectorTabs.text}**, a fileira **{ui.richText.insert}** adiciona algo no último lugar onde o cursor esteve.

**{ui.richText.pause}** adiciona uma espera curta no meio da fala. Ela aparece como uma pequena etiqueta no texto. Dura meio segundo. Clique na etiqueta para mudar, de 0,1 a 5 segundos.

**{ui.richText.variable}** abre a lista das suas [variáveis](/novelworks-docs/pt-br/branching/variables/). No texto, você vê o nome da variável como uma pequena etiqueta. No jogo, o jogador vê o valor dela. Uma variável verdadeiro ou falso aparece como **{rt.game.yes}** ou **{rt.game.no}**. Se você excluir a variável, o jogo não mostra nada no lugar dela.

## O que o jogador vê

- A fala é digitada letra por letra e para em cada pausa.
- O primeiro clique mostra a fala inteira. O clique seguinte avança.
- As letras que tremem ou ondulam continuam se movendo enquanto a fala está na tela.
- Se o jogador tiver pedido ao sistema menos movimento, as letras não se movem.
- O [histórico](/novelworks-docs/pt-br/player/history/) e os leitores de tela recebem só as palavras, sem estilos.

## No modo Roteiro

No [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/), os estilos são escritos como etiquetas em volta das palavras:

```
Mia : I {b}never{/b} said that.
Mia : It was {color=1}red{/color}, {shake}so red{/shake}.
Mia : Well...{pause} maybe.
Mia : Wait.{pause=2} You have {Affection} points.
```

| Etiqueta | Significado |
|---|---|
| `{b}` … `{/b}` | Negrito |
| `{i}` … `{/i}` | Itálico |
| `{color=1}` … `{/color}` | Uma cor da paleta, de 1 a 5. Um código como `{color=#ff0000}` também funciona. |
| `{small}` … `{/small}`, `{big}` … `{/big}` | Tamanho |
| `{shake}` … `{/shake}`, `{wave}` … `{/wave}` | Movimento |
| `{pause}`, `{pause=2}` | Uma pausa de meio segundo, ou dos segundos que você indicar |
| `{Affection}` | O valor da variável com esse nome |

Para escrever um `{` de verdade, digite-o duas vezes: `{{`.

As palavras das etiquetas seguem o idioma do editor. Um roteiro copiado de outro idioma continua funcionando.

## Limites

Estilos, pausas e variáveis só funcionam em falas de diálogo. As opções de uma escolha e o nome de um final são texto simples.
