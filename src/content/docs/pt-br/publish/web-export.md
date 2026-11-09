---
title: Exportação para web
description: Transforme seu jogo em uma pasta e um .zip que rodam em qualquer navegador, no computador e no celular.
---

Escolha **{ui.native.menu.file} → {ui.native.menu.exportForWeb}** (**Cmd+E** / **Ctrl+E**). O NovelWorks cria uma versão do seu jogo que roda em qualquer navegador, no computador e no celular: **uma pasta e um .zip** prontos para compartilhar ou enviar. O comando precisa de um projeto aberto e não está disponível enquanto você joga.

Na **demo**, você pode exportar jogos de 5 cenas ou menos que fiquem dentro dos [limites da demo](/novelworks-docs/pt-br/reference/licenses-and-editions/): veja [A demo gratuita](/novelworks-docs/pt-br/getting-started/demo-edition/). Na versão completa, o NovelWorks pede que você [a ative](/novelworks-docs/pt-br/getting-started/install-and-activate/) a cada exportação, até você ativar.

## Os passos

1. **Confira os avisos.** Se o NovelWorks encontra algo a verificar, ele lista: “N pontos a verificar antes. O jogo ainda funciona, mas os jogadores podem notar.” Cada linha diz onde (“Parque, momento 3 — …”). O botão passa a dizer **{ui.exportDialog.exportAnyway}**. Veja [Problemas](/novelworks-docs/pt-br/testing/problems/).
2. **Escolha onde salvar.** **{ui.exportDialog.saveTo}** mostra uma pasta. O NovelWorks lembra a última pasta que você usou neste projeto e, se não houver, propõe a pasta que contém o seu projeto. **{ui.exportDialog.change}** escolhe outra pasta.
3. Clique em **{ui.exportDialog.export}**. O botão mostra “{tx.exportDialog.exporting}” até terminar.
4. Quando aparece “{tx.exportDialog.yourWebGameIsReady}”, a janela mostra o nome do .zip (para compartilhar ou enviar; a pasta ao lado dele tem o mesmo jogo descompactado) e três botões:
   - **{ui.exportDialog.showInFinder}**, que mostra o arquivo no seu gerenciador de arquivos (o nome diz “Finder” em todos os computadores);
   - **{ui.exportDialog.testInBrowser}**, que joga o jogo exportado, a partir de um endereço local, no seu navegador padrão;
   - **{ui.exportDialog.done}**.

![A janela mostrada quando a exportação termina.](/novelworks-docs/screenshots/export-done.png)

Se algumas imagens não foram encontradas na pasta de assets do seu projeto, a janela as lista (“N imagens não foram encontradas… e não puderam ser incluídas”). A exportação continua dando certo.

A janela também informa o **tamanho de jogo recomendado** (a resolução do seu projeto) e lembra de testar o jogo em navegadores de computador e de celular.

## O que você recebe

O NovelWorks cria, dentro da pasta que você escolheu:

- uma pasta com o nome do seu jogo, terminando em `-web` (por exemplo `The-Rainy-Day-web`), e um `.zip` com o mesmo nome. Os acentos são removidos e qualquer outro caractere é trocado por `-`. Um título sem letras latinas nem dígitos (em chinês, russo ou japonês, por exemplo) vira `Game-web`;
- dentro: `index.html`, `project.js` (os dados do seu jogo), `game.js` (o player), uma pasta `assets` com **só as imagens, os vídeos e os sons que o seu jogo usa** e uma pasta `fonts` com as fontes e os arquivos de licença delas.

As imagens, os vídeos e os sons são copiados como estão, sem redimensionar nem converter. As expressões e os avatares de um personagem são todos incluídos quando o personagem aparece ou fala. As peças do guarda-roupa só são incluídas se alguma roupa as usar.

Se já existe uma pasta de exportação com o mesmo nome e ela é uma exportação anterior, ela é substituída. Se for outra coisa, o NovelWorks recusa e pede que você escolha outra pasta, para nunca sobrescrever seus arquivos.

### Vídeos e sons

- O NovelWorks nunca recusa um vídeo por causa do tamanho, mas avisa quando você importa mais de 40 MB de vídeo de uma vez: um jogo web com vídeo demora mais para carregar.
- Vídeos e sons MP3 e OGG entram no `.zip` sem compressão, então mantêm o peso total. Os arquivos WAV são comprimidos quando isso os deixa menores.
- Os navegadores não permitem som antes do primeiro clique ou do primeiro toque de tecla do jogador. O que já deveria estar tocando começa nesse instante.

### O que é removido

Seus dados de escrita privados são apagados antes da exportação: as **notas** dos momentos, os **resumos** e o **status de escrita** das cenas, as posições das cenas no mapa da história e os nomes das zonas de exploração. Sua história, seus personagens e suas variáveis são mantidos, claro, **em forma simples e legível** no `project.js`: qualquer pessoa que abra os arquivos pode ler todos os seus textos e ramificações.

## Abrir

- **No seu computador**: dê um clique duplo em `index.html`. Funciona sem servidor web.
- **Na web**: envie **todos os arquivos**, com `index.html` na raiz. Se `project.js` estiver faltando, a página diz “{tx.player.missingProject}”

## O que os seus jogadores recebem

- Uma breve **tela de abertura do NovelWorks** primeiro: o logo e “{tx.splash.tagline}”, por cerca de 3 segundos, e dá para pular. (O editor a chama de tela “Feito com NovelWorks”.)
- O título da página é o título do seu jogo, e a página fica no idioma do seu jogo. O ícone da página é a primeira letra do título sobre a sua cor principal.
- Um jogo que se ajusta à janela, mantendo a proporção, com faixas pretas em volta, no computador e no celular. Um botão **{rt.player.fullscreen}** onde o navegador permite e um botão **{ui.gameUIInspector.menu}** nas telas de toque. Veja [Teclas e telas de toque](/novelworks-docs/pt-br/player/keys-and-touch/).
- Salvamentos no navegador deles, mantidos quando você atualiza o jogo. Veja [Salvar e carregar](/novelworks-docs/pt-br/player/save-and-load/).
- Precisa de JavaScript. Sem ele, a página diz “{tx.export.javascriptRequired}”

## Se a exportação falhar

| Mensagem | O que fazer |
|---|---|
| O Novelworks não tem permissão para salvar nesta pasta. | Escolha outra pasta, como Documentos ou Mesa. |
| O disco está cheio. | Libere espaço ou escolha uma pasta em outro disco. |
| Esta pasta não existe mais. | Escolha outra pasta. |
| Já existe uma pasta chamada “…” aí e ela não é uma exportação anterior. | Escolha outra pasta. |
| Ative o NovelWorks para exportar jogos. | Abra **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}** |
| A demo exporta jogos de até 5 cenas, e o seu projeto tem N. | Só na demo. Exclua cenas ou adquira a versão completa. |
| Este projeto ultrapassa o que a demo pode exportar: … | Só na demo. Remova o que a mensagem lista, ou obtenha a versão completa. |
| Não foi possível exportar o jogo: … | O motivo vem em seguida. Veja [Solução de problemas](/novelworks-docs/pt-br/reference/troubleshooting/). |

## Publicar

Para colocar seu jogo on-line, veja [Publicar no itch.io](/novelworks-docs/pt-br/publish/itch-io/), ou use qualquer hospedagem web que sirva jogos em HTML.
