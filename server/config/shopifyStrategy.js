'use strict';

var passport = require("passport");
var ShopifyStrategy = require("passport-shopify").Strategy;

passport.use(new ShopifyStrategy({
  clientID: process.env.SHOPIFY_CLIENTID,
  clientSecret: process.env.SHOPIFY_CLIENTSECRET,
  callbackURL: 'http://localhost:9000/auth/shopify/return',
  shop: 'producteca'
}, function(accessToken, refreshToken, profile, done) {
  console.log(accessToken);
  console.log(profile);
  return done(null, profile);
}));
