const { ArgumentParser } = require('argparse')
const { version } = require('../package.json')

const parser = new ArgumentParser({
  description: 'ClI program to customize your terminal.',
})

parser.add_argument('-v', '--version', {
  action: 'version',
  help: 'Show version',
  version,
})

parser.add_argument('-t', '--theme', {
  type: 'str',
  help: 'Set theme',
})

parser.add_argument('-f', '--font', {
  type: 'str',
  help: 'Set font',
})

parser.add_argument('-o', '--opacity', {
  type: 'int',
  help: 'Set opacity',
})

parser.add_argument('-s', '--size', {
  type: 'int',
  help: 'Set font size',
})

parser.add_argument('-r', '--reset', {
  help: 'Reset the settings to the default',
  action: 'store_true',
})

parser.add_argument('--width', {
  type: 'int',
  help: 'Width the window',
})

parser.add_argument('--height', {
  type: 'int',
  help: 'Height the window',
})

parser.add_argument('--terminal', {
  type: 'str',
  help: 'select a terminal will show when open the app'
})

// Returt object with arguments
module.exports = parser.parse_args()
