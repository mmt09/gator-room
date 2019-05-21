/* eslint-disable no-console */
const NodeGeocoder = require('node-geocoder');
const Sequelize = require('sequelize');
const keys = require('../config/keys');

const options = {
  provider: 'google',
  apiKey: keys.googleLatLong,
  formatter: null,
};
const geocoder = NodeGeocoder(options);

// Connection to database
// Production keys are stored in config directory, local dev keys are not pushed to server
const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
  host: keys.host,
  dialect: 'mysql',
});

const Listing = sequelize.import('../models/Listing.js');

module.exports = app => {
  app.post('/api/listingUpload', async (req, res) => {
    const { streetAddress, city, zip, bedroom, bathroom, kitchen, price, description } = req.body;
    let lat;
    let long;

    try {
      const result = await geocoder.geocode(streetAddress, city, zip);
      lat = result[0].latitude;
      long = result[0].longitude;
    } catch (err) {
      console.log(err);
    }

    try {
      const listing = await Listing.create({
        address: streetAddress,
        city,
        postal_code: zip,
        num_bedroom: bedroom,
        num_kitchen: kitchen,
        amount: price,
        description,
        num_bathroom: bathroom,
        lat,
        long,
      });
      res.send({ listingID: listing.listing_id });
    } catch (err) {
      res.send('Error, please try again');
      console.log(err);
    }
  });
};
