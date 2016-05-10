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

router.post('/sessions', function(req, res) {
  models.Users.findAll({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(function(response) {
    res.send(response);
  });
});

router.post('/users', function(req, res) {
  models.Users.findOrCreate({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(function(response) {
    res.send('Redirected');
    res.redirect('/');
  });

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

router.post('/events/update', function(req, res) {
  var name = req.body.attendee;
  models.Users.findOne({where: {username: name }})
  .then(function(response) {
    updateAttendeesArray(response.id)
    .then(function(array) {
      models.Events.update({
        attendees: array
      },
      {
        where: { id: 2 }
      }).then(function(response) {
        res.send("Done attendee update");
      });
    });
  });
});

function updateAttendeesArray(id) {
    return models.Events.findById(2).then(function(response) {
      var attendeeArray = response.attendees;
      var indexOfId = attendeeArray.indexOf(id);
      if (indexOfId != -1){
        attendeeArray.splice(indexOfId,1);
        return attendeeArray;
      } else {
        attendeeArray.push(id);
        return attendeeArray;
      }
    });
}



module.exports = router;
