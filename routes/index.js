var express = require('express');
var passport = require('passport');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var User = require('../models/user');
var Item = require('../models/item');


var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

router.get('/', ensureLoggedIn, function(req, res, next) {
  // console.log(req.user);
  console.log(ensureLoggedIn);
  res.render('index', { title: 'Express', env: env, user: req.user });
});

router.get('/login', function(req, res){
  res.render('login', { title: 'Express', env: env });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    // console.log(req.user);
    User.findOne({ auth_id: req.user.id }, function(err, user) {
      if (err) console.log(err);
      if (!user){
        var newUser = User({
          auth_id: req.user.id,
          nickname: req.user.nickname,
          givenName: req.user.name.givenName,
          familyName: req.user.name.familyName,
          picture: req.user.picture,
          email: req.user.emails[0].value,
        });
        newUser.save(function(err, user){
          if (err) console.log(err);
          res.redirect(req.session.returnTo || '/');
        });
      } else {
        res.redirect('/')
      }
    });
  });

router.post('/certs', ensureLoggedIn, function(req, res) {
  var newItem = new Item(req.body)
  newItem.userId = req.user.id
  newItem.save(function(err, item){
    if (err) console.log(err);
    res.json(item)
  });
});

router.get('/items', function(req, res, next) {
  Item.find({userId: req.user._id}, function(err, items){
    res.json(items);
  });
});

router.get('/email', function(req, res, next) {
  Item.find({givenName: req.user.givenName}, function(err, items){
    res.json(items);
  });
});


module.exports = router;
