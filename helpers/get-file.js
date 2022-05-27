const fs = require('fs')
const { filePath } = require('./file-path')

const fileSettings = () => {
  try {
    const file = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(file)
  } catch (err) {
    return new Error('File not found.\nPlease install windows Terminal')
  }
}

// agregar colores de salida


module.exports = { fileSettings }
