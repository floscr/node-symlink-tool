import R from 'ramda'
import * as lib from './lib/fileSystem.js'
import { defaultArgs } from './lib/defaultOptions'

export default function main (customArgs) {
  const args = R.merge(defaultArgs, customArgs)

  const settings = customArgs.settingsObj || lib.loadSettings(args)

  const promises = settings
    .map(file => lib.createLink(args, file))

  Promise.all(promises)
    .then(() => { console.log('Done!') })
    .catch(console.error)
}
