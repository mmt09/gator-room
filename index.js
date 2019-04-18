//importing modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const keys = require('./config/keys');

// Connection to database
// Production keys are stored in config directory, local dev keys are not pushed to server
const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
});

const app = express();

app.use(express.static('client/build'));

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

//route handler
var globalJSON;
app.post('/api/search_apartment', (req, res) => {
  var zip = req.body.searchParams;
  connection.query('SELECT * FROM listing WHERE postal_code = ?', [zip], function(err, rows) {
    if (err) throw err;
    var ObjStr = JSON.stringify(rows);
    var result = JSON.parse(ObjStr);
    globalJSON = result;
    res.send(globalJSON);
  });
});

//listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
