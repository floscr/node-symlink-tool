import * as utils from './lib/utils'
import expandHomeDir from 'expand-home-dir'

const { log } = utils

const rc = '~/.homesick/repos/dotfiles/settings/syncsettings.yaml'
const settings = utils.loadSettingsFileSync(rc)

let files = []
for (let prop in settings) {
  if (settings.hasOwnProperty(prop) && settings[prop]) {
    files.push(
      ...settings[prop].map(({ src, dst }) => ({ src, dst, type: prop }))
    )
  }
}

log(files)

// | parentDirectoryExists(dst)
// | fileExists(src)
// | link(src, dst)

