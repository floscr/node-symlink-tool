export function log (object) {
  console.log(JSON.stringify(object, null, 2))
}
log.bind(console.log)

export function logErr (err) {
  console.err(err)
}
logErr.bind(console.log)
