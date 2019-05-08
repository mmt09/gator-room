const bcrypt = require('bcrypt');
const mysql = require('mysql');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
  app.post('/api/login', (req, res) => {
    passport.use(
      new LocalStrategy((sfsuEmail = req.body.sfsuEmail, password = req.body.password, done) => {
        connection.query(
          'SELECT student_id, password FROM student WHERE sfsu_email = ?',
          [sfsuEmail],
          (err, results, fields) => {
            if (err) {
              done(err);
            }

            if (results.length === 0) {
              done(null, false);
            } else {
              const hash = results[0].password.toString();

              bcrypt.compare(password, hash, (err, response) => {
                if (response === true) {
                  return done(null, { student_id: results[0].id });
                } else {
                  return done(null, false);
                }
              });
            }
          }
        );
        req.login(student_id, err => {
          res.redirect('/');
        });

        app.use(
          session({
            secret: 'owienfowpesdfe',
            resave: false,
            // store: sessionStore,
            saveUninitialized: true,
            // cookie: { secure: true }
          })
        );

        passport.serializeUser(student_id, done => {
          done(null, student_id);
        });

        passport.deserializeUser(student_id, done => {
          done(err, student_id);
        });
      })
    );
  });
};

// connection.query('SELECT LAST_INSERT_ID() as user_id', (error, results, fields) => {
//   if (error) throw error;

//   const user_id = results[0];

// });
