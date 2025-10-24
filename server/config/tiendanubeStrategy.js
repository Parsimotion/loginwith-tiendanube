'use strict';

var passport = require("passport");
var TiendaNubeStrategy = require("passport-tiendanube").Strategy;

passport.use(new TiendaNubeStrategy({
  clientID: 181,
  clientSecret: process.env.TIENDANUBE_CLIENTSECRET,
  userAgent: 'Producteca (andres@parsimotion.com)'
}, function(accessToken, refreshToken, profile, done) {
  console.log(profile);
  return done(null, profile);
}));
