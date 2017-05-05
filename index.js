import * as fsUtil from './lib/fileSystem.js'

function main (dryRun) {
  const settingsFile = '~/.homesick/repos/dotfiles/settings/syncsettings.yaml'

  const settings = fsUtil.loadSettings(settingsFile)

  const promises = settings
    .map(file => fsUtil.createLink(file, dryRun))

  Promise.all(promises)
    .then(() => { console.log('Done!') })
    .catch(console.error)
}

main(true)
