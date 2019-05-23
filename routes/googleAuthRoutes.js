const passport = require('passport');

module.exports = app => {
  // in short it just watches requests trying to access this route '/auth/google' and tells passport to authenticate with google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }), // complete the authenticate using the google strategy
    (err, req, res, next) => {
      // custom error handler to catch any errors, such as TokenError
      if (err.name === 'TokenError') {
        res.redirect('/auth/google'); // redirect them back to the login page
      } else {
        // Handle other errors here
        console.log(err);
      }
    },
    (req, res) => {
      // On success, redirect back to '/'
      res.redirect('/');
    }
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/LandlordPortal');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.post('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
