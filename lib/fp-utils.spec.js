import R from 'ramda'
import * as utils from './fp-utils'

test('maps object keys to array with key as property in every item', () => {
  const input =  {
    key: [
      { value: 'value' }
    ],
  }
  const expected = [{ value: 'value', key: 'key' }]
  const mapped = utils.mapObjKeysToProp('key', input)
  expect(mapped).toEqual(expected)
})

test('maps over keys from an object', () => {
  expect(utils.mapKeys(R.toUpper, { a: 1, b: 2, c: 3 })).
    toEqual({ A: 1, B: 2, C: 3 })
})
