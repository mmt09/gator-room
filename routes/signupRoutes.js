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

  app.post('/api/registration', (req, res) => {
    const sfsu_email = req.body.sfsu_email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone = req.body.phone;
    const username = req.body.username;
    const password = req.body.password;
    connection.query(
      'INSERT INTO student (sfsu_email, first_name, last_name, phone, username, password) VALUES (?, ?, ?, ?, ?, ?)',
      [sfsu_email, first_name, last_name, phone, username, password],
      (err, rows) => {
        if (err) throw err;
      }
    );
  });
};
