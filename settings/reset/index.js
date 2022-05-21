const dirSettings = __dirname
const fs = require('fs')

function getSettings() {
  return fs.readFileSync(`${dirSettings}\\settings.json`, 'utf8')
}

module.exports = { getSettings }
