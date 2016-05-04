var request = require("request");
var should = require("should");
var expect = require("chai").expect;
var models = require('../../../server/models/index')

describe('Adding to DB', function() {
  it('should add an event to the database', function(done) {
    var newEvent = {title: 'New Event2',
                    date: '13/05/2016',
                    time: '19:00'}
    models.Events.findOrCreate({
      where: newEvent
    }).then(function() {
      console.log("Running");
      models.Events.findAll().then(function(events) {
        console.log("Event: " + events);
        expect(events.length).to.equal(2);
        // console.log("Expectation");
        done();
      });
    }).catch(function() {
      console.log("Failed");
    });

  });
});
