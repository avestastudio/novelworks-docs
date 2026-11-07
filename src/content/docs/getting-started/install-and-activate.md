---
title: Install and activate
description: Download NovelWorks, open it for the first time and unlock exporting with your download key.
---

## Which file do I download?

| Computer | File |
|---|---|
| Mac with Apple Silicon (M1, M2, M3, M4…) | `Novelworks-<version>-mac-arm64.dmg` |
| Mac with Intel | `Novelworks-<version>-mac-x64.dmg` |
| Windows 10 / 11 | `Novelworks-<version>-win-x64.exe` |

The free demo has the same three files with `-demo` after the version number (for example `Novelworks-<version>-demo-win-x64.exe`). See [the free demo](/novelworks-docs/getting-started/demo-edition/).

Not sure which Mac you have? Open the Apple menu → **About This Mac**. "Chip: Apple M…" means Apple Silicon.

## The first time you open it

### On a Mac

The Mac app is **not signed with an Apple Developer ID** yet (it has only an ad-hoc signature), so macOS may refuse to open it the first time and show a warning. The exact steps depend on your version of macOS.

1. Open the `.dmg` and drag **Novelworks** into **Applications**.
2. Open it from Applications.
3. If macOS blocks it, look in **System Settings → Privacy & Security** for a message about Novelworks with a button to open it anyway. On older versions of macOS, right-clicking the app and choosing **Open** is the usual way.

### On Windows

Run the `.exe`. The installer lets you choose the install folder, installs for your user only and adds a desktop shortcut. If Windows shows a security warning when you run it, it normally offers a way to run it anyway. The wording depends on your version of Windows.

## Choose the editor language

The very first time, NovelWorks asks **{ui.languageDialog.title}**. Pick a language and click **{ui.languageDialog.continue}**. If you close the window instead, NovelWorks follows your computer's language. You can change it later in **{ui.menu.view} → {ui.native.menu.language}**. You will then see the [projects screen](/novelworks-docs/getting-started/projects-screen/).

## Activate NovelWorks (full version)

The full version asks for the **download key** that comes with your purchase. Without it you can still open, edit and play your projects. Only **exporting** is locked: the export command of the File menu opens the activation window instead.

1. Open **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}**. The same window opens from the projects screen and from the About window.
2. Paste your download key in **{ui.activateDialog.downloadKey}**. You can also paste the whole address of your download page.
3. Click **{ui.activateDialog.activate}**.

Where to find the key: open your purchase email in your browser, then open the NovelWorks download page, and copy the download key or the page address.

![Activate NovelWorks dialog with an empty download key field](/novelworks-docs/screenshots/activate-novelworks.png)

Good to know:

- Activation contacts the activation server, so it needs an internet connection. Once activated, NovelWorks checks your license on your computer at every start, so you can export without internet.
- The activation window says that **a key works on up to 3 computers**, and that you can deactivate one computer to use your key on another. To do that, open the same window and click **{ui.activateDialog.deactivateThisDevice}**. This also contacts the server, so it needs an internet connection.
- If the window tells you the key is already activated on the maximum number of computers, deactivate NovelWorks on another computer, or use **{ui.activateDialog.contactUs}** in the window.

If activation fails, the window shows a message that says what to do. See also the [FAQ](/novelworks-docs/reference/faq/).
