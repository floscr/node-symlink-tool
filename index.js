import * as utils from './lib/utils'
import expandHomeDir from 'expand-home-dir'

const rc = '~/.homesick/repos/dotfiles/settings/syncsettings.yaml'
const settings = utils.loadSettingsFileSync(rc)

for (let prop in settings) {
  if (settings.hasOwnProperty(prop)) {
    console.log(prop)
  }
}
