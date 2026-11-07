// Writes data/glossary/<language>.md: how the editor itself says the main words in each language, so the translated
// documentation uses the same words as the buttons. Used as a brief by translators.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
const keys = {
  Scenes: 'leftPanel.scenes', Images: 'leftPanel.assets', Characters: 'leftPanel.characters', Variables: 'leftPanel.variables', Items: 'leftPanel.items', Features: 'leftPanel.features',
  Story: 'topBar.story', 'Story map': 'topBar.storyMap', 'Game UI': 'topBar.gameUI', Play: 'topBar.play', 'Play from here': 'topBar.playFromHere', Save: 'topBar.save', Visual: 'topBar.visual', Script: 'topBar.script',
  'Dialogue (moment)': 'moments.dialogue', 'Choice (moment)': 'moments.choice', 'If… (moment)': 'moments.condition', 'Jump (moment)': 'moments.jump', 'Ending (moment)': 'moments.ending', 'Exploration (moment)': 'moments.exploration', 'Item (moment)': 'moments.item', 'Show map (moment)': 'moments.showMap',
  Score: 'variables.number', Fact: 'variables.yesNo', Yes: 'variables.yes', No: 'variables.no', 'On stage': 'stage.castTitle', Narrator: 'stageControls.narrator', Background: 'timeline.chartBackground',
  'Changes apply': 'stage.scopeLabel', 'From here on': 'stage.scopeFollowing', 'This moment only': 'stage.scopeOnlyHere', Note: 'momentInspector.note', Summary: 'sceneInspector.summary', 'Start scene': 'scenesTab.startScene', unreachable: 'scenesTab.unreachable',
  'Make the game remember something': 'memory.remember', 'Try it': 'memory.tryTitle', 'Add a case': 'conditionCases.addCase', 'Game endings': 'endings.title', 'Tidy up': 'storyMap.tidyUp',
  Background_image: 'assetTypes.background', 'Character sprite': 'assetTypes.characterSprite', Prop: 'assetTypes.prop', Avatar: 'assetTypes.avatar', Expression: 'stageCharacterInspector.expression', 'Name color': 'characterInspector.nameColor',
  Backups: 'native.menu.restoreFromBackup', 'Inventory (feature)': 'shared.features.inventory', 'Map (feature)': 'shared.features.map', 'Quick menu': 'quickMenu.title', 'Title screen': 'gameUI.titleScreen', 'Dialogue box': 'gameUI.dialogueBox', 'Pause menu': 'gameUI.pauseMenu', 'History': 'gameUI.history', 'Options': 'gameUI.options', Intro: 'gameUI.creatorSplash', 'Content warning': 'gameUI.contentWarning', Notices: 'gameUI.notices'
}
mkdirSync('data/glossary', { recursive: true })
for (const l of ['en', 'fr', 'es', 'pt-BR', 'zh-CN', 'ru', 'ja']) {
  const c = JSON.parse(readFileSync(`data/ui/editor-${l}.json`, 'utf8'))
  const rows = Object.entries(keys).map(([en, k]) => `| ${en.replace('_image', '')} | ${(c[k] ?? '?').trim()} |`)
  writeFileSync(`data/glossary/${l}.md`, `# Words of the editor in ${l}\n\nUse these words in the translated documentation: they are what the buttons say.\n\n| English | ${l} |\n|---|---|\n${rows.join('\n')}\n`)
}
console.log('glossaries written')
