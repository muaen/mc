const chalk = require('chalk')

module.exports = {
  PREFIX_MSG        : chalk.green('[MC] '),
  PREFIX_MSG_ERR    : chalk.red('[MC][ERROR] '),
  PREFIX_MSG_MOD    : chalk.bold.green('[MC][Module] '),
  PREFIX_MSG_MOD_ERR: chalk.red('[MC][Module][ERROR] '),
  PREFIX_MSG_WARNING: chalk.yellow('[MC][WARN] '),
  PREFIX_MSG_SUCCESS: chalk.cyan('[MC] '),
}