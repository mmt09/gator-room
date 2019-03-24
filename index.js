//importing modules
const express = require('express');
const mysql = require('mysql');

// Connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'csc648-af',
});

const app = express();

app.use(express.static('client/build'));

//route handler

app.get('/hello/', (req, res) => {
  res.send({ hi: 'there! It is a response from node server' });
});

//listen to this port, either server provided port or local port
const PORT = process.env.PORT || 1337;
app.listen(PORT);
