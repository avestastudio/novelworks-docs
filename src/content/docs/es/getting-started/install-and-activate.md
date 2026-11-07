---
title: Instalar y activar
description: Descarga NovelWorks, ábrelo por primera vez y desbloquea la exportación con tu clave de descarga.
---

## ¿Qué archivo descargo?

| Ordenador | Archivo |
|---|---|
| Mac con Apple Silicon (M1, M2, M3, M4…) | `Novelworks-<version>-mac-arm64.dmg` |
| Mac con Intel | `Novelworks-<version>-mac-x64.dmg` |
| Windows 10 / 11 | `Novelworks-<version>-win-x64.exe` |

La demo gratuita tiene los mismos tres archivos con `-demo` después del número de versión (por ejemplo `Novelworks-<version>-demo-win-x64.exe`). Consulta [la demo gratuita](/novelworks-docs/es/getting-started/demo-edition/).

¿No sabes qué Mac tienes? Abre el menú Apple → **Acerca de este Mac**. Si pone «Chip: Apple M…», es Apple Silicon.

## La primera vez que lo abres

### En un Mac

La app para Mac **todavía no está firmada con un Apple Developer ID** (solo tiene una firma ad hoc), así que macOS puede negarse a abrirla la primera vez y mostrar un aviso. Los pasos exactos dependen de tu versión de macOS.

1. Abre el `.dmg` y arrastra **Novelworks** a **Aplicaciones**.
2. Ábrelo desde Aplicaciones.
3. Si macOS lo bloquea, busca en **Ajustes del Sistema → Privacidad y seguridad** un mensaje sobre Novelworks con un botón para abrirlo de todos modos. En versiones antiguas de macOS, lo habitual es hacer clic derecho en la app y elegir la opción Abrir.

### En Windows

Ejecuta el `.exe`. El instalador te deja elegir la carpeta de instalación, instala solo para tu usuario y añade un acceso directo en el escritorio. Si Windows muestra un aviso de seguridad al ejecutarlo, normalmente ofrece una forma de ejecutarlo de todos modos. El texto depende de tu versión de Windows.

## Elige el idioma del editor

La primera vez, NovelWorks te pregunta **{ui.languageDialog.title}**. Elige un idioma y haz clic en **{ui.languageDialog.continue}**. Si cierras la ventana, NovelWorks usa el idioma de tu ordenador. Puedes cambiarlo después en **{ui.menu.view} → {ui.native.menu.language}**. Luego verás la [pantalla de proyectos](/novelworks-docs/es/getting-started/projects-screen/).

## Activa NovelWorks (versión completa)

La versión completa pide la **clave de descarga** que viene con tu compra. Sin ella puedes abrir, editar y jugar tus proyectos. Solo la **exportación** está bloqueada: el comando de exportar del menú Archivo abre la ventana de activación.

1. Abre **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}**. La misma ventana se abre desde la pantalla de proyectos y desde la ventana Acerca de.
2. Pega tu clave de descarga en **{ui.activateDialog.downloadKey}**. También puedes pegar la dirección completa de tu página de descarga.
3. Haz clic en **{ui.activateDialog.activate}**.

Dónde encontrar la clave: abre en tu navegador el correo de tu compra, abre la página de descarga de NovelWorks y copia la clave de descarga o la dirección de la página.

![Ventana Activar NovelWorks con el campo de la clave de descarga vacío](/novelworks-docs/screenshots/activate-novelworks.png)

Conviene saber:

- La activación contacta con el servidor de activación, así que necesita conexión a internet. Una vez activado, NovelWorks comprueba tu licencia en tu ordenador en cada inicio, así que puedes exportar sin internet.
- La ventana de activación dice que **una clave funciona en hasta 3 ordenadores**, y que puedes desactivar un ordenador para usar tu clave en otro. Para hacerlo, abre la misma ventana y haz clic en **{ui.activateDialog.deactivateThisDevice}**. Esto también contacta con el servidor, así que necesita conexión a internet.
- Si la ventana te dice que la clave ya está activada en el número máximo de ordenadores, desactiva NovelWorks en otro ordenador, o usa **{ui.activateDialog.contactUs}** en la ventana.

Si la activación falla, la ventana muestra un mensaje que dice qué hacer. Consulta también las [preguntas frecuentes](/novelworks-docs/es/reference/faq/).
