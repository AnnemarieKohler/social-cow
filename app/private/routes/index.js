var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../server/models/index');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res) {
  console.log("Did the get route");
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
  });
});

module.exports = router;
