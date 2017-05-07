import R from 'ramda'
import * as fileSystem from './fileSystem'
import { availableMethods } from './defaultOptions'

const yamlSettings = {
  symlink: [
    {
      src: './source',
      dst: '~/temp'
    },
  ],
  hardlink: [
    {
      src: './source',
      dst: '~/temp'
    },
  ],
  illegal: [
    { src: 'no such method is available' }
  ],
}

it('should flatten settings to an array of items with the kind mapped', () => {
  const settings = fileSystem.mapKeysTypeProp(yamlSettings)
  expect(settings).toMatchSnapshot()
})

// test.only('should filter non standard methods', () => {
//   const settings = filterObjectKeys(
//     matchesAnyKey(allowedMethods),
//     yamlSettings
//   );
//   console.log(settings)
// })


