// standard methods available in the lib
export const availableMethods = [
  'symlink',
  'hardlink',
  'copy',
]

// Default options
export const defaultArgs = {
  dryRun: false,
  isSilent: false,
  overwriteAll: false,
  baseDir: '~/.config/settings',
}
