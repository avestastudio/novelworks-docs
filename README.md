# NovelWorks docs

Documentation site for NovelWorks (Astro Starlight). Languages: English (root), fr, es, pt-br, zh-cn, ru. Untranslated pages fall back to English.

## First time

    npm install astro @astrojs/starlight sharp @fontsource/manrope
    npm run dev      # http://localhost:4321/novelworks-docs/
    npm run build

## Add a translation

Copy a page from `src/content/docs/` to `src/content/docs/<lang>/` with the same path, then translate it. Keep button and menu names exactly as they appear in the editor.

## Footer on every page

"No AI-generated content. AI tools were used to help write the code." (src/components/Footer.astro)
