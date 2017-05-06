import yaml from 'js-yaml'
import fs from 'fs'
import expandHomeDir from 'expand-home-dir'
import R from 'ramda'
import path from 'path'
import { logErr, logSuccess } from './log'

function loadSettingsFileSync (file) {
  try {
    const expandedFile = expandHomeDir(file)
    const fileContents = fs.readFileSync(expandedFile)
    const yamlObj = yaml.safeLoad(fileContents)
    return yamlObj
  } catch (e) {
    console.log(e)
    process.exit()
  }
}

export function flattenSettingsArray (settings) {
  let files = []
  for (let prop in settings) {
    if (settings.hasOwnProperty(prop) && settings[prop]) {
      files.push(
        ...settings[prop].map(({ src, dst }) => ({ src, dst, type: prop }))
      )
    }
  }
  return files
}

export const loadSettings = R.pipe(
  loadSettingsFileSync,
  flattenSettingsArray
)

export function parentDirExists (file) {
  const parentDir = path.dirname(file)
  return fs.existsSync(parentDir)
}

export async function createLink (file, options) {
  const src = file.src
  const dst = expandHomeDir(file.dst)

  if (!parentDirExists(dst)) {
    logErr('PARENT_DIR_DOES_NOT_EXIST', dst)
    return
  }

  if (!options.silent) {

    logSuccess('File was linked', file.src, file.dst)
  }
}
