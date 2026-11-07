---
title: Instalar e ativar
description: Baixe o NovelWorks, abra pela primeira vez e libere a exportação com sua chave de download.
---

## Qual arquivo devo baixar?

| Computador | Arquivo |
|---|---|
| Mac com Apple Silicon (M1, M2, M3, M4…) | `Novelworks-<version>-mac-arm64.dmg` |
| Mac com Intel | `Novelworks-<version>-mac-x64.dmg` |
| Windows 10 / 11 | `Novelworks-<version>-win-x64.exe` |

A demo gratuita tem os mesmos três arquivos, com `-demo` depois do número da versão (por exemplo `Novelworks-<version>-demo-win-x64.exe`). Veja [a demo gratuita](/novelworks-docs/pt-br/getting-started/demo-edition/).

Não sabe qual Mac você tem? Abra o menu Apple → **Sobre este Mac**. “Chip: Apple M…” significa Apple Silicon.

## Na primeira vez que você abrir

### No Mac

O aplicativo para Mac ainda **não é assinado com um Apple Developer ID** (tem só uma assinatura ad-hoc), então o macOS pode se recusar a abri-lo na primeira vez e mostrar um aviso. Os passos exatos dependem da sua versão do macOS.

1. Abra o `.dmg` e arraste o **Novelworks** para **Aplicativos**.
2. Abra-o a partir de Aplicativos.
3. Se o macOS bloquear, procure em **Ajustes do Sistema → Privacidade e Segurança** uma mensagem sobre o Novelworks, com um botão para abrir mesmo assim. Em versões mais antigas do macOS, o jeito usual é clicar no aplicativo com o botão direito e escolher a opção de abrir.

### No Windows

Execute o `.exe`. O instalador deixa você escolher a pasta de instalação, instala só para o seu usuário e adiciona um atalho na área de trabalho. Se o Windows mostrar um aviso de segurança ao executar, ele normalmente oferece um jeito de executar mesmo assim. O texto depende da sua versão do Windows.

## Escolha o idioma do editor

Na primeira vez, o NovelWorks pergunta **{ui.languageDialog.title}**. Escolha um idioma e clique em **{ui.languageDialog.continue}**. Se você fechar a janela, o NovelWorks segue o idioma do seu computador. Você pode mudar depois em **{ui.menu.view} → {ui.native.menu.language}**. Em seguida você verá a [tela de projetos](/novelworks-docs/pt-br/getting-started/projects-screen/).

## Ative o NovelWorks (versão completa)

A versão completa pede a **chave de download** que vem com a sua compra. Sem ela, você ainda pode abrir, editar e jogar seus projetos. Só a **exportação** fica bloqueada: o comando de exportar do menu Arquivo abre a janela de ativação.

1. Abra **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}**. A mesma janela abre pela tela de projetos e pela janela Sobre.
2. Cole sua chave de download em **{ui.activateDialog.downloadKey}**. Você também pode colar o endereço completo da sua página de download.
3. Clique em **{ui.activateDialog.activate}**.

Onde encontrar a chave: abra o e-mail da sua compra no navegador, abra a página de download do NovelWorks e copie a chave de download ou o endereço da página.

![Janela Ativar o NovelWorks com o campo da chave de download vazio](/novelworks-docs/screenshots/activate-novelworks.png)

Bom saber:

- A ativação contata o servidor de ativação, então precisa de conexão com a internet. Depois de ativado, o NovelWorks verifica sua licença no seu computador a cada inicialização, então você pode exportar sem internet.
- A janela de ativação diz que **uma chave funciona em até 3 computadores** e que você pode desativar um computador para usar sua chave em outro. Para isso, abra a mesma janela e clique em **{ui.activateDialog.deactivateThisDevice}**. Isso também contata o servidor, então precisa de conexão com a internet.
- Se a janela disser que a chave já está ativada no número máximo de computadores, desative o NovelWorks em outro computador ou use **{ui.activateDialog.contactUs}** na janela.

Se a ativação falhar, a janela mostra uma mensagem dizendo o que fazer. Veja também as [Perguntas frequentes](/novelworks-docs/pt-br/reference/faq/).
