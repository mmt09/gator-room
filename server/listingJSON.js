// include modules
var mysql = require('mysql');
var globalResult;
// Connection to database
var con = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'password',
database: 'gatorroom'
});

con.connect();
con.query('SELECT listing_id, address, city, postal_code, amount FROM listing', (err, rows) => {
        if(err) throw err;
        var ObjStr = JSON.stringify(rows);
        var result = JSON.parse(ObjStr);
        globalResult = result;
});
con.end();

//route handler
app.post('/api/search_apartment', (req, res) => {
  res.send({globalResult});
});
