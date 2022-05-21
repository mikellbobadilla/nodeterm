const { readDir } = require('./read-dir')
const { readFile } = require('./read-file')
const { themes } = require('../settings/themes/index')
const { getPathFont } = require('../settings/index')

function getTheme(theme) {
  const findTheme = readDir(themes).find((el) => el === `${theme}.json`)
  return readFile(`${themes}\\${findTheme}`, 'utf8')
}

function getFonts() {
  const font = readFile(getPathFont(), 'utf8')
  return font
}

module.exports = { getTheme, getFonts }
