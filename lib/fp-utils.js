import R from 'ramda'
import path from 'path'

// Map over keys from an object
// https://github.com/ramda/ramda/wiki/Cookbook#map-keys-of-an-object
export const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj))))

export const matchesAnyKey = R.curry((fn, value) => R.any(R.equals(value), fn))

export const filterObjectKeys = R.curry((fn, obj) => R.pipe(
  R.toPairs,
  R.filter(R.apply(fn)),
  R.fromPairs
)(obj))

export const filterObjectKeysWithArray = R.curry(
  (arr, obj) => filterObjectKeys(matchesAnyKey(arr), obj)
)

export const mapObjKeysToProp = R.curry((prop, obj) => R.pipe(
  R.toPairs,
  R.chain(([key, list]) => R.map(R.assoc(prop, key), list))
)(obj))

export const joinOrResolvePath = R.curry(
  (base, file) => /^\.\//.test(file) ? path.join(base, file) : file
)
