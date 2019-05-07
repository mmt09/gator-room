// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Authentication Packages
const expressValidator = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);
const bcrypt = require('bcrypt');

const db = require('./routes/db');
const keys = require('./config/keys');

const app = express();

// function authenticationMiddleware() {
//   return (req, res, next) => {
//     console.log('req.session.passport.user: ${JSON.stringify(req.session.passport)}');
//     if (req.isAuthenticated()) return next();
//     res.redirect('/login');
//   };
// }

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// app.post('/StudentPortal', authenticationMiddleware(), (req, res) => {
//   res.render('StudentPortal', { title: 'Profile' });
// });

app.post('/LoginPage', (req, res) => {
  res.render('/LoginPage', { title: 'Login' });
});

app.post(
  '/LoginPage',
  passport.authenticate('local', {
    successRedirect: '/StudentPortal',
    failureRedirect: '/LoginPage',
  })
);

// Destroys session in database store and redirect to home page.
app.post('/Logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(expressValidator());

// route handler
require('./routes/listingRoutes')(app);
require('./routes/signupRoutes')(app);

passport.use(
  new LocalStrategy((username, password, done) => {
    db.query(
      'SELECT student_id, password FROM student WHERE username = ?',
      [username],
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
              return done(null, { user_id: results[0].id });
            } else {
              return done(null, false);
            }
          });
        }
      }
    );
  })
);

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

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(user_id, done => {
//   done(null, user_id);
// });

// passport.deserializeUser(user_id, done => {
//   done(err, user_id);
// });

// listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
