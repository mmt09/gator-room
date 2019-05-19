const Sequelize = require('sequelize');
const keys = require('../config/keys');

const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
  host: keys.host,
  dialect: 'mysql',
});

const Landlord = sequelize.import('../models/Landlord.js');
/**
 * Later might have to refactor this routes to make them universal and add logic for each
 * So it could be reused to update student profile information with if condition passed by client
 * or do everything on front end (buttons will have different routes based on who is logged in)
 * And the routes will be similar for Student model
 */
module.exports = app => {
  app.post('/api/current_landlord_phone', async (req, res) => {
    const { landlordID, phone } = req.body;
    // Insert or update phone number for landlord with provided id
    // Notice how { phone } is typed out it's short JS syntax for { phone: phone }
    // Only works when argument's name match variable on left side

    try {
      await Landlord.update(
        { phone },
        {
          where: {
            landlord_id: landlordID,
          },
        }
      );
      res.send('Done');
    } catch (err) {
      res.send('Error, please try again');
    }
  });

  app.post('/api/update_landlord_about', async (req, res) => {
    const { landlordID, about } = req.body;
    // Insert or update about info for landlord with provided id
    try {
      await Landlord.update(
        { about },
        {
          where: {
            landlord_id: landlordID,
          },
        }
      );
      res.send('Done');
    } catch (err) {
      res.send('Error, please try again');
    }
  });
};
