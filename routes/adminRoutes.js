/* eslint-disable no-console */
const Sequelize = require('sequelize');
const keys = require('../config/keys');

// Connection to database
// Production keys are stored in config directory, local dev keys are not pushed to server
const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
  host: keys.host,
  dialect: 'mysql',
});

const Listing = sequelize.import('../models/Listing.js');

module.exports = app => {
  app.post('/api/admin_approve_listing', async (req, res) => {
    const { listingID } = req.body;

    try {
      await Listing.update(
        {
          approved: 1,
        },
        {
          where: {
            listing_id: listingID,
          },
        }
      );
      res.send({ done: true });
    } catch (err) {
      res.send('Error, please try again');
      console.log(err);
    }
  });

  app.post('/api/admin_disapprove_listing', async (req, res) => {
    const { listingID } = req.body;

    try {
      await Listing.update(
        {
          approved: 0,
        },
        {
          where: {
            listing_id: listingID,
          },
        }
      );
      res.send({ done: true });
    } catch (err) {
      res.send('Error, please try again');
      console.log(err);
    }
  });
};
