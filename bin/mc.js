#!/usr/bin/env node

const commander = require('commander')
const pkg = require('../package.json')

const SUCCESS_EXIT = 0;
const ERROR_EXIT = 1;

commander.version(pkg.version)
  .option('-v --verbose', '显示所有数据')
  .option('-f --force', '强制执行动作')
  .option('-i --instances <number>', '运行 [number] 个实例(使用同一个socket的cluster)')
  .option('-o --output <path>', '日志输出文件路径')
  .option('-e --error <path>', '错误日志输出文件路径')
  .option('-p --pid <pid>', 'pid文件')
  .option('-w --write', '在本地文件夹保存配置文件')
  .usage('[cmd] app')

if (process.argv.length === 2) {
  commander.parse(process.argv);
  commander.outputHelp()
  process.exit(ERROR_EXIT)
}