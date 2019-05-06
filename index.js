// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');\
const session = require('express-session');
const passport = require('passport');

const app = express();

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(bodyParser.json());
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());

// route handler
require('./routes/listingRoutes')(app);
require('./routes/signupRoutes')(app);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

passport.serializeUser(user_id, done => {
  done(null, user_id);
});

passport.deserializeUser(user_id, done => {
  done(err, user_id);

});

// listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
