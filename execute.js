const { path } = require('./util/path')
const { readFile } = require('./util/read-file')
const { writeFile } = require('./util/write-file')
const file = JSON.parse(readFile(path, 'utf8'))
const { getTheme, getFonts } = require('./util/get-utils')

function accion(argu) {
  if (argu.theme) {
    try {
      const theme = JSON.parse(getTheme(argu.theme))
      const hasTheme = file.themes.some((e) => e === argu.theme)
      if (!hasTheme) {
        file.schemes.push(theme)
        file.themes.push(theme.name)
      }
      file.profiles.list.forEach((f) => (f.colorScheme = argu.theme))
    } catch (err) {
      console.error(`this file does not exist\n${err.path}`)
    }
  }
  if (argu.font) {
    try {
      const font = JSON.parse(getFonts())
      let f = ''
      if (font.hasOwnProperty(argu.font)) {
        f = font[argu.font]
      } else {
        f = argu.font
      }
      file.profiles.list.forEach(prop => {
        // file.profiles.list["fontFace"] = f
        prop["fontFace"] = f
      })
      console.info(`if the font name has "-" wrap the text with 'name-font'`)
    } catch (err) {
      console.error(err)
    }
  }
  if (argu.opacity) {
    console.log(file.profiles.list)
  }
  if (argu.size) {
    console.log(file.profiles.list)
  }
  writeFile(path, JSON.stringify(file))
}

module.exports = { accion }
