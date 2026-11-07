---
title: Guardar, copias de seguridad y deshacer
description: Cómo guarda NovelWorks tu trabajo, conserva versiones anteriores y te deja volver atrás.
---

## Guardar

- Haz clic en **{ui.topBar.save}**, elige **{ui.native.menu.file} → {ui.native.menu.save}** o pulsa **Cmd+S** (Mac) / **Ctrl+S** (Windows). Un mensaje «{tx.store.projectSaved}» lo confirma.
- NovelWorks también **guarda automáticamente**: cada 2 minutos, y cada vez que la ventana pierde el foco, pero solo si hay cambios sin guardar. Entonces la barra superior muestra **{ui.topBar.savedAuto}**.
- El indicador de guardado dice **{ui.topBar.unsavedChanges}** hasta el siguiente guardado.
- Si cierras la ventana o el proyecto con cambios sin guardar, NovelWorks pregunta si quieres guardar, no guardar o cancelar.

## Copias de seguridad

Las copias de seguridad son copias anteriores de `project.json`, guardadas en la carpeta `backups` dentro de tu proyecto.

- Se hace una copia **antes de cada guardado manual**.
- Con el guardado automático, se hace una copia **como máximo cada 15 minutos**.
- No se hace ninguna copia si no ha cambiado nada desde la más reciente.
- NovelWorks conserva las **20 más recientes**, más la **más reciente de cada uno de los últimos 7 días**. Las más antiguas se borran.
- Las copias hechas al actualizar un proyecto antiguo (**{ui.restoreBackupDialog.beforeUpgrade}**) no se borran nunca.
- Las imágenes que borras del proyecto se mueven a `backups/deleted-assets` en lugar de borrarse, para que una copia de seguridad aún pueda encontrarlas. Se limpian cuando ninguna copia conservada las necesita.

### Vuelve a una copia de seguridad

1. Elige **{ui.native.menu.file} → {ui.native.menu.restoreFromBackup}**.
2. Elige una versión de la lista. Cada fila muestra su fecha, su tipo (**{ui.restoreBackupDialog.saved}**, **{ui.restoreBackupDialog.autosave}**, **{ui.restoreBackupDialog.beforeRestoringABackup}** o **{ui.restoreBackupDialog.beforeUpgrade}**) y cuántas escenas y momentos tiene.
3. Haz clic en **{ui.restoreBackupDialog.restoreThisVersion}** (o haz doble clic en la fila).

Tu versión actual también se guarda como copia de seguridad, y **{ui.native.menu.undo}** la recupera.

## Deshacer y rehacer

**{ui.native.menu.edit} → {ui.native.menu.undo}** (**Cmd+Z** / **Ctrl+Z**) y **{ui.native.menu.redo}** (**Mayús+Cmd+Z** en Mac, **Ctrl+Y** o **Ctrl+Mayús+Z** en Windows) van hacia atrás y hacia delante por tus cambios. La barra superior tiene las mismas dos flechas.

- NovelWorks recuerda los últimos **200** pasos.
- Escribir en un mismo cuadro de texto se agrupa: una ráfaga de escritura es un solo paso, que termina con una pausa de aproximadamente un segundo.
- Una acción que cambia varias cosas a la vez, como un cambio que llega a momentos posteriores, es un solo paso.
- Deshacer sigue funcionando después de guardar. Se reinicia cuando abres o cierras un proyecto.
- Deshacer y rehacer están desactivados mientras juegas.
- Cambiar el tema o el idioma del editor, cambiar el tamaño de los paneles y moverse entre pestañas no forman parte del historial.

## Proyectos antiguos

NovelWorks abre proyectos hechos con versiones anteriores y los actualiza. Antes, guarda en `backups` una copia exacta del `project.json` original, y una barra en la parte de arriba muestra dónde, con **{ui.store.showCopy}**. Si no se puede hacer la copia, el proyecto no se abre y no se cambia nada. Un proyecto de una versión más nueva de NovelWorks se rechaza.
