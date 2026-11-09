---
title: Exploración
description: "Escenas de apuntar y hacer clic: zonas en las que el jugador hace clic para mirar alrededor, recoger objetos o seguir adelante."
---

Un momento **{ui.moments.exploration}** **no tiene cuadro de texto**: el jugador mira una imagen y hace clic en las **zonas** que dibujas sobre ella. Una zona puede mostrar una línea de texto, cambiar una variable, dar un objeto o llevar a otra escena. Siempre está disponible: no hay que activar ninguna función.

## Añade uno

En la cabecera de la línea de tiempo, abre **{ui.timeline.addOther}** y añade un momento **{ui.moments.exploration}**. Empieza vacío y usa el fondo del momento anterior. Selecciónalo: la pestaña **{ui.inspectorTabs.text}** del inspector muestra **{ui.explorationInspectors.zones}** y **{ui.explorationInspectors.props}** con **+ Zona** y **+ Objeto decorativo**.

![Un momento Exploración: las zonas dibujadas sobre la imagen, y la lista de zonas y objetos decorativos en el inspector.](/novelworks-docs/screenshots/exploration-editor.png)

## Dibuja zonas

Sobre la pantalla del juego, elige **{ui.explorationCanvas.drawZonesAs}**: **{ui.explorationCanvas.rectangle}** o **{ui.explorationCanvas.shape}**.

- **{ui.explorationCanvas.rectangle}**: arrastra sobre la imagen. Un simple clic no crea nada, y una zona de menos del 2 % de la pantalla no se crea.
- **{ui.explorationCanvas.shape}**: haz clic punto por punto alrededor de un objeto. Cierra la forma haciendo clic de nuevo en el primer punto, o pulsando **Intro**. **Esc** cancela. Se necesitan al menos tres puntos.

Una zona queda seleccionada justo después de dibujarla. Arrástrala para moverla. Un rectángulo tiene ocho tiradores para cambiar su tamaño, y una forma tiene un tirador en cada punto. También puedes usar **+ Zona** para añadir un rectángulo en el centro de la pantalla.

Haz clic derecho en una zona para **{ui.contextMenus.duplicateZone}** y **{ui.contextMenus.deleteZone}**, o usa **Cmd+D** / **Ctrl+D** para duplicar y `Delete` para eliminar. Una copia se coloca un poco más abajo y a la derecha, con el nombre «… (copia)». Cada edición es un paso de deshacer.

## El inspector de la zona

- **{ui.explorationInspectors.name}**: solo para ti, para encontrar la zona. Los jugadores nunca lo ven. Las zonas nuevas se llaman «Zona 1», «Zona 2»…
- **{ui.explorationInspectors.label}**: se muestra cuando el puntero está sobre la zona (en móviles: al primer toque).
- **{ui.explorationInspectors.highlight}**: Ninguno, Brillo (por defecto) o Contorno.
- **{ui.explorationInspectors.whenClicked}**, la acción:

| Acción | Qué hace |
|---|---|
| Examinar (por defecto) | Muestra una línea de texto, del narrador o de un personaje que elijas. El siguiente clic vuelve a explorar. |
| Ir a la escena | Sale de la exploración hacia esa escena. |
| Continuar | Sale de la exploración y sigue con el siguiente momento de esta escena. |
| Cambiar una variable | Suma a una Puntuación o establece una variable. Las otras zonas que dependen de ella aparecen, desaparecen o se desbloquean al instante. |
| Recoger un objeto | Pone un objeto en el inventario, con un aviso. La zona y sus objetos decorativos desaparecen entonces para siempre. (Función Inventario.) |
| Usar un objeto | Comprueba el inventario. Elige **{ui.explorationInspectors.itemToUse}**, si **lo gasta**, y un resultado **{ui.explorationInspectors.whenThePlayerHasIt}** (Examinar, Ir a la escena, Continuar o Cambiar una variable). **{ui.explorationInspectors.withoutItOptional}** es la línea que se muestra cuando el jugador no lo tiene; si está vacía, no pasa nada. (Función Inventario.) |

- **{ui.explorationInspectors.works}**: **{ui.explorationInspectors.everyTime}** o **{ui.explorationInspectors.onceOnly}** (tras su primer uso la zona ya no hace nada más, en esta partida).
- **Una condición**: «{tx.explorationInspectors.onlyAvailableWhenAVariableOrAn}». Cuando no se cumple, **{ui.explorationInspectors.otherwise}**: **Oculta** (la zona y sus objetos decorativos no se pueden ver ni pulsar) o **Bloqueada** (muestra su etiqueta pero no se puede usar, con una línea opcional que se muestra al hacer clic).

## Objetos decorativos

Los **{ui.explorationInspectors.props}** son imágenes de objetos (una llave, una carta, un jarrón) colocadas en la escena. No se pueden pulsar: enlaza un objeto decorativo a una zona para ocultarlos juntos.

- **+ Objeto decorativo** abre «{tx.explorationInspectors.chooseAProp}» (imágenes de tipo Objeto decorativo, con una opción para importar). Un objeto decorativo nuevo va al centro.
- Arrastra un objeto decorativo para moverlo, o una esquina para cambiar su tamaño. En el inspector, **{ui.explorationInspectors.size}** es un ancho del 2 al 100 % de la pantalla.
- **{ui.explorationInspectors.hiddenWithZone}**: cuando esa zona queda oculta por su condición, el objeto decorativo también se oculta. **{ui.explorationInspectors.addAZoneAroundIt}** añade una zona alrededor del objeto decorativo.
- **{ui.explorationInspectors.forward}** y **{ui.explorationInspectors.backward}** cambian qué objeto decorativo queda delante. **{ui.explorationInspectors.removeProp}** lo elimina.
- Los objetos decorativos se dibujan detrás de los personajes y encima del fondo.

## Cómo lo ven los jugadores

- Las zonas son **invisibles** hasta que el puntero está sobre ellas (o tienen el foco, o se tocan una vez en una pantalla táctil). Entonces se muestra el resaltado, y la etiqueta aparece en una pequeña marca.
- El cursor se convierte en un puntero sobre una zona, y en un cursor de «no permitido» sobre una bloqueada.
- Mientras se muestra una línea de texto, las zonas no hacen nada: cualquier clic cierra la línea.
- En una pantalla táctil, con una etiqueta el primer toque muestra la etiqueta y el segundo actúa. Sin etiqueta, un toque actúa.
- Con el teclado, **Tab** se mueve entre las zonas e **Intro** usa una. Los lectores de pantalla leen la etiqueta, o «Algo que mirar 1», y «(bloqueada)» en una zona bloqueada.

**No hay una salida de «todo hecho».** El jugador se queda en la exploración hasta que hace clic en una zona que va a una escena, o en Continuar. Asegúrate de que al menos una zona lo haga.

## Advertencias

- Dibuja al menos una zona para que el jugador haga clic.
- **Los jugadores pueden quedarse atascados aquí**: ninguna zona en la que puedan hacer clic lleva a otra escena ni continúa la historia.
- Una zona va a una escena pero no hay ninguna elegida, o va a una escena eliminada; no tiene nada que decir (al examinarla, o al usar un objeto); la examina un personaje eliminado; cambia una variable que no está elegida o se eliminó.
- La condición de una zona comprueba una variable o un objeto que no está elegido, que se eliminó, o cuya función Inventario está desactivada.
- Una zona de recoger o de usar un objeto usa un objeto que no está elegido, que se eliminó, o cuya función Inventario está desactivada.
- Una zona necesita un objeto que los jugadores nunca pueden conseguir, o que nunca se puede usar porque su condición nunca se cumple.
- Un objeto decorativo no tiene imagen, o está vinculado a una zona eliminada.
- Los momentos colocados después de una exploración sin zona Continuar nunca se pueden alcanzar.
- En el mapa, «{tx.shared.map.addABackgroundImageInMap}» y «Los jugadores nunca podrán abrir el mapa…» (consulta [Mapa](/novelworks-docs/es/features/map/)).

## En otros lugares

- En el [mapa de la historia](/novelworks-docs/es/branching/story-map/), las zonas que van a una escena (incluido el resultado de «{tx.shared.exploration.useAnItem}») son flechas con el nombre de la zona como etiqueta. Una zona que solo continúa se queda dentro de la escena: sin flecha.
- En el [modo Guion](/novelworks-docs/es/writing/script-mode-lines/), una exploración es una sola línea `exploration : 3 zones`. Las zonas y los objetos decorativos solo se editan en la vista Visual, y se conservan cuando editas el texto.
- El [Mapa](/novelworks-docs/es/features/map/) usa las mismas zonas, como lugares.
