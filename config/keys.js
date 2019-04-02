// keys.js - figure out what set of credentials to return
if (!(module.exports = require('./dev'))) {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
