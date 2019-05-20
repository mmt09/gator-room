const mysql = require('mysql');
const NodeGeocoder = require('node-geocoder');
const keys = require('../config/keys');

const options = {
  provider: 'google',
  apiKey: 'AIzaSyCKSxjOsN5bYFi9QtYqbrLoPtknm8yr5E0',
  formatter: null,
};
const geocoder = NodeGeocoder(options);

// Connection to database
// Production keys are stored in config directory, local dev keys are not pushed to server
const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
});

module.exports = app => {
  app.post('/api/listingUpload', async (req, res) => {
    const { streetAddress, city, zip, bedroom, bathroom, kitchen, price, description } = req.body;
    // let lat;
    // let long;

    await geocoder.geocode(streetAddress, (err, res) => {
      lat = res[0].latitude;
      long = res[0].longitude;
    });

    connection.query(
      'INSERT INTO listing (address, city, postal_code, num_bedroom, num_bathroom, num_kitchen, amount, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [streetAddress, city, zip, bedroom, bathroom, kitchen, price, description],
      err => {
        if (err) throw err;
      }
    );
  });
};
