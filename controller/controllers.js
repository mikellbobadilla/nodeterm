const fs = require('fs')
const { getTheme, getFont, getResetFile } = require('../settings/index')
const { filePath } = require('../helpers/file-path')
const { fileSettings } = require('../helpers/get-file')
const file = fileSettings()

const setTheme = ({ theme }) => {
  try {
    // check if the file has the property themes
    if (!file.hasOwnProperty("themes")) {
      file["themes"] = []
      file.schemes.forEach(e => file.themes.push(e.name))
    }

    const hasTheme = file["themes"].some(
      e => e.toLowerCase() === theme.toLowerCase()
    )

    if (!hasTheme) {
      const t = getTheme(theme)
      file.schemes.push(t)
      file.themes.push(t.name)
    }

    // Apply theme current
    file.profiles.list.forEach((t) => (t["colorScheme"] = theme))
  } catch (err) {
    if (err.code === 'ENOENT') console.error('Theme invalid')
  }
}

// console.log(`Codigo de error ${getTheme('hola')}`)

const setSize = ({ size }) => {
  try {
    if (size < 10) throw new Error('Font size must be greater than 10')
    file.profiles.list.forEach(
      e => (e["fontSize"] = size)
    )
  } catch (err) {
    console.error(err.message)
  }
}

const setOpacity = ({ opacity }) => {
  try {
    if (opacity < 5)
      throw new Error('Opacity must be greather han 5% - max 100%')
    file.profiles.list.forEach(
      e => (e["opacity"] = opacity)
    )
  } catch (err) {
    console.error(err.message)
  }
}

const setFontFace = ({ font }) => {
  try { 
    const ft = getFont()
    let f = ''
    if (ft.hasOwnProperty(font)) {
      f = ft[font]
    } else {
      f = font
    }

    file.profiles.list.forEach(
      e => (e["fontFace"] = f)
    )
  } catch (err) {
    console.error(err.message)
  }
}

const resetFiles = () => {
  let f = getResetFile()
  fs.writeFileSync(filePath, JSON.stringify(f))
}

// "initialCols": 60,
// "initialRows": 15,

const setWidth = ({width}) => {
  try {
    if (width < 10) throw new Error('width size must be greater than 10')
    file["initialCols"] = width
    console.info('To see changes need close en open the terminal')
  } catch (err) {
    console.error(err.message)
  }
}

const setHeight = ({height}) => {
  try {
    if (height < 5) throw new Error('Height must be greather than 5')
    file["initialRows"] = height
    console.info('To see changes need close en open the terminal')
  } catch (err) {
    console.error(err.message)
  }
}

const setTerminal = ({terminal}) => {
  try {
    let namesTerminal = {}
    namesTerminal = file.profiles.list.find(
      n => n.name === terminal
    )
    file["defaultProfile"] = namesTerminal.guid
  } catch (err) {
    console.error(err.message)
  } 
}

const saveSettings = () => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(file))
  } catch (err) {
    console.error(err.message)
  }
}

module.exports = {
  setTheme,
  setSize,
  setOpacity,
  setFontFace,
  resetFiles,
  setWidth,
  saveSettings,
  setHeight,
  setTerminal
}
