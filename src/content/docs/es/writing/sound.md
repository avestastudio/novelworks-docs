---
title: Sonido y música
description: Importa sonidos, define música, sonido ambiente, efectos de sonido y voces en tus momentos, y míralos en la línea de tiempo.
---

## Importar tus sonidos

NovelWorks lee archivos MP3, OGG y WAV. Puedes importarlos:

- con **{ui.assetsTab.import}** en la pestaña **{ui.leftPanel.assets}**;
- soltando los archivos en la ventana del editor;
- con **{ui.sound.import}**, donde eliges un sonido en la pestaña **{ui.sound.tab}**.

Cada sonido tiene un tipo: **{ui.assetTypes.music}**, **{ui.assetTypes.sound}** o **{ui.assetTypes.voice}**. El filtro **{ui.assetsTab.sounds}** de la pestaña **{ui.leftPanel.assets}** los muestra todos.

## La pestaña Sonido

Selecciona un momento y abre la pestaña **{ui.sound.tab}** del [panel del momento](/novelworks-docs/es/writing/moment-panel/).

![La pestaña Sonido de un momento, con la música, el sonido ambiente, los efectos de sonido y la voz de la línea.](/novelworks-docs/screenshots/moment-sound-tab.png)

### Música y sonido ambiente

**{ui.sound.music}** y **{ui.sound.ambience}** suenan en bucle, una sobre otro. Cada uno tiene tres opciones:

| Opción | Qué hace |
|---|---|
| **{ui.sound.continue}** | No cambia nada. La pestaña te dice qué está sonando. |
| **{ui.sound.chooseMusic}** / **{ui.sound.chooseAmbience}** | Inicia un sonido aquí, con un **{ui.sound.volume}** y un **{ui.sound.fade}**. |
| **{ui.sound.stop}** | Detiene el sonido aquí, con un **{ui.sound.fade}**. |

El **{ui.sound.fade}** va de 0 a 10 segundos. Es lo que tarda el sonido anterior en dar paso al nuevo.

**{ui.sound.chooseMusic}** enumera tu música. **{ui.sound.chooseAmbience}** enumera tus efectos de sonido y tu música.

### Efectos de sonido

**{ui.sound.effects}** se oyen una vez, cuando llega el momento, y suenan hasta el final. Un momento puede tener hasta 6. Están disponibles en los momentos que ve el jugador: diálogos, elecciones, exploraciones y finales.

### Voz

**{ui.sound.voice}** está disponible en los momentos de diálogo. La voz se detiene cuando el jugador pasa a la línea siguiente.

Junto a un sonido que hayas elegido, **{ui.sound.listen}** te deja oírlo desde la pestaña.

## Cuánto dura

La música y el sonido ambiente siguen sonando de un momento al siguiente, y de una escena a la siguiente, hasta que un momento los cambia.

Los ajustes de sonido no dependen de **{ui.stage.scopeLabel}**.

## En la línea de tiempo

Unas bandas de color bajo la línea de tiempo muestran hasta dónde llega cada música y cada sonido ambiente. Una banda con huecos significa que el sonido viene de una escena anterior.

![La línea de tiempo con bandas de sonido bajo los momentos.](/novelworks-docs/screenshots/sound-timeline.png)

Otra fila marca los momentos con efectos de sonido o con voz. Haz clic en una banda o en una marca para abrir la pestaña **{ui.sound.tab}** de ese momento.

Para saber qué viene de una escena anterior, el editor sigue el orden de tu lista de escenas. El recorrido real de un jugador puede ser distinto. En el juego, suena lo que el jugador ha oído realmente.

## Música de la pantalla de título

Ve a **{ui.topBar.gameUI}**, **{ui.gameUI.titleScreen}**, **{ui.sound.music}**, y haz clic en **{ui.sound.chooseMusic}**. Suena en bucle en la pantalla de título. El sonido ambiente se detiene ahí.

## En el juego

- Cuando el jugador salta o carga una partida, los efectos de sonido y las voces no se reproducen. La música y el sonido ambiente continúan.
- En modo Auto, el juego espera a que termine la voz.
- En [Opciones](/novelworks-docs/es/game-ui/options/), los jugadores tienen tres volúmenes: **{rt.optionsScreen.musicVolume}**, **{rt.optionsScreen.soundVolume}** y **{rt.optionsScreen.voiceVolume}**. Solo aparecen si tu juego contiene sonidos. El sonido ambiente sigue a **{rt.optionsScreen.soundVolume}**.

## En un juego web

Los navegadores se niegan a iniciar un sonido antes del primer clic o de la primera pulsación de tecla del jugador. El sonido rechazado empieza en ese instante.

## Límites

La demo permite 5 archivos de sonido. Consulta [Demo y edición completa](/novelworks-docs/es/getting-started/demo-edition/).
