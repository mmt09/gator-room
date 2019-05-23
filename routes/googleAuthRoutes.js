const passport = require('passport');

module.exports = app => {
  // in short it just watches requests trying to access this route '/auth/google' and tells passport to authenticate with google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
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
