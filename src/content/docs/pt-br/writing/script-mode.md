---
title: "Modo Roteiro: o básico"
description: Escreva uma cena inteira como texto, como um roteiro de cinema, e veja-a se atualizar enquanto você digita.
---

O **modo Roteiro** mostra uma cena como texto, em vez de uma tela de jogo e uma linha do tempo. Você escreve uma linha para cada coisa que acontece, como em um roteiro de cinema, e a cena se atualiza enquanto você digita. As duas visões editam a mesma história: você pode alternar entre elas a qualquer momento.

```
Mia : Hello!
Mia (surprised) : You came back.
background : Station
? What now?
- Talk to her -> Park
- Leave
```

## Mudar para o modo Roteiro

Acima da tela do jogo, a chave **{ui.topBar.storyView}** tem dois botões: **{ui.topBar.visual}** (a tela do jogo e a linha do tempo) e **{ui.topBar.script}** (a cena como texto). A mesma chave está na visão Roteiro, para você poder voltar.

![Modo Roteiro: a cena como texto à esquerda, o momento sob o cursor à direita.](/novelworks-docs/screenshots/script-mode.png)

## O que o texto mostra

A barra de ferramentas do Roteiro tem uma chave **{ui.scriptMode.scope}**:

- **O nome da cena**: só a cena selecionada.
- **{ui.scriptMode.wholeGame}**: todas as cenas do jogo em um só texto, cada uma sob um título `# Name`. Você pode renomear uma cena pelo título dela, adicionar uma cena com um novo título e mover linhas entre cenas. Uma cena cujo título você apagar é mantida e movida para depois das outras. A cena oculta do próprio Mapa não é incluída.

Um `# heading` na visão de uma única cena é ignorado e sinalizado.

## A prévia

O lado direito mostra o **momento sob o cursor**, como ele aparece no jogo ("Momento 3 de 12"). Mover o cursor seleciona esse momento, e selecionar um momento em outro lugar move o cursor para a linha dele. Uma linha que continua a de cima pertence ao mesmo momento. A coluna da prévia pode ser redimensionada arrastando a borda dela; dê dois cliques na borda para restaurá-la.

Acima da prévia, a linha **{ui.branches.whereTitle}** mostra para onde o momento selecionado leva, como na visão Visual (veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/)). Um botão a oculta.

## Edição

- O texto é aplicado ao seu projeto **meio segundo depois de você parar de digitar**, e quando você muda o escopo, joga ou sai do modo Roteiro.
- Uma sequência de digitação é **um único passo de desfazer**. Uma pausa de cerca de um segundo começa um novo passo.
- Um momento cujo texto você não mudou é **mantido como estava**, com a nota, a posição dele no mapa da história, as falas lidas e os saves dos jogadores. As coisas que o texto não consegue expressar (posicionamento livre, tamanho, espelhamento, ordem dos personagens, zonas de exploração e objetos) também são mantidas, e um momento cuja tela não mudou a mantém exatamente igual.
- Se você mudar o projeto em outro lugar (o inspetor, a linha do tempo, desfazer), o texto se atualiza sem mover o seu cursor. Se você estiver digitando nesse instante, o seu texto prevalece.
- Nomes que ainda não existem nunca bloqueiam nada. O momento é criado mesmo assim e a linha fica sublinhada.

## Ajuda enquanto você digita

- Digite `/` no começo de uma linha para escolher um comando em uma lista. Nomes de personagens, imagens, cenas, variáveis e itens são sugeridos enquanto você digita e, depois de `background :`, `show :`, `hide :`, `give`, `remove`, `->`, `+`, `=` e `if`, a lista traz o tipo de nome correspondente.
- **Tab** recua o texto e **Shift+Tab** remove o recuo.
- Os nomes dos personagens são coloridos com a cor de nome do personagem.
- O botão **?** (**{ui.scriptMode.help}**) abre um painel "{tx.script.help.title}" com o formato.

## Nomes que ainda não existem

Um nome desconhecido fica sublinhado, e uma correção rápida oferece criá-lo com um clique:

- o botão **{ui.scriptMode.createMissing_other}** na barra de ferramentas cria todos os personagens, expressões, cenas, variáveis e itens que faltam e são citados no texto (**Cmd+.** / **Ctrl+.**);
- em uma linha, a correção oferece criar só aquele.

Uma expressão criada ainda não tem imagem. Uma variável é criada como Fato quando a linha a compara ou a define como verdadeira ou falsa; caso contrário, como Pontuação. Um item é empilhável quando a linha tem uma quantidade como `x3`.

## Jogar a partir do cursor

**{ui.scriptMode.playFromCursor}** joga o jogo a partir da linha sob o cursor (**Cmd+Enter** / **Ctrl+Enter**).

## Avisos no modo Roteiro

Uma linha que o NovelWorks quer que você confira recebe um sublinhado amarelo. Aponte para ela para ler o motivo. A quantidade de linhas a conferir aparece abaixo da prévia.

| Mensagem | Quando |
|---|---|
| Nenhum personagem se chama “…” | Uma linha `Name : text` cujo nome não é de um personagem. Por enquanto a linha é lida como narração. Correções: criar o personagem, ou “É o narrador”. |
| Nenhuma expressão se chama “…” | Uma expressão que o personagem não tem. Correção: criá-la. |
| Nenhuma imagem se chama “…” | Um `background :` que não corresponde a nenhuma imagem. Importe-a ou confira o nome. |
| Nenhuma cena se chama “…” | Um destino `->`, uma opção ou uma condição que cita uma cena inexistente. Correção: criá-la. |
| Nenhuma variável / nenhum item se chama “…” | Correção: criá-lo. |
| Esta linha sob uma opção não é um efeito | Uma linha recuada sob uma opção que não é `+`, `=`, `give` nem `remove`. Ela é ignorada. |
| Esta condição não pôde ser lida | Uma linha `if` com um teste que não é entendido. |
| Em uma mesma condição use “{tx.conditionCases.and}” ou “ou” | Os dois na mesma condição: só o primeiro tipo é usado. |
| Esta linha muda a cena, mas nenhuma linha vem depois dela | Um `background`, `show` ou `hide` sem nenhuma linha depois. |
| Esta nota não tem uma linha à qual pertencer | Uma nota `//` no fim sem nada depois. |
| “…” não está em cena aqui | Um `hide :` para um personagem que não está em cena. |
| “…” é uma palavra reservada | Um personagem com nome igual ao de um comando. Renomeie o personagem ou escreva o comando entre colchetes. |
| Um título # só funciona no documento do jogo inteiro | Um título na visão de uma única cena. Ele é ignorado. |

## Próximos passos

- [Modo Roteiro: todas as linhas](/novelworks-docs/pt-br/writing/script-mode-lines/)
- [Modo Roteiro: condições e escolhas](/novelworks-docs/pt-br/writing/script-mode-conditions/)
- [Importar e exportar um roteiro](/novelworks-docs/pt-br/writing/import-a-script/)
