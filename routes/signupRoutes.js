const bcrypt = require('bcrypt');
const mysql = require('mysql');
const keys = require('../config/keys');

const saltRounds = 10;

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
    req.checkBody('username', 'Username field cannot be empty.').notEmpty();
    req.checkBody('username', 'Username must be between 4-15 characters long.').len(4, 15);
    req.checkBody('sfsuEmail', 'The email you entered is invalid, please try again.').isEmail();
    req
      .checkBody(
        'sfsuEmail',
        'Email address must be between 4-100 characters long, please try again.'
      )
      .len(4, 100);
    req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
    // req
    //   .checkBody(
    //     'password',
    //     'Password must include one lowercase character, one uppercase character, a number, and a special character.'
    //   )
    //   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?!.*)(?=.[^a-zA-Z0-9]).{8,}$/, 'i');

    const errors = req.validationErrors();

    if (errors) {
      const error = JSON.stringify(errors);
      console.log(`errors: ${error}`);
    } else {
      const { sfsuEmail, firstName, lastName, phone, username, password } = req.body;

      bcrypt.hash(password, saltRounds, (err, hash) => {
        connection.query(
          'INSERT INTO student (sfsu_email, first_name, last_name, phone, username, password) VALUES (?, ?, ?, ?, ?, ?)',
          [sfsuEmail, firstName, lastName, phone, username, hash],
          error => {
            if (error) throw error;
          }
        );
      });
    }
  });
};
