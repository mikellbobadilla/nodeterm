const { path } = require('./util/path')
const { readFile } = require('./util/read-file')
const { writeFile } = require('./util/write-file')
const file = JSON.parse(readFile(path, 'utf8'))
const { getTheme, getFonts } = require('./util/get-utils')

// get files to restore fefault settings
const { getSettings } = require('./settings/reset/index')

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
      console.info('If you don run command "-i" or "--init", you must run this command first')
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
      file.profiles.list.forEach((prop) => {
        prop['fontFace'] = f
      })
      console.info(`if the font name has "-" wrap the text with 'name-font'`)
    } catch (err) {
      console.error(err)
    }
  }
  if (argu.opacity) {
    // This is insolate
    try {
      console.info('On windows terminal the command opacity use % do not use float number')
      file.profiles.list.forEach(prop => {
        prop["opacity"] = argu.opacity
      })
    } catch (err) {
      console.error(err)
    }
  }
  if (argu.size) {
    try {
      file.profiles.list.forEach((prop) => {
        prop["fontSize"] = argu.size
      })
    } catch (err) {
      console.error(err)
    }
  }
  if (argu.init) {
    try {
      file["themes"] = []
      file.schemes.forEach(e => file.themes.push(e.name))
    } catch (err) {
      console.error(err)
    }
  }
  writeFile(path, JSON.stringify(file))
  // only execute when is called
  if (argu.reset) {
    try {
      const data = JSON.parse(getSettings())
      writeFile(path, JSON.stringify(data))
    } catch (err) {
      console.error('File no found')
      console.error(err.path)
    }
  }
}

module.exports = { accion }
