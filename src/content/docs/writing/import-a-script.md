---
title: Import and export a script
description: Bring a text file into your project as scenes, and save your whole game as text.
---

You can write your story in any text editor and bring it into NovelWorks, or save the whole game as a text file. The text uses the format of [Script mode](/novelworks-docs/writing/script-mode/).

## Import a script

Choose **{ui.native.menu.file} → {ui.native.menu.importScript}**. (There is no keyboard shortcut. The menu needs an open project.) The **{ui.scriptImport.title}** window opens.

1. Paste your text into the box, or click **{ui.scriptImport.openFile}** and choose a `.txt` or `.md` file. Only plain text is read, not Word files.
2. Click the button at the bottom:
   - if your text has `# Heading` lines, **{ui.scriptImport.importAsScenes}**: each heading becomes a scene of your game;
   - otherwise, **{ui.scriptImport.importInto}** the selected scene: the lines are added at the end of that scene.

NovelWorks cleans the text first: curly double quotes (“ ”) become straight quotes, and a `•` or `·` followed by a space at the start of a line becomes `-`. Then it switches to the Script view and adds your text **as if you had typed it**. It is applied after the usual half-second delay.

### What you get

- A line `Name : text` is dialogue if a character has that name. If not, it is narration, the name is underlined and a quick fix creates the character.
- Unknown backgrounds, scenes, variables and items are underlined too. The button **{ui.scriptMode.createMissing_other}** creates all of them in one click.
- There is no preview step and no question about speakers: speakers are recognized by the rule `Name : text` and your existing characters.
- The import **adds** text. It does not replace what is already there.

:::note
With `# headings`, **each heading makes a new scene**. If your game already has a scene with that name, the new one is named like a duplicated scene: "Name (copy)", then "Name (copy) 2", and so on (accents and capital letters are ignored when comparing names). The existing scene is never changed. A heading that appears twice in the imported text is renamed the same way. A `-> Name` link in the imported text still points to the original scene, so check it.
:::

The import is **one undo step**: one press of **{ui.native.menu.undo}** removes everything it added, even if you leave Script mode afterwards.

## Export the script

Choose **{ui.native.menu.file} → {ui.native.menu.exportScript}**. NovelWorks asks where to save, with the title **{ui.native.exportIpc.saveTheScript}**, and writes a `.txt` file.

- The file holds the **whole game**: every scene under a `# Name` heading, with a blank line between scenes. The Map's hidden scene is not included. You cannot export one scene alone.
- It is written in UTF-8, with the words of your current editor language.
- The default file name is your project's title, with characters a file name cannot hold replaced by `-`.
- Exporting changes nothing in your project.

You can import the exported file again with **{ui.native.menu.importScript}**.
