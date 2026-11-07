---
title: Importar e exportar um roteiro
description: Traga um arquivo de texto para o seu projeto como cenas e salve o jogo inteiro como texto.
---

Você pode escrever sua história em qualquer editor de texto e trazê-la para o NovelWorks, ou salvar o jogo inteiro como um arquivo de texto. O texto usa o formato do [modo Roteiro](/novelworks-docs/pt-br/writing/script-mode/).

## Importar um roteiro

Escolha **{ui.native.menu.file} → {ui.native.menu.importScript}**. (Não há atalho de teclado. O menu precisa de um projeto aberto.) A janela **{ui.scriptImport.title}** se abre.

1. Cole seu texto na caixa, ou clique em **{ui.scriptImport.openFile}** e escolha um arquivo `.txt` ou `.md`. Só texto simples é lido, não arquivos do Word.
2. Clique no botão de baixo:
   - se o seu texto tem linhas `# Heading`, **{ui.scriptImport.importAsScenes}**: cada título vira uma cena do seu jogo;
   - senão, **{ui.scriptImport.importInto}** a cena selecionada: as linhas são acrescentadas no fim dessa cena.

O NovelWorks limpa o texto primeiro: aspas duplas curvas (“ ”) viram aspas retas, e um `•` ou `·` seguido de espaço no começo de uma linha vira `-`. Depois ele passa para a visão Roteiro e acrescenta o seu texto **como se você o tivesse digitado**. Isso é aplicado após o atraso habitual de meio segundo.

### O que você obtém

- Uma linha `Name : text` é diálogo se algum personagem tem esse nome. Se não, é narração, o nome fica sublinhado e uma correção rápida cria o personagem.
- Cenários, cenas, variáveis e itens desconhecidos também ficam sublinhados. O botão **{ui.scriptMode.createMissing_other}** cria todos de uma vez, com um clique.
- Não há etapa de prévia nem pergunta sobre quem fala: quem fala é reconhecido pela regra `Name : text` e pelos personagens que você já tem.
- A importação **acrescenta** texto. Ela não substitui o que já existe.

:::note
Com `# headings`, **cada título sempre cria uma nova cena**, mesmo quando o seu jogo já tem uma cena com esse nome: você então fica com duas cenas com o mesmo nome, e a que já existia não muda. Renomeie ou exclua a cena extra se não era isso que você queria.
:::

A janela diz que a importação é um único passo de desfazer. Na prática, uma importação precisou de **duas** vezes **{ui.native.menu.undo}** para ser removida: se as novas cenas ainda estiverem lá depois da primeira, use de novo.

## Exportar o roteiro

Escolha **{ui.native.menu.file} → {ui.native.menu.exportScript}**. O NovelWorks pergunta onde salvar, com o título **{ui.native.exportIpc.saveTheScript}**, e grava um arquivo `.txt`.

- O arquivo contém o **jogo inteiro**: cada cena sob um título `# Name`, com uma linha em branco entre as cenas. A cena oculta do Mapa não é incluída. Você não pode exportar uma cena sozinha.
- Ele é gravado em UTF-8, com as palavras do idioma atual do seu editor.
- O nome de arquivo padrão é o título do seu projeto, com os caracteres que um nome de arquivo não aceita trocados por `-`.
- Exportar não muda nada no seu projeto.

Você pode importar de novo o arquivo exportado com **{ui.native.menu.importScript}**.
