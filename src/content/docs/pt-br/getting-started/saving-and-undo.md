---
title: "Salvar e desfazer"
description: "Como o NovelWorks protege seu trabalho."
---

## Salvar

Use **Cmd+S** / **Ctrl+S** ou **Save**. O salvamento automático mostra «Saved · auto» na barra superior.

## Backups

A cada salvamento, a versão anterior vai para `backups`, dentro do projeto. São mantidos os últimos 20 backups e o mais recente de cada um dos últimos 7 dias.

Abra **File → Restore from Backup…**, escolha uma versão e restaure. Uma cópia do estado atual é salva antes, permitindo voltar atrás também após a restauração.

As imagens excluídas são movidas para `backups/deleted-assets`, sem remoção definitiva, para que os backups ainda encontrem suas imagens.

## Desfazer e refazer

**Edit → Undo** (**Cmd+Z** / **Ctrl+Z**) e **Redo** funcionam para todas as alterações do projeto, inclusive texto digitado.

## Projetos antigos

O NovelWorks abre e atualiza projetos de versões anteriores. Ao salvar, mantém um backup da versão antiga para recuperação.
