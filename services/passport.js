/**
 * Passport strategy for Google
 * Start here
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Sequelize = require('sequelize');
const keys = require('../config/keys');

// Find all users

const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
  host: keys.host,
  dialect: 'mysql',
});
const Landlord = sequelize.import('../models/Landlord.js');

// Landlord.findAll().then(landlords => {
//   console.log('All landlords:', JSON.stringify(landlords, null, 4));
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Create a new user
      Landlord.create({
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        email: profile.emails[0].value,
        google_id: profile.id,
        picture: profile.photos[0].value,
      });
    }
  )
);
