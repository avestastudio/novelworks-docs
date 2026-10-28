---
title: "Exploración point-and-click"
description: "Crea zonas pulsables sobre una imagen."
---

Un momento **Exploration** no tiene cuadro de diálogo. Sus zonas pulsables son útiles para misterios y juegos de escape.

1. Añade **Exploration** en la línea de tiempo y elige un fondo.
2. **Arrastra sobre la imagen** para dibujar una zona.
3. Selecciónala y define su acción en el inspector.

## Acciones de una zona

- **Go to a scene**: ir a una escena.
- **Continue**: continuar la historia.
- **Examine**: mostrar un texto breve, con hablante opcional.
- Cambiar una **variable**.
- **Pick up an item**: recoger un objeto y hacer desaparecer la zona; requiere Inventory.
- **Use an item**: actuar solo si se posee el objeto, con consumo opcional; requiere Inventory.

## Opciones

- **Label** al pasar el cursor y resaltado: ninguno, brillo o contorno.
- Ocultar o bloquear según una condición. El bloqueo muestra un mensaje.
- Activar una vez o en cada visita.
- **Props**: imágenes de objetos colocadas en el fondo y enlazadas a una zona.

En un teléfono, el primer toque muestra la etiqueta y el segundo ejecuta la acción.
