#! /usr/bin/env node
var chalk = require('chalk')
var Shell = require('node-powershell')
var path = process.argv.slice(2)[0]
console.log(chalk.yellow('Syncing folder specified in ' + path))
var ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

ps.addCommand('import-module .\\Sync-WebResources.psm1')
ps.addCommand('Sync-WebResources ' + path)
ps.invoke()
  .then(output => {
    console.log(output)
    ps.dispose()
  })
  .catch(err => {
    console.log(err)
    ps.dispose()
  })
