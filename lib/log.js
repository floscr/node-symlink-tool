import chalk from 'chalk'

const errorCodes = {
  'directory-does-not-exist' (dir) {
    return `The given directory does not exist!\n${dir}`
  },

  'parent-directory-does-not-exist' (dir) {
    return `The given directory does not exist!\n${dir}`
  }
}

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
