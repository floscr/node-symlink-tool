import R from 'ramda'

// Map over keys from an object
// https://github.com/ramda/ramda/wiki/Cookbook#map-keys-of-an-object
export const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj))))
