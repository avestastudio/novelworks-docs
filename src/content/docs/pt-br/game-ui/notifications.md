---
title: Avisos (notificações)
description: "As mensagens curtas como \"Você recebeu: Chave\", e quanto tempo elas ficam."
---

Os **{ui.gameUI.notices}** são mensagens curtas como “Você recebeu: Chave”. Eles precisam do [recurso Inventário](/novelworks-docs/pt-br/features/inventory/) para aparecer com itens. A página avisa quando o recurso está desativado.

## O que você pode mudar

- **{ui.gameUIInspector.position}**: no alto (padrão), no centro ou embaixo.
- **{ui.gameUIInspector.backgroundColor}**: “{tx.gameUIInspector.sameAsTheDialogueBox}” por padrão.
- **{ui.gameUIInspector.textColor}**: “{tx.gameUIInspector.sameAsTheTextColor}” por padrão.
- **{ui.gameUIInspector.shownFor}**: quanto tempo “Você recebeu: …” e “Você perdeu: …” ficam na tela, de 1 a 10 segundos (padrão 2,5).

## O que eles dizem

- “Você recebeu: Chave” e “Você perdeu: Chave”;
- para um item empilhável que muda em mais de uma unidade: “3 × Moeda”.

Um só aviso é mostrado para todos os itens que mudam juntos. A mesma caixa também mostra pequenas mensagens do sistema, por exemplo “{tx.game.quickSaved}”.
