const { ArgumentParser } = require('argparse')
const { version } = require('../package.json')

const parser = new ArgumentParser({
  description: 'CLI tool fo Windows Terminal',
  usage: 'nodeterm <command> [options]',
})

parser.add_argument('-v', '--version', { action: 'version', version })

parser.add_argument('-t', '--theme', { action: 'version' })

parser.add_argument('-o', '--opacity', { action: 'version' })

parser.add_argument('-s', '--size', {
  action: 'version',
  type: 'int',
  help: 'set font size (default: 12)',
  action: 'store',
})

parser.add_argument('-f', '--font', { action: 'version' })

exports.module = parser.parse_args()
