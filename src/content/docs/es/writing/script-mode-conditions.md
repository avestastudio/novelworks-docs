---
title: "Modo Guion: condiciones y elecciones"
description: Escribe como texto las elecciones, los efectos de las opciones, las condiciones con varios casos y los saltos.
---

Esta página continúa [Modo Guion: todas las líneas](/novelworks-docs/es/writing/script-mode-lines/). Los ejemplos usan las palabras en inglés; NovelWorks también entiende al mismo tiempo las palabras de los demás idiomas del editor.

## Saltos

```
-> Park
```

Un salto a la escena llamada Park. Los jugadores no ven este momento. Si escribes `->` sin nombre, es un salto que todavía no tiene escena.

## Elecciones

```
? What now?
- Talk to her -> Park
- Leave
```

- Una línea que empieza con `?` es la pregunta. Es opcional: una línea que empieza con `-` sin pregunta antes inicia una elección sin pregunta.
- Cada línea que empieza con `-` es una opción. `-> Park` después del texto es la escena a la que lleva la opción (la parte después del **último** `->`). Una opción sin `->` deja que la historia continúe.
- Una elección formada solo por la pregunta, sin opciones, se lee así. Una elección necesita al menos dos opciones para funcionar en el juego.

### Lo que cambia una opción

Las líneas con sangría bajo una opción son lo que esta cambia:

```
- Give her the flower -> Park
  + Affection 1
  = MetMia true
  give : Key
  remove : Coin
```

| Línea | Significado |
|---|---|
| `+ Affection 1` | Suma 1 a la Puntuación llamada Affection. |
| `= MetMia true` | Establece MetMia. El valor es un número, o `true` / `false` (también sirven `yes` / `no`). |
| `give : Key` (`give : Key x3`) | Da un objeto al jugador. |
| `remove : Key` | Quita un objeto. |

Cualquier otra línea con sangría se marca y se ignora.

### Una opción que aparece solo a veces

```
- Open the door -> Hall
  if item Key, locked
```

Una línea `if` con sangría bajo una opción dice cuándo está disponible. Añade `, locked` para mostrar la opción en gris cuando no está disponible. Sin eso, la opción se oculta. Mira [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/): los jugadores siempre conservan una forma de continuar.

## Pruebas

Una condición comprueba una variable o un objeto:

| Prueba | Significado |
|---|---|
| `Affection >= 3` | La Puntuación Affection es al menos 3. |
| `MetMia = true` | El Hecho MetMia es Sí. |
| `item Key` | El jugador tiene una Key. |
| `item Coin x3` | El jugador tiene al menos 3 Coin. |
| `without Key` | El jugador no tiene una Key. |

Para una Puntuación puedes usar `=` (o `==`), `!=` (o `≠`), `>`, `>=` (o `≥`), `<` y `<=` (o `≤`). Para un Hecho, `=` y `!=`. Se acepta un número con coma decimal.

## Condiciones: un momento Si…

```
if Affection >= 3 -> Park, else -> Nothing
```

A dónde ir cuando se cumple la condición y, después de `, else ->`, a dónde ir si no se cumple. Las dos partes son opcionales. Los jugadores no ven este momento.

### Varios casos

Pon cada caso en su propia línea. Gana el primer caso que se cumple:

```
if Affection >= 5 -> Park
else if Affection >= 2 -> Station
else -> Nothing
```

- `else if …` añade un caso. `else -> …` es a dónde ir cuando no se cumple ningún caso.
- Estas líneas deben ir seguidas, sin línea en blanco entre ellas, y nada puede ir después del `else` final. Una línea `else` que no continúa una condición es texto normal.
- Si no hay escena escrita después del `else` final, la historia continúa con el momento siguiente.

![Un Si… comprueba el Caso 1, luego el Caso 2, y después va a «si no».](/novelworks-docs/diagrams/if-order.svg)

### Varias pruebas en un caso

```
if Affection >= 3 and item Key -> Park
if MetMia = true or item Letter -> Library
```

Usa `and` cuando deben cumplirse todas las pruebas, `or` cuando basta una. **No mezcles `and` y `or` en una línea:** NovelWorks lo marca y usa solo el primer tipo.

## Si un nombre todavía no existe

Una escena, una variable o un objeto desconocido aparece subrayado. Una corrección rápida, o **{ui.scriptMode.createMissing_other}**, lo crea. Mira [Modo Guion: lo básico](/novelworks-docs/es/writing/script-mode/).
