import R from 'ramda'
import * as fileSystem from './fileSystem'

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
  ]
}

it('should flatten settings to an array of items with the kind mapped', () => {
  const settings = fileSystem.mapKeysTypeProp(yamlSettings)
  expect(settings).toMatchSnapshot()
})
