---
title: Publish on itch.io
description: Upload your exported game to itch.io so people can play it in the browser.
---

The [web export](/novelworks-docs/publish/web-export/) makes a `.zip` with `index.html` at its root, which is the layout itch.io expects for browser games. NovelWorks itself does not upload anything: you do it on the itch.io web site.

:::note
These steps describe itch.io's own web site, not NovelWorks, and itch.io may change its pages. If something differs, itch.io's own help is the reference.
:::

## Upload

1. On itch.io, create a new project (or open an existing one).
2. For the kind of project, choose **{ui.exportDialog.hTML}** (a game that plays in the browser).
3. Upload the `.zip` made by NovelWorks, and mark it as a file that **will be played in the browser**.
4. Set the viewport to the **recommended game size** that NovelWorks showed when the export finished (it is your project's resolution). Options such as a fullscreen button are up to you: the game already has its own.
5. Save and open the page, and check the game on a computer and on a phone.

## Good to know

- Players' saves live in their browser, for the web address of your game. If the address stays the same when you update, they are kept (this depends on itch.io, which this documentation cannot promise).
- Do not upload only `index.html`: every file of the export is needed.
- Your game plays inside a frame. If you give the page a larger size than the recommended game size, the game is scaled to fit, with black bars.
- NovelWorks games always start with the short "Made with NovelWorks" screen.

## Test before you publish

Use **Test in browser** at the end of the export, or play the unzipped folder by opening `index.html`.
