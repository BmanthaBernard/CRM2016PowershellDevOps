#! /usr/bin/env node
var chalk = require('chalk')
var binPath = require('bin-path')(require)
var Shell = require('node-powershell')

var configPath = process.argv[3]

var syncPath = binPath('sync-webresources')
console.log(syncPath)

// console.log(chalk.yellow('Syncing folder specified in ' + configPath))
// var ps = new Shell({
//   executionPolicy: 'Bypass',
//   noProfile: true
// })
// var modPath = 
// ps.addCommand('import-module Sync-WebResources.psm1')
// ps.addCommand('Sync-WebResources ' + configPath)
// ps.invoke()
//   .then(output => {
//     console.log(output)
//     ps.dispose()
//   })
//   .catch(err => {
//     console.log(err)
//     ps.dispose()
//   })
