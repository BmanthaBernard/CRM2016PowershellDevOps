var Shell = require('node-powershell')

var ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

ps.addCommand('import-module .\\Sync-WebResources.psm1')
ps.addCommand('Sync-WebResources .\\Sample\\Configuration.xml')
ps.invoke()
  .then(output => {
    console.log(output)
    ps.dispose()
  })
  .catch(err => {
    console.log(err)
    ps.dispose()
  })
