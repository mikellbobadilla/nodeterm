const fs = require('fs')
const cli = require('commander')
const data = require('./data/setting.json')

const sizes = data.profiles.list.map(item => item.size)

const path =
  'C:\\Users\\Sting\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState'

// fs.readdir(path, (err, files) => {
//   if (err) {
//     console.log(`Error: ${err}`)
//   } else {
//     console.log(files)
//   }
// })

cli.description('Custimize your terminal')
cli.name('nodeterm')
cli.usage('<command>')
cli.addHelpCommand(false)
cli.helpOption(false)

// Adding commands
cli
  .command('font')
  .argument('[number]', 'The number of font size')
  .description('Set font size')
  .option('-s, --small', 'Set font size to small')
  .action(fontOption)

cli.parse(process.argv)

function fontOption(number, options) {
  
  console.log(parseInt(number), options ,sizes)
}
