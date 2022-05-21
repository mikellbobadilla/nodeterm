const { ArgumentParser } = require('argparse')
const { version } = require('./package.json')
const accion = require('./execute')

const parser = new ArgumentParser({
  description: 'CLI program to customize your terminal.',
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

parser.add_argument('-i','--init', {
  help: 'Install the files required to run the program',
  action: 'store_true',
})

parser.add_argument('-r', '--reset', {
  help: 'Reset the settings to the default',
  action: 'store_true',
})

module.exports = parser.parse_args()