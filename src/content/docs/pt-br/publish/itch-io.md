---
title: Publicar no itch.io
description: Envie seu jogo exportado ao itch.io para que as pessoas possam jogar no navegador.
---

A [exportação para web](/novelworks-docs/pt-br/publish/web-export/) cria um `.zip` com `index.html` na raiz, que é a estrutura que o itch.io espera para jogos de navegador. O próprio NovelWorks não envia nada: você faz isso no site do itch.io.

:::note
Estes passos descrevem o site do próprio itch.io, não o NovelWorks, e o itch.io pode mudar as páginas dele. Se algo for diferente, a ajuda do próprio itch.io é a referência.
:::

## Enviar

1. No itch.io, crie um projeto novo (ou abra um existente).
2. Como tipo de projeto, escolha **{ui.exportDialog.hTML}** (um jogo que roda no navegador).
3. Envie o `.zip` criado pelo NovelWorks e marque-o como um arquivo que **será jogado no navegador**.
4. Defina a viewport como o **tamanho de jogo recomendado** que o NovelWorks mostrou ao fim da exportação (é a resolução do seu projeto). Opções como um botão de tela cheia ficam a seu critério: o jogo já tem o dele.
5. Salve, abra a página e confira o jogo em um computador e em um celular.

## Bom saber

- Os salvamentos dos jogadores ficam no navegador deles, para o endereço web do seu jogo. Se o endereço continua o mesmo quando você atualiza, eles são mantidos (isso depende do itch.io, e esta documentação não pode prometer).
- Não envie só o `index.html`: todos os arquivos da exportação são necessários.
- Seu jogo roda dentro de um quadro. Se você der à página um tamanho maior que o tamanho de jogo recomendado, o jogo é ajustado para caber, com faixas pretas.
- Os jogos do NovelWorks sempre começam com a breve tela “Feito com NovelWorks”.
- Os navegadores não permitem som antes do primeiro clique ou do primeiro toque de tecla do jogador, então a música de título começa nesse instante. Veja [Exportação para web](/novelworks-docs/pt-br/publish/web-export/).
- Vídeos deixam a página mais lenta para carregar, e o `.zip` mantém o peso total deles.

## Teste antes de publicar

Use **{ui.exportDialog.testInBrowser}** ao fim da exportação, ou jogue a pasta descompactada abrindo o `index.html`.
