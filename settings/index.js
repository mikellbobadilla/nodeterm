const fs = require('fs')

const pathThemes = `${__dirname}\\themes`
const pathFonts = `${__dirname}\\fonts`
const pathResetFile = `${__dirname}\\reset-file`

const getFiles = (path) => fs.readdirSync(path)
const readFile = (path) => fs.readFileSync(path, 'utf8')

const getTheme = (t) => {
  const theme = getFiles(pathThemes).find((theme) => theme === `${t}.json`)
  return JSON.parse(readFile(`${pathThemes}\\${theme}`))
}

// maybe need refactor "should return font name, not json file"
const getFont = () => {
  const font = readFile(`${pathFonts}\\fonts.json`)
  if (font === undefined) throw new Error('Font not found')
  return JSON.parse(font)
}

const getResetFile = () => {
  const resetFile = fs.readFileSync(`${pathResetFile}\\settings.json`)
  return JSON.parse(resetFile)
}

module.exports = {
  getTheme,
  getFont,
  getResetFile,
}
