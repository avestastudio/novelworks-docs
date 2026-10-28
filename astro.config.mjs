import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// Published on GitHub Pages: https://avestastudio.github.io/novelworks-docs/
export default defineConfig({
  site: 'https://avestastudio.github.io',
  base: '/novelworks-docs',
  integrations: [
    starlight({
      title: 'NovelWorks Docs',
      description: 'Learn to make visual novels with NovelWorks, no code needed.',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['@fontsource/manrope/400.css', '@fontsource/manrope/600.css', '@fontsource/manrope/800.css', './src/styles/brand.css'],
      components: { Footer: './src/components/Footer.astro' },
      // English lives at the root; other languages in /fr/, /es/… Pages not translated yet show the English page with a notice.
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        es: { label: 'Español', lang: 'es' },
        'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        ru: { label: 'Русский', lang: 'ru' }
      },
      sidebar: [
        { label: 'Getting started', items: ['getting-started/install-and-activate', 'getting-started/demo-edition', 'getting-started/first-visual-novel', 'getting-started/tour-of-the-editor', 'getting-started/saving-and-undo'] },
        { label: 'Writing your story', items: ['writing/scenes', 'writing/moments-and-dialogue', 'writing/characters', 'writing/assets', 'writing/import-a-script', 'writing/search'] },
        { label: 'Branching', items: ['branching/choices', 'branching/variables', 'branching/conditions', 'branching/jumps', 'branching/endings', 'branching/story-map'] },
        { label: 'Gameplay features', items: ['features/features-panel', 'features/exploration', 'features/inventory', 'features/map'] },
        { label: 'Game UI', items: ['game-ui/game-ui-editor'] },
        { label: 'Player experience', items: ['player/save-and-load', 'player/history', 'player/auto-and-skip', 'player/text-reveal'] },
        { label: 'Testing', items: ['testing/play', 'testing/test-saves-and-read-lines', 'testing/problems'] },
        { label: 'Export & publish', items: ['publish/web-export', 'publish/itch-io'] },
        { label: 'Reference', items: ['reference/keyboard-shortcuts', 'reference/faq', 'reference/report-a-bug'] }
      ]
    })
  ]
})
