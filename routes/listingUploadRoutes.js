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
  app.post('/api/listingUpload', (req, res) => {
    const { streetAddress, city, zip, bedroom, bathroom, kitchen, price, description } = req.body;
    connection.query(
      'INSERT INTO listing (address, city, postal_code, num_bedroom, num_kitchen, amount, description VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [streetAddress, city, zip, bedroom, bathroom, kitchen, price, description],
      err => {
        if (err) throw err;
      }
    );
  });
};
