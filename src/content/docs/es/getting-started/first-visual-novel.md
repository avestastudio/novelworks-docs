---
title: Tu primera novela visual
description: Un tutorial paso a paso, desde un proyecto vacío hasta un juego que puedes jugar.
---

Vas a hacer una historia pequeña con un fondo, un personaje con dos expresiones, unas líneas de diálogo y una elección con dos finales. Necesitas tres imágenes: un fondo y dos imágenes del **mismo personaje** con expresiones distintas (por ejemplo contento y sorprendido).

## 1. Crea el proyecto

1. Abre NovelWorks. En la [pantalla de proyectos](/novelworks-docs/es/getting-started/projects-screen/), haz clic en **{ui.projectHub.newProject}**.
2. Escribe un nombre, comprueba la ubicación (o haz clic en **{ui.newProjectScreen.browse}**), deja las funciones sin marcar y haz clic en **{ui.newProjectScreen.createProject}**.

El proyecto se abre con una escena, «{tx.shared.project.firstScene}», y una línea de diálogo vacía.

## 2. Añade tus imágenes

1. En el panel izquierdo, abre la pestaña **{ui.leftPanel.assets}**.
2. Haz clic en **{ui.assetsTab.import}**, o suelta tus imágenes sobre la ventana.
3. Para cada imagen, elige su tipo. Elige **{ui.assetTypes.background}** para la imagen del lugar y **{ui.assetTypes.characterSprite}** para las dos imágenes de tu personaje.

## 3. Crea un personaje

1. Abre la pestaña **{ui.leftPanel.characters}** y haz clic en **{ui.charactersTab.newCharacter}**.
2. En el inspector, escribe el **{ui.characterInspector.characterName}** y elige un **{ui.characterInspector.nameColor}**.
3. En **{ui.characterInspector.expressions}**, haz clic en **{ui.characterInspector.addExpression}** y elige una imagen, una vez por cada imagen (solo se ofrecen las imágenes de tipo «{tx.assetTypes.characterSprite}»). Luego cambia el nombre de cada expresión («Contento», «Sorprendido») si quieres. La expresión con la estrella es la que se muestra por defecto.

## 4. Escribe la primera escena

1. Abre la pestaña **{ui.leftPanel.scenes}** y selecciona tu escena.
2. Elige el fondo del momento con el botón de fondo que está encima de la pantalla del juego («{ui.stage.chooseTheBackgroundOfThisMoment}»).
3. Pon a tu personaje en escena con el botón **{ui.stageControls.character}** sobre la pantalla del juego y arrastra al personaje adonde quieras.
4. Haz clic en el cuadro de diálogo de la pantalla y escribe. Pulsa **Intro** para empezar la línea siguiente: empieza un momento nuevo, con el **mismo escenario**, porque [los personajes se quedan en su sitio](/novelworks-docs/es/concepts/stage/). Pulsa **Mayús+Intro** para una línea nueva dentro del mismo cuadro.
5. Para cambiar la expresión más adelante, selecciona un momento posterior en la línea de tiempo, haz clic en el personaje de la pantalla y elige otra expresión en la pequeña barra que aparece sobre él.

## 5. Añade una elección

1. En la cabecera de la línea de tiempo, abre **{ui.timeline.addOther}** y elige **{ui.moments.choice}**.
2. En la pestaña **{ui.inspectorTabs.text}** del inspector, escribe la pregunta y el texto de dos opciones.
3. Para cada opción, elige la escena a la que lleva en **{ui.branchInspectors.then}**. Crea antes las escenas con **{ui.scenesTab.newScene}** en la pestaña Escenas.

Ya puedes hacer que una elección importe: consulta [Cómo se ramifica una historia](/novelworks-docs/es/concepts/how-stories-branch/).

## 6. Añade un final

Al final de cada rama, abre **{ui.timeline.addOther}** y añade un momento **{ui.moments.ending}**. Al principio se llama «{tx.shared.scenes.goodEnding}»: cambia el nombre si quieres. Después de un final, el jugador vuelve a la pantalla de título.

## 7. Pulsa Jugar

Haz clic en **{ui.topBar.play}** en la barra superior para jugar desde la pantalla de título. Para probar desde la mitad, selecciona un momento y haz clic en **{ui.topBar.playFromHere}**. Pulsa **Esc** para volver al editor (si hay un menú del juego abierto, **Esc** lo cierra primero).

## 8. Guarda

Pulsa **Cmd+S** (Mac) o **Ctrl+S** (Windows). NovelWorks también guarda solo cada dos minutos. Consulta [Guardar, copias de seguridad y deshacer](/novelworks-docs/es/getting-started/saving-and-undo/).

## ¿Qué sigue?

- Haz que las elecciones importen con las [variables](/novelworks-docs/es/branching/variables/) y las [condiciones](/novelworks-docs/es/branching/conditions/).
- Cambia el aspecto de tu juego en el [editor de la interfaz del juego](/novelworks-docs/es/game-ui/game-ui-editor/).
- [Expórtalo](/novelworks-docs/es/publish/web-export/) y compártelo.
