import * as fsUtil from './lib/fileSystem.js'
import expandHomeDir from 'expand-home-dir'
import defaultOptions from './lib/defaultOptions'
import R from 'ramda'
import path from 'path'

export default function main (customOptions) {
  const options = R.merge(customOptions, defaultOptions)
  const baseDir = expandHomeDir(options.baseDir)
  const settingsFile = path.join(baseDir, 'syncsettings.yaml')

  const settings = fsUtil.loadSettings(settingsFile)

  const promises = settings
    .map(file => fsUtil.createLink(file, options))

  Promise.all(promises)
    .then(() => { console.log('Done!') })
    .catch(console.error)
}
