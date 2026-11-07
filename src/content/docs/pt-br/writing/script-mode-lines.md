---
title: "Modo Roteiro: todas as linhas"
description: Todos os tipos de linha que você pode escrever no modo Roteiro, com exemplos.
---

No modo Roteiro, **uma linha é uma coisa que acontece**. Os exemplos usam as palavras em inglês. O NovelWorks também entende, ao mesmo tempo, as palavras dos outros idiomas do editor (`si`, `décor`, `fin`…). Maiúsculas, acentos e espaços extras não importam quando o NovelWorks lê uma palavra-chave ou um nome.

Para escolhas, condições e saltos, veja [Modo Roteiro: condições e escolhas](/novelworks-docs/pt-br/writing/script-mode-conditions/).

## Diálogo

```
Mia : Hello!
```

Uma linha `Name : text` é uma fala daquele personagem. Os espaços em volta dos dois-pontos são opcionais. Se nenhum personagem tem esse nome, a linha inteira é lida como narração e fica sinalizada, e uma correção rápida oferece criar o personagem.

### Com uma expressão

```
Mia (happy) : Hello!
```

Mia fala com a expressão "happy". Se ela já está em cena, troca de expressão e continua onde está. Se não está em cena, aparece no centro.

### Texto em várias linhas

```
Mia : I looked for you everywhere.
  I had given up hope.
```

Uma linha recuada com dois espaços continua a linha de cima, como uma nova linha **dentro da mesma caixa**.

## Narração

```
It had been raining since morning.
```

Qualquer linha que não seja de outro tipo é narração.

### Uma linha mantida exatamente como foi escrita

```
> background : this is just text
```

Uma linha que começa com `>` é narração **exatamente como foi escrita**, mesmo que pareça um comando. O NovelWorks escreve o `>` sozinho quando a narração seria lida errado.

## Notas

```
// to re-read
Mia : Hello!
```

Uma linha que começa com `//` é uma nota privada ligada ao próximo momento. Ela nunca aparece no jogo. Veja [Notas](/novelworks-docs/pt-br/writing/notes/).

## Linhas de cena

Estas linhas não criam um momento próprio: elas mudam a cena a partir da linha seguinte.

```
background : Station
show : Mia happy left
hide : Mia
hide : everyone
```

- **`background : Name`** troca o cenário pela imagem chamada Nome. `background : none`, ou nada depois dos dois-pontos, tira o cenário.
- **`show : Mia happy left`** faz um personagem aparecer, ou muda a expressão ou o lugar dele. Depois do nome você pode acrescentar uma expressão e um lugar: `left`, `center` ou `right`, ou `placed by hand` para manter um posicionamento livre. Sem lugar, um personagem que já está em cena mantém o lugar, e um novo vai para o centro. O nome de um personagem pode ter espaços.
- **`hide : Mia`** faz um personagem sair. `hide : everyone`, ou nada depois dos dois-pontos, esvazia a cena.

Uma linha de cena precisa de uma linha depois dela. Se não, ela fica sinalizada.

## Itens

```
give : Key
give : Key x3
remove : Key
give : Key, no notice
```

Um momento que dá um item ao jogador ou tira um item dele. `x3` é a quantidade (um sinal × também funciona). `take :` significa o mesmo que `remove :`. `, no notice` esconde o aviso curto que o jogador normalmente vê. Os itens são um recurso do seu jogo, veja [Inventário](/novelworks-docs/pt-br/features/inventory/).

## Abrir o mapa

```
map
```

Uma linha só com a palavra `map` abre o mapa (um momento Mostrar mapa). Veja [Mapa](/novelworks-docs/pt-br/features/map/).

## Finais

```
end : Good ending
  You understood everything.
```

Um final, com o nome depois dos dois-pontos. As linhas recuadas embaixo dele são um texto curto opcional. `ending :` também funciona. Um personagem que por acaso se chame "End" vence a palavra-chave, a menos que você escreva o comando entre colchetes.

## Momentos de exploração

```
exploration : 3 zones
```

O modo Roteiro mostra um momento de exploração como uma linha com o número de zonas. Você não pode criar nem editar zonas aqui: uma exploração se edita no inspetor, e um momento mantém suas zonas e objetos quando você edita o resto do texto. Uma nova linha `exploration` começa vazia. Veja [Exploração](/novelworks-docs/pt-br/features/exploration/).

## Títulos (texto do jogo inteiro)

```
# Park
```

No texto do jogo inteiro, uma linha que começa com `#` inicia uma cena com aquele nome.

## Colchetes

Uma linha de comando pode vir entre colchetes: `[background : Station]` é o mesmo que `background : Station`. Colchetes sempre significam "isto é um comando". Você só precisa deles quando um personagem tem o mesmo nome de um comando: se você tem um personagem chamado Background, escreva `[background : Station]` para o comando e `Background : Hi!` para o personagem.

## Referência rápida

| Você escreve | O que faz |
|---|---|
| `Mia : Hello!` | Mia fala. |
| `Mia (happy) : Hello!` | Mia fala com uma expressão. |
| `It rained.` | Narração. |
| `  more text` | A fala continua na mesma caixa. |
| `> text` | Uma linha mantida exatamente como foi escrita. |
| `// note` | Uma nota privada no próximo momento. |
| `background : Station` | O cenário muda a partir daqui. |
| `show : Mia happy left` | Um personagem aparece ou muda. |
| `hide : Mia` | Um personagem sai. |
| `give : Key x3` / `remove : Key` | Dá ou tira um item. |
| `map` | Abre o mapa. |
| `end : Good ending` | Um final. |
| `-> Park` | Um salto para uma cena. |
| `? …`, `- …`, `if …` | Escolhas e condições: veja a próxima página. |
| `# Park` | Uma cena (só no texto do jogo inteiro). |
