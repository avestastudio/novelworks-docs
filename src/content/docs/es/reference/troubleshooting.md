---
title: "Solución de problemas y mensajes"
description: "Qué significan los mensajes de NovelWorks y qué hacer al abrir proyectos, activar, exportar y guardar."
---

## Abrir un proyecto

| Mensaje | Qué significa y qué hacer |
|---|---|
| «… no es un proyecto de Novelworks: no tiene el archivo project.json.» | La carpeta que elegiste no tiene `project.json`. Elige la carpeta del propio proyecto. |
| «project.json está dañado: no es un JSON válido.» | El archivo se cambió o se cortó. Abre una copia de seguridad: copia un archivo de `backups` sobre `project.json` (guarda aparte el dañado). |
| «Este proyecto fue guardado por una versión más nueva de Novelworks (formato N). Actualiza Novelworks para abrirlo.» | Instala la última versión de NovelWorks. No se cambió nada. |
| «Novelworks no pudo guardar una copia de seguridad de este proyecto antes de actualizarlo, así que no se abrió. Tu proyecto no se ha modificado.» | No se puede escribir en la carpeta. Revisa sus permisos y el espacio libre, y ábrelo de nuevo. |
| «{tx.projectHub.folderNotFound}» (pantalla de proyectos) | La carpeta del proyecto se movió o se borró. Pulsa **{ui.projectHub.locate}** y elige su nuevo lugar. |

## Activación

| Mensaje | Qué hacer |
|---|---|
| Primero pega tu clave de descarga. | Pega la clave en el campo. |
| NovelWorks no pudo conectarse con el servidor de activación. | Revisa tu conexión a internet e inténtalo de nuevo. Activar y desactivar la necesitan. |
| Esta no es una clave de descarga de NovelWorks. | Cópiala de nuevo desde tu página de descarga o tu correo de compra. |
| Esta clave ya está activada en 3 ordenadores. | Desactiva NovelWorks en otro ordenador, o usa **{ui.activateDialog.contactUs}** en la ventana. |
| La activación no funciona ahora mismo. Inténtalo de nuevo en unos minutos. | Un problema temporal del lado del servidor. |
| La desactivación no funciona ahora mismo. Inténtalo de nuevo en unos minutos. | Lo mismo, al desactivar. |

## Exportar

Mira la tabla en [Exportación web](/novelworks-docs/es/publish/web-export/). Lo más habitual: elige otra carpeta (Documentos o Escritorio), libera espacio en el disco o activa NovelWorks.

## Guardar en tus juegos

Los mensajes que ven los jugadores cuando el navegador bloquea el almacenamiento están en [Guardar y cargar](/novelworks-docs/es/player/save-and-load/).

## Cuando algo parece ir mal en la historia

- Una escena marcada como **{ui.scenesTab.unreachable}**, un triángulo en una tarjeta o un cuadro «{tx.branchInspectors.thisMomentNeedsYourAttention}»: mira [Problemas: todos los avisos](/novelworks-docs/es/testing/problems/).
- Falta un personaje en la pantalla: los personajes se quedan en el escenario hasta que algo los cambia, y se van cuando un momento lo indica. Mira [El escenario](/novelworks-docs/es/concepts/stage/).
- No aparece una opción de una elección: puede tener una condición. Mira [Elecciones](/novelworks-docs/es/branching/choices/).
- La historia se salta un Si…: una condición comprueba algo que se borró. Mira [Condiciones Si…](/novelworks-docs/es/branching/conditions/).

## ¿Sigues atascado?

[Informa de un error](/novelworks-docs/es/reference/report-a-bug/).
