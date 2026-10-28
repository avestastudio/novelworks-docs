# NovelWorks docs

Astro Starlight documentation. English is the source at the root; complete translations
of its 35 pages live in `fr`, `es`, `pt-br`, `zh-cn`, and `ru` (175 translated pages).
English fallback remains configured for Starlight, but the coverage check prevents
publishing an incomplete translation set by mistake.

## Development

    npm ci
    npm run dev
    npm run build

Preview: http://localhost:4321/novelworks-docs/
Production: https://avestastudio.github.io/novelworks-docs/
The editor opens this site with Help → Documentation.

## Translations

Documentation translation is independent of editor localization. Changing the site
language does not change the app language. Editor translations remain a separate
milestone; this repository contains documentation only.

Keep the same relative path under each locale. Translate titles, descriptions, body,
image-placeholder descriptions and homepage cards. Keep NovelWorks button/menu names
in English while the editor is English. Translate explanatory text around them.
Internal documentation links must stay under `/novelworks-docs/<locale>/`.
Sidebar groups and the site title are translated in `astro.config.mjs`.
Starlight provides localized search, theme, navigation and language controls.

Run `npm run check:translations` to check coverage and source links. The build runs it
automatically. It checks technical completeness, not the quality of every translation;
native-speaker review is welcome. Screenshot placeholders remain explicitly marked until those images exist.

## Publication

The existing GitHub Actions workflow builds and deploys pushes to main using Node 24.
Only push when publication is explicitly authorized. Updating these local files alone
does not change the live website.
