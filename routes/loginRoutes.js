const bcrypt = require('bcrypt');
const mysql = require('mysql');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);
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
    const { username, password } = req.body;
    passport.use(
      new LocalStrategy((username, password, done) => {
        connection.query(
          'SELECT student_id, password FROM student WHERE username = ?',
          [username],
          (err, results, fields) => {
            const user = results[0];
            if (!user) {
              return done(null, false, { message: 'Invalid credentials. \n' });
            }
            if (results.length === 0) {
              done(null, false);
            } else {
              const hash = results[0].password.toString();

              bcrypt.compare(password, hash, (err, response) => {
                if (response === true) {
                  return done(null, { user: results[0].id });
                }
                return done(null, false);
              });
            }
            req.login(user, err => {
              res.redirect('/');
            });

            // const options = {
            //   host: 'localhost',
            //   user: 'root',
            //   password: 'password',
            //   database: 'gatorroom',
            // };

            // /* Stores session data in the database rather than the node process.
            //  * This retains the session in case node restarts or terminates.
            //  * Explicitly logging out will wipe the session data.
            //  */
            // const sessionStore = new MySQLStore(options);
            // app.use(
            //   session({
            //     secret: 'owienfowpesdfe',
            //     resave: false,
            //     store: sessionStore,
            //     saveUninitialized: true,
            //     // cookie: { secure: true }
            //   })
            // );
          }
        );
      })
    );
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    // passport.deserializeUser((user, done) => {
    //   done(err, user);
    // });
  });
};

// connection.query('SELECT LAST_INSERT_ID() as user_id', (error, results, fields) => {
//   if (error) throw error;

//   const user_id = results[0];

// });
