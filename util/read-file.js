const fs = require('fs')

function readFile(path, encoding) {
  return fs.readFileSync(path, encoding)
}

module.exports = { readFile }
