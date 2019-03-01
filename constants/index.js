const exitCode = require('./exit_code')
const prefixMsg = require('./prefix_msg')

module.exports = {
  ...exitCode,
  ...prefixMsg
}