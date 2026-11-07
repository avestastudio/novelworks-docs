---
title: Solução de problemas e mensagens
description: O que as mensagens do NovelWorks significam e o que fazer, ao abrir projetos, ativar, exportar e salvar.
---

## Abrir um projeto

| Mensagem | O que significa e o que fazer |
|---|---|
| “… não é um projeto do Novelworks: não tem um arquivo project.json.” | A pasta escolhida não tem um `project.json`. Escolha a própria pasta do projeto. |
| “project.json está danificado: não é um JSON válido.” | O arquivo foi alterado ou cortado. Abra um backup: copie um arquivo de `backups` sobre o `project.json` (guarde o danificado à parte). |
| “Este projeto foi salvo por uma versão mais nova do Novelworks (formato N). Atualize o Novelworks para abri-lo.” | Instale o NovelWorks mais recente. Nada foi alterado. |
| “O Novelworks não conseguiu salvar uma cópia de segurança deste projeto antes de atualizá-lo, então ele não foi aberto. Seu projeto não foi alterado.” | Não é possível gravar na pasta. Verifique as permissões dela e o espaço livre, e abra de novo. |
| “{tx.projectHub.folderNotFound}” (tela de projetos) | A pasta do projeto foi movida ou apagada. Clique em **{ui.projectHub.locate}** e escolha o novo local. |

## Ativação

| Mensagem | O que fazer |
|---|---|
| Cole primeiro a sua chave de download. | Cole a chave no campo. |
| O NovelWorks não conseguiu acessar o servidor de ativação. | Verifique sua conexão com a internet e tente de novo. Ativar e desativar precisam dela. |
| Esta não é uma chave de download do NovelWorks. | Copie-a de novo da sua página de download ou do e-mail da compra. |
| Esta chave já está ativada em 3 computadores. | Desative o NovelWorks em outro computador, ou use **{ui.activateDialog.contactUs}** na janela. |
| A ativação não está funcionando agora. Tente novamente em alguns minutos. | Um problema temporário do lado do servidor. |
| A desativação não está funcionando agora. Tente novamente em alguns minutos. | O mesmo, ao desativar. |

## Exportar

Veja a tabela em [Exportação para web](/novelworks-docs/pt-br/publish/web-export/). Os casos mais comuns: escolher outra pasta (Documentos ou Mesa), liberar espaço em disco ou ativar o NovelWorks.

## Salvar nos seus jogos

As mensagens que os jogadores veem quando o navegador bloqueia o armazenamento estão em [Salvar e carregar](/novelworks-docs/pt-br/player/save-and-load/).

## Quando algo parece errado na história

- Uma cena marcada como **{ui.scenesTab.unreachable}**, um triângulo em um cartão, ou uma caixa “{tx.branchInspectors.thisMomentNeedsYourAttention}”: veja [Problemas: todos os avisos](/novelworks-docs/pt-br/testing/problems/).
- Um personagem não aparece na tela: os personagens ficam em cena até que algo os mude, e saem quando um momento manda. Veja [O palco: os personagens ficam em cena](/novelworks-docs/pt-br/concepts/stage/).
- Uma opção de escolha não aparece: ela pode ter uma condição. Veja [Escolhas](/novelworks-docs/pt-br/branching/choices/).
- A história pula um Se…: uma condição verifica algo que foi apagado. Veja [Condições Se…](/novelworks-docs/pt-br/branching/conditions/).

## Ainda travado?

[Relate um bug](/novelworks-docs/pt-br/reference/report-a-bug/).
