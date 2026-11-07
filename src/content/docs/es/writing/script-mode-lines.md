---
title: "Modo Guion: todas las líneas"
description: Todos los tipos de línea que puedes escribir en el modo Guion, con ejemplos.
---

En el modo Guion, **una línea es una cosa que ocurre**. Los ejemplos usan las palabras en inglés. NovelWorks también entiende al mismo tiempo las palabras de los demás idiomas del editor (`si`, `décor`, `fin`…). Las mayúsculas, los acentos y los espacios de más no importan cuando NovelWorks lee una palabra clave o un nombre.

Para las elecciones, las condiciones y los saltos, mira [Modo Guion: condiciones y elecciones](/novelworks-docs/es/writing/script-mode-conditions/).

## Diálogo

```
Mia : Hello!
```

Una línea `Name : text` es una línea de diálogo dicha por ese personaje. Los espacios alrededor de los dos puntos son opcionales. Si ningún personaje tiene ese nombre, toda la línea se lee como narración y se marca, y una corrección rápida te ofrece crear el personaje.

### Con una expresión

```
Mia (happy) : Hello!
```

Mia habla con la expresión «happy». Si ya está en escena, cambia de expresión y se queda donde está. Si no está en escena, aparece en el centro.

### Texto en varias líneas

```
Mia : I looked for you everywhere.
  I had given up hope.
```

Una línea con dos espacios de sangría continúa la línea de arriba, como una línea nueva **dentro del mismo cuadro**.

## Narración

```
It had been raining since morning.
```

Cualquier línea que no sea otro tipo de línea es narración.

### Una línea que se queda tal como está escrita

```
> background : this is just text
```

Una línea que empieza con `>` es narración **tal como está escrita**, aunque parezca un comando. NovelWorks escribe el `>` por sí solo cuando, si no, la narración se leería mal.

## Notas

```
// to re-read
Mia : Hello!
```

Una línea que empieza con `//` es una nota privada unida al momento siguiente. Nunca se muestra en el juego. Mira [Notas](/novelworks-docs/es/writing/notes/).

## Líneas de escena

Estas líneas no forman un momento propio: cambian la escena a partir de la línea siguiente.

```
background : Station
show : Mia happy left
hide : Mia
hide : everyone
```

- **`background : Name`** cambia el fondo por la imagen llamada Nombre. `background : none`, o nada después de los dos puntos, quita el fondo.
- **`show : Mia happy left`** hace aparecer a un personaje, o cambia su expresión o su lugar. Después del nombre puedes añadir una expresión y un lugar: `left`, `center` o `right`, o `placed by hand` para conservar una colocación libre. Sin lugar, un personaje que ya está en escena conserva el suyo, y uno nuevo va al centro. El nombre de un personaje puede tener espacios.
- **`hide : Mia`** hace que un personaje se vaya. `hide : everyone`, o nada después de los dos puntos, deja la escena vacía.

Una línea de escena necesita otra línea después. Si no, se marca.

## Objetos

```
give : Key
give : Key x3
remove : Key
give : Key, no notice
```

Un momento que da un objeto al jugador, o se lo quita. `x3` es la cantidad (también sirve el signo ×). `take :` significa lo mismo que `remove :`. `, no notice` oculta el aviso corto que el jugador suele ver. Los objetos son una función de tu juego, mira [Inventario](/novelworks-docs/es/features/inventory/).

## Abrir el mapa

```
map
```

Una línea con solo la palabra `map` abre el mapa (un momento Mostrar mapa). Mira [Mapa](/novelworks-docs/es/features/map/).

## Finales

```
end : Good ending
  You understood everything.
```

Un final, con su nombre después de los dos puntos. Las líneas con sangría debajo son un texto corto opcional. `ending :` también funciona. Un personaje que se llame «End» gana a la palabra clave, a menos que escribas el comando entre corchetes.

## Momentos de exploración

```
exploration : 3 zones
```

El modo Guion muestra un momento de exploración como una sola línea con el número de zonas. Aquí no puedes crear ni editar zonas: una exploración se edita en el inspector, y un momento conserva sus zonas y sus objetos decorativos cuando editas el resto del texto. Una línea `exploration` nueva empieza vacía. Mira [Exploración](/novelworks-docs/es/features/exploration/).

## Encabezados (texto de todo el juego)

```
# Park
```

En el texto de todo el juego, una línea que empieza con `#` inicia una escena con ese nombre.

## Corchetes

Una línea de comando puede ir entre corchetes: `[background : Station]` es lo mismo que `background : Station`. Los corchetes siempre significan «esto es un comando». Solo los necesitas cuando un personaje tiene el mismo nombre que un comando: si tienes un personaje llamado Background, escribe `[background : Station]` para el comando y `Background : Hi!` para el personaje.

## Referencia rápida

| Escribes | Qué hace |
|---|---|
| `Mia : Hello!` | Mia habla. |
| `Mia (happy) : Hello!` | Mia habla con una expresión. |
| `It rained.` | Narración. |
| `  more text` | La línea sigue en el mismo cuadro. |
| `> text` | Una línea que se queda tal como está escrita. |
| `// note` | Una nota privada en el momento siguiente. |
| `background : Station` | El fondo cambia desde aquí. |
| `show : Mia happy left` | Un personaje aparece o cambia. |
| `hide : Mia` | Un personaje se va. |
| `give : Key x3` / `remove : Key` | Da o quita un objeto. |
| `map` | Abre el mapa. |
| `end : Good ending` | Un final. |
| `-> Park` | Un salto a una escena. |
| `? …`, `- …`, `if …` | Elecciones y condiciones: mira la página siguiente. |
| `# Park` | Una escena (solo en el texto de todo el juego). |
