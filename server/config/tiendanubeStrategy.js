'use strict';

var passport = require("passport");
var TiendaNubeStrategy = require("passport-tiendanube").Strategy;

passport.use(new TiendaNubeStrategy({
  clientID: 181,
  clientSecret: "1fQ78gGdo9ZakMu2PJ8mOx4ShExam22kzcthI6SJ5YOdDIcj",
  userAgent: 'Producteca (andres@parsimotion.com)'
}, function(accessToken, refreshToken, profile, done) {
  console.log(profile);
  return done(null, profile);
}));
