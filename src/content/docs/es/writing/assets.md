---
title: Recursos
description: Importa imágenes, elige su tipo y gestiónalas en la pestaña Recursos.
---

Cada imagen de tu juego es un **recurso** de tu proyecto: fondos, imágenes de personajes, ilustraciones, objetos e imágenes para las pantallas del propio juego. Viven en la pestaña **{ui.leftPanel.assets}** y se copian a la carpeta `assets` de tu proyecto.

## Formatos y límites

- Solo **PNG, JPG y WebP** (también `.jpeg`).
- Hasta **50 MB** por archivo. Los demás archivos se omiten y NovelWorks te los enumera.
- No se redimensiona ni se convierte nada. Un fondo más pequeño que la pantalla del juego se estira y puede verse borroso, y la ventana de importación te avisa.

## Importar imágenes

Tres formas:

- Haz clic en **{ui.assetsTab.import}** en la pestaña Recursos (puedes elegir varios archivos).
- **Arrastra imágenes a la ventana del editor.** Una capa dice «{tx.dropOverlay.dropYourImagesHere}». Después de soltarlas, se abre la pestaña Recursos.
- Usa el atajo de importación de un selector, por ejemplo cuando eliges un fondo o una expresión.

Una ventana te pide entonces que revises **{ui.importDialog.name}** y **{ui.importDialog.type}** de cada imagen. NovelWorks adivina el tipo para ahorrarte tiempo: una imagen con transparencia se supone un sprite, una imagen apaisada o cuadrada se supone un fondo y una imagen vertical se supone un sprite. Puedes cambiar cada suposición. **{ui.dialogs.cancel}** no copia nada.

Para un **sprite de personaje** también puedes elegir **{ui.importDialog.addToCharacter}**: un personaje existente, o **{ui.importDialog.newCharacter}**, y el **{ui.importDialog.expressionName}**. Si un archivo se llama como `mia_happy` y hay un personaje que se llama Mia, NovelWorks propone por sí solo Mia y «happy». Con varias imágenes, puedes definir el tipo o el personaje de todas a la vez.

## Tipos de imagen

| Tipo | Para qué sirve |
|---|---|
| {ui.assetTypes.background} | Llena la pantalla detrás de los personajes. |
| {ui.assetTypes.characterSprite} | Una imagen de un personaje, usada para las expresiones. |
| {ui.assetTypes.cG} | Una ilustración a pantalla completa para un acontecimiento especial. |
| {ui.assetTypes.prop} | Una imagen de un objeto (una llave, una carta…), colocada en el escenario de los momentos de exploración. |
| {ui.assetTypes.uI} | Una imagen para las pantallas del propio juego: cuadro de diálogo, logotipo, botones. |
| {ui.assetTypes.avatar} | Un pequeño retrato que se muestra junto al nombre de quien habla. |

El selector de fondos ofrece fondos y CG.

## La pestaña Recursos

Unas fichas filtran la lista por tipo, con el número de imágenes de cada uno. Selecciona una imagen para verla en el inspector:

- **{ui.assetInspector.name}**: el nombre que se muestra en NovelWorks. Cambiarlo no renombra el archivo;
- **{ui.assetInspector.type}**: puedes cambiarlo en cualquier momento;
- **{ui.assetInspector.usedIn}**: dónde se usa la imagen, o «{tx.assetInspector.notUsedYet}»;
- **{ui.assetInspector.file}**: su archivo en la carpeta `assets`.

Haz clic derecho en una imagen para ver **{ui.contextMenus.rename}**, **{ui.contextMenus.showUsages}** y **{ui.contextMenus.delete}**.

Los nombres de archivo se limpian (se quitan los caracteres que un nombre de archivo no puede contener) y, si un nombre ya está ocupado, el archivo nuevo pasa a ser `name-2.png`, `name-3.png`… Nunca se sobrescribe un archivo existente.

## Reemplazar una imagen

Una imagen no se puede reemplazar directamente. Para un personaje, haz clic en la imagen de una expresión y elige **{ui.characterInspector.changeImage}**: importa o elige otra imagen y hace que la expresión apunte a ella. La imagen anterior se queda en la pestaña Recursos.

## Borrar una imagen

Haz clic en **{ui.assetInspector.deleteImage}**. NovelWorks pregunta antes. Si la imagen se usa, indica dónde y avisa de que esos lugares se quedarán sin imagen. El archivo no se borra de inmediato: al guardar, se mueve a `backups/deleted-assets`, y vuelve si deshaces o restauras una copia de seguridad. Consulta [Guardar, copias de seguridad y deshacer](/novelworks-docs/es/getting-started/saving-and-undo/).
