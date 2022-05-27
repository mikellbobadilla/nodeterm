// apply settings
const { fileSettings } = require('../helpers/get-file')
const {
  setTheme,
  setSize,
  setOpacity,
  setFontFace,
  resetFiles,
  setWidth,
  saveSettings,
  setHeight,
  setTerminal,
} = require('./controllers')

// logged in memory the file to change
const file = fileSettings()

const apply = (args) => {
  if (args.theme) setTheme(args)

  if (args.size) setSize(args)

  if (args.opacity) setOpacity(args)

  if (args.font) setFontFace(args)

  if (args.width) setWidth(args)

  if (args.height) setHeight(args)
  
  if(args.terminal) setTerminal(args)
  
  saveSettings()
  
  // in case need reset default settings
  if (args.reset) resetFiles()
}

module.exports = { apply }
