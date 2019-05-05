// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');

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

// route handler
require('./routes/listingRoutes')(app);
require('./routes/signupRoutes')(app);

// listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
