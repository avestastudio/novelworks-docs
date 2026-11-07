---
title: Caixa de diálogo
description: "Onde aparecem os nomes e as falas: posição, tamanho, fundo, texto e avatar."
---

A **{ui.gameUI.dialogueBox}** é a caixa que mostra o nome de quem fala e o texto. O tamanho e o lugar dela são dados em porcentagem da tela (na maioria, da altura), então ela mantém o visual em qualquer resolução.

## Posição e tamanho

- **{ui.gameUIInspector.position}**: {ui.gameUIInspector.bottom} (padrão), {ui.gameUIInspector.top}, {ui.gameUIInspector.left}, {ui.gameUIInspector.right} ou {ui.gameUIInspector.center}. Ao escolher uma, a largura e a altura também ganham um bom tamanho inicial: uma faixa larga para o alto e para baixo, um painel alto (cerca de um terço da tela) para esquerda e direita, e uma caixa no meio para o centro.
- **{ui.gameUIInspector.margin}**: espaço até as bordas da tela (0 a 20 %, padrão 3,5).
- **{ui.gameUIInspector.width}** e **{ui.gameUIInspector.height}**: 10 a 100 %. Depois de escolher uma posição, você pode ajustá-las.

## Fundo

Escolha **{ui.gameUIInspector.color}** ou **{ui.gameUIInspector.image}**.

- **{ui.gameUIInspector.color}**: uma cor e uma **{ui.gameUIInspector.opacity}** (0 a 100 %, padrão 80). Essa cor também é a cor padrão dos botões de escolha, do menu de pausa e de outros painéis ("{tx.gameUIInspector.sameAsTheDialogueBox}"), e da aba do nome. Isso continua valendo quando a própria caixa usa uma imagem: a cor e a opacidade deixam de aparecer na caixa, mas ainda colorem esses botões e painéis.
- **{ui.gameUIInspector.image}**: qualquer imagem. As partes transparentes continuam transparentes, então você pode usar balões, pergaminhos ou qualquer forma. Escolha como ela se ajusta:
  - **{ui.gameUIInspector.stretch}**: preenche a caixa toda (a imagem pode parecer amassada);
  - **{ui.gameUIInspector.fit}**: a imagem inteira, mantendo a forma;
  - **{ui.gameUIInspector.slice}**: os cantos mantêm o tamanho, e as bordas e o meio se esticam. Defina o **{ui.gameUIInspector.cornerSize}** (em % da imagem). Por padrão os cantos aparecem no tamanho original da imagem; desmarque essa opção para definir o **{ui.gameUIInspector.cornerDisplaySize}**, útil para molduras grandes, de alta resolução.

## Texto e nome

- **{ui.gameUIInspector.textColor}**: "{tx.gameUIInspector.sameAsTheTextColor}" por padrão.
- **{ui.gameUIInspector.nameColor}**: **{ui.gameUIInspector.characterColors}** (a [cor do nome](/novelworks-docs/pt-br/writing/characters/) de cada personagem, o padrão) ou **{ui.gameUIInspector.oneColor}** (uma só **{ui.gameUIInspector.colorOfEveryName}** para todos).
- **{ui.gameUIInspector.textPadding}**: espaço entre a borda da caixa e o texto (0 a 15 %, padrão 4).
- **{ui.gameUIInspector.speakerName}**: **{ui.gameUIInspector.insideTheBox}** (padrão) ou **{ui.gameUIInspector.tabAbove}** (uma aba acima da caixa).

## Avatar

Quando um personagem com avatar fala, o avatar aparece ao lado do nome. Defina os avatares na [aba Personagens](/novelworks-docs/pt-br/writing/characters/).

- **{ui.gameUIInspector.side}**: esquerda (padrão) ou direita.
- **{ui.gameUIInspector.size}**: 5 a 60 % da altura da tela (padrão 20). Nunca mais alto que a caixa.

## Conferindo o resultado

Use **{ui.gameUIMode.longTextAvatar}** acima da prévia para ver uma fala longa e um personagem com avatar.
