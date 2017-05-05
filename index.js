import { log, logErr } from './lib/utils'
import * as fsUtil from './lib/fileSystem.js'
import _ from 'lodash'

const settingsFile = '~/.homesick/repos/dotfiles/settings/syncsettings.yaml'

const settings = fsUtil.loadSettings(settingsFile)

const promises = settings.map(file => fsUtil.createLink(file))

Promise.all(promises)
  .then(() => { console.log('Done!') })
  .catch(console.error)
