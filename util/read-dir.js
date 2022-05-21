const fs = require('fs')

function readDir(path) {
  return fs.readdirSync(path)
}

module.exports = { readDir }
