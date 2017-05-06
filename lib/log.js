import chalk from 'chalk'
import * as errorCodes from './errorCodes'
import _ from 'lodash'

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

const pad = (padding) => {
  return ' '.repeat(padding)
}

export function logSuccess (rawMessage, { isSilent }, ...args) {
  if (isSilent) return
  const padding = 3
  const padBig = pad(padding)
  const padSmall = pad(padding - 1)

  const argLines = args
    .map(x => padBig + x)
    .join('\n')
  const msg = chalk.green('✔' + padSmall + rawMessage + '\n' + argLines)
  console.log(msg)
}
logSuccess.bind(console.log)
