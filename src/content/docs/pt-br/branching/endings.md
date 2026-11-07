---
title: Finais
description: Termine sua história, com quantos finais quiser, e confira se todos podem ser alcançados.
---

Um momento **{ui.moments.ending}** mostra o nome do final e depois leva o jogador de volta à tela de título. Uma história pode ter quantos finais você quiser, por exemplo um para cada resultado de um [Se…](/novelworks-docs/pt-br/branching/conditions/).

## Adicione um final

Na linha do tempo, adicione um momento **{ui.moments.ending}** no fim de uma cena. No inspetor:

- **{ui.branchInspectors.endingName}**: os novos finais se chamam “{tx.shared.scenes.goodEnding}”. Se você deixar o nome vazio, o jogo mostra “Fim”.
- Um **texto curto** (opcional) mostrado abaixo do nome.

Depois do final, o jogador volta à tela de título.

## O que os jogadores veem

O jogo escurece a tela e mostra o nome do final, com o texto curto abaixo dele, se houver. Uma dica diz “{tx.game.returnToTitle}”, e um clique leva o jogador até lá. O botão Mapa fica oculto num final, e os modos de leitura (Auto e Pular) param ali.

Um final é o fim da sua cena: os momentos colocados depois dele nunca podem ser alcançados, e o editor avisa sobre eles. Você não pode ligar uma nova seta a partir de uma cena que termina com um final.

### Se a história simplesmente acaba

Se uma cena não tem final e não há nada depois do último momento, o jogo mostra uma tela de fim, chamada **{ui.gameUI.theEnd}** no editor da [Interface do jogo](/novelworks-docs/pt-br/game-ui/game-ui-editor/) (“Aparece quando a história termina.”). O texto, a cor de fundo e a cor do texto podem ser mudados ali. Não é a mesma tela de um momento Final, e o mapa da história marca essa cena com “{tx.storyMap.gameEndsHere}”. Adicione um momento Final de verdade para que o jogador tenha uma conclusão digna.

## Veja todos os finais

Vá em **{ui.topBar.storyMap}** e clique num lugar vazio para que **nenhuma cena esteja selecionada**. O painel da direita mostra **{ui.endings.title}**: um cartão para cada momento Final da sua história, na ordem das suas cenas. Cada cartão mostra:

- o nome do final (“{tx.endings.unnamed}” se estiver vazio), com uma bandeira;
- o lugar dele: a cena e o número do momento;
- **{ui.endings.leadsHere}**: o que leva até ele, uma linha para cada saída que vai para a cena dele, como `From "Park": Option "Run"`, `From "Station": if Affection ≥ 3` ou `From "Station": otherwise`. Se a cena é a cena inicial, aparece “{tx.endings.startsHere}”

Clique no nome do final para abri-lo, ou numa linha para abrir o momento que leva até lá.

![O painel “Finais do jogo” do mapa da história, com o que leva a cada final.](/novelworks-docs/screenshots/endings-panel.png)

Se nada leva a um final (e ele não está na cena inicial), o cartão mostra um aviso: **“Nada leva até aqui ainda: os jogadores não conseguem chegar a este final.”**

Se a sua história ainda não tem nenhum final, o painel avisa e sugere adicionar um no fim de uma cena, por exemplo um para cada resultado de um Se….

Bom saber:

- Só as saídas contam: uma cena que simplesmente continua na seguinte não conta, e uma cena que volta para si mesma não aparece como levando ao próprio final. Os locais do mapa que levam à cena contam como saídas (mostrados como “Mapa · …”).
- O aviso só confere se algo leva ao final. Um final numa cena que é ela mesma inacessível pode ficar sem aviso se outra cena inacessível levar até ele. Procure também as etiquetas “{tx.storyMap.unreachable}” no [mapa da história](/novelworks-docs/pt-br/branching/story-map/).
- O filtro **{ui.storyMap.endingsFilter}** no alto do mapa esmaece as cenas que não têm nenhum final.
- Cada final também aparece como uma pequena bandeira com o nome dele no cartão da sua cena.
