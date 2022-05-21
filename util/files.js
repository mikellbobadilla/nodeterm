const {getFile} = require('../tools')
const os = require('os')
const path =
  '\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState\\settings.json'
const homeDir = os.homedir()

const masterFile = JSON.parse(getFile(`${homeDir}${path}`, 'utf-8'))

// profiles.list  Obtain a list of all profiles we need {name, colorScheme, guid}
// to selec fefult profile for example gitBash we need to get {defaultProfile} property
{
  defaultProfile: '{2ece5bfe-50ed-5f3a-ab87-5cd4baafed2b}'
}
// console.log(masterFile.defaultProfile)

module.exports = masterFile
