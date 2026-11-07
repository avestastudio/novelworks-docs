---
title: "Modo Roteiro: condições e escolhas"
description: Escreva escolhas, efeitos de opções, condições com vários casos e saltos como texto.
---

Esta página continua [Modo Roteiro: todas as linhas](/novelworks-docs/pt-br/writing/script-mode-lines/). Os exemplos usam as palavras em inglês; o NovelWorks também entende, ao mesmo tempo, as palavras dos outros idiomas do editor.

## Saltos

```
-> Park
```

Um salto para a cena chamada Park. Os jogadores não veem este momento. Se você escrever `->` sem nome, é um salto ainda sem cena.

## Escolhas

```
? What now?
- Talk to her -> Park
- Leave
```

- Uma linha que começa com `?` é a pergunta. Ela é opcional: uma linha que começa com `-` sem pergunta antes dela inicia uma escolha sem pergunta.
- Cada linha que começa com `-` é uma opção. `-> Park` depois do texto é a cena para onde a opção leva (a parte depois do **último** `->`). Uma opção sem `->` deixa a história continuar.
- Uma escolha feita só da pergunta, sem opções, é lida assim mesmo. Uma escolha precisa de pelo menos duas opções para funcionar no jogo.

### O que uma opção muda

As linhas recuadas embaixo de uma opção são o que ela muda:

```
- Give her the flower -> Park
  + Affection 1
  = MetMia true
  give : Key
  remove : Coin
```

| Linha | Significado |
|---|---|
| `+ Affection 1` | Soma 1 à Pontuação chamada Affection. |
| `= MetMia true` | Define MetMia. O valor é um número, ou `true` / `false` (`yes` / `no` também funcionam). |
| `give : Key` (`give : Key x3`) | Dá um item ao jogador. |
| `remove : Key` | Tira um item. |

Qualquer outra linha recuada fica sinalizada e é ignorada.

### Uma opção que só aparece às vezes

```
- Open the door -> Hall
  if item Key, locked
```

Uma linha `if` recuada embaixo de uma opção diz quando ela está disponível. Acrescente `, locked` para mostrar a opção esmaecida quando ela não está disponível. Sem isso, a opção fica escondida. Veja [Como uma história se ramifica](/novelworks-docs/pt-br/concepts/how-stories-branch/): os jogadores sempre têm um jeito de seguir em frente.

## Testes

Uma condição testa uma variável ou um item:

| Teste | Significado |
|---|---|
| `Affection >= 3` | A Pontuação Affection é pelo menos 3. |
| `MetMia = true` | O Fato MetMia é Sim. |
| `item Key` | O jogador tem uma Key. |
| `item Coin x3` | O jogador tem pelo menos 3 Coins. |
| `without Key` | O jogador não tem uma Key. |

Para uma Pontuação você pode usar `=` (ou `==`), `!=` (ou `≠`), `>`, `>=` (ou `≥`), `<` e `<=` (ou `≤`). Para um Fato, `=` e `!=`. Um número com vírgula decimal é aceito.

## Condições: um momento Se…

```
if Affection >= 3 -> Park, else -> Nothing
```

Para onde ir quando a condição é verdadeira e, depois de `, else ->`, para onde ir quando não é. As duas partes são opcionais. Os jogadores não veem este momento.

### Vários casos

Ponha cada caso na sua própria linha. Vale o primeiro caso que for verdadeiro:

```
if Affection >= 5 -> Park
else if Affection >= 2 -> Station
else -> Nothing
```

- `else if …` acrescenta um caso. `else -> …` é para onde ir quando nenhum caso é verdadeiro.
- Estas linhas devem vir uma logo após a outra, sem linha em branco entre elas, e nada pode vir depois do `else` final. Uma linha `else` que não continua uma condição é texto comum.
- Se nenhuma cena for escrita depois do `else` final, a história continua com o próximo momento.

![Um Se… verifica o Caso 1, depois o Caso 2, e então vai para senão.](/novelworks-docs/diagrams/if-order.svg)

### Vários testes em um caso

```
if Affection >= 3 and item Key -> Park
if MetMia = true or item Letter -> Library
```

Use `and` quando todos os testes precisam ser verdadeiros, `or` quando basta um. **Não misture `and` e `or` na mesma linha:** o NovelWorks sinaliza isso e usa só o primeiro tipo.

## Se um nome ainda não existe

Uma cena, variável ou item desconhecido fica sublinhado. Uma correção rápida, ou **{ui.scriptMode.createMissing_other}**, cria o que falta. Veja [Modo Roteiro: o básico](/novelworks-docs/pt-br/writing/script-mode/).
