'use strict'

const os = require('os')

const getCpuCount = () => {
  console.log(`CPU Count: ${JSON.stringify(os.cpus())}`)
}

setInterval(getCpuCount, 3000)

process.on('SIGINT', function onSigint () {
  console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
  process.exit();
});

process.on('SIGTERM', () => {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
  process.exit();
})
