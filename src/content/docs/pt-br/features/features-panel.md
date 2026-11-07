---
title: A biblioteca de recursos
description: "Ative e desative partes opcionais do seu jogo: Inventário e Mapa."
---

Algumas partes de uma visual novel não são necessárias em todo jogo. O NovelWorks deixa você adicioná-las com um clique na biblioteca **{ui.featuresDialog.features}**, e desativá-las de novo sem perder nada.

## Abra-a

- Clique em **{ui.leftPanel.features}** na parte de baixo do painel da esquerda.
- Ou use **{ui.projectSettings.openFeatures}** nas [configurações do projeto](/novelworks-docs/pt-br/getting-started/editor-settings/), ou **{ui.mapMode.features}** na parte de baixo do espaço de trabalho do Mapa.
- Quando você cria um projeto, os cartões **{ui.newProjectScreen.features}** da janela Novo projeto fazem o mesmo (nada vem marcado por padrão).

A janela **{ui.featuresDialog.features}** diz: “{tx.featuresDialog.addReadyMadePartsToYourGame}” Ela tem um cartão para cada recurso, com um interruptor e uma descrição. Feche-a com **{ui.featuresDialog.done}**.

![A janela Recursos, com os cartões Inventário e Mapa.](/novelworks-docs/screenshots/features-dialog.png)

## Os dois recursos

| Recurso | O que ele adiciona |
|---|---|
| **{ui.shared.features.inventory}** | Os jogadores coletam itens (chaves, cartas, moedas, pistas) e os veem num menu Inventário. Uma aba **{ui.leftPanel.items}** aparece à esquerda, e momentos, escolhas, condições e zonas podem dar, verificar e usar itens. Veja [Inventário](/novelworks-docs/pt-br/features/inventory/). |
| **{ui.shared.features.map}** | Os jogadores abrem um mapa e escolhem para onde ir. Um botão **{ui.leftPanel.map}** aparece à esquerda, onde você desenha locais e os liga a cenas, e um momento “{tx.moments.showMap}” o abre durante a história. Veja [Mapa](/novelworks-docs/pt-br/features/map/). |

Quando um recurso está ativado, o cartão dele mostra **{ui.featuresDialog.openItems}** (Inventário) ou as configurações do mapa com **{ui.mapSettings.editMap}** (Mapa). Quando está desativado, o cartão diz “Desativado”.

## O que acontece quando você desativa um recurso

- Nada do que você criou é excluído: os itens, as configurações do mapa e todos os momentos que os usam são mantidos. Ativar o recurso de novo traz tudo de volta.
- A aba, os botões e os tipos de momento do recurso somem do editor.
- **Mapa desativado**: o jogo não tem botão Mapa, e um momento “{tx.moments.showMap}” não faz nada.
- **Inventário desativado**: o jogo não tem botão Inventário, entrada no menu de pausa nem tecla **I**. Os momentos, escolhas e zonas que dão ou verificam itens **continuam funcionando** no jogo (e o editor avisa você), então ative o recurso de novo se você usa itens.
- Os momentos que usam o recurso continuam lá e mostram um **aviso** até você ativá-lo de novo.
- Se a sua história usa itens, o NovelWorks pergunta antes (**{ui.features.turnTheInventoryOff}**) e lista o que vai parar de funcionar. O mesmo vale para o mapa quando você tem momentos “{tx.moments.showMap}” (**{ui.features.turnTheMapOff}**).
- Se você estava no espaço de trabalho do Mapa, volta ao modo História. Se estava na aba Itens, vai para a aba Variáveis.

Na Interface do jogo, as telas Inventário, botão Mapa e Notificações continuam na lista, com uma nota dizendo que os jogadores não as veem enquanto o recurso está desativado.

## Outras partes do seu jogo

A Exploração (cenas de apontar e clicar) não é um recurso para ativar: o momento Exploração está sempre disponível. Veja [Exploração](/novelworks-docs/pt-br/features/exploration/).
