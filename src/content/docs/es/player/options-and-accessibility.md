---
title: Opciones y accesibilidad
description: Qué hace cada opción del jugador y cómo ayuda el juego a la accesibilidad.
---

Los jugadores abren **{rt.game.options}** desde la pantalla de título, el menú de pausa o el menú rápido (si muestras su botón Opciones). **Esc** la cierra. Cada cambio se aplica al instante y se conserva **por juego, en el navegador**. Si el navegador bloquea el almacenamiento, solo dura la sesión. Una línea de muestra enseña cómo se verá el texto. **{rt.optionsScreen.defaults}** devuelve todas las opciones a su valor inicial.

El aspecto de la pantalla lo decides tú: [Opciones del jugador](/novelworks-docs/es/game-ui/options/). No puedes ocultar ninguna opción.

## Las opciones

### Tamaño del texto

Normal, Grande (x1,15) o Muy grande (x1,3). Cambia la escala del diálogo, los nombres, las elecciones, las etiquetas de zona, los avisos y el Historial. Si el texto ya no cabe en tu cuadro de diálogo, se desplaza.

### Velocidad del texto

Lenta, Normal, Rápida, Muy rápida o Instantánea (mira [Aparición del texto](/novelworks-docs/es/player/text-reveal/)). Si el jugador no ha elegido ninguna, decide el sistema: Instantánea cuando pide reducir el movimiento, Normal en los demás casos.

### Velocidad del modo Auto

Lenta, Normal o Rápida. Cambia la espera de [Auto](/novelworks-docs/es/player/auto-and-skip/).

### Fuente adaptada a la dislexia

Cambia **todo el juego** a una fuente diseñada para que resulte más fácil de leer a las personas con dislexia, **sea cual sea la fuente que hayas elegido**. Para los caracteres que no tiene (como el chino o el japonés), se usan las fuentes del sistema.

### Alto contraste

El texto se vuelve blanco y el color principal, amarillo. El cuadro de texto, las elecciones, los menús, los botones y las ranuras tienen fondo negro con borde blanco, y se quitan las sombras y la transparencia. Los nombres de quien habla son amarillos. Los botones sobre los que está el puntero o que tienen el foco se vuelven amarillos con texto negro. Las pantallas de pausa, inventario, guardado, historial, opciones y final tienen fondo negro.

### Volúmenes

**{rt.optionsScreen.musicVolume}**, **{rt.optionsScreen.soundVolume}** (sonidos ambiente y efectos de sonido) y **{rt.optionsScreen.voiceVolume}**, de 0 a 100, con 100 como valor predeterminado. Estos tres controles deslizantes solo aparecen si el juego tiene sonidos. Consulta [Sonido y música](/novelworks-docs/es/writing/sound/).

## Otras funciones de accesibilidad

- **Teclado**: se puede jugar entero sin ratón. Mira [Teclas y pantallas táctiles](/novelworks-docs/es/player/keys-and-touch/). A las zonas de una exploración se llega con **Tab**.
- **Lectores de pantalla**: el texto de la historia se lee una vez por línea, como palabras sencillas, sin su formato; las pantallas se anuncian como diálogos, los avisos se anuncian y los atajos de teclado se indican en los botones.
- **Movimiento reducido**: cuando el sistema lo pide, el texto aparece de golpe por defecto (se sigue usando la velocidad de texto que elija el jugador) y las letras del [texto enriquecido](/novelworks-docs/es/writing/rich-text/) no tiemblan ni ondulan. La cámara va directamente a su último plano, sin el temblor de la cámara en mano. Los [efectos](/novelworks-docs/es/writing/effects/) no se reproducen y las partículas se quedan quietas. Los [créditos](/novelworks-docs/es/game-ui/credits/) no se desplazan solos: se muestran como una lista que se puede recorrer. Las diapositivas de introducción y la pantalla inicial se desvanecen de forma sencilla.
- **{rt.contentWarning.title}**: puedes avisar a los jugadores de temas delicados: [Advertencia de contenido](/novelworks-docs/es/game-ui/content-warning/).
- **Seleccionar texto**: el juego no deja que los jugadores seleccionen ni copien su texto.
