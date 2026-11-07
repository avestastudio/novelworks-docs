---
title: Fontes e cores
description: A fonte, a cor do texto, a cor principal e o estilo de botão que todas as telas usam.
---

**{ui.gameUI.fontsColors}** reúne o que todas as telas compartilham. Cada uma das outras telas pode trocar uma parte disso.

## Texto

- **{ui.gameUIInspector.font}**: quatro fontes, cada uma mostrada no seu próprio estilo.

| Nome | Estilo | Fonte | Licença |
|---|---|---|---|
| {ui.gameUIInspector.fontClean} (padrão) | Sem serifa, moderna | Inter | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontClassic} | Com serifa, para um ar literário | Lora | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontRounded} | Suave, amigável | Nunito | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontTypewriter} | Máquina de escrever | Courier Prime | SIL Open Font License 1.1 |

  Os arquivos das fontes e os textos das licenças vão em todo jogo exportado.

- **{ui.gameUIInspector.textColor}**: a cor do texto do jogo inteiro. O padrão é branco. As telas que dizem "{tx.gameUIInspector.sameAsTheTextColor}" acompanham essa cor.

### Idiomas e fontes

**{ui.gameUIInspector.fontClean}**, **{ui.gameUIInspector.fontClassic}** e **{ui.gameUIInspector.fontRounded}** cobrem letras latinas com acentos, cirílico e vietnamita. Só a **{ui.gameUIInspector.fontClean}** cobre também o grego. A **{ui.gameUIInspector.fontTypewriter}** cobre apenas letras latinas (com acentos). Para os caracteres que uma fonte não tem, como chinês e japonês, o jogo usa as fontes do sistema do jogador (e, quando o idioma do jogo é o japonês, usa primeiro as fontes japonesas do sistema).

Ainda não é possível importar a sua própria fonte.

Os jogadores que ativam a fonte adaptada para dislexia nas opções do jogador recebem uma fonte própria, seja qual for a que você escolheu aqui.

## Cores e botões

- **{ui.gameUIInspector.primaryColor}**: "Botões, destaques e a seta de 'continuar'." Ela também dá à tela de título o seu brilho. O padrão é um rosa.
- **{ui.gameUIInspector.buttonStyle}**: **{ui.gameUIInspector.pill}** (totalmente arredondado, o padrão), **{ui.gameUIInspector.rounded}** (cantos suaves), **{ui.gameUIInspector.square}** (cantos retos) ou **{ui.gameUIInspector.text}** (sem caixa, só as palavras). Ele é "usado por todos os menus e escolhas, a menos que uma tela escolha o seu próprio".

Não existe uma cor de fundo global: os fundos são definidos em cada tela.

## A prévia

A prévia desta página mostra a caixa de diálogo sobre o seu primeiro cenário. Use **{ui.gameUIMode.longTextAvatar}** para conferir falas longas.

## Redefinir

**{ui.gameUIInspector.resetToDefault}** nesta página redefine só as fontes e as cores. As outras telas mantêm as suas configurações.
