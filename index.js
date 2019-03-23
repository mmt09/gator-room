//importing modules
var express = require('express');
const app = express();

//route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//listen to this port, either server provided port or local port
const PORT = process.env.PORT || 8080;
app.listen(PORT);
