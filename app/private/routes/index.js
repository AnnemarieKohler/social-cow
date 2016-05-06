var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../app/private/server/models/index');
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
  console.log("Post exists");
});

module.exports = router;
