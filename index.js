import R from 'ramda'
import path from 'path'
import expandHomeDir from 'expand-home-dir'

import * as fsUtil from './lib/fileSystem.js'
import { defaultArgs } from './lib/defaultArgs'

export default function main (customArgs) {
  const args = R.merge(defaultArgs, customArgs)
  const baseDir = expandHomeDir(args.baseDir)
  const settingsFile = path.join(baseDir, 'syncsettings.yaml')

  const settings = fsUtil.loadSettings(settingsFile)

  const promises = settings
    .map(file => fsUtil.createLink(file, args))

  Promise.all(promises)
    .then(() => { console.log('Done!') })
    .catch(console.error)
}
