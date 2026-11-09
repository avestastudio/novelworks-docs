---
title: Web export
description: Turn your game into a folder and a .zip that play in any browser, on computers and phones.
---

Choose **{ui.native.menu.file} → {ui.native.menu.exportForWeb}** (**Cmd+E** / **Ctrl+E**). NovelWorks makes a version of your game that plays in any web browser, on computers and phones: **a folder, and a .zip** ready to share or upload. The command needs an open project and is not available while you are playing.

In the **demo**, you can export games of 5 scenes or fewer that stay within the [demo limits](/novelworks-docs/reference/licenses-and-editions/): see [The free demo](/novelworks-docs/getting-started/demo-edition/). In the full version, NovelWorks asks you to [activate it](/novelworks-docs/getting-started/install-and-activate/) each time you export, until you have.

## The steps

1. **Check the warnings.** If NovelWorks finds something to check, it lists it: "N things to check first. The game still plays, but players might notice." Each line says where ("Park, moment 3 — …"). The button then reads **{ui.exportDialog.exportAnyway}**. See [Problems](/novelworks-docs/testing/problems/).
2. **Choose where to save.** **{ui.exportDialog.saveTo}** shows a folder. NovelWorks remembers the last folder you used for this project, and otherwise proposes the folder that contains your project. **{ui.exportDialog.change}** picks another folder.
3. Click **{ui.exportDialog.export}**. The button reads "{tx.exportDialog.exporting}" until it is done.
4. When it says "{tx.exportDialog.yourWebGameIsReady}", it shows the name of the .zip (to share or upload; the folder next to it holds the same game unzipped) and three buttons:
   - **{ui.exportDialog.showInFinder}**, which reveals the file in your file manager (its name says "Finder" on every computer);
   - **{ui.exportDialog.testInBrowser}**, which plays the exported game from a local address in your default browser;
   - **{ui.exportDialog.done}**.

![The window shown when the export is done.](/novelworks-docs/screenshots/export-done.png)

If some pictures were not found in your project's assets folder, the window lists them ("N pictures were not found… and could not be included"). The export still succeeds.

The window also tells you the **recommended game size** (the resolution of your project), and to check the game in desktop and mobile browsers.

## What you get

NovelWorks creates, inside the folder you chose:

- a folder named after your game, ending in `-web` (for example `The-Rainy-Day-web`), and a `.zip` with the same name. Accents are removed and any other character is replaced by `-`. A title with no Latin letters or digits (in Chinese, Russian or Japanese, for example) becomes `Game-web`;
- inside: `index.html`, `project.js` (your game's data), `game.js` (the player), an `assets` folder with **only the pictures, videos and sounds your game uses**, and a `fonts` folder with the fonts and their license files.

Pictures, videos and sounds are copied as they are, with no resizing or conversion. A character's expressions and avatars are all included when the character appears or speaks. Wardrobe pieces are included only if an outfit wears them.

If an export folder with the same name already exists and is an earlier export, it is replaced. If it is something else, NovelWorks refuses and asks you to pick another folder, so it never overwrites your files.

### Videos and sounds

- NovelWorks never refuses a video because of its size, but it tells you when you import more than 40 MB of video at once: a web game with video takes longer to load.
- Videos, MP3 and OGG sounds go into the `.zip` without compression, so they keep their full weight. WAV files are compressed when that makes them smaller.
- Browsers do not allow sound before the player's first click or key press. Whatever should already be playing starts at that moment.

### What is removed

Your private writing data is blanked before export: moment **notes**, scene **summaries** and **writing status**, the positions of scenes on the story map, and the names of exploration zones. Your story, characters and variables are of course kept, **in plain, readable form** in `project.js`: anyone who opens the files can read all your text and branches.

## Open it

- **On your computer**: double-click `index.html`. It works without a web server.
- **On the web**: upload **every file**, with `index.html` at the root. If `project.js` is missing, the page says "{tx.player.missingProject}"

## What your players get

- A short **NovelWorks splash** first: the logo and "{tx.splash.tagline}", about 3 seconds, skippable. (The editor calls it the "Made with NovelWorks" screen.)
- The page title is your game's title, and the page is in your game language. The page icon is the first letter of the title on your primary color.
- A game that scales to the window, keeping its shape, with black bars around it, on computers and phones. A **{rt.player.fullscreen}** button where the browser allows it, and a **{ui.gameUIInspector.menu}** button on touch screens. See [Keys and touch screens](/novelworks-docs/player/keys-and-touch/).
- Saves in their browser, kept when you update the game. See [Saving and loading](/novelworks-docs/player/save-and-load/).
- It needs JavaScript. Without it, the page says "{tx.export.javascriptRequired}"

## If the export fails

| Message | What to do |
|---|---|
| NovelWorks isn't allowed to save in this folder. | Pick another folder, such as Documents or Desktop. |
| The disk is full. | Free some space, or pick a folder on another disk. |
| This folder doesn't exist anymore. | Pick another folder. |
| A folder named "…" is already there and isn't an earlier export. | Pick another folder. |
| Activate NovelWorks to export games. | Open **{ui.native.role.help} → {ui.native.menu.activateNovelWorks}** |
| The demo exports games of up to 5 scenes, and your project has N. | In the demo only. Delete scenes, or get the full version. |
| This project goes beyond what the demo can export: … | In the demo only. Remove what the message lists, or get the full version. |
| The game could not be exported: … | The reason follows. See [Troubleshooting](/novelworks-docs/reference/troubleshooting/). |

## Publishing

To put your game online, see [Publish on itch.io](/novelworks-docs/publish/itch-io/), or use any web host that serves HTML games.
