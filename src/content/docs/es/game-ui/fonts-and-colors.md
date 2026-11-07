---
title: Fuentes y colores
description: La fuente, el color del texto, el color principal y el estilo de botón que usan todas las pantallas.
---

**{ui.gameUI.fontsColors}** reúne lo que comparten todas las pantallas. Cada una de las demás puede cambiar una parte.

## Texto

- **{ui.gameUIInspector.font}**: cuatro fuentes, cada una mostrada con su propio estilo.

| Nombre | Estilo | Fuente | Licencia |
|---|---|---|---|
| {ui.gameUIInspector.fontClean} (por defecto) | Sans-serif moderna | Inter | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontClassic} | Serif, para un aire literario | Lora | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontRounded} | Suave, amable | Nunito | SIL Open Font License 1.1 |
| {ui.gameUIInspector.fontTypewriter} | Máquina de escribir | Courier Prime | SIL Open Font License 1.1 |

  Los archivos de las fuentes y los textos de sus licencias van incluidos en cada juego exportado.

- **{ui.gameUIInspector.textColor}**: el color del texto de todo el juego. Por defecto es blanco. Las pantallas que dicen «{tx.gameUIInspector.sameAsTheTextColor}» lo siguen.

### Idiomas y fuentes

**{ui.gameUIInspector.fontClean}**, **{ui.gameUIInspector.fontClassic}** y **{ui.gameUIInspector.fontRounded}** cubren las letras latinas con acentos, el cirílico y el vietnamita. Solo **{ui.gameUIInspector.fontClean}** cubre también el griego. **{ui.gameUIInspector.fontTypewriter}** cubre únicamente las letras latinas (con acentos). Para los caracteres que una fuente no tiene, como el chino y el japonés, el juego usa las fuentes del sistema del jugador (y, cuando el idioma del juego es el japonés, primero las fuentes japonesas del sistema).

Todavía no puedes importar tu propia fuente.

Los jugadores que activan la fuente adaptada a la dislexia en las opciones del jugador reciben una fuente propia, sea cual sea la que elegiste aquí.

## Colores y botones

- **{ui.gameUIInspector.primaryColor}**: «Botones, elementos destacados y la flecha de “continuar”». También da a la pantalla de título su resplandor. Por defecto es un rosa.
- **{ui.gameUIInspector.buttonStyle}**: **{ui.gameUIInspector.pill}** (totalmente redondeado, el valor por defecto), **{ui.gameUIInspector.rounded}** (esquinas suaves), **{ui.gameUIInspector.square}** (esquinas afiladas) o **{ui.gameUIInspector.text}** (sin caja, solo las palabras). Se «usa en todos los menús y elecciones, salvo que una pantalla elija el suyo».

No hay un color de fondo global: los fondos se definen en cada pantalla.

## La vista previa

La vista previa de esta página muestra el cuadro de diálogo sobre tu primer fondo. Usa **{ui.gameUIMode.longTextAvatar}** para comprobar las líneas largas.

## Restablecer

**{ui.gameUIInspector.resetToDefault}** en esta página solo restablece las fuentes y los colores. Las demás pantallas conservan sus ajustes.
