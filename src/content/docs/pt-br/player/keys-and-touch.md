---
title: Teclas e telas de toque
description: Todas as teclas, ações do mouse e gestos de toque que os jogadores podem usar no jogo.
---

Os atalhos são ignorados enquanto **Ctrl**, **Cmd** ou **Alt** estiver apertada (exceto segurar só **Ctrl** para pular).

## Teclado

| Tecla | O que faz |
|---|---|
| **Espaço**, **Enter** | Termina o texto e depois avança. Em um botão com foco, aperta o botão. Em uma zona com foco, usa a zona. |
| **1** a **6** | Escolhe a opção de número N na tela. O primeiro toque enquanto o texto está aparecendo termina o texto. |
| **Esc** | Abre ou fecha o menu de pausa. Fecha o inventário, o Histórico, as Opções e Salvar/Carregar. |
| **H** | Abre ou fecha o Histórico. |
| **A** | Liga ou desliga o Auto. |
| **S** | Liga ou desliga o Pular. |
| **Ctrl** (segurada) | Pula enquanto está segurada. |
| **F5** | Salvamento rápido (durante o jogo). |
| **F9** | Carregamento rápido (até na tela de título). |
| **I** | Abre ou fecha o inventário (com o recurso Inventário). |
| **M** | Abre o mapa (quando o botão Mapa é mostrado). |
| **Tab** | Passa entre os botões e as zonas de exploração. Fica dentro de Salvar, Histórico, Opções e do aviso de conteúdo enquanto estão abertos. |
| Setas, **Home**, **End**, **Page Up**, **Page Down** | No Histórico: rolam. Em Salvar e Carregar: as setas, **Home** e **End** passam de um espaço para outro. Nas Opções: as setas mudam o valor. Elas não avançam a história. |
| `Delete` / `Backspace` em um espaço | Pergunta se você quer excluir o salvamento. |

O jogo não tem tecla de tela cheia: funciona a do próprio navegador (**F11**), ou o botão de tela cheia da página.

## Mouse

- **Clique esquerdo** na história: termina o texto, avança, escolhe uma opção ou usa uma zona.
- **Clique direito**: abre ou fecha o menu de pausa (o menu do navegador nunca aparece sobre o jogo). Não faz nada enquanto Salvar, Carregar, Histórico, Opções ou uma pergunta está aberta.
- **Roda para cima**: abre o Histórico. Roda para baixo não faz nada.
- **Passar o ponteiro** sobre uma zona de exploração: mostra o destaque e o rótulo dela.

## Telas de toque

- **Tocar** avança, como um clique.
- Em uma zona de exploração **com rótulo**, o primeiro toque mostra o rótulo e o segundo age. Sem rótulo, um toque age.
- O jogo não tem deslizar, toque longo nem toque duplo. O clique direito não tem equivalente no toque: a página acrescenta um botão **{ui.gameUIInspector.menu}** para dispositivos de toque.
- Arrastar rola o Histórico.

## O que a página web exportada acrescenta

Um pequeno grupo de botões no canto superior direito (apagados até serem tocados ou terem o ponteiro em cima):

- **{ui.gameUIInspector.menu}**, só em dispositivos de toque: abre o menu de pausa, já que não há clique direito nem Esc.
- **{rt.player.fullscreen}** / **{rt.player.exitFullscreen}**, quando o navegador permite (não no iPhone).

O jogo para web não tem botão Sair. O jogo é ajustado para caber na janela, com faixas pretas em volta, mantendo a proporção. Ele precisa de JavaScript e de um navegador que permita o armazenamento local para guardar os salvamentos. Veja [Exportação para web](/novelworks-docs/pt-br/publish/web-export/).
