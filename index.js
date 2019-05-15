// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const busboy = require('connect-busboy');
const fs = require('fs-extra');
const upload = require('./services/upload');

// const Sequelize = require('sequelize');
const keys = require('./config/keys');
require('./services/passport');

const app = express();

// Registers and ensures existence of upload path
const uploadPath = path.join(__dirname, 'fu/');
fs.ensureDir(uploadPath);

/**
 * Runs code in production mode
 */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Set 2MiB buffer
app.use(
  busboy({
    highWaterMark: 2 * 1024 * 1024,
  })
);

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
require('./services/upload')(app);

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post('/api/upload', upload);

// listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
