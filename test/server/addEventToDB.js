var request = require("request");
var should = require("should");
var expect = require("chai").expect;
var models = require('../../app/private/server/models/index');
var Sequelize = require('sequelize');

before(function(done) {
  models.Events.sync({ force : true }) // drops table and re-creates it
    .then(function() {
      done(null);
    })
    .catch(function() {
      console.log("Error");
    });
});

describe('Adding to DB', function() {

  it('should add an event to the database', function(done) {
    var newEvent = {title: 'New Event',
                    date: '13/05/2016',
                    time: '19:00'}
    models.Events.findOrCreate({
      where: newEvent
    }).then(function() {
      models.Events.findAll().then(function(events) {
        expect(events.length).to.equal(1);
        done();
      });
    }).catch(function() {
      console.log("Failed");
    });

  });
});
