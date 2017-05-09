import yaml from 'js-yaml'
import fs from 'fs'
import expandHomeDir from 'expand-home-dir'
import path from 'path'
import { logErr, logSuccess } from './log'
import { pipe, toPairs, chain, map, assoc, filter, any, equals, curry } from 'ramda'
import { mapKeys, filterObjectKeysWithArray } from './fp-utils'
import { availableMethods } from './defaultOptions'

function loadSettingsFileSync ({ baseDir, settingsFile }) {
  try {
    const file = path.join(expandHomeDir(baseDir), settingsFile)
    return pipe(
      fs.readFileSync,
      yaml.safeLoad
    )(file)
  } catch (e) {
    console.log(e)
    process.exit()
  }
}

export const mapKeysTypeProp = pipe(
  toPairs,
  chain(([key, list]) => map(assoc('type', key), list))
)

export const loadSettings = pipe(
  loadSettingsFileSync,
  filterObjectKeysWithArray(availableMethods),
  mapKeysTypeProp
)

export function parentDirExists (file) {
  const parentDir = path.dirname(file)
  return fs.existsSync(parentDir)
}

export async function createLink (options, file) {
  const { src } = file
  const dst = expandHomeDir(file.dst)

  if (!parentDirExists(dst)) {
    logErr('PARENT_DIR_DOES_NOT_EXIST', dst)
    return
  }

  logSuccess('File was linked', options, file.src, file.dst)
}
