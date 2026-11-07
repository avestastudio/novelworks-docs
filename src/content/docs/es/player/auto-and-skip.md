---
title: Auto y Saltar
description: Deja que el juego lea solo, o salta las líneas ya leídas.
---

## Actívalos

- **A** activa o desactiva **{rt.game.auto}**, y **S** activa o desactiva **{rt.game.skip}**.
- Los botones **{rt.game.auto}** y **{rt.game.skip}** del [menú rápido](/novelworks-docs/es/game-ui/quick-menu/) hacen lo mismo, si los muestras. Se ven pulsados mientras un modo está activado. Ocultar un botón nunca quita su tecla.
- Mantener pulsada la tecla **Ctrl** salta mientras se mantiene.
- Solo hay un modo activado a la vez. Se ignoran mientras el juego está en pausa o cuando hay una pantalla abierta.

## Auto

Auto pasa a la línea siguiente por sí solo, tras una espera que depende de la longitud de la línea, **una vez que la línea ha terminado de aparecer**:

- aproximadamente 1 segundo más 55 milisegundos por carácter, entre 1,5 y 10 segundos. Por ejemplo, un «{tx.numberInput.yes}» corto espera 1,5 segundos, y una línea de 100 caracteres unos 6,5 segundos;
- luego se multiplica por la **{rt.optionsScreen.autoSpeed}** del jugador: Lenta (x1,5, es decir, hasta 15 segundos), Normal (x1), Rápida (x0,6, es decir, hasta 0,9 segundos).

Auto se detiene en un momento que no es una línea de diálogo: una elección, una exploración o un final.

## Saltar

Saltar recorre a toda prisa las líneas **que el jugador ya ha leído**, terminando el texto de golpe y acortando las animaciones. Se detiene en la primera línea que no ha leído, y en una elección, una exploración o un final.

- Una línea cuenta como leída en cuanto aparece, y el registro se guarda **por juego, en el navegador**, no por partida. Se mantiene entre partidas nuevas.
- Si cambias el texto o a quien habla de una línea, esa línea vuelve a contar como no leída.
- Los jugadores no pueden restablecer el registro por sí mismos, salvo borrando los datos del sitio. En el editor, **{ui.playOverlay.resetReadLines}** lo hace para tus pruebas.

## Qué los detiene

Un clic o una tecla que hace avanzar la historia (**Espacio**, **Intro**, de **1** a **6**), abrir cualquier pantalla (Historial, Opciones, Guardar, Cargar, el inventario, el menú de pausa) y cargar una partida. Una escena nueva no los detiene.

## Voz

Un momento de diálogo no tiene ajuste de voz ni de sonido, así que Auto espera solo al texto.
