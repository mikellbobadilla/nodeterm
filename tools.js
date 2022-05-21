const fs = require('fs')
// deprecate
function getFile(path, encoding) {
  return fs.readFileSync(path, encoding)
}
module.exports = {getFile}
