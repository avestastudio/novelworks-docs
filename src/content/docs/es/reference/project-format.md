---
title: "Formato del proyecto, compatibilidad y copias de seguridad"
description: "Qué hay en la carpeta de un proyecto, cómo se tratan los proyectos antiguos y nuevos, y cómo se protege tu trabajo."
---

## Qué es un proyecto

Un proyecto es una **carpeta** que puedes copiar, mover o guardar como cualquier otra:

- `project.json`: todo tu juego, en un solo archivo (texto en formato JSON, con sangría de 2 espacios).
- `assets`: las imágenes, los vídeos y los sonidos que importaste.
- `backups`: versiones anteriores de `project.json`, y `backups/deleted-assets` para los archivos que borraste.

Cada vez que guardas, NovelWorks escribe el archivo de forma segura (en un archivo temporal, y luego le cambia el nombre), así que un fallo mientras se guarda no lo daña.

## La versión del formato

`project.json` tiene una **versión de formato**. Esta versión de NovelWorks escribe el formato **26**. Cada vez que cambió el formato, NovelWorks ganó una actualización automática, así que todos los proyectos anteriores se siguen abriendo. Entre los cambios:

| Formato | Qué añadió |
|---|---|
| 2 | Opciones del cuadro de diálogo (esquinas de 9 partes, color del texto, un color para todos los nombres) y el idioma de corrección ortográfica. |
| 3, 4 | Notas del autor, posiciones en el mapa de la historia, resúmenes de escenas y estado de escritura. |
| 5 | Momentos de exploración (zonas y objetos decorativos). |
| 6 | Objetos y funciones opcionales. |
| 7 | Colocación libre de los personajes. |
| 8 | La función Mapa. |
| 9 | Un identificador del juego, para las partidas guardadas de los jugadores, y el aspecto de las pantallas de Guardar y Cargar. |
| 10, 12, 13 | El aspecto de las pantallas de Historial, menú rápido y Opciones. |
| 11 | El mapa en su propio espacio. |
| 14 | Las imágenes de introducción y la advertencia de contenido. |
| 15 | Los personajes se quedan en el escenario: un momento guarda solo lo que cambia. |
| 16 | Un Si… con varios casos. |
| 17 | Una opción de elección que aparece solo cuando se cumple una condición. |
| 18 | [Créditos](/novelworks-docs/es/game-ui/credits/). |
| 19 | [Capítulos](/novelworks-docs/es/game-ui/chapters/). |
| 20 | [Atuendos](/novelworks-docs/es/writing/outfits/) y el vestuario. |
| 21 | [Ambientes y fondos animados](/novelworks-docs/es/writing/ambience-and-animated-backgrounds/). |
| 22 | La [cámara](/novelworks-docs/es/writing/camera/), la profundidad y la imagen de primer plano. |
| 23 | Varios planos de cámara por momento. |
| 24 | [Texto enriquecido](/novelworks-docs/es/writing/rich-text/) en las líneas de diálogo, y los cinco colores de las palabras. |
| 25 | [Efectos](/novelworks-docs/es/writing/effects/) y partículas. |
| 26 | [Sonido](/novelworks-docs/es/writing/sound/): música, sonido ambiente, efectos de sonido y voces. |

## Abrir un proyecto antiguo

- NovelWorks actualiza el proyecto solo **en memoria**. Antes de entregarlo al editor, guarda una **copia exacta** del `project.json` original en `backups`, con un nombre como `project-2026-11-07_17-15-04-migration.json`, y comprueba que la copia sea idéntica.
- Si no se puede hacer la copia, el proyecto **no se abre** y no se cambia nada.
- Una barra te dice dónde está la copia (con **{ui.store.showCopy}**) y que debes guardar para conservar la actualización. El proyecto cuenta como no guardado.
- Si lo vuelves a abrir sin guardar, se reutiliza la misma copia. Estas copias «{tx.restoreBackupDialog.beforeUpgrade}» no se borran nunca.
- Puedes volver al original con **{ui.native.menu.file} → Restaurar desde copia de seguridad…**.

Las partidas guardadas de los jugadores en tus juegos siguen siendo legibles: las partidas guardadas apuntan a escenas y momentos por su identidad.

## Abrir un proyecto más nuevo

Un proyecto guardado por una versión **más nueva** de NovelWorks no se puede abrir: NovelWorks lo dice y te pide que actualices. No se cambia nada.

Si una carpeta no tiene `project.json`, o el archivo está dañado (no es un JSON válido), NovelWorks te lo dice y no lo abre.

## Copias de seguridad

Mira [Guardar, copias de seguridad y deshacer](/novelworks-docs/es/getting-started/saving-and-undo/): una copia antes de cada guardado manual, como máximo una cada 15 minutos con el autoguardado, las 20 más recientes más la más reciente de cada uno de los últimos 7 días.

## Editar el archivo a mano

Puedes abrir `project.json` en un editor de texto, pero no lo edites mientras NovelWorks tenga el proyecto abierto, y haz antes una copia. NovelWorks rechaza un archivo que no puede leer en lugar de adivinar.

## Demo y versión completa

Las dos ediciones usan exactamente el mismo formato. Mira [La demo gratuita](/novelworks-docs/es/getting-started/demo-edition/).
