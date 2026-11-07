import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import { readFileSync } from 'node:fs'
import { unified } from '@astrojs/markdown-remark'
import uiNames from './src/plugins/ui-names.mjs'

const structure = JSON.parse(readFileSync(new URL('./docs-structure.json', import.meta.url), 'utf8'))

// Published on GitHub Pages: https://avestastudio.github.io/novelworks-docs/
export default defineConfig({
  site: 'https://avestastudio.github.io',
  base: '/novelworks-docs',
  markdown: { processor: unified({ remarkPlugins: [uiNames] }) },
  integrations: [
    starlight({
      title: {"en": "NovelWorks Docs", "fr": "Documentation NovelWorks", "es": "Documentación de NovelWorks", "pt-BR": "Documentação do NovelWorks", "zh-CN": "NovelWorks 使用文档", "ru": "Документация NovelWorks", "ja": "NovelWorks ドキュメント"},
      description: 'Learn to make visual novels with NovelWorks, no code needed.',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['@fontsource/manrope/400.css', '@fontsource/manrope/600.css', '@fontsource/manrope/800.css', './src/styles/brand.css'],
      // English lives at the root; the five other locales each contain the full page set.
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        es: { label: 'Español', lang: 'es' },
        'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        ru: { label: 'Русский', lang: 'ru' },
        ja: { label: '日本語', lang: 'ja' }
      },
      // Generated from docs-structure.json. Stub pages (drafts) are not published, so they are not listed.
      sidebar: structure.sections.map((section) => ({
        label: section.label,
        translations: section.translations,
        items: section.pages.filter((page) => page.status !== 'stub').map((page) => page.slug)
      }))
    })
  ]
})
