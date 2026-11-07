---
title: Buscar y reemplazar
description: Busca en todo tu juego, salta a cada resultado y reemplaza texto en todas partes.
---

Abre la búsqueda con **{ui.native.menu.edit} → {ui.native.menu.findAndReplace}** o con **Cmd+F** / **Ctrl+F**. El panel de búsqueda sustituye a las pestañas del panel izquierdo, y el cursor queda en el primer cuadro. Ciérralo con la X, o pulsa **Esc** en uno de sus cuadros. Funciona en todo el proyecto, nunca en una sola escena.

![El panel de búsqueda, con los resultados agrupados por escena.](/novelworks-docs/screenshots/search-panel.png)

## Qué se busca

- diálogos, preguntas y opciones de las elecciones, nombres y textos de los finales;
- etiquetas de las zonas de exploración, textos de examinar y textos de bloqueo;
- notas de los momentos;
- nombres y resúmenes de las escenas;
- nombres de los personajes;
- nombres y descripciones de los objetos.

No se busca: quién dice una línea, los nombres de las variables, los nombres de las imágenes y los nombres de las expresiones.

## Buscar

Escribe en **{ui.searchPanel.find}**. Una línea debajo dice «3 de 12» o «Sin resultados.». Debajo, los resultados se agrupan por escena (luego personajes, luego objetos). Cada fila muestra dónde está la coincidencia («Momento 4 · Diálogo», «{tx.characterInspector.characterName}»…) y un extracto corto con la coincidencia resaltada. Se listan como máximo 500 resultados: escribe más palabras para acotar la búsqueda.

Dos opciones acotan la búsqueda:

- **{ui.searchPanel.matchCase}**: «Aa» no es «aa». Desactivada por defecto.
- **{ui.searchPanel.wholeWordsOnly}**: «{tx.gameUIPreview.mia}» pero no «Miami». Desactivada por defecto.

El texto que escribes se busca exactamente como está escrito. No hay patrones.

Haz clic en un resultado para ir a él: se selecciona el momento, la escena, el personaje, el objeto o la zona. **Intro** va al resultado siguiente y **Mayús+Intro** al anterior, y la búsqueda da la vuelta al llegar al final.

## Reemplazar

Escribe el texto nuevo en **{ui.searchPanel.replaceWith}**.

- **{ui.searchPanel.replace}** reemplaza el resultado seleccionado y pasa al siguiente.
- El icono de la fila de un resultado (**{ui.searchPanel.replaceThisOne}**) reemplaza solo ese, y no avanza.
- **{ui.searchPanel.replaceAll}** reemplaza todas las coincidencias de tu juego. Primero NovelWorks te pide confirmar, diciéndote cuántas coincidencias hay y que puedes deshacer. Un reemplazo vacío quita el texto.

Un reemplazo se omite si el texto cambió desde que se encontró la coincidencia. Reemplazar en todo el juego se hace en una sola acción, y un solo **{ui.native.menu.undo}** lo revierte todo. Un mensaje te dice cuántas coincidencias se reemplazaron («31 coincidencias reemplazadas.»).
