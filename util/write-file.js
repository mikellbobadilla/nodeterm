const fs = require('fs')

function writeFile(path, data) {
  return fs.writeFileSync(path, data)
}

module.exports = { writeFile }
