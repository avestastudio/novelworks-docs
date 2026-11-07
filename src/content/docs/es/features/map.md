---
title: Mapa
description: Deja que los jugadores elijan adónde ir en un mapa formado por una imagen y lugares en los que se puede hacer clic.
---

Con la función **{ui.shared.features.map}** activada, los jugadores abren un mapa y eligen adónde ir. Un mapa es una imagen de tu mundo con **lugares** encima. Cada lugar lleva a una escena. Actívala en la [biblioteca de funciones](/novelworks-docs/es/features/features-panel/).

## Abre el espacio de trabajo del Mapa

Haz clic en **{ui.leftPanel.map}** en el panel izquierdo (o en **{ui.mapSettings.editMap}** en la biblioteca de funciones). El espacio de trabajo del Mapa tiene una lista de lugares a la izquierda, el mapa en el centro y los ajustes a la derecha. **{ui.mapMode.backToStory}** vuelve al modo Historia.

El mapa se guarda como una escena oculta: no aparece en la pestaña Escenas ni en el mapa de la historia.

### Crea el mapa

Si aún no hay mapa, **{ui.mapMode.createYourMap}** dice: «{tx.mapMode.chooseAPictureOfYourWorldThen}» Haz clic en **{ui.mapMode.addAMapBackground}** y elige un fondo o un CG. Más adelante, **{ui.mapMode.changeBackground}** lo cambia.

## Añade lugares

Haz clic en **{ui.mapMode.addLocation}** y arrastra sobre el mapa para dibujar un lugar. Para una forma personalizada, elige **{ui.explorationCanvas.shape}**, haz clic en sus esquinas y pulsa **Intro**. Arrastra un lugar para moverlo, o sus tiradores para cambiar su tamaño. Selecciona un lugar para editarlo.

### Qué tiene un lugar

- **{ui.mapMode.name}**: para ti.
- **{ui.mapMode.sceneToPlay}**: la escena a la que lleva. Puedes elegir una, o **{ui.mapMode.createAScene}** (pide un nombre, crea una escena y la enlaza). **{ui.mapMode.editScene}** la abre.
- **{ui.mapMode.returnToMapWhenFinished}**: el jugador vuelve al mapa después de esta escena y de las escenas a las que lleve. Un momento Final sigue terminando el juego.
- **{ui.mapMode.availability}**:
  - **{ui.mapMode.availableUnderACondition}**: una condición de variable o de objeto. **{ui.mapMode.otherwise}** puedes **{ui.mapMode.hideLocation}** o **{ui.mapMode.showAsLocked}**, y en uno bloqueado puedes escribir un **{ui.mapMode.messageWhenLocked}** (vacío significa que no pasa nada).
- **{ui.mapMode.appearanceAndVisits}**: una **{ui.mapMode.labelOnHover}**, un **{ui.mapMode.highlight}** (**{ui.mapMode.glow}**, **{ui.mapMode.outline}** o **{ui.mapMode.none}**) y **{ui.mapMode.visitOnlyOnce}** (un lugar visitado una vez sigue visible pero no se puede volver a usar).
- **{ui.mapMode.duplicate}** y **{ui.mapMode.delete}**.

Un lugar es una zona de exploración, así que un lugar que conserva una interacción personalizada de un proyecto antiguo se edita como una zona (consulta [Exploración](/novelworks-docs/es/features/exploration/)). La lista de la izquierda también tiene secciones plegables de «Objetos decorativos» (objetos colocados en el mapa) y **{ui.leftPanel.characters}**. Un cuadro «Revisa tu mapa» en la parte inferior de los ajustes lista los problemas.

## ¿Cuándo pueden abrir el mapa los jugadores?

En los ajustes del mapa (sin ningún lugar seleccionado), **{ui.mapMode.mapButtonAvailable}**:

| Ajuste | Qué significa |
|---|---|
| **{ui.map.fromTheStart}** | Los jugadores pueden abrir el mapa con su botón desde el inicio del juego. |
| **{ui.map.afterFirstShown}** | El botón Mapa aparece después de que la historia llegue por primera vez a un momento «{tx.moments.showMap}». |
| **{ui.map.storyOnly}** | Solo un momento «{tx.moments.showMap}» de tu historia abre el mapa. No se muestra ningún botón Mapa. |

### El momento «{tx.moments.showMap}»

Añade un momento **{ui.moments.showMap}** a una escena para abrir el mapa al instante. También hace que aparezca el botón Mapa cuando el ajuste es «{tx.map.afterFirstShown}». Los jugadores no ven el momento en sí, y los momentos colocados después en la misma escena nunca se pueden alcanzar. Un mapa abierto de esta forma no tiene botón Atrás: el jugador debe elegir un destino.

Un mapa abierto con su botón tiene un botón **{rt.game.back}** que devuelve al jugador exactamente al momento en que estaba.

## Qué pasa cuando un jugador elige un lugar

El juego va a la escena del lugar. Si **{ui.mapMode.returnToMapWhenFinished}** está activado, el jugador vuelve al mapa cuando la historia se acaba. Un lugar sin escena no hace nada. Consulta también [Botón del mapa](/novelworks-docs/es/game-ui/map-button/) para el aspecto del botón, y la tecla **M** y la entrada del menú de pausa que también abren el mapa.

## Pruebas

- En el espacio de trabajo del Mapa, **{ui.topBar.testMap}** de la barra superior (y el botón del mismo nombre en los ajustes del mapa) juega empezando desde el mapa.
- En el modo Jugar, **{ui.playOverlay.openMap}** abre el mapa aunque los jugadores todavía no pudieran abrirlo en ese punto; Atrás vuelve adonde estabas.

## Advertencias

- La función Mapa está desactivada: un momento «{tx.moments.showMap}» no hace nada.
- Crea tu mapa y añade un fondo; el momento del mapa se eliminó o ya no es una exploración.
- Los jugadores nunca podrán abrir el mapa: el juego no tiene escena inicial, o el botón espera un momento «{tx.moments.showMap}» al que no se puede llegar.
- Añade una imagen de fondo en Mapa.
- Un lugar va a una escena pero no hay ninguna elegida, o va a una escena que se eliminó.
- Dibuja al menos una zona para que el jugador haga clic.
