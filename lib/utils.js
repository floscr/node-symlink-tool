import yaml from 'js-yaml'
import fs from 'fs'
import expandHomeDir from 'expand-home-dir'

export function log (object) {
  console.log(JSON.stringify(object, null, 2))
}
log.bind(console.log)

export function loadSettingsFileSync (file) {
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
