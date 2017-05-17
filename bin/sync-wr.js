#! /usr/bin/env node
var chalk = require('chalk')
var path = require('path')
var Shell = require('node-powershell')

var configPath = process.argv[2]

var rootPath = path.dirname(__dirname)

console.log(chalk.yellow('Syncing folder specified in ' + configPath))
var ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})
ps.addCommand('import-module "' + rootPath + '\\Sync-WebResources.psm1"')
ps.addCommand('Sync-WebResources ' + configPath)
ps.invoke()
  .then(output => {
    console.log(output)
    ps.dispose()
  })
  .catch(err => {
    console.log(err)
    ps.dispose()
  })
