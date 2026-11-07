---
title: Configurações do editor e do projeto
description: Tema, idioma e ortografia do editor, e as configurações de cada projeto.
---

Há dois tipos de configurações: as do **editor** (iguais para todos os seus projetos) e as de um **projeto**.

## Configurações do editor

Todas ficam nos menus **{ui.menu.view}** e **{ui.native.menu.edit}**.

### Tema

**{ui.menu.view} → {ui.native.menu.theme}**: **{ui.native.menu.dark}** (o padrão), **{ui.native.menu.light}** ou **{ui.native.menu.system}** (segue o seu computador).

### Idioma do editor

**{ui.menu.view} → {ui.native.menu.language}**: **{ui.native.menu.languageAuto}** ou um dos sete idiomas, cada um escrito no próprio nome. Os menus e o editor mudam na hora em todas as janelas abertas. Esta configuração vale só para o editor. Ela não muda sua história nem o idioma do seu jogo.

### Idioma da ortografia (salvo no projeto)

Esta é a exceção: ela não é compartilhada por todos os seus projetos, porque a escolha é salva **no projeto** (e você pode desfazê-la).

**{ui.native.menu.edit} → {ui.native.spelling.spellingLanguage}**. No Windows, o padrão são os idiomas do seu computador mais o inglês, e você pode escolher outro idioma. No Mac, o macOS detecta sozinho o idioma do seu texto, então o menu só informa isso.

### Tela cheia

**{ui.menu.view} → {ui.native.role.togglefullscreen}**.

## Configurações do projeto

Clique no título do projeto na barra superior, ou não selecione nada, e o inspetor mostra as **{ui.inspector.projectSettings}**:

| Configuração | O que faz |
|---|---|
| {ui.projectSettings.gameTitle} | O título do seu jogo. |
| {ui.projectSettings.author} | Seu nome, como autor. |
| {ui.project.gameLanguage} | O idioma dos botões e menus do próprio jogo. O texto da sua história continua como você escreveu. Se um idioma não estiver disponível para o jogo, o jogo usa inglês para ele. |
| {ui.projectSettings.length} | Quanto tempo a história leva para ser lida: cada fala, escolha e final lidos uma vez (palavras e minutos). Só é exibido, não é ajustado. Uma partida de uma história com ramificações é mais curta. |
| {ui.projectSettings.features} | As partes opcionais que estão ligadas. **{ui.projectSettings.openFeatures}** abre a lista para ligá-las ou desligá-las. |
| {ui.projectSettings.screenSize} | O tamanho da tela do jogo, 1280 × 720 pixels. Só é exibido. |
| {ui.projectSettings.savedIn} | A pasta do projeto. |

Toda mudança feita aqui pode ser desfeita com **{ui.native.menu.undo}**.
