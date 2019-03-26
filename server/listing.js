// include modules
var mysql = require('mysql');

// Connection to database
var con = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'password',
database: 'gatorroom'
});

con.query('SELECT listing_id, address, city, postal_code, amount FROM listing', (err, rows) => {
        if(err) throw err;
        console.log('Data recieved from DB:\n');
        console.log(typeof rows);
        var ObjStr =  JSON.stringify(rows);
        console.log(ObjStr);
        process.exit();
});

