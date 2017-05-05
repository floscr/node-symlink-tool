import chalk from 'chalk'
import * as errorCodes from './errorCodes'

function getErrorFromCode (code, args) {
  if (!errorCodes[code]) throw Error('Error code does not exist!')
  const errorCode = errorCodes[code]
  if (typeof errorCode === 'function') return errorCode(...args)
  return errorCode
}

export default function logErr (errorCode, ...args) {
  const msg = chalk.red('ERROR: ' + getErrorFromerrorCode(errorCode, args))
  console.error(msg)
}
logErr.bind(console.error)

export function logSuccess (rawMessage) {
  const msg = chalk.green(`✔ ${rawMessage}`)
  console.log(msg)
}
logSuccess.bind(console.log)
