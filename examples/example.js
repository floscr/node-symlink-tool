import symlink from '../index.js'
import { resolve } from 'path'

const settings = {
  symlink: {
    title: 'Symlink Example',
    src: './src/example.txt',
    dst: './dst/example.symlink.txt'
  },
  hardlink: {
    title: 'Hardlink Example',
    src: './src/example.txt',
    dst: './dst/example.hardlink.txt'
  },
  copy: {
    title: 'Copy Example',
    src: './src/example.txt',
    dst: './dst/example.copy.txt'
  }
}

symlink({
  baseDir: resolve(__DIRNAME),
  isSilent: false,
})
