import symlink from '../index'
import { resolve } from 'path'

const settingsObj = {
  symlink: {
    title: 'Symlink Example',
    src: resolve('./src/example.txt'),
    dst: './dst/example.symlink.txt'
  },
  hardlink: {
    title: 'Hardlink Example',
    src: resolve('./src/example.txt'),
    dst: './dst/example.hardlink.txt'
  },
  copy: {
    title: 'Copy Example',
    src: resolve('./src/example.txt'),
    dst: './dst/example.copy.txt'
  }
}

symlink({
  settingsObj,
  baseDir: __dirname,
  isSilent: false,
})
