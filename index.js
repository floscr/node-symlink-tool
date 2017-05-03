import * as utils from './lib/utils'

const rc = '~/.homesick/repos/dotfiles/settings/syncsettings.yaml'
const settings = utils.loadSettingsFileSync(rc)

console.log(settings)
