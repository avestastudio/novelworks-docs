---
title: Publicar en itch.io
description: Sube tu juego exportado a itch.io para que la gente pueda jugarlo en el navegador.
---

La [exportación web](/novelworks-docs/es/publish/web-export/) crea un `.zip` con `index.html` en su raíz, que es la estructura que itch.io espera para los juegos de navegador. NovelWorks no sube nada por sí mismo: lo haces tú en el sitio web de itch.io.

:::note
Estos pasos describen el sitio web de itch.io, no NovelWorks, y itch.io puede cambiar sus páginas. Si algo es distinto, la ayuda de itch.io es la referencia.
:::

## Subir

1. En itch.io, crea un proyecto nuevo (o abre uno existente).
2. Como tipo de proyecto, elige **{ui.exportDialog.hTML}** (un juego que se juega en el navegador).
3. Sube el `.zip` creado por NovelWorks y márcalo como un archivo que **se jugará en el navegador**.
4. Ajusta el área de visualización al **tamaño de juego recomendado** que NovelWorks mostró al terminar la exportación (es la resolución de tu proyecto). Opciones como un botón de pantalla completa las decides tú: el juego ya tiene el suyo.
5. Guarda y abre la página, y comprueba el juego en un ordenador y en un móvil.

## Conviene saber

- Las partidas guardadas de los jugadores viven en su navegador, para la dirección web de tu juego. Si la dirección sigue siendo la misma cuando actualizas, se conservan (esto depende de itch.io, y esta documentación no puede prometerlo).
- No subas solo `index.html`: hacen falta todos los archivos de la exportación.
- Tu juego se ejecuta dentro de un marco. Si das a la página un tamaño mayor que el tamaño de juego recomendado, el juego se escala para ajustarse, con barras negras.
- Los juegos de NovelWorks siempre empiezan con la breve pantalla «Hecho con NovelWorks».

## Prueba antes de publicar

Usa **{ui.exportDialog.testInBrowser}** al final de la exportación, o juega la carpeta descomprimida abriendo `index.html`.
