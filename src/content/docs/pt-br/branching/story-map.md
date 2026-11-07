---
title: O mapa da história
description: Veja todas as cenas e como elas se conectam, ligue cenas arrastando e descubra o que precisa de atenção.
---

O **{ui.topBar.storyMap}** mostra cada cena do seu jogo como um cartão, e cada escolha, condição, salto e zona como uma seta entre elas. Abra-o pela barra superior ou com **Cmd+6** / **Ctrl+6**.

![O mapa da história: cada cena como um cartão, com setas para escolhas, condições e saltos. Sem nenhuma cena selecionada, o painel da direita lista os finais.](/novelworks-docs/screenshots/story-map.png)

## Os cartões de cena

Cada cartão mostra:

- o nome da cena, e **★ Início** na cena inicial;
- o resumo dela, ou “{tx.storyMap.noSummaryYet}” (o [resumo](/novelworks-docs/pt-br/writing/scenes/) é só para você);
- o estado de escrita (**{ui.shared.outline.toWrite}**, **{ui.shared.outline.draft}** ou **{ui.shared.outline.done}**) e o número de palavras, ou “Vazia”. Aponte para a contagem de palavras para ver o número de momentos;
- um selo de nota adesiva com o número de momentos que têm uma [nota](/novelworks-docs/pt-br/writing/notes/);
- um selo de aviso com o número de problemas. Aponte para ele para ler cada um (“Momento 4: …”);
- etiquetas: uma bandeira com o nome de cada final, **{ui.storyMap.unreachable}** (nada leva até aqui a partir da cena inicial; não aparece quando o projeto tem só uma cena), “{tx.storyMap.gameEndsHere}” (nada vem depois desta cena e ela não tem final) e “{tx.storyMap.backToTheMap}”.

Um cartão inacessível tem borda tracejada e fica esmaecido.

## Setas

Uma seta vai de uma cena para a cena a que um dos momentos dela leva. Todas as ligações entre as mesmas duas cenas são reunidas numa só seta com vários rótulos. Um rótulo diz “número do momento · texto”, por exemplo “11 · Ajudar”, e tem a cor do tipo de momento dele.

| Rótulo da seta | Criada por |
|---|---|
| O texto de uma opção | Uma opção de escolha que vai para uma cena |
| “se …” e “{tx.storyMap.otherwise}” | Os casos e o senão de um Se… |
| “{tx.storyMap.jump}” | Um salto |
| O nome de uma zona | Uma zona de exploração que vai para uma cena |

Um laço pontilhado sob uma cena significa “a história continua nessa cena”: uma opção de escolha ou um senão sem cena, que continua com o próximo momento. Uma seta tracejada na cor de aviso com “{tx.storyMap.deletedScene}” significa que uma ligação vai para uma cena que foi excluída. No máximo três rótulos aparecem numa seta, depois “+N mais”: aponte para ela para ver todos.

A legenda **{ui.storyMap.arrows}** no painel da direita lembra tudo isso.

## Mova-se pelo mapa

- **Role** ou use dois dedos para mover o mapa. **Arraste um lugar vazio**, segure **Espaço** e arraste, ou use o botão do meio do mouse, para deslocar a vista.
- **Faça o gesto de pinça**, ou segure **Cmd** / **Ctrl** enquanto rola, para dar zoom em torno do ponteiro. Os botões diminuem e aumentam o zoom (x0,8 e x1,25), entre 20 % e 200 %.
- O botão **{ui.gameUIInspector.fit}** (com a porcentagem de zoom) mostra a história inteira (**Shift+1**). **Shift+0** volta a 100 %.
- **+** e **-** aumentam e diminuem o zoom.

O mapa lembra onde você estava enquanto o NovelWorks está aberto, e mostra a história inteira na primeira vez.

## Posicione as cenas

- **Arraste um cartão** para movê-lo. O lugar dele é salvo no projeto. Você pode soltar um cartão em cima de outro, então mova-o de novo se isso acontecer. Uma cena **nova** ou **copiada** sempre cai num lugar livre.
- As cenas que você não posicionou recebem um lugar automático: colunas conforme a distância da cena inicial, e as cenas inacessíveis juntas embaixo.
- **{ui.storyMap.tidyUp}** esquece todos os lugares que você escolheu e posiciona todas as cenas automaticamente de novo, a partir da cena inicial. Fica desativado quando tudo já é automático.

## Adicione uma cena

Clique em **{ui.storyMap.newScene}**, ou dê um clique duplo num lugar vazio do mapa. Um cartão pequeno aparece: digite o nome, pressione **Enter** para ir ao resumo e **Enter** de novo para confirmar. **Esc** cancela. A cena é criada com uma linha de diálogo vazia.

## Abra uma cena

Dê um clique duplo num cartão, ou selecione-o e pressione **Enter**, ou clique com o botão direito e escolha **{ui.storyMap.openInEditor}**: a cena abre no modo {ui.topBar.story}.

## Ligue duas cenas

Arraste a **alça redonda** à direita de um cartão até outro cartão, ou até um lugar vazio (para criar ali uma nova cena). Uma janela pequena pergunta como ligá-las:

| Tipo | O que ele adiciona ao fim da primeira cena |
|---|---|
| {ui.shared.linking.jump} | Um salto para a cena, ou o destino do último salto dela. |
| {ui.shared.linking.choiceOption} | Uma opção (você digita o texto) na última escolha, ou uma nova escolha. |
| {ui.shared.linking.condition} | Um novo Se… cujo primeiro caso vai para a cena. Você ainda precisa escolher a variável. |
| {ui.shared.linking.explorationZone} | Uma zona que vai para a cena, no último momento de exploração. |

Um tipo que não se aplica fica acinzentado, com o motivo: “Esta cena termina com um final”, “Esta cena já termina com um salto”, “A escolha dela já tem 6 opções”… Ligar vale um passo para Desfazer. Isso adiciona um momento à cena: nada é guardado no próprio mapa.

## Clique com o botão direito

### Uma cena

**{ui.storyMap.openInEditor}**, **{ui.storyMap.rename}**, **{ui.storyMap.editSummary}**, **{ui.storyMap.status}** (A escrever, Rascunho, Pronta), **{ui.storyMap.duplicate}** (a cópia aparece logo abaixo), **{ui.storyMap.setAsStartScene}** e **{ui.storyMap.delete}** (com a confirmação de sempre).

### Uma seta

- **{ui.storyMap.goToTheMomentThatCreatesThis}**: abre esse momento (uma entrada para cada rótulo, quando há vários).
- **{ui.storyMap.removeLink}**: para um salto ou uma opção. Num salto, o salto continua, mas perde a cena. Numa opção, a opção é excluída, a menos que a escolha tenha só duas opções, e então só a ligação é apagada.
- **{ui.storyMap.unlinkZone}**: para uma zona, que continua onde foi desenhada.

As ligações feitas por um Se… não podem ser removidas pelo mapa. Edite-as no inspetor. Toda remoção pergunta antes e pode ser desfeita.

## Destaque o que importa

No alto, **{ui.storyMap.highlight}** esmaece as cenas que não correspondem, e as setas delas:

- **{ui.storyMap.all}**: tudo;
- **{ui.storyMap.toWrite}**: as cenas que ainda faltam escrever;
- **{ui.storyMap.endingsFilter}**: as cenas que contêm um final;
- **{ui.storyMap.problems}**: as cenas com um aviso, ou inacessíveis.

O progresso da escrita fica ao lado: o número de cenas, depois quantas estão prontas, em rascunho e a escrever.

## O painel da direita

- **Com uma cena selecionada**: o inspetor dela (nome, resumo, estado de escrita, cena inicial, **{ui.branches.entriesTitle}**, número de momentos e botões para abrir, duplicar ou excluir).
- **Sem nada selecionado**: um painel de ajuda com **{ui.endings.title}** ([veja todos os finais](/novelworks-docs/pt-br/branching/endings/)), a legenda **{ui.storyMap.arrows}** e lembretes sobre como adicionar, ligar e mover cenas.
