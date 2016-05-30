var request = require("request");
var should = require("should");
var expect = require("chai").expect;
var models = require('../../app/private/server/models/index');
var Sequelize = require('sequelize');

beforeEach(function(done) {
  models.Event.sync({ force : true }) // drops table and re-creates it
    .then(function() {
      done(null);
    })
    .catch(function(err) {
      console.log("Failed", err);
    });
});

describe('Adding to DB', function() {
  it('adds event to the database', function(done) {
    var newEvent = { title: 'New Event', date: '13/05/2016',time: '19:00' }
    models.Event
      .create(newEvent)
      .then(function() {
      models.Event.findAll().then(function(events) {
        expect(events.length).to.equal(1);
        done();
      });
    }).catch(function(err) {
      console.log("Failed", err);
    });
  });
});
