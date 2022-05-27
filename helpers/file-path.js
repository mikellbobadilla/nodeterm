const os = require('os')
const pathFile =
  '\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState\\settings.json'
const filePath = `${os.homedir()}${pathFile}`

module.exports = { filePath }
