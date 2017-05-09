import R from 'ramda'
import * as utils from './fp-utils'

const input = { allowed: 1, illegal: 'this should be removed' }
const allowedProps = ['allowed']

test('mapKeys', () => {
  expect(utils.mapKeys(R.toUpper, { a: 1, b: 2, c: 3 })).
    toEqual({ A: 1, B: 2, C: 3 })
})

test('filterObjectKeys', () => {
  expect(utils.filterObjectKeys(x => x !== 'illegal', input))
    .toEqual({ allowed: 1 })
})

test('filterObjectKeysWithArray', () => {
  expect(utils.filterObjectKeysWithArray(allowedProps, input))
    .toEqual({ allowed: 1 })
})

test('mapKeysTypeProp', () => {
  const input =  {
    key: [
      { value: 'value' }
    ],
  }
  const expected = [{ value: 'value', key: 'key' }]
  const mapped = utils.mapObjKeysToProp('key', input)
  expect(mapped).toEqual(expected)
})

test('joins relative path with base dir', () => {
  expect(utils.joinOrResolvePath('./myDir/myFile.ext', '~/settings'))
    .toEqual('~/settings/myDir/myFile.ext')
})

test('return absolute path', () => {
  expect(utils.joinOrResolvePath('~/myDir/myFile.ext', '~/settings'))
    .toEqual('~/myDir/myFile.ext')
})
