const mysql = require('mysql');
const keys = require('../config/keys');

// Connection to database
// Production keys are stored in config directory, local dev keys are not pushed to server
const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
});

module.exports = app => {
  app.post('/api/all_listings', (req, res) => {
    connection.query('SELECT * FROM listing', (err, rows) => {
      if (err) throw err;
      const listingJSON = JSON.parse(JSON.stringify(rows));
      res.send(listingJSON);
    });
  });
};
