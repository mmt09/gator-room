/* eslint-disable camelcase */
/**
 * Passport strategy for Google
 * Start here
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Sequelize = require('sequelize');
const keys = require('../config/keys');

// Access database and import sequelize models
const sequelize = new Sequelize(keys.database, keys.user, keys.password, {
  host: keys.host,
  dialect: 'mysql',
});
const Landlord = sequelize.import('../models/Landlord.js');

// for cookies
passport.serializeUser((user, done) => {
  done(null, user.landlord_id);
});

passport.deserializeUser((landlord_id, done) => {
  Landlord.findByPk(landlord_id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // check first if database already has a user with the given profile ID
      const existingUser = await Landlord.findOne({ where: { google_id: profile.id } });

      // we already have a record with the given profile ID
      // we are finished, done for google
      if (existingUser) {
        return done(null, existingUser);
      }
      // Create a new user
      const landlord = await Landlord.create({
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        email: profile.emails[0].value,
        google_id: profile.id,
        picture: profile.photos[0].value,
      });
      return done(null, landlord);
    }
  )
);
