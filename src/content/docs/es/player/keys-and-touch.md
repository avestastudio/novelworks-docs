---
title: Teclas y pantallas táctiles
description: Todas las teclas, acciones del ratón y gestos táctiles que los jugadores pueden usar en el juego.
---

Los atajos se ignoran mientras se mantiene pulsada la tecla **Ctrl**, **Cmd** o **Alt** (salvo mantener **Ctrl** sola para saltar).

## Teclado

| Tecla | Qué hace |
|---|---|
| **Espacio**, **Intro** | Termina el texto y después avanza. En un botón con el foco, lo pulsa. En una zona con el foco, la usa. |
| **1** a **6** | Elige la opción número N en pantalla. La primera pulsación mientras el texto aparece lo termina. |
| **Esc** | Abre o cierra el menú de pausa. Cierra el inventario, el Historial, las Opciones y Guardar/Cargar. |
| **H** | Abre o cierra el Historial. |
| **A** | Activa o desactiva Auto. |
| **S** | Activa o desactiva Saltar. |
| **Ctrl** (mantenida) | Salta mientras se mantiene. |
| **F5** | Guardado rápido (mientras se juega). |
| **F9** | Carga rápida (incluso desde la pantalla de título). |
| **I** | Abre o cierra el inventario (con la función Inventario). |
| **M** | Abre el mapa (cuando se muestra el botón Mapa). |
| **Tab** | Se mueve entre botones y zonas de exploración. Se queda dentro de Guardar, Historial, Opciones y la advertencia de contenido mientras están abiertos. |
| Flechas, **Inicio**, **Fin**, **Re Pág**, **Av Pág** | En el Historial: desplazan. En Guardar y Cargar: las flechas, **Inicio** y **Fin** se mueven entre ranuras. En Opciones: las flechas cambian el valor. No hacen avanzar la historia. |
| `Delete` / `Backspace` sobre una ranura | Pide confirmación para borrar la partida guardada. |

El juego no tiene tecla de pantalla completa: sirve la del propio navegador (**F11**), o el botón de pantalla completa de la página.

## Ratón

- **Clic izquierdo** sobre la historia: termina el texto, avanza, elige una opción o usa una zona.
- **Clic derecho**: abre o cierra el menú de pausa (el menú del navegador nunca aparece sobre el juego). No hace nada mientras hay abierta una pantalla de Guardar, Cargar, Historial, Opciones o una pregunta.
- **Rueda hacia arriba**: abre el Historial. La rueda hacia abajo no hace nada.
- **Pasar el puntero** sobre una zona de exploración: muestra su resalte y su etiqueta.

## Pantallas táctiles

- **Tocar** avanza, como un clic.
- En una zona de exploración **con etiqueta**, el primer toque muestra la etiqueta y el segundo actúa. Sin etiqueta, un toque actúa.
- El juego no tiene deslizar, pulsación larga ni doble toque. El clic derecho no tiene equivalente táctil: la página añade un botón **{ui.gameUIInspector.menu}** para los dispositivos táctiles.
- Arrastrar desplaza el Historial.

## Qué añade la página web exportada

Un pequeño grupo de botones arriba a la derecha (tenues hasta que se tocan o se pasa el puntero):

- **{ui.gameUIInspector.menu}**, solo en dispositivos táctiles: abre el menú de pausa, ya que no hay clic derecho ni **Esc**.
- **{rt.player.fullscreen}** / **{rt.player.exitFullscreen}**, cuando el navegador lo permite (no en iPhone).

El juego web no tiene botón Salir. El juego se escala para ajustarse a la ventana, con barras negras alrededor, manteniendo su proporción. Necesita JavaScript y un navegador que permita el almacenamiento local para conservar las partidas. Mira [Exportación web](/novelworks-docs/es/publish/web-export/).
