// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');

// const Sequelize = require('sequelize');
const keys = require('./config/keys');
require('./services/passport');

const app = express();

/**
 * Runs code in production mode
 */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// cookies
app.use(
  cookieSession({
    // How long cooke can exist inside of browser before it's automatically expired
    // 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key to encrypt a cookie
    keys: [keys.cookieKey],
  })
);

// const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
//   host: keys.host,
//   dialect: 'mysql',
// });

// // Authentication Packages and Models handlers
// require('./models/Student')(sequelize);
// require('./models/Landlord')(sequelize);

app.use(passport.initialize());
app.use(passport.session());
// route handler
require('./routes/listingRoutes')(app);
require('./routes/googleAuthRoutes')(app);

// listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
