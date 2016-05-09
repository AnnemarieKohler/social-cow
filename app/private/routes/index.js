var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../server/models/index');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/sessions/new', function(req, res, next) {
  res.render('sessions');
});

router.get('/users/new', function(req, res, next) {
  res.render('users');
});

router.post('/users', function(req, res, next) {
  models.Users.findOrCreate({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  });
  next();
  res.redirect('/');
});

router.get('/events', function(req, res) {
  models.Events.findAll().then(function(events) {
    res.send(events);
  });
});

router.post('/events', function(req, res) {
  models.Events.findOrCreate({
    where: {
      title: req.body.title,
      date: req.body.date,
      time: req.body.time
    }
  }).then(function(response) {
    res.send('Done the post');
  });
});



module.exports = router;
