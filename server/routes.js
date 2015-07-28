/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var passport = require("passport");
require('./config/tiendanubeStrategy');
require('./config/shopifyStrategy');

module.exports = function(app) {
  // Insert routes below
  app.get('/auth/tiendanube', passport.authenticate('tiendanube'));
  app.get('/auth/tiendanube/return', passport.authenticate('tiendanube',{successRedirect: "/", failureRedirect: "/login"}));
  app.get('/auth/shopify', passport.authenticate('shopify', {scope: ['read_products','write_products']}));
  app.get('/auth/shopify/return', passport.authenticate('shopify',{successRedirect: "/", failureRedirect: "/login"}));

  app.use('/api/things', require('./api/thing'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
