import { log, logErr } from './lib/utils'
import * as fsUtil from './lib/fileSystem.js'
import _ from 'lodash'

const settingsFile = '~/.homesick/repos/dotfiles/settings/syncsettings.yaml'

const settings = fsUtil.loadSettings(settingsFile)

log(settings)

// | parentDirectoryExists(dst)
// | fileExists(src)
// | link(src, dst)

