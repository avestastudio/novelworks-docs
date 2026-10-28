import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// Published on GitHub Pages: https://avestastudio.github.io/novelworks-docs/
export default defineConfig({
  site: 'https://avestastudio.github.io',
  base: '/novelworks-docs',
  integrations: [
    starlight({
      title: {"en": "NovelWorks Docs", "fr": "Documentation NovelWorks", "es": "Documentación de NovelWorks", "pt-BR": "Documentação do NovelWorks", "zh-CN": "NovelWorks 使用文档", "ru": "Документация NovelWorks"},
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
        ru: { label: 'Русский', lang: 'ru' }
      },
      sidebar: [
        { label: 'Getting started', translations: {"fr": "Premiers pas", "es": "Primeros pasos", "pt-BR": "Primeiros passos", "zh-CN": "入门指南", "ru": "Начало работы"}, items: ['getting-started/install-and-activate', 'getting-started/demo-edition', 'getting-started/first-visual-novel', 'getting-started/tour-of-the-editor', 'getting-started/saving-and-undo'] },
        { label: 'Writing your story', translations: {"fr": "Écrire votre histoire", "es": "Escribir tu historia", "pt-BR": "Escrevendo sua história", "zh-CN": "编写故事", "ru": "Написание истории"}, items: ['writing/scenes', 'writing/moments-and-dialogue', 'writing/characters', 'writing/assets', 'writing/import-a-script', 'writing/search'] },
        { label: 'Branching', translations: {"fr": "Branches et choix", "es": "Ramificaciones", "pt-BR": "Ramificações", "zh-CN": "故事分支", "ru": "Ветвление"}, items: ['branching/choices', 'branching/variables', 'branching/conditions', 'branching/jumps', 'branching/endings', 'branching/story-map'] },
        { label: 'Gameplay features', translations: {"fr": "Fonctionnalités de jeu", "es": "Funciones del juego", "pt-BR": "Funcionalidades do jogo", "zh-CN": "游戏功能", "ru": "Игровые возможности"}, items: ['features/features-panel', 'features/exploration', 'features/inventory', 'features/map'] },
        { label: 'Game UI', translations: {"fr": "Interface du jeu", "es": "Interfaz del juego", "pt-BR": "Interface do jogo", "zh-CN": "游戏界面", "ru": "Интерфейс игры"}, items: ['game-ui/game-ui-editor'] },
        { label: 'Player experience', translations: {"fr": "Expérience de jeu", "es": "Experiencia del jugador", "pt-BR": "Experiência do jogador", "zh-CN": "玩家体验", "ru": "Возможности игрока"}, items: ['player/save-and-load', 'player/history', 'player/auto-and-skip', 'player/text-reveal'] },
        { label: 'Testing', translations: {"fr": "Tester le jeu", "es": "Pruebas", "pt-BR": "Testes", "zh-CN": "游戏测试", "ru": "Тестирование"}, items: ['testing/play', 'testing/test-saves-and-read-lines', 'testing/problems'] },
        { label: 'Export & publish', translations: {"fr": "Exporter et publier", "es": "Exportar y publicar", "pt-BR": "Exportar e publicar", "zh-CN": "导出与发布", "ru": "Экспорт и публикация"}, items: ['publish/web-export', 'publish/itch-io'] },
        { label: 'Reference', translations: {"fr": "Référence", "es": "Referencia", "pt-BR": "Referência", "zh-CN": "参考资料", "ru": "Справочник"}, items: ['reference/keyboard-shortcuts', 'reference/faq', 'reference/report-a-bug'] }
      ]
    })
  ]
})
