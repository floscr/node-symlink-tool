import yaml from 'js-yaml'
import fs from 'fs'
import expandHomeDir from 'expand-home-dir'
import R from 'ramda'
import path from 'path'
import logErr from './log'

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

function flattenSettingsArray (settings) {
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

// | parentDirectoryExists(dst)
// | fileExists(src)
// | link(src, dst)
export async function createLink (file, dryRun) {
  const src = file.src
  const dst = expandHomeDir(file.dst)

  if (parentDirExists(dst)) logErr('parent-directory-does-not-exist', dst)
}
