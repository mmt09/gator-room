// keys.js - figure out what set of credentials to return
if (process.env.PWD == '/home/gatorroom/csc648-sp19-team103/config') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}

