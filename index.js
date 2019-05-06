// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');\
const session = require('express-session');
const passport = require('passport');
const MySQLStore = require('express-mysql-session')(session);

const keys = require('../config/keys');

const app = express();

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('/StudentPortal', authenticationMiddleware(), (req, res) => {
  res.render('StudentPortal', { title: 'Profile' })
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json());
app.use(expressValidator());

// route handler
require('./routes/listingRoutes')(app);
require('./routes/signupRoutes')(app);

const options = ({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
});

/* Stores session data in the database rather than the node process.
 * This retains the session in case node restarts or terminates.
 * Explicitly logging out will wipe the session data.
 */
var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'owienfowpesdfe',
  resave: false,
  store: sessionStore,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(user_id, done => {
  done(null, user_id);
});

passport.deserializeUser(user_id, done => {
  done(err, user_id);
});

function authenticationMiddleware() {
  return (req, res, next) => {
    console.log('req.session.passport.user: ${JSON.stringify(req.session.passport)}');
    if (req.isAuthenticated()) return next();
    res.redirect('/login')
  }
}
// listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
