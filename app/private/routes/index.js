var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../server/models/index');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/sessions', function(req, res) {
  models.User.findAll({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(function(response) {
    res.send(response);
  });
});



router.post('/users', function(req, res) {
  return models.User.findOrCreate({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(function(response) {
    var userId = response[0].dataValues.id;
    var username = response[0].dataValues.username;
    console.log(response)
    res.status(200).send({id: userId, username: username});
    res.redirect('/');
  });
});

router.get('/events', function(req, res) {
  models.Event.findAll().then(function(events) {
    res.send(events);
  });
});

router.post('/events', function(req, res) {
  models.Event.findOrCreate({
    where: {
      title: req.body.title,
      date: req.body.date,
      time: req.body.time
    }
  }).then(function(response) {
    res.send('Done the post');
  });
});

router.get('/comments', function(req, res) {
  models.Comment.findAll({
    where: {
      EventId: req.query.eventid
    }
  }).then(function(response) {
    res.send(response);
  });
});

router.post('/comments', function(req, res) {
  models.Comment.create({
      body: req.body.body,
      UserId: req.body.userid,
      EventId: req.body.eventid
  }).then(function(response) {
    res.send('Done the comment');
  });
});

module.exports = router;
