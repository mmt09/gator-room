const proxy = require('http-proxy-middleware');

// PLEASE consult Jahon before changing this!
//Proxy setup
module.exports = function(app) {
  app.use(proxy(['/api', '/hello'], { target: 'http://localhost:1337' }));
};
