import chalk from 'chalk'
import * as errorCodes from './errorCodes'

function getErrorFromCode (code, args) {
  if (!errorCodes[code]) throw Error('Error code does not exist!')
  const errorCode = errorCodes[code]
  if (typeof errorCode === 'function') return errorCode(...args)
  return errorCode
}

export default function logErr (code, ...args) {
  const err = chalk.red('ERROR: ' + getErrorFromCode(code, args))
  console.error(err)
}
