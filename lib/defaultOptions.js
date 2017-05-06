// standard methods available in the lib
export const methods = [
  'symlink',
  'hardlink',
  'copy',
]

// Default options
export const defaultOptions = {
  dryRun: false,
  isSilent: false,
  overwriteAll: false,
  baseDir: '~/.config/settings',
}
