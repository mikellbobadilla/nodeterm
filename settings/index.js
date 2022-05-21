const dir = __dirname
const { readDir } = require('../util/read-dir')

function getPathFont() {
  const files = readDir(dir)
  const file = files.find((f) => f === 'fonts.json')
  return `${dir}\\${file}`
}

module.exports = { getPathFont}
